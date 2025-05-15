'use client';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const reviews = [
  {
    name: 'John H.',
    position: 'CEO of Tech Innovators',
    review:
      'Optisence completely transformed our marketing strategy. Their team delivered data-driven insights that optimized our operations and increased our brand visibility. They are true experts in their field!',
    grade: 5,
  },
  {
    name: 'Lisa M.',
    position: 'Director of Operations at Global Enterprises',
    review:
      'Working with Optisence was a game-changer for our company. Their corporate strategy guidance helped us navigate a tough market and make the right decisions for long-term success. I highly recommend them.',
    grade: 5,
  },
  {
    name: 'Tom P.',
    position: 'Founder of Startup Co.',
    review:
      'Optisence helped us streamline our marketing processes, and while we’re seeing results, we feel there’s still potential for more optimization. Looking forward to continuing our partnership',
    grade: 4,
  },
];

export const ClientReviews = () => {
  return (
    <section className="flex flex-col items-center gap-12 px-[100px] pt-[100px] pb-[145px] max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col items-center gap-3 text-center">
        <Title as="h2">Client Reviews</Title>
        <Text className="w-[70%] max-sm:w-full">
          Our clients’ satisfaction speaks volumes about the quality of our
          services. Here’s what some of them have to say about working with
          Optisence:
        </Text>
      </FadeIn>
      <FadeIn className="flex items-center gap-8 max-xl:flex-col">
        {reviews.map((review, i) => (
          <ReviewCard key={review.name} main={i === 1} {...review} />
        ))}
      </FadeIn>
      <Link href="/our-work">
        <Button textAlign="center">
          Read More Reviews <ArrowRightIcon />
        </Button>
      </Link>
    </section>
  );
};

const ReviewCard = ({
  grade,
  name,
  position,
  review,
  main,
}: {
  name: string;
  position: string;
  review: string;
  grade: number;
  main: boolean;
}) => {
  return (
    <article
      className={cn(
        'flex flex-col justify-between rounded-4xl bg-[#F5F5F5] p-8',
        main ? 'h-[350px]' : 'h-[315px]',
      )}
    >
      <section>
        <Text size="3xl">{name}</Text>
        <Text>{position}</Text>
      </section>
      <Text italic>&quot;{review}&quot;</Text>
      <Image
        src={
          grade === 5 ? '/images/home/5-star.svg' : '/images/home/4-star.svg'
        }
        alt="rating"
        width={164}
        height={28}
      />
    </article>
  );
};
