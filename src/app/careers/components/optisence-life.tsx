'use client';

import Image from 'next/image';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OptisenceLife = () => {
  return (
    <section className="flex flex-col gap-20 px-[100px] py-[80px] max-md:gap-8 max-md:px-4 max-md:py-8">
      <FadeIn className="text-center">
        <Title as="h2" size="xl" weight={600}>
          Life at Optisence
        </Title>
      </FadeIn>
      <FadeIn className="flex gap-5 max-md:flex-col">
        <Card
          title="Dumisani, Consultant"
          text="“You’re not boxed in. I’ve pitched to C-level execs, redesigned a GTM play, and led a sprint — all in my first year.”"
        />
        <Image
          className="h-[174px] w-full rounded-4xl object-cover max-2xl:h-[190px] max-md:h-[172px]"
          src="/images/careers/3.jpg"
          alt="3"
          width={500}
          height={174}
          unoptimized
        />
        <Card
          title="Anika, Strategy Analyst"
          text="“Optisence gave me the space to grow and the guidance to thrive. It’s rare to find that balance.”"
        />
      </FadeIn>
    </section>
  );
};

const Card = ({ title, text }: { title: string; text: string }) => (
  <article className="bg-primary flex w-full flex-col gap-5 rounded-4xl p-8">
    <Text color="light" size="2xl" weight={600}>
      {title}
    </Text>
    <Text color="light">{text}</Text>
  </article>
);
