'use client';

import type { ReactNode } from 'react';

export const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <span className="w-max rounded-3xl bg-[#F3F3F3] px-3 py-1.5 text-base text-[#181818]">
      {children}
    </span>
  );
};
