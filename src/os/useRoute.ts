import { useCallback, useEffect, useState } from 'react';

/**
 * Sincroniza o app em foco com a URL, usando a History API direto.
 *
 * Removi o @tanstack/react-router que eu mesmo tinha instalado: são seis
 * rotas estáticas sem loader, sem search param e sem dado por request.
 * O router custaria ~30kB de bundle num site cujo primeiro acesso vem do
 * LinkedIn, no celular. Type-safety de seis strings não paga esse preço.
 */
export function useRoute(valid: readonly string[], fallback: string) {
  const read = useCallback(() => {
    if (typeof window === 'undefined') return null;
    const slug = window.location.pathname.replace(/^\/+|\/+$/g, '');
    return valid.includes(slug) ? slug : null;
  }, [valid]);

  const [route, setRoute] = useState<string | null>(read);

  useEffect(() => {
    const onPop = () => setRoute(read());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [read]);

  /** Troca a URL sem recarregar. `replace` evita poluir o histórico. */
  const navigate = useCallback(
    (slug: string | null, replace = false) => {
      const path = slug ? `/${slug}` : '/';
      if (window.location.pathname === path) return;
      window.history[replace ? 'replaceState' : 'pushState']({}, '', path);
      setRoute(slug);
    },
    []
  );

  return { route, navigate, fallback };
}
