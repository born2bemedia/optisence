'use client';

import Image from 'next/image';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OptisenceEcosystem = () => {
  return (
    <section className="flex flex-col gap-20 px-[100px] py-20 max-sm:gap-6 max-sm:px-4 max-sm:py-8">
      <FadeIn className="text-center">
        <Title as="h2" weight={600} className="leading-[120%]">
          <span className="text-primary">The Optisence Ecosystem:</span>
          <br /> A Network for Growth
        </Title>
      </FadeIn>
      <FadeIn className="flex flex-col gap-5">
        <section className="flex gap-5 max-xl:flex-col">
          <Card
            title="Global Partnerships"
            text="Our international network brings you the best minds in technology, data analytics, and business development."
            className="w-[30%] max-lg:w-full"
          />
          <Image
            className="h-[191px] w-[60%] rounded-4xl object-cover max-xl:h-[300px] max-lg:h-[191px] max-lg:w-full"
            src="/images/who-we-are/3.jpg"
            alt="who-we-are"
            width={596}
            height={191}
            unoptimized
          />
          <Card
            title="Cutting-Edge Tools "
            text="We integrate the latest technologies, from AI to big data analytics, to ensure the best outcomes for your business."
            className="w-[30%] max-lg:w-full"
          />
        </section>
        <section className="flex gap-5 max-xl:flex-col">
          <Card
            title="Collaborative Growth"
            text="We ensure you’re always ahead of the curve by tapping into our vast network, providing access to the most relevant resources and expertise."
          />
          <Card
            title="Access to Industry Experts"
            text="Our ecosystem connects you with leading specialists across multiple sectors, ensuring your business benefits from the strategies tailored to your needs."
          />
        </section>
      </FadeIn>
    </section>
  );
};

const Card = ({
  text,
  title,
  className,
}: {
  title: string;
  text: string;
  className?: string;
}) => (
  <article
    className={cn(
      'flex flex-col gap-5 rounded-4xl bg-[#F5F5F5] p-8',
      className,
    )}
  >
    <Text size="2xl" weight={600} color="dark">
      {title}
    </Text>
    <Text>{text}</Text>
  </article>
);
