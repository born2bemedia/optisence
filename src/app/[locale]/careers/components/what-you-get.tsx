'use client';

import type { JSX } from 'react';
import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import {
  CaseIcon,
  HardDrivesIcon,
  HomeWorkIcon,
  ProgressionIcon,
  StopIcon,
} from '@/shared/ui/icons/orange';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const WhatYouGet = () => {
  const t = useTranslations('careers.whatYouGet');

  const items = [
    {
      title: t('items.0.title'),
      description: t('items.0.description'),
      icon: HardDrivesIcon,
    },
    {
      title: t('items.1.title'),
      description: t('items.1.description'),
      icon: StopIcon,
    },
    {
      title: t('items.2.title'),
      description: t('items.2.description'),
      icon: CaseIcon,
    },
    {
      title: t('items.3.title'),
      description: t('items.3.description'),
      icon: HomeWorkIcon,
    },
    {
      title: t('items.4.title'),
      description: t('items.4.description'),
      icon: ProgressionIcon,
    },
  ];

  return (
    <section className="flex flex-col gap-20 px-[100px] pt-[80px] pb-[100px] max-md:gap-8 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col gap-3 text-center max-md:gap-6">
        <Title as="h2" size="xl" weight={600}>
          {t('title')}
        </Title>
      </FadeIn>
      <section className="flex flex-col gap-5">
        <FadeIn className="flex gap-5 max-md:flex-col">
          {items.slice(0, 3).map(item => (
            <Card key={item.title} {...item} />
          ))}
        </FadeIn>
        <FadeIn className="flex gap-5 max-md:flex-col">
          {items.slice(3, 5).map(item => (
            <Card key={item.title} {...item} />
          ))}
        </FadeIn>
      </section>
    </section>
  );
};

const Card = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: () => JSX.Element;
}) => (
  <article className="flex w-full flex-col gap-5 rounded-4xl bg-[#F5F5F5] p-8">
    <section className="flex items-center gap-3">
      <Icon />
      <Text color="dark" size="2xl" weight={600}>
        {title}
      </Text>
    </section>
    <Text className="mt-auto">{description}</Text>
  </article>
);
