/**
 * Gera src/content/activity.json a partir do histórico real de git dos
 * projetos vizinhos. É o que torna a tela "agora" dinâmica em vez de uma
 * frase que envelhece.
 *
 * Regra de exposição: mensagem de commit só sai de repositório PÚBLICO no
 * GitHub. De repositório privado sai apenas a forma da atividade (data e
 * volume) — nunca o texto, que pode conter qualquer coisa.
 *
 *   node scripts/sync-activity.mjs
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const workspace = resolve(root, '..');
const outPath = join(root, 'src', 'content', 'activity.json');

/** Só projetos que já estão no portfólio. `public` libera a mensagem. */
const TRACKED = [
  { dir: 'dobra-saas', name: 'Dobra SaaS', public: true },
  { dir: 'bot', name: 'Bot de vendas', public: true },
  { dir: 'bancada', name: 'Bancada', public: false },
  { dir: 'gabri-portfolio', name: 'gabriel.os', public: true },
];

const MAX_PER_REPO = 4;

function git(dir, args) {
  return execFileSync('git', ['-C', dir, ...args], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  }).trim();
}

const projects = [];

for (const entry of TRACKED) {
  const dir = join(workspace, entry.dir);
  if (!existsSync(join(dir, '.git'))) {
    console.warn(`  · ${entry.dir}: sem repositório git, ignorado`);
    continue;
  }

  let total;
  let log;
  try {
    total = Number(git(dir, ['rev-list', '--count', 'HEAD']));
    log = git(dir, ['log', `-${MAX_PER_REPO}`, '--format=%cI%s']);
  } catch {
    console.warn(`  · ${entry.dir}: git falhou, ignorado`);
    continue;
  }

  const commits = log
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const [date, subject] = line.split('');
      return {
        date: String(date).slice(0, 10),
        // Repositório privado não expõe texto de commit.
        subject: entry.public ? String(subject).slice(0, 96) : null,
      };
    });

  projects.push({
    name: entry.name,
    public: entry.public,
    total,
    lastAt: commits[0]?.date ?? null,
    commits,
  });
}

projects.sort((a, b) => String(b.lastAt).localeCompare(String(a.lastAt)));

const payload = {
  syncedAt: new Date().toISOString(),
  projects,
  totals: {
    commits: projects.reduce((sum, p) => sum + p.total, 0),
    repos: projects.length,
  },
};

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');

console.log(
  `✓ activity.json — ${projects.length} projetos, ${payload.totals.commits} commits no total`
);
for (const p of projects) {
  console.log(`  ${p.public ? 'PUB ' : 'priv'} ${p.name} · ${p.total} commits · ${p.lastAt}`);
}
