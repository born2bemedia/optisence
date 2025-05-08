'use client';

import type { ReactNode } from 'react';

export const ArticleContentLayout = ({ children }: { children: ReactNode }) => (
  <section className="flex flex-col gap-12">{children}</section>
);
