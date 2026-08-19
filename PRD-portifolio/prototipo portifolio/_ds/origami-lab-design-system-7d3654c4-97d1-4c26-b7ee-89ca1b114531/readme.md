# Origami Lab — Design System de Apresentações

Sistema visual para todas as apresentações da **Origami Lab**, consultoria brasileira de transformação digital que "conecta a força da tradição ao poder da tecnologia". Os decks atendem quatro frentes de trabalho: proposta comercial, business case, Gestão de Portfólio (GPO) e status de projeto — além dos serviços de Lei do Bem, acesso a capital (FINEP/FAPEMIG/FAPESP), Sprint 0 e desenvolvimento de produtos digitais.

Este é um sistema **de apresentação**, não de produto: o inventário abaixo é a biblioteca de layouts de slide e seus blocos de construção. Ele não contém botões, formulários ou navegação — o material de origem não define nenhum.

## Fontes deste sistema

Tudo aqui foi extraído de dois arquivos entregues pelo time, e de nenhuma outra fonte:

| Fonte | O que forneceu |
| --- | --- |
| `uploads/Origami Slides - Design System (arquivo unico).html` | Verdade absoluta. Deck de 27 slides em Design Component, com todos os valores literais de cor, tipo, espaçamento e layout. Os arquivos Inter (.woff2), a malha de capa e os SVGs da marca foram extraídos deste bundle. Cópia descompactada em `scraps/template-clean.html`. |
| `uploads/Design System Guia.pdf` | Versão impressa do mesmo guia, em 4 páginas. O texto extraível confirma os mesmos hexadecimais. Não acrescenta regra nova. |
| `uploads/*.png` (7 arquivos) | Logotipos oficiais: marca isolada e assinaturas horizontal/vertical, em preto, branco e cor. Copiados sem alteração para `assets/logos/`. |

Não havia Figma, repositório ou codebase anexado. Nada neste sistema foi inventado a partir de memória de marca.

## Índice

| Caminho | Conteúdo |
| --- | --- |
| `styles.css` | Entrada única de CSS — só `@import`. É o arquivo que projetos consumidores linkam. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `motion.css`. |
| `assets/logos/` | Sete PNGs oficiais da marca. |
| `assets/` | `capa-mesh.png` (malha da capa), `logo-origami-lab-white.svg`, `mark-origami.svg`, `fonts/` (Inter variável, latin e latin-ext). |
| `components/` | 23 primitivas React em quatro grupos (lista abaixo). |
| `guidelines/` | 22 cards de especificação — cor, tipo, espaço, forma, movimento, marca. |
| `ui_kits/slides/` | Biblioteca de 22 layouts em deck navegável + um card por layout. |
| `templates/apresentacao-origami/` | O deck de 27 slides como Design Component, ponto de partida para projetos consumidores. |
| `SKILL.md` | Empacotamento como Agent Skill. |

## Componentes

**`components/foundations/`** — `Eyebrow`, `Rule`, `SlideHeader`, `Tag`, `StatusDot`, `BrandLogo`
**`components/content/`** — `RingList`, `Callout`, `PrincipleCard`, `AgendaList`, `Quote`, `TeamMember`, `Timeline`, `Matrix2x2`
**`components/data/`** — `StatCard`, `BigNumber`, `DataTable`, `MeterRow`, `BarChart`, `DonutChart`, `LineChart`
**`components/media/`** — `MediaFrame`, `BrowserFrame`

Cada diretório traz `<Nome>.jsx`, `<Nome>.d.ts` com o contrato de props e `<Nome>.prompt.md` com o "o quê e quando".

### Adições intencionais

O material de origem é um deck, não uma biblioteca nomeada de componentes: cada primitiva acima corresponde a um padrão que aparece literalmente nos 27 slides. Três casos merecem nota:

- **`BrandLogo`** — envelopa os PNGs oficiais para que ninguém redesenhe a marca.
- **`Tag`** — o guia declara `#DCE7DF · tags, linhas de tabela`; a etiqueta existe na paleta mas não aparece renderizada em nenhum slide. A forma (pill, 24px, peso 600) é a menor extrapolação possível dos demais elementos.
- **`SlideHeader`** — consolida o par eyebrow + título que se repete em 18 dos 27 slides.

