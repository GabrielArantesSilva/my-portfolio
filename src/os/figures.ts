/**
 * Figuras que as partículas do Wallpaper montam no modo tela limpa.
 *
 * Cada figura é uma coleção de traços normalizados em [-1, 1] (y para baixo).
 * Design minimalista, geométrico, refinado e com estética de engenharia de software.
 */
export type Pt = readonly [number, number];
export type Stroke = readonly Pt[];

const segLen = (a: Pt, b: Pt) => Math.hypot(b[0] - a[0], b[1] - a[1]);

const polygon = (sides: number, r: number, rot = -Math.PI / 2): Pt[] =>
  Array.from({ length: sides + 1 }, (_, i) => {
    const a = ((Math.PI * 2) / sides) * i + rot;
    return [
      Number((Math.cos(a) * r).toFixed(4)),
      Number((Math.sin(a) * r).toFixed(4)),
    ];
  });

/**
 * Monograma G A — Design arquitetural, geométrico e de alta precisão.
 * Ambos os caracteres compartilham proporção áurea e a mesma linha de centro (y = 0.04).
 */
const letterG: Stroke = [
  [-0.18, -0.68],
  [-0.56, -0.68],
  [-0.84, -0.38],
  [-0.84, 0.38],
  [-0.56, 0.68],
  [-0.18, 0.68],
  [-0.18, 0.04],
  [-0.48, 0.04],
];

const letterA_body: Stroke = [
  [0.18, 0.68],
  [0.44, -0.68],
  [0.58, -0.68],
  [0.84, 0.68],
];

const letterA_bar: Stroke = [
  [0.29, 0.04],
  [0.73, 0.04],
];

/**
 * Chaves matemáticas { }
 */
const brace = (dir: 1 | -1): Stroke =>
  (
    [
      [0.24, -0.80],
      [0.48, -0.74],
      [0.48, -0.16],
      [0.74, 0],
      [0.48, 0.16],
      [0.48, 0.74],
      [0.24, 0.80],
    ] as const
  ).map(([x, y]) => [Number((x * dir).toFixed(4)), y]);

/**
 * Cubo Isométrico 3D (Design de Sistemas & Infraestrutura)
 */
const cube3D: readonly Stroke[] = [
  // Losango superior
  [[0, -0.82], [0.68, -0.42], [0, -0.02], [-0.68, -0.42], [0, -0.82]],
  // Eixo vertical central frontal
  [[0, -0.02], [0, 0.78]],
  // Face esquerda
  [[-0.68, -0.42], [-0.68, 0.38], [0, 0.78]],
  // Face direita
  [[0.68, -0.42], [0.68, 0.38], [0, 0.78]],
];

/**
 * Órbitas Atômicas / React (Núcleo com elipses orbitais suaves)
 */
const orbitalEllipse = (angle: number): Stroke => {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const rx = 0.86;
  const ry = 0.32;
  const steps = 18;
  const pts: Pt[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (Math.PI * 2 * i) / steps;
    const px = Math.cos(t) * rx;
    const py = Math.sin(t) * ry;
    pts.push([
      Number((px * cos - py * sin).toFixed(4)),
      Number((px * sin + py * cos).toFixed(4)),
    ]);
  }
  return pts;
};

