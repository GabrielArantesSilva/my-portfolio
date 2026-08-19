'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Code2,
  ArrowRight,
  Loader2,
  GitBranch,
} from 'lucide-react';
import { GithubIcon, ExternalLinkIcon } from './ui/SocialIcons';
import { Button } from './ui/Button';
import { fadeInUp, staggerContainer, staggerItem, cardHover } from '@/lib/animations';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { getProjects, getLanguageColor } from '@/lib/github';
import type { Project } from '@/types';

export function Projects() {
  const { ref, isVisible } = useScrollReveal({ delay: 100 });
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError('Erro ao carregar projetos do GitHub');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const nonFeaturedProjects = projects.filter(p => !p.featured);

  if (loading) {
    return (
      <section id="projects" ref={ref} className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge badge-primary mb-4 inline-block">Projetos</span>
            <h2 className="section-title gradient-text">Outros Projetos</h2>
            <p className="section-subtitle mt-4">Experimentos, ferramentas e contribuições open source</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div key={i} className="glass-card-hover p-6 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" ref={ref} className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500">{error}</p>
          <Button variant="secondary" onClick={() => window.location.reload()} className="mt-4">
            Tentar Novamente
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" ref={ref} className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="badge badge-primary mb-4 inline-block">Projetos</span>
          <h2 className="section-title gradient-text">Outros Projetos</h2>
          <p className="section-subtitle mt-4">Experimentos, ferramentas e contribuições open source</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {nonFeaturedProjects.map((project, index) => (
            <motion.article
              key={project.name}
              variants={staggerItem}
              initial="initial"
              whileHover="hover"
              className="glass-card-hover p-6 flex flex-col h-full group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg truncate group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {project.name}
                  </h3>
                  {project.language && (
                    <span
                      className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-1"
                      style={{ color: getLanguageColor(project.language) }}
                    >
                      <Code2 className="w-3 h-3" />
                      {project.language}
                    </span>
                  )}
                </div>
                {project.featured && (
                  <span className="badge badge-primary text-xs flex-shrink-0">Destaque</span>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.topics.slice(0, 4).map((topic) => (
                  <span key={topic} className="badge badge-secondary text-xs">
                    {topic}
                  </span>
                ))}
                {project.topics.length > 4 && (
                  <span className="badge badge-secondary text-xs">+{project.topics.length - 4}</span>
                )}
              </div>

              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                {project.stars > 0 && (
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" />
                    {project.stars}
                  </span>
                )}
                {project.forks > 0 && (
                  <span className="flex items-center gap-1">
                    <GitBranch className="w-3.5 h-3.5" />
                    {project.forks}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-white/10 dark:border-white/5">
                <Button
                  variant="ghost"
                  size="sm"
                  leftIcon={<GithubIcon className="w-4 h-4" />}
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  className="flex-1 justify-center"
                >
                  Código
                </Button>
                {project.demoUrl && (
                  <Button
                    variant="secondary"
                    size="sm"
                    leftIcon={<ExternalLinkIcon className="w-4 h-4" />}
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    className="flex-1 justify-center"
                  >
                    Demo
                  </Button>
                )}
              </div>
            </motion.article>
          ))}

          {nonFeaturedProjects.length === 0 && (
            <motion.div
              variants={staggerItem}
              className="col-span-full glass-card-hover p-12 text-center"
            >
              <GithubIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Nenhum projeto encontrado
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Projetos públicos aparecerão aqui automaticamente via API do GitHub.
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="mt-12 text-center"
        >
          <Button
            variant="secondary"
            leftIcon={<GithubIcon className="w-5 h-5" />}
            onClick={() => window.open('https://github.com/Gabri?tab=repositories', '_blank')}
          >
            Ver Todos no GitHub
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}