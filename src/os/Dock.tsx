import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/lang';
import { LANG } from '../i18n/lang.const';
import type { Txt } from '../content/types';

export interface DockItem {
  id: string;
  label: Txt;
  glyph: string;
}

export function Dock({
  items,
  isOpen,
  isMinimized,
  onToggle,
}: {
  items: readonly DockItem[];
  isOpen: (id: string) => boolean;
  isMinimized: (id: string) => boolean;
  onToggle: (id: string) => void;
}) {
  const { lang, setLang, t } = useLang();
  const still = useReducedMotion();

  return (
    <motion.nav
      aria-label="Dock"
      initial={still ? false : { y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-3 sm:pb-5"
    >
      <div className="glass flex w-full max-w-xl items-center gap-1 rounded-2xl p-1.5 sm:w-auto sm:rounded-full sm:p-2">
        {items.map((item) => {
          const active = isOpen(item.id) && !isMinimized(item.id);

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onToggle(item.id)}
              aria-pressed={active}
              className={`group relative flex flex-1 flex-col items-center gap-1 rounded-xl px-3 py-2 transition-colors duration-200 sm:flex-none sm:flex-row sm:gap-2 sm:rounded-full sm:px-4 ${
                active ? 'bg-accent/12 text-heading' : 'text-muted hover:bg-ink-850 hover:text-body'
              }`}
            >
              <span aria-hidden className="text-base leading-none sm:text-sm">
                {item.glyph}
              </span>
              <span className="numeric text-[0.65rem] sm:text-xs">{t(item.label)}</span>
              <span
                aria-hidden
                className={`absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-opacity duration-200 sm:-bottom-1 ${
                  active ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </button>
          );
        })}

        <span aria-hidden className="mx-1 hidden h-6 w-px bg-hairline sm:block" />

        <div className="flex items-center rounded-full border border-hairline p-0.5" role="group" aria-label="Idioma">
          {[LANG.pt, LANG.en].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setLang(option)}
              aria-pressed={lang === option}
              className={`numeric rounded-full px-2 py-1 text-[0.65rem] uppercase transition-colors duration-200 ${
                lang === option ? 'bg-accent font-semibold text-on-accent' : 'text-muted hover:text-body'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
