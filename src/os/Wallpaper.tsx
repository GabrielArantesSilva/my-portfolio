import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseR: number;
  phase: number;
}

const DENSITY = 16_000; // 1 partícula a cada N px² de tela
const MAX_PARTICLES = 95;
const LINK_DIST = 125;
const MOUSE_RADIUS = 150;

/**
 * Wallpaper interativo de alta performance.
 * Renderiza um grid de precisão e uma malha de partículas conectadas
 * que flutuam de forma autônoma e reagem ao mouse (desktop) e toque (mobile).
 */
export function Wallpaper() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const still = useReducedMotion() ?? false;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    const pointer = { x: -9999, y: -9999, active: false };

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

      const count = Math.min(MAX_PARTICLES, Math.max(28, Math.round((w * h) / DENSITY)));
      particles = Array.from({ length: count }, (_, i) => {
        const r = 0.8 + seed(i * 5 + 3) * 1.4;
        return {
          x: seed(i * 2 + 1) * w,
          y: seed(i * 2 + 2) * h,
          vx: (seed(i * 3 + 7) - 0.5) * 0.28,
          vy: (seed(i * 3 + 11) - 0.5) * 0.28,
          r,
          baseR: r,
          phase: seed(i * 7 + 5) * Math.PI * 2,
        };
      });
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
      if (dist >= MOUSE_RADIUS || dist <= 0.01) return;
      const push = (1 - dist / MOUSE_RADIUS) * 0.45;
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

      tick += 0.015;

      // Atualiza e desenha partículas
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Conexões entre partículas vizinhas
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = q.x - p.x;
          const dy = q.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist > LINK_DIST) continue;

          const alpha = (1 - dist / LINK_DIST) * 0.16;
          ctx.strokeStyle = `rgba(125, 211, 252, ${alpha})`;
          ctx.lineWidth = 0.55;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }

        // Interação com cursor ou toque
        const md = Math.hypot(pointer.x - p.x, pointer.y - p.y);
        const near = pointer.active && md < MOUSE_RADIUS ? 1 - md / MOUSE_RADIUS : 0;

        // Pulso suave
        const pulse = Math.sin(tick + p.phase) * 0.3;
        const currentR = p.baseR + pulse + near * 1.4;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.4, currentR), 0, Math.PI * 2);
        ctx.fillStyle = near > 0
          ? `rgba(56, 189, 248, ${0.4 + near * 0.5})`
          : `rgba(186, 230, 253, ${0.22 + pulse * 0.08})`;
        ctx.fill();
      }
    };

    const move = () => {
      for (const p of particles) {
        repelFromPointer(p);
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x = wrap(p.x + p.vx, w);
        p.y = wrap(p.y + p.vy, h);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };

    const onPointerDown = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };

    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      pointer.active = false;
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
    window.addEventListener('pointerup', () => {
      // No touch screen, desativa suavemente o ponteiro após soltar
      setTimeout(() => { pointer.active = false; }, 400);
    });

    let raf = 0;
    const loop = () => {
      move();
      draw();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerleave', onPointerLeave);
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
