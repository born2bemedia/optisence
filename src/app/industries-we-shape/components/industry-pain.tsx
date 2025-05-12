'use client';

import Image from 'next/image';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { List } from '@/shared/ui/components/list';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const IndustryPain = () => {
  return (
    <section className="flex flex-col gap-20 px-[100px] pt-[80px] pb-[100px] max-md:gap-6 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col items-center gap-3 text-center max-md:gap-6">
        <Title as="h2" size="xl" weight={600} className="leading-[120%]">
          <span className="text-primary">From Industry Pain</span>
          <br /> to Competitive Edge
        </Title>
        <section className="mx-auto flex w-[60%] flex-col gap-5 max-xl:w-full">
          <Text color="dark">We Start Where the Pain Is Loudest.</Text>
          <Text>
            Every industry has its pressure points — legacy systems, shifting
            regulations, demanding customers, sluggish tech stacks. We don’t
            skirt around them. We zero in, dissect the complexity, and design
            smarter systems that move faster, cost less, and deliver more.
          </Text>
        </section>
      </FadeIn>
      <FadeIn className="flex gap-5 max-xl:flex-col max-md:gap-6">
        <WhatWeFix />
        <Image
          className="h-[200px] w-1/2 rounded-4xl object-cover max-xl:w-full max-md:h-[157px]"
          src="/images/industries-we-shape/1.jpg"
          alt="Industry Pain"
          width={1000}
          height={1000}
        />
      </FadeIn>
    </section>
  );
};

const WhatWeFix = () => (
  <section className="flex w-1/2 flex-col gap-5 rounded-4xl bg-[#F5F5F5] p-8 max-xl:w-full">
    <Text color="dark" weight={600} size="xl">
      We fix what others fear:
    </Text>
    <section className="flex justify-between gap-5">
      <List
        values={[
          'Unscalable operations',
          'Obsolete positioning',
          'Stalled digital transformation',
        ]}
        noHighlight
      />
      <List
        values={[
          'Fragmented customer journeys',
          'Misaligned leadership structures',
        ]}
        noHighlight
      />
    </section>
  </section>
);
