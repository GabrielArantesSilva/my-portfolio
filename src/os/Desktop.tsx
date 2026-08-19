import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLang } from '../i18n/lang';
import { APPS, IDENTITY } from '../content/site';
import type { Txt } from '../content/types';
import { useWindows } from './useWindows';
import { Window } from './Window';
import { Dock } from './Dock';
import { About } from '../apps/About';
import { Work } from '../apps/Work';
import { Brain } from '../apps/Brain';
import { Contact } from '../apps/Contact';

interface AppDef {
  id: string;
  label: Txt;
  glyph: string;
  restX: number;
  restY: number;
  width: number;
  render: () => React.ReactNode;
}

const APP_LIST: readonly AppDef[] = [
  { id: 'sobre', label: APPS.sobre, glyph: '◈', restX: 6, restY: 14, width: 460, render: () => <About /> },
  { id: 'trabalho', label: APPS.trabalho, glyph: '▣', restX: 40, restY: 24, width: 560, render: () => <Work /> },
  { id: 'cerebro', label: APPS.cerebro, glyph: '◐', restX: 14, restY: 46, width: 520, render: () => <Brain /> },
  { id: 'contato', label: APPS.contato, glyph: '✉', restX: 52, restY: 8, width: 420, render: () => <Contact /> },
];

/** Desktop nasce povoado: ninguém precisa descobrir que dá para abrir algo. */
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

  useEffect(() => {
    const timer = setInterval(() => setClock(new Date()), 30_000);
    return () => clearInterval(timer);
  }, []);

  const open = APP_LIST.filter((app) => wm.isOpen(app.id) && !wm.isMinimized(app.id));

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none fixed left-1/2 top-[-26rem] h-[52rem] w-[52rem] -translate-x-1/2 rounded-full opacity-[0.13] blur-[140px]"
        style={{ background: 'radial-gradient(circle, var(--color-iris-500), transparent 68%)' }}
      />

      <header className="fixed inset-x-0 top-0 z-30 flex items-center gap-3 border-b border-hairline/60 bg-canvas/70 px-4 py-2 backdrop-blur-xl">
        <span className="numeric text-xs font-semibold text-heading">
          {IDENTITY.handle}.os
        </span>
        <span className="numeric ml-auto text-xs text-muted">
          {clock.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
        </span>
      </header>

      {compact ? (
        <div className="space-y-4 px-3 pb-32 pt-16">
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
                onFocus={() => wm.focus(app.id)}
                onClose={() => wm.close(app.id)}
                onMinimize={() => wm.minimize(app.id)}
                onMove={() => {}}
              >
                {app.render()}
              </Window>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="relative h-dvh pt-10">
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
                  onFocus={() => wm.focus(app.id)}
                  onClose={() => wm.close(app.id)}
                  onMinimize={() => wm.minimize(app.id)}
                  onMove={(dx, dy) => wm.moveBy(app.id, dx, dy)}
                >
                  {app.render()}
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
        onToggle={wm.toggle}
      />
    </div>
  );
}
