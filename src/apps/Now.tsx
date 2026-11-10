import { useLang } from '../i18n/lang';
import { NOW_FOCUS, UI } from '../content/site';
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

  const focusItems = [
    NOW_FOCUS.currentProject,
    NOW_FOCUS.learning,
    NOW_FOCUS.availability,
  ] as const;

  return (
    <div className="space-y-4">
      {/* Cabeçalho */}
      <header className="border-b border-hairline/60 pb-2.5">
        <h1 className="text-sm font-semibold text-heading">{t(UI.nowTitle)}</h1>
        <p className="mt-0.5 text-xs text-muted">{t(UI.nowLede)}</p>
      </header>

      {/* Radar do Momento (Now Focus) */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-[0.62rem] font-mono text-muted uppercase tracking-wider">
          <span>{t(UI.nowFocusTitle)}</span>
          <span className="text-ink-500">2026</span>
        </div>

        <div className="grid gap-2 sm:grid-cols-3">
          {focusItems.map((item) => (
            <div
              key={item.badge.pt}
              className="rounded-xl border border-hairline/70 bg-ink-950/40 p-3 flex flex-col justify-between space-y-2"
            >
              <div>
                <span className="font-mono text-[0.6rem] text-accent uppercase tracking-wider block mb-1">
                  {t(item.badge)}
                </span>
                <h2 className="text-xs font-semibold text-heading leading-snug">
                  {t(item.title)}
                </h2>
                <p className="mt-1.5 text-[0.72rem] text-muted leading-relaxed">
                  {t(item.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Métricas Globais de Engenharia */}
      <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-hairline/70 bg-hairline">
        <div className="bg-surface px-3 py-2">
          <dd className="numeric text-sm sm:text-base font-semibold text-heading">
            {activity.totals.commits}
          </dd>
          <dt className="text-[0.6rem] uppercase tracking-wider text-muted font-mono">
            {t(UI.trackedCommits)}
          </dt>
        </div>
        <div className="bg-surface px-3 py-2">
          <dd className="numeric text-sm sm:text-base font-semibold text-heading">
            {activity.totals.repos}
          </dd>
          <dt className="text-[0.6rem] uppercase tracking-wider text-muted font-mono">
            {t(UI.activeRepos)}
          </dt>
        </div>
        <div className="bg-surface px-3 py-2">
          <dd className="numeric text-sm sm:text-base font-semibold text-heading">
            {t(UI.today2)}
          </dd>
          <dt className="text-[0.6rem] uppercase tracking-wider text-muted font-mono">
            {lang === 'pt' ? 'última compilação' : 'latest build'}
          </dt>
        </div>
      </dl>

      {/* Atividade nos Repositórios (Live Commit Stream) */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-[0.62rem] font-mono text-muted uppercase tracking-wider">
          <span>{t(UI.nowActivityTitle)}</span>
          <span className="text-ink-500">{activity.projects.length} repos</span>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {activity.projects.map((project) => {
            const age = daysAgo(project.lastAt);
            const isToday = age === 0;

            return (
              <article
                key={project.name}
                className={`rounded-xl border p-3 flex flex-col justify-between transition-colors ${
                  isToday
                    ? 'border-hairline bg-ink-900/50 shadow-xs'
                    : 'border-hairline/60 bg-ink-900/20'
                }`}
              >
                <div className="flex items-center justify-between gap-2 border-b border-hairline/40 pb-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    {isToday && (
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 animate-pulse"
                        title={t(UI.activeToday)}
                      />
                    )}
                    <h3 className="text-xs font-semibold text-heading truncate">
                      {project.name}
                    </h3>
                  </div>

                  <span className="font-mono text-[0.62rem] text-muted shrink-0">
                    {project.total} commits {age !== null && `/ ${isToday ? t(UI.today2) : `${age}d`}`}
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
                          <span className="italic text-ink-500 font-mono text-[0.65rem]">
                            {t(UI.privateCommit)}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <p className="font-mono text-center text-[0.6rem] text-ink-500 pt-1">
        {t(UI.nowFooter)}
      </p>
    </div>
  );
}
