import { useLang } from '../i18n/lang';
import { NOW, SECTION_LABELS } from '../content/site';
import vault from '../content/vault-stats.json';
import { Eyebrow, Section, Stagger, StaggerItem } from './ui/primitives';

const nf = { pt: 'pt-BR', en: 'en-US' } as const;

export function Now() {
  const { lang, t } = useLang();

  const stamp = vault.syncedAt
    ? new Intl.DateTimeFormat(nf[lang], { day: '2-digit', month: 'short', year: 'numeric' }).format(
        new Date(vault.syncedAt)
      )
    : null;

  return (
    <Section id="agora" className="hairline-b">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <Eyebrow>{t(SECTION_LABELS.agora)}</Eyebrow>
        {stamp && <p className="numeric text-xs text-muted">{stamp}</p>}
      </div>

      <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
        {NOW.map((card) => (
          <StaggerItem key={card.title.pt}>
            <article className="group h-full rounded-2xl border border-hairline bg-surface p-6 transition-colors duration-300 hover:border-accent/45">
              <p className="numeric text-[0.7rem] uppercase tracking-[0.18em] text-accent">
                {t(card.tag)}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{t(card.title)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{t(card.text)}</p>
              <p className="numeric mt-5 border-t border-hairline pt-4 text-xs text-muted">
                {t(card.meta)}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
