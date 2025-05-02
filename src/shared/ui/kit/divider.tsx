'use client';

import { cn } from '@/shared/lib/utils';

export const Divider = ({
  className,
  color = 'white',
}: {
  className?: string;
  color?: 'white' | 'dark';
}) => (
  <span
    className={cn(
      'flex h-[1px] w-full',
      color === 'white' ? 'bg-[#F2F2F2]' : 'bg-[rgba(255,255,255,0.05)]',
      className,
    )}
  />
);
