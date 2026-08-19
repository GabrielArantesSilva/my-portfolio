import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLang } from '../i18n/lang';
import { UI } from '../content/site';
import type { Txt } from '../content/types';
import vault from '../content/vault.json';

export interface Command {
  id: string;
  label: string;
  hint: string;
  run: () => void;
}

const MAX_RESULTS = 8;

const KEY = {
  down: 'ArrowDown',
  up: 'ArrowUp',
  enter: 'Enter',
  escape: 'Escape',
} as const;

export function CommandPalette({
  open,
  onClose,
  apps,
  onOpenApp,
  onSelectNote,
}: {
  open: boolean;
  onClose: () => void;
  apps: readonly { id: string; label: Txt }[];
  onOpenApp: (id: string) => void;
  onSelectNote: (id: string) => void;
}) {
  const { t } = useLang();
  const still = useReducedMotion() ?? false;
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setCursor(0);
      // Espera o overlay montar antes de roubar o foco.
      const id = requestAnimationFrame(() => inputRef.current?.focus());
      return () => cancelAnimationFrame(id);
    }
  }, [open]);

  const results = useMemo<Command[]>(() => {
    const q = query.trim().toLowerCase();

    const appHits: Command[] = apps
      .filter((a) => !q || t(a.label).toLowerCase().includes(q))
      .map((a) => ({
        id: `app:${a.id}`,
        label: t(a.label),
        hint: t(UI.openApp),
        run: () => onOpenApp(a.id),
      }));

    if (!q) return appHits;

    const noteHits: Command[] = vault.notes
      .filter(
        (n) =>
          n.id.toLowerCase().includes(q) ||
          n.domain.toLowerCase().includes(q) ||
          n.tags.some((tag) => tag.toLowerCase().includes(q))
      )
      .slice(0, MAX_RESULTS)
      .map((n) => ({
        id: `note:${n.id}`,
        label: n.title,
        hint: n.domain,
        run: () => onSelectNote(n.id),
      }));

    return [...appHits, ...noteHits].slice(0, MAX_RESULTS + 2);
  }, [query, apps, t, onOpenApp, onSelectNote]);

  useEffect(() => setCursor(0), [query]);

  const commit = (cmd: Command | undefined) => {
    if (!cmd) return;
    cmd.run();
    onClose();
  };

  const step = (delta: number) => {
    const n = Math.max(1, results.length);
    setCursor((c) => (c + delta + n) % n);
  };

  const HANDLERS: Readonly<Record<string, () => void>> = {
    [KEY.down]: () => step(1),
    [KEY.up]: () => step(-1),
    [KEY.enter]: () => commit(results[cursor]),
    [KEY.escape]: onClose,
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const handler = HANDLERS[e.key];
    if (!handler) return;
    e.preventDefault();
    handler();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-ink-950/70 px-4 pt-[14vh] backdrop-blur-sm"
          initial={still ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t(UI.commands)}
            onClick={(e) => e.stopPropagation()}
            initial={still ? false : { opacity: 0, y: -14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-accent/25 bg-surface shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]"
          >
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder={t(UI.commandHint)}
              aria-label={t(UI.commandHint)}
              className="numeric w-full border-b border-hairline bg-transparent px-4 py-3.5 text-sm text-heading outline-none placeholder:text-ink-600"
            />

            <ul className="max-h-80 overflow-y-auto py-1.5">
              {results.length === 0 && (
                <li className="numeric px-4 py-6 text-center text-xs text-muted">
                  {t(UI.noResults)}
                </li>
              )}
              {results.map((cmd, i) => (
                <li key={cmd.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setCursor(i)}
                    onClick={() => commit(cmd)}
                    aria-selected={i === cursor}
                    className={`flex w-full items-baseline gap-3 px-4 py-2.5 text-left transition-colors ${
                      i === cursor ? 'bg-accent/12' : ''
                    }`}
                  >
                    <span className="numeric min-w-0 flex-1 truncate text-sm text-body">
                      {cmd.label}
                    </span>
                    <span className="numeric shrink-0 text-[0.65rem] text-muted">{cmd.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
