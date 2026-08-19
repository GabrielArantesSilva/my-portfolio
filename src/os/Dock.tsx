import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { MotionValue } from 'framer-motion';
import { useLang } from '../i18n/lang';
import { LANG } from '../i18n/lang.const';
import type { Txt } from '../content/types';

export interface DockItem {
  id: string;
  label: Txt;
  glyph: string;
}

const MAG_RANGE = 110;
const MAG_PEAK = 1.42;

function DockButton({
  item,
  active,
  pointerX,
  still,
  onActivate,
}: {
  item: DockItem;
  active: boolean;
  pointerX: MotionValue<number>;
  still: boolean;
  onActivate: (id: string, centerX: number) => void;
}) {
  const { t } = useLang();
  const ref = useRef<HTMLButtonElement>(null);

  const distance = useTransform(pointerX, (x) => {
    const box = ref.current?.getBoundingClientRect();
    if (!box) return MAG_RANGE;
    return Math.abs(x - (box.left + box.width / 2));
  });

  const raw = useTransform(distance, [0, MAG_RANGE], [MAG_PEAK, 1], { clamp: true });
  const scale = useSpring(raw, { stiffness: 320, damping: 24, mass: 0.4 });

  const centerX = () => {
    const box = ref.current?.getBoundingClientRect();
    return box ? box.left + box.width / 2 : window.innerWidth / 2;
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={() => onActivate(item.id, centerX())}
      aria-pressed={active}
      style={still ? undefined : { scale }}
      className={`group relative flex flex-1 origin-bottom flex-col items-center gap-1 rounded-xl px-3 py-2 transition-colors duration-200 sm:flex-none sm:flex-row sm:gap-2 sm:rounded-full sm:px-4 ${
        active ? 'bg-accent/12 text-heading' : 'text-muted hover:bg-ink-850 hover:text-body'
      }`}
    >
      <span aria-hidden className="text-base leading-none sm:text-sm">
        {item.glyph}
      </span>
      <span className="numeric text-[0.65rem] sm:text-xs">{t(item.label)}</span>
      <span
        aria-hidden
        className={`absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-opacity duration-200 sm:-bottom-1 ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </motion.button>
  );
}

export function Dock({
  items,
  isOpen,
  isMinimized,
  onToggle,
}: {
  items: readonly DockItem[];
  isOpen: (id: string) => boolean;
  isMinimized: (id: string) => boolean;
  onToggle: (id: string, centerX: number) => void;
}) {
  const { lang, setLang } = useLang();
  const still = useReducedMotion() ?? false;
  const pointerX = useMotionValue(Number.POSITIVE_INFINITY);

  return (
    <motion.nav
      aria-label="Dock"
      initial={still ? false : { y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={(e) => pointerX.set(e.clientX)}
      onPointerLeave={() => pointerX.set(Number.POSITIVE_INFINITY)}
      className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-3 sm:pb-5"
    >
      <div className="glass flex w-full max-w-xl items-end gap-1 rounded-2xl p-1.5 sm:w-auto sm:rounded-full sm:p-2">
        {items.map((item) => (
          <DockButton
            key={item.id}
            item={item}
            active={isOpen(item.id) && !isMinimized(item.id)}
            pointerX={pointerX}
            still={still}
            onActivate={onToggle}
          />
        ))}

        <span aria-hidden className="mx-1 hidden h-6 w-px self-center bg-hairline sm:block" />

        <div
          className="flex items-center self-center rounded-full border border-hairline p-0.5"
          role="group"
          aria-label="Idioma"
        >
          {[LANG.pt, LANG.en].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setLang(option)}
              aria-pressed={lang === option}
              className={`numeric rounded-full px-2 py-1 text-[0.65rem] uppercase transition-colors duration-200 ${
                lang === option ? 'bg-accent font-semibold text-on-accent' : 'text-muted hover:text-body'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
