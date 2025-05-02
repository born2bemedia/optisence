'use client';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const cards = [
  {
    title: 'Integrity Beyond Expectations',
    text: 'We don’t discuss integrity — we live it. Our commitment to transparency and honesty is reflected in everything we do. Trust is built on delivering results ethically and responsibly from our internal operations to client relationships. Every decision is rooted in the idea that integrity is the foundation for lasting success.',
  },
  {
    title: 'Collaboration that Fuels Success',
    text: 'Collaboration is our secret weapon. We believe the best results come from working together — within our team and with our clients. We create deep, collaborative partnerships where open communication, shared goals, and collective problem-solving take center stage.',
  },
  {
    title: 'Relentless Innovations',
    text: 'Innovation is at the heart of what we do. We understand that the business world constantly evolves, and we always seek new ways to enhance our strategies and methodologies. Our approach is forward-thinking and data-driven, utilizing the latest technologies, tools, and creative solutions to keep our clients at the cutting edge of their industries. ',
  },
  {
    title: 'Empowering People and Businesses',
    text: 'We believe that empowered people lead to empowered businesses. We aim to give clients the tools, strategies, and knowledge they need to thrive in an ever-changing landscape. We believe in nurturing talent, empowering our team to think creatively, and providing our clients with the insights they need.',
  },
  {
    title: 'Excellence as a Standard',
    text: 'Excellence is not just a goal but a mindset. We push ourselves to exceed expectations and deliver superior outcomes, ensuring that every strategy we craft is of the highest quality. We hold ourselves accountable for exceptional performance from the initial consultation to the final strategy execution.',
  },
  {
    title: 'Sustainability and Responsibility',
    text: 'Sustainability isn’t just a trend — it’s an essential pillar of long-term success. We take a responsible approach to business by integrating sustainable practices into our strategies. Helping clients reduce their environmental footprint or advising on ethical business practices, we strive to create lasting value that benefits our clients and society.',
  },
];

export const OurValues = () => {
  return (
    <section className="flex flex-col gap-16 px-[100px] pt-[100px] pb-[145px] max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col items-center gap-3 text-center">
        <Title as="h2">Our Values</Title>
        <Text className="w-[50%] max-sm:w-full">
          Our values are the cornerstone of everything we do. We believe in more
          than just delivering excellent business strategies; we strive to build
          a culture rooted in authenticity, collaboration, and meaningful
          impact.
        </Text>
      </FadeIn>
      <section className="flex gap-8 max-sm:flex-col">
        <FadeIn className="flex flex-col gap-8">
          {cards.slice(0, 2).map((card, i) => (
            <Card key={card.title} {...card} number={++i} />
          ))}
        </FadeIn>
        <FadeIn className="mt-[30px] flex flex-col gap-8 max-sm:mt-0">
          {cards.slice(2, 4).map((card, i) => (
            <Card key={card.title} {...card} number={++i} />
          ))}
        </FadeIn>
        <FadeIn className="mt-[60px] flex flex-col gap-8 max-sm:mt-0">
          {cards.slice(4, 6).map((card, i) => (
            <Card key={card.title} {...card} number={++i} />
          ))}
        </FadeIn>
      </section>
    </section>
  );
};

const Card = ({
  number,
  text,
  title,
}: {
  title: string;
  text: string;
  number: number;
}) => {
  return (
    <article className="flex flex-col gap-6 rounded-4xl bg-[#F5F5F5] p-8">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,87,45,0.15)] text-2xl text-[#FF572D]">
        0{number}
      </span>
      <Text color="dark" size="2xl" weight={500}>
        {title}
      </Text>
      <Text>{text}</Text>
    </article>
  );
};
