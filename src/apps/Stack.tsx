import { useMemo, useState } from 'react';
import { useLang } from '../i18n/lang';
import { UI, WORK } from '../content/site';
import vault from '../content/vault.json';

const NOT_A_TOOL = new Set([
  'Ollama-Tutorial-Instalacao',
  'Emil-Skills',
  'fallow',
  'Signia',
]);

const SHIPPED = new Set(
  WORK.flatMap((w) => w.stack).map((s) => s.toLowerCase().replace(/[.\s-]/g, ''))
);

const ships = (id: string) => SHIPPED.has(id.toLowerCase().replace(/[.\s-]/g, ''));

const GROUP_LABEL: Readonly<Record<string, { pt: string; en: string }>> = {
  frameworks: { pt: 'Frameworks', en: 'Frameworks' },
  databases: { pt: 'Dados & ORMs', en: 'Data & ORMs' },
  tools: { pt: 'Ferramentas & Libs', en: 'Tools & Libs' },
};

const ORDER = ['frameworks', 'databases', 'tools'];
const pretty = (id: string) => id.replace(/-/g, ' ').replace(/\bjs\b/i, '.js');

export function Stack() {
  const { t } = useLang();
  const [open, setOpen] = useState<string | null>('React-19');

  const groups = useMemo(() => {
    const entities = vault.notes.filter(
      (n) =>
        (n.folder.includes('Entities') || n.folder.startsWith('30_entities')) &&
        !NOT_A_TOOL.has(n.id)
    );
    return ORDER.map((key) => ({
      key,
      label: GROUP_LABEL[key],
      items: entities
        .filter((n) => n.domain === key)
        .sort((a, b) => b.in - a.in || a.id.localeCompare(b.id)),
    })).filter((g) => g.items.length > 0);
  }, []);

  const detail = open ? vault.notes.find((n) => n.id === open) : null;

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

      {/* Grid de 3 colunas compactas */}
      <div className="grid gap-3 sm:grid-cols-3">
        {groups.map((group) => (
          <section
            key={group.key}
            className="rounded-xl border border-hairline/70 bg-ink-900/30 p-3 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-mono text-[0.65rem] uppercase tracking-wider text-accent font-medium pb-2 border-b border-hairline/40">
                {t(group.label)}
              </h2>

              <ul className="mt-2 flex flex-wrap gap-1">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setOpen(open === item.id ? null : item.id)}
                      className={`font-mono inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[0.65rem] transition-colors ${
                        open === item.id
                          ? 'border-accent bg-accent/15 text-heading font-medium'
                          : 'border-hairline bg-ink-850/60 text-muted hover:border-hairline hover:text-heading'
                      }`}
                    >
                      {ships(item.id) && (
                        <span className="h-1 w-1 shrink-0 rounded-full bg-ok" />
                      )}
                      <span>{pretty(item.id)}</span>
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
            <h3 className="text-xs font-semibold text-heading">{pretty(detail.id)}</h3>
            <span className="font-mono text-[0.62rem] text-muted">
              {ships(detail.id) && <span className="text-ok font-medium mr-2">[produção]</span>}
              {detail.words} {t(UI.words)} / ref: {detail.in}
            </span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-body">{detail.excerpt}</p>
        </article>
      ) : (
        <p className="font-mono rounded-xl border border-dashed border-hairline/60 p-3 text-center text-xs text-muted">
          {t(UI.stackHint)}
        </p>
      )}
    </div>
  );
}
