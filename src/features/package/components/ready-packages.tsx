'use client';

import type { ReactNode } from 'react';

import { PackageCard, PackageSlider } from '@/features/package/components';

import { useWindow } from '@/shared/lib/hooks';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { type Package } from '../lib';

export const ReadyPackages = ({
  title,
  description,
  packages,
}: {
  title: ReactNode;
  description: string;
  packages: Package[];
}) => {
  const { width } = useWindow();

  return (
    <section className="flex flex-col gap-20 px-[100px] py-20 max-md:gap-8 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col gap-3 text-center">
        <Title as="h2" size="xl" weight={600} className="leading-[120%]">
          {title}
        </Title>
        <Text className="mx-auto w-[50%] max-md:w-full">{description}</Text>
      </FadeIn>
      {width > 768 ? (
        <FadeIn className="flex gap-5">
          <section className="flex flex-col gap-5">
            <PackageCard {...packages[0]} />
            <PackageCard {...packages[2]} />
          </section>
          <section className="flex flex-col gap-5">
            <PackageCard {...packages[1]} />
            <PackageCard {...packages[3]} className="h-full" />
          </section>
        </FadeIn>
      ) : (
        <FadeIn>
          <PackageSlider packages={packages} />
        </FadeIn>
      )}
    </section>
  );
};
