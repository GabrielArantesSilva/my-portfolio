import type { NowCard, Project, Rule, RitualStep, Txt } from './types';

/**
 * Toda a copy do site. Componente não carrega string.
 *
 * Regra de conteúdo (SPEC.md): nada entra aqui sem lastro verificável.
 * Sem métrica de tempo de carreira; as provas são 194 notas, 847 conexões
 * e 8 projetos, todas conferíveis.
 */

export const IDENTITY = {
  name: 'Gabriel Arantes Silva',
  short: 'Gabriel Arantes',
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

export const HERO = {
  availability: {
    pt: 'Disponível para arquitetura e back-end',
    en: 'Available for architecture and backend work',
  } satisfies Txt,
  headline: {
    pt: 'Software com o raciocínio preservado.',
    en: 'Software with the reasoning left in.',
  } satisfies Txt,
  lede: {
    pt: 'Construo produtos em que cada decisão é escrita antes de ser codificada: domínio tipado, fórmulas testadas, arquitetura documentada. O que sustenta isso é um vault que eu leio antes de abrir o editor.',
    en: 'I build products where every decision is written down before it is coded: typed domain, tested formulas, documented architecture. What holds it together is a vault I read before opening the editor.',
  } satisfies Txt,
  ctaProjects: { pt: 'Ver os projetos', en: 'See the projects' } satisfies Txt,
  ctaBrain: { pt: 'O segundo cérebro', en: 'The second brain' } satisfies Txt,
} as const;

/** Rótulos das métricas. Os números vêm de vault-stats.json, nunca daqui. */
export const HERO_STAT_LABELS = {
  notes: {
    label: { pt: 'Notas no vault', en: 'Vault notes' } satisfies Txt,
    note: { pt: 'em 24 pastas', en: 'across 24 folders' } satisfies Txt,
  },
  edges: {
    label: { pt: 'Conexões entre notas', en: 'Note-to-note links' } satisfies Txt,
    note: { pt: '4 órfãs, 5 quebradas', en: '4 orphans, 5 broken' } satisfies Txt,
  },
  words: {
    label: { pt: 'Palavras escritas', en: 'Words written' } satisfies Txt,
    note: { pt: 'documentação própria', en: 'first-party docs' } satisfies Txt,
  },
  projects: {
    label: { pt: 'Projetos pessoais', en: 'Personal projects' } satisfies Txt,
    note: { pt: 'quatro repos públicos', en: 'four public repos' } satisfies Txt,
  },
} as const;

export const NOW: readonly NowCard[] = [
  {
    tag: { pt: 'Em produção', en: 'Shipping' },
    title: { pt: 'Dobra SaaS', en: 'Dobra SaaS' },
    text: {
      pt: 'Avaliação de composição corporal para profissionais de saúde. A sprint atual eliminou uma divergência de cor entre telas unificando a fonte de classificação, e passou a marcar no próprio seletor a fórmula sem fonte primária verificada.',
      en: 'Body composition assessment for health professionals. The current sprint removed a cross-screen color mismatch by unifying the classification source, and now flags the formula without a verified primary source right on the selector.',
    },
    meta: { pt: 'TanStack Start · Drizzle · Vercel', en: 'TanStack Start · Drizzle · Vercel' },
  },
  {
    tag: { pt: 'Em construção', en: 'Building' },
    title: { pt: 'Bancada', en: 'Bancada' },
    text: {
      pt: 'Banco de provas para skill de agente: roda a mesma tarefa N vezes, mede variância além de acerto, faz grading determinístico e guarda replay da execução exata. Todo mundo escreve guidance para agente; quase ninguém mede se funciona.',
      en: 'A test bench for agent skills: runs the same task N times, measures variance rather than just pass rate, does deterministic grading and keeps a replay of the exact run. Everyone writes agent guidance; almost nobody measures whether it works.',
    },
    meta: { pt: 'TypeScript · Next.js · Vitest', en: 'TypeScript · Next.js · Vitest' },
  },
  {
    tag: { pt: 'Contínuo', en: 'Ongoing' },
    title: { pt: 'Harness Engineering', en: 'Harness Engineering' },
    text: {
      pt: 'Sistema de enforcement que injeta contexto e padrões do projeto em todo agente que toca o código — hooks que bloqueiam tool call fora de boundary e cobram complexidade antes do PR.',
      en: 'An enforcement system that injects project context and standards into every agent touching the code — hooks that block out-of-boundary tool calls and flag complexity before the PR.',
    },
    meta: { pt: 'Node · hooks · ADRs', en: 'Node · hooks · ADRs' },
  },
] as const;

export const PROJECTS: readonly Project[] = [
  {
    num: '01',
    name: 'Dobra SaaS',
    summary: {
      pt: 'Percentual de gordura por dobras cutâneas — Jackson/Pollock 3 e 7, Durnin/Womersley 4 — com conversão Siri, Brozek e Behnke.',
      en: 'Body fat from skinfolds — Jackson/Pollock 3 and 7, Durnin/Womersley 4 — converted via Siri, Brozek and Behnke.',
    },
    role: { pt: 'Domínio, back-end e interface', en: 'Domain, backend and interface' },
    status: 'ativo',
    visibility: 'publico',
    stack: ['TanStack Start', 'React 19', 'Drizzle', 'Tailwind v4', 'Vitest'],
    href: 'https://github.com/GabrielArantesSilva/Dobra-SaaS',
    hrefLabel: { pt: 'Código', en: 'Source' },
  },
  {
    num: '02',
    name: 'Bancada',
    summary: {
      pt: 'Banco de provas para skill de agente: N execuções da mesma tarefa, variância medida, grading determinístico e replay guardado.',
      en: 'Test bench for agent skills: N runs of the same task, variance measured, deterministic grading and a stored replay.',
    },
    role: { pt: 'Concepção e implementação', en: 'Concept and implementation' },
    status: 'ativo',
    visibility: 'privado',
    stack: ['TypeScript', 'Next.js', 'Drizzle', 'Vitest'],
    href: 'https://bancada-sand.vercel.app',
    hrefLabel: { pt: 'Ver no ar', en: 'Live' },
  },
  {
    num: '03',
    name: 'Volt',
    summary: {
      pt: 'Protótipo de banco digital internacional híbrido, fiat e cripto, em monorepo com API e web separadas.',
      en: 'Prototype of an international hybrid digital bank, fiat and crypto, in a monorepo with API and web split.',
    },
    role: { pt: 'Arquitetura e back-end', en: 'Architecture and backend' },
    status: 'pausado',
    visibility: 'privado',
    stack: ['Fastify', 'Prisma', 'PostgreSQL', 'React'],
  },
  {
    num: '04',
    name: 'Bot de vendas',
    summary: {
      pt: 'Bot de vendas containerizado, com esteira de deploy própria.',
      en: 'Containerised sales bot with its own deploy pipeline.',
    },
    role: { pt: 'Back-end e infraestrutura', en: 'Backend and infrastructure' },
    status: 'pausado',
    visibility: 'publico',
    stack: ['TypeScript', 'Docker'],
    href: 'https://github.com/GabrielArantesSilva/bot',
    hrefLabel: { pt: 'Código', en: 'Source' },
  },
  {
    num: '05',
    name: 'API REST SOLID',
    summary: {
      pt: 'API REST construída como exercício deliberado dos princípios SOLID, com as fronteiras explicitadas.',
      en: 'A REST API built as a deliberate exercise in SOLID, with the boundaries made explicit.',
    },
    role: { pt: 'Autoria integral', en: 'Sole author' },
    status: 'concluido',
    visibility: 'publico',
    stack: ['TypeScript', 'Node'],
    href: 'https://github.com/GabrielArantesSilva/API-REST-SOLID',
    hrefLabel: { pt: 'Código', en: 'Source' },
  },
  {
    num: '06',
    name: 'VPN Rede',
    summary: {
      pt: 'Rede privada com back-end próprio, empacotamento em contêiner e verificação ponta a ponta documentada.',
      en: 'Private network with its own backend, container packaging and documented end-to-end verification.',
    },
    role: { pt: 'Back-end e infraestrutura', en: 'Backend and infrastructure' },
    status: 'pausado',
    visibility: 'privado',
    stack: ['Node', 'Docker', 'OpenVPN'],
  },
  {
    num: '07',
    name: 'EnemzaMVP',
    summary: {
      pt: 'MVP de plataforma de estudos para o ENEM, iterado em versões paralelas para comparar abordagens.',
      en: 'MVP of a study platform for the Brazilian college entrance exam, iterated in parallel versions to compare approaches.',
    },
    role: { pt: 'Produto e implementação', en: 'Product and implementation' },
    status: 'pausado',
    visibility: 'privado',
    stack: ['TypeScript', 'React'],
  },
  {
    num: '08',
    name: 'DEV Junior',
    summary: {
      pt: 'Aplicação full stack com back-end e front-end separados, modelagem em Prisma.',
      en: 'Full stack application with split backend and frontend, modelled in Prisma.',
    },
    role: { pt: 'Autoria integral', en: 'Sole author' },
    status: 'concluido',
    visibility: 'publico',
    stack: ['TypeScript', 'Prisma', 'React'],
    href: 'https://github.com/GabrielArantesSilva/DEV-Junior',
    hrefLabel: { pt: 'Código', en: 'Source' },
  },
] as const;

export const RULES: readonly Rule[] = [
  {
    n: '01',
    title: { pt: 'A decisão é escrita antes do código', en: 'The decision is written before the code' },
    text: {
      pt: 'Se a escolha de arquitetura não coube num ADR, ela ainda não foi feita — foi adiada para o meio da implementação, que é o pior momento possível.',
      en: 'If an architectural choice does not fit in an ADR, it has not been made yet — it has been deferred to the middle of implementation, the worst possible moment.',
    },
  },
  {
    n: '02',
    title: { pt: 'O domínio é tipado, não comentado', en: 'The domain is typed, not commented' },
    text: {
      pt: 'Regra de negócio que só existe em comentário quebra em silêncio. No Dobra SaaS, o que impedia a cor divergir entre telas não era um aviso — era o tipo não carregar cor nenhuma.',
      en: 'A business rule that only lives in a comment breaks silently. In Dobra SaaS, what stopped colors diverging across screens was not a warning — it was the type carrying no color at all.',
    },
  },
  {
    n: '03',
    title: { pt: 'Sem fonte primária, o código avisa', en: 'No primary source, the code says so' },
    text: {
      pt: 'Uma das fórmulas de conversão do Dobra SaaS não tem lastro na literatura. Ela carrega um aviso no próprio seletor e no disclaimer, porque esconder a incerteza é pior que exibi-la.',
      en: 'One of the conversion formulas in Dobra SaaS has no grounding in the literature. It carries a warning on the selector itself and in the disclaimer, because hiding uncertainty is worse than showing it.',
    },
  },
  {
    n: '04',
    title: { pt: 'Quando teoria e código divergem, o código vence', en: 'When theory and code disagree, the code wins' },
    text: {
      pt: 'O vault existe para ser corrigido pela realidade. Nota que contradiz o comportamento observado é bug de documentação, e é tratada como bug.',
      en: 'The vault exists to be corrected by reality. A note that contradicts observed behaviour is a documentation bug, and is treated as one.',
    },
  },
] as const;

export const RITUAL: readonly RitualStep[] = [
  { n: '01', text: { pt: 'A nota-hub do domínio', en: 'The domain hub note' } },
  { n: '02', text: { pt: 'Os ADRs que já decidiram o assunto', en: 'The ADRs that already settled the matter' } },
  { n: '03', text: { pt: 'Os patterns da stack em questão', en: 'The stack patterns in play' } },
  { n: '04', text: { pt: 'As boundaries do projeto', en: "The project's boundaries" } },
  { n: '05', text: { pt: 'O checklist de produção', en: 'The production checklist' } },
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
} as const;

export const STATUS_LABELS = {
  ativo: { pt: 'Ativo', en: 'Active' } satisfies Txt,
  pausado: { pt: 'Pausado', en: 'Paused' } satisfies Txt,
  concluido: { pt: 'Concluído', en: 'Shipped' } satisfies Txt,
} as const;

export const UI = {
  projectsTitle: {
    pt: 'Oito projetos pessoais, um jeito de trabalhar',
    en: 'Eight personal projects, one way of working',
  } satisfies Txt,
  projectsHint: { pt: 'Abra uma linha para o detalhe', en: 'Open a row for detail' } satisfies Txt,
  stack: { pt: 'Stack', en: 'Stack' } satisfies Txt,
  role: { pt: 'Papel', en: 'Role' } satisfies Txt,
  privateRepo: { pt: 'Repo privado', en: 'Private repo' } satisfies Txt,
  codeTitle: {
    pt: 'Dez dobras, três protocolos, três fórmulas — tudo tipado.',
    en: 'Ten skinfolds, three protocols, three formulas — all typed.',
  } satisfies Txt,
  codeLede: {
    pt: 'O Dobra SaaS transforma literatura de composição corporal em domínio tipado: tabelas por protocolo, coeficientes por idade, faixas de classificação e testes unitários. A fórmula sem fonte primária verificada carrega um aviso no próprio código.',
    en: 'Dobra SaaS turns body-composition literature into a typed domain: per-protocol tables, per-age coefficients, classification bands and unit tests. The formula without a verified primary source carries a warning in the code itself.',
  } satisfies Txt,
  brainTitle: {
    pt: 'Um vault de 194 notas no caminho crítico de todo commit.',
    en: 'A 194-note vault on the critical path of every commit.',
  } satisfies Txt,
  brainLede: {
    pt: 'Não é arquivo morto. Cinco notas em ordem fixa antes de o editor abrir, uma nota-hub por domínio, um checklist de produção ao final de cada nota de stack.',
    en: 'Not dead storage. Five notes in a fixed order before the editor opens, one hub note per domain, a production checklist at the end of every stack note.',
  } satisfies Txt,
  ritualTitle: {
    pt: 'Cinco notas, ordem fixa, antes do editor',
    en: 'Five notes, fixed order, before the editor',
  } satisfies Txt,
  methodTitle: {
    pt: 'Quatro regras que eu não negocio',
    en: "Four rules I don't negotiate",
  } satisfies Txt,
  methodLede: {
    pt: 'Elas vêm do vault e de todo projeto em que pular uma delas custou uma reescrita.',
    en: 'They come from the vault, and from every project where skipping one cost a rewrite.',
  } satisfies Txt,
  writingTitle: {
    pt: 'Treze domínios, uma nota-hub cada',
    en: 'Thirteen domains, one hub note each',
  } satisfies Txt,
  writingLede: {
    pt: 'De clean architecture a redes. O número é quantas notas ficam sob aquele domínio.',
    en: 'From clean architecture to networking. The number is how many notes sit under that domain.',
  } satisfies Txt,
  health: { pt: 'Saúde do vault', en: 'Vault health' } satisfies Txt,
  healthOrphans: { pt: 'Notas órfãs', en: 'Orphan notes' } satisfies Txt,
  healthBroken: { pt: 'Links quebrados', en: 'Broken links' } satisfies Txt,
  healthFolders: { pt: 'Pastas', en: 'Folders' } satisfies Txt,
  healthNote: {
    pt: 'Um script indexa o vault: link quebrado é bug, nota órfã é código morto.',
    en: 'A script indexes the vault: a broken link is a bug, an orphan note is dead code.',
  } satisfies Txt,
} as const;

export const SECTION_LABELS = {
  agora: { pt: 'Agora', en: 'Now' } satisfies Txt,
  projetos: { pt: 'Trabalho selecionado', en: 'Selected work' } satisfies Txt,
  codigo: { pt: 'Código, não discurso', en: 'Code, not vibes' } satisfies Txt,
  cerebro: { pt: 'O segundo cérebro', en: 'The second brain' } satisfies Txt,
  metodo: { pt: 'Método', en: 'Method' } satisfies Txt,
  escrita: { pt: 'Escrita', en: 'Writing' } satisfies Txt,
  contato: { pt: 'Contato', en: 'Contact' } satisfies Txt,
} as const;
