import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/lang';
import { HERO, HERO_STAT_LABELS, IDENTITY } from '../content/site';
import vault from '../content/vault-stats.json';
import { Reveal } from './ui/primitives';

const nf = { pt: 'pt-BR', en: 'en-US' } as const;

const STATS = [
  { key: 'notes', value: vault.stats.notes, ...HERO_STAT_LABELS.notes },
  { key: 'edges', value: vault.stats.edges, ...HERO_STAT_LABELS.edges },
  { key: 'words', value: vault.stats.words, ...HERO_STAT_LABELS.words },
  { key: 'projects', value: 8, ...HERO_STAT_LABELS.projects },
] as const;

export function Hero() {
  const { lang, t } = useLang();
  const still = useReducedMotion();

  return (
    <section id="topo" className="relative overflow-hidden">
      {/* Halo da primária. Puramente decorativo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-22rem] h-[46rem] w-[46rem] -translate-x-1/2 rounded-full opacity-[0.16] blur-[120px]"
        style={{ background: 'radial-gradient(circle, var(--color-iris-500), transparent 68%)' }}
      />

      <div className="section-shell relative pt-36 sm:pt-44">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-hairline px-3.5 py-1.5 text-xs text-muted">
            <span className="relative flex h-1.5 w-1.5">
              {!still && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-70" />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ok" />
            </span>
            {t(HERO.availability)}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-8 max-w-4xl text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient animate-shimmer">{t(HERO.headline)}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {t(HERO.lede)}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className="glow-accent inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-on-accent transition-transform duration-200 hover:-translate-y-0.5"
            >
              {t(HERO.ctaProjects)}
            </a>
            <a
              href="#cerebro"
              className="inline-flex items-center rounded-full border border-hairline px-7 py-3.5 text-sm font-medium text-body transition-colors duration-200 hover:border-accent hover:text-heading"
            >
              {t(HERO.ctaBrain)}
            </a>
            <span className="numeric ml-1 text-xs text-muted">
              {t(IDENTITY.location)}
            </span>
          </div>
        </Reveal>

        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.key}
              className="bg-canvas p-6"
              initial={still ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <dd className="numeric text-3xl font-semibold text-heading sm:text-4xl">
                {stat.value.toLocaleString(nf[lang])}
              </dd>
              <dt className="mt-2 text-sm text-body">{t(stat.label)}</dt>
              <p className="numeric mt-1 text-xs text-muted">{t(stat.note)}</p>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
