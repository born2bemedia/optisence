'use client';

import Image from 'next/image';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const steps = [
  {
    title: 'Application Review',
    text: 'Tell us who you are and what excites you.',
  },
  {
    title: 'Intro Call',
    text: 'Let’s talk about vision, goals, and vibes.',
  },
  {
    title: 'Skill Showcase',
    text: 'We’ll give you something thoughtful (never generic) to solve or present.',
  },
  {
    title: 'Final Interview',
    text: 'Meet the team, ask us anything.',
  },
  {
    title: 'Offer & Onboarding',
    text: 'If we both feel it — we move fast.',
  },
];

export const HiringProcess = () => {
  return (
    <section className="flex flex-col gap-20 px-[100px] py-[80px] max-md:gap-8 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col gap-3 text-center max-md:gap-6">
        <Title as="h2" size="xl" weight={600}>
          Our Hiring Process
        </Title>
        <Text>We keep it real — and respectful.</Text>
      </FadeIn>
      <FadeIn className="flex gap-12 max-md:flex-col max-md:gap-8">
        <section className="flex w-1/2 flex-col gap-8 max-md:w-full">
          {steps.map((item, i) => (
            <Card key={item.title} number={++i} {...item} />
          ))}
        </section>
        <section className="flex w-1/2 flex-col gap-5 max-md:w-full">
          <Image
            className="h-[181px] w-full rounded-4xl object-cover"
            src="/images/careers/1.jpg"
            alt="1"
            width={500}
            height={181}
            unoptimized
          />
          <Image
            className="h-[181px] w-full rounded-4xl object-cover"
            src="/images/careers/2.jpg"
            alt="2"
            width={500}
            height={181}
            unoptimized
          />
          <Text>
            <span className="text-dark font-medium">Total time?</span> Usually
            under 2 weeks.
          </Text>
        </section>
      </FadeIn>
    </section>
  );
};

const Card = ({
  title,
  text,
  number,
}: {
  title: string;
  text: string;
  number: number;
}) => (
  <article className="flex items-center gap-6">
    <span className="text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgb(255_87_45_/_15%)] text-2xl font-medium">
      0{number}
    </span>
    <section className="flex flex-col gap-3">
      <Text color="dark" size="xl" weight={600}>
        {title}
      </Text>
      <Text>{text}</Text>
    </section>
  </article>
);
