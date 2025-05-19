'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { List } from '@/shared/ui/components/list';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const IndustryPain = () => {
  const t = useTranslations('industries-we-shape.industryPain');

  return (
    <section className="flex flex-col gap-20 px-[100px] pt-[80px] pb-[100px] max-md:gap-6 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col items-center gap-3 text-center max-md:gap-6">
        <Title as="h2" size="xl" weight={600} className="leading-[120%]">
          <span className="text-primary">{t('title.first')}</span>
          <br /> {t('title.second')}
        </Title>
        <section className="mx-auto flex w-[60%] flex-col gap-5 max-xl:w-full">
          <Text color="dark">{t('subtitle')}</Text>
          <Text>{t('description')}</Text>
        </section>
      </FadeIn>
      <FadeIn className="flex gap-5 max-xl:flex-col max-md:gap-6">
        <WhatWeFix />
        <Image
          className="h-[200px] w-1/2 rounded-4xl object-cover max-xl:w-full max-md:h-[157px]"
          src="/images/industries-we-shape/1.jpg"
          alt="Industry Pain"
          width={1000}
          height={1000}
        />
      </FadeIn>
    </section>
  );
};

const WhatWeFix = () => {
  const t = useTranslations('industries-we-shape.industryPain.whatWeFix');

  return (
    <section className="flex w-1/2 flex-col gap-5 rounded-4xl bg-[#F5F5F5] p-8 max-xl:w-full">
      <Text color="dark" weight={600} size="xl">
        {t('title')}
      </Text>
      <section className="flex justify-between gap-5">
        <List values={[t('items.0'), t('items.1'), t('items.2')]} noHighlight />
        <List values={[t('items.3'), t('items.4'), t('items.5')]} noHighlight />
      </section>
    </section>
  );
};
