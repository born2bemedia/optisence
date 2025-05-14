'use client';

import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const btnVariants = cva(
  'rounded-full flex items-center gap-3 text-base cursor-pointer transition duration-300 ease-in-out font-semibold',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white border border-primary hover:bg-[#C74524] hover:border-[#C74524]',
        outline:
          'bg-primary text-primary hover:text-white border border-primary bg-transparent hover:bg-[#C74524] hover:border-[#C74524]',
        faded:
          'bg-[#F5F5F5] text-[#575551] hover:bg-[#F5F5F5]/10 border border-[#F5F5F5]',
      },
      size: {
        sm: 'py-3 px-6',
        md: 'py-4 px-6',
      },
      textAlign: {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
      textAlign: 'left',
    },
  },
);

export type ButtonVariants = VariantProps<typeof btnVariants>;

export const Button = ({
  children,
  className,
  size,
  variant,
  textAlign,
  onClick,
  disabled,
  fullWidth = false,
  type = 'button',
}: {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
} & ButtonVariants) => {
  return (
    <button
      className={cn(
        btnVariants({ size, variant, textAlign }),
        fullWidth ? 'w-full' : 'w-max',
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
