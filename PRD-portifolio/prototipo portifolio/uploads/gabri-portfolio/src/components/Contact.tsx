'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  MessageSquare,
  Code2,
  Sparkles,
  Loader2,
} from 'lucide-react';
import { MailIcon, GithubIcon, LinkedinIcon, TwitterIcon, CheckCircleIcon, SendIcon } from './ui/SocialIcons';
import { Button } from './ui/Button';
import { fadeInUp, fadeIn, staggerContainer, staggerItem, scaleIn } from '@/lib/animations';
import { useScrollReveal, useReducedMotion } from '@/hooks/useScrollReveal';

const contactMethods = [
  {
    name: 'Email',
    desc: 'Para propostas, colaborações ou só um oi',
    icon: MailIcon,
    href: 'mailto:gabri@example.com',
    color: 'from-red-500 to-pink-500',
    primary: true,
  },
  {
    name: 'GitHub',
    desc: 'Issues, PRs, discussões técnicas',
    icon: GithubIcon,
    href: 'https://github.com/Gabri',
    color: 'from-gray-700 to-gray-900',
    primary: false,
  },
  {
    name: 'LinkedIn',
    desc: 'Networking profissional',
    icon: LinkedinIcon,
    href: 'https://linkedin.com/in/gabri',
    color: 'from-blue-600 to-blue-800',
    primary: false,
  },
  {
    name: 'Twitter/X',
    desc: 'Pensamentos aleatórios sobre código',
    icon: TwitterIcon,
    href: 'https://twitter.com/gabri',
    color: 'from-sky-500 to-blue-600',
    primary: false,
  },
];

const topics = [
  { label: 'Freelance / Consultoria', icon: Code2 },
  { label: 'Open Source / Colaboração', icon: Sparkles },
  { label: 'Trading / Quant / Fintech', icon: Code2 },
  { label: 'Arquitetura / Code Review', icon: Sparkles },
  { label: 'Mentoria / Pair Programming', icon: MessageSquare },
  { label: 'Outro assunto', icon: MessageSquare },
];

export function Contact() {
  const { ref, isVisible } = useScrollReveal({ delay: 100 });
  const prefersReducedMotion = useReducedMotion();
  const [selectedTopic, setSelectedTopic] = useState('');
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormState('success');
    
    setTimeout(() => setFormState('idle'), 3000);
    e.currentTarget.reset();
    setSelectedTopic('');
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-500/5 via-transparent to-brand-600/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="badge badge-primary mb-4 inline-block animate-pulse-soft">Contato</span>
          <h2 className="section-title gradient-text">Vamos Conversar?</h2>
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            Estou sempre aberto a novas oportunidades, colaborações open source ou apenas trocar ideias sobre código, trading ou arquitetura.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-[1fr_1.2fr] gap-12"
        >
          <motion.div variants={staggerItem} className="space-y-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.name}
                  href={method.href}
                  target={method.primary ? '_self' : '_blank'}
                  rel={method.primary ? undefined : 'noopener noreferrer'}
                  variants={staggerItem}
                  className={`
                    glass-card-hover p-5 flex items-center gap-4 group
                    ${method.primary ? 'ring-2 ring-brand-500/30 dark:ring-brand-500/50' : ''}
                  `}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(135deg, ${method.color.split(' to ')[0]}20, ${method.color.split(' to ')[1]}20)` }}>
                    <method.icon className="w-6 h-6" style={{ color: method.color.split(' to ')[0] }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {method.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{method.desc}</p>
                  </div>
                  {!method.primary && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="text-brand-500 opacity-0"
                    >
                      <Send className="w-5 h-5" />
                    </motion.span>
                  )}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="pt-6 border-t border-white/10 dark:border-white/10"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Sobre o que quer conversar?
              </h3>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <motion.button
                    key={topic.label}
                    variants={scaleIn}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setSelectedTopic(topic.label)}
                    className={`
                      px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                      ${selectedTopic === topic.label
                        ? 'bg-brand-600 text-white shadow-glow'
                        : 'glass text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-surface-dark/90'
                      }
                    `}
                  >
                    <topic.icon className="w-4 h-4 inline mr-1" />
                    {topic.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="glass-card-hover p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-surface-dark/50 border border-white/20 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-surface-dark/50 border border-white/20 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Assunto
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-surface-dark/50 border border-white/20 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none bg-no-repeat bg-right"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundSize: '1.5rem 1.5rem', backgroundPosition: 'right 0.75rem center', paddingRight: '2.5rem' }}
                >
                  <option value="">Selecione um assunto</option>
                  {topics.map((topic) => (
                    <option key={topic.label} value={topic.label}>{topic.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-surface-dark/50 border border-white/20 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none font-sans"
                  placeholder="Conte-me sobre seu projeto, ideia ou apenas diga oi..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                isLoading={formState === 'submitting'}
                rightIcon={formState === 'submitting' ? <Loader2 className="w-5 h-5 animate-spin" /> : <SendIcon className="w-5 h-5" />}
                disabled={formState === 'submitting' || formState === 'success'}
              >
                {formState === 'success' ? (
                  <>
                    <CheckCircleIcon className="w-5 h-5" />
                    Enviado com sucesso!
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </Button>

              {formState === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 dark:text-green-400 text-sm"
                >
                  Obrigado! Respondo o mais breve possível. 🚀
                </motion.p>
              )}
            </form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 pt-8 border-t border-white/10 dark:border-white/10 text-center"
            >
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                Ou me encontre por aqui:
              </p>
              <div className="flex items-center justify-center gap-4">
                {contactMethods.filter(m => !m.primary).slice(0, 3).map((method) => (
                  <a
                    key={method.name}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl flex items-center justify-center glass text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200"
                    aria-label={method.name}
                  >
                    <method.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}