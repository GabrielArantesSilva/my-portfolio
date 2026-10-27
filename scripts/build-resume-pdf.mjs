/**
 * Gera o currículo em PDF (PT e EN) a partir da própria tela /curriculo.
 *
 * O botão "Baixar PDF" antes chamava window.print(): no celular isso abre
 * a tela de impressão, não um download. Aqui o PDF sai do mesmo conteúdo e
 * do mesmo CSS de impressão, só que vira arquivo de verdade em public/.
 *
 *   npm run build && npm run resume:pdf
 *
 * Precisa do Google Chrome (ou CHROME=/caminho/do/binario) e do dist/ pronto.
 * Os PDFs vão para public/ (versionados, porque o build da Vercel não tem
 * Chrome) e para dist/, para o deploy feito logo em seguida já levar.
 */
import { spawn } from 'node:child_process';
import { copyFileSync, existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { RESUME_FILES } from './resume-files.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 4179;
const DEBUG_PORT = 9339;
const CHROME = process.env.CHROME ?? 'google-chrome';

if (!existsSync(join(root, 'dist', 'index.html'))) {
  console.error('dist/ não existe. Rode `npm run build` antes.');
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitFor(url, tries = 40) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return res;
    } catch {}
    await sleep(250);
  }
  throw new Error(`não respondeu: ${url}`);
}

const preview = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: root,
  stdio: 'ignore',
});
const profile = mkdtempSync(join(tmpdir(), 'resume-pdf-'));
const chrome = spawn(
  CHROME,
  ['--headless=new', `--remote-debugging-port=${DEBUG_PORT}`, `--user-data-dir=${profile}`, 'about:blank'],
  { stdio: 'ignore' }
);

const cleanup = () => {
  chrome.kill();
  preview.kill();
  rmSync(profile, { recursive: true, force: true });
};

try {
  await waitFor(`http://localhost:${PORT}/`);
  const tabs = await (await waitFor(`http://127.0.0.1:${DEBUG_PORT}/json`)).json();
  const ws = new WebSocket(tabs.find((t) => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((r, j) => ((ws.onopen = r), (ws.onerror = j)));

  let seq = 0;
  const pending = new Map();
  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id && pending.has(msg.id)) {
      const { ok, fail } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) fail(new Error(msg.error.message));
      else ok(msg.result);
    }
  };
  const send = (method, params = {}) =>
    new Promise((ok, fail) => {
      const id = ++seq;
      pending.set(id, { ok, fail });
      ws.send(JSON.stringify({ id, method, params }));
    });
  const evaluate = async (expression) =>
    (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result
      ?.value;

  await send('Page.enable');
  await send('Page.navigate', { url: `http://localhost:${PORT}/` });
  await sleep(1000);

  for (const [lang, file] of Object.entries(RESUME_FILES)) {
    // Idioma e boot já vistos: a tela abre direto no currículo, sem animação.
    await evaluate(
      `localStorage.setItem('ga.lang', '${lang}'); sessionStorage.setItem('ga.booted', '1');`
    );
    await send('Page.navigate', { url: `http://localhost:${PORT}/curriculo` });
    await sleep(2500);
    await evaluate(
      `Promise.all([document.fonts.ready, ...[...document.images].map((i) => i.decode().catch(() => {}))])`
    );

    const ready = await evaluate(`!!document.querySelector('[data-print]')`);
    if (!ready) throw new Error(`currículo não renderizou (${lang})`);

    const { data } = await send('Page.printToPDF', {
      paperWidth: 8.27,
      paperHeight: 11.69,
      printBackground: true,
      // Fecha em duas páginas sem mexer na tipografia do site.
      scale: 0.9,
      preferCSSPageSize: true,
    });

    const out = join(root, 'public', file);
    writeFileSync(out, Buffer.from(data, 'base64'));
    copyFileSync(out, join(root, 'dist', file));
    console.log(`✓ ${file}`);
  }

  ws.close();
} catch (err) {
  console.error(`✗ ${err.message}`);
  process.exitCode = 1;
} finally {
  cleanup();
}
