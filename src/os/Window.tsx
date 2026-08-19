import { motion, useDragControls, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useLang } from '../i18n/lang';
import { UI } from '../content/site';

export interface WindowChrome {
  id: string;
  title: string;
  z: number;
  dx: number;
  dy: number;
  /** Posição de repouso em coordenadas de mundo, em px. */
  restX: number;
  restY: number;
  width: number;
  focused: boolean;
  compact: boolean;
  /** X do ícone que abriu a janela, em px relativos à borda esquerda DELA. */
  originX: number | null;
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onMove: (dx: number, dy: number) => void;
  children: ReactNode;
}

export function Window(props: WindowChrome) {
  const { t } = useLang();
  const still = useReducedMotion();
  const dragControls = useDragControls();

  const chrome = (
    <>
      <header
        onPointerDown={(e) => {
          // Só o cabeçalho arrasta; conteúdo continua selecionável.
          if (!props.compact && !still) dragControls.start(e);
        }}
        className={`flex shrink-0 touch-none items-center gap-2 border-b border-hairline px-3 py-2.5 ${
          props.compact ? '' : 'cursor-grab active:cursor-grabbing'
        }`}
      >
        <button
          type="button"
          onClick={props.onClose}
          aria-label={`${t(UI.close)} ${props.title}`}
          className="h-3 w-3 rounded-full bg-danger/70 transition-colors hover:bg-danger"
        />
        <button
          type="button"
          onClick={props.onMinimize}
          aria-label={`${t(UI.minimize)} ${props.title}`}
          className="h-3 w-3 rounded-full bg-warn/70 transition-colors hover:bg-warn"
        />
        <span className="h-3 w-3 rounded-full bg-ink-700" />

        <span className="numeric ml-2 select-none text-xs text-muted">{props.title}</span>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-6 sm:p-7">
        {props.children}
      </div>
    </>
  );

  if (props.compact) {
    return (
      <motion.section
        aria-label={props.title}
        layout={!still}
        initial={still ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="flex max-h-[78vh] flex-col overflow-hidden rounded-2xl border border-hairline bg-surface shadow-2xl"
      >
        {chrome}
      </motion.section>
    );
  }

  return (
    <motion.section
      aria-label={props.title}
      onPointerDown={props.onFocus}
      drag={!still}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{ left: -320, right: 320, top: -120, bottom: 220 }}
      onDragEnd={(_, info) => props.onMove(info.offset.x, info.offset.y)}
      initial={still ? false : { opacity: 0, scale: 0.55, y: 90 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.6, y: 70 }}
      transition={{ type: 'spring', stiffness: 260, damping: 26, mass: 0.7 }}
      style={{
        zIndex: props.z,
        // Cresce a partir do ícone que a abriu, não do centro genérico.
        transformOrigin: props.originX == null ? 'bottom center' : `${props.originX}px bottom`,
        left: props.restX,
        top: props.restY,
        width: props.width,
        x: props.dx,
        y: props.dy,
      }}
      className={`pointer-events-auto absolute flex max-h-[70vh] flex-col overflow-hidden rounded-2xl border bg-surface/95 backdrop-blur-xl transition-shadow duration-300 ${
        props.focused
          ? 'border-accent/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.75)]'
          : 'border-hairline shadow-2xl'
      }`}
    >
      {chrome}
    </motion.section>
  );
}
