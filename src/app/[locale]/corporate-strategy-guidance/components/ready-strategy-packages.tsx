'use client';

import { useTranslations } from 'next-intl';

import { ReadyPackages } from '@/features/package/components';
import type { Package } from '@/features/package/lib';

export const ReadyStrategyPackages = () => {
  const t = useTranslations('corporateStrategyGuidance');

  const strategyPackages: Package[] = Array.from({ length: 4 }, (_, index) => ({
    name: t(`packages.${index}.name`),
    price: t(`packages.${index}.price`),
    description: t(`packages.${index}.description`),
    features: Object.keys(t.raw(`packages.${index}.features`)).map(key =>
      t(`packages.${index}.features.${key}`),
    ),
    reasonToChoose: t(`packages.${index}.reasonToChoose`),
  }));

  return (
    <ReadyPackages
      title={
        <>
          {t('readyStrategyPackages.title.0')}
          <br />
          {t('readyStrategyPackages.title.1')}
        </>
      }
      description={t('readyStrategyPackages.description')}
      packages={strategyPackages}
    />
  );
};
