# Portfólio Gabriel Arantes — especificação

Escrito em 2026-08-19, antes da reescrita. Fonte de verdade do que vai ser
construído. Se algo aqui estiver errado, corrija **aqui** antes de codar.

## Diagnóstico do que existia

O `src/` herdado era um scaffold com o conteúdo de **outra pessoa**:

| Onde | O que afirmava | Realidade |
| --- | --- | --- |
| `index.html` | "15+ anos", trading algorítmico, projeto "Voult" | Nada disso |
| `lib/github.ts` | `GITHUB_USERNAME = 'Gabri'` | `GabrielArantesSilva` |
| `lib/github.ts` | destaques `voult`, `grove`, `jupyterlab-...-jesse` | Repos de terceiro |
| `lib/github.ts` | `next: { revalidate: 3600 }` | Opção do Next.js num app Vite — inerte |
| `README.md` | Template do Vite intocado | — |

`PRD-portifolio/prototipo portifolio/uploads/gabri-portfolio/src/` é cópia
idêntica desse mesmo scaffold (`diff -rq` só acusa `vite.svg`). O desenho real
está nos dois `.dc.html`, não no upload.

Snapshot do estado herdado: commit `75d818a`.

## Decisões travadas

1. **Identidade visual própria.** O `_ds/` é o design system de apresentações
   da **Origami Lab** — marca do empregador. Não vai ser a identidade de um
   portfólio pessoal. Serve como referência de rigor, não de marca. (Coerente
   com a exclusão dos repos da Origami-Lab-Organization já registrada em
   `PRD-portifolio/prototipo portifolio/github.md`.)
2. **Vault: só métricas e estrutura.** Números e nomes de pasta lidos do
   índice. Nenhuma linha de conteúdo de nota vai ao ar — `05_ideias` e
   `00_inbox` ficam privados.
3. **Bilíngue pt/en desde o início.** Os dados do v2 já são bilíngues por
   construção (`pt`/`en`, `npt`/`nen`), então não há retrabalho.
4. **Experiência: 3 anos profissionais, 4 estudando TI.** 1 ano comprovado
   como contratado na Origami Lab, mais sistemas freelancer em 2024/25.
   O "quinze anos" do canvas veio do template alucinado e está **proibido**.

## Posicionamento

A tese continua: **"Software com o raciocínio preservado."**

Mas a voz muda. O v2 foi escrito em tom de veterano porque se apoiava nos 15
anos falsos. Com 3 anos, o argumento honesto é mais forte: veterano com vault é
esperado, júnior com sistema documentado é raro. O diferencial declarado passa a
ser o **método**, não o tempo de carreira — que é a própria tese do site.

Nenhuma métrica de tempo no hero. As provas são as verificáveis: 194 notas,
847 conexões, 8 projetos.

## Estrutura — 9 seções

Do canvas v2, na ordem:

| id | Papel |
| --- | --- |
| `topo` | Hero: tese, disponibilidade, stats do vault |
| `agora` | O que está em andamento, com timestamp |
| `projetos` | Trabalho selecionado — 8 projetos pessoais |
| `lista` | Tabela expansível dos projetos (num, nome, papel, status, stack) |
| `codigo` | Deep-dive em código real de `Dobra-SaaS/src/lib/bodyfat.ts` |
| `cerebro` | Segundo cérebro — o case study, seção de destaque |
| `metodo` | Quatro regras inegociáveis |
| `escrita` | Domínios do vault e saúde do índice |
| `contato` | E-mail, GitHub |

## Fontes de verdade dos dados

Nada de número hardcoded que possa envelhecer no ar.

| Dado | Fonte |
| --- | --- |
| Métricas do vault | `Obsidian Vault/_tooling/vault-index.json` → `stats` |
| Projetos | Lista curada em arquivo de conteúdo, versionada |
| Trecho de código | `Dobra-SaaS/src/lib/bodyfat.ts` |
| Contato | `gabriel@origamilab.com.br`, `github.com/GabrielArantesSilva` |

O `vault-index.json` foi gerado em 2026-08-17
(`{notes:194, edges:847, orphans:4, brokenLinks:5, words:158513, folders:24}`).
Precisa de uma etapa de regeneração antes de cada publicação, senão o site
envelhece sozinho. Isso é item de build, não de código de tela.

Os 194 são um subconjunto **curado** — o vault tem 1408 `.md` no disco contando
`Clippings/`, `Threejs.org-Documentation/` e `99_archive/`. 194 é o número
honesto de mostrar.

## Fora de escopo

- Repositórios da Origami-Lab-Organization — trabalho de empresa
- Conteúdo de notas do vault
- Posts de vídeo (ideia não validada pelo próprio autor)
- Marca, logos e paleta da Origami Lab

## O que se aproveita do código herdado

`src/lib/animations.ts`, `src/hooks/useScrollReveal.ts` e
`src/components/ui/MotionPrimitives.tsx` — infra genérica de motion
(variants do framer-motion, `useReducedMotion`, parallax, stagger). O resto do
`src/` é reescrito.

Toolchain mantida: Vite + React 19 + TypeScript + Tailwind + framer-motion.

## Riscos

| Risco | Mitigação |
| --- | --- |
| Copy em voz de veterano vazar para o texto final | Toda afirmação sobre a pessoa precisa de lastro; sem lastro, corta |
| `vault-index.json` desatualizar e o site mentir | Regenerar o índice como etapa de publicação |
| Animação pesada virar o produto em vez do conteúdo | `useReducedMotion` respeitado em toda animação |
| Escopo "intranet pessoal" crescer sem fim | As 9 seções acima são o escopo; o resto é próxima iteração |
