import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { useLang } from '../i18n/lang';
import { PROJECTS, SECTION_LABELS, STATUS_LABELS, UI } from '../content/site';
import type { ProjectStatus } from '../content/types';
import { Eyebrow, Section, Title } from './ui/primitives';

const STATUS_DOT: Readonly<Record<ProjectStatus, string>> = {
  ativo: 'bg-ok',
  pausado: 'bg-warn',
  concluido: 'bg-ink-500',
};

export function Projects() {
  const { t } = useLang();
  const [open, setOpen] = useState<string | null>(PROJECTS[0]?.num ?? null);
  const still = useReducedMotion();

  return (
    <Section id="projetos" className="hairline-b">
      <Eyebrow>{t(SECTION_LABELS.projetos)}</Eyebrow>
      <Title>{t(UI.projectsTitle)}</Title>
      <p className="numeric mt-4 text-xs text-muted">{t(UI.projectsHint)}</p>

      <ul id="lista" className="mt-12 border-t border-hairline">
        {PROJECTS.map((project) => {
          const isOpen = open === project.num;

          return (
            <li key={project.num} className="border-b border-hairline">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : project.num)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-4 py-5 text-left transition-colors duration-200 hover:text-heading sm:gap-6"
                >
                  <span className="numeric w-8 shrink-0 text-xs text-muted">{project.num}</span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-semibold text-heading">{project.name}</span>
                    <span className="mt-1 block truncate text-sm text-muted">
                      {t(project.summary)}
                    </span>
                  </span>

                  <span className="hidden shrink-0 items-center gap-2 sm:flex">
                    <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[project.status]}`} />
                    <span className="numeric text-xs text-muted">
                      {t(STATUS_LABELS[project.status])}
                    </span>
                  </span>

                  <span
                    aria-hidden
                    className={`shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={still ? false : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-6 pb-8 pl-0 sm:grid-cols-[1fr_auto] sm:pl-14">
                      <div>
                        <p className="max-w-2xl text-sm leading-relaxed text-body">
                          {t(project.summary)}
                        </p>
                        <p className="mt-4 text-xs text-muted">
                          <span className="numeric uppercase tracking-wider">{t(UI.role)}</span>{' '}
                          · {t(project.role)}
                        </p>

                        <ul className="mt-5 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <li
                              key={tech}
                              className="numeric rounded-full border border-hairline px-2.5 py-1 text-[0.7rem] text-muted"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="sm:text-right">
                        {project.href ? (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-4 py-2 text-sm text-body transition-colors duration-200 hover:border-accent hover:text-heading"
                          >
                            {project.hrefLabel ? t(project.hrefLabel) : project.name}
                            <span aria-hidden>↗</span>
                          </a>
                        ) : (
                          <span className="numeric text-xs text-muted">{t(UI.privateRepo)}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
