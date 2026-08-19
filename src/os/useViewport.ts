import { useCallback, useEffect, useRef, useState } from 'react';

export interface Viewport {
  x: number;
  y: number;
}

const EASE_MS = 520;

/**
 * Câmera do desktop infinito. As janelas vivem em coordenadas de mundo;
 * a viewport translada por cima.
 *
 * Espaço infinito viola "reconhecer em vez de lembrar" (Nielsen): dá para se
 * perder e não achar o caminho de volta. Por isso existe panTo/reset — todo
 * caminho de volta é um clique, nunca uma caçada.
 */
export function useViewport() {
  const [pan, setPan] = useState<Viewport>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const animRef = useRef(0);
  const origin = useRef<{ px: number; py: number; x: number; y: number } | null>(null);

  const stopAnim = useCallback(() => cancelAnimationFrame(animRef.current), []);

  /** Move a câmera suavemente até um ponto de mundo ficar visível. */
  const panTo = useCallback(
    (target: Viewport) => {
      stopAnim();
      const start = performance.now();
      let from: Viewport | null = null;

      const tick = (now: number) => {
        setPan((current) => {
          from ??= current;
          const t = Math.min(1, (now - start) / EASE_MS);
          const e = 1 - (1 - t) ** 3;
          return {
            x: from.x + (target.x - from.x) * e,
            y: from.y + (target.y - from.y) * e,
          };
        });
        if (now - start < EASE_MS) animRef.current = requestAnimationFrame(tick);
      };

      animRef.current = requestAnimationFrame(tick);
    },
    [stopAnim]
  );

  const reset = useCallback(() => panTo({ x: 0, y: 0 }), [panTo]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      // Só arrasta quando o alvo é o próprio fundo, nunca uma janela.
      if (e.target !== e.currentTarget) return;
      stopAnim();
      origin.current = { px: e.clientX, py: e.clientY, x: pan.x, y: pan.y };
      setDragging(true);
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    },
    [pan.x, pan.y, stopAnim]
  );

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const from = origin.current;
    if (!from) return;
    setPan({ x: from.x + (e.clientX - from.px), y: from.y + (e.clientY - from.py) });
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!origin.current) return;
    origin.current = null;
    setDragging(false);
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  }, []);

  useEffect(() => () => cancelAnimationFrame(animRef.current), []);

  return { pan, dragging, panTo, reset, onPointerDown, onPointerMove, onPointerUp };
}
