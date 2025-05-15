'use client';

import type { JSX } from 'react';
import Image from 'next/image';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { CubesIcon, MingcuteIcon, SpeakIcon } from '@/shared/ui/icons/orange';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const items = [
  {
    icon: MingcuteIcon,
    title: 'Embracing Emerging Technologies',
    text: 'From AI to machine learning, we integrate the latest technologies to create smart solutions that help you stay ahead of the competition.',
  },
  {
    icon: CubesIcon,
    title: 'Industry Expertise',
    text: 'Our team comprises seasoned professionals with deep experience across various sectors, providing you with insights that work.',
  },
  {
    icon: SpeakIcon,
    title: 'Continuous Innovation',
    text: 'We never stop learning. Our team constantly evolves, ensuring we remain on top of market trends and innovations.',
  },
];

export const OptisenceMindset = () => {
  return (
    <section className="flex flex-col gap-20 px-[100px] py-20 max-sm:gap-6 max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col gap-3 text-center max-sm:gap-6">
        <Title as="h2" weight={600}>
          <span className="text-primary">The Optisence Mindset:</span>
          <br /> Innovating with Expertise
        </Title>
        <Text className="mx-auto w-1/2 max-lg:w-full">
          Innovation isn’t just a buzzword at Optisence; it’s part of our DNA.
          We combine industry expertise with cutting-edge technologies to ensure
          our strategies are effective today and prepared for the future.
        </Text>
      </FadeIn>
      <FadeIn className="flex gap-12 max-lg:flex-col">
        <section className="flex w-1/2 flex-col gap-12 max-lg:w-full">
          {items.map(item => (
            <Card key={item.title} {...item} />
          ))}
        </section>
        <Image
          className="h-[360px] w-1/2 rounded-4xl object-cover max-lg:h-[200px] max-lg:w-full"
          src="/images/who-we-are/2.jpg"
          alt="who-we-are"
          width={596}
          height={318}
          unoptimized
        />
      </FadeIn>
    </section>
  );
};

const Card = ({
  icon: Icon,
  text,
  title,
}: {
  icon: () => JSX.Element;
  title: string;
  text: string;
}) => (
  <article className="flex items-center gap-6">
    <span className="shrink-0">
      <Icon />
    </span>
    <section className="flex flex-col gap-3">
      <Text size="xl" weight={600} color="dark">
        {title}
      </Text>
      <Text>{text}</Text>
    </section>
  </article>
);
