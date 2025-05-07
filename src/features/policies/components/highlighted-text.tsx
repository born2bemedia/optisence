'use client';

import type { ReactNode } from 'react';

export const HighlightedText = ({ children }: { children: ReactNode }) => (
  <span className="text-primary">{children}</span>
);
