import { Download } from 'lucide-react';
import { useLang } from '../i18n/lang';
import { ABOUT, IDENTITY, UI, WORK } from '../content/site';
import type { Txt, WorkItem } from '../content/types';

const orgOf = (item: WorkItem, t: (v: Txt) => string) =>
  typeof item.org === 'string' ? item.org : t(item.org);

const found = import.meta.glob('../assets/perfil.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
});
const PHOTO = (Object.values(found)[0] as string | undefined) ?? null;

export function Resume() {
  const { t } = useLang();

  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between gap-3 print:hidden border-b border-hairline/60 pb-2">
        <p className="font-mono text-[0.65rem] text-muted">{t(UI.resumeHint)}</p>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-1.5 shrink-0 rounded-lg bg-accent px-3 py-1 font-mono text-xs font-semibold text-on-accent transition-transform hover:-translate-y-0.5"
        >
          <Download className="h-3 w-3" />
          <span>{t(UI.downloadPdf)}</span>
        </button>
      </div>

      <article data-print className="space-y-4 rounded-xl bg-surface/60 p-3.5 sm:p-4 print:bg-white print:p-0">
        <header className="flex items-center gap-3.5 border-b border-hairline/70 pb-3.5 print:border-neutral-300">
          {PHOTO ? (
            <img
              src={PHOTO}
              alt={IDENTITY.name}
              className="h-12 w-12 shrink-0 rounded-lg object-cover"
            />
          ) : (
            <span
              aria-hidden
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-hairline bg-ink-850 font-mono text-base font-bold text-accent print:border-neutral-300 print:bg-neutral-100 print:text-neutral-800"
            >
              GA
            </span>
          )}

          <div className="min-w-0">
            <h1 className="text-base sm:text-lg font-semibold text-heading print:text-black">
              {IDENTITY.name}
            </h1>
            <p className="text-xs text-body print:text-neutral-700">{t(IDENTITY.role)}</p>
            <p className="font-mono mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-[0.65rem] text-muted print:text-neutral-600">
              <span>{t(IDENTITY.location)}</span>
              <span>{IDENTITY.email}</span>
              <span>{IDENTITY.githubLabel}</span>
            </p>
          </div>
        </header>

        <section>
          <h2 className="font-mono text-[0.62rem] uppercase tracking-wider text-accent print:text-neutral-500 font-medium">
            {t(UI.summary)}
          </h2>
          <p className="mt-1.5 text-xs leading-relaxed text-body print:text-neutral-800">
            {t(ABOUT.now)}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-body print:text-neutral-800">
            {t(ABOUT.method)}
          </p>
        </section>

        <section>
          <h2 className="font-mono text-[0.62rem] uppercase tracking-wider text-accent print:text-neutral-500 font-medium">
            {t(UI.experience)}
          </h2>

          <ol className="mt-2.5 space-y-3">
            {WORK.map((item) => (
              <li key={item.id} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="text-xs sm:text-sm font-semibold text-heading print:text-black">
                    {t(item.title)}
                  </h3>
                  <span className="font-mono text-[0.65rem] text-muted print:text-neutral-600">
                    {item.period}
                  </span>
                </div>
                <p className="font-mono text-[0.65rem] text-accent print:text-neutral-600">
                  {orgOf(item, t)}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-body print:text-neutral-800">
                  {t(item.summary)}
                </p>

                {item.highlights.length > 0 && (
                  <ul className="mt-1.5 space-y-0.5">
                    {item.highlights.map((h) => (
                      <li
                        key={h.pt}
                        className="flex gap-1.5 text-xs text-muted print:text-neutral-700"
                      >
                        <span aria-hidden className="text-accent font-mono">-</span>
                        <span>{t(h)}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <p className="font-mono mt-1.5 text-[0.62rem] text-muted print:text-neutral-600">
                  {item.stack.join(' / ')}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="break-inside-avoid">
          <h2 className="font-mono text-[0.62rem] uppercase tracking-wider text-accent print:text-neutral-500 font-medium">
            {t(UI.origin)}
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-body print:text-neutral-800">
            {t(ABOUT.origin)}
          </p>
        </section>
      </article>
    </div>
  );
}
