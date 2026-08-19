'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Globe,
  Cpu,
  Terminal,
  Zap,
  Shield,
  Layers,
  GitBranch,
  Box,
  Cloud,
} from 'lucide-react';
import { fadeInUp, fadeIn, staggerContainer, staggerItem } from '@/lib/animations';
import { useScrollReveal, useReducedMotion } from '@/hooks/useScrollReveal';

type Skill = {
  name: string;
  level: number;
  years: string;
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
};

const skillCategories: {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  skills: Skill[];
}[] = [
  {
    name: 'Linguagens',
    icon: Code2,
    color: 'from-brand-500 to-brand-600',
    skills: [
      { name: 'TypeScript', level: 5, years: '5+' },
      { name: 'Python', level: 5, years: '8+' },
      { name: 'JavaScript', level: 5, years: '10+' },
      { name: 'Java', level: 3, years: '2+' },
      { name: 'Go', level: 3, years: '1+' },
      { name: 'Rust', level: 2, years: '1+' },
      { name: 'PHP', level: 4, years: '8+' },
      { name: 'SQL', level: 5, years: '10+' },
    ],
  },
  {
    name: 'Backend & APIs',
    icon: Server,
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'Fastify', level: 5, years: '3+' },
      { name: 'FastAPI', level: 5, years: '3+' },
      { name: 'Node.js', level: 5, years: '6+' },
      { name: 'Express', level: 4, years: '5+' },
      { name: 'GraphQL', level: 4, years: '3+' },
      { name: 'REST APIs', level: 5, years: '8+' },
      { name: 'WebSockets', level: 4, years: '3+' },
      { name: 'gRPC', level: 3, years: '1+' },
    ],
  },
  {
    name: 'Frontend',
    icon: Globe,
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'React', level: 5, years: '5+' },
      { name: 'Next.js', level: 4, years: '3+' },
      { name: 'Vue.js', level: 3, years: '2+' },
      { name: 'Tailwind CSS', level: 5, years: '3+' },
      { name: 'Framer Motion', level: 4, years: '2+' },
      { name: 'Vite', level: 5, years: '2+' },
      { name: 'CSS Animations', level: 5, years: '4+' },
      { name: 'Web Components', level: 3, years: '1+' },
    ],
  },
  {
    name: 'Data & Trading',
    icon: Cpu,
    color: 'from-amber-500 to-orange-600',
    skills: [
      { name: 'Jesse Framework', level: 5, years: '3+' },
      { name: 'Pandas/NumPy', level: 5, years: '5+' },
      { name: 'TA-Lib', level: 4, years: '3+' },
      { name: 'CCXT', level: 5, years: '4+' },
      { name: 'Lightweight Charts', level: 4, years: '2+' },
      { name: 'Jupyter', level: 5, years: '5+' },
      { name: 'Backtesting', level: 5, years: '4+' },
      { name: 'Quantitative Analysis', level: 4, years: '3+' },
    ],
  },
  {
    name: 'Banco de Dados',
    icon: Database,
    color: 'from-blue-500 to-indigo-600',
    skills: [
      { name: 'PostgreSQL', level: 5, years: '8+' },
      { name: 'Redis', level: 5, years: '5+' },
      { name: 'Prisma ORM', level: 5, years: '3+' },
      { name: 'MongoDB', level: 3, years: '2+' },
      { name: 'TimescaleDB', level: 3, years: '1+' },
      { name: 'ClickHouse', level: 2, years: '1+' },
      { name: 'SQLite', level: 4, years: '5+' },
      { name: 'Database Design', level: 5, years: '8+' },
    ],
  },
{
      name: 'DevOps & Infra',
      icon: Cloud,
      color: 'from-gray-500 to-slate-600',
      skills: [
        { name: 'Docker', level: 5, years: '5+', icon: Box },
        { name: 'Kubernetes', level: 4, years: '3+' },
      { name: 'AWS', level: 4, years: '4+' },
      { name: 'Terraform', level: 3, years: '2+' },
      { name: 'GitHub Actions', level: 5, years: '3+' },
      { name: 'CI/CD', level: 5, years: '4+' },
      { name: 'Linux/Shell', level: 5, years: '10+' },
      { name: 'Observability', level: 4, years: '3+' },
    ],
  },
  {
    name: 'Arquitetura & Padrões',
    icon: Layers,
    color: 'from-rose-500 to-pink-600',
    skills: [
      { name: 'Clean Architecture', level: 5, years: '5+' },
      { name: 'Domain-Driven Design', level: 4, years: '3+' },
      { name: 'Event Sourcing', level: 4, years: '2+' },
      { name: 'CQRS', level: 4, years: '2+' },
      { name: 'Microservices', level: 4, years: '4+' },
      { name: 'SOLID Principles', level: 5, years: '8+' },
      { name: 'TDD/BDD', level: 4, years: '5+' },
      { name: 'Design Patterns', level: 5, years: '8+' },
    ],
  },
  {
    name: 'Ferramentas & Outros',
    icon: Terminal,
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'Git', level: 5, years: '12+' },
      { name: 'pnpm/Turbo', level: 4, years: '2+' },
      { name: 'ESLint/Prettier', level: 5, years: '5+' },
      { name: 'Vitest/Jest', level: 4, years: '3+' },
      { name: 'Playwright', level: 3, years: '1+' },
      { name: 'VS Code', level: 5, years: '6+' },
      { name: 'Figma/Design', level: 3, years: '2+' },
      { name: 'Technical Writing', level: 4, years: '4+' },
    ],
  },
];

