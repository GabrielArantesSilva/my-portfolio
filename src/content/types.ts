import type { Lang } from '../i18n/lang.const';

export type { Lang };

/** Texto bilíngue. Toda string visível ao usuário passa por aqui. */
export type Txt = Readonly<Record<Lang, string>>;

export type ProjectStatus = 'ativo' | 'pausado' | 'concluido';
export type ProjectVisibility = 'publico' | 'privado';

export interface Project {
  readonly num: string;
  readonly name: string;
  readonly summary: Txt;
  readonly role: Txt;
  readonly status: ProjectStatus;
  readonly visibility: ProjectVisibility;
  readonly stack: readonly string[];
  /** Só quando existe algo público de verdade para abrir. */
  readonly href?: string;
  readonly hrefLabel?: Txt;
}

export interface Rule {
  readonly n: string;
  readonly title: Txt;
  readonly text: Txt;
}

export interface RitualStep {
  readonly n: string;
  readonly text: Txt;
}

export interface NowCard {
  readonly tag: Txt;
  readonly title: Txt;
  readonly text: Txt;
  readonly meta: Txt;
}
