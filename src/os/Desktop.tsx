import { AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useLang } from '../i18n/lang';
import { APPS, IDENTITY, UI } from '../content/site';
import type { Txt } from '../content/types';
import { useWindows } from './useWindows';
import { Window } from './Window';
import { Dock } from './Dock';
import { Wallpaper } from './Wallpaper';
import { CommandPalette } from './CommandPalette';
import { About } from '../apps/About';
import { Work } from '../apps/Work';
import { Brain } from '../apps/Brain';
import { Contact } from '../apps/Contact';
import { Resume } from '../apps/Resume';

interface AppDef {
  id: string;
  label: Txt;
  glyph: string;
  restX: number;
  restY: number;
  width: number;
  render: (ctx: { note: string | null; onNote: (id: string | null) => void }) => ReactNode;
}

const APP_LIST: readonly AppDef[] = [
  { id: 'sobre', label: APPS.sobre, glyph: '◈', restX: 5, restY: 13, width: 440, render: () => <About /> },
  { id: 'trabalho', label: APPS.trabalho, glyph: '▣', restX: 37, restY: 22, width: 560, render: () => <Work /> },
  {
    id: 'cerebro',
    label: APPS.cerebro,
    glyph: '◐',
    restX: 12,
    restY: 44,
    width: 560,
    render: (ctx) => <Brain selected={ctx.note} onSelect={ctx.onNote} />,
  },
  { id: 'curriculo', label: APPS.curriculo, glyph: '▤', restX: 46, restY: 10, width: 540, render: () => <Resume /> },
  { id: 'contato', label: APPS.contato, glyph: '✉', restX: 62, restY: 52, width: 400, render: () => <Contact /> },
];

const INITIAL = ['sobre', 'trabalho'];

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
  const { t } = useLang();
  const wm = useWindows(INITIAL);
  const compact = useCompact();
  const [clock, setClock] = useState(() => new Date());
  const [origins, setOrigins] = useState<Record<string, number>>({});
  const [palette, setPalette] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setClock(new Date()), 30_000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPalette((p) => !p);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleFrom = useCallback(
    (id: string, centerX: number) => {
      setOrigins((o) => ({ ...o, [id]: centerX }));
      wm.toggle(id);
    },
    [wm]
  );

  const openApp = useCallback((id: string) => wm.open(id), [wm]);

  const selectNote = useCallback(
    (id: string) => {
      setNote(id);
      wm.open('cerebro');
    },
    [wm]
  );

  const open = APP_LIST.filter((app) => wm.isOpen(app.id) && !wm.isMinimized(app.id));
  const ctx = { note, onNote: setNote };

  /** transform-origin precisa ser relativo à janela, não à viewport. */
  const localOrigin = (app: AppDef) => {
    const dockX = origins[app.id];
    if (dockX == null || typeof window === 'undefined') return null;
    const left = (app.restX / 100) * window.innerWidth;
    return Math.max(0, Math.min(app.width, dockX - left));
  };

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <Wallpaper />

      <header className="fixed inset-x-0 top-0 z-30 flex items-center gap-3 border-b border-hairline/60 bg-canvas/60 px-4 py-2 backdrop-blur-xl">
        <span className="numeric text-xs font-semibold text-heading">{IDENTITY.handle}.os</span>
        <button
          type="button"
          onClick={() => setPalette(true)}
          className="numeric ml-auto rounded-full border border-hairline px-2.5 py-1 text-[0.65rem] text-muted transition-colors hover:border-accent hover:text-body"
        >
          {t(UI.commands)} ⌘K
        </button>
        <span className="numeric text-xs text-muted">
          {clock.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
        </span>
      </header>

      {compact ? (
        <div className="relative z-10 space-y-4 px-3 pb-32 pt-16">
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
                {app.render(ctx)}
              </Window>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="relative z-10 h-dvh pt-10">
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
                  restX={app.restX}
                  restY={app.restY}
                  width={app.width}
                  focused={wm.topmost === app.id}
                  compact={false}
                  originX={localOrigin(app)}
                  onFocus={() => wm.focus(app.id)}
                  onClose={() => wm.close(app.id)}
                  onMinimize={() => wm.minimize(app.id)}
                  onMove={(dx, dy) => wm.moveBy(app.id, dx, dy)}
                >
                  {app.render(ctx)}
                </Window>
              );
            })}
          </AnimatePresence>
        </div>
      )}

      <Dock
        items={APP_LIST.map(({ id, label, glyph }) => ({ id, label, glyph }))}
        isOpen={wm.isOpen}
        isMinimized={wm.isMinimized}
        onToggle={toggleFrom}
      />

      <CommandPalette
        open={palette}
        onClose={() => setPalette(false)}
        apps={APP_LIST.map(({ id, label }) => ({ id, label }))}
        onOpenApp={openApp}
        onSelectNote={selectNote}
      />
    </div>
  );
}
