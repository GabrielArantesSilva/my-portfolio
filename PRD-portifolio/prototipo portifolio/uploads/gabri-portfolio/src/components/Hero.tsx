'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GithubIcon } from './ui/SocialIcons';
import { Button } from './ui/Button';
import { fadeInUp } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useScrollReveal';

const stats = [
  { value: '15+', label: 'Anos de Código' },
  { value: '22', label: 'Repos Públicos' },
  { value: 'Python', label: 'Linguagem Principal' },
  { value: 'Open Source', label: 'Foco Principal' },
];

const floatingAnimation = {
  scale: [1, 1.1, 1],
  transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' as const },
};

const pulseAnimation = {
  scale: [1, 1.2, 1],
  transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' as const },
};

const scrollArrowAnimation = {
  y: [0, 8, 0],
  transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' as const },
};

const statPulseAnimation = (delay: number) => ({
  scale: [1, 1.05, 1],
  transition: { duration: 2, repeat: Infinity, delay, ease: 'easeInOut' as const },
});

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : floatingAnimation}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : floatingAnimation}
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-600/5 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : floatingAnimation}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.06, delayChildren: 0.1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/20 dark:border-white/10 mb-8"
          >
            <motion.span
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={prefersReducedMotion ? {} : pulseAnimation}
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Desenvolvedor Full Stack · Entusiasta de Crypto/Trading · Open Source
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
            style={{ letterSpacing: '-0.03em' }}
          >
            Olá, sou <span className="gradient-text">Gabri</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-600 dark:text-gray-300 gradient-text">
              Engenheiro de Software
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Construo sistemas robustos, ferramentas de trading algorítmico e experiências digitais elegantes.
            Apaixonado por <strong className="text-gray-900 dark:text-white">Python</strong>, <strong className="text-gray-900 dark:text-white">TypeScript</strong> e arquitetura limpa.
          </motion.p>

<motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })}
            >
              Ver Projeto Principal
            </Button>
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<GithubIcon className="w-5 h-5" />}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })}
            >
              Todos os Projetos
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.06, delayChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="glass-card-hover p-6 text-center"
              >
                <motion.div
                  className="text-3xl sm:text-4xl font-bold gradient-text mb-1"
                  animate={prefersReducedMotion ? {} : statPulseAnimation(index * 0.3)}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Role para explorar</span>
          <motion.div
            className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2"
            animate={prefersReducedMotion ? {} : scrollArrowAnimation}
          >
            <motion.div className="w-1.5 h-1.5 bg-current rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}