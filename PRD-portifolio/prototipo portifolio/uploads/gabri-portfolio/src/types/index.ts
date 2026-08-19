export interface GitHubUser {
  login: string;
  name: string;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  blog: string;
  twitter_username: string | null;
  location: string | null;
  company: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

export interface Project {
  name: string;
  description: string;
  longDescription?: string;
  url: string;
  homepage?: string;
  githubUrl: string;
  stars: number;
  forks: number;
  language: string | null;
  topics: string[];
  featured: boolean;
  image?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'concept';
  level: number; // 1-5
  icon?: string;
  color?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}