'use client';

import { type JSX, useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { CubesIcon, MingcuteIcon, SpeakIcon } from '@/shared/ui/icons/orange';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OptisenceMindset = () => {
  const t = useTranslations('who-we-are.optisenceMindset');

  const items = useMemo(
    () => [
      {
        icon: MingcuteIcon,
        title: t('items.0.title'),
        text: t('items.0.text'),
      },
      {
        icon: CubesIcon,
        title: t('items.1.title'),
        text: t('items.1.text'),
      },
      {
        icon: SpeakIcon,
        title: t('items.2.title'),
        text: t('items.2.text'),
      },
    ],
    [t],
  );

  return (
    <section className="flex flex-col gap-20 px-[100px] py-20 max-sm:gap-6 max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col gap-3 text-center max-sm:gap-6">
        <Title as="h2" weight={600}>
          <span className="text-primary">{t('title.first')}</span>
          <br /> {t('title.second')}
        </Title>
        <Text className="mx-auto w-1/2 max-lg:w-full">{t('description')}</Text>
      </FadeIn>
      <FadeIn className="flex gap-12 max-lg:flex-col">
        <section className="flex w-1/2 flex-col gap-12 max-lg:w-full">
          {items.map(item => (
            <Card key={item.title} {...item} />
          ))}
        </section>
        <Image
          className="h-[360px] w-1/2 rounded-4xl object-cover max-lg:h-[200px] max-lg:w-full"
          src="/images/who-we-are/2.jpg"
          alt="who-we-are"
          width={596}
          height={318}
          unoptimized
        />
      </FadeIn>
    </section>
  );
};

const Card = ({
  icon: Icon,
  text,
  title,
}: {
  icon: () => JSX.Element;
  title: string;
  text: string;
}) => (
  <article className="flex items-center gap-6">
    <span className="shrink-0">
      <Icon />
    </span>
    <section className="flex flex-col gap-3">
      <Text size="xl" weight={600} color="dark">
        {title}
      </Text>
      <Text>{text}</Text>
    </section>
  </article>
);
