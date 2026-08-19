import type { Txt, WorkItem } from './types';

/**
 * Toda a copy do site. Componente não carrega string.
 *
 * Regras de conteúdo (PRD.md):
 * - Nada entra sem lastro verificável. Sem métrica de tempo de carreira.
 * - Projeto que não está pronto não aparece. A curadoria segue a matriz de
 *   decisão do próprio vault (50_projects/Analise-Projetos-Pessoais.md):
 *   o que está 🟡 ou 🔴 fica de fora.
 * - Trabalho de empresa entra como experiência, nunca como código ou cliente.
 *   Nenhum nome de cliente aparece aqui, por decisão explícita.
 */

export const IDENTITY = {
  name: 'Gabriel Arantes Silva',
  short: 'Gabriel Arantes',
  handle: 'gabriel',
  host: 'formiga',
  email: 'gabriel@origamilab.com.br',
  github: 'https://github.com/GabrielArantesSilva',
  githubLabel: 'github.com/GabrielArantesSilva',
  linkedin: 'https://www.linkedin.com/in/gabriel-arantes-silva/',
  linkedinLabel: 'linkedin.com/in/gabriel-arantes-silva',
  location: { pt: 'Formiga, MG', en: 'Formiga, Brazil' } satisfies Txt,
  role: {
    pt: 'Engenheiro de software full stack',
    en: 'Full stack software engineer',
  } satisfies Txt,
} as const;

export const BOOT = {
  /** As três perguntas do recrutador, respondidas antes do desktop existir. */
  lines: [
    { pt: 'Gabriel Arantes Silva', en: 'Gabriel Arantes Silva' },
    { pt: 'engenheiro de software full stack · Formiga, MG', en: 'full stack software engineer · Brazil' },
    { pt: 'TypeScript · Node · React · React Native · Postgres', en: 'TypeScript · Node · React · React Native · Postgres' },
    { pt: 'disponível para arquitetura e back-end', en: 'available for architecture and backend work' },
  ] satisfies readonly Txt[],
  skip: { pt: 'pular', en: 'skip' } satisfies Txt,
  enter: { pt: 'entrar', en: 'enter' } satisfies Txt,
} as const;

export const ABOUT = {
  origin: {
    pt: 'Entrei em tecnologia por curiosidade e por influência da família. Foram quatro anos estudando antes de virar profissão, e a curiosidade continua sendo o que me faz abrir o editor.',
    en: 'I came into tech out of curiosity and through family. Four years of studying before it became a job, and curiosity is still what makes me open the editor.',
  } satisfies Txt,
  now: {
    pt: 'Hoje sou desenvolvedor na Origami Lab, onde toco todos os repositórios de um ecossistema de gestão de ordens de serviço para o setor ferroviário — API, painel administrativo, aplicativo de campo e portal de acompanhamento.',
    en: 'Today I am a developer at Origami Lab, where I own every repository of a work-order management ecosystem for the rail sector — API, admin panel, field app and tracking portal.',
  } satisfies Txt,
  method: {
    pt: 'Trabalho a partir de um sistema, não de memória: a decisão é escrita antes do código, o domínio é tipado em vez de comentado, e quando teoria e código divergem, o código vence.',
    en: 'I work from a system, not from memory: the decision is written before the code, the domain is typed rather than commented, and when theory and code disagree, the code wins.',
  } satisfies Txt,
} as const;

