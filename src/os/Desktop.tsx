import { AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { useLang } from '../i18n/lang';
import { IDENTITY, UI } from '../content/site';
import { useWindows } from './useWindows';
import { useViewport } from './useViewport';
import { useRoute } from './useRoute';
import { APP_IDS, INITIAL_APPS, LAYOUT, byId } from './layout';
import { Window } from './Window';
import { Dock } from './Dock';
import { Wallpaper } from './Wallpaper';
import { CommandPalette } from './CommandPalette';
import { About } from '../apps/About';
import { Work } from '../apps/Work';
import { Brain } from '../apps/Brain';
import { Contact } from '../apps/Contact';
import { Resume } from '../apps/Resume';
import { Now } from '../apps/Now';
import { Stack } from '../apps/Stack';
import { Requests } from '../apps/Requests';

const KEY = { palette: 'k', escape: 'Escape' } as const;
const CLOCK_LOCALE = { pt: 'pt-BR', en: 'en-US' } as const;

type Ctx = { note: string | null; onNote: (id: string | null) => void };

const RENDERERS: Readonly<Record<string, (ctx: Ctx) => ReactNode>> = {
  sobre: () => <About />,
  trabalho: () => <Work />,
  agora: () => <Now />,
  cerebro: (ctx) => <Brain selected={ctx.note} onSelect={ctx.onNote} />,
  stack: () => <Stack />,
  curriculo: () => <Resume />,
  pedidos: () => <Requests />,
  contato: () => <Contact />,
};

function useCompact() {
  const [compact, setCompact] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 900
  );
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 899px)');
    const onChange = () => setCompact(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return compact;
}

