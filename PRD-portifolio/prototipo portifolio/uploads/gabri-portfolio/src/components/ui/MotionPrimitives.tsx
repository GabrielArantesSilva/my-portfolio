'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { forwardRef, type ElementType } from 'react';

type MotionComponentProps<T extends ElementType> = Omit<HTMLMotionProps<T>, 'as' | 'ref'> & {
  as?: T;
};

function createMotionComponent<T extends ElementType>(component: T) {
  return forwardRef<any, MotionComponentProps<T>>(
    ({ as: Component = component, children, ...props }, ref) => (
      <motion.custom ref={ref} as={Component} {...props}>{children}</motion.custom>
    )
  );
}

export const MotionDiv = createMotionComponent('div');
MotionDiv.displayName = 'MotionDiv';

export const MotionSection = createMotionComponent('section');
MotionSection.displayName = 'MotionSection';

export const MotionArticle = createMotionComponent('article');
MotionArticle.displayName = 'MotionArticle';

export const MotionSpan = createMotionComponent('span');
MotionSpan.displayName = 'MotionSpan';

export const MotionButton = createMotionComponent('button');
MotionButton.displayName = 'MotionButton';

export const MotionA = createMotionComponent('a');
MotionA.displayName = 'MotionA';