import { createContext } from 'react';
import type { Lang } from './lang.const';
import type { Txt } from '../content/types';

export interface LangValue {
  lang: Lang;
  setLang: (next: Lang) => void;
  t: (txt: Txt) => string;
}

export const LangContext = createContext<LangValue | null>(null);
