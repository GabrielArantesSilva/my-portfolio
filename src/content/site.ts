import profilePhoto from '../assets/perfil.jpg';
import type { Txt, WorkItem } from './types';

/**
 * Toda a copy do site. Componente não carrega string.
 *
 * Regras de conteúdo (PRD.md):
 * - Nada entra sem lastro verificável. Sem métrica de tempo de carreira.
 * - Projeto que não está pronto não aparece. A curadoria segue a matriz de
 *   decisão do próprio vault (50_projects/Analise-Projetos-Pessoais.md):
 *   o que está em rascunho ou cancelado fica de fora.
 * - Trabalho de empresa entra como experiência, nunca como código ou cliente.
 *   Nenhum nome de cliente aparece aqui, por decisão explícita.
 */

export const IDENTITY = {
  name: 'Gabriel Arantes Silva',
  short: 'Gabriel Arantes',
  handle: 'gabriel',
  host: 'formiga',
  email: 'gabrielarantes649@gmail.com',
  github: 'https://github.com/GabrielArantesSilva',
  githubLabel: 'github.com/GabrielArantesSilva',
  linkedin: 'https://www.linkedin.com/in/gabriel-arantes-silva/',
  linkedinLabel: 'linkedin.com/in/gabriel-arantes-silva',
  whatsapp: 'https://wa.me/5537999950605',
  whatsappLabel: '+55 (37) 99995-0605',
  avatar: profilePhoto,
  location: { pt: 'Formiga, MG', en: 'Formiga, Brazil' } satisfies Txt,
  role: {
    pt: 'Engenheiro de software full stack',
    en: 'Full stack software engineer',
  } satisfies Txt,
} as const;

/** Preencha o WhatsApp com DDI+DDD+numero, só dígitos: 5537999999999 */
export const CONTACT_CHANNELS = {
  whatsapp: '5537999950605',
} as const;

export const REQUEST_KINDS = [
  {
    id: 'projeto',
    label: { pt: 'Proposta de projeto', en: 'Project proposal' } satisfies Txt,
    prompt: {
      pt: 'O que você precisa construir, e qual o prazo?',
      en: 'What do you need built, and by when?',
    } satisfies Txt,
  },
  {
    id: 'vaga',
    label: { pt: 'Oportunidade', en: 'Opportunity' } satisfies Txt,
    prompt: {
      pt: 'Sobre a vaga: time, stack e modelo de trabalho',
      en: 'About the role: team, stack and work model',
    } satisfies Txt,
  },
  {
    id: 'ideia',
    label: { pt: 'Ideia', en: 'Idea' } satisfies Txt,
    prompt: {
      pt: 'Me conta a ideia — mesmo crua',
      en: 'Tell me the idea — even raw',
    } satisfies Txt,
  },
  {
    id: 'outro',
    label: { pt: 'Outro', en: 'Other' } satisfies Txt,
    prompt: { pt: 'Manda aí', en: 'Go ahead' } satisfies Txt,
  },
] as const;

export const BOOT = {
  /** As três perguntas do recrutador, respondidas antes do desktop existir. */
  lines: [
    { pt: 'Gabriel Arantes Silva', en: 'Gabriel Arantes Silva' },
    { pt: 'engenheiro de software full stack · Formiga, MG', en: 'full stack software engineer · Formiga, Brazil' },
    { pt: 'TypeScript · Node · Next.js · React · Supabase · Postgres', en: 'TypeScript · Node · Next.js · React · Supabase · Postgres' },
    { pt: 'disponível para novos projetos e contratos', en: 'available for new projects and contracts' },
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
    pt: 'Atuei como desenvolvedor full stack na Origami Lab, desenvolvendo um sistema de ordens de serviço para o setor ferroviário (API Node/Express/Prisma, painel administrativo Next.js, app móvel de campo com React Native/Expo e portal). Recentemente encerrei meu ciclo na empresa para me dedicar a produtos próprios, como o VORTEX OS e o Enemza, além de estar aberto a novos projetos e contratos de engenharia de software.',
    en: 'I previously worked as a full stack developer at Origami Lab, building a work-order management system for the rail sector (Node/Express/Prisma API, Next.js admin dashboard, React Native/Expo mobile field app, and tracking portal). I recently completed my tenure there to focus on building my own products, like VORTEX OS and Enemza, and I am available for new software engineering contracts and full-time roles.',
  } satisfies Txt,
  method: {
    pt: 'Trabalho a partir de um sistema, não de memória: a decisão é escrita antes do código, o domínio é tipado em vez de comentado, e quando teoria e código divergem, o código vence.',
    en: 'I work from a system, not from memory: the decision is written before the code, the domain is typed rather than commented, and when theory and code disagree, the code wins.',
  } satisfies Txt,
} as const;

