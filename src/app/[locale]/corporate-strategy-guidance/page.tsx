import type { Metadata } from 'next';

import { OrderDialog } from '@/features/order/components';
import { DownloadPrice } from '@/features/package/components';

import {
  Hero,
  HowWeHelp,
  NextSteps,
  OurStrategyServices,
  ReadyStrategyPackages,
  WhyChoose,
} from './components';

export const metadata: Metadata = {
  title: 'Corporate Strategy Guidance | Scale Your Business with Optisence',
  description:
    'Optisence provides expert corporate strategy guidance to help your business expand, optimize operations, and stay competitive in the evolving market landscape. Let’s build your future.',
  openGraph: {
    title: 'Corporate Strategy Guidance | Scale Your Business with Optisence',
    description:
      'Optisence provides expert corporate strategy guidance to help your business expand, optimize operations, and stay competitive in the evolving market landscape. Let’s build your future.',
    images: 'https://optisence.com/images/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Strategy Guidance | Scale Your Business with Optisence',
    description:
      'Optisence provides expert corporate strategy guidance to help your business expand, optimize operations, and stay competitive in the evolving market landscape. Let’s build your future.',
    images: ['https://optisence.com/images/meta.jpg'],
  },
};

export default function CorporateStrategyGuidance() {
  return (
    <main>
      <Hero />
      <OurStrategyServices />
      <HowWeHelp />
      <ReadyStrategyPackages />
      <DownloadPrice />
      <OrderDialog />
      <WhyChoose />
      <NextSteps />
    </main>
  );
}
