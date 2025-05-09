'use client';

import dynamic from 'next/dynamic';

import { marketingProducts } from '@/features/product/lib';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Title } from '@/shared/ui/kit/title';

const ProductsSlider = dynamic(
  () => import('@/features/product/components').then(mod => mod.ProductsSlider),
  { ssr: false },
);

export const OurMarketingServices = () => {
  return (
    <section className="flex flex-col gap-20 px-[100px] py-20 max-sm:gap-7 max-sm:px-4 max-sm:py-8">
      <FadeIn className="text-center">
        <Title as="h2" size="xl">
          Our Custom Marketing
          <br />
          <span className="text-primary">Advisory Services</span>
        </Title>
      </FadeIn>
      <FadeIn>
        <ProductsSlider products={marketingProducts} />
      </FadeIn>
    </section>
  );
};
