'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.css';

export const Hero = () => {
  const t = useTranslations('contact.hero');

  return (
    <section
      className={cn(
        st.layout,
        'h-max p-[100px] max-sm:h-[600px] max-sm:px-4 max-sm:py-8',
      )}
    >
      <FadeIn className="flex w-2/5 flex-col gap-3 max-[1050px]:w-full max-sm:h-full max-sm:items-center max-sm:justify-center">
        <Title color="light" className="leading-[120%]">
          {t('title')}
        </Title>
        <Text color="light">{t('text')}</Text>
      </FadeIn>
    </section>
  );
};
