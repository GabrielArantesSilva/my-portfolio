import type { SVGProps } from 'react';
import {
  Code2,
  Database,
  Layers,
  Terminal,
  Cpu,
  Globe,
  Flame,
  Boxes,
  Zap,
} from 'lucide-react';

interface TechIconProps extends SVGProps<SVGSVGElement> {
  name: string;
}

export function TechIcon({ name, className = 'w-3.5 h-3.5', ...props }: TechIconProps) {
  const k = name
    .toLowerCase()
    .replace(/\(.*?\)/g, '')
    .replace(/[-s]?(orm|v\d+)\b/g, '')
    .replace(/[\d.\s/-]/g, '')
    .replace(/js$/, '');

  // 1. TypeScript
  if (k === 'typescript' || k === 'ts') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M11.2 8.2H4.8V10.2H6.9V18.2H9.1V10.2H11.2V8.2ZM17.4 11.4C16.8 11.2 16.2 11.1 15.6 11.1C14.7 11.1 14.1 11.5 14.1 12.1C14.1 12.8 14.7 13.1 15.8 13.5C17.6 14.1 18.7 14.9 18.7 16.4C18.7 18.2 17.2 19.4 15.1 19.4C13.8 19.4 12.6 18.9 11.8 18.3L12.5 16.5C13.2 17 14.1 17.4 15 17.4C15.9 17.4 16.6 17 16.6 16.3C16.6 15.5 15.9 15.2 14.8 14.7C13.1 14.1 12.1 13.3 12.1 11.9C12.1 10.2 13.5 9.1 15.5 9.1C16.6 9.1 17.6 9.5 18.2 9.9L17.4 11.4Z"
          fill="white"
        />
      </svg>
    );
  }

  // 2. JavaScript
  if (k === 'javascript' || k === 'js') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M7.5 18.2C6.4 18.2 5.5 17.7 5.1 16.9L6.5 15.9C6.8 16.4 7.2 16.7 7.7 16.7C8.3 16.7 8.7 16.4 8.7 15.5V9.5H10.5V15.5C10.5 17.2 9.5 18.2 7.5 18.2ZM14.8 18.2C13.1 18.2 12.1 17.2 11.7 16.2L13.3 15.3C13.6 15.9 14.1 16.5 14.8 16.5C15.5 16.5 16 16.1 16 15.5C16 14.8 15.4 14.5 14.4 14.1L13.8 13.8C12.4 13.2 11.6 12.4 11.6 11.1C11.6 9.5 12.8 8.4 14.6 8.4C15.8 8.4 16.8 8.9 17.4 9.8L15.9 10.8C15.5 10.3 15.1 10.1 14.6 10.1C14 10.1 13.5 10.5 13.5 11C13.5 11.6 14 11.9 14.9 12.3L15.5 12.5C17.1 13.2 18 14 18 15.4C18 17.1 16.6 18.2 14.8 18.2Z"
          fill="#1A1A1A"
        />
      </svg>
    );
  }

  // 3. React / React Native
  if (k === 'react' || k === 'reactnative') {
    return (
      <svg
        viewBox="-11.5 -10.23174 23 20.46348"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // 4. Next.js
  if (k === 'next' || k === 'nextjs') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        <path
          d="M9.5 7.5V16.5M9.5 7.5L16.8 17.5M14.5 7.5V13"
          stroke="#000"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 5. Tailwind CSS
  if (k === 'tailwind' || k === 'tailwindcss') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="#38BDF8"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    );
  }

  // 6. Node.js
  if (k === 'node' || k === 'nodejs') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="#5FA04E"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z" />
        <path d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" fill="#5FA04E" />
      </svg>
    );
  }

  // 7. PostgreSQL
  if (k === 'postgresql' || k === 'postgres') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <rect width="24" height="24" rx="4" fill="#336791" />
        <ellipse cx="12" cy="7" rx="6" ry="2.8" stroke="white" strokeWidth="1.4" />
        <path
          d="M6 7v10c0 1.5 2.7 2.8 6 2.8s6-1.3 6-2.8V7M6 12c0 1.5 2.7 2.8 6 2.8s6-1.3 6-2.8"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 8. Supabase
  if (k === 'supabase') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d="M13.2 2.5L3.8 13.8c-.4.5 0 1.2.6 1.2h7.4l-1 6.5c-.2 1 .9 1.6 1.6.8L21.8 11c.4-.5 0-1.2-.6-1.2h-7.4l1-6.5c.2-1-.9-1.6-1.6-.8z"
          fill="#3ECF8E"
        />
      </svg>
    );
  }

  // 9. Prisma
  if (k === 'prisma') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d="M12 2.5L3.5 19.5h17L12 2.5zm0 4.2l5.4 10.8H6.6L12 6.7z"
          fill="#5A67D8"
        />
      </svg>
    );
  }

  // 10. Drizzle
  if (k === 'drizzle') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d="M12 3L6 13h5l-2 8 8-11h-5l2-7z"
          fill="#C5F74F"
        />
      </svg>
    );
  }

  // 11. Docker
  if (k === 'docker') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="#2496ED"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path d="M22.5 11.5c-.3 0-.6.1-.9.2-.5-.9-1.5-1.5-2.6-1.5-.2 0-.4 0-.6.1-.4-1.2-1.5-2.1-2.9-2.1-.2 0-.4 0-.6.1V6.5h-3v3H9.5V6.5h-3v3H4v2h17.5c.6 0 1 .4 1 1 0 .6-.4 1-1 1-1.3 0-2.5-.5-3.4-1.4-.9.9-2.1 1.4-3.4 1.4s-2.5-.5-3.4-1.4c-.9.9-2.1 1.4-3.4 1.4-.4 0-.8-.1-1.2-.2-.4 1.3-1.6 2.2-3.1 2.2H2v2c0 2.2 4.5 4 10 4s10-1.8 10-4c0-.2 0-.4-.1-.6.4-.4.6-.9.6-1.4 0-1.1-.9-2-2-2z" />
        <rect x="3.5" y="6.5" width="2" height="2" fill="#2496ED" />
        <rect x="6.5" y="6.5" width="2" height="2" fill="#2496ED" />
        <rect x="9.5" y="6.5" width="2" height="2" fill="#2496ED" />
        <rect x="6.5" y="3.5" width="2" height="2" fill="#2496ED" />
      </svg>
    );
  }

  // 12. Vite
  if (k === 'vite') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d="M21.5 4.5L12.5 21 3.5 4.5h4.2l4.8 9.5 4.8-9.5h4.2z"
          fill="#646CFF"
        />
        <path
          d="M13.2 2.5L7.5 12.5h4l-1 6.5 6.5-10.5h-4.2l1.4-6h-1z"
          fill="#FFD62E"
        />
      </svg>
    );
  }

  // 13. Vitest
  if (k === 'vitest') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d="M19.5 3.5L12 17.5 4.5 3.5h3.6l3.9 8 3.9-8h3.6z"
          fill="#729B1B"
        />
        <circle cx="17.5" cy="5.5" r="2.5" fill="#FCC72B" />
      </svg>
    );
  }

  // 14. Expo
  if (k === 'expo') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path d="M2.5 19.5L12 4.5l9.5 15h-3.8L12 10.8 6.3 19.5H2.5z" />
      </svg>
    );
  }

  // 15. Express
  if (k === 'express') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <rect width="24" height="24" rx="4" fill="#222" />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fill="white"
          fontSize="11"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
        >
          ex
        </text>
      </svg>
    );
  }

  // 16. Fastify
  if (k === 'fastify') {
    return (
      <Flame className={`text-orange-400 ${className}`} aria-hidden="true" />
    );
  }

  // 17. TanStack Start
  if (k === 'tanstackstart' || k === 'tanstack') {
    return (
      <Boxes className={`text-cyan-400 ${className}`} aria-hidden="true" />
    );
  }

  // 18. SQL
  if (k === 'sql') {
    return (
      <Database className={`text-sky-400 ${className}`} aria-hidden="true" />
    );
  }

  // 19. HTML / CSS
  if (k === 'htmlcss' || k === 'html' || k === 'css') {
    return (
      <Code2 className={`text-amber-400 ${className}`} aria-hidden="true" />
    );
  }

  // 20. PostGIS / MapLibre
  if (k === 'postgis' || k === 'maplibre') {
    return (
      <Globe className={`text-emerald-400 ${className}`} aria-hidden="true" />
    );
  }

  // 21. grammY (Telegram bot)
  if (k === 'grammy') {
    return (
      <Zap className={`text-blue-400 ${className}`} aria-hidden="true" />
    );
  }

  // 22. Python
  if (k === 'python') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d="M11.8 2.5c-4.4 0-4.1 1.9-4.1 1.9l.01 2h4.2v.6H5.8s-2.8.3-2.8 4.2c0 3.8 2.5 3.7 2.5 3.7h1.5v-2.1s-.1-2.5 2.5-2.5h4.2s2.4-.1 2.4-2.4V4.9s.4-2.4-4.3-2.4zm-2.3 1.3a.75.75 0 110 1.5.75.75 0 010-1.5z"
          fill="#3776AB"
        />
        <path
          d="M12.2 21.5c4.4 0 4.1-1.9 4.1-1.9l-.01-2h-4.2v-.6h6.1s2.8-.3 2.8-4.2c0-3.8-2.5-3.7-2.5-3.7h-1.5v2.1s.1 2.5-2.5 2.5H10.3s-2.4.1-2.4 2.4v3.1s-.4 2.4 4.3 2.4zm2.3-1.3a.75.75 0 110-1.5.75.75 0 010 1.5z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // 23. Git
  if (k === 'git') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="#F05032"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path d="M21.7 10.7L13.3 2.3a1.7 1.7 0 00-2.4 0l-1.9 1.9 3.1 3.1a2 2 0 012.3 2.3l3 3a2 2 0 11-1.3 1.3l-2.9-2.9v4.2a2 2 0 11-1.8 0V11a2 2 0 01-1.1-2.6L7.3 5.3 2.3 10.3a1.7 1.7 0 000 2.4l8.4 8.4a1.7 1.7 0 002.4 0l8.6-8.6a1.7 1.7 0 000-2.4z" />
      </svg>
    );
  }

  // 24. Fallback genérico refinado
  if (k.includes('db') || k.includes('database') || k.includes('sql')) {
    return <Database className={`text-muted ${className}`} aria-hidden="true" />;
  }
  if (k.includes('api') || k.includes('rest') || k.includes('server')) {
    return <Cpu className={`text-muted ${className}`} aria-hidden="true" />;
  }
  if (k.includes('tool') || k.includes('cli') || k.includes('terminal')) {
    return <Terminal className={`text-muted ${className}`} aria-hidden="true" />;
  }
  if (k.includes('ui') || k.includes('css') || k.includes('layout')) {
    return <Layers className={`text-muted ${className}`} aria-hidden="true" />;
  }

  return <Code2 className={`text-muted ${className}`} aria-hidden="true" />;
}
