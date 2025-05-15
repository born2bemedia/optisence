'use client';

import Image from 'next/image';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  return (
    <FadeIn className="flex items-center gap-12 px-[100px] pt-[100px] pb-[80px] max-md:flex-col-reverse max-md:items-start max-md:justify-center max-md:gap-3 max-md:px-4 max-md:py-8">
      <Image
        className="h-[338px] w-1/2 rounded-4xl object-cover max-md:h-[180px] max-md:w-full"
        src="/images/careers/hero.jpg"
        alt="hero"
        width={600}
        height={338}
        unoptimized
      />
      <section className="flex w-1/2 flex-col gap-7 max-md:w-full">
        <Title weight={600} className="leading-[120%]">
          Careers at Optisence
        </Title>
        <section className="flex flex-col gap-5 max-md:gap-3">
          <Text color="dark" size="lg" weight={600}>
            Join the Minds Shaping the Future of Business
          </Text>
          <Text>
            At Optisence, we architect growth, amplify brands, and unlock
            business potential. And none of that happens without one thing:
            exceptional people.
            <br />
            <br /> We’re on a mission to redefine business consulting through
            bold thinking, real results, and a culture where ideas win. If
            you’re driven by impact, fueled by curiosity, and ready to shape the
            future alongside clients that refuse to settle — this might be the
            place for you.
          </Text>
          <Text>Let’s do transformative work. Together!</Text>
        </section>
      </section>
    </FadeIn>
  );
};
