'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';
export const Hero = () => {
  const t = useTranslations('our-work.hero');

  return (
    <section className="flex flex-col gap-8 px-[100px] pt-[100px] pb-[40px] max-md:gap-3 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col gap-7">
        <Title weight={600}>{t('title')}</Title>
        <section className="flex flex-col gap-5">
          <Text color="dark" weight={600} size="xl">
            {t('subtitle')}
          </Text>
          <section className="flex gap-10">
            <div className="flex w-1/2 flex-col gap-5 max-md:w-full max-md:gap-3">
              <Text>
                {t('description.col1.0')} <br />
                <br />
                {t('description.col1.1')}
              </Text>
            </div>
            <Text className="w-1/2 max-md:hidden">
              {t('description.col2.0')} <br />
              <br />
              {t('description.col2.1')}
            </Text>
          </section>
        </section>
      </FadeIn>
      <Image
        className="h-[200px] w-full rounded-4xl object-cover object-top max-md:h-[124px]"
        src="/images/our-work/hero.jpg"
        alt="Hero"
        width={1000}
        height={200}
        unoptimized
      />
      <Text className="hidden max-md:block">
        {t('description.col2.0')} <br />
        <br />
        {t('description.col2.1')}
      </Text>
    </section>
  );
};
