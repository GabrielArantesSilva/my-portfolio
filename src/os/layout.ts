import { APPS } from '../content/site';
import type { Txt } from '../content/types';

export interface AppLayout {
  id: string;
  label: Txt;
  glyph: string;
  /** Coordenadas de mundo, em px. O desktop é infinito; isto é o endereço. */
  x: number;
  y: number;
  width: number;
}

/**
 * Disposição pré-arranjada. Nada se sobrepõe, e o agrupamento segue Gestalt:
 * quem apresenta a pessoa fica perto da origem; conhecimento fica embaixo;
 * canais de conversa ficam à direita, no fim da leitura.
 *
 * A origem (0,0) é o canto superior esquerdo da primeira tela.
 */
export const LAYOUT: readonly AppLayout[] = [
  // Bloco 1 — quem é, e o que faz. Visível sem navegar.
  { id: 'sobre', label: APPS.sobre, glyph: '◈', x: 40, y: 72, width: 430 },
  { id: 'trabalho', label: APPS.trabalho, glyph: '▣', x: 510, y: 52, width: 545 },
  { id: 'agora', label: APPS.agora, glyph: '◔', x: 1095, y: 96, width: 420 },

  // Bloco 2 — como trabalha. Um passo abaixo.
  { id: 'cerebro', label: APPS.cerebro, glyph: '◐', x: 60, y: 560, width: 545 },
  { id: 'stack', label: APPS.stack, glyph: '◇', x: 645, y: 600, width: 450 },

  // Bloco 3 — como contratar. À direita, fim da leitura.
  { id: 'curriculo', label: APPS.curriculo, glyph: '▤', x: 1555, y: 60, width: 530 },
  { id: 'pedidos', label: APPS.pedidos, glyph: '✎', x: 1135, y: 560, width: 440 },
  { id: 'contato', label: APPS.contato, glyph: '✉', x: 1615, y: 640, width: 400 },
];

export const APP_IDS = LAYOUT.map((a) => a.id);

/** Abertas na entrada: as três do bloco 1, que já cabem na primeira tela. */
export const INITIAL_APPS = ['sobre', 'trabalho', 'agora'];

export const byId = (id: string) => LAYOUT.find((a) => a.id === id);
