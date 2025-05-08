'use client';

import type { ElementType, JSX, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const titleVariants = cva('transition duration-300 ease-in-out leading-[1.2]', {
  variants: {
    size: {
      md: 'text-[28px]',
      lg: 'text-[32px]',
      xl: 'text-[52px] max-sm:text-[32px]',
      '2xl': 'text-[64px] max-sm:text-[32px]',
    },
    color: {
      primary: 'text-primary',
      dark: 'text-dark',
      light: 'text-white',
    },
    weight: {
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
    },
  },
  defaultVariants: {
    size: '2xl',
    color: 'dark',
    weight: 500,
  },
});

export type TitleVariants = VariantProps<typeof titleVariants>;

export const Title = ({
  children,
  className,
  color,
  weight,
  size,
  hover = false,
  as = 'h1',
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: ElementType;
} & TitleVariants) => {
  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        titleVariants({ color, weight, size }),
        hover && 'hover:text-primary cursor-pointer',
        className,
      )}
    >
      {children}
    </Tag>
  );
};
