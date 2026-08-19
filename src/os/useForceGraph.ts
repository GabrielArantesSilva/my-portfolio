import { useEffect, useRef, useState } from 'react';

export interface GraphNode {
  id: string;
  domain: string;
  r: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export interface GraphEdge {
  source: string;
  target: string;
}

interface Options {
  nodes: readonly { id: string; domain: string; weight: number }[];
  edges: readonly GraphEdge[];
  width: number;
  height: number;
  /** Sob reduced-motion o layout é resolvido de uma vez, sem animar. */
  still: boolean;
}

const REPULSION = 900;
const SPRING = 0.012;
const SPRING_LENGTH = 52;
const CENTER_PULL = 0.006;
const DAMPING = 0.86;
const SETTLE_TICKS = 260;

/**
 * Simulação de força própria em vez de d3-force: são 156 nós, o O(n²) roda
 * folgado, e evita 40kB de dependência num portfólio.
 */
export function useForceGraph({ nodes, edges, width, height, still }: Options) {
  const nodesRef = useRef<GraphNode[]>([]);
  const [, setTick] = useState(0);
  const alphaRef = useRef(1);
  const pinnedRef = useRef<{ id: string | null; x: number; y: number }>({
    id: null,
    x: 0,
    y: 0,
  });

  /** Prende um nó na posição do cursor e reaquece a simulação. */
  const pin = (id: string | null, x = 0, y = 0) => {
    pinnedRef.current = { id, x, y };
    if (id) alphaRef.current = Math.max(alphaRef.current, 0.55);
  };

  // Semente determinística: o grafo abre igual toda vez, sem Math.random.
  useEffect(() => {
    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(width, height) * 0.38;

    nodesRef.current = nodes.map((n, i) => {
      const angle = (i / nodes.length) * Math.PI * 2;
      const spiral = 0.35 + (i % 7) / 9;
      return {
        id: n.id,
        domain: n.domain,
        r: 2.4 + Math.min(6, Math.sqrt(n.weight) * 1.5),
        x: cx + Math.cos(angle) * radius * spiral,
        y: cy + Math.sin(angle) * radius * spiral,
        vx: 0,
        vy: 0,
      };
    });
    alphaRef.current = 1;
  }, [nodes, width, height]);

  useEffect(() => {
    const index = new Map<string, GraphNode>();

    function repel(list: GraphNode[], alpha: number) {
      for (let i = 0; i < list.length; i++) {
        const a = list[i];
        for (let j = i + 1; j < list.length; j++) {
          const b = list[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distSq = dx * dx + dy * dy || 0.01;
          const dist = Math.sqrt(distSq);
          const force = (REPULSION * alpha) / distSq;
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          a.vx -= fx;
          a.vy -= fy;
          b.vx += fx;
          b.vy += fy;
        }
      }
    }

    function pull(alpha: number) {
      for (const edge of edges) {
        const a = index.get(edge.source);
        const b = index.get(edge.target);
        if (!a || !b) continue;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 0.01;
        const force = (dist - SPRING_LENGTH) * SPRING * alpha;
        a.vx += (dx / dist) * force;
        a.vy += (dy / dist) * force;
        b.vx -= (dx / dist) * force;
        b.vy -= (dy / dist) * force;
      }
    }

    function integrate(list: GraphNode[], alpha: number) {
      const cx = width / 2;
      const cy = height / 2;
      for (const n of list) {
        // Nó preso pelo cursor não obedece à física: o usuário manda.
        if (n.id === pinnedRef.current.id) {
          n.x = pinnedRef.current.x;
          n.y = pinnedRef.current.y;
          n.vx = 0;
          n.vy = 0;
          continue;
        }
        n.vx = (n.vx + (cx - n.x) * CENTER_PULL * alpha) * DAMPING;
        n.vy = (n.vy + (cy - n.y) * CENTER_PULL * alpha) * DAMPING;
        n.x += n.vx;
        n.y += n.vy;
      }
    }

    const step = () => {
      const list = nodesRef.current;
      if (list.length === 0) return;

      index.clear();
      for (const n of list) index.set(n.id, n);

      const alpha = alphaRef.current;
      repel(list, alpha);
      pull(alpha);
      integrate(list, alpha);

      alphaRef.current = Math.max(0.02, alpha * 0.994);
    };

    if (still) {
      for (let i = 0; i < SETTLE_TICKS; i++) step();
      setTick((t) => t + 1);
      return;
    }

    let raf = 0;
    const loop = () => {
      step();
      setTick((t) => t + 1);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [nodes, edges, width, height, still]);

  return { nodes: nodesRef, pin };
}
