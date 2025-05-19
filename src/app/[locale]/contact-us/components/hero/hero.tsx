'use client';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.css';

export const Hero = () => {
  return (
    <section
      className={cn(
        st.layout,
        'h-[454px] p-[100px] max-sm:h-[600px] max-sm:px-4 max-sm:py-8',
      )}
    >
      <FadeIn className="flex w-2/5 flex-col gap-3 max-[1050px]:w-full max-sm:h-full max-sm:items-center max-sm:justify-center">
        <Title color="light" className="leading-[120%]">
          Let’s Connect and Drive Your Business Forward
        </Title>
        <Text color="light">
          We’re committed to providing tailored solutions that help your
          business thrive. Whether you have a question, need expert advice, or
          want to explore collaboration opportunities, we’re here to assist you
          every step of the way.
        </Text>
      </FadeIn>
    </section>
  );
};
