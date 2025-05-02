'use client';

import type { ReactNode } from 'react';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const items = [
  {
    title: 'Marketing Operations Advisory',
    desc: 'Maximize your marketing potential with data-driven insights and optimized processes. Our team will help you streamline operations, improve team performance, and integrate cutting-edge technologies to scale efficiently.',
    keys: [
      'Strategic marketing planning',
      'Marketing automation implementation',
      'Workflow optimization',
      'Customer journey mapping',
      'Performance measurement',
    ],
    type: 'marketing',
  },
  {
    title: 'Corporate Strategy Guidance',
    desc: 'Take your business to new heights with expertly crafted corporate strategies. Optisence provides comprehensive Corporate Strategy Guidance designed to ensure your business stays ahead of the competition.',
    keys: [
      'Business model innovation',
      'Market entry and expansion strategies',
      'Competitive analysis',
      'Change management',
      'Leadership and governance consulting',
    ],
    type: 'corporate',
  },
];

export const ConsultingSolutions = () => {
  return (
    <section className="flex flex-col gap-[92px] px-[100px] pt-[100px] pb-[145px] max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col items-center gap-3 text-center">
        <div className="flex flex-col items-center">
          <Title as="h2">Consulting Solutions for</Title>
          <Title as="h2" color="primary">
            Businesses & Enterprises
          </Title>
        </div>
        <Text className="w-[43%] max-sm:w-full">
          We offer innovative Consulting Solutions that cater to the unique
          needs of your business, no matter its size or scope. Whether you’re a
          startup aiming for rapid growth or an established enterprise seeking
          efficiency, our services are designed to drive measurable results.
        </Text>
      </FadeIn>
      <FadeIn className="flex gap-8 max-sm:flex-col">
        {items.map(item => (
          <Card key={item.title} {...item} />
        ))}
      </FadeIn>
    </section>
  );
};

const Card = ({
  desc,
  keys,
  title,
  type,
}: {
  title: string;
  desc: string;
  keys: string[];
  type: string;
}) => {
  return (
    <article className="flex flex-col justify-between gap-12 rounded-4xl bg-[#F5F5F5] p-8">
      <section className="flex flex-col gap-6">
        <Text size="3xl" color="dark">
          {title}
        </Text>
        <Text>{desc}</Text>
        <Divider className="bg-[#DFDFDF]" />
        <Text color="dark" size="xl">
          Key Offerings
        </Text>
        <section className="flex flex-wrap gap-1.5">
          {keys.map(item => (
            <KeyChip key={item}>{item}</KeyChip>
          ))}
        </section>
      </section>
      <Button textAlign="center" fullWidth>
        {type === 'marketing'
          ? 'Explore Marketing Operations Advisory'
          : 'Discover Corporate Strategy Guidance'}
        <ArrowRightIcon />
      </Button>
    </article>
  );
};

const KeyChip = ({ children }: { children: ReactNode }) => {
  return (
    <span className="w-max rounded-3xl bg-[#DFDFDF] px-3 py-1.5 text-base text-[#181818]">
      {children}
    </span>
  );
};
