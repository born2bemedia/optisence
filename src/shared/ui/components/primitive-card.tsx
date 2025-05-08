'use client';

import type { JSX, ReactNode } from 'react';

import { Text } from '@/shared/ui/kit/text';

export const PrimitiveCard = ({
  children,
  title,
  icon,
}: {
  children: ReactNode;
  title: string;
  icon: JSX.Element;
}) => (
  <article className="flex w-full flex-col gap-5 rounded-4xl bg-[#F5F5F5] p-8">
    <section className="flex items-center gap-4">
      {icon}
      <Text size="3xl" color="dark" weight={500}>
        {title}
      </Text>
    </section>
    <section>{children}</section>
  </article>
);
