import { useLang } from '../i18n/lang';
import { CONTACT, IDENTITY } from '../content/site';

const LINKS = [
  { href: `mailto:${IDENTITY.email}`, label: IDENTITY.email, external: false },
  { href: IDENTITY.github, label: IDENTITY.githubLabel, external: true },
  { href: IDENTITY.linkedin, label: IDENTITY.linkedinLabel, external: true },
] as const;

export function Contact() {
  const { t } = useLang();

  return (
    <div className="space-y-7">
      <header>
        <p className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1 text-[0.7rem] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-ok" />
          {t(CONTACT.available)}
        </p>
        <h1 className="mt-4 text-xl font-semibold leading-snug text-heading">
          {t(CONTACT.headline)}
        </h1>
        <p className="mt-2 text-sm text-muted">{t(CONTACT.lede)}</p>
      </header>

      <ul className="border-t border-hairline">
        {LINKS.map((link) => (
          <li key={link.href} className="border-b border-hairline">
            <a
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
              className="group flex items-center gap-3 py-3.5"
            >
              <span className="numeric flex-1 truncate text-sm text-body transition-colors group-hover:text-accent">
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
    </div>
  );
}
