'use client';

import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const WorkWithUs = () => {
  const t = useTranslations('careers.workWithUs');

  const cards = [
    {
      title: t('cards.0.title'),
      desc: t('cards.0.description'),
    },
    {
      title: t('cards.1.title'),
      desc: t('cards.1.description'),
    },
    {
      title: t('cards.2.title'),
      desc: t('cards.2.description'),
    },
    {
      title: t('cards.3.title'),
      desc: t('cards.3.description'),
    },
  ];

  return (
    <section className="flex flex-col gap-20 px-[100px] py-[80px] max-md:gap-8 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col gap-3 text-center max-md:gap-6">
        <Title as="h2" size="xl" weight={600}>
          {t('title')}
        </Title>
        <Text>{t('description')}</Text>
      </FadeIn>
      <FadeIn className="flex gap-5 max-md:flex-col">
        {cards.map(card => (
          <Card key={card.title} {...card} />
        ))}
      </FadeIn>
    </section>
  );
};

const Card = ({ title, desc }: { title: string; desc: string }) => (
  <article className="group hover:bg-primary flex h-auto w-full flex-col gap-5 rounded-4xl bg-[#F5F5F5] p-8 transition duration-300 ease-in-out">
    <Text
      color="dark"
      size="3xl"
      weight={600}
      className="group-hover:text-white"
    >
      {title}
    </Text>
    <Text className="mt-auto group-hover:text-white">{desc}</Text>
  </article>
);
