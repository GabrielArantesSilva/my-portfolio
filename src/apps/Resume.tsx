import { useLang } from '../i18n/lang';
import { ABOUT, IDENTITY, UI, WORK } from '../content/site';
import type { Txt, WorkItem } from '../content/types';

/**
 * Currículo gerado da MESMA fonte que alimenta sobre/trabalho (site.ts).
 * Documento separado divergiria do site em duas semanas.
 *
 * O PDF sai do próprio navegador via window.print() + @media print no
 * index.css — nenhuma biblioteca de PDF envolvida.
 */

const orgOf = (item: WorkItem, t: (v: Txt) => string) =>
  typeof item.org === 'string' ? item.org : t(item.org);

/**
 * Basta soltar o arquivo em src/assets/perfil.jpg (ou .png/.webp/.avif) que a
 * foto entra no lugar do monograma — o glob do Vite resolve em build, sem
 * ninguém precisar editar este arquivo.
 */
const found = import.meta.glob('../assets/perfil.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
});
const PHOTO = (Object.values(found)[0] as string | undefined) ?? null;

export function Resume() {
  const { t } = useLang();

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3 print:hidden">
        <p className="numeric text-[0.65rem] text-muted">{t(UI.resumeHint)}</p>
        <button
          type="button"
          onClick={() => window.print()}
          className="numeric shrink-0 rounded-full bg-accent px-3.5 py-1.5 text-[0.7rem] font-semibold text-on-accent transition-transform hover:-translate-y-0.5"
        >
          {t(UI.downloadPdf)}
        </button>
      </div>

      <article data-print className="space-y-6 rounded-xl bg-surface p-5 print:bg-white print:p-0">
        <header className="flex items-start gap-4 border-b border-hairline pb-5 print:border-neutral-300">
          {PHOTO ? (
            <img
              src={PHOTO}
              alt={IDENTITY.name}
              className="h-20 w-20 shrink-0 rounded-xl object-cover"
            />
          ) : (
            <span
              aria-hidden
              className="numeric flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-iris-950 text-xl font-bold text-accent print:border-neutral-300 print:bg-neutral-100 print:text-neutral-800"
            >
              GA
            </span>
          )}

          <div className="min-w-0">
            <h1 className="text-xl font-semibold text-heading print:text-black">
              {IDENTITY.name}
            </h1>
            <p className="mt-1 text-sm text-body print:text-neutral-700">{t(IDENTITY.role)}</p>
            <p className="numeric mt-2 flex flex-wrap gap-x-3 gap-y-0.5 text-[0.68rem] text-muted print:text-neutral-600">
              <span>{t(IDENTITY.location)}</span>
              <span>{IDENTITY.email}</span>
              <span>{IDENTITY.githubLabel}</span>
              <span>{IDENTITY.linkedinLabel}</span>
            </p>
          </div>
        </header>

        <section>
          <h2 className="numeric text-[0.65rem] uppercase tracking-[0.18em] text-accent print:text-neutral-500">
            {t(UI.summary)}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-body print:text-neutral-800">
            {t(ABOUT.now)}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-body print:text-neutral-800">
            {t(ABOUT.method)}
          </p>
        </section>

        <section>
          <h2 className="numeric text-[0.65rem] uppercase tracking-[0.18em] text-accent print:text-neutral-500">
            {t(UI.experience)}
          </h2>

          <ol className="mt-3 space-y-5">
            {WORK.map((item) => (
              <li key={item.id} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="text-sm font-semibold text-heading print:text-black">
                    {t(item.title)}
                  </h3>
                  <span className="numeric text-[0.68rem] text-muted print:text-neutral-600">
                    {item.period}
                  </span>
                </div>
                <p className="numeric text-[0.68rem] text-accent print:text-neutral-600">
                  {orgOf(item, t)}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-body print:text-neutral-800">
                  {t(item.summary)}
                </p>

                {item.highlights.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {item.highlights.map((h) => (
                      <li
                        key={h.pt}
                        className="flex gap-2 text-xs text-muted print:text-neutral-700"
                      >
                        <span aria-hidden>·</span>
                        {t(h)}
                      </li>
                    ))}
                  </ul>
                )}

                <p className="numeric mt-2 text-[0.65rem] text-muted print:text-neutral-600">
                  {item.stack.join(' · ')}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="break-inside-avoid">
          <h2 className="numeric text-[0.65rem] uppercase tracking-[0.18em] text-accent print:text-neutral-500">
            {t(UI.origin)}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-body print:text-neutral-800">
            {t(ABOUT.origin)}
          </p>
        </section>
      </article>
    </div>
  );
}
