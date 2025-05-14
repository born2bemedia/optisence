import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { MediaCenterFactory } from '@/features/media-center/components';
import { articles } from '@/features/media-center/lib';

import { Header, Navigation } from '../components';
import { articlesMeta } from './meta';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;

  return {
    title: articlesMeta[awaitedParams.slug].title,
    description: articlesMeta[awaitedParams.slug].description,
    openGraph: {
      title: articlesMeta[awaitedParams.slug].title,
      description: articlesMeta[awaitedParams.slug].description,
      images: 'https://optisence.com/images/meta.jpg',
    },
    twitter: {
      card: 'summary_large_image',
      title: articlesMeta[awaitedParams.slug].title,
      description: articlesMeta[awaitedParams.slug].description,
      images: ['https://optisence.com/images/meta.jpg'],
    },
  };
}

export default async function MediaCenter({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const currentArticle = articles
    .map(item => item.url)
    .includes(`/media-center/${slug}`)
    ? slug
    : undefined;

  if (!currentArticle) {
    throw notFound();
  }

  return (
    <main>
      <Header />
      <Navigation />
      <MediaCenterFactory slug={slug} />
    </main>
  );
}
