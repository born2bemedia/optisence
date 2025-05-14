'use client';

import { JobList } from '@/features/careers/components';
import { jobs } from '@/features/careers/lib';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OpenPositions = () => {
  return (
    <section className="flex flex-col gap-[60px] px-[100px] py-[80px] max-md:gap-8 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col gap-3 text-center max-md:gap-6">
        <Title as="h2" size="xl" weight={600}>
          Open Positions
        </Title>
        <Text className="mx-auto w-1/2 text-center max-md:w-full">
          We’re actively hiring across several key roles. Don’t see your dream
          job listed? Reach out anyway — we’re always looking for standout
          talent.
        </Text>
      </FadeIn>
      <FadeIn className="rounded-4xl bg-[#F5F5F5] p-8 max-md:bg-white max-md:p-0">
        <JobList jobs={jobs} />
      </FadeIn>
    </section>
  );
};
