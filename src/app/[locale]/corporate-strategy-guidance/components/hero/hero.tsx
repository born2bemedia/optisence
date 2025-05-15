'use client';

import { useRequestDialogStore } from '@/features/request-form/services';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.css';

export const Hero = () => {
  const { setOpen } = useRequestDialogStore();

  return (
    <section
      className={cn(
        st.background,
        'flex h-[480x] items-center justify-between gap-5 p-[100px] max-md:h-[710px] max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-3 max-md:px-4 max-md:py-8 max-md:text-center',
      )}
    >
      <FadeIn className="w-1/2 max-md:w-full">
        <Title weight={600} color="light">
          Take Your Business to New Heights with Expertly Crafted Corporate
          Strategies
        </Title>
      </FadeIn>
      <FadeIn className="flex w-1/2 flex-col justify-between gap-5 max-md:w-full max-md:gap-12">
        <Text color="light">
          At Optisence, we provide comprehensive Corporate Strategy Guidance
          that empowers businesses to stay ahead of the competition. Our experts
          work closely with you to develop and execute strategies that drive
          growth, innovation, and operational excellence. Whether you’re looking
          to expand into new markets, optimize your business model, or lead your
          company through change, we’ve got you covered.
        </Text>
        <Button className="max-md:mx-auto" onClick={() => setOpen(true)}>
          Get Your Free Consultation <ArrowRightIcon />
        </Button>
      </FadeIn>
    </section>
  );
};
