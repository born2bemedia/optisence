'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OptisenceEcosystem = () => {
  const t = useTranslations('who-we-are.optisenceEcosystem');

  return (
    <section className="flex flex-col gap-20 px-[100px] py-20 max-sm:gap-6 max-sm:px-4 max-sm:py-8">
      <FadeIn className="text-center">
        <Title as="h2" weight={600} className="leading-[120%]">
          <span className="text-primary">{t('title.first')}</span>
          <br /> {t('title.second')}
        </Title>
      </FadeIn>
      <FadeIn className="flex flex-col gap-5">
        <section className="flex gap-5 max-xl:flex-col">
          <Card
            title={t('items.0.title')}
            text={t('items.0.text')}
            className="w-[30%] max-lg:w-full"
          />
          <Image
            className="h-[191px] w-[60%] rounded-4xl object-cover max-xl:h-[300px] max-lg:h-[191px] max-lg:w-full"
            src="/images/who-we-are/3.jpg"
            alt="who-we-are"
            width={596}
            height={191}
            unoptimized
          />
          <Card
            title={t('items.1.title')}
            text={t('items.1.text')}
            className="w-[30%] max-lg:w-full"
          />
        </section>
        <section className="flex gap-5 max-xl:flex-col">
          <Card title={t('items.2.title')} text={t('items.2.text')} />
          <Card title={t('items.3.title')} text={t('items.3.text')} />
        </section>
      </FadeIn>
    </section>
  );
};

const Card = ({
  text,
  title,
  className,
}: {
  title: string;
  text: string;
  className?: string;
}) => (
  <article
    className={cn(
      'flex flex-col gap-5 rounded-4xl bg-[#F5F5F5] p-8',
      className,
    )}
  >
    <Text size="2xl" weight={600} color="dark">
      {title}
    </Text>
    <Text>{text}</Text>
  </article>
);
