'use client';

import Link from 'next/link';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.css';

export const Hero = () => {
  return (
    <section
      className={cn(
        st.background,
        'flex h-[700px] flex-col gap-20 px-[100px] pt-[92px] pb-[120px] max-sm:justify-center max-sm:gap-3 max-sm:px-4 max-sm:py-8',
      )}
    >
      <FadeIn>
        <Title
          color="light"
          weight={600}
          className="w-[76%] leading-[120%] max-xl:w-full"
        >
          Maximize Your Marketing Potential with Data-Driven Insights and
          Optimized Processes
        </Title>
      </FadeIn>
      <FadeIn className="ml-auto flex w-1/2 gap-5 max-xl:w-full max-sm:flex-col max-sm:gap-3">
        <Text color="light" className="w-1/2 max-sm:w-full">
          Our crew specializes in helping businesses unlock their marketing
          potential by streamlining operations, improving team performance, and
          integrating cutting-edge technologies. Our Marketing Operations
          Advisory services are designed to optimize and scale your marketing
          efforts effectively.
        </Text>
        <div className="flex w-1/2 flex-col gap-4 max-sm:w-full">
          <Text color="light">
            By leveraging data-driven insights and innovative strategies, we
            ensure that your marketing processes are efficient and aligned with
            your business goals, enabling sustainable growth.
          </Text>
          <Link href="/contact-us">
            <Button textAlign="center" fullWidth>
              Get in Touch Today
              <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
};
