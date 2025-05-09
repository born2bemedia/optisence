'use client';

import { PackageCard, PackageSlider } from '@/features/package/components';
import { marketingPackages } from '@/features/package/lib';

import { useWindow } from '@/shared/lib/hooks';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ReadyMarketingPackages = () => {
  const { width } = useWindow();

  return (
    <section className="flex flex-col gap-20 px-[100px] py-20 max-md:gap-8 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col gap-3 text-center">
        <Title as="h2" size="xl" weight={600}>
          Ready-Made Marketing
          <br /> Advisory Packages
        </Title>
        <Text className="mx-auto w-[50%] max-md:w-full">
          We offer four comprehensive packages to address businesses’ varying
          needs at different growth stages. Each package is tailored to help you
          unlock your marketing potential and drive sustainable growth. Choose
          the package that best suits your current needs and budget, and let us
          help you take your marketing to the next level.
        </Text>
      </FadeIn>
      {width > 768 ? (
        <FadeIn className="flex gap-5">
          <section className="flex flex-col gap-5">
            <PackageCard {...marketingPackages[0]} />
            <PackageCard {...marketingPackages[2]} />
          </section>
          <section className="flex flex-col gap-5">
            <PackageCard {...marketingPackages[1]} />
            <PackageCard {...marketingPackages[3]} className="h-full" />
          </section>
        </FadeIn>
      ) : (
        <FadeIn>
          <PackageSlider packages={marketingPackages} />
        </FadeIn>
      )}
    </section>
  );
};
