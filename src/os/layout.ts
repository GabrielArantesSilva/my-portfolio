import { APPS } from '../content/site';
import type { Txt } from '../content/types';

export interface AppLayout {
  id: string;
  label: Txt;
  /** Posição inicial no desktop relativo à área de trabalho, em px. */
  x: number;
  y: number;
  width: number;
}

/**
 * Disposição equilibrada dentro do espaço visível da tela.
 */
export const LAYOUT: readonly AppLayout[] = [
  { id: 'sobre', label: APPS.sobre, x: 24, y: 24, width: 450 },
  { id: 'trabalho', label: APPS.trabalho, x: 72, y: 36, width: 580 },
  { id: 'agora', label: APPS.agora, x: 120, y: 48, width: 460 },
  { id: 'cerebro', label: APPS.cerebro, x: 40, y: 28, width: 560 },
  { id: 'stack', label: APPS.stack, x: 80, y: 36, width: 480 },
  { id: 'curriculo', label: APPS.curriculo, x: 60, y: 20, width: 560 },
  { id: 'pedidos', label: APPS.pedidos, x: 100, y: 44, width: 450 },
  { id: 'contato', label: APPS.contato, x: 130, y: 56, width: 420 },
];

export const APP_IDS = LAYOUT.map((a) => a.id);

/** Abertas inicialmente: sobre e trabalho já abertas para o visitante entender de cara. */
export const INITIAL_APPS = ['sobre', 'trabalho'];

export const byId = (id: string) => LAYOUT.find((a) => a.id === id);