const FIGURE_SHAPES = {
  // As iniciais: Monograma limpo, arquitetural e simétrico
  ga: [letterG, letterA_body, letterA_bar],

  // Símbolo de código </>
  code: [
    [[-0.34, -0.55], [-0.88, 0], [-0.34, 0.55]],
    [[0.18, -0.74], [-0.18, 0.74]],
    [[0.34, -0.55], [0.88, 0], [0.34, 0.55]],
  ],

  // Cubo Isométrico 3D
  cube: cube3D,

  // Átomo / React & Core Engineering
  atom: [
    orbitalEllipse(Math.PI / 6),
    orbitalEllipse(-Math.PI / 6),
    polygon(10, 0.14),
  ],

  // Janela de terminal com prompt > e cursor
  terminal: [
    [[-0.92, -0.65], [0.92, -0.65], [0.92, 0.65], [-0.92, 0.65], [-0.92, -0.65]],
    [[-0.92, -0.38], [0.92, -0.38]],
    [[-0.65, -0.12], [-0.35, 0.12], [-0.65, 0.36]],
    [[-0.15, 0.36], [0.35, 0.36]],
  ],

  // Grafo hexagonal cristalino (Segundo Cérebro / Obsidian Vault)
  brain: [
    polygon(6, 0.86),
    polygon(6, 0.42),
    [[0, -0.86], [0, 0.86]],
    [[-0.7448, -0.43], [0.7448, 0.43]],
    [[-0.7448, 0.43], [0.7448, -0.43]],
  ],

  // Chaves { }
  braces: [brace(-1), brace(1)],

  // Batimento / Pulso de atividade em tempo real
  pulse: [
    [
      [-0.96, 0.08],
      [-0.45, 0.08],
      [-0.30, -0.22],
      [-0.14, 0.52],
      [0.08, -0.74],
      [0.26, 0.34],
      [0.40, 0.08],
      [0.96, 0.08],
    ],
  ],

  // Camadas de arquitetura empilhadas (Stack & Tecnologias)
  layers: [
    [[0, -0.76], [0.84, -0.36], [0, 0.04], [-0.84, -0.36], [0, -0.76]],
    [[-0.84, 0.02], [0, 0.42], [0.84, 0.02]],
    [[-0.84, 0.38], [0, 0.78], [0.84, 0.38]],
  ],

  // Documento técnico com dobra de página (Currículo)
  document: [
    [[-0.55, -0.82], [0.22, -0.82], [0.55, -0.49], [0.55, 0.82], [-0.55, 0.82], [-0.55, -0.82]],
    [[0.22, -0.82], [0.22, -0.49], [0.55, -0.49]],
    [[-0.32, -0.18], [0.32, -0.18]],
    [[-0.32, 0.12], [0.32, 0.12]],
    [[-0.32, 0.42], [0.08, 0.42]],
  ],

  // Avião de papel minimalista (Requests & Comunicação)
  plane: [
    [[-0.90, -0.12], [0.90, -0.78], [0.32, 0.82], [0.02, 0.18], [-0.90, -0.12]],
    [[0.02, 0.18], [0.90, -0.78]],
  ],

  // Envelope com aba dobrada (Contato)
  envelope: [
    [[-0.90, -0.62], [0.90, -0.62], [0.90, 0.62], [-0.90, 0.62], [-0.90, -0.62]],
    [[-0.90, -0.62], [0, 0.12], [0.90, -0.62]],
  ],
} satisfies Record<string, readonly Stroke[]>;

export type FigureId = keyof typeof FIGURE_SHAPES;
export const FIGURES: Readonly<Record<FigureId, readonly Stroke[]>> = FIGURE_SHAPES;

/** Ordem de exibição no modo tela limpa */
export const CYCLE: readonly FigureId[] = [
  'ga',
  'code',
  'cube',
  'pulse',
  'brain',
  'layers',
  'atom',
  'document',
  'plane',
  'envelope',
  'terminal',
  'braces',
];

/** Figura inicial associada a cada aba/aplicação */
export const APP_FIGURE: Readonly<Record<string, FigureId>> = {
  sobre: 'ga',
  trabalho: 'code',
  agora: 'pulse',
  cerebro: 'brain',
  stack: 'layers',
  curriculo: 'document',
  pedidos: 'plane',
  contato: 'envelope',
};

export interface Sampled {
  targets: { x: number; y: number }[];
  edges: [number, number][];
  spacing: number;
}

/**
 * Amostragem por comprimento de arco usada como fallback se n for menor que os vértices.
 */
