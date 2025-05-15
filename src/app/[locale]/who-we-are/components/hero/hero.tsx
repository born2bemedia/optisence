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
  const t = useTranslations('who-we-are.hero');

  return (
    <section
      className={cn(
        st.bg,
        'flex h-[650px] gap-8 p-[100px] max-md:h-[600px] max-md:flex-col max-md:justify-center max-md:gap-3 max-md:px-4 max-md:py-8',
      )}
    >
      <FadeIn>
        <Title color="light" className="w-[90%] max-sm:w-full">
          {t('title')}
        </Title>
      </FadeIn>
      <FadeIn className="mt-auto flex w-[90%] flex-col gap-8 max-sm:mt-0 max-sm:w-full">
        <Text color="light">{t('description')}</Text>
        <Link href="/contact-us" className="ml-auto">
          <Button>
            {t('btnLabel')} <ArrowRightIcon />
          </Button>
        </Link>
      </FadeIn>
    </section>
  );
};
