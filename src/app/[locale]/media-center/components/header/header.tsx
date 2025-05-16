'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './header.module.css';

export const Header = () => {
  const t = useTranslations('mediaCenter.header');

  return (
    <FadeIn className="flex gap-5 px-[100px] pt-[100px] pb-12 max-sm:flex-col max-sm:px-4 max-sm:py-8">
      <section className="w-1/2 max-sm:w-full max-sm:gap-8 max-sm:text-center">
        <Title as="h2" weight={600}>
          {t('title')}
        </Title>
        <Text>
          {t('description.0')}
          <br />
          <br />
          {t('description.1')}
          <br />
          <br />
          {t('description.2')}
        </Text>
      </section>
      <section
        className={cn(
          st.imgBg,
          'flex w-1/2 flex-col p-8 max-sm:h-[358px] max-sm:w-full max-sm:text-center',
        )}
      >
        <Text className="mt-auto" color="light" weight={600} size="3xl">
          {t('img')}
        </Text>
      </section>
    </FadeIn>
  );
};