export const WORK: readonly WorkItem[] = [
  {
    id: 'origami',
    org: 'Origami Lab',
    period: '2025 — hoje',
    kind: 'trabalho',
    title: {
      pt: 'Gestão de ordens de serviço para o setor ferroviário',
      en: 'Work-order management for the rail sector',
    },
    summary: {
      pt: 'Ecossistema multi-repositório para acompanhamento de ordens de serviço e relatórios diários de obra em campo, com fluxo de revisão, assinatura e fiscalização. Sou o desenvolvedor de todos os repositórios: a API, o painel administrativo, o aplicativo de campo e o portal de acompanhamento.',
      en: 'Multi-repository ecosystem for tracking work orders and daily field reports, with review, signature and inspection flows. I am the developer across every repository: the API, the admin panel, the field app and the tracking portal.',
    },
    highlights: [
      { pt: 'Quatro aplicações em produção, uma base de domínio', en: 'Four applications in production, one domain core' },
      { pt: 'Web e mobile nativo compartilhando o mesmo contrato', en: 'Web and native mobile sharing one contract' },
      { pt: 'Fluxo de assinatura e fiscalização ponta a ponta', en: 'End-to-end signature and inspection flow' },
    ],
    stack: ['Node', 'Express', 'Prisma', 'PostgreSQL', 'Next.js', 'React Native', 'Expo'],
  },
  {
    id: 'freelance',
    org: { pt: 'Autônomo', en: 'Freelance' },
    period: '2024 — 2025',
    kind: 'trabalho',
    title: {
      pt: 'Sistemas sob demanda para pequenos negócios',
      en: 'Custom systems for small businesses',
    },
    summary: {
      pt: 'Período construindo sistemas sob demanda antes de entrar em regime CLT. Os artefatos ficaram com os clientes, então aqui vale como trajetória, não como vitrine.',
      en: 'A period building custom systems before going full-time. The artefacts stayed with the clients, so this counts as trajectory, not showcase.',
    },
    highlights: [],
    stack: ['TypeScript', 'Node', 'React'],
  },
  {
    id: 'dobra',
    org: { pt: 'Projeto próprio', en: 'Own project' },
    period: '2026',
    kind: 'produto',
    title: {
      pt: 'Dobra SaaS — avaliação de composição corporal',
      en: 'Dobra SaaS — body composition assessment',
    },
    summary: {
      pt: 'Percentual de gordura por dobras cutâneas para profissionais de saúde. Três protocolos, três fórmulas de conversão, dez pontos de medida — tudo como domínio tipado e testado, não como planilha disfarçada de app.',
      en: 'Body fat from skinfolds for health professionals. Three protocols, three conversion formulas, ten measurement points — all as a typed, tested domain rather than a spreadsheet dressed as an app.',
    },
    highlights: [
      { pt: 'A fórmula sem fonte primária verificada avisa no próprio seletor', en: 'The formula without a verified primary source warns on the selector itself' },
      { pt: 'Faixas de classificação com fonte única, impossível divergir entre telas', en: 'Classification bands from a single source, impossible to diverge across screens' },
    ],
    stack: ['TanStack Start', 'React 19', 'Supabase', 'PostgreSQL', 'Vitest'],
    href: 'https://github.com/GabrielArantesSilva/Dobra-SaaS',
    hrefLabel: { pt: 'Código', en: 'Source' },
  },
  {
    id: 'bot',
    org: { pt: 'Projeto próprio', en: 'Own project' },
    period: '2026',
    kind: 'produto',
    title: {
      pt: 'Bot de vendas com pagamento por Pix',
      en: 'Sales bot with instant-payment checkout',
    },
    summary: {
      pt: 'Produto vivo: bot de vendas no Telegram com checkout por Pix, containerizado e com esteira de deploy própria.',
      en: 'A live product: a Telegram sales bot with instant-payment checkout, containerised and with its own deploy pipeline.',
    },
    highlights: [
      { pt: 'Em operação, não em protótipo', en: 'In operation, not in prototype' },
    ],
    stack: ['grammY', 'Fastify', 'Prisma', 'PostgreSQL', 'Docker'],
    href: 'https://github.com/GabrielArantesSilva/bot',
    hrefLabel: { pt: 'Código', en: 'Source' },
  },
  {
    id: 'bancada',
    org: { pt: 'Projeto próprio', en: 'Own project' },
    period: '2026',
    kind: 'produto',
    title: {
      pt: 'Bancada — banco de provas para agentes de IA',
      en: 'Bancada — a test bench for AI agents',
    },
    summary: {
      pt: 'Roda a mesma tarefa N vezes, mede variância além de acerto, faz avaliação determinística e guarda o replay da execução exata. Todo mundo escreve instrução para agente; quase ninguém mede se funciona.',
      en: 'Runs the same task N times, measures variance rather than just pass rate, grades deterministically and keeps a replay of the exact run. Everyone writes agent guidance; almost nobody measures whether it works.',
    },
    highlights: [
      { pt: 'Variância como métrica de primeira classe', en: 'Variance as a first-class metric' },
    ],
    stack: ['TypeScript', 'Next.js', 'Drizzle', 'Vitest'],
    href: 'https://bancada-sand.vercel.app',
    hrefLabel: { pt: 'Ver no ar', en: 'Live' },
  },
] as const;

export const CONTACT = {
  headline: {
    pt: 'Se esse jeito de trabalhar serve, a conversa é curta.',
    en: 'If this way of working fits, the conversation is short.',
  } satisfies Txt,
  lede: {
    pt: 'Arquitetura de back-end, domínios tipados, engenharia de produto.',
    en: 'Backend architecture, typed domains, product engineering.',
  } satisfies Txt,
  available: {
    pt: 'Disponível para arquitetura e back-end',
    en: 'Available for architecture and backend work',
  } satisfies Txt,
} as const;

