'use client';

import type { TextareaHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/kit/text';

const textAreaVariants = cva(
  'px-4 py-3 text-base resize-none h-[83px] font-normal text-[#575551] transition-all duration-300 focus:outline-none',
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

export type TextAreaVariants = VariantProps<typeof textAreaVariants>;

export function TextArea({
  className,
  label,
  hint,
  intent,
  variant,
  rounded,
  hintPosition = 'top',
  ...args
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  hint?: string;
  hintPosition?: 'top' | 'bottom';
} & TextAreaVariants) {
  return (
    <label className="relative flex w-full flex-col gap-1.5">
      <div className="flex items-center gap-1">
        <Text color="dark">{label}</Text>
        {hint && hintPosition === 'top' && (
          <Text color="danger" italic>
            {hint}
          </Text>
        )}
      </div>
      <textarea
        className={cn(
          textAreaVariants({ rounded, variant, intent }),
          className,
        )}
        {...args}
      />
      {hint && hintPosition === 'bottom' && (
        <span className="absolute bottom-[-18px] left-0">
          <Text color="danger" size="sm" italic>
            {hint}
          </Text>
        </span>
      )}
    </label>
  );
}
