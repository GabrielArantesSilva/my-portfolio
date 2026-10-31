/**
 * Barra o deploy quando vault.json ou activity.json estão velhos demais.
 *
 * Os dois são gerados localmente (npm run sync) a partir do vault e dos repos
 * no disco; o build da Vercel não tem acesso a nenhum dos dois. Sem este check,
 * o site publica números antigos e ninguém percebe (SPEC.md, "Riscos").
 *
 * Limite em dias: MAX_CONTENT_AGE_DAYS (padrão 14). ALLOW_STALE=1 publica mesmo assim.
 */
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const maxDays = Number(process.env.MAX_CONTENT_AGE_DAYS ?? 14);
const DAY_MS = 86_400_000;

const FILES = {
  'vault.json': 'npm run sync:vault',
  'activity.json': 'npm run sync:activity',
};

let stale = 0;
for (const [file, fix] of Object.entries(FILES)) {
  const { syncedAt } = JSON.parse(readFileSync(join(root, 'src', 'content', file), 'utf8'));
  const days = syncedAt ? Math.floor((Date.now() - Date.parse(syncedAt)) / DAY_MS) : Infinity;
  if (days > maxDays) {
    stale++;
    console.error(`  ✗ ${file} sincronizado há ${days} dias (limite ${maxDays}). Rode: ${fix}`);
  } else {
    console.log(`  ✓ ${file} sincronizado há ${days} dia(s)`);
  }
}

if (stale && process.env.ALLOW_STALE !== '1') {
  console.error('\n  Conteúdo desatualizado. Rode `npm run sync` ou use ALLOW_STALE=1 para publicar assim.\n');
  process.exit(1);
}