export const APPS = {
  sobre: { pt: 'sobre', en: 'about' } satisfies Txt,
  trabalho: { pt: 'trabalho', en: 'work' } satisfies Txt,
  agora: { pt: 'agora', en: 'now' } satisfies Txt,
  stack: { pt: 'stack', en: 'stack' } satisfies Txt,
  cerebro: { pt: 'cérebro', en: 'brain' } satisfies Txt,
  curriculo: { pt: 'currículo', en: 'résumé' } satisfies Txt,
  contato: { pt: 'contato', en: 'contact' } satisfies Txt,
} as const;

export const UI = {
  origin: { pt: 'Origem', en: 'Origin' } satisfies Txt,
  today: { pt: 'Hoje', en: 'Today' } satisfies Txt,
  howIWork: { pt: 'Como trabalho', en: 'How I work' } satisfies Txt,
  stack: { pt: 'Stack', en: 'Stack' } satisfies Txt,
  close: { pt: 'Fechar', en: 'Close' } satisfies Txt,
  minimize: { pt: 'Minimizar', en: 'Minimize' } satisfies Txt,
  brainTitle: {
    pt: 'Base de conhecimento é codebase',
    en: 'A knowledge base is a codebase',
  } satisfies Txt,
  brainLede: {
    pt: 'Cinco notas em ordem fixa antes de o editor abrir, uma nota-hub por domínio. Não é arquivo morto — é o que impede o editor de abrir cedo demais.',
    en: 'Five notes in a fixed order before the editor opens, one hub note per domain. Not dead storage — it is what stops the editor from opening too early.',
  } satisfies Txt,
  domains: { pt: 'domínios', en: 'domains' } satisfies Txt,
  notes: { pt: 'notas', en: 'notes' } satisfies Txt,
  links: { pt: 'ligações', en: 'links' } satisfies Txt,
  kwords: { pt: 'mil palavras', en: 'k words' } satisfies Txt,
  words: { pt: 'palavras', en: 'words' } satisfies Txt,
  search: {
    pt: 'buscar por nota, domínio ou tag…',
    en: 'search by note, domain or tag…',
  } satisfies Txt,
  graphHint: {
    pt: 'Clique num nó do grafo para abrir a nota',
    en: 'Click a node in the graph to open the note',
  } satisfies Txt,
  nowTitle: { pt: 'O que está compilando', en: 'What is compiling' } satisfies Txt,
  nowLede: {
    pt: 'Lido direto do histórico de git dos projetos. Não é uma frase que eu atualizo quando lembro — se eu parar de commitar, esta tela denuncia.',
    en: 'Read straight from the projects git history. Not a line I update when I remember — if I stop committing, this screen tells on me.',
  } satisfies Txt,
  nowFooter: {
    pt: 'gerado por scripts/sync-activity.mjs',
    en: 'generated by scripts/sync-activity.mjs',
  } satisfies Txt,
  privateCommit: { pt: 'repositório privado', en: 'private repository' } satisfies Txt,
  today2: { pt: 'hoje', en: 'today' } satisfies Txt,
  stackTitle: {
    pt: 'As ferramentas, e o que eu já escrevi sobre cada uma',
    en: 'The tools, and what I have written about each',
  } satisfies Txt,
  stackLede: {
    pt: 'Cada item aqui tem uma nota minha no vault. Não é lista de logo — é o que eu estudei a fundo o bastante para documentar.',
    en: 'Every item here has a note of mine in the vault. Not a logo wall — it is what I studied deeply enough to document.',
  } satisfies Txt,
  stackHint: { pt: 'Clique numa ferramenta', en: 'Click a tool' } satisfies Txt,
  referencedBy: { pt: 'citada por', en: 'referenced by' } satisfies Txt,
  summary: { pt: 'Resumo', en: 'Summary' } satisfies Txt,
  experience: { pt: 'Experiência', en: 'Experience' } satisfies Txt,
  downloadPdf: { pt: 'Baixar PDF', en: 'Download PDF' } satisfies Txt,
  resumeHint: {
    pt: 'Gerado do mesmo conteúdo do site — nunca desatualiza',
    en: 'Generated from the same content as the site — never goes stale',
  } satisfies Txt,
  topTags: { pt: 'Tags mais usadas', en: 'Most used tags' } satisfies Txt,
  commands: { pt: 'comandos', en: 'commands' } satisfies Txt,
  commandHint: {
    pt: 'buscar app, nota, domínio ou tag…',
    en: 'search app, note, domain or tag…',
  } satisfies Txt,
  openApp: { pt: 'abrir', en: 'open' } satisfies Txt,
  noResults: { pt: 'nada encontrado', en: 'nothing found' } satisfies Txt,
  graphAria: {
    pt: 'Grafo de notas e ligações do vault',
    en: 'Graph of vault notes and links',
  } satisfies Txt,
} as const;
