/**
 * Gera src/content/activity.json a partir do histórico real de git dos
 * projetos (local ou GitHub). É o que torna a tela "agora" dinâmica em vez de uma
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
const outPath = join(root, 'src', 'content', 'activity.json');

/** Repositórios rastreados (locais ou remotos). `public` libera a mensagem. */
const TRACKED = [
  {
    name: 'gabriel.os',
    public: true,
    paths: [root, join(root, '..', 'gabri-portfolio'), join(root, '..', 'my-portfolio')],
    repo: 'GabrielArantesSilva/my-portfolio',
  },
  {
    name: 'VORTEX OS',
    public: false,
    paths: [
      resolve(root, '..', '..', 'DESENVOVLIEMNTO', 'VORTEX OS'),
      join(root, '..', 'VORTEX OS'),
    ],
    repo: 'GabrielArantesSilva/VORTEX-OS',
  },
  {
    name: 'Dobra SaaS',
    public: true,
    paths: [join(root, '..', 'dobra-saas'), join(root, '..', 'Dobra-SaaS')],
    repo: 'GabrielArantesSilva/Dobra-SaaS',
  },
  {
    name: 'Bot de vendas',
    public: true,
    paths: [join(root, '..', 'bot')],
    repo: 'GabrielArantesSilva/bot',
  },
  {
    name: 'Bancada',
    public: false,
    paths: [join(root, '..', 'bancada')],
    repo: 'GabrielArantesSilva/bancada',
  },
  {
    name: 'COLAÍ',
    public: true,
    paths: [
      resolve(
        root,
        '..',
        'PROJETO-COMUNIDADE',
        'PROJETO-SAAS-COLAÍ',
        'colai-app'
      ),
    ],
    repo: 'GabrielArantesSilva/COLA-',
  },
];

const MAX_PER_REPO = 4;

function git(dir, args) {
  return execFileSync('git', ['-C', dir, ...args], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  }).trim();
}

function fetchGitHubCommits(repo) {
  try {
    const raw = execFileSync(
      'gh',
      ['api', `repos/${repo}/commits?per_page=${MAX_PER_REPO}`],
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
    );
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return null;

    const commits = data.map((item) => ({
      date: String(item.commit?.committer?.date || item.commit?.author?.date || '').slice(0, 10),
      subject: String(item.commit?.message || '').split('\n')[0].slice(0, 96),
    }));

    return { total: data.length, commits };
  } catch {
    return null;
  }
}

const projects = [];

for (const entry of TRACKED) {
  const localDir = entry.paths?.find((p) => existsSync(join(p, '.git')));

  let total = 0;
  let commits = [];

  if (localDir) {
    try {
      total = Number(git(localDir, ['rev-list', '--count', 'HEAD']));
      const log = git(localDir, ['log', `-${MAX_PER_REPO}`, '--format=%cI %s']);
      commits = log
        .split('\n')
        .filter(Boolean)
        .map((line) => {
          const firstSpace = line.indexOf(' ');
          const date = firstSpace > 0 ? line.slice(0, firstSpace) : line;
          const subject = firstSpace > 0 ? line.slice(firstSpace + 1) : '';
          return {
            date: String(date).slice(0, 10),
            // Repositório privado não expõe texto de commit.
            subject: entry.public ? String(subject).slice(0, 96) : null,
          };
        });
    } catch {
      // Ignora erro local e tenta remoto
    }
  }

  if (commits.length === 0 && entry.repo) {
    const ghData = fetchGitHubCommits(entry.repo);
    if (ghData) {
      total = ghData.total;
      commits = ghData.commits.map((c) => ({
        date: c.date,
        subject: entry.public ? c.subject : null,
      }));
    }
  }

  if (commits.length === 0) {
    console.warn(`  · ${entry.name}: sem commits encontrados, ignorado`);
    continue;
  }

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
