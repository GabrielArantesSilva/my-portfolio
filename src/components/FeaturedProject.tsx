'use client';

import { motion } from 'framer-motion';
import {
  Database,
  Shield,
  Zap,
  Layers,
  CreditCard,
  Bitcoin,
  CheckCircle,
  ArrowRight,
  Globe,
} from 'lucide-react';
import { GithubIcon, ExternalLinkIcon } from './ui/SocialIcons';
import { Button } from './ui/Button';
import { fadeInUp, fadeIn, staggerContainer, staggerItem, cardHover } from '@/lib/animations';
import { useScrollReveal, useReducedMotion } from '@/hooks/useScrollReveal';

const voultFeatures = [
  { icon: CreditCard, title: 'Contas Fiat', desc: 'Contas correntes multi-moeda com IBAN, transferências SEPA/SWIFT, cartões virtuais e físicos.' },
  { icon: Bitcoin, title: 'Custódia Cripto', desc: 'Wallet não-custodial integrada, suporte a BTC, ETH, stablecoins, DeFi staking e yield farming.' },
  { icon: Zap, title: 'Trading Engine', desc: 'Motor de matching de alta performance, order book em tempo real, APIs para bots algorítmicos.' },
  { icon: Shield, title: 'Segurança Bancária', desc: 'KYC/AML automatizado, 2FA, biometria, device fingerprinting, compliance PCI-DSS.' },
  { icon: Database, title: 'Ledger Imutável', desc: 'Event sourcing + CQRS, auditoria completa, conciliação automática, snapshots Point-in-Time.' },
  { icon: Layers, title: 'Arquitetura Moderna', desc: 'Microsserviços com Fastify, gRPC, Kafka, PostgreSQL, Redis, Kubernetes, observabilidade full.' },
];

const techStack = [
  { name: 'Fastify', category: 'backend', color: '#000000' },
  { name: 'TypeScript', category: 'language', color: '#3178c6' },
  { name: 'PostgreSQL', category: 'database', color: '#4169e1' },
  { name: 'Prisma', category: 'orm', color: '#2d3748' },
  { name: 'Redis', category: 'cache', color: '#dc382d' },
  { name: 'Kafka', category: 'queue', color: '#231f20' },
  { name: 'Docker', category: 'infra', color: '#2496ed' },
  { name: 'Kubernetes', category: 'infra', color: '#326ce5' },
  { name: 'React', category: 'frontend', color: '#61dafb' },
  { name: 'Tailwind', category: 'styling', color: '#06b6d4' },
  { name: 'Vitest', category: 'testing', color: '#6e9f18' },
  { name: 'Zod', category: 'validation', color: '#3e67b1' },
];

const projectLinks = [
  { label: 'Repositório API', href: 'https://github.com/Gabri/Banco-Volt', Icon: GithubIcon },
  { label: 'Documentação', href: '#', Icon: ExternalLinkIcon, disabled: true },
  { label: 'Demo (Breve)', href: '#', Icon: ExternalLinkIcon, disabled: true },
];

