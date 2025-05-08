'use client';

import type { InputHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/kit/text';

const textFieldVariants = cva(
  'px-4 py-3 text-base font-normal text-[#575551] transition-all duration-300 focus:outline-none',
  {
    variants: {
      variant: {
        gray: 'bg-[#F3F3F3]',
        white: 'bg-white',
      },
      rounded: {
        sm: 'rounded-2xl',
        full: 'rounded-full',
      },
      intent: {
        primary: '',
        danger: 'shadow-[0_0_0_1px_#FF4C4C]',
      },
    },
    defaultVariants: {
      variant: 'gray',
      rounded: 'sm',
      intent: 'primary',
    },
  },
);

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;

export function TextField({
  className,
  label,
  hint,
  intent,
  variant,
  rounded,
  ...args
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
} & TextFieldVariants) {
  return (
    <label className="relative flex w-full flex-col gap-1.5">
      <div className="flex items-center gap-1">
        <Text color="dark">{label}</Text>
        {hint && (
          <Text color="danger" italic>
            {hint}
          </Text>
        )}
      </div>
      <input
        className={cn(
          textFieldVariants({ rounded, variant, intent }),
          className,
        )}
        {...args}
      />
    </label>
  );
}
