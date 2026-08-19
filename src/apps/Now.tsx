import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/lang';
import { UI } from '../content/site';
import activity from '../content/activity.json';

const LOCALE = { pt: 'pt-BR', en: 'en-US' } as const;

/** Dias desde a data, para dar noção de recência sem depender de fuso. */
function daysAgo(iso: string | null): number | null {
  if (!iso) return null;
  const then = Date.parse(`${iso}T12:00:00Z`);
  if (Number.isNaN(then)) return null;
  return Math.max(0, Math.round((Date.now() - then) / 86_400_000));
}

export function Now() {
  const { lang, t } = useLang();
  const still = useReducedMotion() ?? false;

  const fmt = (iso: string) =>
    new Intl.DateTimeFormat(LOCALE[lang], { day: '2-digit', month: 'short' }).format(
      new Date(`${iso}T12:00:00Z`)
    );

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-lg font-semibold text-heading">{t(UI.nowTitle)}</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">{t(UI.nowLede)}</p>
      </header>

      <ol className="space-y-3">
        {activity.projects.map((project, i) => {
          const age = daysAgo(project.lastAt);

          return (
            <motion.li
              key={project.name}
              initial={still ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl border border-hairline bg-surface p-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-sm font-semibold text-heading">{project.name}</h2>
                <span className="numeric text-[0.65rem] text-muted">
                  {project.total} commits
                  {age !== null && ` · ${age === 0 ? t(UI.today2) : `${age}d`}`}
                </span>
              </div>

              <ul className="mt-3 space-y-1.5">
                {project.commits.map((commit, j) => (
                  <li key={`${project.name}-${j}`} className="flex gap-3 text-xs">
                    <span className="numeric shrink-0 text-[0.65rem] text-accent">
                      {fmt(commit.date)}
                    </span>
                    <span className="min-w-0 flex-1 text-muted">
                      {commit.subject ?? (
                        <em className="text-ink-600">{t(UI.privateCommit)}</em>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.li>
          );
        })}
      </ol>

      <p className="numeric text-center text-[0.62rem] text-ink-600">
        {t(UI.nowFooter)}
      </p>
    </div>
  );
}