export function FeaturedProject() {
  const { ref, isVisible } = useScrollReveal({ delay: 100 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="featured" ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-500/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-brand-600/5 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge badge-primary mb-4 inline-block animate-pulse-soft">Projeto Principal</span>
          <h2 className="section-title">
            <span className="gradient-text">Voult</span> — Banco Digital Híbrido
          </h2>
          <p className="section-subtitle mt-4 text-lg">
            Plataforma completa de banking moderno unificando fiat + cripto em uma experiência única.
            Arquitetura enterprise, segurança bancária, APIs abertas para developers.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-[1fr_400px] gap-12 items-start"
        >
          <motion.div variants={staggerItem} className="space-y-8">
            <motion.div
              variants={cardHover}
              initial="initial"
              whileHover="hover"
              className="glass-card-hover p-8 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Arquitetura Enterprise</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Clean Architecture + DDD + Event Sourcing</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {voultFeatures.slice(0, 4).map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                    className="flex items-start gap-3 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{feature.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {voultFeatures.slice(4).map((feature) => (
                  <motion.span
                    key={feature.title}
                    className="badge badge-primary text-xs flex items-center gap-1"
                  >
                    <feature.icon className="w-3.5 h-3.5" />
                    {feature.title}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-6 border-t border-white/20 dark:border-white/10">
                {projectLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant={link.disabled ? 'ghost' : 'secondary'}
                    size="sm"
                    leftIcon={<link.Icon className="w-4 h-4" />}
                    disabled={link.disabled}
                    onClick={() => !link.disabled && window.open(link.href, '_blank')}
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-3 gap-4"
            >
              {[
                { label: 'Microsserviços', value: '12+', icon: Layers },
                { label: 'Cobertura de Testes', value: '85%+', icon: CheckCircle },
                { label: 'Latência P99', value: '<50ms', icon: Zap },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="glass-card-hover p-6 text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <stat.icon className="w-5 h-5 text-brand-500" />
                    <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="relative"
            style={{ zIndex: 10 }}
          >
            <motion.div
              className="glass-card relative rounded-2xl overflow-hidden border border-white/20 dark:border-white/10"
              animate={prefersReducedMotion ? {} : { y: [0, -10, 0], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-brand-600/10" />
              
              <div className="relative p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: ['#ff5f57', '#ffbd2e', '#28ca42'][i - 1] }} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">api.volt.bank/v1</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Online</span>
                  </div>
                </div>

                <div className="space-y-3 font-mono text-sm">
                  {[
                    { method: 'GET', path: '/accounts', desc: 'Listar contas do usuário' },
                    { method: 'POST', path: '/transfers', desc: 'Transferência fiat/cripto' },
                    { method: 'GET', path: '/portfolio', desc: 'Posição consolidada' },
                    { method: 'WS', path: '/market/data', desc: 'Stream tempo real' },
                    { method: 'POST', path: '/orders', desc: 'Criar ordem (limit/market)' },
                  ].map((endpoint) => (
                    <motion.div
                      key={endpoint.path}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 transition-colors"
                    >
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                        endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                        endpoint.method === 'WS' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-brand-400 flex-1">{endpoint.path}</code>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">{endpoint.desc}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 dark:border-white/5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Stack Principal</span>
                    <ArrowRight className="w-4 h-4 text-brand-500" />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {techStack.slice(0, 8).map((tech) => (
                      <span
                        key={tech.name}
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-brand-500/20 to-brand-600/20 rounded-2xl blur-2xl"
              animate={prefersReducedMotion ? {} : { scale: [1, 1.05, 1], rotate: [0, 2, 0], transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="mt-16 glass-card-hover p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-brand-500" />
            Roadmap & Próximos Passos
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Fase 1 — Core Banking', items: ['Contas multi-moeda', 'Transferências SEPA', 'Cartões virtuais', 'KYC automatizado'], status: 'done' },
              { title: 'Fase 2 — Crypto Native', items: ['Wallet não-custodial', 'DeFi integration', 'Staking/Yield', 'Bridge fiat↔crypto'], status: 'in-progress' },
              { title: 'Fase 3 — Developer Platform', items: ['API pública', 'SDKs (TS/Python)', 'Sandbox environment', 'Marketplace de bots'], status: 'planned' },
            ].map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    phase.status === 'done' ? 'bg-green-500' :
                    phase.status === 'in-progress' ? 'bg-yellow-500 animate-pulse' :
                    'bg-gray-400'
                  }`} />
                  <h4 className="font-semibold text-gray-900 dark:text-white">{phase.title}</h4>
                </div>
                <ul className="space-y-1 pl-6">
                  {phase.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                        phase.status === 'done' ? 'bg-green-500' :
                        phase.status === 'in-progress' ? 'bg-yellow-500' :
                        'bg-gray-300 dark:bg-gray-600'
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}