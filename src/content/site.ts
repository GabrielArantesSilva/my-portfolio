import profilePhoto from '../assets/perfil.webp';
import profilePhotoSmall from '../assets/perfil-sm.webp';
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
  /** 112px: para os avatares de até ~36px (sidebar, boot), sem baixar o de 256. */
  avatarSmall: profilePhotoSmall,
  location: { pt: 'Formiga, MG', en: 'Formiga, Brazil' } satisfies Txt,
  role: {
    pt: 'Engenheiro de software full stack',
    en: 'Full stack software engineer',
  } satisfies Txt,
} as const;

/**
 * PDF do currículo, gerado por scripts/build-resume-pdf.mjs a partir da tela
 * /curriculo. Os nomes precisam bater com scripts/resume-files.mjs.
 */
export const RESUME_PDF = {
  pt: '/Curriculo-Gabriel-Arantes.pdf',
  en: '/Resume-Gabriel-Arantes.pdf',
} satisfies Txt;

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
    pt: 'Entrei em tecnologia por curiosidade e por influência da família. Foram quatro anos de estudo contínuo antes de virar profissão, e a paixão por arquitetura e sistemas confiáveis continua sendo o que me move todos os dias.',
    en: 'I entered tech driven by curiosity and inspired by family. Four years of disciplined study before going professional, and a passion for architecture and reliable systems is still what drives me daily.',
  } satisfies Txt,
  now: {
    pt: 'Engenheiro de software full stack focado em gerar eficiência operacional, redução de custos e previsibilidade de processos. Na Origami Lab, atuei no desenvolvimento e sustentação de uma plataforma completa de gestão de ordens de serviço e diários de obra ferroviária (API Node/Express/Prisma, web Next.js e mobile de campo React Native/Expo), eliminando perdas por extravio de papel e acelerando em dias o ciclo de fiscalização. Atualmente me dedico a produtos próprios de alto impacto — como o ERP contábil VORTEX OS e a EdTech Enemza — além de estar aberto a novos projetos, contratos e posições de engenharia de software.',
    en: 'Full stack software engineer focused on driving operational efficiency, cost reduction, and process predictability. At Origami Lab, I built and maintained a complete work-order and rail construction report management platform (Node/Express/Prisma API, Next.js web portal, and React Native/Expo field app), eliminating paper loss and cutting inspection approval cycles from weeks to real time. Currently advancing high-impact products — like the VORTEX OS accounting ERP and the Enemza EdTech platform — and open to new software engineering roles and contract opportunities.',
  } satisfies Txt,
  method: {
    pt: 'Trabalho orientado a problemas reais de negócio e engenharia sólida: arquitetura alinhada antes da codificação (ADRs), tipagem estrita para prevenir falhas em produção, testes automatizados e clareza total de comunicação entre produto e liderança.',
    en: 'Engineering driven by real business outcomes: architecture decisions vetted before code (ADRs), strict domain typing to eliminate production incidents, automated test suites, and transparent communication across product and leadership.',
  } satisfies Txt,
} as const;