## Fundamentos de conteúdo

O texto do sistema é **português do Brasil**, escrito como um sócio fala com uma diretoria: direto, sóbrio, sem venda.

- **Título é afirmação, não rótulo.** "O gargalo não é de capacidade, é de fluxo de informação." — nunca "Diagnóstico do gargalo". O título carrega a conclusão; o corpo apresenta a evidência.
- **Sentence case** em títulos, subtítulos e botões. Caixa alta existe em um único lugar: o eyebrow, sempre com tracking 0.14em e sem pontuação final.
- **Sem exclamação. Sem emoji. Sem itálico.** Nenhum dos três aparece no material de origem, e o guia proíbe os dois primeiros explicitamente.
- **Terceira pessoa e "nós" institucional.** "Conectamos a força da tradição ao poder da tecnologia." O cliente é "a operação", "o comercial", "a diretoria" — nunca "você".
- **Números escritos por extenso quando são poucos**: "Quatro ondas em doze meses", "oito sessões de uma hora". Em posição de dado, algarismo tabular: "R$ 4,2 mi", "+18 p.p.", "71%".
- **Toda evidência cita a fonte**, em 24px sob o gráfico ou a tabela: "Fonte: levantamento Origami Lab, jan–mar 2026. Dados ilustrativos."
- **Eyebrows são substantivos de uma ou duas palavras**: Diagnóstico, Escopo, Impacto projetado, Portfólio · GPO, Séries e proporção. O ponto médio `·` separa qualificadores.
- **Placeholders são instruções, não lorem ipsum**: "Arraste imagem ou GIF", "Retrato", "Elemento principal — imagem, GIF ou frame".

## Fundamentos visuais

### Cor

A base é **marfim `#F4F1E8`**, nunca branco puro — reduz o brilho em projeção e sustenta o tom sóbrio. Sobre ele, quatro superfícies: papel `#FBFAF6` (cards e tabelas), areia `#EAE5D8` (blocos e faixas), névoa `#DCE7DF` (callouts e tags) e verde profundo `#1F5F4E` (bloco de destaque). Preto `#18191B` é permitido **apenas em capa, divisores e encerramento** — é o que dá ritmo ao deck.

O verde da marca aparece em quatro intensidades foscas: profundo `#1F5F4E` para áreas grandes, sálvia `#7FA697` para séries secundárias, névoa `#DCE7DF` para preenchimento e claro `#9FD3C2` como acento **exclusivamente sobre fundo escuro**. O neon `#2EE8A8` da marca digital é proibido em slide: vibra na projeção.

Semântica entra só como estado: `#1F5F4E` no prazo, `#C9A227` atenção, `#B4523F` risco. Trigo `#C9BFA6` é série de contexto ou meta em gráficos. No máximo duas cores de fundo por deck.

### Tipografia

**Inter** em todos os pesos, sem segunda família. Escala fixa desenhada para 1920×1080: display 116/800, título 88/800, abertura 76/800, seção 64/800, subtítulo 34/700, lead 28, corpo 26 e 24 — **nada abaixo de 24px**. Tracking negativo cresce com o tamanho (−0.025em a −0.04em); o eyebrow é o único positivo (+0.14em). Numerais são sempre `tabular-nums` e alinhados à direita em tabela.

### Grade e espaço

Doze colunas, margem lateral de **120px** (mínimo absoluto), topo de 88px em slide de conteúdo e 96px em capa/divisor, calha de 24px. Combinações usadas: 7+5, 6+6, 4+4+4, 3+3+3+3. O respiro é parte do argumento, não sobra de espaço.

### Fundos e imagem

