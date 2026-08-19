import type { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0)',
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

export const staggerItemFast: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

export const cardHover: Variants = {
  initial: { y: 0, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)' },
  hover: {
    y: -4,
    boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.04)',
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

export const buttonPress: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.97 },
};

export const buttonPressSubtle: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.01 },
  tap: { scale: 0.98 },
};

export const linkUnderline: Variants = {
  initial: { width: '0%', left: '50%' },
  hover: { width: '100%', left: '0%' },
};

export const floating: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const pulseGlow: Variants = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(14, 165, 233, 0.3)',
      '0 0 40px rgba(14, 165, 233, 0.5)',
      '0 0 20px rgba(14, 165, 233, 0.3)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const shimmer: Variants = {
  animate: {
    backgroundPosition: ['-200% 0', '200% 0'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] as const },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export const drawer: Variants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring', damping: 25, stiffness: 300 },
  },
  exit: {
    x: '100%',
    transition: { type: 'spring', damping: 25, stiffness: 300 },
  },
};

export const toast: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export const tabIndicator: Variants = {
  initial: { x: 0, width: 0 },
  animate: (custom: number) => ({
    x: custom,
    width: custom,
    transition: { type: 'spring', damping: 25, stiffness: 300 },
  }),
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] as const } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] as const } },
};

export const listItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: [0.23, 1, 0.32, 1] as const },
  }),
  exit: { opacity: 0, x: 20, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] as const } },
};

export const accordion: Variants = {
  closed: { height: 0, opacity: 0 },
  open: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] as const } },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -180, scale: 0.5 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export const flipIn: Variants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export const navLink: Variants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.3 } },
  hover: { x: 4, transition: { duration: 0.2 } },
  tap: { scale: 0.98 },
};

export const themeTransition: Variants = {
  initial: { opacity: 0, scale: 0.8, rotate: -90 },
  animate: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] as const } },
  exit: { opacity: 0, scale: 0.8, rotate: 90, transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] as const } },
};

export function createStaggerVariants(baseVariants: Variants, staggerDelay = 0.06): Variants {
  // `Variant` também pode ser um TargetResolver (função), que não tem
  // .transition — só dá para espalhar quando for objeto.
  const visible = typeof baseVariants.visible === 'object' ? baseVariants.visible : {};

  return {
    hidden: baseVariants.hidden,
    visible: {
      ...visible,
      transition: {
        ...visible.transition,
        staggerChildren: staggerDelay,
      },
    },
  };
}

export function createHoverVariants(
  base: Variants,
  hoverTransform: Record<string, number | string>,
  transition = { duration: 0.2, ease: [0.23, 1, 0.32, 1] as const }
): Variants {
  return {
    ...base,
    hover: {
      ...hoverTransform,
      transition,
    },
  };
}