function SkillBar({ level, color }: { level: number; color: string }) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: color }}
        initial={prefersReducedMotion ? { width: `calc(${level * 20}%)` } : { width: 0 }}
        animate={{ width: `calc(${level * 20}%)` }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
      />
    </div>
  );
}

export function Skills() {
  const { ref, isVisible } = useScrollReveal({ delay: 100 });

  return (
    <section id="skills" ref={ref} className="py-20 sm:py-28 bg-white/50 dark:bg-surface-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="badge badge-primary mb-4 inline-block">Habilidades</span>
          <h2 className="section-title gradient-text">Tecnologias & Competências</h2>
          <p className="section-subtitle mt-4">
            Ferramentas que uso diariamente para construir software robusto e escalável
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              variants={staggerItem}
              className="glass-card-hover p-6 h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${category.color.split(' to ')[0]}20, ${category.color.split(' to ')[1]}20)` }}>
                  <category.icon className="w-6 h-6" style={{ color: category.color.split(' to ')[0] }} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
              </div>

              <div className="space-y-4 flex-1">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * skillIndex + 0.1 * catIndex, duration: 0.3 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate pr-2 flex items-center gap-1.5">
                        {skill.icon && <skill.icon className="w-3.5 h-3.5 text-brand-500" />}
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-mono whitespace-nowrap">
                        {skill.years}
                      </span>
                    </div>
                    <SkillBar level={skill.level} color={category.color} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="mt-16 glass-card-hover p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Metodologias & Práticas
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Além das ferramentas, estas são as práticas que guiam meu trabalho diário
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Test-First', desc: 'TDD/BDD como padrão. Cobertura >80% em código crítico.' },
              { icon: GitBranch, title: 'Git Flow', desc: 'Branches semânticas, commits convencionais, PRs pequenos.' },
              { icon: Layers, title: 'Clean Code', desc: 'SOLID, DRY, KISS, YAGNI. Código que se explica sozinho.' },
              { icon: Zap, title: 'Automação Total', desc: 'CI/CD, linting, formatting, deploys — tudo automatizado.' },
              { icon: Code2, title: 'Code Review', desc: 'Revisão como aprendizado mútuo, não gatekeeping.' },
              { icon: Database, title: 'Data-Driven', desc: 'Decisões baseadas em métricas, logs estruturados, tracing.' },
              { icon: Globe, title: 'Open Source First', desc: 'Contribuo upstream. Ferramentas abertas > vendor lock-in.' },
              { icon: Cpu, title: 'Performance', desc: 'Profiling contínuo, otimização baseada em bottlenecks reais.' },
            ].map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                  <practice.icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{practice.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{practice.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}