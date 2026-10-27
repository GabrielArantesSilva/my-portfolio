import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import {
  Activity,
  Brain,
  Briefcase,
  FileText,
  Layers,
  Mail,
  Send,
  User,
  X,
} from 'lucide-react';
import { useLang } from '../i18n/lang';
import { useRoute } from './useRoute';
import { APP_IDS, LAYOUT, byId } from './layout';
import { Sidebar } from './Sidebar';
import { Wallpaper } from './Wallpaper';
import { CommandPalette } from './CommandPalette';
import { About } from '../apps/About';
import { Work } from '../apps/Work';
import { Brain as BrainApp } from '../apps/Brain';
import { Contact } from '../apps/Contact';
import { Resume } from '../apps/Resume';
import { Now } from '../apps/Now';
import { Stack } from '../apps/Stack';
import { Requests } from '../apps/Requests';

const KEY = { palette: 'k', escape: 'Escape' } as const;

const TAB_ICONS: Record<string, typeof User> = {
  sobre: User,
  trabalho: Briefcase,
  agora: Activity,
  cerebro: Brain,
  stack: Layers,
  curriculo: FileText,
  pedidos: Send,
  contato: Mail,
};

type Ctx = { note: string | null; onNote: (id: string | null) => void };

const RENDERERS: Readonly<Record<string, (ctx: Ctx) => ReactNode>> = {
  sobre: () => <About />,
  trabalho: () => <Work />,
  agora: () => <Now />,
  cerebro: (ctx) => <BrainApp selected={ctx.note} onSelect={ctx.onNote} />,
  stack: () => <Stack />,
  curriculo: () => <Resume />,
  pedidos: () => <Requests />,
  contato: () => <Contact />,
};

