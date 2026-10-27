import {
  Download,
  ExternalLink,
  Mail,
  Code2,
  Globe,
  MapPin,
  Phone,
} from 'lucide-react';
import { useLang } from '../i18n/lang';
import { ABOUT, IDENTITY, UI, WORK } from '../content/site';
import type { Txt, WorkItem } from '../content/types';

const orgOf = (item: WorkItem, t: (v: Txt) => string) =>
  typeof item.org === 'string' ? item.org : t(item.org);

const found = import.meta.glob('../assets/perfil.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
});
const PHOTO = (Object.values(found)[0] as string | undefined) ?? null;

const SKILLS = [
  {
    category: { pt: 'Linguagens & Core', en: 'Languages & Core' },
    items: ['TypeScript', 'JavaScript (ESNext)', 'Node.js', 'SQL', 'HTML5 / CSS3'],
  },
  {
    category: { pt: 'Front-end & Mobile', en: 'Front-end & Mobile' },
    items: ['React 19', 'Next.js 15', 'React Native', 'Expo', 'Tailwind CSS'],
  },
  {
    category: { pt: 'Back-end & Banco de Dados', en: 'Back-end & Databases' },
    items: ['Express', 'Fastify', 'Prisma ORM', 'Supabase (RLS)', 'PostgreSQL', 'Drizzle'],
  },
  {
    category: { pt: 'Arquitetura & Engenharia', en: 'Architecture & Testing' },
    items: ['Domain-Driven Design (DDD)', 'Clean Architecture', 'Vitest', 'Docker', 'CI/CD'],
  },
];

