import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/lang';
import { UI } from '../content/site';
import vault from '../content/vault-stats.json';

const max = Math.max(...vault.domains.map((d) => d.count), 1);

export function Brain() {
  const { t } = useLang();
  const still = useReducedMotion();

  return (
    <div className="space-y-7">
      <header>
        <h1 className="text-xl font-semibold text-heading">{t(UI.brainTitle)}</h1>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">{t(UI.brainLede)}</p>
      </header>

      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="numeric text-[0.7rem] uppercase tracking-[0.18em] text-accent">
            {t(UI.domains)}
          </h2>
          <span className="numeric text-[0.7rem] text-muted">
            {vault.stats.notes} {t(UI.notes)}
          </span>
        </div>

        <ul className="mt-4 space-y-0.5">
          {vault.domains.map((domain, i) => (
            <li key={domain.slug} className="flex items-center gap-3 py-1.5">
              <span className="numeric w-36 shrink-0 truncate text-xs text-body">
                {domain.slug}
              </span>
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-850">
                <motion.span
                  className="block h-full rounded-full bg-accent/60"
                  initial={still ? false : { width: 0 }}
                  animate={{ width: `${(domain.count / max) * 100}%` }}
                  transition={{ duration: 0.7, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
              <span className="numeric w-6 shrink-0 text-right text-[0.7rem] text-muted">
                {domain.count}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
