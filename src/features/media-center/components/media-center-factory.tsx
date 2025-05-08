'use client';

import { articleComponents } from '../lib';

export const MediaCenterFactory = ({ slug }: { slug: string }) => {
  console.log('slug', slug);
  const Comp = articleComponents[slug];

  return <>{Comp}</>;
};
