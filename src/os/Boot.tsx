import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLang } from '../i18n/lang';
import { BOOT } from '../content/site';

/**
 * Boot sequencial sóbrio e informativo.
 * Sem gradientes neon ou fumaça artificial de IA.
 */
export function Boot({ onDone }: { onDone: () => void }) {
  const { t } = useLang();
  const still = useReducedMotion();
  const [step, setStep] = useState(0);

  const total = BOOT.lines.length;

  useEffect(() => {
    if (still) {
      onDone();
      return;
    }
    if (step > total) return;

    const delay = step === 0 ? 300 : 500;
    const timer = setTimeout(() => setStep((s) => s + 1), delay);
    return () => clearTimeout(timer);
  }, [step, total, still, onDone]);

  useEffect(() => {
    if (step > total) {
      const timer = setTimeout(onDone, 400);
      return () => clearTimeout(timer);
    }
  }, [step, total, onDone]);

  if (still) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-canvas px-6"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative w-full max-w-md rounded-2xl border border-hairline/80 bg-surface/90 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between border-b border-hairline/60 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-hairline bg-ink-850 font-mono text-xs font-semibold text-heading">
              GA
            </div>
            <span className="font-mono text-xs font-medium text-heading">gabriel.os</span>
          </div>
          <span className="font-mono text-[0.65rem] text-muted">v2.4</span>
        </div>

        <ul className="space-y-3 font-mono">
          <AnimatePresence>
            {BOOT.lines.slice(0, step).map((line, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-baseline gap-3 text-xs"
              >
                <span className="text-ok font-bold">✓</span>
                <span className={i === 0 ? 'font-medium text-heading' : 'text-muted'}>
                  {t(line)}
                </span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-ink-850">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: '0%' }}
            animate={{ width: `${Math.min(100, (step / (total + 1)) * 100)}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>

        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={onDone}
            className="font-mono text-[0.68rem] text-muted transition-colors hover:text-heading"
          >
            [{t(BOOT.skip)}]
          </button>
        </div>
      </div>
    </motion.div>
  );
}
