'use client';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const stats = [
  {
    percent: 150,
    text: 'Increase in Lead Conversions for a tech startup after implementing marketing automation.',
  },
  {
    percent: 30,
    text: 'Improvement in Marketing Efficiency by optimizing workflows and processes for a global retailer.',
  },
  {
    percent: 100,
    text: 'Client Retention Rate with businesses after completing comprehensive performance measurement and marketing optimization projects.',
  },
  {
    percent: 200,
    text: 'Growth in Social Media Engagement after executing a tailored social media strategy for a B2B client.',
  },
];

export const HowWeHelp = () => {
  return (
    <section className="flex flex-col gap-20 px-[100px] py-20 max-sm:gap-6 max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col gap-3 text-center">
        <Title as="h2" size="xl" className="leading-[120%]">
          <span className="text-primary">How We Help Our Clients</span>
          <br /> in Numbers
        </Title>
        <Text>
          Our approach is always focused on results. Here’s a snapshot of the
          impact we’ve had on businesses we’ve worked with:
        </Text>
      </FadeIn>
      <section className="flex flex-col gap-8 max-sm:gap-6">
        <FadeIn className="flex gap-5 max-lg:flex-col">
          {stats.map(item => (
            <StatCard key={item.text} {...item} />
          ))}
        </FadeIn>
        <FadeIn className="flex items-start justify-between gap-3 max-lg:flex-col max-lg:items-center max-lg:text-center">
          <Text className="w-[70%] max-lg:w-full">
            These numbers highlight just a few of the measurable successes we’ve
            achieved for our clients, demonstrating how we help businesses grow,
            optimize, and succeed.
          </Text>
          <Button>
            Fields We Impact <ArrowRightIcon />
          </Button>
        </FadeIn>
      </section>
    </section>
  );
};

const StatCard = ({ percent, text }: { percent: number; text: string }) => {
  return (
    <article className="group hover:bg-primary flex flex-1 flex-col gap-3 rounded-4xl bg-[#F5F5F5] p-8 transition-all duration-300">
      <Text
        color="dark"
        weight={600}
        className="text-[52px] group-hover:text-white"
      >
        {percent}%
      </Text>
      <Text className="group-hover:text-white">{text}</Text>
    </article>
  );
};
