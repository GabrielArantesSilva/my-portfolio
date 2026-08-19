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
    <article className="space-y-7">
      <header>
        <h1 className="text-2xl font-semibold text-heading">{IDENTITY.name}</h1>
        <p className="numeric mt-1.5 text-xs text-muted">
          {t(IDENTITY.role)} · {t(IDENTITY.location)}
        </p>
      </header>

      {BLOCKS.map((block) => (
        <section key={block.label.pt}>
          <h2 className="numeric text-[0.7rem] uppercase tracking-[0.18em] text-accent">
            {t(block.label)}
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-body">{t(block.text)}</p>
        </section>
      ))}
    </article>
  );
}
