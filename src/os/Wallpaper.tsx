import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/** Fundo técnico sutil estilo console de engenharia (dot grid & micro partículas neutras) */
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

    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, w, h);

      // Grid sutil de pontos (estilo Linear/GitHub)
      const step = 32;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';

      for (let x = 16; x < w; x += step) {
        for (let y = 16; y < h; y += step) {
          ctx.beginPath();
          ctx.arc(x, y, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Gradiente radial sutil no centro para dar profundidade sem neon
      const grad = ctx.createRadialGradient(w / 2, h / 2, 80, w / 2, h / 2, Math.max(w, h) * 0.75);
      grad.addColorStop(0, 'rgba(56, 189, 248, 0.015)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    };

    resize();
    drawGrid();

    window.addEventListener('resize', () => {
      resize();
      drawGrid();
    });

    return () => {
      window.removeEventListener('resize', resize);
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
