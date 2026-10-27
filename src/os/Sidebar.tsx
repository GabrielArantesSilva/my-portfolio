import {
  Activity,
  Brain,
  Briefcase,
  Command,
  FileText,
  Layers,
  Mail,
  PanelLeftClose,
  PanelLeftOpen,
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
  collapsed: boolean;
  onToggleCollapse: () => void;
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
  collapsed,
  onToggleCollapse,
}: SidebarProps) {
  const { lang, setLang, t } = useLang();

  const clockLocale = lang === 'pt' ? 'pt-BR' : 'en-US';
  const timeStr = clock.toLocaleTimeString(clockLocale, {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <>
      {/* Botão Flutuante no Mobile (Ícone Launcher Estilo OS) */}
      <div className="fixed bottom-4 right-4 z-40 lg:hidden print:hidden">
        <button
          type="button"
          onClick={onToggleMobile}
          aria-label="Abrir Menu de Aplicativos"
          className="group flex items-center gap-2.5 rounded-full border border-hairline/80 bg-surface/90 px-3 py-1.5 shadow-2xl backdrop-blur-xl transition-all active:scale-95 hover:border-accent hover:shadow-accent/15"
        >
          <div className="relative">
            <img
              src={IDENTITY.avatar}
              alt={IDENTITY.name}
              className="h-7 w-7 rounded-full object-cover border border-hairline/80"
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-surface bg-ok" />
          </div>

          <span className="font-mono text-xs font-semibold text-heading">
            {IDENTITY.handle}.os
          </span>

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-850 text-muted transition-colors group-hover:text-heading">
            {mobileOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
          </span>
        </button>
      </div>

      {/* Backdrop Mobile */}
      {mobileOpen && (
        <div
          onClick={onToggleMobile}
          className="fixed inset-0 z-40 bg-ink-950/75 backdrop-blur-sm lg:hidden print:hidden"
        />
      )}

      {/* Sidebar Principal:
          - Desktop: Fixa à esquerda, rebativel (w-60 quando expandida, w-16 quando recolhida)
          - Mobile: Drawer lateral deslizando da esquerda
      */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-hairline/70 bg-surface/95 backdrop-blur-2xl transition-all duration-200 ease-out print:hidden ${
          mobileOpen
            ? 'w-72 translate-x-0 shadow-2xl lg:shadow-none'
            : '-translate-x-full lg:translate-x-0'
        } ${collapsed ? 'lg:w-16' : 'lg:w-60'}`}
      >
        {/* Topo da Sidebar: Perfil, Foto e Controle de Rebater */}
        <div className={`border-b border-hairline/60 ${collapsed ? 'p-2.5' : 'p-3.5'}`}>
          <div className={`flex items-center ${collapsed ? 'flex-col gap-2' : 'justify-between gap-2.5'}`}>
            <div className={`flex items-center gap-2.5 min-w-0 ${collapsed ? 'flex-col' : ''}`}>
              <div className="relative shrink-0">
                <img
                  src={IDENTITY.avatar}
                  alt={IDENTITY.name}
                  className={`rounded-lg object-cover border border-hairline/80 shadow-sm ${
                    collapsed ? 'h-8 w-8' : 'h-9 w-9'
                  }`}
                />
                <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-surface bg-ok" />
              </div>

              {!collapsed && (
                <div className="min-w-0 flex-1">
                  <h2 className="truncate text-xs font-semibold text-heading">
                    {IDENTITY.short}
                  </h2>
                  <p className="flex items-center gap-1 text-[0.65rem] text-muted">
                    <span className="truncate">{t(IDENTITY.role)}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Botão de Rebater no Desktop */}
            <div className="hidden lg:flex items-center">
              <button
                type="button"
                onClick={onToggleCollapse}
                title={collapsed ? 'Expandir barra lateral' : 'Recolher barra lateral'}
                aria-label={collapsed ? 'Expandir barra lateral' : 'Recolher barra lateral'}
                className="flex h-7 w-7 items-center justify-center rounded-md border border-hairline text-muted hover:border-accent hover:text-heading transition-colors"
              >
                {collapsed ? (
                  <PanelLeftOpen className="h-3.5 w-3.5" />
                ) : (
                  <PanelLeftClose className="h-3.5 w-3.5" />
                )}
              </button>
            </div>

            {/* Botão Fechar no Drawer Mobile */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={onToggleMobile}
                aria-label="Fechar menu"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-hairline text-muted hover:border-accent hover:text-heading transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {!collapsed && (
            <div className="mt-2.5 flex items-center justify-between rounded-lg border border-hairline/60 bg-ink-900/60 px-2 py-1 text-[0.65rem]">
              <span className="font-mono text-ink-500">{IDENTITY.handle}.os</span>
              <span className="font-mono font-medium text-muted">{timeStr}</span>
            </div>
          )}
        </div>

        {/* Lista de Navegação dos Apps */}
        <nav
          className={`flex-1 space-y-0.5 overflow-y-auto ${
            collapsed ? 'px-1.5 py-2' : 'px-2.5 py-2.5'
          } [scrollbar-width:thin]`}
          aria-label="Aplicativos"
        >
          {!collapsed && (
            <div className="px-2 pb-1 pt-0.5 font-mono text-[0.6rem] font-medium uppercase tracking-wider text-ink-500">
              {lang === 'pt' ? 'Navegação' : 'Navigation'}
            </div>
          )}

          {apps.map((app) => {
            const Icon = ICONS[app.id] ?? User;
            const isOpened = isOpen(app.id);
            const isActive = activeId === app.id;
            const labelText = t(app.label);

            return (
              <button
                key={app.id}
                type="button"
                onClick={() => {
                  onSelect(app.id);
                  if (mobileOpen) onToggleMobile();
                }}
                title={collapsed ? labelText : undefined}
                className={`group flex w-full items-center rounded-lg transition-colors duration-150 ${
                  collapsed
                    ? 'justify-center p-2'
                    : 'gap-2.5 px-2.5 py-1.5 text-left text-xs'
                } ${
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

                {!collapsed && (
                  <>
                    <span className="min-w-0 flex-1 truncate font-medium">
                      {labelText}
                    </span>

                    {isOpened && (
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-all ${
                          isActive ? 'bg-accent' : 'bg-ink-600'
                        }`}
                      />
                    )}
                  </>
                )}
              </button>
            );
          })}
        </nav>

        {/* Rodapé da Sidebar: Idioma, Ações e Comandos */}
        <div className={`border-t border-hairline/60 ${collapsed ? 'p-1.5 space-y-1.5' : 'p-2.5 space-y-2'}`}>
          <div className={`flex items-center ${collapsed ? 'flex-col gap-1.5' : 'justify-between gap-1.5'}`}>
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
              className={`flex items-center justify-center rounded-md border border-hairline text-muted transition-colors hover:border-ink-600 hover:text-heading ${
                collapsed ? 'h-7 w-7' : 'gap-1 px-2 py-0.5 font-mono text-[0.62rem]'
              }`}
            >
              <RotateCcw className="h-2.5 w-2.5" />
              {!collapsed && <span>{t(UI.restore)}</span>}
            </button>
          </div>

          <button
            type="button"
            onClick={onOpenPalette}
            title={t(UI.commands)}
            className={`flex w-full items-center justify-between rounded-md border border-hairline/70 bg-ink-900/60 text-xs text-muted transition-colors hover:border-ink-600 hover:text-heading ${
              collapsed ? 'justify-center p-1.5' : 'px-2.5 py-1'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Command className="h-3 w-3 text-ink-400" />
              {!collapsed && <span className="text-[0.68rem]">{t(UI.commands)}</span>}
            </span>
            {!collapsed && (
              <kbd className="rounded border border-hairline bg-ink-850 px-1 py-0.2 font-mono text-[0.58rem] text-muted">
                ⌘K
              </kbd>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
