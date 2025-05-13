'use client';

import { HowHelpSection } from '@/shared/ui/components/how-help-section';

const stats = [
  {
    percent: 50,
    text: 'Increase in Market Share for a client after implementing an expansion strategy.',
  },
  {
    percent: 40,
    text: 'Improvement in Operational Efficiency through business model innovation.',
  },
  {
    percent: 200,
    text: 'Growth in Revenue for a company following a competitive analysis and market entry strategy.',
  },
  {
    percent: 75,
    text: 'Success Rate in Change Management for clients undergoing major organizational shifts.',
  },
];

export const HowWeHelp = () => (
  <HowHelpSection
    title={
      <>
        <span className="text-primary">How We Help Our Clients</span>
        <br />
        in Numbers
      </>
    }
    subtitle="Our results speak for themselves. Here are some key numbers that demonstrate the impact we’ve had on businesses:"
    stats={stats}
    description="These numbers reflect real-world impact and measurable success for our clients."
  />
);
