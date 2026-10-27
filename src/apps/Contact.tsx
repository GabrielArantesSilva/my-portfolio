import { ArrowUpRight } from 'lucide-react';
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
    <div className="space-y-4">
      <header className="border-b border-hairline/60 pb-3">
        <div className="inline-flex items-center gap-1.5 rounded-md border border-hairline/70 bg-ink-900/50 px-2 py-0.5 font-mono text-[0.65rem] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-ok" />
          <span>{t(CONTACT.available)}</span>
        </div>
        <h1 className="mt-2 text-base font-semibold leading-snug text-heading">
          {t(CONTACT.headline)}
        </h1>
        <p className="mt-1 text-xs text-muted">{t(CONTACT.lede)}</p>
      </header>

      <ul className="divide-y divide-hairline/60 rounded-xl border border-hairline/70 bg-ink-900/30">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
              className="group flex items-center justify-between px-3.5 py-2.5 transition-colors hover:bg-ink-850/60"
            >
              <span className="font-mono text-xs text-body transition-colors group-hover:text-accent">
                {link.label}
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
