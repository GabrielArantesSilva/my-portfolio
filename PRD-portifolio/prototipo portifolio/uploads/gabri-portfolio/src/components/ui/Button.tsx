'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { buttonPressSubtle } from '@/lib/animations';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const buttonPropsToOmit = [
  'onDrag', 'onDragStart', 'onDragEnd', 'onDragEnter', 'onDragLeave', 'onDragOver', 'onDrop',
  'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration',
  'onTransitionStart', 'onTransitionEnd', 'onTransitionCancel',
  'onTransitionRun',
] as const;
type OmittedProps = typeof buttonPropsToOmit[number];

type SafeButtonProps = Omit<ButtonProps, OmittedProps>;

export const Button = forwardRef<HTMLButtonElement, SafeButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      inline-flex items-center justify-center gap-2 font-medium rounded-xl
      transition-all duration-200 ease-out-strong
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2
      dark:focus-visible:ring-offset-surface-dark
      disabled:opacity-50 disabled:cursor-not-allowed
      ${fullWidth ? 'w-full' : ''}
    `;

    const variantClasses = {
      primary: 'bg-brand-600 text-white hover:bg-brand-500 active:scale-[0.97] shadow-elevation-2 hover:shadow-glow',
      secondary: 'glass text-gray-900 dark:text-gray-100 hover:bg-white/80 dark:hover:bg-surface-dark/90 active:scale-[0.97] border border-white/20 dark:border-white/10',
      ghost: 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-[0.97]',
    };

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        variants={buttonPressSubtle}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Carregando...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';