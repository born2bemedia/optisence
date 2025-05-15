'use client';

import { ReasonsToChoose } from '@/features/package/components';

const reasons = [
  {
    title: 'Proven Success',
    text: 'We have a track record of helping companies achieve long-term growth, operational excellence, and competitive advantage.',
  },
  {
    title: 'Ongoing Support',
    text: 'We don’t just deliver a strategy; we stay involved to help implement it, ensuring you see measurable success at every stage.',
  },
  {
    title: 'Tailored Solutions',
    text: 'Every business is unique, and our strategies are designed to fit your specific needs and challenges.',
  },
  {
    title: 'Data-Driven Insights',
    text: 'We use market research and industry analysis to craft strategies informed by real-time data and trends.',
  },
  {
    title: 'Experienced Consultants',
    text: 'Our consultants bring deep experience and expertise in corporate strategy across multiple industries.',
  },
];

export const WhyChoose = () => (
  <ReasonsToChoose
    title={
      <>
        <span className="text-primary">Why Choose Optisence</span>
        <br /> for Corporate Strategy Guidance
      </>
    }
    reasons={reasons}
    imgUrl="/images/strategy-guidance/1.png"
    reversed
  />
);
