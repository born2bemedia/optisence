'use client';

import dynamic from 'next/dynamic';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const IndustriesSlider = dynamic(
  () => import('./industries-slider').then(mod => mod.IndustriesSlider),
  {
    ssr: false,
  },
);

export const Industries = () => {
  return (
    <section className="flex flex-col px-[100px] pt-[100px] pb-[145px] max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col items-center gap-3 text-center">
        <Title>Industries We Shape</Title>
        <Text>
          Our expertise spans multiple industries, offering tailored solutions
          for your unique challenges. From tech <br /> startups to established
          enterprises in diverse sectors, Optisence is committed to driving
          success.
        </Text>
      </FadeIn>
      <FadeIn>
        <IndustriesSlider />
      </FadeIn>
    </section>
  );
};