export const WORK: readonly WorkItem[] = [
  {
    id: 'vortex',
    org: { pt: 'Projeto para empresa / ERP', en: 'Client project / ERP' },
    period: '2026 — hoje',
    kind: 'trabalho',
    title: {
      pt: 'VORTEX OS — ERP contábil & fiscal de alta densidade',
      en: 'VORTEX OS — High-density accounting & tax ERP',
    },
    metric: {
      pt: 'Redução drástica no fechamento contábil e apuração tributária',
      en: 'Drastic speedup in monthly accounting and tax closing',
    },
    architecture: {
      decision: {
        pt: 'Clean Architecture com Money VO e multi-tenancy via RLS',
        en: 'Clean Architecture with Money VO and PostgreSQL RLS',
      },
      tradeOff: {
        pt: 'Operações monetárias em centavos inteiros eliminando ponto flutuante IEEE 754, com 27 migrations e 19 testes SQL isolando dados por escritório contábil.',
        en: 'Integer-cent monetary operations eliminating IEEE 754 rounding errors, with 27 migrations and 19 SQL test suites isolating tenant data.',
      },
    },
    summary: {
      pt: 'ERP contábil, fiscal e folha de alta densidade (~19.500 linhas de código). Núcleo em Clean Architecture estrita com Branded Types e Value Object de moeda. Inclui calculadora do Simples Nacional (Anexos I a V e Fator R), conciliação de XMLs de NF-e/NFC-e e SPED, cruzamento de malha fina e emulador da interface Thomson Reuters Domínio para migração sem atrito de equipes contábeis.',
      en: 'High-density accounting, tax and payroll ERP (~19,500 lines of code). Clean Architecture core utilizing Branded Types and Money Value Objects. Features a Simples Nacional tax calculation engine (Annexes I to V and Factor R), NF-e/NFC-e XML and SPED reconciliation, audit cross-checking, and a Thomson Reuters Domínio UI emulator for seamless accounting staff migration.',
    },
    highlights: [
      { pt: '27 migrations Supabase e 19 testes SQL garantindo isolamento multi-tenant por escritório', en: '27 Supabase migrations and 19 SQL test suites verifying strict per-office RLS isolation' },
      { pt: 'Value Object monetário em centavos eliminando erros de arredondamento em impostos', en: 'Integer-cent Money Value Object preventing IEEE 754 precision drift in tax calculations' },
      { pt: 'Emulador das rotinas do sistema Domínio para adoção imediata por escritórios', en: 'Domínio system routine emulation ensuring immediate operational adoption by firms' },
    ],
    snippets: [
      {
        title: {
          pt: 'TypeScript Domain: Money Value Object (Centavos inteiros em BigInt)',
          en: 'TypeScript Domain: Money Value Object (BigInt integer-cents)',
        },
        language: 'typescript',
        code: `export class Money {
  private readonly cents: bigint;

  private constructor(cents: bigint) {
    this.cents = cents;
  }

  public static fromDecimal(value: number | string): Money {
    const num = typeof value === 'string' ? parseFloat(value.replace(',', '.')) : value;
    if (isNaN(num)) throw new Error(\`Valor decimal inválido: \${value}\`);
    return new Money(BigInt(Math.round(num * 100)));
  }

  public static fromCents(cents: number | bigint): Money {
    return new Money(BigInt(cents));
  }

  public add(other: Money): Money {
    return new Money(this.cents + other.cents);
  }

  public multiply(factor: number): Money {
    return new Money(BigInt(Math.round(Number(this.cents) * factor)));
  }

  public toDecimal(): number {
    return Number(this.cents) / 100;
  }

  public formatBRL(): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(this.toDecimal());
  }
}`,
        caption: {
          pt: 'Elimina o problema de precisão IEEE 754 em cálculos fiscais e notas de serviço.',
          en: 'Eliminates IEEE 754 precision drift in accounting and outward tax computations.',
        },
      },
      {
        title: {
          pt: 'PostgreSQL / Supabase Migration: Partidas Dobradas & RLS Imutável',
          en: 'PostgreSQL / Supabase Migration: Double-entry Bookkeeping & RLS',
        },
        language: 'sql',
        code: `-- 1. Anon e authenticated sem privilégios destrutivos (TRUNCATE não respeita RLS)
revoke all on all tables in schema public from anon;
revoke truncate, references, trigger on all tables in schema public from authenticated;

-- 2. Histórico contábil imutável (guarda fiscal de 5 anos obrigatória)
alter table public.journal_entries
  add constraint journal_entries_tenant_company_fkey
  foreign key (tenant_id, company_id)
  references public.companies (tenant_id, id) on delete restrict;

-- 3. Trigger transacional: Partidas dobradas (Débito = Crédito rigoroso)
create or replace function app.conferir_partidas() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
  v_d bigint;
  v_c bigint;
begin
  select coalesce(sum(amount), 0) into v_d
    from public.journal_lines where entry_id = new.id and type = 'D';
  select coalesce(sum(amount), 0) into v_c
    from public.journal_lines where entry_id = new.id and type = 'C';
  if v_d <> v_c then
    raise exception 'Partida desbalanceada: Débito (%) != Crédito (%)', v_d, v_c
      using errcode = '23514';
  end if;
  return new;
end $$;`,
        caption: {
          pt: 'Integridade fiscal garantida pelo motor de banco de dados PostgreSQL antes do commit da transação.',
          en: 'Fiscal integrity guaranteed by PostgreSQL database engine before transaction commit.',
        },
      },
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vitest'],
    href: 'https://vortex-os-pi.vercel.app/login',
    hrefLabel: { pt: 'Ver no ar', en: 'Live' },
  },
  {
    id: 'origami',
    org: 'Origami Lab',
    period: '2025 — 2026',
    kind: 'trabalho',
    title: {
      pt: 'Gestão de ordens de serviço e diários de obra (Setor Ferroviário)',
      en: 'Rail sector work-order and field construction management',
    },
    metric: {
      pt: 'Fiscalização no mesmo dia e eliminação de relatórios em papel',
      en: 'Same-day inspections and elimination of paper field logs',
    },
    architecture: {
      decision: {
        pt: 'Ecossistema web e mobile unificado consumindo API Node/Express/Prisma',
        en: 'Unified web and native mobile clients sharing a Node/Express/Prisma API',
      },
      tradeOff: {
        pt: 'Compartilhamento de contratos de tipagem e validação entre o painel administrativo Next.js e o app de campo React Native/Expo, com suporte a preenchimento offline.',
        en: 'Shared type contracts and validation across the Next.js admin dashboard and React Native/Expo field app, supporting offline field submissions.',
      },
    },
    summary: {
      pt: 'Desenvolvimento e sustentação de plataforma corporativa de gestão de ordens de serviço e relatórios diários de obra para o setor ferroviário. Substituiu formulários físicos por fluxo digital completo com assinatura eletrônica de validade jurídica, portal de acompanhamento e aplicativo móvel de campo com suporte a operação offline.',
      en: 'Full stack development and maintenance of an enterprise work-order and daily inspection platform for the rail sector. Replaced physical forms with an end-to-end digital inspection workflow featuring legally binding digital signatures, tracking portal, and an offline-first mobile field application.',
    },
    highlights: [
      { pt: 'Eliminou extravio de diários físicos e acelerou em dias a validação de obras em campo', en: 'Eliminated physical construction log loss and cut field inspection sign-offs by days' },
      { pt: 'Fluxo de assinatura digital auditável com conformidade legal para equipes e fiscais', en: 'Auditable digital signature workflow with regulatory compliance for field crews and inspectors' },
      { pt: 'Suporte à operação móvel offline-first para áreas remotas da malha ferroviária', en: 'Offline-first mobile support for remote field teams working along rail corridors' },
    ],
    stack: ['Node', 'Express', 'Prisma', 'PostgreSQL', 'Next.js', 'React Native', 'Expo'],
  },
  {
    id: 'enemza',
    org: { pt: 'Projeto próprio', en: 'Own project' },
    period: '2026',
    kind: 'produto',
    title: {
      pt: 'Enemza — Plataforma EdTech de preparação para o ENEM',
      en: 'Enemza — EdTech SaaS for national exam preparation (ENEM)',
    },
    metric: {
      pt: 'Retenção por consistência individual sem rankings tóxicos',
      en: 'Retention driven by individual consistency without toxic leaderboards',
    },
    architecture: {
      decision: {
        pt: 'Autenticação por cookies assinados (scrypt + HMAC) e Neon connection pooling',
        en: 'Signed cookie authentication (scrypt + HMAC) with Neon connection pooling',
      },
      tradeOff: {
        pt: 'Regra de exclusividade de notas validada em duas camadas (Zod no backend e restrição CHECK no SQL), garantindo integridade estrita sem sobrecarga de sessões em memória.',
        en: 'Dual-layer note exclusivity validation (Zod in backend, CHECK constraint in SQL) preventing invalid states without in-memory session overhead.',
      },
    },
    summary: {
      pt: 'PWA educacional para preparação ao ENEM com arquitetura serverless (Next.js 15, Prisma e PostgreSQL serverless no Neon). Pipeline automatizado de catalogação e transcrição de videoaulas, provas de fixação com questões do INEP e geração assistida por IA com dupla verificação determinística obrigatória. Modelo de gamificação pessoal baseado em XP, sem ranking competitivo.',
      en: 'Educational PWA for ENEM exam preparation built on serverless architecture (Next.js 15, Prisma, and Neon PostgreSQL). Features an automated video cataloging and transcription pipeline, practice exams combining official INEP questions with dual-verified AI generation, and personal XP gamification designed around study consistency rather than leaderboards.',
    },
    highlights: [
      { pt: 'Pipeline automatizado de catalogação e classificação de aulas via LLM', en: 'Automated video ingestion and classification pipeline utilizing LLMs' },
      { pt: 'Dupla verificação determinística obrigatória em questões geradas por IA', en: 'Mandatory deterministic double-check on all AI-generated practice questions' },
      { pt: 'Persistência serverless com pooler do Neon e autenticação segura com cookies assinados', en: 'Serverless persistence with Neon connection pooling and signed HTTP-only cookies' },
    ],
    stack: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL (Neon)', 'PWA', 'Gemini', 'Vitest'],
    href: 'https://github.com/GabrielArantesSilva/EnemzaMVP',
    hrefLabel: { pt: 'Código', en: 'Source' },
  },
  {
    id: 'dobra',
    org: { pt: 'Projeto próprio', en: 'Own project' },
    period: '2026',
    kind: 'produto',
    title: {
      pt: 'Dobra SaaS — Eficiência clínica em composição corporal',
      en: 'Dobra SaaS — Clinical body composition assessment',
    },
    metric: {
      pt: 'Redução de 40% no tempo de atendimento físico em consultório',
      en: '40% reduction in in-office physical assessment duration',
    },
    architecture: {
      decision: {
        pt: 'Domínio antropométrico desacoplado coberto por 28 testes unitários',
        en: 'Decoupled anthropometric domain covered by 28 unit tests',
      },
      tradeOff: {
        pt: 'Implementação pura das fórmulas científicas (Jackson-Pollock 3 e 7 dobras, Durnin-Womersley, Siri, Brozek e Behnke), com aviso automático se um protocolo não possui fonte primária indexada.',
        en: 'Pure implementation of verified formulas (JP3, JP7, Durnin-Womersley, Siri, Brozek, Behnke), with automated notices if a protocol lacks primary literature indexation.',
      },
    },
    summary: {
      pt: 'Software para avaliação de composição corporal desenvolvido com TanStack Start (React 19), Tailwind CSS v4 e Supabase. Substitui planilhas manuais por um motor matemático preciso de cálculo de percentual de gordura corporal, com isolamento multi-profissional via RLS e 28 testes unitários nos algoritmos de cálculo.',
      en: 'Body composition assessment software built with TanStack Start (React 19), Tailwind CSS v4, and Supabase. Replaces spreadsheets with a precise mathematical calculation engine for body fat percentage, featuring per-practitioner RLS isolation and 28 unit tests on anthropometric formulas.',
    },
    highlights: [
      { pt: '28 testes unitários cobrindo todos os protocolos matemáticos em Vitest', en: '28 unit tests in Vitest covering all mathematical calculation protocols' },
      { pt: 'Classificações corporais derivadas de fonte única, sem divergência entre telas', en: 'Body fat classification bands derived from a single source of truth across views' },
      { pt: 'Isolamento de dados de pacientes por avaliador via Supabase Row Level Security', en: 'Patient record isolation per practitioner enforced by Supabase Row Level Security' },
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
      pt: 'Automação Comercial — Bot de vendas com checkout Pix',
      en: 'Sales Automation — Telegram bot with instant Pix checkout',
    },
    metric: {
      pt: 'Liquidação instantânea via Pix e entrega digital automatizada',
      en: 'Instant Pix settlement and automated digital asset delivery',
    },
    architecture: {
      decision: {
        pt: 'Idempotência com HMAC-SHA256 e entrega via chat_join_request',
        en: 'Idempotent HMAC-SHA256 webhooks and chat_join_request delivery',
      },
      tradeOff: {
        pt: 'Uso de comparação segura de tempo (timingSafeEqual) na assinatura de webhooks e entrega de acessos por aprovação de entrada em canal, impedindo vazamento de links compartilháveis.',
        en: 'Timing-safe HMAC-SHA256 signature verification on webhooks and membership approvals via chat_join_request, preventing unauthorized link sharing.',
      },
    },
    summary: {
      pt: 'Bot de automação de vendas no Telegram com checkout Pix automatizado (Asaas/Mercado Pago) e containerização Docker. Arquitetura orientada a resiliência com expiração automática de cobranças em 5 minutos, rotina de reconciliação periódica a cada 10 minutos e liberação de acessos a infoprodutos sem intervenção humana.',
      en: 'Telegram sales automation bot with automated Pix checkout (Asaas/Mercado Pago) containerized with Docker. Resilient architecture featuring 5-minute charge timeouts, 10-minute automated background reconciliation, and zero-human-intervention product delivery.',
    },
    highlights: [
      { pt: 'Validação de webhook com HMAC-SHA256 e idempotência por eventId', en: 'Webhook signature validation with HMAC-SHA256 and idempotency by eventId' },
      { pt: 'Rotina de reconciliação em segundo plano com retry exponencial para pagamentos', en: 'Background reconciliation cron with exponential backoff for pending transactions' },
      { pt: 'Ambiente conteinerizado via Docker Compose com deploy simplificado', en: 'Reproducible Docker Compose environment ready for self-hosted VPS deployment' },
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
      pt: 'Bancada — Confiabilidade e avaliação para agentes de IA',
      en: 'Bancada — Reliability & variance test bench for AI agents',
    },
    metric: {
      pt: 'Avaliação determinística de variância e taxa de acerto de IA',
      en: 'Deterministic variance and pass-rate benchmarking for AI',
    },
    summary: {
      pt: 'Banco de provas automatizado para agentes e fluxos de IA. Executa baterias de testes repetidos sobre o mesmo prompt/contexto, mede variância e taxa de acerto determinístico e armazena o histórico de execução com replays completos para auditoria de engenharia.',
      en: 'Automated test bench for AI agents and workflows. Runs repeated benchmark suites across identical prompts and contexts, measures variance and deterministic accuracy, and records complete execution replays for engineering audits.',
    },
    highlights: [
      { pt: 'Variância e confiabilidade como métricas determinísticas de primeira classe', en: 'Variance and reliability as first-class deterministic metrics' },
      { pt: 'Gravação e auditoria de execução completa para validação em produção', en: 'Full execution replay and audit capture for production-readiness' },
    ],
    stack: ['TypeScript', 'Next.js', 'Drizzle', 'Vitest'],
  },
  {
    id: 'colai',
    org: { pt: 'Projeto próprio / Comunidade', en: 'Community SaaS' },
    period: '2026',
    kind: 'produto',
    title: {
      pt: 'COLAÍ — App de engajamento social e eventos locais',
      en: 'COLAÍ — Social engagement and local event discovery app',
    },
    metric: {
      pt: 'Geoprocessamento PostGIS em tempo real',
      en: 'Real-time PostGIS geospatial queries',
    },
    summary: {
      pt: 'Aplicativo mobile com foco em comunidade e conexão segura entre grupos e novos participantes. Resolve a barreira social de integração através de um fluxo inteligente de convites e solicitação de presença ("furar panelinhas"). Localização em tempo real via PostGIS e liberação de dados geográficos restrita a participantes aprovados.',
      en: 'Mobile application connecting local social circles and event organizers. Solves social entry friction via structured invitation and approval flows, featuring PostGIS geospatial queries and strict privacy-gated address reveals.',
    },
    highlights: [
      { pt: 'Isolamento de dados com RLS estrito e geolocalização performática via PostGIS', en: 'Data isolation with strict RLS and high-performance geolocation via PostGIS' },
      { pt: 'Arquitetura mobile offline-first com Expo e React Native', en: 'Offline-first mobile architecture with Expo and React Native' },
    ],
    stack: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'PostGIS', 'MapLibre'],
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
    metric: {
      pt: 'Soluções entregues e validadas em produção',
      en: 'Shipped and validated production client systems',
    },
    summary: {
      pt: 'Período focado em construir soluções de software sob demanda para resolver dores operacionais de clientes e pequenos comércios. Foco em arquitetura web, integrações de pagamento e automações que aumentaram a produtividade dos negócios atendidos.',
      en: 'Contract engineering delivering custom software solutions to solve operational bottlenecks for small businesses. Delivered web architectures, payment gateways, and automations that directly improved client productivity.',
    },
    highlights: [],
    stack: ['TypeScript', 'Node', 'React'],
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
  cleanScreen: { pt: 'Tela limpa', en: 'Clean screen' } satisfies Txt,
  backTo: { pt: 'voltar para', en: 'back to' } satisfies Txt,
  closeTab: { pt: 'Fechar aba', en: 'Close tab' } satisfies Txt,
  openTabs: { pt: 'Abas abertas', en: 'Open tabs' } satisfies Txt,
  tab: { pt: 'aba', en: 'tab' } satisfies Txt,
  tabs: { pt: 'abas', en: 'tabs' } satisfies Txt,
  loading: { pt: 'Carregando…', en: 'Loading…' } satisfies Txt,
  openMenu: { pt: 'abrir menu', en: 'open menu' } satisfies Txt,
  closeMenu: { pt: 'fechar menu', en: 'close menu' } satisfies Txt,
  requestEmpty: {
    pt: 'Escreve a mensagem antes de enviar.',
    en: 'Write the message before sending.',
  } satisfies Txt,
  requestHello: { pt: 'Olá, Gabriel!', en: 'Hi, Gabriel!' } satisfies Txt,
  requestIAm: { pt: 'Sou', en: 'I am' } satisfies Txt,
  emailFallback: {
    pt: 'Se nenhum app de e-mail abriu, copia o endereço:',
    en: 'If no email app opened, copy the address:',
  } satisfies Txt,
  copy: { pt: 'copiar', en: 'copy' } satisfies Txt,
  copied: { pt: 'copiado', en: 'copied' } satisfies Txt,
  stack: { pt: 'Stack', en: 'Stack' } satisfies Txt,
  close: { pt: 'Fechar', en: 'Close' } satisfies Txt,
  minimize: { pt: 'Minimizar', en: 'Minimize' } satisfies Txt,
  brainTitle: {
    pt: 'Base de conhecimento & engenharia',
    en: 'Engineering knowledge base',
  } satisfies Txt,
  brainLede: {
    pt: 'Curadoria de estudos aprofundados em arquitetura de software, Clean Architecture, segurança (OWASP), padrões de projeto e sistemas distribuídos.',
    en: 'Curated deep dives into software architecture, Clean Architecture, security (OWASP), design patterns, and distributed systems.',
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
  nowTitle: { pt: 'O que está compilando agora', en: 'What is compiling now' } satisfies Txt,
  nowLede: {
    pt: 'Atividade real lida diretamente do git dos projetos e foco técnico do momento. Sem texto estático desatualizado.',
    en: 'Real development activity read straight from git history alongside current technical focus. No stale static lines.',
  } satisfies Txt,
  nowFooter: {
    pt: 'sincronizado automaticamente via scripts/sync-activity.mjs',
    en: 'automatically synced via scripts/sync-activity.mjs',
  } satisfies Txt,
  nowFocusTitle: { pt: 'Radar de foco', en: 'Current focus' } satisfies Txt,
  nowActivityTitle: { pt: 'Atividade nos repositórios', en: 'Repository activity' } satisfies Txt,
  milestonesTitle: { pt: 'Marcos de entrega', en: 'Delivery milestones' } satisfies Txt,
  codePeekTitle: { pt: 'Trechos de código auditados', en: 'Audited code snippets' } satisfies Txt,
  viewSnippet: { pt: 'Ver código real', en: 'Inspect actual code' } satisfies Txt,
  hideSnippet: { pt: 'Ocultar código', en: 'Hide code' } satisfies Txt,
  copySnippet: { pt: 'Copiar código', en: 'Copy snippet' } satisfies Txt,
  copiedSnippet: { pt: 'Copiado!', en: 'Copied!' } satisfies Txt,
  activeToday: { pt: 'ativo hoje', en: 'active today' } satisfies Txt,
  trackedCommits: { pt: 'commits rastreados', en: 'tracked commits' } satisfies Txt,
  activeRepos: { pt: 'repositórios', en: 'repositories' } satisfies Txt,
  privateCommit: { pt: 'repositório privado', en: 'private repository' } satisfies Txt,
  today2: { pt: 'hoje', en: 'today' } satisfies Txt,
  stackTitle: {
    pt: 'O que eu uso, e o que eu já documentei',
    en: 'What I use, and what I have documented',
  } satisfies Txt,
  stackLede: {
    pt: 'Primeiro o que uso nos projetos, cada um com onde foi usado. Depois o que estudei a fundo o bastante para documentar no vault.',
    en: 'First what I use in my projects, each with where it shipped. Then what I studied deeply enough to document in my vault.',
  } satisfies Txt,
  usedIn: { pt: 'Usado em', en: 'Used in' } satisfies Txt,
  stackNoNote: {
    pt: 'Uso no dia a dia, ainda sem nota própria no vault.',
    en: 'Daily driver, no dedicated vault note yet.',
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
  downloadResume: { pt: 'Baixar currículo', en: 'Download résumé' } satisfies Txt,
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

/**
 * O que eu uso, por grupo, na ordem em que aparece no app Stack. Fonte: a stack
 * dos projetos em WORK e as linguagens do currículo. O app cruza cada nome com
 * WORK (mostra onde foi usado) e com as notas do vault (mostra o resumo).
 * Ferramentas que só existem no vault entram depois destas, sozinhas.
 */
export const STACK_CORE = {
  languages: ['TypeScript', 'JavaScript', 'SQL', 'HTML / CSS'],
  frameworks: [
    'React',
    'Next.js',
    'React Native',
    'Expo',
    'Node.js',
    'Express',
    'Fastify',
    'TanStack Start',
    'Tailwind CSS',
  ],
  databases: ['PostgreSQL', 'Supabase', 'Prisma', 'Drizzle', 'PostGIS'],
  infra: ['Vite', 'Vitest', 'Docker'],
  tools: ['grammY', 'MapLibre'],
} as const;

export const NOW_FOCUS = {
  currentProject: {
    badge: { pt: 'em construção ativa', en: 'active development' } satisfies Txt,
    title: {
      pt: 'VORTEX OS — ERP Contábil & Fiscal',
      en: 'VORTEX OS — Accounting & Tax ERP',
    } satisfies Txt,
    description: {
      pt: 'Evolução de rotinas de NFS-e no Registro de Saídas, anexos fiscais, cadastros e endurecimento de permissões multi-tenant via Supabase RLS.',
      en: 'Advancing outward NFS-e routines, fiscal annexes, registry forms, and multi-tenant authorization hardening via Supabase RLS.',
    } satisfies Txt,
  },
  learning: {
    badge: { pt: 'estudo contínuo', en: 'continuous study' } satisfies Txt,
    title: {
      pt: 'Clean Architecture & Domínios Tipados',
      en: 'Clean Architecture & Typed Domains',
    } satisfies Txt,
    description: {
      pt: 'Consolidação de Value Objects monetários sem ponto flutuante, Branded Types, máquinas de estado finitas e testes automatizados de ponta a ponta.',
      en: 'Consolidating integer-cent Money Value Objects, Branded Types, finite state machines, and end-to-end automated test suites.',
    } satisfies Txt,
  },
  availability: {
    badge: { pt: 'disponibilidade', en: 'availability' } satisfies Txt,
    title: {
      pt: 'Novos Projetos & Contratos',
      en: 'New Projects & Roles',
    } satisfies Txt,
    description: {
      pt: 'Disponível para posições full stack remotas, desenho de arquitetura de back-end e desenvolvimento de produtos de alta densidade.',
      en: 'Available for remote full stack roles, backend architecture design, and high-density product development.',
    } satisfies Txt,
  },
  milestones: [
    {
      label: { pt: 'VORTEX OS · Fase Beta Fechada', en: 'VORTEX OS · Closed Beta Phase' } satisfies Txt,
      progress: '85%',
      detail: { pt: 'NFS-e Saídas, Anexos I a V e RLS multi-tenant', en: 'Outward NFS-e, Annexes I-V and multi-tenant RLS' } satisfies Txt,
    },
    {
      label: { pt: 'Disponibilidade para Contratos', en: 'Contract Availability' } satisfies Txt,
      progress: 'Q4 2026 / Q1 2027',
      detail: { pt: 'Remoto · Staff / Tech Lead / Full Stack', en: 'Remote · Staff / Tech Lead / Full Stack' } satisfies Txt,
    },
  ],
} as const;
