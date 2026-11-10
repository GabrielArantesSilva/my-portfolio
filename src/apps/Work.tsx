import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, ChevronDown, Code2, Check, Copy } from 'lucide-react';
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
  const [activeSnippet, setActiveSnippet] = useState<Record<string, number>>({});
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    });
  };

  return (
    <div className="space-y-2">
      <h1 className="sr-only">{t(UI.workTitle)}</h1>
      {WORK.map((item) => {
        const expanded = open === item.id;

        return (
          <article
            key={item.id}
            className={`rounded-xl border transition-colors ${
              expanded
                ? 'border-hairline bg-ink-900/60 shadow-sm'
                : 'border-hairline/60 bg-ink-900/20 hover:border-hairline hover:bg-ink-900/40'
            }`}
          >
            <h2>
              <button
                type="button"
                onClick={() => setOpen(expanded ? null : item.id)}
                aria-expanded={expanded}
                className="group flex w-full items-center justify-between p-3 sm:p-3.5 text-left"
              >
                <div className="min-w-0 flex-1 pr-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-accent font-medium">
                      {orgOf(item, t)}
                    </span>
                    <span className="font-mono text-[0.65rem] text-muted">/ {item.period}</span>
                    {item.metric && (
                      <span className="font-mono text-[0.62rem] text-muted hidden sm:inline">
                        · {t(item.metric)}
                      </span>
                    )}
                  </div>
                  <span className="mt-1 block text-xs sm:truncate sm:text-sm font-semibold text-heading">
                    {t(item.title)}
                  </span>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <ChevronDown
                    className={`h-4 w-4 text-muted transition-transform duration-200 ${
                      expanded ? 'rotate-180 text-heading' : ''
                    }`}
                  />
                </div>
              </button>
            </h2>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={still ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-hairline/50 p-3 sm:p-3.5 pt-2.5">
                    <p className="text-xs leading-relaxed text-body">{t(item.summary)}</p>

                    {item.highlights.length > 0 && (
                      <ul className="mt-2.5 space-y-1">
                        {item.highlights.map((h) => (
                          <li key={h.pt} className="flex gap-2 text-xs text-muted">
                            <span aria-hidden className="text-accent font-mono">
                              -
                            </span>
                            <span>{t(h)}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.architecture && (
                      <div className="mt-3 rounded-lg border border-hairline/60 bg-ink-950/40 p-2.5 sm:p-3 space-y-1">
                        <div className="font-mono text-[0.62rem] text-accent uppercase tracking-wider font-medium">
                          {t({ pt: 'Decisão de arquitetura', en: 'Architecture decision' })}
                        </div>
                        <p className="text-xs font-medium text-heading">
                          {t(item.architecture.decision)}
                        </p>
                        <p className="text-[0.7rem] text-muted leading-relaxed">
                          <span className="font-mono text-ink-500">{t({ pt: 'Trade-off: ', en: 'Trade-off: ' })}</span>
                          {t(item.architecture.tradeOff)}
                        </p>
                      </div>
                    )}

                    {item.snippets && item.snippets.length > 0 && (
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center justify-between text-[0.62rem] font-mono text-muted uppercase tracking-wider">
                          <span className="flex items-center gap-1.5 text-accent font-medium">
                            <Code2 className="h-3.5 w-3.5" />
                            <span>{t(UI.codePeekTitle)}</span>
                          </span>
                          <span className="text-ink-500">
                            {item.snippets.length} {t({ pt: 'amostras reais', en: 'production snippets' })}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {item.snippets.map((snip, sIdx) => {
                            const isCur = (activeSnippet[item.id] ?? 0) === sIdx;
                            return (
                              <button
                                key={sIdx}
                                type="button"
                                onClick={() => setActiveSnippet((prev) => ({ ...prev, [item.id]: sIdx }))}
                                className={`rounded px-2 py-1 font-mono text-[0.62rem] transition-colors border ${
                                  isCur
                                    ? 'border-accent/80 bg-accent/15 text-heading font-semibold'
                                    : 'border-hairline/60 bg-ink-950/40 text-muted hover:border-hairline hover:text-heading'
                                }`}
                              >
                                {t(snip.title)}
                              </button>
                            );
                          })}
                        </div>

                        {(() => {
                          const currentIdx = activeSnippet[item.id] ?? 0;
                          const snip = item.snippets[currentIdx];
                          if (!snip) return null;
                          const copyKey = `${item.id}-${currentIdx}`;
                          const isCopied = copiedKey === copyKey;

                          return (
                            <div className="overflow-hidden rounded-lg border border-hairline/70 bg-ink-950/80">
                              <div className="flex items-center justify-between border-b border-hairline/40 bg-ink-900/60 px-2.5 py-1.5">
                                <span className="font-mono text-[0.6rem] text-muted uppercase tracking-wider">
                                  {snip.language}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleCopy(copyKey, snip.code)}
                                  className="inline-flex items-center gap-1 font-mono text-[0.62rem] text-muted hover:text-accent transition-colors"
                                >
                                  {isCopied ? (
                                    <>
                                      <Check className="h-3 w-3 text-emerald-400" />
                                      <span className="text-emerald-400">{t(UI.copiedSnippet)}</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="h-3 w-3" />
                                      <span>{t(UI.copySnippet)}</span>
                                    </>
                                  )}
                                </button>
                              </div>
                              <pre className="max-h-64 overflow-x-auto p-3 font-mono text-[0.66rem] leading-relaxed text-slate-300 scrollbar-thin">
                                <code>{snip.code}</code>
                              </pre>
                              {snip.caption && (
                                <div className="border-t border-hairline/40 bg-ink-900/30 px-2.5 py-1.5 text-[0.65rem] text-muted font-mono">
                                  {t(snip.caption)}
                                </div>
                              )}
                            </div>
                          );
                        })()}
                      </div>
                    )}

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-hairline/40">
                      <ul className="flex flex-wrap gap-1">
                        {item.stack.map((tech) => (
                          <li
                            key={tech}
                            className="font-mono rounded border border-hairline/70 bg-ink-850 px-1.5 py-0.5 text-[0.62rem] text-muted"
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
                          className="inline-flex items-center gap-1.5 rounded-lg border border-hairline bg-ink-850 px-2.5 py-1 text-xs text-heading transition-colors hover:border-accent hover:text-accent"
                        >
                          <span>{item.hrefLabel ? t(item.hrefLabel) : UI.stack.pt}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
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
