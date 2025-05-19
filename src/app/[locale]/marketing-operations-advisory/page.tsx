import type { Metadata } from 'next';

import { OrderDialog } from '@/features/order/components';
import { DownloadPrice } from '@/features/package/components';

import {
  Hero,
  HowWeHelp,
  NextSteps,
  OurMarketingServices,
  ReadyMarketingPackages,
  WhyChoose,
} from './components';

export const metadata: Metadata = {
  title: 'Marketing Operations Advisory | Streamlining Growth at Optisence',
  description:
    'Optimize your marketing processes, automate workflows, and track performance with Optisence’s tailored marketing operations advisory services. Drive measurable results with expert strategies.',
  openGraph: {
    title: 'Marketing Operations Advisory | Streamlining Growth at Optisence',
    description:
      'Optimize your marketing processes, automate workflows, and track performance with Optisence’s tailored marketing operations advisory services. Drive measurable results with expert strategies.',
    images: 'https://optisence.com/images/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Operations Advisory | Streamlining Growth at Optisence',
    description:
      'Optimize your marketing processes, automate workflows, and track performance with Optisence’s tailored marketing operations advisory services. Drive measurable results with expert strategies.',
    images: ['https://optisence.com/images/meta.jpg'],
  },
};

export default function MarketingOperationsAdvisory() {
  return (
    <main>
      <Hero />
      <OurMarketingServices />
      <HowWeHelp />
      <ReadyMarketingPackages />
      <DownloadPrice />
      <WhyChoose />
      <NextSteps />
      <OrderDialog />
    </main>
  );
}
