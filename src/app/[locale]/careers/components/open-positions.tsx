'use client';

import { useTranslations } from 'next-intl';

import { JobList } from '@/features/careers/components';
import type { JobPosition } from '@/features/careers/lib/types';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OpenPositions = () => {
  const t = useTranslations('careers.positions');

  const jobs: JobPosition[] = [
    {
      name: t('jobs.0.title'),
      type: 'full-time',
      description: {
        text: [
          t('jobs.0.description.text.0'),
          t('jobs.0.description.text.1'),
          t('jobs.0.description.text.2'),
        ],
        bold: [
          {
            text: t('jobs.0.description.bold.0.text'),
            paragraph: Number(t('jobs.0.description.bold.0.paragraph')),
          },
          {
            text: t('jobs.0.description.bold.1.text'),
            paragraph: Number(t('jobs.0.description.bold.1.paragraph')),
          },
        ],
      },
      requirements: [
        t('jobs.0.requirements.0'),
        t('jobs.0.requirements.1'),
        t('jobs.0.requirements.2'),
        t('jobs.0.requirements.3'),
        t('jobs.0.requirements.4'),
        t('jobs.0.requirements.4'),
      ],
      responsibilities: [
        t('jobs.0.responsibilities.0'),
        t('jobs.0.responsibilities.1'),
        t('jobs.0.responsibilities.2'),
        t('jobs.0.responsibilities.3'),
        t('jobs.0.responsibilities.4'),
        t('jobs.0.responsibilities.5'),
      ],
      summary: {
        text: t('jobs.0.summary.text'),
        bold: [t('jobs.0.summary.bold.0')],
      },
    },
    {
      name: t('jobs.1.title'),
      type: 'full-time',
      description: {
        text: [
          t('jobs.1.description.text.0'),
          t('jobs.1.description.text.1'),
          t('jobs.1.description.text.2'),
        ],
        bold: [
          {
            text: t('jobs.1.description.bold.0.text'),
            paragraph: Number(t('jobs.1.description.bold.0.paragraph')),
          },
        ],
      },
      requirements: [
        t('jobs.1.requirements.0'),
        t('jobs.1.requirements.1'),
        t('jobs.1.requirements.2'),
        t('jobs.1.requirements.3'),
        t('jobs.1.requirements.4'),
        t('jobs.1.requirements.5'),
      ],
      responsibilities: [
        t('jobs.1.responsibilities.0'),
        t('jobs.1.responsibilities.1'),
        t('jobs.1.responsibilities.2'),
        t('jobs.1.responsibilities.3'),
        t('jobs.1.responsibilities.4'),
      ],
      summary: {
        text: t('jobs.1.summary.text'),
        bold: [t('jobs.1.summary.bold.0')],
      },
    },
    {
      name: t('jobs.2.title'),
      type: 'full-time',
      description: {
        text: [
          t('jobs.2.description.text.0'),
          t('jobs.2.description.text.1'),
          t('jobs.2.description.text.2'),
        ],
        bold: [
          {
            text: t('jobs.2.description.bold.0.text'),
            paragraph: Number(t('jobs.2.description.bold.0.paragraph')),
          },
        ],
      },
      requirements: [
        t('jobs.2.requirements.0'),
        t('jobs.2.requirements.1'),
        t('jobs.2.requirements.2'),
        t('jobs.2.requirements.3'),
        t('jobs.2.requirements.4'),
      ],
      responsibilities: [
        t('jobs.2.responsibilities.0'),
        t('jobs.2.responsibilities.1'),
        t('jobs.2.responsibilities.2'),
        t('jobs.2.responsibilities.3'),
        t('jobs.2.responsibilities.4'),
        t('jobs.2.responsibilities.5'),
      ],
      summary: {
        text: t('jobs.2.summary.text'),
        bold: [t('jobs.2.summary.bold.0'), t('jobs.2.summary.bold.1')],
      },
    },
  ];

  return (
    <section className="flex flex-col gap-[60px] px-[100px] py-[80px] max-md:gap-8 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col gap-3 text-center max-md:gap-6">
        <Title as="h2" size="xl" weight={600}>
          {t('title')}
        </Title>
        <Text className="mx-auto w-1/2 text-center max-md:w-full">
          {t('description')}
        </Text>
      </FadeIn>
      <FadeIn className="rounded-4xl bg-[#F5F5F5] p-8 max-md:bg-white max-md:p-0">
        <JobList jobs={jobs} />
      </FadeIn>
    </section>
  );
};
