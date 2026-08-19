/**
 * Extrai métricas e estrutura do vault-index.json para src/content/vault-stats.json.
 *
 * Só números e nomes de pasta saem daqui — nenhum título ou conteúdo de nota,
 * porque o vault tem 00_inbox e 05_ideias que não são públicos (SPEC.md).
 *
 * O JSON gerado é versionado de propósito: o build precisa rodar sem o vault
 * presente (CI, deploy). Rode este script antes de publicar, senão o site
 * envelhece com números de uma data que passou.
 *
 *   node scripts/sync-vault.mjs
 *   VAULT_INDEX="D:/outro/caminho/vault-index.json" node scripts/sync-vault.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const indexPath =
  process.env.VAULT_INDEX ??
  resolve(root, '..', 'Obsidian Vault', '_tooling', 'vault-index.json');

const outPath = join(root, 'src', 'content', 'vault-stats.json');

let raw;
try {
  raw = JSON.parse(readFileSync(indexPath, 'utf8'));
} catch (err) {
  console.error(`\n  Não consegui ler o índice do vault em:\n    ${indexPath}\n`);
  console.error(`  ${err.message}\n`);
  console.error('  Regenere o índice no vault, ou aponte VAULT_INDEX para o caminho certo.');
  console.error('  O src/content/vault-stats.json existente foi mantido.\n');
  process.exit(1);
}

const stats = raw.stats ?? {};
for (const key of ['notes', 'edges', 'orphans', 'brokenLinks', 'words', 'folders']) {
  if (typeof stats[key] !== 'number') {
    console.error(`\n  Índice sem a métrica "${key}". Formato mudou?\n`);
    process.exit(1);
  }
}

// Nome de pasta é estrutura; título de nota não sai daqui.
const CONCEPTS = '20_concepts/';

function tally(predicate, keyOf) {
  const counts = new Map();
  for (const note of raw.notes ?? []) {
    const path = String(note.path ?? '');
    if (!predicate(path)) continue;
    const key = keyOf(path);
    if (key) counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([slug, count]) => ({ slug, count }))
    .sort((a, b) => b.count - a.count || a.slug.localeCompare(b.slug));
}

// Pastas de topo — a arquitetura numerada do vault.
const areas = tally(
  () => true,
  (p) => (p.includes('/') ? p.slice(0, p.indexOf('/')) : '(raiz)')
);

// Domínios de conhecimento: as subpastas de 20_concepts, uma nota-hub cada.
const domains = tally(
  (p) => p.startsWith(CONCEPTS) && p.slice(CONCEPTS.length).includes('/'),
  (p) => {
    const rest = p.slice(CONCEPTS.length);
    return rest.slice(0, rest.indexOf('/'));
  }
);

const payload = {
  generatedAt: raw.generatedAt ?? null,
  syncedAt: new Date().toISOString(),
  stats: {
    notes: stats.notes,
    edges: stats.edges,
    orphans: stats.orphans,
    brokenLinks: stats.brokenLinks,
    words: stats.words,
    folders: stats.folders,
  },
  areas,
  domains,
};

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');

const age = raw.generatedAt
  ? Math.floor((Date.now() - Date.parse(raw.generatedAt)) / 86_400_000)
  : null;

console.log(
  `✓ vault-stats.json atualizado — ${stats.notes} notas, ${stats.edges} conexões, ` +
    `${areas.length} áreas, ${domains.length} domínios`
);
if (age !== null && age > 7) {
  console.warn(`⚠ o índice do vault tem ${age} dias. Regenere-o no Obsidian antes de publicar.`);
}
