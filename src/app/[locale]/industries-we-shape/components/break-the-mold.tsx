'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const BreakTheMold = () => {
  const t = useTranslations('industries-we-shape.breakTheMold');

  return (
    <section className="flex flex-col gap-20 px-[100px] pt-[80px] pb-[100px] max-md:gap-6 max-md:px-4 max-md:py-8">
      <FadeIn className="text-center">
        <Title weight={600} size="xl">
          {t('title')}
        </Title>
      </FadeIn>
      <section className="flex flex-col gap-5 max-md:gap-6">
        <section className="flex gap-5 max-lg:flex-col max-md:gap-6">
          <Card
            title={t('items.0.title')}
            description={t('items.0.description')}
            impact={t('items.0.impact')}
            className="w-[20%] max-lg:w-full"
          />
          <div className="flex w-[60%] flex-col gap-3 max-lg:w-full max-lg:flex-col">
            <Card
              title={t('items.1.title')}
              description={t('items.1.description')}
              impact={<>{t('items.1.impact')}</>}
              horizontal
            />
            <Card
              title={t('items.2.title')}
              description={t('items.2.description')}
              impact={<>{t('items.2.impact')}</>}
              horizontal
            />
          </div>
          <Card
            title="Energy & Utilities"
            description="We build sustainability strategies that don’t just check boxes — they cut carbon and costs."
            impact={<>{t('items.3.impact')}</>}
            className="w-[20%] max-lg:w-full"
          />
        </section>
        <section className="flex gap-5 max-lg:flex-col max-md:gap-6">
          <Card
            title={t('items.4.title')}
            description={t('items.4.description')}
            impact={<>{t('items.4.impact')}</>}
          />
          <Card
            title={t('items.5.title')}
            description={t('items.5.description')}
            impact={<>{t('items.5.impact')}</>}
          />
          <Card
            title={t('items.6.title')}
            description={t('items.6.description')}
            impact={<>{t('items.6.impact')}</>}
          />
          <Card
            title={t('items.7.title')}
            description={t('items.7.description')}
            impact={<>{t('items.7.impact')}</>}
          />
        </section>
      </section>
    </section>
  );
};

const Card = ({
  description,
  impact,
  title,
  horizontal = false,
  className,
}: {
  title: string;
  description: string;
  impact: ReactNode;
  horizontal?: boolean;
  className?: string;
}) => (
  <FadeIn
    className={cn(
      'group hover:bg-primary flex w-full items-start rounded-4xl bg-[#F5F5F5] p-8 transition duration-300 ease-in-out',
      !horizontal
        ? 'flex-col gap-5 max-md:gap-3'
        : 'gap-8 max-md:flex-col max-md:gap-3',
      className,
    )}
  >
    <section
      className={cn(
        'flex flex-col gap-5 max-md:gap-3',
        horizontal && 'w-1/2 max-md:w-full',
      )}
    >
      <Text
        color="primary"
        weight={600}
        size="2xl"
        className="group-hover:text-white"
      >
        {title}
      </Text>
      <Text className="group-hover:text-white">{description}</Text>
    </section>
    <section
      className={cn(
        'flex w-full',
        !horizontal
          ? 'mt-auto flex-col gap-3'
          : 'w-1/2 gap-8 max-md:w-full max-md:flex-col max-md:gap-3',
      )}
    >
      <Divider
        className={cn(
          'bg-[rgba(24,24,24,0.2)] group-hover:bg-white',
          horizontal ? 'h-auto w-[1px] max-md:h-[1px] max-md:w-full' : 'w-full',
        )}
      />
      <div className="flex flex-col gap-5 max-md:gap-3">
        <Text
          color="dark"
          weight={600}
          size="xl"
          className="group-hover:text-white"
        >
          Example impact:
        </Text>
        <Text className="group-hover:text-white">{impact}</Text>
      </div>
    </section>
  </FadeIn>
);
