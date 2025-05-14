'use client';

import type { Metadata } from 'next';

import { DropMessage, Hero, HowReachUs, StayConnected } from './components';

export const metadata: Metadata = {
  title: 'Contact Us | Optisence – Let’s Discuss Your Business Transformation',
  description:
    'Contact Optisence today to discuss how we can help transform your business. Contact us for inquiries, collaborations, or tailored solutions.',
  openGraph: {
    title:
      'Contact Us | Optisence – Let’s Discuss Your Business Transformation',
    description:
      'Contact Optisence today to discuss how we can help transform your business. Contact us for inquiries, collaborations, or tailored solutions.',
    images: 'https://optisence.com/images/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Contact Us | Optisence – Let’s Discuss Your Business Transformation',
    description:
      'Contact Optisence today to discuss how we can help transform your business. Contact us for inquiries, collaborations, or tailored solutions.',
    images: ['https://optisence.com/images/meta.jpg'],
  },
};

export default function ContactUs() {
  return (
    <main>
      <Hero />
      <HowReachUs />
      <StayConnected />
      <DropMessage />
    </main>
  );
}