export const WORK: readonly WorkItem[] = [
  {
    id: 'vortex',
    org: { pt: 'Projeto próprio / SaaS', en: 'Own project / SaaS' },
    period: '2026 — hoje',
    kind: 'produto',
    title: {
      pt: 'VORTEX OS — ERP contábil (fiscal, folha e contabilidade)',
      en: 'VORTEX OS — Accounting ERP (tax, payroll and bookkeeping)',
    },
    summary: {
      pt: 'ERP web de alta densidade para escritórios de contabilidade: fiscal, folha e contabilidade no mesmo sistema. Arquitetura moderna com importação e processamento de XMLs de NF-e/NFC-e, SPED Fiscal, apuração de impostos, DRE, segregação multi-tenant por escritório via Row Level Security (RLS) no Supabase e auditoria de domínio.',
      en: 'High-density web ERP for accounting firms: tax, payroll and bookkeeping in one system. Modern architecture featuring NF-e/NFC-e XML and SPED Fiscal parsing, tax calculations, P&L generation, multi-tenant per-office segregation via Supabase Row Level Security (RLS), and domain auditing.',
    },
    highlights: [
      { pt: 'Persistência no Supabase com isolamento RLS estrito por escritório', en: 'Supabase persistence with strict per-office RLS isolation' },
      { pt: 'Processamento e reconciliação automática de XMLs fiscais e SPED', en: 'Automated processing and reconciliation of fiscal XMLs and SPED' },
      { pt: 'Domínio tipado com testes automatizados via Vitest', en: 'Typed domain models with automated test suite in Vitest' },
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vitest'],
    href: 'https://vortex-os-pi.vercel.app',
    hrefLabel: { pt: 'Ver no ar', en: 'Live demo' },
  },
  {
    id: 'enemza',
    org: { pt: 'Projeto próprio', en: 'Own project' },
    period: '2026',
    kind: 'produto',
    title: {
      pt: 'Enemza — PWA de estudo para o ENEM',
      en: 'Enemza — study PWA for Brazil’s national exam (ENEM)',
    },
    summary: {
      pt: 'Videoaulas curadas do YouTube organizadas por módulo, provas de fixação (questões do INEP + geradas por LLM com dupla checagem obrigatória) e anotações em markdown. Progresso por XP e nível pessoal, sem ranking. Checkout e webhook de pagamento integrados.',
      en: 'Curated YouTube lessons organised by module, practice tests (official INEP questions + LLM-generated ones with a mandatory double-check) and markdown notes. Progress through personal XP and levels, no leaderboard. Integrated checkout and payment webhook.',
    },
    highlights: [
      { pt: 'Decisões de arquitetura registradas em ADRs antes da implementação', en: 'Architecture decisions recorded as ADRs before implementation' },
      { pt: 'Autenticação própria com scrypt e cookie assinado (HMAC)', en: 'Custom auth with scrypt and HMAC-signed cookies' },
    ],
    stack: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL (Neon)', 'PWA', 'Gemini', 'Vitest'],
    href: 'https://enemza.vercel.app',
    hrefLabel: { pt: 'Ver no ar', en: 'Live' },
  },
  {
    id: 'colai',
    org: { pt: 'Projeto próprio / Comunidade', en: 'Community SaaS' },
    period: '2026',
    kind: 'produto',
    title: {
      pt: 'COLAÍ — app para furar panelinhas (em construção)',
      en: 'COLAÍ — an app to break into closed circles (in progress)',
    },
    summary: {
      pt: 'App mobile para jovens de Formiga e região: cada rolê declara quantas cadeiras abre para gente de fora, e quem está fora pede para colar sem passar vergonha. Mapa de rolês, pedido sozinho ou com +1, endereço liberado só depois do aceite do host.',
      en: 'Mobile app for young people in Formiga and the surrounding region: each get-together declares how many seats it opens to outsiders, and outsiders can ask to join without the awkwardness. Map of events, solo or +1 requests, address unlocked only after the host accepts.',
    },
    highlights: [
      { pt: 'Em desenvolvimento — escopo da v0 definido antes do código', en: 'In development — v0 scope defined before the code' },
      { pt: 'Isolamento de dados com RLS forçado e geolocalização via PostGIS', en: 'Data isolation with enforced RLS and geolocation via PostGIS' },
    ],
    stack: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'PostGIS', 'MapLibre'],
  },
  {
    id: 'origami',
    org: 'Origami Lab',
    period: '2025 — 2026',
    kind: 'trabalho',
    title: {
      pt: 'Gestão de ordens de serviço para o setor ferroviário',
      en: 'Work-order management for the rail sector',
    },
    summary: {
      pt: 'Sistema para acompanhamento de ordens de serviço e relatórios diários de obra em campo, com fluxo de revisão, assinatura digital e fiscalização. Atuei como desenvolvedor full stack na API, no painel administrativo, no aplicativo móvel de campo e no portal de acompanhamento.',
      en: 'System for tracking work orders and daily field construction reports in the rail industry, featuring digital signature, review, and inspection workflows. Worked as a full stack developer on the backend API, admin dashboard, mobile field app (React Native/Expo), and tracking portal.',
    },
    highlights: [
      { pt: 'Quatro aplicações em produção, uma base de domínio compartilhada', en: 'Four applications in production sharing a unified domain core' },
      { pt: 'Web e mobile nativo compartilhando o mesmo contrato de API', en: 'Web and native mobile sharing the same unified API contract' },
      { pt: 'Fluxo de assinatura digital e fiscalização ponta a ponta', en: 'End-to-end digital signature and inspection workflows' },
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
    href: 'https://dobra-saa-s.vercel.app',
    hrefLabel: { pt: 'Ver no ar', en: 'Live' },
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
      pt: 'Bot de vendas no Telegram com checkout por Pix, containerizado com Docker e pronto para deploy.',
      en: 'A Telegram sales bot with instant-payment (Pix) checkout, containerised with Docker and ready to deploy.',
    },
    highlights: [
      { pt: 'Testes automatizados com Vitest e ambiente reproduzível via docker-compose', en: 'Automated tests with Vitest and a reproducible environment via docker-compose' },
    ],
    stack: ['grammY', 'Fastify', 'Prisma', 'PostgreSQL', 'Docker', 'Vitest'],
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
    pt: 'Engenharia de software full stack, arquitetura de back-end e domínios tipados.',
    en: 'Full stack software engineering, backend architecture, and typed domains.',
  } satisfies Txt,
  available: {
    pt: 'Disponível para novos projetos e contratos',
    en: 'Available for new projects and contracts',
  } satisfies Txt,
} as const;

