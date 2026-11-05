import { describe, expect, it } from 'vitest';
import { APP_FIGURE, CYCLE, FIGURES, sampleFigure } from './figures';

/** 60 = celular (folga), 135 = desktop base, 225 = desktop alta densidade. */
const BUDGETS = [60, 135, 225] as const;

describe('figuras do wallpaper', () => {
  it('todo app aponta para uma figura do ciclo', () => {
    for (const id of Object.values(APP_FIGURE)) expect(CYCLE).toContain(id);
  });

  for (const id of CYCLE) {
    for (const n of BUDGETS) {
      it(`${id} com ${n} pontos: usa todos, sem traço órfão, sem aresta esticada`, () => {
        const s = sampleFigure(FIGURES[id], n, 0, 0, 100);
        expect(s.targets).toHaveLength(n);
        // Cada traço perde exatamente uma aresta (o início): nenhum ponto fica solto.
        expect(s.edges).toHaveLength(n - FIGURES[id].length);
        for (const [a, b] of s.edges) {
          const d = Math.hypot(s.targets[b].x - s.targets[a].x, s.targets[b].y - s.targets[a].y);
          // Mesmo critério do Wallpaper: acima de 1.3 × spacing o traço começa a sumir.
          expect(d).toBeLessThanOrEqual(s.spacing * 1.3);
        }
      });
    }
  }

  it('preserva os vértices explícitos (quinas e pontas de seta)', () => {
    const s = sampleFigure(FIGURES.ga, 135, 0, 0, 1);
    const has = (x: number, y: number) =>
      s.targets.some((t) => Math.abs(t.x - x) < 1e-9 && Math.abs(t.y - y) < 1e-9);
    for (const stroke of FIGURES.ga) for (const [x, y] of stroke) expect(has(x, y)).toBe(true);
  });
});
