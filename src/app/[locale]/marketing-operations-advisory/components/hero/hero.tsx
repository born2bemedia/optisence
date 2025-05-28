'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.css';

export const Hero = () => {
  const t = useTranslations('marketingOperations.hero');

  return (
    <section
      className={cn(
        st.background,
        'flex h-[700px] flex-col gap-20 px-[100px] pt-[92px] pb-[120px] max-sm:justify-center max-sm:gap-3 max-sm:px-4 max-sm:py-8',
      )}
    >
      <FadeIn>
        <Title
          color="light"
          weight={600}
          className="w-[76%] leading-[120%] max-xl:w-full"
        >
          {t('title')}
        </Title>
      </FadeIn>
      <FadeIn className="ml-auto flex w-1/2 gap-5 max-xl:w-full max-sm:flex-col max-sm:gap-3">
        <Text color="light" className="w-1/2 max-sm:w-full">
          {t('description')}
        </Text>
        <div className="flex w-1/2 flex-col gap-4 max-sm:w-full">
          <Text color="light">{t('text')}</Text>
          <Link href="/contact-us">
            <Button textAlign="center" fullWidth>
              {t('btn')}
              <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
};
