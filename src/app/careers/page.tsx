import type { Metadata } from 'next';

import {
  Hero,
  HiringProcess,
  OpenPositions,
  OptisenceLife,
  ReadyToApply,
  WhatYouGet,
  WorkWithUs,
} from './components';

export const metadata: Metadata = {
  title: 'Careers at Optisence | Join Our Team of Innovators',
  description:
    'Build the future with Optisence. Explore exciting career opportunities and join a team of bold thinkers shaping the future of business strategy and growth.',
  openGraph: {
    title: 'Careers at Optisence | Join Our Team of Innovators',
    description:
      'Build the future with Optisence. Explore exciting career opportunities and join a team of bold thinkers shaping the future of business strategy and growth.',
    images: 'https://optisence.com/images/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Optisence | Join Our Team of Innovators',
    description:
      'Build the future with Optisence. Explore exciting career opportunities and join a team of bold thinkers shaping the future of business strategy and growth.',
    images: ['https://optisence.com/images/meta.jpg'],
  },
};

export default function Careers() {
  return (
    <main>
      <Hero />
      <WorkWithUs />
      <OpenPositions />
      <WhatYouGet />
      <HiringProcess />
      <OptisenceLife />
      <ReadyToApply />
    </main>
  );
}
