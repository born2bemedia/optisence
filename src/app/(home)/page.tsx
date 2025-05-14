import type { Metadata } from 'next';

import {
  Banners,
  ClientReviews,
  ConsultingSolutions,
  Hero,
  Industries,
  OurValues,
  WhyChooseUs,
} from './components';

export const metadata: Metadata = {
  title:
    'Optisence | Transformative Business & Marketing Solutions for Sustainable Growth',
  description:
    'Discover how Optisence helps businesses scale and thrive through innovative corporate strategy and marketing operations advisory services. Unlock your growth potential today.',
  openGraph: {
    title:
      'Optisence | Transformative Business & Marketing Solutions for Sustainable Growth',
    description:
      'Discover how Optisence helps businesses scale and thrive through innovative corporate strategy and marketing operations advisory services. Unlock your growth potential today.',
    images: 'https://optisence.com/images/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Optisence | Transformative Business & Marketing Solutions for Sustainable Growth',
    description:
      'Discover how Optisence helps businesses scale and thrive through innovative corporate strategy and marketing operations advisory services. Unlock your growth potential today.',
    images: ['https://optisence.com/images/meta.jpg'],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <ConsultingSolutions />
      <Industries />
      <OurValues />
      <ClientReviews />
      <Banners />
    </main>
  );
}