export function Desktop() {
  const { t } = useLang();
  const { route, navigate } = useRoute(APP_IDS, 'sobre');

  // Abas abertas no workspace (inicia com Sobre e Trabalho)
  const [tabs, setTabs] = useState<string[]>(['sobre', 'trabalho']);
  const [activeTab, setActiveTab] = useState<string>('sobre');

  const [clock, setClock] = useState(() => new Date());
  const [palette, setPalette] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setClock(new Date()), 30_000);
    return () => clearInterval(timer);
  }, []);

  // Seleciona ou abre um app
  const handleSelectApp = useCallback(
    (id: string) => {
      setTabs((prev) => (prev.includes(id) ? prev : [...prev, id]));
      setActiveTab(id);
      navigate(id, true);
    },
    [navigate]
  );

  // Fecha uma aba
  const handleCloseTab = useCallback(
    (id: string, e?: React.MouseEvent) => {
      e?.stopPropagation();
      setTabs((prev) => {
        const next = prev.filter((tId) => tId !== id);
        if (next.length === 0) return ['sobre'];
        return next;
      });

      if (activeTab === id) {
        setTabs((prev) => {
          const remaining = prev.filter((tId) => tId !== id);
          const nextActive = remaining[remaining.length - 1] ?? 'sobre';
          setActiveTab(nextActive);
          navigate(nextActive, true);
          return remaining.length > 0 ? remaining : ['sobre'];
        });
      }
    },
    [activeTab, navigate]
  );

  // Atende a rota inicial
  const handledInitial = useRef(false);
  useEffect(() => {
    if (!handledInitial.current && route) {
      handledInitial.current = true;
      handleSelectApp(route);
    }
  }, [route, handleSelectApp]);

  // Atalhos de teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === KEY.palette) {
        e.preventDefault();
        setPalette((p) => !p);
        return;
      }
      if (e.key === KEY.escape && palette) {
        setPalette(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [palette]);

  const selectNote = useCallback(
    (id: string) => {
      setNote(id);
      handleSelectApp('cerebro');
    },
    [handleSelectApp]
  );

  // Restaura abas padrão
  const restore = useCallback(() => {
    setTabs(['sobre', 'trabalho']);
    setActiveTab('sobre');
    setNote(null);
    navigate('sobre', true);
  }, [navigate]);

  const ctx: Ctx = { note, onNote: setNote };
  const currentApp = byId(activeTab) ?? LAYOUT[0];

  return (
    <div className="relative flex h-dvh w-screen overflow-hidden bg-canvas">
      {/* Sidebar Fixa à Esquerda */}
      <Sidebar
        apps={LAYOUT}
        isOpen={(id) => tabs.includes(id)}
        activeId={activeTab}
        onSelect={handleSelectApp}
        onRestore={restore}
        onOpenPalette={() => setPalette(true)}
        clock={clock}
        mobileOpen={mobileMenu}
        onToggleMobile={() => setMobileMenu((m) => !m)}
      />

      {/* Workspace Principal (Lado direito no desktop, tela inteira no mobile) */}
      <main className="relative flex-1 flex flex-col h-dvh overflow-hidden lg:pl-64">
        {/* Fundo sutil de console de engenharia */}
        <Wallpaper />

        {/* Barra Superior de Abas (Tabs) - Desktop */}
        <header className="relative z-20 hidden lg:flex h-12 shrink-0 items-center justify-between border-b border-hairline/80 bg-surface/80 px-4 backdrop-blur-xl">
          {/* Abas Abertas */}
          <div className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none]">
            {tabs.map((tabId) => {
              const app = byId(tabId);
              if (!app) return null;
              const Icon = TAB_ICONS[tabId] ?? User;
              const isActive = activeTab === tabId;

              return (
                <div
                  key={tabId}
                  onClick={() => {
                    setActiveTab(tabId);
                    navigate(tabId, true);
                  }}
                  className={`group flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium cursor-pointer transition-colors duration-150 ${
                    isActive
                      ? 'border border-hairline bg-ink-850 text-heading shadow-sm'
                      : 'text-muted hover:bg-ink-850/50 hover:text-body'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-accent' : 'text-muted'}`} />
                  <span>{t(app.label)}</span>
                  {tabs.length > 1 && (
                    <button
                      type="button"
                      onClick={(e) => handleCloseTab(tabId, e)}
                      className="ml-1 rounded p-0.5 opacity-60 hover:opacity-100 hover:bg-ink-700 transition-opacity"
                      aria-label="Fechar aba"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Controles da Janela Ativa */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-[0.68rem] text-muted">
              {currentApp ? t(currentApp.label) : ''}
            </span>
            <div className="h-3 w-px bg-hairline" />
            <button
              type="button"
              onClick={() => setPalette(true)}
              className="flex items-center gap-1 rounded-md border border-hairline bg-ink-900/50 px-2 py-1 font-mono text-[0.65rem] text-muted hover:text-heading hover:border-ink-600 transition-colors"
            >
              ⌘K
            </button>
          </div>
        </header>

        {/* Área de Conteúdo Centralizada e Confortável */}
        <div className="relative z-10 flex-1 overflow-y-auto px-4 pb-20 pt-16 lg:pt-6 lg:pb-8">
          <div className="mx-auto max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.section
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-2xl border border-hairline/80 bg-surface/90 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl"
              >
                {/* Cabeçalho do Card */}
                <div className="mb-6 flex items-center justify-between border-b border-hairline/60 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-ink-850 text-accent">
                      {TAB_ICONS[activeTab] ? (
                        (() => {
                          const IconComp = TAB_ICONS[activeTab];
                          return <IconComp className="h-4 w-4" />;
                        })()
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                    </span>
                    <div>
                      <h1 className="text-base font-semibold text-heading">
                        {currentApp ? t(currentApp.label) : ''}
                      </h1>
                      <p className="font-mono text-[0.68rem] text-muted">
                        gabriel.os / {activeTab}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-ok" title="Ativo" />
                  </div>
                </div>

                {/* Conteúdo Renderizado do App Ativo */}
                <div className="text-sm leading-relaxed text-body">
                  {RENDERERS[activeTab]?.(ctx)}
                </div>
              </motion.section>
            </AnimatePresence>
          </div>
        </div>
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
