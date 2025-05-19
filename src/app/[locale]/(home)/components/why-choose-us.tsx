'use client';

import { type JSX, useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import {
  CupIcon,
  GoalIcon,
  PieIcon,
  PuzzleIcon,
} from '@/shared/ui/icons/orange';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const WhyChooseUs = () => {
  const t = useTranslations('home.whyChooseUs');

  const reasons = useMemo(
    () => [
      {
        icon: <GoalIcon />,
        title: t('reasons.deepIndustryKnowledge.title'),
        text: t('reasons.deepIndustryKnowledge.description'),
      },
      {
        icon: <PieIcon />,
        title: t('reasons.dataDrivenInsights.title'),
        text: t('reasons.dataDrivenInsights.description'),
      },
      {
        icon: <PuzzleIcon />,
        title: t('reasons.customizedSolutions.title'),
        text: t('reasons.customizedSolutions.description'),
      },
      {
        icon: <CupIcon />,
        title: t('reasons.provenTrackRecord.title'),
        text: t('reasons.provenTrackRecord.description'),
      },
    ],
    [t],
  );

  return (
    <section className="flex flex-col gap-24 px-[100px] pt-[100px] pb-[145px] max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col items-center justify-center gap-3 text-center">
        <Title as="h2">{t('title')}</Title>
        <Text color="foreground" className="w-1/2 max-md:w-full">
          {t('description')}
        </Text>
      </FadeIn>
      <FadeIn className="flex gap-12 max-xl:flex-col-reverse">
        <section className="flex flex-col gap-12">
          {reasons.map(r => (
            <Card key={r.title} {...r} />
          ))}
        </section>
        <Image
          className="rounded-[48px] object-cover max-xl:mx-auto"
          src="/images/home/why-choose.jpg"
          alt="woomen"
          height={596}
          width={596}
          unoptimized
        />
      </FadeIn>
    </section>
  );
};

const Card = ({
  icon,
  text,
  title,
}: {
  icon: JSX.Element;
  title: string;
  text: string;
}) => {
  return (
    <article className="flex items-center gap-6 max-sm:flex-col max-sm:items-start">
      <span className="flex-1">{icon}</span>
      <section className="flex flex-col gap-3">
        <Text size="xl" color="dark" weight={500}>
          {title}
        </Text>
        <Text>{text}</Text>
      </section>
    </article>
  );
};