export const APPS = {
  sobre: { pt: 'sobre', en: 'about' } satisfies Txt,
  trabalho: { pt: 'trabalho', en: 'work' } satisfies Txt,
  agora: { pt: 'agora', en: 'now' } satisfies Txt,
  stack: { pt: 'stack', en: 'stack' } satisfies Txt,
  cerebro: { pt: 'cérebro', en: 'brain' } satisfies Txt,
  curriculo: { pt: 'currículo', en: 'résumé' } satisfies Txt,
  pedidos: { pt: 'pedidos', en: 'requests' } satisfies Txt,
  contato: { pt: 'contato', en: 'contact' } satisfies Txt,
} as const;

export const UI = {
  origin: { pt: 'Origem', en: 'Origin' } satisfies Txt,
  today: { pt: 'Hoje', en: 'Today' } satisfies Txt,
  howIWork: { pt: 'Como trabalho', en: 'How I work' } satisfies Txt,
  workTitle: { pt: 'Trabalho e projetos', en: 'Work and projects' } satisfies Txt,
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
  requestsTitle: {
    pt: 'Me manda o que você precisa',
    en: 'Send me what you need',
  } satisfies Txt,
  requestsLede: {
    pt: 'Proposta de projeto, oportunidade ou uma ideia crua. Não há formulário mágico aqui: o texto vai direto para o meu WhatsApp ou e-mail, como mensagem normal.',
    en: 'A project proposal, an opportunity or a raw idea. No magic form here: the text goes straight to my WhatsApp or email, as a normal message.',
  } satisfies Txt,
  requestKind: { pt: 'Tipo', en: 'Kind' } satisfies Txt,
  yourName: { pt: 'Seu nome', en: 'Your name' } satisfies Txt,
  sendWhatsapp: { pt: 'Enviar no WhatsApp', en: 'Send on WhatsApp' } satisfies Txt,
  sendEmail: { pt: 'Enviar por e-mail', en: 'Send by email' } satisfies Txt,
  requestsFooter: {
    pt: 'Nada é armazenado neste site — a mensagem abre no seu app.',
    en: 'Nothing is stored on this site — the message opens in your own app.',
  } satisfies Txt,
  shipping: { pt: 'uso em produção', en: 'in production' } satisfies Txt,
  studied: { pt: 'estudei', en: 'studied' } satisfies Txt,
  recenter: { pt: 'recentrar', en: 'recenter' } satisfies Txt,
  restore: { pt: 'restaurar', en: 'restore' } satisfies Txt,
  restoreHint: {
    pt: 'Volta as janelas às posições padrão e limpa buscas e seleções',
    en: 'Returns windows to default positions and clears searches and selections',
  } satisfies Txt,
  panHint: {
    pt: 'arraste o fundo para navegar',
    en: 'drag the background to navigate',
  } satisfies Txt,
  summary: { pt: 'Resumo Profissional', en: 'Professional Summary' } satisfies Txt,
  skillsTitle: { pt: 'Competências Técnicas & Stack', en: 'Technical Skills & Stack' } satisfies Txt,
  experience: { pt: 'Experiência & Principais Sistemas', en: 'Experience & Key Systems' } satisfies Txt,
  educationTitle: { pt: 'Fundamentos, Formação & Método', en: 'Foundations & Methodology' } satisfies Txt,
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
