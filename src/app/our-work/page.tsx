import type { Metadata } from 'next';

import {
  BuildCaseStudy,
  Hero,
  ProjectsApart,
  ProjectsList,
} from './components';

export const metadata: Metadata = {
  title: 'Our Work | Impactful Transformations at Optisence',
  description:
    'Browse anonymized case studies highlighting how Optisence drives results by transforming businesses with innovative strategies and cutting-edge solutions. Real outcomes, not just names.',
  openGraph: {
    title: 'Our Work | Impactful Transformations at Optisence',
    description:
      'Browse anonymized case studies highlighting how Optisence drives results by transforming businesses with innovative strategies and cutting-edge solutions. Real outcomes, not just names.',
    images: 'https://optisence.com/images/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work | Impactful Transformations at Optisence',
    description:
      'Browse anonymized case studies highlighting how Optisence drives results by transforming businesses with innovative strategies and cutting-edge solutions. Real outcomes, not just names.',
    images: ['https://optisence.com/images/meta.jpg'],
  },
};

export default function OurWork() {
  return (
    <main>
      <Hero />
      <ProjectsList projectsRange={[0, 4]} />
      <ProjectsApart />
      <ProjectsList projectsRange={[4, 7]} />
      <BuildCaseStudy />
    </main>
  );
}
