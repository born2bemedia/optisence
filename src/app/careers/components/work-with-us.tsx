'use client';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const cards = [
  {
    title: 'Bold Thinking, Grounded in Reality',
    desc: "At Optisence, ideas matter — but outcomes matter more. You'll work on high-impact projects that challenge assumptions, shift industries, and spark meaningful change.",
  },
  {
    title: 'Growth Is the Only Direction',
    desc: "Whether you're just starting out or scaling your career to new heights, we offer real opportunities for development, ownership, and leadership. No corporate fluff. Just clear paths forward.",
  },
  {
    title: 'Collaboration Over Competition',
    desc: 'We believe the best strategies are co-created. That’s why we hire listeners, challengers, builders — and give them the freedom to think, create, and lead.',
  },
  {
    title: 'Work That Feels Good',
    desc: 'Flexible work? Always. Autonomy? Absolutely. Well-being, purpose, and inclusion? Non-negotiable. Because when people thrive, companies do too.',
  },
];

export const WorkWithUs = () => {
  return (
    <section className="flex flex-col gap-20 px-[100px] py-[80px] max-md:gap-8 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col gap-3 text-center max-md:gap-6">
        <Title as="h2" size="xl" weight={600}>
          Why Work With Us?
        </Title>
        <Text>Since strategy is only as good as the team behind it.</Text>
      </FadeIn>
      <FadeIn className="flex gap-5 max-md:flex-col">
        {cards.map(card => (
          <Card key={card.title} {...card} />
        ))}
      </FadeIn>
    </section>
  );
};

const Card = ({ title, desc }: { title: string; desc: string }) => (
  <article className="group hover:bg-primary flex h-auto w-full flex-col gap-5 rounded-4xl bg-[#F5F5F5] p-8 transition duration-300 ease-in-out">
    <Text
      color="dark"
      size="3xl"
      weight={600}
      className="group-hover:text-white"
    >
      {title}
    </Text>
    <Text className="mt-auto group-hover:text-white">{desc}</Text>
  </article>
);
