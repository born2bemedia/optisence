'use client';

import { ReadyPackages } from '@/features/package/components';
import { strategyPackages } from '@/features/package/lib';

export const ReadyStrategyPackages = () => (
  <ReadyPackages
    title={
      <>
        Ready-Made Corporate
        <br /> Strategy Packages
      </>
    }
    description="We understand that businesses face unique challenges at each stage of their growth journey. That’s why we’ve developed four distinct packages to address the specific needs of companies at different points in their strategy development. Whether you're looking to optimize your current operations or redefine your entire strategy, our tailored packages provide the comprehensive support you need for long-term success."
    packages={strategyPackages}
  />
);
