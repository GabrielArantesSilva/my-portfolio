import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { CYCLE, FIGURES, sampleFigure } from './figures';
import type { FigureId } from './figures';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  /** Velocidade de deriva própria: a partícula sempre volta a ela. */
  dx: number;
  dy: number;
  r: number;
  baseR: number;
  phase: number;
  /** Alvo na figura atual; null quando está só flutuando. */
  tx: number | null;
  ty: number | null;
}

const DENSITY = 9_000; // 1 partícula a cada N px² de tela
const MAX_PARTICLES = 160;
/** Piso no celular: com menos que isso as figuras perdem o desenho (o G vira polígono). */
const MIN_PARTICLES = 75;
const LINK_DIST = 110;
const LINK_DIST_SQ = LINK_DIST * LINK_DIST;
/** Raio de influência do ponteiro: o dedo é maior e menos preciso que o mouse. */
const MOUSE_RADIUS = 150;
const TOUCH_RADIUS = 190;

/** Passo fixo da física (60 Hz) e o máximo de passos recuperados num frame. */
const STEP_MS = 1000 / 60;
const MAX_STEPS = 4;

/** Tempos do ciclo de figuras no modo tela limpa, em ms. */
const FIRST_FORM_DELAY = 350;
const HOLD_MS = 8_000;
const DRIFT_MS = 3_000;
/** Depois de um toque espalhar tudo, quanto tempo até a próxima figura se montar. */
const SCATTER_MS = 3_000;
/** Velocidade inicial (px/frame) do estouro do toque, perto do dedo. */
const SCATTER_FORCE = 10;

/**
 * Mola macia e pouco atrito: chega com um leve balanço em vez de travar no lugar.
 * (ζ ≈ 0,5: subamortecido de propósito.)
 */
const SPRING = 0.007;
const FORM_DAMPING = 0.92;
/** Quanto a figura montada "respira" em volta do alvo, em px. */
const WOBBLE = 2.5;
/** Tamanho da figura relativo ao menor lado da área de conteúdo. */
const FIGURE_SCALE = 0.28;
/** Quantas partículas ficam fora da figura, no máximo. */
const FREE_PARTICLES = 25;

/**
 * Wallpaper interativo de alta performance.
 * Malha de partículas conectadas que flutuam sozinhas e fogem do ponteiro.
 * Com `shapes` (modo tela limpa), uma força de mola puxa as partículas para
 * montar figuras; o ponteiro ainda empurra, e a mola puxa de volta.
 * `figure` é a primeira figura de cada vez que a tela limpa abre (a do app em foco).
 */
