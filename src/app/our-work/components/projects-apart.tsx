'use client';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const items = [
  {
    title: 'We don’t offer generic playbooks',
    description: 'we co-create roadmaps built on your reality.',
  },
  {
    title: 'We diagnose before we prescribe',
    description:
      'every solution is rooted in data, context, and competitive analysis.',
  },
  {
    title: 'We don’t just leave you with slides',
    description: 'we help you execute, measure, and evolve.',
  },
];

export const ProjectsApart = () => {
  return (
    <section className="flex flex-col gap-20 px-[100px] py-[80px] max-md:gap-8 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col gap-3 text-center">
        <Title as="h2" size="xl" weight={600}>
          What Sets These Projects Apart?
        </Title>
        <Text>
          Not the logos. Not the industries.
          <br /> But the approach:
        </Text>
      </FadeIn>
      <FadeIn className="flex items-center gap-5 max-md:flex-col max-md:items-start">
        {items.map((item, i) => (
          <Card key={item.title} number={++i} {...item} />
        ))}
      </FadeIn>
    </section>
  );
};

const Card = ({
  description,
  number,
  title,
}: {
  number: number;
  title: string;
  description: string;
}) => (
  <article className="flex w-full items-center gap-6">
    <span className="text-primary bg-primary/15 flex h-12 w-12 shrink-0 items-center justify-center rounded-4xl text-2xl">
      {number}
    </span>
    <Text>
      <span className="text-dark font-medium">{title}</span> — {description}
    </Text>
  </article>
);
