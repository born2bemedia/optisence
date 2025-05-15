'use client';

import type { JSX } from 'react';

import { FadeIn } from '@/shared/ui/components/fade-in';
import {
  CaseIcon,
  HardDrivesIcon,
  HomeWorkIcon,
  ProgressionIcon,
  StopIcon,
} from '@/shared/ui/icons/orange';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const items = [
  {
    title: 'Diversity Drives Us',
    description:
      'Different backgrounds, voices, and perspectives make us better. Full stop.',
    icon: HardDrivesIcon,
  },
  {
    title: 'Learning That Doesn’t Stop',
    description:
      'Paid certifications, mentorship, workshops, and growth paths tailored to you.',
    icon: StopIcon,
  },
  {
    title: 'Work-Life Integration',
    description:
      'Generous PTO, mental health support, no-questions-asked personal time.',
    icon: CaseIcon,
  },
  {
    title: 'Work Anywhere, Grow Everywhere',
    description:
      'Flexible remote/hybrid culture rooted in trust, autonomy, and performance.',
    icon: HomeWorkIcon,
  },
  {
    title: 'Clear Paths, Real Progress',
    description:
      'Transparent reviews, career roadmaps, and leadership that listens.',
    icon: ProgressionIcon,
  },
];

export const WhatYouGet = () => {
  return (
    <section className="flex flex-col gap-20 px-[100px] pt-[80px] pb-[100px] max-md:gap-8 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col gap-3 text-center max-md:gap-6">
        <Title as="h2" size="xl" weight={600}>
          What You Get
        </Title>
        <Text>Since strategy is only as good as the team behind it.</Text>
      </FadeIn>
      <section className="flex flex-col gap-5">
        <FadeIn className="flex gap-5 max-md:flex-col">
          {items.slice(0, 3).map(item => (
            <Card key={item.title} {...item} />
          ))}
        </FadeIn>
        <FadeIn className="flex gap-5 max-md:flex-col">
          {items.slice(3, 5).map(item => (
            <Card key={item.title} {...item} />
          ))}
        </FadeIn>
      </section>
    </section>
  );
};

const Card = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: () => JSX.Element;
}) => (
  <article className="flex w-full flex-col gap-5 rounded-4xl bg-[#F5F5F5] p-8">
    <section className="flex items-center gap-3">
      <Icon />
      <Text color="dark" size="2xl" weight={600}>
        {title}
      </Text>
    </section>
    <Text className="mt-auto">{description}</Text>
  </article>
);
