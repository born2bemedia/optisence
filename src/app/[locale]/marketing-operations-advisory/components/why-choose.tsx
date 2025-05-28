'use client';

import { useTranslations } from 'next-intl';

import { ReasonsToChoose } from '@/features/package/components';

// const reasons = [
//   {
//     title: 'Tailored Solutions',
//     text: 'We don’t offer one-size-fits-all solutions. Our services are designed to meet your needs, regardless of your business size or industry.',
//   },
//   {
//     title: 'Proven Results',
//     text: 'Our approach is built around data-driven insights and measurable outcomes, ensuring that every decision drives success for your business.',
//   },
//   {
//     title: 'Cutting-Edge Technology',
//     text: 'We leverage the latest technologies and marketing automation tools to make your operations more efficient and scalable.',
//   },
//   {
//     title: 'Experienced Team',
//     text: 'Our team of experts brings deep industry knowledge and hands-on experience to ensure your marketing operations are optimized for growth.',
//   },
//   {
//     title: 'Long-Term Partnership',
//     text: 'We believe in building long-term relationships with our clients. We’re with you every step of the way, helping you adapt to market changes and grow your business sustainably.',
//   },
// ];

export const WhyChoose = () => {
  const t = useTranslations('marketingOperations.whyChoose');

  const reasons = [
    {
      title: t('reasons.0.title'),
      text: t('reasons.0.text'),
    },
    {
      title: t('reasons.1.title'),
      text: t('reasons.1.text'),
    },
    {
      title: t('reasons.2.title'),
      text: t('reasons.2.text'),
    },
    {
      title: t('reasons.3.title'),
      text: t('reasons.3.text'),
    },
    {
      title: t('reasons.4.title'),
      text: t('reasons.4.text'),
    },
  ];

  return (
    <ReasonsToChoose
      title={
        <>
          <span className="text-primary">
            {t('title.0')} <br /> {t('title.1')}
          </span>
        </>
      }
      reasons={reasons}
      imgUrl="/images/marketing-operations/1.png"
      description={t('description')}
    />
  );
};
