import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { LANG, isLang } from './lang.const';
import type { Lang } from './lang.const';
import type { Txt } from '../content/types';

const STORAGE_KEY = 'ga.lang';
const HTML_LANG: Readonly<Record<Lang, string>> = { pt: 'pt-BR', en: 'en' };

interface LangValue {
  lang: Lang;
  setLang: (next: Lang) => void;
  t: (txt: Txt) => string;
}

const LangContext = createContext<LangValue | null>(null);

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

export function useLang(): LangValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang precisa estar dentro de <LangProvider>');
  return ctx;
}
