'use client';

import type { ReactNode } from 'react';

export const PolicyContentLayout = ({ children }: { children: ReactNode }) => (
  <section className="mr-auto ml-auto flex w-[960px] flex-col gap-10 max-[980px]:w-full">
    {children}
  </section>
);
