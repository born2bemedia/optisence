'use client';

import type { JSX } from 'react';
import Image from 'next/image';

import { FadeIn } from '@/shared/ui/components/fade-in';
import {
  CupIcon,
  GoalIcon,
  PieIcon,
  PuzzleIcon,
} from '@/shared/ui/icons/orange';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const reasons = [
  {
    icon: <GoalIcon />,
    title: 'Expertise in Both Marketing and Strategy',
    text: 'We offer a balanced approach to both Marketing Operations and Corporate Strategy, providing comprehensive solutions that drive success across all facets of your business.',
  },
  {
    icon: <PieIcon />,
    title: 'Data-Driven Insights',
    text: 'Our recommendations are grounded in robust data analytics, ensuring that each decision is based on solid information and delivers measurable results.',
  },
  {
    icon: <PuzzleIcon />,
    title: 'Customized Solutions',
    text: 'We understand that each business is unique, so we tailor our consulting services to meet your specific needs and provide personalized strategies for success.',
  },
  {
    icon: <CupIcon />,
    title: 'Proven Track Record',
    text: 'With years of experience, we have helped countless businesses grow, optimize operations, and achieve sustainable success with long-term, strategic solutions.',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="flex flex-col gap-24 px-[100px] pt-[100px] pb-[145px] max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col items-center justify-center gap-3 text-center">
        <Title as="h2">Why Choose Us</Title>
        <Text color="foreground">
          Optisence stands out for its deep industry knowledge, innovative
          approach, and proven track <br /> record of success. Here’s why
          companies partner with us:
        </Text>
      </FadeIn>
      <FadeIn className="flex gap-12 max-xl:flex-col-reverse">
        <section className="flex flex-col gap-12">
          {reasons.map(r => (
            <Card key={r.title} {...r} />
          ))}
        </section>
        <Image
          className="rounded-[48px] object-cover max-xl:mx-auto"
          src="/images/home/why-choose.jpg"
          alt="woomen"
          height={596}
          width={596}
          unoptimized
        />
      </FadeIn>
    </section>
  );
};

const Card = ({
  icon,
  text,
  title,
}: {
  icon: JSX.Element;
  title: string;
  text: string;
}) => {
  return (
    <article className="flex items-center gap-6 max-sm:flex-col max-sm:items-start">
      <span className="flex-1">{icon}</span>
      <section className="flex flex-col gap-3">
        <Text size="xl" color="dark" weight={500}>
          {title}
        </Text>
        <Text>{text}</Text>
      </section>
    </article>
  );
};
