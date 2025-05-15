'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const c = [
  {
    title: 'Personalized Service',
    text: 'Every client is unique. Our solutions are customized to fit your company’s culture, goals, and challenges.',
  },
  {
    title: 'Innovative Thinking',
    text: 'We combine cutting-edge technology with deep industry knowledge to create solutions that are not only effective but also forward-thinking.',
  },
  {
    title: 'Results-Oriented',
    text: 'We don’t just talk strategy; we implement and track results, ensuring each decision drives measurable success.',
  },
  {
    title: 'Collaborative Approach',
    text: 'We believe in building strong partnerships with our clients, working hand-in-hand with you to implement strategies and ensure continuous improvement.',
  },
  {
    title: 'Agility and Flexibility',
    text: 'The business landscape is constantly changing. Our team is nimble and adaptable, responding quickly to new opportunities and challenges to keep your business ahead of the curve.',
  },
  {
    title: 'Sustainable Impact',
    text: 'We are focused on delivering solutions that create long-term value for your business, ensuring that the impact of our work is felt not just today but well into the future.',
  },
];

export const WhatSetsUs = () => {
  const t = useTranslations('who-we-are.whatSetsUsApart');

  const cards = useMemo(
    () => [
      {
        title: t('items.0.title'),
        text: t('items.0.text'),
      },
      {
        title: t('items.1.title'),
        text: t('items.1.text'),
      },
      {
        title: t('items.2.title'),
        text: t('items.2.text'),
      },
      {
        title: t('items.3.title'),
        text: t('items.3.text'),
      },
      {
        title: t('items.4.title'),
        text: t('items.4.text'),
      },
      {
        title: t('items.5.title'),
        text: t('items.5.text'),
      },
    ],
    [t],
  );

  return (
    <section className="flex flex-col gap-20 px-[100px] pt-20 pb-[84px] max-sm:gap-8 max-sm:px-4 max-sm:py-8">
      <FadeIn className="text-center">
        <Title as="h2" weight={600} className="leading-[120%]">
          <span className="text-primary">{t('title.first')}</span>
          <br /> {t('title.second')}
        </Title>
      </FadeIn>
      <FadeIn className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {cards.map((item, i) => (
          <Card key={item.title} number={++i} {...item} />
        ))}
      </FadeIn>
    </section>
  );
};

const Card = ({
  title,
  number,
  text,
}: {
  title: string;
  number: number;
  text: string;
}) => (
  <article className="group hover:bg-primary flex flex-col gap-8 rounded-4xl bg-[#F5F5F5] p-8 transition duration-300 ease-in-out">
    <section className="flex items-center gap-3">
      <span className="text-primary flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(255_87_45_/_0.15)] text-2xl transition duration-300 ease-in-out group-hover:bg-white">
        {number}
      </span>
      <Text
        size="2xl"
        color="dark"
        weight={600}
        className="transition duration-300 ease-in-out group-hover:text-white"
      >
        {title}
      </Text>
    </section>
    <section className="mt-auto">
      <Text className="transition duration-300 ease-in-out group-hover:text-white">
        {text}
      </Text>
    </section>
  </article>
);
