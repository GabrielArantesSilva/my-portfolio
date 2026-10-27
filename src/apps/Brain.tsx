import { useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/lang';
import { UI } from '../content/site';
import vault from '../content/vault.json';
import { useForceGraph } from '../os/useForceGraph';

const W = 520;
const H = 200;

/** Matiz sutil e técnico por domínio */
const HUES = [200, 215, 230, 190, 210, 220, 175, 240];
const hueOf = (domain: string) => {
  let h = 0;
  for (let i = 0; i < domain.length; i++) h = (h * 31 + domain.charCodeAt(i)) >>> 0;
  return HUES[h % HUES.length];
};

export function Brain({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (id: string | null) => void;
}) {
  const { lang, t } = useLang();
  const still = useReducedMotion() ?? false;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [query, setQuery] = useState('');

  const nodes = useMemo(
    () => vault.notes.map((n) => ({ id: n.id, domain: n.domain, weight: n.in })),
    []
  );

  const { nodes: positions, pin } = useForceGraph({
    nodes,
    edges: vault.edges,
    width: W,
    height: H,
    still,
  });
  const dragging = useRef<string | null>(null);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return new Set(
      vault.notes
        .filter(
          (n) =>
            n.id.toLowerCase().includes(q) ||
            n.domain.toLowerCase().includes(q) ||
            n.tags.some((tag) => tag.toLowerCase().includes(q))
        )
        .map((n) => n.id)
    );
  }, [query]);

  const detail = selected ? vault.notes.find((n) => n.id === selected) : null;

  const neighbours = useMemo(() => {
    if (!selected) return new Set<string>();
    const set = new Set<string>();
    for (const e of vault.edges) {
      if (e.source === selected) set.add(e.target);
      if (e.target === selected) set.add(e.source);
    }
    return set;
  }, [selected]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    const list = positions.current;
    const at = new Map(list.map((n) => [n.id, n]));

    const touchesSelection = (edge: { source: string; target: string }) =>
      selected != null && (edge.source === selected || edge.target === selected);

    const strokeEdge = (a: { x: number; y: number }, b: { x: number; y: number }, hot: boolean) => {
      ctx.strokeStyle = hot ? 'rgba(56,189,248,0.75)' : 'rgba(148,163,184,0.12)';
      ctx.lineWidth = hot ? 1.2 : 0.5;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    };

    const drawEdges = () => {
      for (const edge of vault.edges) {
        const a = at.get(edge.source);
        const b = at.get(edge.target);
        if (a && b) strokeEdge(a, b, touchesSelection(edge));
      }
    };

    const alphaFor = (id: string, isSel: boolean) => {
      if (matches && !matches.has(id)) return 0.12;
      return isSel || neighbours.has(id) ? 1 : 0.7;
    };

    const drawNodes = () => {
      for (const node of list) {
        const isSel = node.id === selected;
        const alpha = alphaFor(node.id, isSel);
        const light = isSel ? 0.88 : 0.72;
        const chroma = isSel ? 0.18 : 0.1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, isSel ? node.r + 2 : node.r, 0, Math.PI * 2);
        ctx.fillStyle = `oklch(${light} ${chroma} ${hueOf(node.domain)} / ${alpha})`;
        ctx.fill();

        if (isSel) {
          ctx.strokeStyle = 'rgba(255,255,255,0.9)';
          ctx.lineWidth = 1.4;
          ctx.stroke();
        }
      }
    };

    drawEdges();
    drawNodes();
  });

  const toCanvas = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * W,
      y: ((event.clientY - rect.top) / rect.height) * H,
    };
  };

  const nearest = (x: number, y: number) => {
    let best: string | null = null;
    let bestDist = 14;
    for (const node of positions.current) {
      const d = Math.hypot(node.x - x, node.y - y);
      if (d < bestDist) {
        bestDist = d;
        best = node.id;
      }
    }
    return best;
  };

  const onDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const { x, y } = toCanvas(event);
    const hit = nearest(x, y);
    onSelect(hit);
    if (!hit || still) return;
    dragging.current = hit;
    pin(hit, x, y);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!dragging.current) return;
    const { x, y } = toCanvas(event);
    pin(dragging.current, x, y);
  };

  const onUp = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!dragging.current) return;
    dragging.current = null;
    pin(null);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <div className="space-y-3.5">
      <header className="border-b border-hairline/60 pb-2.5">
        <h1 className="text-sm font-semibold text-heading">{t(UI.brainTitle)}</h1>
        <p className="mt-0.5 text-xs text-muted">{t(UI.brainLede)}</p>
      </header>

      {/* Estatísticas compactas */}
      <dl className="grid grid-cols-4 gap-px overflow-hidden rounded-xl border border-hairline/70 bg-hairline">
        {[
          { v: vault.stats.notes, l: UI.notes },
          { v: vault.stats.edges, l: UI.links },
          { v: vault.stats.domains, l: UI.domains },
          { v: Math.round(vault.stats.words / 1000), l: UI.kwords },
        ].map((s) => (
          <div key={s.l.pt} className="bg-surface px-2.5 py-1.5 sm:px-3 sm:py-2">
            <dd className="numeric text-sm sm:text-base font-semibold text-heading">{s.v}</dd>
            <dt className="text-[0.58rem] sm:text-[0.62rem] uppercase tracking-wider text-muted">{t(s.l)}</dt>
          </div>
        ))}
      </dl>

      {/* Canvas com altura reduzida (200px) */}
      <div className="overflow-hidden rounded-xl border border-hairline/70 bg-ink-950">
        <canvas
          ref={canvasRef}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          role="img"
          aria-label={t(UI.graphAria)}
          className="block w-full touch-none cursor-grab active:cursor-grabbing"
          style={{ aspectRatio: `${W} / ${H}` }}
        />
      </div>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t(UI.search)}
        aria-label={t(UI.search)}
        className="numeric w-full rounded-lg border border-hairline bg-canvas px-3 py-1.5 text-xs text-body outline-none transition-colors placeholder:text-ink-600 focus:border-accent"
      />

      <ul className="flex flex-wrap gap-1" aria-label={t(UI.topTags)}>
        {vault.topTags.map((tag) => (
          <li key={tag.tag}>
            <button
              type="button"
              onClick={() => setQuery(query === tag.tag ? '' : tag.tag)}
              aria-pressed={query === tag.tag}
              className={`numeric rounded border px-2 py-0.5 text-[0.62rem] transition-colors ${
                query === tag.tag
                  ? 'border-accent bg-accent/15 text-heading font-medium'
                  : 'border-hairline text-muted hover:border-accent/50 hover:text-body'
              }`}
            >
              {tag.tag}
              <span className="ml-1 text-ink-500">{tag.count}</span>
            </button>
          </li>
        ))}
      </ul>

      {detail ? (
        <article className="rounded-xl border border-accent/40 bg-surface/80 p-3 sm:p-4">
          <h2 className="numeric text-xs sm:text-sm font-semibold text-heading">{detail.title}</h2>
          <p className="numeric mt-0.5 text-[0.62rem] text-accent">{detail.folder}</p>
          {detail.excerpt && (
            <p className="mt-2 text-xs leading-relaxed text-muted">{detail.excerpt}</p>
          )}
          <dl className="numeric mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-[0.65rem] text-muted font-mono">
            <span>{lang === 'pt' ? 'in' : 'in'}: {detail.in}</span>
            <span>{lang === 'pt' ? 'out' : 'out'}: {detail.out}</span>
            <span>{detail.words} {t(UI.words)}</span>
          </dl>
          {detail.tags.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-1">
              {detail.tags.map((tag) => (
                <li
                  key={tag}
                  className="numeric rounded border border-hairline px-1.5 py-0.5 text-[0.6rem] text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </article>
      ) : (
        <p className="numeric rounded-xl border border-dashed border-hairline/60 px-3 py-3 text-center text-xs text-muted">
          {t(UI.graphHint)}
        </p>
      )}
    </div>
  );
}
