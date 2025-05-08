'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';

export const Heading = ({
  title,
  description,
  children,
  images,
  simplified = false,
}: {
  title: ReactNode;
  description?: string;
  children: ReactNode;
  images: string[];
  simplified?: boolean;
}) => {
  return (
    <FadeIn className="flex flex-col gap-12 max-sm:gap-6">
      {!simplified && (
        <section className="flex items-end justify-between gap-12 max-sm:flex-col max-sm:gap-6">
          {title}
          <Text>{description}</Text>
        </section>
      )}
      <section className="flex items-center gap-12 max-sm:flex-col">
        <section
          className={`${simplified ? 'flex flex-col gap-5' : ''} w-1/2 max-sm:w-full`}
        >
          {simplified && title}
          {children}
        </section>
        <section className="flex w-1/2 gap-5 max-sm:w-full max-sm:flex-col">
          {images.map(img => (
            <Image
              className={`${
                simplified ? 'h-[328px]' : 'h-[195px]'
              } w-1/2 rounded-4xl object-cover max-sm:h-[120px] max-sm:w-full`}
              key={img}
              src={img}
              alt={img}
              height={214}
              width={278}
              unoptimized
            />
          ))}
        </section>
      </section>
    </FadeIn>
  );
};
