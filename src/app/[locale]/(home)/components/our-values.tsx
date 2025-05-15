'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { useWindow } from '@/shared/lib/hooks';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OurValues = () => {
  const { width } = useWindow();
  const t = useTranslations('home.ourValues');

  const cards = [
    {
      title: t('items.1.title'),
      text: t('items.1.description'),
      number: 1,
    },
    {
      title: t('items.4.title'),
      text: t('items.4.description'),
      number: 4,
    },
    {
      title: t('items.2.title'),
      text: t('items.2.description'),
      number: 2,
    },
    {
      title: t('items.5.title'),
      text: t('items.5.description'),
      number: 5,
    },
    {
      title: t('items.3.title'),
      text: t('items.3.description'),
      number: 3,
    },
    {
      title: t('items.6.title'),
      text: t('items.6.description'),
      number: 6,
    },
  ];

  const orderedCards = cards.sort((a, b) => a.number - b.number);

  return (
    <section className="flex flex-col gap-16 px-[100px] pt-[100px] pb-[145px] max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col items-center gap-3 text-center">
        <Title as="h2">{t('title')}</Title>
        <Text className="w-[50%] max-sm:w-full">{t('description')}</Text>
      </FadeIn>
      {width > 768 ? (
        <section className="flex gap-8">
          <FadeIn className="flex flex-col gap-8">
            {[cards[0], cards[3]].map(card => (
              <Card key={card.title} {...card} />
            ))}
          </FadeIn>
          <FadeIn className="mt-[30px] flex flex-col gap-8 max-sm:mt-0">
            {[cards[1], cards[4]].map(card => (
              <Card key={card.title} {...card} />
            ))}
          </FadeIn>
          <FadeIn className="mt-[60px] flex flex-col gap-8 max-sm:mt-0">
            {[cards[2], cards[5]].map(card => (
              <Card key={card.title} {...card} />
            ))}
          </FadeIn>
        </section>
      ) : (
        <section className="flex flex-col gap-8">
          {orderedCards.map(card => (
            <Card key={card.title} {...card} />
          ))}
        </section>
      )}
      <Link href="/who-we-are">
        <Button className="mx-auto">
          More About Optisence Team <ArrowRightIcon />
        </Button>
      </Link>
    </section>
  );
};

const Card = ({
  number,
  text,
  title,
}: {
  title: string;
  text: string;
  number: number;
}) => {
  return (
    <article className="flex w-full flex-col gap-6 rounded-4xl bg-[#F5F5F5] p-8">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,87,45,0.15)] text-2xl text-[#FF572D]">
        0{number}
      </span>
      <Text color="dark" size="2xl" weight={500}>
        {title}
      </Text>
      <Text>{text}</Text>
    </article>
  );
};
