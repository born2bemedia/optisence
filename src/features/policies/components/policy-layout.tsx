'use client';

import type { ReactNode } from 'react';

export const PolicyLayout = ({ children }: { children: ReactNode }) => (
  <section className="flex flex-col gap-24 pt-[100px] pr-[100px] pb-[145px] pl-[100px] max-sm:gap-16 max-sm:px-4 max-sm:py-8">
    {children}
  </section>
);
