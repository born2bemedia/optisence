'use client';

import Image from 'next/image';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { CompassIcon, TimerIcon, WebIcon } from '@/shared/ui/icons/orange';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const items = [
  {
    icon: TimerIcon,
    title: 'Started with Purpose',
    text: 'Optisence was created to offer businesses actionable solutions that truly empower them to succeed.',
  },
  {
    icon: CompassIcon,
    title: 'Navigated Challenges',
    text: 'Every setback provided valuable insights and helped shape our consulting approach and methodology.',
  },
  {
    icon: WebIcon,
    title: 'Global Expansion',
    text: 'Today, we’re a global consulting firm trusted by companies worldwide for their marketing and business strategy needs.',
  },
];

export const OurJourney = () => {
  return (
    <section className="px-[100px] pt-[80px] pb-[122px] max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex justify-center gap-8 text-center">
        <Title as="h2" weight={600} className="leading-[120%]">
          <span className="text-primary">Our Journey:</span> <br />
          From Vision to Reality
        </Title>
      </FadeIn>
      <PictureSection />
      <JourneySection />
    </section>
  );
};

const PictureSection = () => (
  <FadeIn className="mt-10 flex items-center gap-5 max-sm:mt-6 max-sm:flex-col max-sm:items-start max-sm:gap-6">
    <section className="flex w-1/2 flex-col gap-5 max-sm:w-full max-sm:gap-3">
      <Text>
        Optisence began with a simple but powerful vision: to create a
        consulting firm that didn’t just provide solutions but empowered
        businesses to rethink their entire approach to strategy and marketing.
        We started small, but our vision was always global.
      </Text>
      <Text>
        We have encountered various challenges along the way, each serving as an
        opportunity to innovate and continuously refine our approach. Driven by
        dedication, a client-focused mindset, and a commitment to excellence,
        we’ve cultivated deep expertise and established ourselves as a reliable
        partner. Today, we help businesses transform operations, elevate
        strategies, and achieve sustainable growth.
      </Text>
    </section>
    <Image
      className="h-[210px] w-1/2 rounded-4xl object-cover max-sm:w-full"
      src="/images/who-we-are/1.jpg"
      alt="Our Journey"
      width={715}
      height={210}
      unoptimized
    />
  </FadeIn>
);

const JourneySection = () => {
  return (
    <FadeIn className="mt-10 flex gap-5 max-sm:mt-6 max-sm:flex-col">
      {items.map(({ icon: Icon, text, title }) => (
        <article
          key={title}
          className="flex flex-col gap-3 rounded-4xl bg-[#F5F5F5] p-8"
        >
          <Icon />
          <div className="mt-auto flex flex-col gap-5">
            <Text size="3xl" color="dark" weight={600}>
              {title}
            </Text>
            <Text>{text}</Text>
          </div>
        </article>
      ))}
    </FadeIn>
  );
};
