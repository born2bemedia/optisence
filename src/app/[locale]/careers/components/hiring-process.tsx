'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const HiringProcess = () => {
  const t = useTranslations('careers.hiringProcess');

  const steps = [
    {
      title: t('steps.0.title'),
      text: t('steps.0.description'),
    },
    {
      title: t('steps.1.title'),
      text: t('steps.1.description'),
    },
    {
      title: t('steps.2.title'),
      text: t('steps.2.description'),
    },
    {
      title: t('steps.3.title'),
      text: t('steps.3.description'),
    },
    {
      title: t('steps.4.title'),
      text: t('steps.4.description'),
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
      <FadeIn className="flex gap-12 max-md:flex-col max-md:gap-8">
        <section className="flex w-1/2 flex-col gap-5 max-md:w-full">
          <section className="flex w-[70%] flex-col gap-8 max-md:w-full">
            {steps.map((item, i) => (
              <Card key={item.title} number={++i} {...item} />
            ))}
          </section>
          <Text>
            <span className="text-dark font-medium">{t('deadline.title')}</span>{' '}
            {t('deadline.description')}
          </Text>
        </section>
        <section className="flex w-1/2 flex-col gap-5 max-md:w-full">
          <Image
            className="h-[181px] w-full rounded-4xl object-cover"
            src="/images/careers/1.jpg"
            alt="1"
            width={500}
            height={181}
            unoptimized
          />
          <Image
            className="h-[181px] w-full rounded-4xl object-cover"
            src="/images/careers/2.jpg"
            alt="2"
            width={500}
            height={181}
            unoptimized
          />
        </section>
      </FadeIn>
    </section>
  );
};

const Card = ({
  title,
  text,
  number,
}: {
  title: string;
  text: string;
  number: number;
}) => (
  <article className="flex items-center gap-6">
    <span className="text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgb(255_87_45_/_15%)] text-2xl font-medium">
      0{number}
    </span>
    <section className="flex flex-col gap-3">
      <Text color="dark" size="xl" weight={600}>
        {title}
      </Text>
      <Text>{text}</Text>
    </section>
  </article>
);
