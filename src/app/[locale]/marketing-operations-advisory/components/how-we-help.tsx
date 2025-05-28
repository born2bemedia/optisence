'use client';

import { useTranslations } from 'next-intl';

import { HowHelpSection } from '@/shared/ui/components/how-help-section';

export const HowWeHelp = () => {
  const t = useTranslations('marketingOperations.howWeHelp');

  const stats = [
    {
      percent: Number(t('stats.0.percent')),
      text: t('stats.0.text'),
    },
    {
      percent: Number(t('stats.1.percent')),
      text: t('stats.1.text'),
    },
    {
      percent: Number(t('stats.2.percent')),
      text: t('stats.2.text'),
    },
    {
      percent: Number(t('stats.3.percent')),
      text: t('stats.3.text'),
    },
  ];

  return (
    <HowHelpSection
      title={
        <>
          <span className="text-primary">How We Help Our Clients</span>
          <br /> in Numbers
        </>
      }
      stats={stats}
      subtitle="Our approach is always focused on results. Here’s a snapshot of the
          impact we’ve had on businesses we’ve worked with:"
      description="These numbers highlight just a few of the measurable successes we’ve
            achieved for our clients, demonstrating how we help businesses grow,
            optimize, and succeed."
    />
  );
};
