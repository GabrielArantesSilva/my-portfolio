/**
 * Figuras que as partículas do Wallpaper montam no modo tela limpa.
 *
 * Cada figura é uma lista de traços; cada traço, uma polilinha em coordenadas
 * normalizadas ([-1, 1], y para baixo). O Wallpaper escala pelo menor lado da
 * tela e centraliza.
 */
type Pt = readonly [number, number];
type Stroke = readonly Pt[];

const polygon = (sides: number, r: number, rot = -Math.PI / 2): Pt[] =>
  Array.from({ length: sides + 1 }, (_, i) => {
    const a = ((Math.PI * 2) / sides) * i + rot;
    return [
      Number((Math.cos(a) * r).toFixed(4)),
      Number((Math.sin(a) * r).toFixed(4)),
    ];
  });

const brace = (dir: 1 | -1): Stroke =>
  (
    [
      [0.24, -0.84],
      [0.48, -0.84],
      [0.56, -0.72],
      [0.56, -0.16],
      [0.84, 0],
      [0.56, 0.16],
      [0.56, 0.72],
      [0.48, 0.84],
      [0.24, 0.84],
    ] as const
  ).map(([x, y]) => [x * dir, y]);

/**
 * Tag "GA" em estilo Graffiti / Wildstyle:
 * - Coroa street-art de 3 pontas inclinada no topo esquerdo
 * - Letra G angular (handstyle/chisel) com serifa superior, espinha dupla interna
 *   e barra central terminando em seta wildstyle apontando para dentro
 * - Letra A com serifa de apoio, topo chanfrado, kick-out no pé direito e corte
 *   transversal em seta de grafite
 * - Sublinhado em chicote (tag whip) ancorando a assinatura
 */
const GRAFFITI_GA: readonly Stroke[] = [
  // Coroa de 3 pontas (Basquiat / Tag Crown) inclinada sobre o G
  [
    [-0.78, -0.7],
    [-0.86, -0.95],
    [-0.63, -0.79],
    [-0.48, -0.98],
    [-0.33, -0.79],
    [-0.1, -0.93],
    [-0.18, -0.7],
    [-0.78, -0.7],
  ],
  // Corpo principal do G em traço chanfrado + barra interna com ponta em seta
  [
    [-0.06, -0.32],
    [-0.02, -0.54],
    [-0.34, -0.62],
    [-0.76, -0.5],
    [-0.98, -0.14],
    [-0.96, 0.34],
    [-0.72, 0.64],
    [-0.28, 0.66],
    [-0.04, 0.44],
    [-0.02, 0.04],
    [-0.52, 0.04],
    [-0.38, -0.07],
    [-0.52, 0.04],
    [-0.38, 0.15],
  ],
  // Sombra interna / duplo contorno chanfrado da espinha do G
  [
    [-0.38, -0.44],
    [-0.68, -0.34],
    [-0.78, -0.06],
    [-0.76, 0.28],
    [-0.56, 0.48],
  ],
  // Corpo do A wildstyle com serifa de apoio, topo chanfrado e kick-out na perna direita
  [
    [-0.06, 0.54],
    [0.08, 0.66],
    [0.46, -0.66],
    [0.58, -0.66],
    [0.9, 0.66],
    [1.04, 0.52],
  ],
  // Barra transversal do A rasgando em seta de grafite para a direita
  [
    [0.04, 0.2],
    [0.98, 0.02],
    [0.83, -0.1],
    [0.98, 0.02],
    [0.85, 0.15],
  ],
  // Sublinhado "tag whip" em zigue-zague sob a assinatura
  [
    [-0.88, 0.84],
    [0.52, 0.76],
    [0.18, 0.92],
    [0.94, 0.86],
  ],
];

const outerHex = polygon(6, 0.92, -Math.PI / 2);
const innerHex = polygon(6, 0.42, -Math.PI / 6);