export function Resume() {
  const { lang, t } = useLang();

  return (
    <div className="space-y-4">
      {/* Barra de Ações (Oculta na Impressão) */}
      <div className="flex items-center justify-between gap-3 border-b border-hairline/60 pb-2.5 print:hidden">
        <div>
          <span className="font-mono text-xs font-semibold text-heading">
            {lang === 'pt' ? 'Currículo Profissional' : 'Professional Résumé'}
          </span>
          <p className="font-mono text-[0.62rem] text-muted">
            {t(UI.resumeHint)}
          </p>
        </div>

        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-1.5 shrink-0 rounded-lg bg-accent px-3 py-1.5 font-mono text-xs font-semibold text-on-accent transition-transform hover:-translate-y-0.5 shadow-sm"
        >
          <Download className="h-3.5 w-3.5" />
          <span>{t(UI.downloadPdf)}</span>
        </button>
      </div>

      {/* Documento Principal do Currículo */}
      <article
        data-print
        className="space-y-5 rounded-xl border border-hairline/70 bg-ink-900/40 p-4 sm:p-6 print:border-none print:bg-white print:p-0"
      >
        {/* Cabeçalho do Currículo */}
        <header
          data-resume-header
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-hairline/60 pb-4 print:border-neutral-300 print:pb-3"
        >
          <div className="flex items-center gap-4">
            {PHOTO ? (
              <img
                src={PHOTO}
                alt={IDENTITY.name}
                className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-xl object-cover border border-hairline/80 shadow-sm print:h-20 print:w-20 print:rounded-lg print:border-neutral-300"
              />
            ) : (
              <div
                aria-hidden
                className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-xl border border-hairline/80 bg-ink-850 font-mono text-xl font-bold text-accent print:h-20 print:w-20 print:border-neutral-300 print:bg-neutral-100 print:text-neutral-900"
              >
                GA
              </div>
            )}

            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-heading print:text-black">
                {IDENTITY.name}
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-accent print:text-neutral-700 mt-0.5">
                {t(IDENTITY.role)}
              </p>
              <p className="flex items-center gap-1.5 font-mono text-[0.68rem] text-muted print:text-neutral-600 mt-1">
                <MapPin className="h-3 w-3 shrink-0 print:hidden" />
                <span>{t(IDENTITY.location)}</span>
              </p>
            </div>
          </div>

          {/* Links e Contatos */}
          <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-muted print:text-neutral-800">
            <a
              href={`mailto:${IDENTITY.email}`}
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail className="h-3.5 w-3.5 print:hidden" />
              <span>{IDENTITY.email}</span>
            </a>
            <a
              href={IDENTITY.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone className="h-3.5 w-3.5 print:hidden" />
              <span>{IDENTITY.whatsappLabel}</span>
            </a>
            <a
              href={IDENTITY.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Code2 className="h-3.5 w-3.5 print:hidden" />
              <span>{IDENTITY.githubLabel}</span>
            </a>
            <a
              href={IDENTITY.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Globe className="h-3.5 w-3.5 print:hidden" />
              <span>{IDENTITY.linkedinLabel}</span>
            </a>
          </div>
        </header>

        {/* Resumo Profissional */}
        <section className="space-y-1.5 print-break-avoid">
          <h2 className="font-mono text-[0.68rem] uppercase tracking-wider text-accent print:text-neutral-700 font-semibold">
            {t(UI.summary)}
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-body print:text-neutral-800">
            {t(ABOUT.now)}
          </p>
          <p className="text-xs sm:text-sm leading-relaxed text-body print:text-neutral-800">
            {t(ABOUT.method)}
          </p>
        </section>

        {/* Competências Técnicas */}
        <section className="space-y-2 print-break-avoid">
          <h2 className="font-mono text-[0.68rem] uppercase tracking-wider text-accent print:text-neutral-700 font-semibold">
            {t(UI.skillsTitle)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {SKILLS.map((skill) => (
              <div
                key={skill.category.pt}
                className="rounded-lg border border-hairline/60 bg-ink-950/40 p-2.5 print-card print:border-neutral-200 print:bg-neutral-50"
              >
                <div className="font-mono text-[0.68rem] font-semibold text-heading print:text-neutral-900">
                  {t(skill.category)}
                </div>
                <div className="mt-1 font-mono text-[0.65rem] text-muted print:text-neutral-700">
                  {skill.items.join(' · ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experiência Profissional & Principais Sistemas */}
        <section className="space-y-3">
          <h2 className="font-mono text-[0.68rem] uppercase tracking-wider text-accent print:text-neutral-700 font-semibold">
            {t(UI.experience)}
          </h2>

          <div className="space-y-3.5 divide-y divide-hairline/40 print:divide-neutral-200">
            {WORK.map((item) => (
              <div key={item.id} className="pt-3.5 first:pt-0 print-break-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs sm:text-sm font-semibold text-heading print:text-black">
                      {t(item.title)}
                    </h3>
                    {item.href && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center text-accent hover:underline print:hidden"
                        title={item.href}
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                  <span className="font-mono text-[0.65rem] text-muted print:text-neutral-600 font-medium">
                    {item.period}
                  </span>
                </div>

                <div className="font-mono text-[0.68rem] font-medium text-accent print:text-neutral-700 mt-0.5">
                  {orgOf(item, t)}
                </div>

                <p className="mt-1.5 text-xs leading-relaxed text-body print:text-neutral-800">
                  {t(item.summary)}
                </p>

                {item.highlights.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {item.highlights.map((h) => (
                      <li
                        key={h.pt}
                        className="flex items-start gap-2 text-xs text-muted print:text-neutral-800"
                      >
                        <span aria-hidden className="font-mono text-accent font-bold print:text-neutral-600">-</span>
                        <span>{t(h)}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-2 flex flex-wrap gap-1">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-hairline/60 bg-ink-950/60 px-1.5 py-0.5 font-mono text-[0.62rem] text-muted print-badge print:border-neutral-300 print:bg-neutral-100 print:text-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fundamentos, Formação e Filosofia de Trabalho */}
        <section className="space-y-1.5 print-break-avoid border-t border-hairline/60 pt-3.5 print:border-neutral-300">
          <h2 className="font-mono text-[0.68rem] uppercase tracking-wider text-accent print:text-neutral-700 font-semibold">
            {t(UI.educationTitle)}
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-body print:text-neutral-800">
            {t(ABOUT.origin)}
          </p>
        </section>
      </article>
    </div>
  );
}
