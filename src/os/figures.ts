/**
 * Figuras que as partículas do Wallpaper montam no modo tela limpa.
 *
 * Cada figura é uma lista de traços; cada traço, uma polilinha em coordenadas
 * normalizadas ([-1, 1], y para baixo). O Wallpaper escala pelo menor lado da
 * tela e centraliza.
 */
type Pt = readonly [number, number];
type Stroke = readonly Pt[];

const hexagon = (r: number): Pt[] =>
  Array.from({ length: 7 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return [Math.cos(a) * r, Math.sin(a) * r];
  });

const brace = (dir: 1 | -1): Stroke =>
  (
    [
      [0.3, -0.8],
      [0.5, -0.7],
      [0.5, -0.15],
      [0.75, 0],
      [0.5, 0.15],
      [0.5, 0.7],
      [0.3, 0.8],
    ] as const
  ).map(([x, y]) => [x * dir, y]);

export const FIGURES: readonly (readonly Stroke[])[] = [
  // </>
  [
    [[-0.35, -0.55], [-0.95, 0], [-0.35, 0.55]],
    [[0.2, -0.75], [-0.2, 0.75]],
    [[0.35, -0.55], [0.95, 0], [0.35, 0.55]],
  ],
  // >_
  [
    [[-0.8, -0.5], [-0.2, 0], [-0.8, 0.5]],
    [[0.05, 0.5], [0.85, 0.5]],
  ],
  // grafo hexagonal: o "cérebro"
  [hexagon(0.9), ...hexagon(0.9).slice(0, 6).map((p): Stroke => [[0, 0], p])],
  // { }
  [brace(-1), brace(1)],
];

export interface Sampled {
  /** Alvos em px, já escalados e centralizados. */
  targets: { x: number; y: number }[];
  /** Pares de índices de alvos vizinhos no mesmo traço: viram os traços desenhados. */
  edges: [number, number][];
  /** Distância esperada entre vizinhos, em px. */
  spacing: number;
}

const segLen = (a: Pt, b: Pt) => Math.hypot(b[0] - a[0], b[1] - a[1]);

/**
 * Distribui `n` pontos igualmente espaçados ao longo de todos os traços.
 * Pontos consecutivos no mesmo traço ganham uma aresta.
 */
export function sampleFigure(
  figure: readonly Stroke[],
  n: number,
  cx: number,
  cy: number,
  scale: number
): Sampled {
  const lengths = figure.map((s) => s.slice(1).reduce((acc, p, i) => acc + segLen(s[i], p), 0));
  const total = lengths.reduce((a, b) => a + b, 0);
  const step = total / n;

  const targets: Sampled['targets'] = [];
  const edges: Sampled['edges'] = [];
  const strokeOf: number[] = [];

  for (let k = 0; k < n; k++) {
    let d = (k + 0.5) * step;
    let si = 0;
    while (si < figure.length - 1 && d > lengths[si]) d -= lengths[si++];
    const stroke = figure[si];

    let px = stroke[stroke.length - 1][0];
    let py = stroke[stroke.length - 1][1];
    for (let i = 1; i < stroke.length; i++) {
      const l = segLen(stroke[i - 1], stroke[i]);
      if (d <= l) {
        const t = l === 0 ? 0 : d / l;
        px = stroke[i - 1][0] + (stroke[i][0] - stroke[i - 1][0]) * t;
        py = stroke[i - 1][1] + (stroke[i][1] - stroke[i - 1][1]) * t;
        break;
      }
      d -= l;
    }

    targets.push({ x: cx + px * scale, y: cy + py * scale });
    if (k > 0 && strokeOf[k - 1] === si) edges.push([k - 1, k]);
    strokeOf.push(si);
  }

  return { targets, edges, spacing: step * scale };
}
