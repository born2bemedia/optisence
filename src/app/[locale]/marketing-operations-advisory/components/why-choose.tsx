'use client';

import { ReasonsToChoose } from '@/features/package/components';

const reasons = [
  {
    title: 'Tailored Solutions',
    text: 'We don’t offer one-size-fits-all solutions. Our services are designed to meet your needs, regardless of your business size or industry.',
  },
  {
    title: 'Proven Results',
    text: 'Our approach is built around data-driven insights and measurable outcomes, ensuring that every decision drives success for your business.',
  },
  {
    title: 'Cutting-Edge Technology',
    text: 'We leverage the latest technologies and marketing automation tools to make your operations more efficient and scalable.',
  },
  {
    title: 'Experienced Team',
    text: 'Our team of experts brings deep industry knowledge and hands-on experience to ensure your marketing operations are optimized for growth.',
  },
  {
    title: 'Long-Term Partnership',
    text: 'We believe in building long-term relationships with our clients. We’re with you every step of the way, helping you adapt to market changes and grow your business sustainably.',
  },
];

export const WhyChoose = () => (
  <ReasonsToChoose
    title={
      <>
        <span className="text-primary">Why Choose Optisence</span>
        <br /> for Marketing Operations Advisory
      </>
    }
    reasons={reasons}
    imgUrl="/images/marketing-operations/1.png"
    description="Our approach is always focused on results. Here’s a snapshot of the impact we’ve had on businesses we’ve worked with:"
  />
);
