'use client';

import type { ReactNode } from 'react';

import { FadeIn } from '@/shared/ui/components/fade-in';

export const ArticleSectionLayout = ({ children }: { children: ReactNode }) => (
  <FadeIn className="flex flex-col gap-8">{children}</FadeIn>
);
