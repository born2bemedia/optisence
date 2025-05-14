'use client';

import type { Metadata } from 'next';

import {
  BreakTheMold,
  BuiltForIndustries,
  Hero,
  IndustryPain,
  Results,
} from './components';

export const metadata: Metadata = {
  title: 'Industries We Shape | Transforming Business Across Sectors',
  description:
    'Explore how Optisence has partnered with companies across industries, from healthcare to tech, creating innovative strategies for sustainable success and scalability.',
  openGraph: {
    title: 'Industries We Shape | Transforming Business Across Sectors',
    description:
      'Explore how Optisence has partnered with companies across industries, from healthcare to tech, creating innovative strategies for sustainable success and scalability.',
    images: 'https://optisence.com/images/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Shape | Transforming Business Across Sectors',
    description:
      'Explore how Optisence has partnered with companies across industries, from healthcare to tech, creating innovative strategies for sustainable success and scalability.',
    images: ['https://optisence.com/images/meta.jpg'],
  },
};

export default function IndustriesWeShape() {
  return (
    <main>
      <Hero />
      <IndustryPain />
      <BreakTheMold />
      <Results />
      <BuiltForIndustries />
    </main>
  );
}
