import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLang } from '../i18n/lang';
import { BOOT } from '../content/site';

/**
 * Boot sequencial sóbrio e informativo estilo systemd/kernel.
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

    const delay = step === 0 ? 250 : 400;
    const timer = setTimeout(() => setStep((s) => s + 1), delay);
    return () => clearTimeout(timer);
  }, [step, total, still, onDone]);

  useEffect(() => {
    if (step > total) {
      const timer = setTimeout(onDone, 300);
      return () => clearTimeout(timer);
    }
  }, [step, total, onDone]);

  if (still) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-canvas px-4 sm:px-6 print:hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative w-full max-w-sm sm:max-w-md rounded-xl border border-hairline/80 bg-surface/95 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
        <div className="mb-4 flex items-center justify-between border-b border-hairline/60 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md border border-hairline bg-ink-850 font-mono text-[0.68rem] font-semibold text-heading">
              GA
            </div>
            <span className="font-mono text-xs font-medium text-heading">gabriel.os</span>
          </div>
          <span className="font-mono text-[0.62rem] text-muted">v2.4</span>
        </div>

        <ul className="space-y-2 font-mono">
          <AnimatePresence>
            {BOOT.lines.slice(0, step).map((line, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-baseline gap-2.5 text-[0.72rem]"
              >
                <span className="text-[0.62rem] font-bold text-ok">[ OK ]</span>
                <span className={i === 0 ? 'font-medium text-heading' : 'text-muted'}>
                  {t(line)}
                </span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-ink-850">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: '0%' }}
            animate={{ width: `${Math.min(100, (step / (total + 1)) * 100)}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={onDone}
            className="font-mono text-[0.65rem] text-muted transition-colors hover:text-heading"
          >
            [{t(BOOT.skip)}]
          </button>
        </div>
      </div>
    </motion.div>
  );
}
