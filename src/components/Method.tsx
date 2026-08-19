import { useLang } from '../i18n/lang';
import { RULES, SECTION_LABELS, UI } from '../content/site';
import { Eyebrow, Lede, Section, Stagger, StaggerItem, Title } from './ui/primitives';

export function Method() {
  const { t } = useLang();

  return (
    <Section id="metodo" className="hairline-b">
      <Eyebrow>{t(SECTION_LABELS.metodo)}</Eyebrow>
      <Title>{t(UI.methodTitle)}</Title>
      <Lede>{t(UI.methodLede)}</Lede>

      <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
        {RULES.map((rule) => (
          <StaggerItem key={rule.n} className="bg-canvas">
            <article className="group h-full p-7 transition-colors duration-300 hover:bg-surface">
              <span className="numeric text-xs text-accent">{rule.n}</span>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{t(rule.title)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{t(rule.text)}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
