import { useEffect, useState } from 'react';
import { useLang } from '../i18n/lang';
import { LANG } from '../i18n/lang.const';
import { IDENTITY, SECTION_LABELS } from '../content/site';

const TARGETS = [
  { id: 'agora', label: SECTION_LABELS.agora },
  { id: 'projetos', label: SECTION_LABELS.projetos },
  { id: 'codigo', label: SECTION_LABELS.codigo },
  { id: 'cerebro', label: SECTION_LABELS.cerebro },
  { id: 'metodo', label: SECTION_LABELS.metodo },
  { id: 'contato', label: SECTION_LABELS.contato },
] as const;

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('topo');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    for (const { id } of TARGETS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-[76rem] items-center gap-6 px-5 py-4"
      >
        <a href="#topo" className="numeric text-sm font-semibold text-heading">
          {IDENTITY.short}
        </a>

        <ul className="ml-auto hidden items-center gap-1 md:flex">
          {TARGETS.map((target) => (
            <li key={target.id}>
              <a
                href={`#${target.id}`}
                aria-current={active === target.id ? 'true' : undefined}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors duration-200 ${
                  active === target.id
                    ? 'text-heading'
                    : 'text-muted hover:text-body'
                }`}
              >
                {t(target.label)}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="ml-auto flex items-center rounded-full border border-hairline p-0.5 md:ml-0"
          role="group"
          aria-label="Idioma"
        >
          {[LANG.pt, LANG.en].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setLang(option)}
              aria-pressed={lang === option}
              className={`numeric rounded-full px-2.5 py-1 text-xs uppercase transition-colors duration-200 ${
                lang === option
                  ? 'bg-accent text-on-accent font-semibold'
                  : 'text-muted hover:text-body'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