export function Desktop() {
  const { lang, t } = useLang();
  const wm = useWindows(INITIAL_APPS);
  const compact = useCompact();
  const camera = useViewport();
  const { route, navigate } = useRoute(APP_IDS, 'sobre');
  const [clock, setClock] = useState(() => new Date());
  const [palette, setPalette] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setClock(new Date()), 30_000);
    return () => clearInterval(timer);
  }, []);

  /** Traz a janela ao centro da viewport — o dock nunca abre no vazio. */
  const bring = useCallback(
    (id: string) => {
      const app = byId(id);
      if (!app || compact) return;
      camera.panTo({
        x: Math.round(window.innerWidth / 2 - (app.x + app.width / 2)),
        y: Math.round(window.innerHeight / 2 - (app.y + 180)),
      });
    },
    [camera, compact]
  );

  const openAndBring = useCallback(
    (id: string) => {
      wm.open(id);
      bring(id);
    },
    [wm, bring]
  );

  // Cada rota é atendida uma vez. O ref evita reabrir a janela toda vez que
  // openAndBring troca de identidade, sem precisar mentir na lista de deps.
  const handledRoute = useRef<string | null>(null);
  useEffect(() => {
    if (route && route !== handledRoute.current) {
      handledRoute.current = route;
      openAndBring(route);
    }
  }, [route, openAndBring]);

  useEffect(() => {
    navigate(wm.topmost, true);
  }, [wm.topmost, navigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === KEY.palette) {
        e.preventDefault();
        setPalette((p) => !p);
        return;
      }
      if (e.key === KEY.escape && !palette && wm.topmost) wm.close(wm.topmost);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [palette, wm]);

  const toggleFrom = useCallback(
    (id: string) => {
      const wasHidden = !wm.isOpen(id) || wm.isMinimized(id);
      wm.toggle(id);
      if (wasHidden) bring(id);
    },
    [wm, bring]
  );

  const selectNote = useCallback(
    (id: string) => {
      setNote(id);
      openAndBring('cerebro');
    },
    [openAndBring]
  );

  const ctx: Ctx = { note, onNote: setNote };
  const open = LAYOUT.filter((app) => wm.isOpen(app.id) && !wm.isMinimized(app.id));
  const away = Math.hypot(camera.pan.x, camera.pan.y) > 180;

  return (
    <div className="relative h-dvh overflow-hidden">
      <Wallpaper />

      <header className="fixed inset-x-0 top-0 z-30 flex items-center gap-3 border-b border-hairline/60 bg-canvas/60 px-4 py-2 backdrop-blur-xl">
        <span className="numeric text-xs font-semibold text-heading">{IDENTITY.handle}.os</span>

        {!compact && away && (
          <button
            type="button"
            onClick={camera.reset}
            className="numeric rounded-full border border-accent/40 px-2.5 py-1 text-[0.65rem] text-accent transition-colors hover:bg-accent/10"
          >
            ⌖ {t(UI.recenter)}
          </button>
        )}

        <button
          type="button"
          onClick={() => setPalette(true)}
          className="numeric ml-auto rounded-full border border-hairline px-2.5 py-1 text-[0.65rem] text-muted transition-colors hover:border-accent hover:text-body"
        >
          {t(UI.commands)} ⌘K
        </button>
        <span className="numeric text-xs text-muted">
          {clock.toLocaleTimeString(CLOCK_LOCALE[lang], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </header>

      {compact ? (
        <div className="relative z-10 h-dvh space-y-4 overflow-y-auto px-3 pb-32 pt-16">
          <AnimatePresence initial={false}>
            {open.map((app) => (
              <Window
                key={app.id}
                id={app.id}
                title={t(app.label)}
                z={wm.zOf(app.id)}
                dx={0}
                dy={0}
                restX={0}
                restY={0}
                width={app.width}
                focused={wm.topmost === app.id}
                compact
                originX={null}
                onFocus={() => wm.focus(app.id)}
                onClose={() => wm.close(app.id)}
                onMinimize={() => wm.minimize(app.id)}
                onMove={() => {}}
              >
                {RENDERERS[app.id]?.(ctx)}
              </Window>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div
          onPointerDown={camera.onPointerDown}
          onPointerMove={camera.onPointerMove}
          onPointerUp={camera.onPointerUp}
          onPointerCancel={camera.onPointerUp}
          className={`relative z-10 h-dvh ${camera.dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              transform: `translate3d(${camera.pan.x}px, ${camera.pan.y}px, 0)`,
              willChange: 'transform',
            }}
          >
            <AnimatePresence>
              {open.map((app) => {
                const win = wm.windows.find((w) => w.id === app.id);
                return (
                  <Window
                    key={app.id}
                    id={app.id}
                    title={t(app.label)}
                    z={wm.zOf(app.id)}
                    dx={win?.dx ?? 0}
                    dy={win?.dy ?? 0}
                    restX={app.x}
                    restY={app.y}
                    width={app.width}
                    focused={wm.topmost === app.id}
                    compact={false}
                    originX={null}
                    onFocus={() => wm.focus(app.id)}
                    onClose={() => wm.close(app.id)}
                    onMinimize={() => wm.minimize(app.id)}
                    onMove={(dx, dy) => wm.moveBy(app.id, dx, dy)}
                  >
                    {RENDERERS[app.id]?.(ctx)}
                  </Window>
                );
              })}
            </AnimatePresence>
          </div>

          {!away && (
            <p className="numeric pointer-events-none absolute bottom-24 left-1/2 -translate-x-1/2 text-[0.62rem] text-ink-600">
              {t(UI.panHint)}
            </p>
          )}
        </div>
      )}

      <Dock
        items={LAYOUT.map(({ id, label, glyph }) => ({ id, label, glyph }))}
        isOpen={wm.isOpen}
        isMinimized={wm.isMinimized}
        onToggle={toggleFrom}
      />

      <CommandPalette
        open={palette}
        onClose={() => setPalette(false)}
        apps={LAYOUT.map(({ id, label }) => ({ id, label }))}
        onOpenApp={openAndBring}
        onSelectNote={selectNote}
      />
    </div>
  );
}