const FIGURE_SHAPES = {
  // As iniciais: a assinatura em estilo Graffiti / Wildstyle Tag
  ga: GRAFFITI_GA,

  // Emblema </> com chanfro duplo nas chaves e serifa na barra
  code: [
    [[-0.36, -0.56], [-0.96, 0], [-0.36, 0.56]],
    [[-0.48, -0.32], [-0.76, 0], [-0.48, 0.32]],
    [[0.26, -0.78], [0.16, -0.78], [-0.16, 0.78], [-0.26, 0.78]],
    [[0.36, -0.56], [0.96, 0], [0.36, 0.56]],
    [[0.48, -0.32], [0.76, 0], [0.48, 0.32]],
  ],

  // Janela de terminal completa com barra de topo, prompt > e cursor em bloco
  terminal: [
    [[-0.94, -0.68], [0.94, -0.68], [0.94, 0.68], [-0.94, 0.68], [-0.94, -0.68]],
    [[-0.94, -0.4], [0.94, -0.4]],
    [[-0.62, -0.14], [-0.22, 0.14], [-0.62, 0.42]],
    [[-0.04, 0.42], [0.52, 0.42], [0.52, 0.28], [-0.04, 0.28], [-0.04, 0.42]],
  ],

  // Grafo cristalino em duplo anel hexagonal conectado: o segundo cérebro / vault
  brain: [
    outerHex,
    innerHex,
    [outerHex[0], innerHex[0], innerHex[3], outerHex[3]],
    [outerHex[1], innerHex[1], innerHex[4], outerHex[4]],
    [outerHex[2], innerHex[2], innerHex[5], outerHex[5]],
  ],

  // Chaves { } esculpidas com nós de código centrais (: ;)
  braces: [
    brace(-1),
    brace(1),
    [[0, -0.36], [0.12, -0.24], [0, -0.12], [-0.12, -0.24], [0, -0.36]],
    [[0, 0.12], [0.12, 0.24], [0, 0.36], [-0.12, 0.24], [0, 0.12]],
    [[0, 0.36], [-0.08, 0.52]],
  ],

  // Linha de batimento / telemetria emoldurada por cantoneiras de radar e beacon
  pulse: [
    [
      [-1, 0.08],
      [-0.52, 0.08],
      [-0.38, -0.22],
      [-0.22, 0.42],
      [-0.04, -0.78],
      [0.14, 0.58],
      [0.3, -0.32],
      [0.44, 0.08],
      [1, 0.08],
    ],
    [[-0.88, -0.52], [-0.88, -0.78], [-0.56, -0.78]],
    [[0.56, -0.78], [0.88, -0.78], [0.88, -0.52]],
    [[-0.88, 0.52], [-0.88, 0.78], [-0.56, 0.78]],
    [[0.56, 0.78], [0.88, 0.78], [0.88, 0.52]],
  ],

  // Camadas isométricas empilhadas com núcleo superior e pilares de arquitetura
  layers: [
    [[0, -0.8], [0.88, -0.38], [0, 0.04], [-0.88, -0.38], [0, -0.8]],
    [[0, -0.58], [0.42, -0.38], [0, -0.18], [-0.42, -0.38], [0, -0.58]],
    [[-0.88, 0], [0, 0.42], [0.88, 0]],
    [[-0.88, 0.38], [0, 0.8], [0.88, 0.38]],
    [[-0.88, -0.38], [-0.88, 0.38]],
    [[0.88, -0.38], [0.88, 0.38]],
  ],

  // Folha com dobra, badge de perfil, linhas de texto e selo de aprovação: o currículo
  document: [
    [[-0.6, -0.84], [0.24, -0.84], [0.6, -0.48], [0.6, 0.84], [-0.6, 0.84], [-0.6, -0.84]],
    [[0.24, -0.84], [0.24, -0.48], [0.6, -0.48]],
    [[-0.4, -0.62], [-0.14, -0.62], [-0.14, -0.36], [-0.4, -0.36], [-0.4, -0.62]],
    [[-0.4, -0.12], [0.38, -0.12]],
    [[-0.4, 0.16], [0.38, 0.16]],
    [[-0.4, 0.44], [0.04, 0.44]],
    [[0.16, 0.46], [0.26, 0.58], [0.44, 0.34]],
  ],

  // Avião de papel em origami 3D com dobras internas e rastro de velocidade
  plane: [
    [[-0.92, -0.12], [0.94, -0.78], [0.36, 0.84], [0.02, 0.16], [-0.92, -0.12]],
    [[0.94, -0.78], [0.02, 0.16], [0.08, 0.54], [0.22, 0.32]],
    [[-0.78, 0.36], [-0.36, 0.2]],
    [[-0.56, 0.72], [-0.12, 0.54]],
  ],

  // Envelope selado com dobras diagonais e lacre em diamante: contato
  envelope: [
    [[-0.92, -0.62], [0.92, -0.62], [0.92, 0.62], [-0.92, 0.62], [-0.92, -0.62]],
    [[-0.92, -0.62], [0, 0.08], [0.92, -0.62]],
    [[-0.92, 0.62], [-0.32, 0.08]],
    [[0.92, 0.62], [0.32, 0.08]],
    [[0, -0.08], [0.14, 0.08], [0, 0.24], [-0.14, 0.08], [0, -0.08]],
  ],
} satisfies Record<string, readonly Stroke[]>;

export type FigureId = keyof typeof FIGURE_SHAPES;

export const FIGURES: Readonly<Record<FigureId, readonly Stroke[]>> = FIGURE_SHAPES;

/** Ordem do ciclo na tela limpa. Começa pela figura do app aberto e segue daqui. */
export const CYCLE: readonly FigureId[] = [
  'ga',
  'code',
  'pulse',
  'brain',
  'layers',
  'document',
  'plane',
  'envelope',
  'terminal',
  'braces',
];

/** Figura que abre a tela limpa para cada app. */
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
  /** Alvos em px, já escalados e centralizados. */
  targets: { x: number; y: number }[];
  /** Pares de índices de alvos vizinhos no mesmo traço: viram os traços desenhados. */
  edges: [number, number][];
  /** Distância esperada entre vizinhos, em px. */
  spacing: number;
}

const segLen = (a: Pt, b: Pt) => Math.hypot(b[0] - a[0], b[1] - a[1]);

/**
 * Amostragem por comprimento de arco usada apenas como fallback caso `n` seja
 * menor que o número total de vértices explícitos da figura.
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
 * Distribui `n` pontos ao longo dos traços preservando 100% dos vértices
 * explícitos (quinas vivas, serifas, pontas de seta e fechamentos) e
 * subdividindo os segmentos proporcionalmente ao seu comprimento.
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

  // Cada segmento já começa com 1 subsegmento (garantindo todos os vértices).
  // Os pontos extras (n - totalVertices) viram subdivisões proporcionais ao tamanho.
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
