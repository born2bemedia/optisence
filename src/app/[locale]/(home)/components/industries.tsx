'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const IndustriesSlider = dynamic(
  () => import('./industries-slider').then(mod => mod.IndustriesSlider),
  {
    ssr: false,
  },
);

export const Industries = () => {
  const t = useTranslations('home.industries');

  return (
    <section className="flex flex-col px-[100px] pt-[100px] pb-[145px] max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col items-center gap-3 text-center">
        <Title as="h2" size="xl">
          {t('title')}
        </Title>
        <Text className="w-[60%] max-md:w-full">{t('description')}</Text>
      </FadeIn>
      <FadeIn>
        <IndustriesSlider />
      </FadeIn>
    </section>
  );
};
