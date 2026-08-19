import { useCallback, useState } from 'react';

export interface WinState {
  readonly id: string;
  readonly z: number;
  readonly minimized: boolean;
  /** Deslocamento em relação à posição de repouso do app, em px. */
  readonly dx: number;
  readonly dy: number;
}

export interface WindowManager {
  windows: readonly WinState[];
  // harness-ok: consulta, não comando — mesma assinatura de open() por coincidência de forma
  isOpen: (id: string) => boolean;
  isMinimized: (id: string) => boolean;
  zOf: (id: string) => number;
  open: (id: string) => void;
  close: (id: string) => void;
  toggle: (id: string) => void;
  minimize: (id: string) => void;
  focus: (id: string) => void;
  moveBy: (id: string, dx: number, dy: number) => void;
  /** Volta ao conjunto e às posições de fábrica. */
  reset: () => void;
  topmost: string | null;
}

const factory = (initial: readonly string[]): WinState[] =>
  initial.map((id, i) => ({ id, z: i + 1, minimized: false, dx: 0, dy: 0 }));

export function useWindows(initial: readonly string[] = []): WindowManager {
  const [windows, setWindows] = useState<readonly WinState[]>(() => factory(initial));

  const reset = useCallback(() => setWindows(factory(initial)), [initial]);

  const nextZ = useCallback(
    (list: readonly WinState[]) => list.reduce((max, w) => Math.max(max, w.z), 0) + 1,
    []
  );

  const open = useCallback(
    (id: string) => {
      setWindows((list) => {
        const found = list.find((w) => w.id === id);
        if (found) {
          return list.map((w) =>
            w.id === id ? { ...w, minimized: false, z: nextZ(list) } : w
          );
        }
        return [...list, { id, z: nextZ(list), minimized: false, dx: 0, dy: 0 }];
      });
    },
    [nextZ]
  );

  const close = useCallback((id: string) => {
    setWindows((list) => list.filter((w) => w.id !== id));
  }, []);

  const minimize = useCallback((id: string) => {
    setWindows((list) => list.map((w) => (w.id === id ? { ...w, minimized: true } : w)));
  }, []);

  const focus = useCallback(
    (id: string) => {
      setWindows((list) => {
        const found = list.find((w) => w.id === id);
        if (!found || found.z === nextZ(list) - 1) return list;
        return list.map((w) => (w.id === id ? { ...w, z: nextZ(list) } : w));
      });
    },
    [nextZ]
  );

  const toggle = useCallback(
    (id: string) => {
      setWindows((list) => {
        const found = list.find((w) => w.id === id);
        if (!found) return [...list, { id, z: nextZ(list), minimized: false, dx: 0, dy: 0 }];
        if (found.minimized) {
          return list.map((w) => (w.id === id ? { ...w, minimized: false, z: nextZ(list) } : w));
        }
        return list.map((w) => (w.id === id ? { ...w, minimized: true } : w));
      });
    },
    [nextZ]
  );

  const moveBy = useCallback((id: string, dx: number, dy: number) => {
    setWindows((list) =>
      list.map((w) => (w.id === id ? { ...w, dx: w.dx + dx, dy: w.dy + dy } : w))
    );
  }, []);

  const visible = windows.filter((w) => !w.minimized);
  const topmost =
    visible.length > 0
      ? visible.reduce((top, w) => (w.z > top.z ? w : top), visible[0]).id
      : null;

  return {
    windows,
    isOpen: (id) => windows.some((w) => w.id === id),
    isMinimized: (id) => windows.some((w) => w.id === id && w.minimized),
    zOf: (id) => windows.find((w) => w.id === id)?.z ?? 0,
    open,
    close,
    toggle,
    minimize,
    focus,
    moveBy,
    reset,
    topmost,
  };
}
