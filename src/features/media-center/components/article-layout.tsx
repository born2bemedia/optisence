'use client';

import type { ReactNode } from 'react';

export const ArticleLayout = ({ children }: { children: ReactNode }) => (
  <article className="flex flex-col gap-20 px-[100px] pt-[80px] pb-[145px] max-sm:gap-7 max-sm:px-4 max-sm:py-8">
    {children}
  </article>
);
