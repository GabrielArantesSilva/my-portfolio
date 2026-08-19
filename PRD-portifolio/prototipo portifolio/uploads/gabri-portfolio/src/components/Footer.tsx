'use client';

import { motion } from 'framer-motion';
import { Heart, Code2, Zap, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from './ui/SocialIcons';
import { fadeInUp, fadeIn } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useScrollReveal';

const socialLinks = [
  { name: 'GitHub', icon: GithubIcon, href: 'https://github.com/Gabri' },
  { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com/in/gabri' },
  { name: 'Email', icon: MailIcon, href: 'mailto:gabri@example.com' },
  { name: 'Twitter', icon: TwitterIcon, href: 'https://twitter.com/gabri' },
];

const footerLinks = {
  Projetos: [
    { label: 'Voult (Principal)', href: '#featured' },
    { label: 'Todos os Projetos', href: '#projects' },
    { label: 'GitHub', href: 'https://github.com/Gabri?tab=repositories' },
    { label: 'Open Source', href: 'https://github.com/Gabri?tab=repositories&q=&type=source' },
  ],
  Sobre: [
    { label: 'Experiência', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Filosofia', href: '#about' },
    { label: 'Contato', href: '#contact' },
  ],
  Recursos: [
    { label: 'Documentação Voult', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Blog/Tutoriais', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
};

export function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-white/50 dark:bg-surface-dark/50 border-t border-white/20 dark:border-white/10">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12"
        >
          <div className="space-y-6">
            <motion.div
              className="flex items-center gap-2"
              animate={prefersReducedMotion ? {} : { y: [0, -2, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Gabri</span>
              <span className="text-gray-500 dark:text-gray-400">.dev</span>
            </motion.div>

            <p className="text-gray-600 dark:text-gray-300 max-w-xs leading-relaxed">
              Engenheiro de software apaixonado por construir sistemas elegantes,
              ferramentas de trading e experiências digitais que fazem a diferença.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Projetos</h4>
            <nav className="space-y-3">
              {footerLinks.Projetos.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors text-sm"
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Sobre</h4>
            <nav className="space-y-3">
              {footerLinks.Sobre.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors text-sm"
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Recursos</h4>
            <nav className="space-y-3">
              {footerLinks.Recursos.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors text-sm"
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 border-t border-white/20 dark:border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {currentYear} Gabri. Construído com
              <span className="flex items-center gap-1 mx-1">
                <Heart className="w-4 h-4 text-red-500" aria-hidden="true" />
                <Code2 className="w-4 h-4 text-brand-500" aria-hidden="true" />
                <Zap className="w-4 h-4 text-amber-500" aria-hidden="true" />
              </span>
              React + TypeScript + Tailwind + Framer Motion
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Globe className="w-4 h-4" aria-hidden="true" />
                Português
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-4 h-4" aria-hidden="true" />
                Open Source
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}