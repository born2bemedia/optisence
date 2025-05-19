'use client';

import { useTranslations } from 'next-intl';

import { useRequestDialogStore } from '@/features/request-form/services';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.css';

export const Hero = () => {
  const t = useTranslations('corporateStrategyGuidance.hero');
  const { setOpen } = useRequestDialogStore();

  return (
    <section
      className={cn(
        st.background,
        'flex h-[480x] items-center justify-between gap-5 p-[100px] max-md:h-[710px] max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-3 max-md:px-4 max-md:py-8 max-md:text-center',
      )}
    >
      <FadeIn className="w-1/2 max-md:w-full">
        <Title weight={600} color="light">
          {t('title')}
        </Title>
      </FadeIn>
      <FadeIn className="flex w-1/2 flex-col justify-between gap-5 max-md:w-full max-md:gap-12">
        <Text color="light">{t('description')}</Text>
        <Button className="max-md:mx-auto" onClick={() => setOpen(true)}>
          {t('btn')}
          <ArrowRightIcon />
        </Button>
      </FadeIn>
    </section>
  );
};
