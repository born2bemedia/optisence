'use client';

import Image from 'next/image';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  return (
    <section className="flex flex-col gap-8 px-[100px] pt-[100px] pb-[40px] max-md:gap-3 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col gap-7">
        <Title weight={600}>Our Work</Title>
        <section className="flex flex-col gap-5">
          <Text color="dark" weight={600} size="xl">
            Strategy That Speaks Through Results — Not Just Names
          </Text>
          <section className="flex gap-10">
            <div className="flex w-1/2 flex-col gap-5 max-md:w-full max-md:gap-3">
              <Text>
                At Optisence, we work with forward-thinking companies — from
                fast-scaling startups to global enterprises. Many of our most
                impactful projects are protected by strict non-disclosure
                agreements (NDAs). And that&apos;s fine with us. <br />
                <br />
                Because we believe real strategy doesn&apos;t need a spotlight,
                it needs outcomes.
              </Text>
            </div>
            <Text className="w-1/2 max-md:hidden">
              Below, you&apos;ll find anonymized case stories that reflect the
              real transformations we deliver: complex challenges turned into
              smart systems, scattered teams turned into growth engines, and
              uncertainty turned into clarity. <br />
              <br />
              We don&apos;t drop names. We drop inefficiencies, barriers, and
              outdated thinking.
            </Text>
          </section>
        </section>
      </FadeIn>
      <Image
        className="h-[200px] w-full rounded-4xl object-cover object-top max-md:h-[124px]"
        src="/images/our-work/hero.jpg"
        alt="Hero"
        width={1000}
        height={200}
        unoptimized
      />
      <Text className="hidden max-md:block">
        Below, you&apos;ll find anonymized case stories that reflect the real
        transformations we deliver: complex challenges turned into smart
        systems, scattered teams turned into growth engines, and uncertainty
        turned into clarity. <br />
        <br />
        We don&apos;t drop names.
        <br />
        We drop inefficiencies, barriers, and outdated thinking.
      </Text>
    </section>
  );
};
