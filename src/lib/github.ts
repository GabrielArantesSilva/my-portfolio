import type { GitHubUser, GitHubRepo, Project } from '../types';

const GITHUB_USERNAME = 'Gabri';
const GITHUB_API_BASE = 'https://api.github.com';

async function fetchGitHub<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${GITHUB_API_BASE}${endpoint}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
}

export async function getGitHubUser(): Promise<GitHubUser> {
  return fetchGitHub<GitHubUser>(`/users/${GITHUB_USERNAME}`);
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const repos = await fetchGitHub<GitHubRepo[]>(`/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
  return repos.filter(repo => !repo.fork);
}

function mapRepoToProject(repo: GitHubRepo): Project {
  const featuredNames = ['voult', 'grove', 'jupyterlab-lightweight-charts-jesse'];
  return {
    name: repo.name,
    description: repo.description || 'No description provided',
    url: repo.homepage || repo.html_url,
    githubUrl: repo.html_url,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language,
    topics: repo.topics || [],
    featured: featuredNames.includes(repo.name.toLowerCase()),
    demoUrl: repo.homepage || undefined,
  };
}

export async function getProjects(): Promise<Project[]> {
  const repos = await getGitHubRepos();
  return repos.map(mapRepoToProject).sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.stars - a.stars;
  });
}

export async function getFeaturedProject(): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find(p => p.featured) || projects[0] || null;
}

export function getLanguageColor(language: string | null): string {
  const colors: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    Java: '#b07219',
    Go: '#00ADD8',
    Rust: '#dea584',
    'Jupyter Notebook': '#DA5B0B',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Shell: '#89e051',
    PHP: '#4F5D95',
  };
  return colors[language || ''] || '#8b949e';
}