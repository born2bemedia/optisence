'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

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
