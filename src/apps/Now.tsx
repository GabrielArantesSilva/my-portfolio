import { useLang } from '../i18n/lang';
import { UI } from '../content/site';
import activity from '../content/activity.json';

const LOCALE = { pt: 'pt-BR', en: 'en-US' } as const;

function daysAgo(iso: string | null): number | null {
  if (!iso) return null;
  const then = Date.parse(`${iso}T12:00:00Z`);
  if (Number.isNaN(then)) return null;
  return Math.max(0, Math.round((Date.now() - then) / 86_400_000));
}

export function Now() {
  const { lang, t } = useLang();

  const fmt = (iso: string) =>
    new Intl.DateTimeFormat(LOCALE[lang], { day: '2-digit', month: 'short' }).format(
      new Date(`${iso}T12:00:00Z`)
    );

  return (
    <div className="space-y-3.5">
      <header className="border-b border-hairline/60 pb-2.5">
        <h1 className="text-sm font-semibold text-heading">{t(UI.nowTitle)}</h1>
        <p className="mt-0.5 text-xs text-muted">{t(UI.nowLede)}</p>
      </header>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {activity.projects.map((project) => {
          const age = daysAgo(project.lastAt);

          return (
            <article
              key={project.name}
              className="rounded-xl border border-hairline/70 bg-ink-900/40 p-3 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between gap-2 border-b border-hairline/40 pb-2">
                <h2 className="text-xs font-semibold text-heading">{project.name}</h2>
                <span className="font-mono text-[0.62rem] text-muted">
                  {project.total} commits {age !== null && `/ ${age === 0 ? t(UI.today2) : `${age}d`}`}
                </span>
              </div>

              <ul className="mt-2 space-y-1">
                {project.commits.slice(0, 3).map((commit, j) => (
                  <li key={`${project.name}-${j}`} className="flex items-start gap-2 text-xs">
                    <span className="font-mono shrink-0 text-[0.62rem] text-accent pt-0.5">
                      {fmt(commit.date)}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-muted text-[0.72rem]">
                      {commit.subject ?? (
                        <span className="italic text-ink-500">{t(UI.privateCommit)}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <p className="font-mono text-center text-[0.6rem] text-ink-500 pt-1">
        {t(UI.nowFooter)}
      </p>
    </div>
  );
}
