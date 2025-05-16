'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('careers.hero');

  return (
    <FadeIn className="flex items-center gap-12 px-[100px] pt-[100px] pb-[80px] max-md:flex-col-reverse max-md:items-start max-md:justify-center max-md:gap-3 max-md:px-4 max-md:py-8">
      <Image
        className="h-[338px] w-1/2 rounded-4xl object-cover max-md:h-[180px] max-md:w-full"
        src="/images/careers/hero.jpg"
        alt="hero"
        width={600}
        height={338}
        unoptimized
      />
      <section className="flex w-1/2 flex-col gap-7 max-md:w-full">
        <Title weight={600} className="leading-[120%]">
          {t('title')}
        </Title>
        <section className="flex flex-col gap-5 max-md:gap-3">
          <Text color="dark" size="lg" weight={600}>
            {t('description')}
          </Text>
          <Text>
            {t('text.first')}
            <br />
            <br />
            {t('text.second')}
          </Text>
          <Text>{t('label')}</Text>
        </section>
      </section>
    </FadeIn>
  );
};
