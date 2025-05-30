'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OptisenceLife = () => {
  const t = useTranslations('careers.optisenceLife');

  return (
    <section className="flex flex-col gap-20 px-[100px] py-[80px] max-md:gap-8 max-md:px-4 max-md:py-8">
      <FadeIn className="text-center">
        <Title as="h2" size="xl" weight={600}>
          {t('title')}
        </Title>
      </FadeIn>
      <FadeIn className="flex gap-5 max-md:flex-col">
        <Card title={t('cards.0.title')} text={t('cards.0.description')} />
        <Image
          className="h-[174px] w-full rounded-4xl object-cover max-2xl:h-[190px] max-md:h-[172px]"
          src="/images/careers/3.jpg"
          alt="3"
          width={500}
          height={174}
          unoptimized
        />
        <Card title={t('cards.1.title')} text={t('cards.1.description')} />
      </FadeIn>
    </section>
  );
};

const Card = ({ title, text }: { title: string; text: string }) => (
  <article className="bg-primary flex w-full flex-col gap-5 rounded-4xl p-8">
    <Text color="light" size="2xl" weight={600}>
      {title}
    </Text>
    <Text color="light">{text}</Text>
  </article>
);
