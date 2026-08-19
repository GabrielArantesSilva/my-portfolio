import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLang } from '../i18n/lang';
import { BOOT } from '../content/site';

/**
 * O boot não é enfeite: é o caminho garantido de informação (PRD §4).
 * Um recrutador com pressa sai daqui sabendo quem, o quê e disponibilidade,
 * sem precisar descobrir como operar um desktop.
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

    const delay = step === 0 ? 380 : 620;
    const timer = setTimeout(() => setStep((s) => s + 1), delay);
    return () => clearTimeout(timer);
  }, [step, total, still, onDone]);

  useEffect(() => {
    if (step > total) {
      const timer = setTimeout(onDone, 520);
      return () => clearTimeout(timer);
    }
  }, [step, total, onDone]);

  if (still) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-canvas px-6"
      exit={{ opacity: 0, filter: 'blur(6px)' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[130px]"
        style={{ background: 'radial-gradient(circle, var(--color-iris-500), transparent 70%)' }}
      />

      <div className="relative w-full max-w-lg">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-10 h-12 w-12 rounded-xl border border-iris-700 bg-iris-950"
        >
          <div className="flex h-full items-center justify-center">
            <span className="numeric text-sm font-bold text-accent">ga</span>
          </div>
        </motion.div>

        <ul className="space-y-2.5">
          <AnimatePresence>
            {BOOT.lines.slice(0, step).map((line, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="numeric flex items-baseline gap-3 text-sm"
              >
                <span className="text-ok">✓</span>
                <span className={i === 0 ? 'font-semibold text-heading' : 'text-muted'}>
                  {t(line)}
                </span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        <div className="mt-10 h-px w-full overflow-hidden bg-hairline">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: '0%' }}
            animate={{ width: `${Math.min(100, (step / (total + 1)) * 100)}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>

        <button
          type="button"
          onClick={onDone}
          className="numeric mt-8 w-full text-center text-xs text-muted underline-offset-4 transition-colors hover:text-body hover:underline"
        >
          {t(BOOT.skip)}
        </button>
      </div>
    </motion.div>
  );
}
