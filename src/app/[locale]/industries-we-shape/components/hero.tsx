'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useWindow } from '@/shared/lib/hooks';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('industries-we-shape.hero');
  const { width } = useWindow();

  return (
    <section className="relative m-[100px] flex flex-col gap-5 max-lg:gap-8 max-md:mx-4 max-md:my-8">
      <Title weight={600}>{t('title')}</Title>
      <FadeIn className="absolute top-[14px] right-0 flex w-[42%] flex-col gap-5 max-lg:relative max-lg:top-0 max-lg:w-full">
        <Text color="dark" weight={600} size="xl">
          {t('subtitle')}
        </Text>
        <Text color="dark" size="lg">
          {t('description')}
        </Text>
      </FadeIn>
      <FadeIn>
        <Image
          className="h-[328px] w-full rounded-4xl object-cover"
          src={
            width > 1024
              ? '/images/industries-we-shape/hero.png'
              : '/images/industries-we-shape/hero-mob.jpg'
          }
          alt="Hero"
          width={1000}
          height={300}
          unoptimized
        />
      </FadeIn>
    </section>
  );
};
