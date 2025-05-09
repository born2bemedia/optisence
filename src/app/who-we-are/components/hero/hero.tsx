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
        st.bg,
        'flex h-[650px] gap-8 p-[100px] max-sm:h-[600px] max-sm:flex-col max-sm:justify-center max-sm:gap-3 max-sm:px-4 max-sm:py-8',
      )}
    >
      <FadeIn>
        <Title color="light" className="w-[60%] max-sm:w-full">
          Who We Are: Shaping Your Business Success Through Expertise and
          Innovation
        </Title>
      </FadeIn>
      <FadeIn className="mt-auto flex w-[40%] flex-col gap-8 max-sm:mt-0 max-sm:w-full">
        <Text color="light">
          We offer innovative consulting services that empower businesses to
          navigate complex challenges. Our strategies are tailored to help
          companies achieve strategic growth, operational excellence, and
          sustained success. Explore who we are, our journey, our mindset, and
          how we can help your business thrive in a constantly changing market
          landscape.
        </Text>
        <Link href="/contact-us" className="ml-auto">
          <Button>
            Get in Touch Today <ArrowRightIcon />
          </Button>
        </Link>
      </FadeIn>
    </section>
  );
};
