'use client';

import { HowHelpSection } from '@/shared/ui/components/how-help-section';

const stats = [
  {
    percent: 150,
    text: 'Increase in Lead Conversions for a tech startup after implementing marketing automation.',
  },
  {
    percent: 30,
    text: 'Improvement in Marketing Efficiency by optimizing workflows and processes for a global retailer.',
  },
  {
    percent: 100,
    text: 'Client Retention Rate with businesses after completing comprehensive performance measurement and marketing optimization projects.',
  },
  {
    percent: 200,
    text: 'Growth in Social Media Engagement after executing a tailored social media strategy for a B2B client.',
  },
];

export const HowWeHelp = () => (
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
