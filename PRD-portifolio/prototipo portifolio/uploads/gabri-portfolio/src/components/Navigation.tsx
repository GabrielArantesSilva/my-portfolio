'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon } from './ui/SocialIcons';
import { Button } from './ui/Button';
import { themeTransition, navLink, slideInRight, fadeInDown } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useScrollReveal';

const navItems = [
  { id: 'home', label: 'Início', href: '#home' },
  { id: 'about', label: 'Sobre', href: '#about' },
  { id: 'featured', label: 'Projeto Principal', href: '#featured' },
  { id: 'projects', label: 'Projetos', href: '#projects' },
  { id: 'skills', label: 'Habilidades', href: '#skills' },
  { id: 'contact', label: 'Contato', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Gabri' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/gabri' },
  { name: 'Email', href: 'mailto:gabri@example.com' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => item.id);
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }, [theme]);

  const scrollToSection = useCallback((href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      setIsMobileMenuOpen(false);
    }
  }, [prefersReducedMotion]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          variants={themeTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed top-4 right-4 z-50"
        >
          <Button
            variant="secondary"
            size="sm"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Alternar para modo escuro' : 'Alternar para modo claro'}
            className="relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div
                  key="sun"
                  variants={themeTransition}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-5 h-5"
                >
                  <Sun className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  variants={themeTransition}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-5 h-5"
                >
                  <Moon className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </AnimatePresence>

      <motion.header
        variants={fadeInDown}
        initial="hidden"
        animate={isScrolled ? 'visible' : 'hidden'}
        className={`
          fixed top-0 left-0 right-0 z-40
          transition-all duration-300 ease-out-strong
          ${isScrolled
            ? 'glass py-3 backdrop-blur-glass-lg shadow-elevation-1'
            : 'py-4 bg-transparent'
          }
        `}
        style={{
          backgroundColor: isScrolled
            ? 'rgba(255, 255, 255, 0.7)'
            : 'transparent',
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#home"
              variants={navLink}
              initial="initial"
              animate="animate"
              className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
              aria-label="Gabri - Página inicial"
            >
              <span className="gradient-text">Gabri</span>
              <span className="hidden sm:inline text-gray-500 dark:text-gray-400">.dev</span>
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  variants={navLink}
                  initial="initial"
                  animate="animate"
                  style={{ transitionDelay: `${0.05 * index}s` }}
                  className={`
                    relative text-sm font-medium transition-colors duration-200
                    ${activeSection === item.id
                      ? 'text-brand-600 dark:text-brand-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    }
                  `}
                >
                  {item.label}
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-brand-500 rounded-full"
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  />
                </motion.a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const iconMap = {
                  GitHub: GithubIcon,
                  LinkedIn: LinkedinIcon,
                  Email: MailIcon,
                };
                const Icon = iconMap[social.name as keyof typeof iconMap];
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={navLink}
                    initial="initial"
                    animate="animate"
                    style={{ transitionDelay: `${0.05 * (index + navItems.length)}s` }}
                    className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
              <Button variant="primary" size="sm" onClick={() => scrollToSection('#contact')}>
                Entrar em Contato
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.aside
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 right-0 bottom-0 w-72 md:w-80 z-40 glass-dark flex flex-col"
          >
            <div className="flex flex-col p-6 gap-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-white">Navegação</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Fechar menu"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <nav className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    variants={navLink}
                    initial="initial"
                    animate="animate"
                    style={{ transitionDelay: `${0.05 * index}s` }}
                    className={`
                      px-4 py-3 rounded-xl text-left font-medium transition-all duration-200
                      ${activeSection === item.id
                        ? 'bg-brand-500/20 text-brand-400'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }
                    `}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                {socialLinks.map((social, index) => {
                const iconMap = {
                  GitHub: GithubIcon,
                  LinkedIn: LinkedinIcon,
                  Email: MailIcon,
                };
                const Icon = iconMap[social.name as keyof typeof iconMap];
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={navLink}
                    initial="initial"
                    animate="animate"
                    style={{ transitionDelay: `${0.05 * (index + navItems.length)}s` }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                );
              })}
              </div>

              <div className="pt-4 border-t border-white/10">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => scrollToSection('#contact')}
                  className="mt-4"
                >
                  Entrar em Contato
                </Button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}