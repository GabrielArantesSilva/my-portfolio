import { useLang } from '../i18n/lang';
import { ABOUT, IDENTITY, UI } from '../content/site';

const BLOCKS = [
  { label: UI.origin, text: ABOUT.origin },
  { label: UI.today, text: ABOUT.now },
  { label: UI.howIWork, text: ABOUT.method },
] as const;

export function About() {
  const { t } = useLang();

  return (
    <article className="space-y-3.5">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 border-b border-hairline/60 pb-3">
        <div className="flex items-center gap-3.5">
          <img
            src={IDENTITY.avatar}
            alt={IDENTITY.name}
            className="h-13 w-13 sm:h-14 sm:w-14 rounded-xl object-cover border border-hairline/80 shadow-sm shrink-0"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold text-heading">{IDENTITY.name}</h1>
              <span className="inline-flex items-center gap-1 rounded-full border border-ok/30 bg-ok/10 px-2 py-0.5 text-[0.62rem] text-ok font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                online
              </span>
            </div>
            <p className="font-mono text-xs text-muted mt-0.5">
              {t(IDENTITY.role)} · {t(IDENTITY.location)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[0.68rem] text-muted">
          <span className="rounded-md border border-hairline/60 bg-ink-900/60 px-2 py-1">
            {IDENTITY.handle}.os
          </span>
        </div>
      </header>

      <div className="grid gap-2.5 sm:grid-cols-3">
        {BLOCKS.map((block) => (
          <section
            key={block.label.pt}
            className="rounded-lg border border-hairline/70 bg-ink-900/40 p-3 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-mono text-[0.62rem] uppercase tracking-wider text-accent font-semibold">
                {t(block.label)}
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-body">
                {t(block.text)}
              </p>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
