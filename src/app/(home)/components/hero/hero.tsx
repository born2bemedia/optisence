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
        'relative flex h-[87vh] flex-col justify-center gap-8 p-[100px] max-lg:h-[70vh] max-lg:px-4 max-lg:py-8 max-sm:items-center max-sm:justify-center max-sm:text-center',
        st.background,
      )}
    >
      <FadeIn className="flex flex-col gap-3.5">
        <Title color="light" className="w-[45%] max-lg:w-full">
          Your Partner for Marketing and Strategy Excellence
        </Title>
        <Text color="ghost" size="lg" className="w-[30%] max-lg:w-full">
          Optisence empowers businesses with expert consulting in marketing
          operations and corporate strategy. We deliver tailored solutions that
          drive growth, enhance efficiency, and create lasting competitive
          advantage.
        </Text>
      </FadeIn>
      <FadeIn>
        <Button
          className="max-sm:w-full max-sm:justify-center"
          onClick={() => setOpen(true)}
        >
          Get Your Free Consultation <ArrowRightIcon />
        </Button>
      </FadeIn>
    </section>
  );
};
