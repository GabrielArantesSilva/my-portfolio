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
    <article className="space-y-3">
      <header className="border-b border-hairline/60 pb-2">
        <h1 className="text-base font-semibold text-heading">{IDENTITY.name}</h1>
        <p className="font-mono text-xs text-muted mt-0.5">
          {t(IDENTITY.role)} / {t(IDENTITY.location)}
        </p>
      </header>

      <div className="grid gap-2.5 sm:grid-cols-3">
        {BLOCKS.map((block) => (
          <section
            key={block.label.pt}
            className="rounded-lg border border-hairline/70 bg-ink-900/40 p-3 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-mono text-[0.62rem] uppercase tracking-wider text-accent font-medium">
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