export function Wallpaper({
  shapes = false,
  figure: startFigure = 'ga',
}: {
  shapes?: boolean;
  figure?: FigureId;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const still = useReducedMotion() ?? false;
  const shapesRef = useRef(shapes);
  const startRef = useRef(startFigure);

  useEffect(() => {
    shapesRef.current = shapes;
    startRef.current = startFigure;
  }, [shapes, startFigure]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    const pointer = { x: -9999, y: -9999, active: false, radius: MOUSE_RADIUS };

    // Estado das figuras
    let figure = -1;
    /** Próxima formação abre com a figura do app, não a seguinte do ciclo. */
    let fromStart = true;
    let edges: [number, number][] = [];
    let spacing = 0;
    let forming = false;
    /** 0..1: quanto a figura está "ligada". Anima suave entre fases. */
    let strength = 0;
    let nextSwitch = 0;

    const seed = (i: number) => {
      const a = Math.sin(i * 12.9898) * 43758.5453;
      return a - Math.floor(a);
    };

    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(MAX_PARTICLES, Math.max(MIN_PARTICLES, Math.round((w * h) / DENSITY)));
      particles = Array.from({ length: count }, (_, i) => {
        const r = 0.8 + seed(i * 5 + 3) * 1.4;
        const dx = (seed(i * 3 + 7) - 0.5) * 0.4;
        const dy = (seed(i * 3 + 11) - 0.5) * 0.4;
        return {
          x: seed(i * 2 + 1) * w,
          y: seed(i * 2 + 2) * h,
          vx: dx,
          vy: dy,
          dx,
          dy,
          r,
          baseR: r,
          phase: seed(i * 7 + 5) * Math.PI * 2,
          tx: null,
          ty: null,
        };
      });
      // Partículas novas não têm alvo: recomeça o ciclo do zero.
      forming = false;
      edges = [];
      nextSwitch = performance.now() + FIRST_FORM_DELAY;
    };

    /** Onde começa a área de conteúdo: no desktop a sidebar é o padding esquerdo do <main>. */
    const contentLeft = () => {
      const host = canvas.parentElement;
      return host ? parseFloat(getComputedStyle(host).paddingLeft) || 0 : 0;
    };

    /** Liga a próxima figura: amostra alvos e casa cada um com a partícula livre mais perto. */
    const formNext = () => {
      figure = fromStart ? Math.max(0, CYCLE.indexOf(startRef.current)) : (figure + 1) % CYCLE.length;
      fromStart = false;
      // Algumas ficam de fora, flutuando: o fundo não esvazia enquanto a figura aparece.
      const loose = Math.min(FREE_PARTICLES, Math.round(particles.length * 0.2));
      const left = contentLeft();
      const sampled = sampleFigure(
        FIGURES[CYCLE[figure]],
        particles.length - loose,
        left + (w - left) / 2,
        h / 2,
        Math.min(w - left, h) * FIGURE_SCALE
      );
      for (const p of particles) {
        p.tx = null;
        p.ty = null;
      }
      const free = new Set(particles.keys());
      const owner: number[] = [];
      for (const t of sampled.targets) {
        let best = -1;
        let bestD = Infinity;
        for (const i of free) {
          const d = (particles[i].x - t.x) ** 2 + (particles[i].y - t.y) ** 2;
          if (d < bestD) {
            bestD = d;
            best = i;
          }
        }
        free.delete(best);
        owner.push(best);
        particles[best].tx = t.x;
        particles[best].ty = t.y;
      }
      // Arestas da figura passam a apontar para partículas, não para alvos.
      edges = sampled.edges.map(([a, b]) => [owner[a], owner[b]]);
      spacing = sampled.spacing;
      forming = true;
      nextSwitch = performance.now() + HOLD_MS;
    };

    /** Solta a figura com um empurrão leve, para ela se desfazer em vez de congelar. */
    const release = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.tx = null;
        p.ty = null;
        p.vx += (seed(i * 13 + figure) - 0.5) * 0.9;
        p.vy += (seed(i * 17 + figure) - 0.5) * 0.9;
      }
      forming = false;
      nextSwitch = performance.now() + DRIFT_MS;
    };

    /**
     * Toque no fundo: estoura a figura a partir do dedo (o mesmo empurrão do
     * ponteiro, só que forte e em todas) e agenda a próxima figura.
     */
    const scatter = (x: number, y: number) => {
      const reach = Math.max(w, h) * 0.6;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.tx = null;
        p.ty = null;
        let dx = p.x - x;
        let dy = p.y - y;
        let d = Math.hypot(dx, dy);
        if (d < 0.5) {
          // Em cima do dedo: sai num ângulo qualquer.
          const a = seed(i * 19) * Math.PI * 2;
          dx = Math.cos(a);
          dy = Math.sin(a);
          d = 1;
        }
        const falloff = 0.35 + 0.65 * Math.max(0, 1 - d / reach);
        const jitter = 0.7 + seed(i * 23 + figure) * 0.6;
        const impulse = SCATTER_FORCE * falloff * jitter;
        p.vx += (dx / d) * impulse;
        p.vy += (dy / d) * impulse;
      }
      forming = false;
      fromStart = false;
      nextSwitch = performance.now() + SCATTER_MS;
    };

    const updateCycle = (now: number) => {
      if (!shapesRef.current) {
        if (forming) release();
        nextSwitch = now + FIRST_FORM_DELAY;
        fromStart = true;
        return;
      }
      if (now < nextSwitch) return;
      if (forming) release();
      else formNext();
    };

    const drawGrid = () => {
      const step = 36;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      for (let x = 18; x < w; x += step) {
        for (let y = 18; y < h; y += step) {
          ctx.beginPath();
          ctx.arc(x, y, 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const repelFromPointer = (p: Particle) => {
      if (!pointer.active) return;
      const dx = p.x - pointer.x;
      const dy = p.y - pointer.y;
      const dist = Math.hypot(dx, dy);
      if (dist >= pointer.radius || dist <= 0.01) return;
      const push = (1 - dist / pointer.radius) * 0.45;
      p.vx += (dx / dist) * push;
      p.vy += (dy / dist) * push;
    };

    const wrap = (val: number, max: number) => {
      if (val < -20) return max + 20;
      if (val > max + 20) return -20;
      return val;
    };

    let tick = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Grid técnico sutil
      drawGrid();

      // Gradiente suave de profundidade
      const grad = ctx.createRadialGradient(w / 2, h / 2, 40, w / 2, h / 2, Math.max(w, h) * 0.7);
      grad.addColorStop(0, 'rgba(56, 189, 248, 0.025)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Com a figura ligada, a malha genérica recua para os traços dela aparecerem.
      const meshAlpha = 0.16 * (1 - strength * 0.8);

      // Atualiza e desenha partículas
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Conexões entre partículas vizinhas
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = q.x - p.x;
          const dy = q.y - p.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > LINK_DIST_SQ) continue;
          const dist = Math.sqrt(distSq);

          const alpha = (1 - dist / LINK_DIST) * meshAlpha;
          ctx.strokeStyle = `rgba(125, 211, 252, ${alpha})`;
          ctx.lineWidth = 0.55;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }

        // Interação com cursor ou toque
        const md = Math.hypot(pointer.x - p.x, pointer.y - p.y);
        const near = pointer.active && md < pointer.radius ? 1 - md / pointer.radius : 0;

        // Pulso suave
        const pulse = Math.sin(tick + p.phase) * 0.3;
        const lit = p.tx !== null ? strength : 0;
        const currentR = p.baseR + pulse + near * 1.4 + lit * 0.6;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.4, currentR), 0, Math.PI * 2);
        ctx.fillStyle = near > 0
          ? `rgba(56, 189, 248, ${0.4 + near * 0.5})`
          : `rgba(186, 230, 253, ${0.22 + pulse * 0.08 + lit * 0.5})`;
        ctx.fill();
      }

      // Traços da figura: somem quando o par é esticado (pelo ponteiro, ou ao se desfazer).
      if (strength > 0.01 && spacing > 0) {
        ctx.lineWidth = 1.2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        for (const [a, b] of edges) {
          const p = particles[a];
          const q = particles[b];
          if (!p || !q) continue;
          const d = Math.hypot(q.x - p.x, q.y - p.y);
          const taut = Math.max(0, Math.min(1, 1 - (d - spacing * 1.3) / (spacing * 2)));
          const alpha = strength * taut * 0.65;
          if (alpha < 0.01) continue;
          ctx.strokeStyle = `rgba(125, 211, 252, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    };

    const move = () => {
      tick += 0.015;
      strength += ((forming ? 1 : 0) - strength) * 0.04;

      for (const p of particles) {
        repelFromPointer(p);
        if (p.tx !== null && p.ty !== null) {
          // Puxão de mola até o alvo, que oscila de leve: a figura respira.
          const k = SPRING * strength;
          const damp = 1 - (1 - FORM_DAMPING) * strength;
          const ox = Math.sin(tick * 1.3 + p.phase) * WOBBLE;
          const oy = Math.cos(tick * 1.1 + p.phase * 1.7) * WOBBLE;
          p.vx = (p.vx + (p.tx + ox - p.x) * k) * damp;
          p.vy = (p.vy + (p.ty + oy - p.y) * k) * damp;
        } else {
          // Volta à deriva própria: rápido quando vem de um estouro, devagar no resto.
          // Assim o empurrão dura e o movimento fica solto, sem sair voando pela tela.
          const fast = Math.abs(p.vx) + Math.abs(p.vy) > 2;
          const relax = fast ? 0.04 : 0.008;
          p.vx += (p.dx - p.vx) * relax;
          p.vy += (p.dy - p.vy) * relax;
        }
        p.x = wrap(p.x + p.vx, w);
        p.y = wrap(p.y + p.vy, h);
      }
    };

    let upTimer = 0;
    const track = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
      pointer.radius = e.pointerType === 'touch' ? TOUCH_RADIUS : MOUSE_RADIUS;
    };

    const onPointerMove = (e: PointerEvent) => track(e);

    const onPointerDown = (e: PointerEvent) => {
      track(e);
      window.clearTimeout(upTimer);
      // Toque no fundo da tela limpa estoura a figura (botões e links não contam).
      const onControl = (e.target as Element | null)?.closest?.('button, a, input, textarea');
      if (shapesRef.current && !onControl) scatter(e.clientX, e.clientY);
    };

    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      pointer.active = false;
    };

    // No touch screen, desativa suavemente o ponteiro após soltar
    const onPointerUp = () => {
      window.clearTimeout(upTimer);
      upTimer = window.setTimeout(() => {
        pointer.active = false;
      }, 400);
    };

    resize();
    window.addEventListener('resize', resize);

    if (still) {
      draw();
      return () => window.removeEventListener('resize', resize);
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('pointerup', onPointerUp);
    // O navegador cancela o toque quando assume o gesto (rolagem): solta igual.
    window.addEventListener('pointercancel', onPointerUp);

    // Física em passo fixo de 60 Hz: no celular lento roda mais de um passo por
    // frame, numa tela de 120 Hz pula frames. O tempo das figuras é o mesmo em todo lugar.
    let raf = 0;
    let last = 0;
    let acc = 0;
    const loop = (now: number) => {
      // Aba em segundo plano volta com um dt enorme: limita para não "pular" a animação.
      acc += last ? Math.min(now - last, 100) : STEP_MS;
      last = now;
      updateCycle(now);
      let steps = 0;
      while (acc >= STEP_MS && steps < MAX_STEPS) {
        move();
        acc -= STEP_MS;
        steps++;
      }
      if (steps === MAX_STEPS) acc = 0;
      draw();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(upTimer);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, [still]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
