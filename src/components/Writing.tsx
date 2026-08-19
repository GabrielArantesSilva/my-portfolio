import { useLang } from '../i18n/lang';
import { SECTION_LABELS, UI } from '../content/site';
import vault from '../content/vault-stats.json';
import { Eyebrow, Lede, Section, Stagger, StaggerItem, Title } from './ui/primitives';

const max = Math.max(...vault.domains.map((d) => d.count), 1);

export function Writing() {
  const { t } = useLang();

  return (
    <Section id="escrita" className="hairline-b">
      <Eyebrow>{t(SECTION_LABELS.escrita)}</Eyebrow>
      <Title>{t(UI.writingTitle)}</Title>
      <Lede>{t(UI.writingLede)}</Lede>

      <Stagger className="mt-12 grid gap-x-10 gap-y-1 sm:grid-cols-2">
        {vault.domains.map((domain) => (
          <StaggerItem key={domain.slug}>
            <div className="flex items-center gap-4 border-b border-hairline py-3">
              <span className="numeric min-w-0 flex-1 truncate text-sm text-body">
                {domain.slug}
              </span>
              <span
                aria-hidden
                className="h-1 rounded-full bg-accent/45"
                style={{ width: `${Math.round((domain.count / max) * 92) + 8}px` }}
              />
              <span className="numeric w-7 text-right text-xs text-muted">{domain.count}</span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-12 rounded-2xl border border-hairline bg-surface p-7">
        <p className="numeric text-xs uppercase tracking-[0.18em] text-accent">
          {t(UI.health)}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{t(UI.healthNote)}</p>
      </div>
    </Section>
  );
}
