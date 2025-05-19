'use client';

import { articleComponents } from '../lib';

export const MediaCenterFactory = ({ slug }: { slug: string }) => {
  const Comp = articleComponents[slug];

  return <>{Comp}</>;
};
