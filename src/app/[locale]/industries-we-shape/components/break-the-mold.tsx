'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const BreakTheMold = () => {
  return (
    <section className="flex flex-col gap-20 px-[100px] pt-[80px] pb-[100px] max-md:gap-6 max-md:px-4 max-md:py-8">
      <FadeIn className="text-center">
        <Title weight={600} size="xl">
          This Is Where We Break the Mold
        </Title>
      </FadeIn>
      <section className="flex flex-col gap-5 max-md:gap-6">
        <section className="flex gap-5 max-lg:flex-col max-md:gap-6">
          <Card
            title="Tech & SaaS"
            description="From seed to Series E, we help tech companies scale without chaos."
            impact="3x faster go-to-market. 150% lift in qualified leads. Fewer silos. More speed."
            className="w-[20%] max-lg:w-full"
          />
          <div className="flex w-[60%] flex-col gap-3 max-lg:w-full max-lg:flex-col">
            <Card
              title="Healthcare"
              description="We make complexity navigable — compliance, workflows, patient journeys, reimagined."
              impact={
                <>
                  .+25% patient satisfaction. <br /> -30% admin friction. <br />
                  Better care, faster delivery.
                </>
              }
              horizontal
            />
            <Card
              title="Education & EdTech"
              description="We turn content into experience and data into student success."
              impact={
                <>
                  +40% enrollments. <br /> +50% engagement. <br /> Smarter
                  learning systems, smarter outcomes.
                </>
              }
              horizontal
            />
          </div>
          <Card
            title="Energy & Utilities"
            description="We build sustainability strategies that don’t just check boxes — they cut carbon and costs."
            impact={
              <>
                -10% emissions. <br /> +30% operational efficiency.
                <br /> ESG with ROI.
              </>
            }
            className="w-[20%] max-lg:w-full"
          />
        </section>
        <section className="flex gap-5 max-lg:flex-col max-md:gap-6">
          <Card
            title="Manufacturing"
            description="We bring Industry 4.0 to life — minus the buzzwords."
            impact={
              <>
                +40% productivity.
                <br /> -25% production lag. <br /> Machines hum. Margins rise.
              </>
            }
          />
          <Card
            title="Telecom"
            description="We help telcos do more than connect — we help them engage, scale, and monetize."
            impact={
              <>
                Impact: +12% ARPU.
                <br /> -18% churn.
                <br /> Signal strong. Strategy stronger.
              </>
            }
          />
          <Card
            title="Retail & E-Com"
            description="We design for customers who swipe fast and expect faster."
            impact={
              <>
                +35% AOV.
                <br /> +20% retention.
                <br /> Zero guesswork.
              </>
            }
          />
          <Card
            title="Finance & Fintech"
            description="We turn regulation into rhythm and risk into leverage."
            impact={
              <>
                -15% fraud.
                <br /> +20% process velocity.
                <br /> Banking, but smarter.
              </>
            }
          />
        </section>
      </section>
    </section>
  );
};

const Card = ({
  description,
  impact,
  title,
  horizontal = false,
  className,
}: {
  title: string;
  description: string;
  impact: ReactNode;
  horizontal?: boolean;
  className?: string;
}) => (
  <FadeIn
    className={cn(
      'group hover:bg-primary flex w-full items-start rounded-4xl bg-[#F5F5F5] p-8 transition duration-300 ease-in-out',
      !horizontal
        ? 'flex-col gap-5 max-md:gap-3'
        : 'gap-8 max-md:flex-col max-md:gap-3',
      className,
    )}
  >
    <section
      className={cn(
        'flex flex-col gap-5 max-md:gap-3',
        horizontal && 'w-1/2 max-md:w-full',
      )}
    >
      <Text
        color="primary"
        weight={600}
        size="2xl"
        className="group-hover:text-white"
      >
        {title}
      </Text>
      <Text className="group-hover:text-white">{description}</Text>
    </section>
    <section
      className={cn(
        'flex w-full',
        !horizontal
          ? 'mt-auto flex-col gap-3'
          : 'w-1/2 gap-8 max-md:w-full max-md:flex-col max-md:gap-3',
      )}
    >
      <Divider
        className={cn(
          'bg-[rgba(24,24,24,0.2)] group-hover:bg-white',
          horizontal ? 'h-auto w-[1px] max-md:h-[1px] max-md:w-full' : 'w-full',
        )}
      />
      <div className="flex flex-col gap-5 max-md:gap-3">
        <Text
          color="dark"
          weight={600}
          size="xl"
          className="group-hover:text-white"
        >
          Example impact:
        </Text>
        <Text className="group-hover:text-white">{impact}</Text>
      </div>
    </section>
  </FadeIn>
);
