import { useContext } from 'react';
import { LangContext } from './lang.context';
import type { LangValue } from './lang.context';

export function useLang(): LangValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang precisa estar dentro de <LangProvider>');
  return ctx;
}
