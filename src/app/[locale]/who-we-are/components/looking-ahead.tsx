'use client';

import Image from 'next/image';

import { useRequestDialogStore } from '@/features/request-form/services';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { CompassIcon, TimerIcon, WebIcon } from '@/shared/ui/icons/orange';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const cards = [
  {
    icon: TimerIcon,
    title: 'Future-Proofing Businesses',
    text: 'We help our clients stay ahead by embracing innovation and preparing for market shifts.',
  },
  {
    icon: CompassIcon,
    title: 'Sustainability at the Core',
    text: 'We believe in driving long-term value through sustainable business models.',
  },
  {
    icon: WebIcon,
    title: 'Adapting to Change',
    text: 'We ensure our clients adapt quickly to new technologies and changing market conditions.',
  },
];

export const LookingAhead = () => {
  const { setOpen } = useRequestDialogStore();

  return (
    <section className="flex flex-col gap-20 px-[100px] py-20 max-sm:gap-6 max-sm:px-4 max-sm:py-8">
      <FadeIn className="text-center">
        <Title as="h2" weight={600}>
          <span className="text-primary">Looking Ahead:</span>
          <br /> The Future of Business with Optisence
        </Title>
      </FadeIn>
      <FadeIn className="flex gap-5">
        <section className="flex w-1/2 flex-col max-lg:hidden">
          <section className="flex flex-col gap-5">
            <Image
              className="h-[371px] w-full rounded-4xl object-cover"
              src="/images/who-we-are/4.jpg"
              alt="Who We Are"
              width={300}
              height={300}
              unoptimized
            />
            <Text>
              Agility, innovation, and sustainability drive the future of
              business. At Optisence, we are already preparing for the
              challenges and opportunities ahead. We aim to ensure our clients
              are always one step ahead in the market.
            </Text>
          </section>
          <Button className="mt-auto" onClick={() => setOpen(true)}>
            Start Your Journey with Optisence <ArrowRightIcon />
          </Button>
        </section>
        <section className="flex w-1/2 flex-col gap-5 max-lg:w-full">
          {cards.map(card => (
            <Card key={card.title} {...card} />
          ))}
          <section className="hidden max-lg:flex">
            <Button textAlign="center" onClick={() => setOpen(true)} fullWidth>
              Start Your Journey with Optisence <ArrowRightIcon />
            </Button>
          </section>
        </section>
      </FadeIn>
    </section>
  );
};

const Card = ({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) => (
  <article className="flex flex-col gap-5 rounded-4xl bg-[#F5F5F5] p-8">
    <div className="flex items-center gap-3">
      <Icon />
      <Text size="3xl" color="dark" weight={600}>
        {title}
      </Text>
    </div>
    <Text>{text}</Text>
  </article>
);
