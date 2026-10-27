import {
  Activity,
  Brain,
  Briefcase,
  Command,
  FileText,
  Layers,
  Mail,
  RotateCcw,
  Send,
  User,
  X,
  Menu,
} from 'lucide-react';
import type { ComponentType } from 'react';
import { useLang } from '../i18n/lang';
import { LANG } from '../i18n/lang.const';
import { IDENTITY, UI } from '../content/site';
import type { AppLayout } from './layout';

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  sobre: User,
  trabalho: Briefcase,
  agora: Activity,
  cerebro: Brain,
  stack: Layers,
  curriculo: FileText,
  pedidos: Send,
  contato: Mail,
};

interface SidebarProps {
  apps: readonly AppLayout[];
  isOpen: (id: string) => boolean;
  activeId: string;
  onSelect: (id: string) => void;
  onRestore: () => void;
  onOpenPalette: () => void;
  clock: Date;
  mobileOpen: boolean;
  onToggleMobile: () => void;
}

export function Sidebar({
  apps,
  isOpen,
  activeId,
  onSelect,
  onRestore,
  onOpenPalette,
  clock,
  mobileOpen,
  onToggleMobile,
}: SidebarProps) {
  const { lang, setLang, t } = useLang();

  const clockLocale = lang === 'pt' ? 'pt-BR' : 'en-US';
  const timeStr = clock.toLocaleTimeString(clockLocale, {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <>
      {/* Barra superior Mobile (compacta h-12) */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-12 items-center justify-between border-b border-hairline/60 bg-canvas/95 px-3.5 backdrop-blur-xl lg:hidden">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md border border-hairline bg-ink-850 font-mono text-[0.68rem] font-semibold text-heading">
            GA
          </div>
          <span className="font-mono text-xs font-semibold text-heading">
            {IDENTITY.handle}.os
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-ok/25 bg-ok/10 px-1.5 py-0.5 text-[0.6rem] text-ok">
            <span className="h-1.5 w-1.5 rounded-full bg-ok" />
            online
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onOpenPalette}
            aria-label="Command Palette"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-hairline text-muted hover:border-accent hover:text-heading transition-colors"
          >
            <Command className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={onToggleMobile}
            aria-label="Menu"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-hairline text-muted hover:border-accent hover:text-heading transition-colors"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Backdrop Mobile */}
      {mobileOpen && (
        <div
          onClick={onToggleMobile}
          className="fixed inset-0 z-40 bg-ink-950/70 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar Principal (Desktop fixa à esquerda, Mobile como drawer) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-60 flex-col border-r border-hairline/70 bg-surface/95 backdrop-blur-2xl transition-transform duration-200 ease-out lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Topo da Sidebar: Perfil e Status */}
        <div className="border-b border-hairline/60 p-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-ink-850 shadow-sm">
              <span className="font-mono text-xs font-semibold text-heading">GA</span>
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="truncate text-xs font-semibold text-heading">
                {IDENTITY.short}
              </h2>
              <p className="flex items-center gap-1 text-[0.65rem] text-muted">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ok" />
                <span className="truncate">{t(IDENTITY.role)}</span>
              </p>
            </div>
          </div>

          <div className="mt-2.5 flex items-center justify-between rounded-lg border border-hairline/60 bg-ink-900/60 px-2 py-1 text-[0.65rem]">
            <span className="font-mono text-ink-500">{IDENTITY.handle}.os</span>
            <span className="font-mono font-medium text-muted">{timeStr}</span>
          </div>
        </div>

        {/* Lista de Navegação dos Apps */}
        <nav
          className="flex-1 space-y-0.5 overflow-y-auto px-2.5 py-2.5 [scrollbar-width:thin]"
          aria-label="Aplicativos"
        >
          <div className="px-2 pb-1 pt-0.5 font-mono text-[0.6rem] font-medium uppercase tracking-wider text-ink-500">
            {lang === 'pt' ? 'Navegação' : 'Navigation'}
          </div>

          {apps.map((app) => {
            const Icon = ICONS[app.id] ?? User;
            const isOpened = isOpen(app.id);
            const isActive = activeId === app.id;

            return (
              <button
                key={app.id}
                type="button"
                onClick={() => {
                  onSelect(app.id);
                  if (mobileOpen) onToggleMobile();
                }}
                className={`group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left text-xs transition-colors duration-150 ${
                  isActive
                    ? 'border border-hairline/80 bg-ink-800/80 font-semibold text-heading shadow-sm'
                    : isOpened
                      ? 'text-heading hover:bg-ink-850/60'
                      : 'text-muted hover:bg-ink-850/40 hover:text-body'
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-md transition-colors ${
                    isActive
                      ? 'bg-ink-700 text-heading'
                      : 'bg-ink-850/70 text-muted group-hover:text-heading'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>

                <span className="min-w-0 flex-1 truncate font-medium">
                  {t(app.label)}
                </span>

                {isOpened && (
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-all ${
                      isActive ? 'bg-accent' : 'bg-ink-600'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Rodapé da Sidebar: Idioma, Ações e Comandos */}
        <div className="border-t border-hairline/60 p-2.5 space-y-2">
          <div className="flex items-center justify-between gap-1.5">
            <div
              className="flex items-center rounded-md border border-hairline p-0.5"
              role="group"
              aria-label="Idioma"
            >
              {[LANG.pt, LANG.en].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setLang(opt)}
                  className={`rounded px-1.5 py-0.5 font-mono text-[0.62rem] uppercase transition-colors ${
                    lang === opt
                      ? 'bg-ink-700 font-semibold text-heading'
                      : 'text-muted hover:text-body'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={onRestore}
              title={t(UI.restoreHint)}
              className="flex items-center gap-1 rounded-md border border-hairline px-2 py-0.5 font-mono text-[0.62rem] text-muted transition-colors hover:border-ink-600 hover:text-heading"
            >
              <RotateCcw className="h-2.5 w-2.5" />
              <span>{t(UI.restore)}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onOpenPalette}
            className="flex w-full items-center justify-between rounded-md border border-hairline/70 bg-ink-900/60 px-2.5 py-1 text-xs text-muted transition-colors hover:border-ink-600 hover:text-heading"
          >
            <span className="flex items-center gap-1.5">
              <Command className="h-3 w-3 text-ink-400" />
              <span className="text-[0.68rem]">{t(UI.commands)}</span>
            </span>
            <kbd className="rounded border border-hairline bg-ink-850 px-1 py-0.2 font-mono text-[0.58rem] text-muted">
              ⌘K
            </kbd>
          </button>
        </div>
      </aside>
    </>
  );
}
