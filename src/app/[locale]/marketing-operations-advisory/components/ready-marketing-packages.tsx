'use client';

import { useTranslations } from 'next-intl';

import { ReadyPackages } from '@/features/package/components';
import type { Package } from '@/features/package/lib';

export const ReadyMarketingPackages = () => {
  const t = useTranslations('marketingOperations');

  const packages: Package[] = [
    {
      name: t('packages.0.name'),
      price: t('packages.0.price'),
      description: t('packages.0.description'),
      features: [
        t('packages.0.features.0'),
        t('packages.0.features.1'),
        t('packages.0.features.2'),
        t('packages.0.features.3'),
        t('packages.0.features.4'),
        t('packages.0.features.5'),
        t('packages.0.features.6'),
      ],
      reasonToChoose: t('packages.0.reasonToChoose'),
    },
    {
      name: t('packages.1.name'),
      price: t('packages.1.price'),
      description: t('packages.1.description'),
      features: [
        t('packages.1.features.0'),
        t('packages.1.features.1'),
        t('packages.1.features.2'),
        t('packages.1.features.3'),
        t('packages.1.features.4'),
        t('packages.1.features.5'),
        t('packages.1.features.6'),
        t('packages.1.features.7'),
        t('packages.1.features.8'),
      ],
      reasonToChoose: t('packages.1.reasonToChoose'),
    },
    {
      name: t('packages.2.name'),
      price: t('packages.2.price'),
      description: t('packages.2.description'),
      features: [
        t('packages.2.features.0'),
        t('packages.2.features.1'),
        t('packages.2.features.2'),
        t('packages.2.features.3'),
        t('packages.2.features.4'),
        t('packages.2.features.5'),
        t('packages.2.features.6'),
        t('packages.2.features.7'),
        t('packages.2.features.8'),
        t('packages.2.features.9'),
      ],
      reasonToChoose: t('packages.2.reasonToChoose'),
    },
    {
      name: t('packages.3.name'),
      price: t('packages.3.price'),
      description: t('packages.3.description'),
      features: [
        t('packages.3.features.0'),
        t('packages.3.features.1'),
        t('packages.3.features.2'),
        t('packages.3.features.3'),
        t('packages.3.features.4'),
        t('packages.3.features.5'),
        t('packages.3.features.6'),
        t('packages.3.features.7'),
        t('packages.3.features.8'),
        t('packages.3.features.9'),
        t('packages.3.features.10'),
        t('packages.3.features.11'),
        t('packages.3.features.12'),
      ],
      reasonToChoose: t('packages.3.reasonToChoose'),
    },
  ];

  return (
    <ReadyPackages
      title={
        <>
          {t('readyMarketingPackages.title.0')}
          <br /> {t('readyMarketingPackages.title.1')}
        </>
      }
      description={t('readyMarketingPackages.description')}
      packages={packages}
    />
  );
};
