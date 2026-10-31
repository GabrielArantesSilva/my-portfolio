# gabriel.os — portfólio de Gabriel Arantes

No ar em https://gabrielarantes.vercel.app. Produto e decisões em `PRD.md` e `SPEC.md`.

React 19 + Vite + Tailwind 4 + framer-motion. Sem router: `src/os/useRoute.ts`
sincroniza o app em foco com a URL (cada app tem rota própria e entra no histórico).

## Comandos

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor local |
| `npm test` | Testes (Vitest + Testing Library) |
| `npm run typecheck` / `npm run lint` | TypeScript e oxlint |
| `npm run sync` | Regenera `vault.json` e `activity.json` a partir do vault e dos repos locais |
| `npm run check:content` | Falha se esses JSONs têm mais de 14 dias |
| `npm run resume:pdf` | Gera os PDFs do currículo a partir de `/curriculo` |
| `npm run deploy` | Check de conteúdo, typecheck, lint, testes e `vercel --prod` |

## Deploy

**Push no GitHub não publica.** O projeto Vercel não está ligado ao repositório;
publicar é `npm run deploy` (ou `vercel --prod`) daqui. Rollback: `vercel rollback`.

O conteúdo do vault e da atividade só existe nesta máquina, então rode
`npm run sync` antes de publicar. O `deploy` barra se estiver velho
(`ALLOW_STALE=1` publica mesmo assim).
