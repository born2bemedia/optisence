'use client';

import type { ReactNode } from 'react';

import { FadeIn } from '@/shared/ui/components/fade-in';

export const PolicySection = ({ children }: { children: ReactNode }) => (
  <FadeIn className="flex flex-col gap-4">{children}</FadeIn>
);
