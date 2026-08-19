import { useLang } from '../i18n/lang';
import { CONTACT, IDENTITY, SECTION_LABELS } from '../content/site';
import { Eyebrow, Reveal, Section } from './ui/primitives';

const LINKS = [
  { href: `mailto:${IDENTITY.email}`, label: IDENTITY.email, external: false },
  { href: IDENTITY.github, label: IDENTITY.githubLabel, external: true },
  { href: IDENTITY.linkedin, label: IDENTITY.linkedinLabel, external: true },
] as const;

export function Contact() {
  const { t } = useLang();

  return (
    <Section id="contato">
      <Eyebrow>{t(SECTION_LABELS.contato)}</Eyebrow>

      <Reveal>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.12] sm:text-4xl md:text-[2.75rem]">
          {t(CONTACT.headline)}
        </h2>
        <p className="mt-5 max-w-xl text-lg text-muted">{t(CONTACT.lede)}</p>
      </Reveal>

      <ul className="mt-12 border-t border-hairline">
        {LINKS.map((link) => (
          <li key={link.href} className="border-b border-hairline">
            <a
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
              className="group flex items-center gap-4 py-5 transition-colors duration-200"
            >
              <span className="numeric flex-1 text-base text-body transition-colors duration-200 group-hover:text-accent">
                {link.label}
              </span>
              <span
                aria-hidden
                className="text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>

      <footer className="mt-16 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
        <p className="numeric">
          {IDENTITY.name} · {t(IDENTITY.location)}
        </p>
        <p className="numeric">{t(IDENTITY.role)}</p>
      </footer>
    </Section>
  );
}
