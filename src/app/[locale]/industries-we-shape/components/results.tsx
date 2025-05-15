'use client';

import Image from 'next/image';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const items = [
  {
    title: '+200%',
    description: 'social media engagement for a B2B tech firm',
  },
  {
    imgUrl: '/images/industries-we-shape/2.jpg',
  },
  {
    title: '-30%',
    description: 'delivery cost for a retail logistics client',
  },
  {
    title: '+15%',
    description: 'increase in NPS after telecom CX strategy revamp',
  },
  {
    imgUrl: '/images/industries-we-shape/3.jpg',
  },
  {
    title: '+40%',
    description:
      'internal efficiency in a healthcare system after digital process redesign',
  },
  {
    title: '€5M+',
    description:
      'unlocked from operational waste for a European manufacturing group',
  },
  {
    imgUrl: '/images/industries-we-shape/4.jpg',
  },
];

export const Results = () => {
  return (
    <section className="flex flex-col gap-20 px-[100px] py-[80px] max-md:gap-8 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col gap-3 text-center max-md:gap-6">
        <Title as="h2" size="xl" weight={600} className="leading-[120%]">
          <span className="text-primary">Results.</span> <br /> Or It Didn’t
          Happen.
        </Title>
        <Text>Some of our industry wins:</Text>
      </FadeIn>
      <FadeIn className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {items.map(({ description, imgUrl, title }) =>
          title && description ? (
            <Card key={title} title={title} description={description} />
          ) : (
            <Image
              className="h-full w-full rounded-4xl object-cover max-md:h-[184px]"
              key={imgUrl}
              src={`${imgUrl}`}
              alt="img"
              width={295}
              height={184}
              unoptimized
            />
          ),
        )}
      </FadeIn>
    </section>
  );
};

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <article className="hover:bg-primary group flex w-full flex-col gap-5 rounded-4xl bg-[#F5F5F5] p-8 transition duration-300 ease-in-out">
    <Title as="h3" size="xl" weight={600} className="group-hover:text-white">
      {title}
    </Title>
    <Text className="group-hover:text-white">{description}</Text>
  </article>
);
