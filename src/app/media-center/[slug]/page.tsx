import { notFound } from 'next/navigation';

import { MediaCenterFactory } from '@/features/media-center/components';
import { articles } from '@/features/media-center/lib';

import { Header, Navigation } from '../components';

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
