'use client';

import { motion } from 'framer-motion';
import { Code, Server, Database, Zap, Brain, Globe } from 'lucide-react';
import { fadeInUp, fadeIn, staggerContainer, staggerItem } from '@/lib/animations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const skills = [
  { category: 'Backend & APIs', icon: Server, items: ['Python', 'FastAPI', 'Fastify', 'Node.js', 'REST', 'GraphQL', 'WebSockets'] },
  { category: 'Data & Trading', icon: Brain, items: ['Jesse', 'Pandas', 'NumPy', 'TA-Lib', 'CCXT', 'Lightweight Charts', 'Jupyter'] },
  { category: 'Frontend', icon: Globe, items: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Next.js', 'Vite', 'CSS Animations'] },
  { category: 'Infrastructure', icon: Database, items: ['PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Prisma'] },
  { category: 'Dev Tools', icon: Code, items: ['Git', 'pnpm', 'Turbo', 'ESLint', 'Prettier', 'Vitest', 'Playwright'] },
  { category: 'Concepts', icon: Zap, items: ['Clean Architecture', 'DDD', 'Event Sourcing', 'CQRS', 'Microservices', 'TDD', 'SOLID'] },
];

const experience = [
  {
    role: 'Engenheiro de Software Sênior',
    company: 'Freelance / Open Source',
    period: '2015 — Presente',
    description: [
      'Desenvolvimento de sistemas de trading algorítmico e bots para criptomoedas',
      'Criação de ferramentas CLI/TUI para produtividade de desenvolvedores',
      'Contribuições para projetos open source (Jesse, grove, internxt-sync)',
      'Arquitetura de sistemas distribuídos e microsserviços',
    ],
    technologies: ['Python', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
  },
  {
    role: 'Desenvolvedor Full Stack',
    company: 'Projetos Pessoais & Colaborações',
    period: '2009 — 2015',
    description: [
      'Desenvolvimento web com PHP (CakePHP, Laravel) e JavaScript',
      'CMS modular (QuickApps-CMS) e plugins para Magento (n98-magerun)',
      'Integração de APIs de pagamento e sistemas de e-commerce',
      'Automação de deploy e scripts de infraestrutura',
    ],
    technologies: ['PHP', 'JavaScript', 'MySQL', 'jQuery', 'Shell', 'Git'],
  },
];

export function About() {
  const { ref, isVisible } = useScrollReveal({ delay: 100 });

  return (
    <section id="about" ref={ref} className="py-20 sm:py-28 bg-white/50 dark:bg-surface-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge badge-primary mb-4 inline-block">Sobre Mim</span>
          <h2 className="section-title gradient-text">Engenheiro por paixão, builder por natureza</h2>
          <p className="section-subtitle mt-4">
            Mais de 15 anos transformando café em código. Especializado em sistemas de trading,
            ferramentas para desenvolvedores e arquitetura de software limpa.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          <motion.div variants={staggerItem} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Minha Jornada
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.article
                  key={exp.role}
                  variants={staggerItem}
                  className="glass-card-hover p-6 relative"
                  style={{ borderLeft: '3px solid', borderColor: 'rgb(14, 165, 233)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <p className="text-brand-600 dark:text-brand-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="badge badge-secondary whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="badge badge-primary text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Stack Tecnológico
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  variants={staggerItem}
                  className="glass-card-hover p-5 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="badge badge-secondary text-xs group-hover:badge-primary transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="glass-card-hover p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Filosofia de Desenvolvimento
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            {[
              { title: 'Código Limpo', desc: 'Arquitetura que escala, testes que protegem, nomes que explicam.', icon: Code },
              { title: 'Open Source', desc: 'Acredito no poder da colaboração. Código compartilhado evolui mais rápido.', icon: Globe },
              { title: 'Automação', desc: 'Se faço duas vezes, automatizo. CLI, CI/CD, scripts — minha superpotência.', icon: Zap },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}