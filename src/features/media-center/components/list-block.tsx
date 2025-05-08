'use client';

import type { ReactNode } from 'react';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { List } from '@/shared/ui/components/list';
import { Text } from '@/shared/ui/kit/text';

export const ListBlock = ({
  title,
  listTitle,
  children,
  listValues,
  summary,
}: {
  title: string;
  children: ReactNode;
  listTitle: string;
  listValues: string[];
  summary: ReactNode;
}) => {
  return (
    <FadeIn className="flex items-center gap-12 max-sm:flex-col max-sm:items-start max-sm:gap-5">
      <section className="flex w-1/2 flex-col gap-3 max-sm:w-full">
        <Text size="3xl" color="dark" weight={600} className="mb-2">
          {title}
        </Text>
        {children}
      </section>
      <section className="flex w-1/2 flex-col gap-3 rounded-4xl bg-[#F5F5F5] p-5 max-sm:w-full">
        <Text color="primary" weight={600}>
          {listTitle}
        </Text>
        <List values={listValues} noHighlight />
        {summary}
      </section>
    </FadeIn>
  );
};
