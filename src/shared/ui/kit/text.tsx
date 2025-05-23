'use client';

import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const textVariants = cva('transition duration-300 ease-in-out', {
  variants: {
    size: {
      sm: 'text-sm',
      base: 'text-base',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      dark: 'text-dark',
      light: 'text-white',
      ghost: 'text-[rgba(255,255,255,0.8)]',
      foreground: 'text-[#575551]',
      danger: 'text-[#FF4C4C]',
    },
    weight: {
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'base',
    color: 'secondary',
    weight: 400,
  },
});

export type TextVariants = VariantProps<typeof textVariants>;

export const Text = ({
  children,
  className,
  color,
  weight,
  size,
  hover = false,
  italic = false,
  underline = false,
  capitalize = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  italic?: boolean;
  underline?: boolean;
  capitalize?: boolean;
} & TextVariants) => {
  return (
    <p
      className={cn(
        textVariants({ color, weight, size }),
        hover && 'hover:text-primary cursor-pointer',
        italic && 'italic',
        underline && 'underline',
        capitalize && 'capitalize',
        className,
      )}
    >
      {children}
    </p>
  );
};
