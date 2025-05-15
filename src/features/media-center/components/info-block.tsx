'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils';
import { List } from '@/shared/ui/components/list';
import { Text } from '@/shared/ui/kit/text';

export const InfoBlock = ({
  children,
  title,
  summary,
  values,
  additionalText,
  highlight = false,
  reverse = false,
  titleColor = 'primary',
}: {
  children: ReactNode;
  title: ReactNode;
  summary: ReactNode;
  highlight?: boolean;
  values: string[];
  additionalText?: ReactNode;
  reverse?: boolean;
  titleColor?: 'primary' | 'secondary';
}) => (
  <section
    className={cn(
      'flex items-center gap-12 max-sm:flex-col max-sm:items-start max-sm:gap-5',
      reverse && 'flex-row-reverse',
    )}
  >
    <section className="w-1/2 max-sm:w-full">{children}</section>
    <section className="flex w-1/2 flex-col gap-3 max-sm:w-full">
      {additionalText}
      <section className="flex flex-col gap-3 rounded-4xl bg-[#F5F5F5] p-5 max-sm:w-full">
        <Text color={titleColor}>{title}</Text>
        <List values={values} noHighlight={!highlight} />
        {summary}
      </section>
    </section>
  </section>
);
