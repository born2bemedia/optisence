'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ThankYouView = () => {
  const t = useTranslations('thankYou');

  return (
    <section className="flex flex-col items-center gap-3 text-center">
      <Title size="lg" color="primary">
        {t('title')}
      </Title>
      <Text>{t('msg2')}</Text>
    </section>
  );
};
