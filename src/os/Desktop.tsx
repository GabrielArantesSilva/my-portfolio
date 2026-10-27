import { AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { useLang } from '../i18n/lang';
import { useWindows } from './useWindows';
import { useRoute } from './useRoute';
import { APP_IDS, INITIAL_APPS, LAYOUT } from './layout';
import { Window } from './Window';
import { Sidebar } from './Sidebar';
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
    () => typeof window !== 'undefined' && window.innerWidth < 1024
  );
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    const onChange = () => setCompact(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return compact;
}

export function Desktop() {
  const { t } = useLang();
  const wm = useWindows(INITIAL_APPS);
  const compact = useCompact();
  const { route, navigate } = useRoute(APP_IDS, 'sobre');
  const [clock, setClock] = useState(() => new Date());
  const [palette, setPalette] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setClock(new Date()), 30_000);
    return () => clearInterval(timer);
  }, []);

  // Abre e foca o app diretamente sem saltos de câmera
  const handleSelectApp = useCallback(
    (id: string) => {
      if (!wm.isOpen(id)) {
        wm.open(id);
      } else if (wm.isMinimized(id)) {
        wm.open(id); // restaura
      } else {
        wm.focus(id);
      }
      navigate(id, true);
    },
    [wm, navigate]
  );

  // Atende a rota inicial na primeira montagem da página
  const handledInitial = useRef(false);
  useEffect(() => {
    if (!handledInitial.current && route) {
      handledInitial.current = true;
      wm.open(route);
    }
  }, [route, wm]);

  // Sincroniza a URL quando o app em foco muda
  useEffect(() => {
    if (wm.topmost) {
      navigate(wm.topmost, true);
    }
  }, [wm.topmost, navigate]);

  // Atalhos de teclado: ⌘K e Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === KEY.palette) {
        e.preventDefault();
        setPalette((p) => !p);
        return;
      }
      if (e.key === KEY.escape && !palette && wm.topmost) {
        wm.close(wm.topmost);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [palette, wm]);

  const selectNote = useCallback(
    (id: string) => {
      setNote(id);
      handleSelectApp('cerebro');
    },
    [handleSelectApp]
  );

  // Restaura todas as janelas às posições e estado de fábrica
  const restore = useCallback(() => {
    wm.reset();
    setNote(null);
    setResetKey((k) => k + 1);
  }, [wm]);

  const ctx: Ctx = { note, onNote: setNote };
  const openWindows = LAYOUT.filter((app) => wm.isOpen(app.id) && !wm.isMinimized(app.id));

  return (
    <div className="relative flex h-dvh w-screen overflow-hidden bg-canvas">
      {/* Sidebar de Navegação */}
      <Sidebar
        apps={LAYOUT}
        isOpen={wm.isOpen}
        isMinimized={wm.isMinimized}
        activeId={wm.topmost}
        onSelect={handleSelectApp}
        onRestore={restore}
        onOpenPalette={() => setPalette(true)}
        clock={clock}
        mobileOpen={mobileMenu}
        onToggleMobile={() => setMobileMenu((m) => !m)}
      />

      {/* Área de Trabalho Principal (Desktop Workspace) */}
      <main className="relative flex-1 h-dvh overflow-hidden lg:pl-64">
        {/* Fundo dinâmico com partículas */}
        <Wallpaper />

        {/* Layout Mobile: Lista empilhada de janelas */}
        {compact ? (
          <div className="relative z-10 h-dvh space-y-4 overflow-y-auto px-3 pb-24 pt-16">
            <AnimatePresence initial={false}>
              {openWindows.map((app) => (
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
                  <div key={resetKey}>{RENDERERS[app.id]?.(ctx)}</div>
                </Window>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Layout Desktop: Janelas fluidas com foco e arrasto */
          <div className="relative z-10 h-full w-full overflow-hidden p-6">
            <AnimatePresence>
              {openWindows.map((app) => {
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
                    <div key={resetKey}>{RENDERERS[app.id]?.(ctx)}</div>
                  </Window>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </main>

      {/* Paleta de Comandos ⌘K */}
      <CommandPalette
        open={palette}
        onClose={() => setPalette(false)}
        apps={LAYOUT.map(({ id, label }) => ({ id, label }))}
        onOpenApp={handleSelectApp}
        onSelectNote={selectNote}
      />
    </div>
  );
}
