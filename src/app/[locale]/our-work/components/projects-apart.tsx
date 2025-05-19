'use client';

import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ProjectsApart = () => {
  const t = useTranslations('our-work.projectsApart');

  const items = [
    {
      title: t('items.0.title'),
      description: t('items.0.description'),
    },
    {
      title: t('items.1.title'),
      description: t('items.1.description'),
    },
    {
      title: t('items.2.title'),
      description: t('items.2.description'),
    },
  ];

  return (
    <section className="flex flex-col gap-20 px-[100px] py-[80px] max-md:gap-8 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col gap-3 text-center">
        <Title as="h2" size="xl" weight={600}>
          {t('title')}
        </Title>
        <Text>
          {t('description.0')}
          <br />
          {t('description.1')}
        </Text>
      </FadeIn>
      <FadeIn className="flex items-center gap-5 max-md:flex-col max-md:items-start">
        {items.map((item, i) => (
          <Card key={item.title} number={++i} {...item} />
        ))}
      </FadeIn>
    </section>
  );
};

const Card = ({
  description,
  number,
  title,
}: {
  number: number;
  title: string;
  description: string;
}) => (
  <article className="flex w-full items-center gap-6">
    <span className="text-primary bg-primary/15 flex h-12 w-12 shrink-0 items-center justify-center rounded-4xl text-2xl">
      {number}
    </span>
    <Text>
      <span className="text-dark font-medium">{title}</span> — {description}
    </Text>
  </article>
);
