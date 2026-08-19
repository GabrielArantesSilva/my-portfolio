export const LANG = { pt: 'pt', en: 'en' } as const;

export type Lang = (typeof LANG)[keyof typeof LANG];

export const isLang = (value: unknown): value is Lang =>
  value === LANG.pt || value === LANG.en;
