import { useLang } from '../i18n/lang';
import { RITUAL, SECTION_LABELS, UI } from '../content/site';
import vault from '../content/vault-stats.json';
import { Reveal, Stagger, StaggerItem } from './ui/primitives';

export function Brain() {
  const { t } = useLang();

  return (
    <section id="cerebro" className="relative overflow-hidden bg-iris-950">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-14rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full opacity-25 blur-[110px]"
        style={{ background: 'radial-gradient(circle, var(--color-iris-500), transparent 70%)' }}
      />

      <div className="section-shell relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="numeric text-xs uppercase tracking-[0.22em] text-iris-300">
            {t(SECTION_LABELS.cerebro)}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.14] sm:text-4xl md:text-[2.6rem]">
            {t(UI.brainTitle)}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-iris-100/80">
            {t(UI.brainLede)}
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {[
              { v: vault.stats.orphans, l: UI.healthOrphans },
              { v: vault.stats.brokenLinks, l: UI.healthBroken },
              { v: vault.stats.folders, l: UI.healthFolders },
            ].map((item) => (
              <div key={item.l.pt} className="rounded-xl border border-iris-800 p-4">
                <dd className="numeric text-2xl font-semibold text-heading">{item.v}</dd>
                <dt className="mt-1 text-xs text-iris-200/75">{t(item.l)}</dt>
              </div>
            ))}
          </dl>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-iris-800 bg-ink-950/45 p-7 backdrop-blur-sm">
            <h3 className="text-lg font-semibold">{t(UI.ritualTitle)}</h3>

            <Stagger className="mt-6 space-y-0">
              {RITUAL.map((step) => (
                <StaggerItem key={step.n}>
                  <div className="flex items-baseline gap-4 border-b border-iris-900 py-3.5 last:border-0">
                    <span className="numeric text-xs text-iris-400">{step.n}</span>
                    <span className="text-sm text-iris-100/90">{t(step.text)}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
