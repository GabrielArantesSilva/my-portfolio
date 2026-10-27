/**
 * Extrai o subconjunto PÚBLICO do vault para src/content/vault.json.
 *
 * Filtro de publicação (PRD): só entra conhecimento técnico. Ficam de fora
 * 05_ideias (planos comerciais não lançados, alguns sobre ativos da Origami),
 * 50_projects (tem nome de cliente), 00_inbox, 40_notes, Clippings e a raiz.
 * O que sai daqui vai para a internet — na dúvida, não entra.
 *
 *   node scripts/sync-vault.mjs
 *   VAULT_INDEX="D:/caminho/vault-index.json" node scripts/sync-vault.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const defaultIndexPath = resolve(
  root,
  '..',
  '..',
  'AGENTS',
  'My-obsidian-brain',
  '_tooling',
  'vault-index.json'
);

const indexPath =
  process.env.VAULT_INDEX ??
  (existsSync(defaultIndexPath)
    ? defaultIndexPath
    : resolve(root, '..', 'Obsidian Vault', '_tooling', 'vault-index.json'));

const outPath = join(root, 'src', 'content', 'vault.json');

/** Prefixos de pasta liberados. Qualquer outro caminho é descartado. */
const PUBLIC_ROOTS = [
  '20_concepts/',
  '30_entities/',
  '10_sources/',
  '04_Resources/Concepts/',
  '04_Resources/Entities/',
  '04_Resources/Sources/',
];

const IGNORED_DOMAINS = new Set(['Clippings', 'Threejs-Documentation', 'Sources']);

const isPublic = (path) => PUBLIC_ROOTS.some((root) => path.startsWith(root));

let raw;
try {
  raw = JSON.parse(readFileSync(indexPath, 'utf8'));
} catch (err) {
  console.error(`\n  Não consegui ler o índice do vault em:\n    ${indexPath}\n`);
  console.error(`  ${err.message}\n`);
  console.error('  Regenere o índice (_tooling/extract-vault.mjs) ou aponte VAULT_INDEX.');
  console.error('  O src/content/vault.json existente foi mantido.\n');
  process.exit(1);
}

function resolveDomain(folder) {
  const parts = String(folder ?? '')
    .split('/')
    .filter(Boolean);
  if (parts.length >= 3) return parts[2];
  if (parts.length === 2 && parts[0] === '04_Resources') return parts[1];
  return parts[1] ?? parts[0] ?? '';
}

const allNotes = raw.notes ?? [];
const publicNotes = allNotes
  .filter((n) => isPublic(String(n.path ?? '')))
  .filter((n) => !IGNORED_DOMAINS.has(resolveDomain(n.folder)));
const allowed = new Set(publicNotes.map((n) => n.id));

const notes = publicNotes.map((n) => ({
  id: String(n.id),
  folder: String(n.folder ?? ''),
  domain: resolveDomain(n.folder),
  title: String(n.title ?? n.id),
  tags: Array.isArray(n.tags) ? n.tags.slice(0, 8) : [],
  excerpt: String(n.excerpt ?? '').slice(0, 260),
  words: Number(n.words ?? 0),
  in: Number(n.inDegree ?? 0),
  out: Number(n.outDegree ?? 0),
}));

// Aresta só sobrevive se as duas pontas forem públicas.
const rawEdges = raw.edges ?? [];

function normalizeEdge(edge) {
  if (Array.isArray(edge)) return { source: String(edge[0]), target: String(edge[1]) };
  return { source: String(edge.from ?? edge.source), target: String(edge.to ?? edge.target) };
}

const bothPublic = (e) => allowed.has(e.source) && allowed.has(e.target) && e.source !== e.target;

const edges = rawEdges.map(normalizeEdge).filter(bothPublic);

const tally = new Map();
for (const note of notes) {
  for (const tag of note.tags) tally.set(tag, (tally.get(tag) ?? 0) + 1);
}
const topTags = [...tally.entries()]
  .map(([tag, count]) => ({ tag, count }))
  .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
  .slice(0, 18);

const byDomain = new Map();
for (const note of notes) {
  if (!note.domain) continue;
  byDomain.set(note.domain, (byDomain.get(note.domain) ?? 0) + 1);
}
const domains = [...byDomain.entries()]
  .map(([slug, count]) => ({ slug, count }))
  .sort((a, b) => b.count - a.count || a.slug.localeCompare(b.slug));

const payload = {
  generatedAt: raw.generatedAt ?? null,
  syncedAt: new Date().toISOString(),
  /** Escopo público. O vault inteiro é maior; isto é o que pode ir ao ar. */
  stats: {
    notes: notes.length,
    edges: edges.length,
    words: notes.reduce((sum, n) => sum + n.words, 0),
    domains: domains.length,
  },
  vaultTotal: { notes: allNotes.length, edges: rawEdges.length },
  domains,
  topTags,
  notes,
  edges,
};

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, `${JSON.stringify(payload)}\n`, 'utf8');

const held = allNotes.length - notes.length;
console.log(
  `✓ vault.json — ${notes.length} notas públicas, ${edges.length} arestas, ${domains.length} domínios`
);
console.log(`  ${held} notas retidas pelo filtro de publicação (não vão ao ar)`);

const age = raw.generatedAt
  ? Math.floor((Date.now() - Date.parse(raw.generatedAt)) / 86_400_000)
  : null;
if (age !== null && age > 7) {
  console.warn(`⚠ o índice tem ${age} dias. Rode _tooling/extract-vault.mjs antes de publicar.`);
}
