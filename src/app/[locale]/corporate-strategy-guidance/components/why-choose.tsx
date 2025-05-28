'use client';

import { useTranslations } from 'next-intl';

import { ReasonsToChoose } from '@/features/package/components';

export const WhyChoose = () => {
  const t = useTranslations('corporateStrategyGuidance.whyChoose');

  const reasons = Array.from({ length: 5 }, (_, index) => ({
    title: t(`reasons.${index}.title`),
    text: t(`reasons.${index}.text`),
  }));

  return (
    <ReasonsToChoose
      title={
        <>
          <span className="text-primary"></span>
          {t('title.0')}
          <br />
          {t('title.1')}
        </>
      }
      reasons={reasons}
      imgUrl="/images/strategy-guidance/1.png"
      reversed
    />
  );
};
