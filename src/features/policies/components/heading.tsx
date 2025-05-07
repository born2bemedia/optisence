'use client';

import type { ReactNode } from 'react';

import { Text } from '@/shared/ui/kit/text';

export const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <Text color="primary" className="flex items-center gap-4" size="lg">
      <Dot />
      {children}
    </Text>
  );
};

const Dot = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="6"
    viewBox="0 0 6 6"
    fill="none"
  >
    <circle cx="3" cy="3" r="3" fill="#FF572D" />
  </svg>
);
