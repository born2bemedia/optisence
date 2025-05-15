'use client';

import dynamic from 'next/dynamic';

import { strategyProducts } from '@/features/product/lib';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Title } from '@/shared/ui/kit/title';

const ProductsSlider = dynamic(
  () => import('@/features/product/components').then(mod => mod.ProductsSlider),
  { ssr: false },
);

export const OurStrategyServices = () => {
  return (
    <section className="flex flex-col gap-20 px-[100px] py-20 max-sm:gap-7 max-sm:px-4 max-sm:py-8">
      <FadeIn className="text-center">
        <Title as="h2" size="xl" weight={600} className="leading-[120%]">
          Our Custom Corporate
          <br />
          <span className="text-primary">Strategy Guidance Services</span>
        </Title>
      </FadeIn>
      <FadeIn>
        <ProductsSlider products={strategyProducts} />
      </FadeIn>
    </section>
  );
};
