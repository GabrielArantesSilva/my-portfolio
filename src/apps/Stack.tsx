import { motion, useReducedMotion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useLang } from '../i18n/lang';
import { UI, WORK } from '../content/site';
import vault from '../content/vault.json';

/**
 * Notas que existem no vault mas não são ferramenta que se declare em stack:
 * tutorial de instalação (duplica a nota da própria ferramenta), utilitário
 * obscuro e nota órfã. Listar isso ao lado de React 19 dilui a tela.
 */
const NOT_A_TOOL = new Set([
  'Ollama-Tutorial-Instalacao',
  'Emil-Skills',
  'fallow',
  'Signia',
]);

/** Cruzamento com as stacks reais dos projetos: o que ele de fato entrega. */
const SHIPPED = new Set(
  WORK.flatMap((w) => w.stack).map((s) => s.toLowerCase().replace(/[.\s-]/g, ''))
);

const ships = (id: string) => SHIPPED.has(id.toLowerCase().replace(/[.\s-]/g, ''));

const GROUP_LABEL: Readonly<Record<string, { pt: string; en: string }>> = {
  frameworks: { pt: 'Frameworks', en: 'Frameworks' },
  databases: { pt: 'Dados', en: 'Data' },
  tools: { pt: 'Ferramentas', en: 'Tools' },
};

const ORDER = ['frameworks', 'databases', 'tools'];

/** Nome da nota → nome legível da ferramenta. */
const pretty = (id: string) => id.replace(/-/g, ' ').replace(/\bjs\b/i, '.js');

export function Stack() {
  const { t } = useLang();
  const still = useReducedMotion() ?? false;
  const [open, setOpen] = useState<string | null>(null);

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
    <div className="space-y-5">
      <header>
        <h1 className="text-lg font-semibold text-heading">{t(UI.stackTitle)}</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">{t(UI.stackLede)}</p>
        <p className="numeric mt-2 inline-flex items-center gap-1.5 text-[0.62rem] text-muted">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ok" />
          {t(UI.shipping)}
        </p>
      </header>

      {groups.map((group, gi) => (
        <section key={group.key}>
          <h2 className="numeric text-[0.65rem] uppercase tracking-[0.18em] text-accent">
            {t(group.label)}
          </h2>

          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {group.items.map((item, i) => (
              <motion.li
                key={item.id}
                initial={still ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: gi * 0.06 + i * 0.02,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(open === item.id ? null : item.id)}
                  aria-expanded={open === item.id}
                  className={`numeric inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs transition-colors ${
                    open === item.id
                      ? 'border-accent bg-accent/12 text-heading'
                      : 'border-hairline text-muted hover:border-accent/50 hover:text-body'
                  }`}
                >
                  {ships(item.id) && (
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-ok"
                      title={UI.shipping.pt}
                    />
                  )}
                  {pretty(item.id)}
                </button>
              </motion.li>
            ))}
          </ul>
        </section>
      ))}

      {detail ? (
        <motion.article
          layout={!still}
          className="rounded-xl border border-accent/30 bg-surface p-4"
        >
          <h3 className="numeric text-sm font-semibold text-heading">{pretty(detail.id)}</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted">{detail.excerpt}</p>
          <p className="numeric mt-3 text-[0.62rem] text-ink-600">
            {ships(detail.id) && <span className="text-ok">● {t(UI.shipping)} · </span>}
            {detail.words} {t(UI.words)} · {t(UI.referencedBy)} {detail.in}
          </p>
        </motion.article>
      ) : (
        <p className="numeric rounded-xl border border-dashed border-hairline px-4 py-4 text-center text-xs text-muted">
          {t(UI.stackHint)}
        </p>
      )}
    </div>
  );
}
