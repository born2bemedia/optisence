'use client';

import { cn } from '@/shared/lib/utils';

export const ProgressBar = ({ active }: { active?: boolean }) => (
  <span
    className={cn(
      'h-1.5 w-full rounded-xl',
      active ? 'bg-[#FF572D]' : 'bg-[#F3F3F3]',
    )}
  />
);