Fundos são cor chapada. A única textura do sistema é `assets/capa-mesh.png` — malha poligonal escura em verde, ancorada à direita da capa. Nenhum gradiente decorativo: os dois únicos gradientes permitidos são véus de proteção sobre imagem (`--ol-scrim-left` para foto full-bleed, `--ol-scrim-right` para a capa). Texto nunca vai direto sobre imagem. As imagens de referência são corporativas e frias — aço, vidro, chão de fábrica.

### Forma, borda e sombra

Raio 12px em card, bloco, tabela e mídia; 16px só na moldura de navegador; 8px no topo de barra de gráfico; 4px no chip de legenda; 100px em pill; 50% em retrato e bullet. **Nenhuma sombra em lugar nenhum** — a separação vem de superfície e hairline de 1px em `#DAD3C2` (ou `#2E2F31` sobre escuro).

O **bullet ring** é o elemento distintivo: círculo outline de 28px com borda de 2px, verde profundo sobre marfim, sálvia dentro de bloco verde, terracota na coluna "evitar". Substitui o ponto em toda lista. Ícones preenchidos são proibidos.

### Movimento

Uma animação só: `ol-rise` — 22px de baixo para cima, opacidade 0→1, 0.52s em `cubic-bezier(.2,.8,.2,1)`, escalonada em 0.08s pelos filhos diretos do slide ativo, respeitando `prefers-reduced-motion`. Sem bounce, sem parallax, sem transição entre slides além do corte.

**Estados** (raros — o sistema é de projeção, não de interface): link em `#1F5F4E`, hover em `#14463A`. Não há hover, press ou foco definidos no material de origem para nenhum outro elemento; qualquer protótipo que precise deles deve escurecer o verde em vez de clarear, e nunca usar sombra.

### Transparência e blur

Nenhum blur. Transparência aparece só nos dois véus e no `rgba(24,25,27,·)` que os compõe.

## Iconografia

**O sistema não tem ícones.** Nenhum ícone aparece nos 27 slides de origem, e o guia proíbe ícones preenchidos. O vocabulário gráfico é geométrico e desenhado com CSS puro:

- **Bullet ring** — círculo outline de 28px (o substituto universal do ícone de lista).
- **Ponto de status** — disco de 14px em verde, ouro ou terracota.
- **Chip de legenda** — quadrado de 16px, raio 4px.
- **Disco de iniciativa** — círculo de 32 ou 52px com uma letra (A, B, C, D) na matriz.
- **Marcador de fase** — círculo de 26px, preenchido na onda corrente, outline em sálvia nas demais.
- **Régua de acento** — barra de 96×3px.
- **Aspas** — o caractere tipográfico `"` em 200px, peso 800, verde profundo. Não é um ícone: é a fonte.

Emoji: **nunca**. Caracteres unicode como ícone: só o ponto médio `·` como separador e o travessão `—` como pausa. Se um deck realmente precisar de ícones, traga a decisão para o time antes — não há set aprovado, e improvisar um contradiz a regra de ícones preenchidos.

Ativos de imagem disponíveis: sete logotipos PNG, dois SVGs da marca (assinatura horizontal branca e símbolo) e a malha de capa. Não há biblioteca de ilustração.

## Como consumir

```html
<link rel="stylesheet" href="_ds/origami-lab/styles.css">
<script src="_ds/origami-lab/_ds_bundle.js"></script>
<script>const { SlideHeader, RingList, BigNumber } = window.OrigamiLabDesignSystem_7d3654;</script>
```

Para um deck novo, comece pelo template `templates/apresentacao-origami/` — copie a pasta e ajuste a linha `base` em `ds-base.js`.

## Pendências

- **Fontes**: os arquivos Inter vieram do próprio bundle (variável, subsets latin e latin-ext). Não é substituição — é a mesma fonte do template. Se o time tiver uma licença de Inter hospedada internamente, troque as URLs em `tokens/fonts.css`.
- **O PDF do guia** não pôde ser rasterizado nesta sessão (páginas pesadas demais para o renderizador). O texto foi extraído e confere com o HTML; se houver alguma página com regra que não esteja no deck, avise.
- **Sem set de ícones e sem biblioteca de imagens** — ver Iconografia.
