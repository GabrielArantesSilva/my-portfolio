import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

const DENSITY = 14_000; // 1 partícula a cada N px² de tela
const MAX_PARTICLES = 110;
const LINK_DIST = 130;
const MOUSE_RADIUS = 170;

/** Campo de partículas atrás das janelas. Decorativo, nunca interativo. */
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
    const mouse = { x: -9999, y: -9999 };

    const seed = (i: number) => {
      // Determinístico: o fundo abre igual toda vez.
      const a = Math.sin(i * 12.9898) * 43758.5453;
      return a - Math.floor(a);
    };

    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(MAX_PARTICLES, Math.round((w * h) / DENSITY));
      particles = Array.from({ length: count }, (_, i) => ({
        x: seed(i * 2 + 1) * w,
        y: seed(i * 2 + 2) * h,
        vx: (seed(i * 3 + 7) - 0.5) * 0.22,
        vy: (seed(i * 3 + 11) - 0.5) * 0.22,
        r: 0.7 + seed(i * 5 + 3) * 1.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = q.x - p.x;
          const dy = q.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist > LINK_DIST) continue;
          ctx.strokeStyle = `rgba(167,139,250,${(1 - dist / LINK_DIST) * 0.13})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }

        const md = Math.hypot(mouse.x - p.x, mouse.y - p.y);
        const near = md < MOUSE_RADIUS ? 1 - md / MOUSE_RADIUS : 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + near * 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196,181,253,${0.2 + near * 0.55})`;
        ctx.fill();
      }
    };

    const repelFromMouse = (p: Particle) => {
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.hypot(dx, dy);
      if (dist >= MOUSE_RADIUS || dist <= 0.01) return;
      const push = (1 - dist / MOUSE_RADIUS) * 0.35;
      p.vx += (dx / dist) * push;
      p.vy += (dy / dist) * push;
    };

    const wrap = (value: number, limit: number) => {
      if (value < -20) return limit + 20;
      if (value > limit + 20) return -20;
      return value;
    };

    const move = () => {
      for (const p of particles) {
        repelFromMouse(p);
        p.vx *= 0.97;
        p.vy *= 0.97;
        p.x = wrap(p.x + p.vx, w);
        p.y = wrap(p.y + p.vy, h);
      }
    };

    const onPointer = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    window.addEventListener('resize', resize);

    if (still) {
      draw();
      return () => window.removeEventListener('resize', resize);
    }

    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('pointerleave', onLeave);

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
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('pointerleave', onLeave);
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
