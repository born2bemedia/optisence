'use client';

import { ReadyPackages } from '@/features/package/components';
import { marketingPackages } from '@/features/package/lib';

export const ReadyMarketingPackages = () => (
  <ReadyPackages
    title={
      <>
        Ready-Made Marketing
        <br /> Advisory Packages
      </>
    }
    description="We offer four comprehensive packages to address businesses’ varying
          needs at different growth stages. Each package is tailored to help you
          unlock your marketing potential and drive sustainable growth. Choose
          the package that best suits your current needs and budget, and let us
          help you take your marketing to the next level."
    packages={marketingPackages}
  />
);
