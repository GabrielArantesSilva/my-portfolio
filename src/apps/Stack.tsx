import { useMemo, useState } from 'react';
import { useLang } from '../i18n/lang';
import { STACK_CORE, UI, WORK } from '../content/site';
import vault from '../content/vault.json';
import { TechIcon } from '../components/TechIcon';

const NOT_A_TOOL = new Set([
  'Ollama-Tutorial-Instalacao',
  'Emil-Skills',
  'fallow',
  'Signia',
  'Prisma-vs-Drizzle',
  'Prisma-Transactions',
  'Obsidian-Git',
]);

/**
 * Chave de comparação entre nomes de WORK, STACK_CORE e ids do vault:
 * "Next.js 15", "Next-js-15" e "Next.js" viram "next"; "PostgreSQL (Neon)"
 * vira "postgresql"; "Prisma-ORM" vira "prisma"; "Tailwind-CSS-v4" vira "tailwindcss".
 */
const norm = (name: string) =>
  name
    .toLowerCase()
    .replace(/\(.*?\)/g, '')
    .replace(/[-s]?(orm|v\d+)\b/g, '')
    .replace(/[\d.\s/-]/g, '')
    .replace(/js$/, '');

/** Nome curto do projeto: o que vem antes do travessão no título. */
const shortTitle = (title: string) => title.split(' — ')[0];

type VaultNote = (typeof vault.notes)[number];

interface StackItem {
  key: string;
  name: string;
  note?: VaultNote;
  /** Projetos de WORK que usam a ferramenta, já como Txt do título. */
  projects: (typeof WORK)[number]['title'][];
}

const GROUP_LABEL: Readonly<Record<string, { pt: string; en: string }>> = {
  languages: { pt: 'Linguagens', en: 'Languages' },
  frameworks: { pt: 'Frameworks & Runtime', en: 'Frameworks & Runtime' },
  databases: { pt: 'Dados & ORMs', en: 'Data & ORMs' },
  infra: { pt: 'Build, testes & infra', en: 'Build, testing & infra' },
  tools: { pt: 'Ferramentas & Libs', en: 'Tools & Libs' },
};

const ORDER = ['languages', 'frameworks', 'databases', 'infra', 'tools'] as const;

/** Nomes cujo id de arquivo não vira o nome oficial só trocando hífen. */
const OFFICIAL_NAME: Readonly<Record<string, string>> = {
  'ts-rest': 'ts-rest',
  'fast-check': 'fast-check',
};
const pretty = (id: string) =>
  OFFICIAL_NAME[id.toLowerCase()] ?? id.replace(/-js\b/gi, '.js').replace(/-/g, ' ');

const projectsUsing = (key: string) =>
  WORK.filter((w) => w.stack.some((s) => norm(s) === key)).map((w) => w.title);

export function Stack() {
  const { t } = useLang();
  const [open, setOpen] = useState<string | null>('react');

  const groups = useMemo(() => {
    const entities = vault.notes.filter(
      (n) =>
        (n.folder.includes('Entities') || n.folder.startsWith('30_entities')) &&
        !NOT_A_TOOL.has(n.id)
    );
    const noteByKey = new Map(entities.map((n) => [norm(n.id), n]));
    // A lista curada decide o grupo: nota do vault em outro domínio não repete o item.
    const taken = new Set(Object.values(STACK_CORE).flat().map(norm));

    return ORDER.map((group) => {
      const core: StackItem[] = (STACK_CORE[group as keyof typeof STACK_CORE] ?? []).map(
        (name) => {
          const key = norm(name);
          return { key, name, note: noteByKey.get(key), projects: projectsUsing(key) };
        }
      );
      const vaultOnly: StackItem[] = entities
        .filter((n) => n.domain.toLowerCase() === group && !taken.has(norm(n.id)))
        .sort((a, b) => b.in - a.in || a.id.localeCompare(b.id))
        .map((n) => {
          const key = norm(n.id);
          return { key, name: pretty(n.id), note: n, projects: projectsUsing(key) };
        });
      return { key: group, label: GROUP_LABEL[group], items: [...core, ...vaultOnly] };
    }).filter((g) => g.items.length > 0);
  }, []);

  const detail = open ? groups.flatMap((g) => g.items).find((i) => i.key === open) : null;

  return (
    <div className="space-y-4">
      <header className="flex flex-wrap items-center justify-between gap-2 border-b border-hairline/60 pb-2.5">
        <div>
          <h1 className="text-sm font-semibold text-heading">{t(UI.stackTitle)}</h1>
          <p className="mt-0.5 text-xs text-muted">{t(UI.stackLede)}</p>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[0.65rem] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-ok" />
          <span>{t(UI.shipping)}</span>
        </div>
      </header>

      <div className="grid gap-3 sm:grid-cols-2">
        {groups.map((group) => (
          <section
            key={group.key}
            className="rounded-xl border border-hairline/70 bg-ink-900/30 p-3 flex flex-col justify-between sm:odd:last:col-span-2"
          >
            <div>
              <h2 className="font-mono text-[0.65rem] uppercase tracking-wider text-accent font-medium pb-2 border-b border-hairline/40">
                {t(group.label)}
              </h2>

              <ul className="mt-2 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item.key}>
                    <button
                      type="button"
                      aria-pressed={open === item.key}
                      onClick={() => setOpen(open === item.key ? null : item.key)}
                      className={`font-mono inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[0.65rem] transition-all ${
                        open === item.key
                          ? 'border-accent bg-accent/15 text-heading font-medium shadow-sm shadow-accent/10'
                          : 'border-hairline/80 bg-ink-850/60 text-muted hover:border-hairline hover:text-heading hover:bg-ink-800/80'
                      }`}
                    >
                      <TechIcon name={item.name} className="h-3 w-3 shrink-0" />
                      <span>{item.name}</span>
                      {item.projects.length > 0 && (
                        <span className="h-1 w-1 shrink-0 rounded-full bg-ok" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* Detalhe da ferramenta selecionada */}
      {detail ? (
        <article className="rounded-xl border border-hairline bg-ink-900/70 p-3.5">
          <div className="flex items-center justify-between gap-2 border-b border-hairline/50 pb-2">
            <div className="flex items-center gap-2">
              <TechIcon name={detail.name} className="h-4.5 w-4.5 shrink-0" />
              <h3 className="text-xs font-semibold text-heading">{detail.name}</h3>
            </div>
            {detail.note && (
              <span className="font-mono text-[0.62rem] text-muted">
                {detail.note.words} {t(UI.words)} / ref: {detail.note.in}
              </span>
            )}
          </div>
          {detail.projects.length > 0 && (
            <p className="mt-2 text-xs text-body">
              <span className="font-mono text-[0.62rem] uppercase tracking-wider text-ok mr-1.5">
                {t(UI.usedIn)}
              </span>
              {detail.projects.map((p) => shortTitle(t(p))).join(' · ')}
            </p>
          )}
          <p className="mt-2 text-xs leading-relaxed text-body">
            {detail.note ? detail.note.excerpt : t(UI.stackNoNote)}
          </p>
        </article>
      ) : (
        <p className="font-mono rounded-xl border border-dashed border-hairline/60 p-3 text-center text-xs text-muted">
          {t(UI.stackHint)}
        </p>
      )}
    </div>
  );
}
