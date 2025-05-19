'use client';

import { useTranslations } from 'next-intl';

import { LinesSection } from '@/shared/ui/components/lines-section';

export const OurApproach = () => {
  const t = useTranslations('who-we-are.ourApproach');

  return (
    <LinesSection
      title={
        <>
          <span className="text-primary">{t('title.first')}</span>
          <br /> {t('title.second')}
        </>
      }
      text={
        <>
          {t('description.first')}
          <br />
          {t('description.second')}
        </>
      }
    />
  );
};
