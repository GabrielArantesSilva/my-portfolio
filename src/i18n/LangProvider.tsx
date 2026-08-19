import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { LANG, isLang } from './lang.const';
import type { Lang } from './lang.const';
import { LangContext } from './lang.context';
import type { LangValue } from './lang.context';

const STORAGE_KEY = 'ga.lang';
const HTML_LANG: Readonly<Record<Lang, string>> = { pt: 'pt-BR', en: 'en' };

function detect(): Lang {
  if (typeof window === 'undefined') return LANG.pt;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLang(stored)) return stored;
  return navigator.language?.toLowerCase().startsWith(LANG.pt) ? LANG.pt : LANG.en;
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detect);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<LangValue>(
    () => ({ lang, setLang, t: (txt) => txt[lang] }),
    [lang, setLang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
