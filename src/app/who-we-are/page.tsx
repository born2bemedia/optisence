import type { Metadata } from 'next';

import {
  Hero,
  LookingAhead,
  OptisenceEcosystem,
  OptisenceFamily,
  OptisenceMindset,
  OurApproach,
  OurImpact,
  OurJourney,
  WhatSetsUs,
} from './components';

export const metadata: Metadata = {
  title: 'About Optisence | Architects of Growth and Innovation',
  description:
    'Learn more about Optisence, a forward-thinking consultancy focused on helping businesses achieve scalable, sustainable growth through strategic planning and innovation.',
  openGraph: {
    title: 'About Optisence | Architects of Growth and Innovation',
    description:
      'Learn more about Optisence, a forward-thinking consultancy focused on helping businesses achieve scalable, sustainable growth through strategic planning and innovation.',
    images: 'https://optisence.com/images/meta-about.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Optisence | Architects of Growth and Innovation',
    description:
      'Learn more about Optisence, a forward-thinking consultancy focused on helping businesses achieve scalable, sustainable growth through strategic planning and innovation.',
    images: ['https://optisence.com/images/meta-about.jpg'],
  },
};

export default function WhoWeAre() {
  return (
    <main>
      <Hero />
      <OurJourney />
      <OurApproach />
      <WhatSetsUs />
      <OurImpact />
      <OptisenceMindset />
      <OptisenceEcosystem />
      <OptisenceFamily />
      <LookingAhead />
    </main>
  );
}
