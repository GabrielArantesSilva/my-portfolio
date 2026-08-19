import type { Lang } from '../i18n/lang.const';

export type { Lang };

/** Texto bilíngue. Toda string visível ao usuário passa por aqui. */
export type Txt = Readonly<Record<Lang, string>>;

export type WorkKind = 'trabalho' | 'produto';

export interface WorkItem {
  readonly id: string;
  /** Empregador tem nome próprio; projeto próprio é rotulado por idioma. */
  readonly org: string | Txt;
  readonly period: string;
  readonly kind: WorkKind;
  readonly title: Txt;
  readonly summary: Txt;
  readonly highlights: readonly Txt[];
  readonly stack: readonly string[];
  /** Só quando existe algo público de verdade para abrir. */
  readonly href?: string;
  readonly hrefLabel?: Txt;
}

export interface AppId {
  readonly id: string;
}