function sampleByArcLength(
  figure: readonly Stroke[],
  n: number,
  cx: number,
  cy: number,
  scale: number
): Sampled {
  const lengths = figure.map((s) => s.slice(1).reduce((acc, p, i) => acc + segLen(s[i], p), 0));
  const total = lengths.reduce((a, b) => a + b, 0);
  const step = total / Math.max(1, n);

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

/**
 * Distribui exatamente `n` pontos ao longo dos traços:
 * - Preserva 100% dos vértices explícitos (quinas vivas, serifas, pontas de seta).
 * - Subdivide os segmentos proporcionalmente ao seu comprimento.
 * - Garante que cada traço é contínuo, sem arestas órfãs ou esticadas.
 */
export function sampleFigure(
  figure: readonly Stroke[],
  n: number,
  cx: number,
  cy: number,
  scale: number
): Sampled {
  const validStrokes = figure.filter((s) => s.length >= 2);
  if (validStrokes.length === 0 || n <= 0) {
    return { targets: [], edges: [], spacing: 0 };
  }

  interface SegInfo {
    strokeIdx: number;
    segIdx: number;
    a: Pt;
    b: Pt;
    len: number;
    subs: number;
    rem: number;
  }

  const segments: SegInfo[] = [];
  let totalVertices = 0;
  let totalLen = 0;

  validStrokes.forEach((stroke, strokeIdx) => {
    totalVertices += stroke.length;
    for (let i = 1; i < stroke.length; i++) {
      const len = segLen(stroke[i - 1], stroke[i]);
      totalLen += len;
      segments.push({
        strokeIdx,
        segIdx: i - 1,
        a: stroke[i - 1],
        b: stroke[i],
        len,
        subs: 1,
        rem: 0,
      });
    }
  });

  if (n < totalVertices || totalLen === 0) {
    return sampleByArcLength(validStrokes, n, cx, cy, scale);
  }

  // Cada segmento começa com 1 subsegmento (preservando todos os vértices).
  // Os pontos extras (n - totalVertices) viram subdivisões proporcionais ao comprimento.
  const extraPoints = n - totalVertices;
  const totalDesiredSubs = segments.length + extraPoints;

  let assignedExtra = 0;
  for (const seg of segments) {
    const idealSubs = Math.max(1, (seg.len / totalLen) * totalDesiredSubs);
    const extra = Math.max(0, Math.floor(idealSubs - 1));
    seg.subs = 1 + extra;
    seg.rem = idealSubs - seg.subs;
    assignedExtra += extra;
  }

  let remaining = extraPoints - assignedExtra;
  if (remaining > 0) {
    const byRemainder = [...segments].sort((x, y) => y.rem - x.rem);
    for (let i = 0; i < remaining; i++) {
      byRemainder[i % byRemainder.length].subs += 1;
    }
  } else if (remaining < 0) {
    const bySmallestRem = [...segments]
      .filter((s) => s.subs > 1)
      .sort((x, y) => x.rem - y.rem);
    let idx = 0;
    while (remaining < 0 && bySmallestRem.length > 0) {
      const target = bySmallestRem[idx % bySmallestRem.length];
      if (target.subs > 1) {
        target.subs -= 1;
        remaining += 1;
      }
      idx += 1;
    }
  }

  const targets: Sampled['targets'] = [];
  const edges: Sampled['edges'] = [];
  let maxSubLen = 0;

  let segCursor = 0;
  for (let si = 0; si < validStrokes.length; si++) {
    const stroke = validStrokes[si];
    targets.push({
      x: cx + stroke[0][0] * scale,
      y: cy + stroke[0][1] * scale,
    });

    for (let i = 1; i < stroke.length; i++) {
      const seg = segments[segCursor++];
      const subLen = seg.len / seg.subs;
      if (subLen > maxSubLen) maxSubLen = subLen;

      for (let m = 1; m <= seg.subs; m++) {
        const t = m / seg.subs;
        const px = seg.a[0] + (seg.b[0] - seg.a[0]) * t;
        const py = seg.a[1] + (seg.b[1] - seg.a[1]) * t;
        const nextIdx = targets.length;
        targets.push({
          x: cx + px * scale,
          y: cy + py * scale,
        });
        edges.push([nextIdx - 1, nextIdx]);
      }
    }
  }

  const avgStep = totalLen / Math.max(1, edges.length);
  const spacing = Math.max(avgStep, maxSubLen * 0.92) * scale;

  return { targets, edges, spacing };
}
