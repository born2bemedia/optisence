'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ApplicationForm } from '@/features/careers/components';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ReadyToApply = () => {
  const t = useTranslations('careers.readyToApply');

  return (
    <section className="flex flex-col gap-12 px-[100px] py-[80px] max-md:gap-8 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col items-center gap-3 text-center">
        <Title as="h2" size="xl" weight={600}>
          {t('title.first')}{' '}
          <span className="text-primary">{t('title.second')}</span>
        </Title>
        <section className="flex flex-col gap-5">
          <Text color="dark" weight={500}>
            {t('subtitle')}
          </Text>
          <Text>
            {t('description.first')}
            <Link
              href="mailto:info@optisence.com"
              className="text-dark font-medium"
            >
              info@optisence.com
            </Link>{' '}
            {t('description.second')}
          </Text>
        </section>
      </FadeIn>
      <FadeIn className="flex flex-col gap-10 rounded-4xl bg-[#FAFAFA] px-50 py-8 max-xl:px-16 max-md:px-5 max-md:py-8">
        <Text size="2xl" color="dark" weight={600}>
          {t('form.title')}
        </Text>
        <ApplicationForm />
      </FadeIn>
    </section>
  );
};
