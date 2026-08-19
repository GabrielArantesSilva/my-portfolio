import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/lang';
import { UI, WORK } from '../content/site';
import type { WorkItem } from '../content/types';

function orgOf(item: WorkItem, t: (v: { pt: string; en: string }) => string) {
  return typeof item.org === 'string' ? item.org : t(item.org);
}

export function Work() {
  const { t } = useLang();
  const still = useReducedMotion();
  const [open, setOpen] = useState<string | null>(WORK[0]?.id ?? null);

  return (
    <div className="space-y-1">
      {WORK.map((item) => {
        const expanded = open === item.id;

        return (
          <article key={item.id} className="border-b border-hairline last:border-0">
            <h2>
              <button
                type="button"
                onClick={() => setOpen(expanded ? null : item.id)}
                aria-expanded={expanded}
                className="group w-full py-4 text-left"
              >
                <span className="flex items-baseline justify-between gap-3">
                  <span className="numeric text-[0.7rem] uppercase tracking-wider text-accent">
                    {orgOf(item, t)}
                  </span>
                  <span className="numeric shrink-0 text-[0.7rem] text-muted">{item.period}</span>
                </span>
                <span className="mt-1.5 block text-base font-semibold text-heading">
                  {t(item.title)}
                </span>
              </button>
            </h2>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={still ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-5">
                    <p className="text-sm leading-relaxed text-body">{t(item.summary)}</p>

                    {item.highlights.length > 0 && (
                      <ul className="mt-4 space-y-1.5">
                        {item.highlights.map((h) => (
                          <li key={h.pt} className="flex gap-2.5 text-sm text-muted">
                            <span aria-hidden className="text-accent">
                              ·
                            </span>
                            {t(h)}
                          </li>
                        ))}
                      </ul>
                    )}

                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {item.stack.map((tech) => (
                        <li
                          key={tech}
                          className="numeric rounded-full border border-hairline px-2 py-0.5 text-[0.65rem] text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    {item.href && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-hairline px-3.5 py-1.5 text-xs text-body transition-colors hover:border-accent hover:text-heading"
                      >
                        {item.hrefLabel ? t(item.hrefLabel) : UI.stack.pt}
                        <span aria-hidden>↗</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
