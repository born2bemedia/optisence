'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ReasonsToChoose = ({
  title,
  reasons,
  description,
  imgUrl,
  reversed = false,
}: {
  title: ReactNode;
  reasons: {
    title: string;
    text: string;
  }[];
  imgUrl: string;
  description?: string;
  reversed?: boolean;
}) => {
  return (
    <section className="flex flex-col gap-20 px-[100px] py-20 max-sm:gap-6 max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col gap-3 text-center">
        <Title as="h2" size="xl" weight={600} className="leading-[120%]">
          {title}
        </Title>
        {description && <Text>{description}</Text>}
      </FadeIn>
      <FadeIn
        className={cn(
          'flex flex-col gap-5',
          reversed ? 'flex-col-reverse' : 'flex-col',
        )}
      >
        <section className="flex gap-5 max-xl:flex-col">
          <Card {...reasons[0]} className="w-[30%] max-lg:w-full" />
          <Image
            className="h-[191px] w-[60%] rounded-4xl object-cover max-2xl:h-[220px] max-xl:h-[300px] max-lg:h-[191px] max-lg:w-full"
            src={imgUrl}
            alt="why choose"
            width={596}
            height={191}
            unoptimized
          />
          <Card {...reasons[1]} className="w-[30%] max-lg:w-full" />
        </section>
        <section className="flex gap-5 max-xl:flex-col">
          <Card {...reasons[2]} className="w-[30%] max-lg:w-full" />
          <Card {...reasons[3]} className="w-[30%] max-lg:w-full" />
          <Card {...reasons[4]} className="w-[30%] max-lg:w-full" />
        </section>
      </FadeIn>
    </section>
  );
};

const Card = ({
  text,
  title,
  className,
}: {
  title: string;
  text: string;
  className?: string;
}) => (
  <article
    className={cn(
      'flex flex-col gap-5 rounded-4xl bg-[#F5F5F5] p-8',
      className,
    )}
  >
    <Text size="2xl" weight={600} color="dark">
      {title}
    </Text>
    <Text>{text}</Text>
  </article>
);
