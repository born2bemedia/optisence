'use client';

import type { ReactNode } from 'react';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';

export const Summary = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <FadeIn className="flex flex-col gap-8 rounded-4xl bg-[#F5F5F5] p-8">
    <Text color="dark" size="3xl" weight={600}>
      {title}
    </Text>
    <section className="flex items-start gap-48 max-sm:flex-col max-sm:gap-4">
      {children}
    </section>
  </FadeIn>
);
