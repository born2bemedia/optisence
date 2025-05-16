'use client';

import { useTranslations } from 'next-intl';

import { HowHelpSection } from '@/shared/ui/components/how-help-section';

export const HowWeHelp = () => {
  const t = useTranslations('corporateStrategyGuidance.howWeHelp');

  const stats = [
    {
      percent: parseInt(t('stats.0.percent')),
      text: t('stats.0.text'),
    },
    {
      percent: parseInt(t('stats.1.percent')),
      text: t('stats.1.text'),
    },
    {
      percent: parseInt(t('stats.2.percent')),
      text: t('stats.2.text'),
    },
    {
      percent: parseInt(t('stats.3.percent')),
      text: t('stats.3.text'),
    },
  ];

  return (
    <HowHelpSection
      title={
        <>
          <span className="text-primary">
            {t('title.0')}
            <br />
            {t('title.1')}
          </span>
        </>
      }
      subtitle={t('subtitle')}
      stats={stats}
      description={t('description')}
    />
  );
};
