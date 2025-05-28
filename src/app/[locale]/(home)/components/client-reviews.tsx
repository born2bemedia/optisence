'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ClientReviews = () => {
  const t = useTranslations('home.clientReviews');

  const reviews = useMemo(
    () => [
      {
        name: t('reviews.0.name'),
        position: t('reviews.0.position'),
        review: t('reviews.0.review'),
        grade: t('reviews.0.grade'),
      },
      {
        name: t('reviews.1.name'),
        position: t('reviews.1.position'),
        review: t('reviews.1.review'),
        grade: t('reviews.1.grade'),
      },
      {
        name: t('reviews.2.name'),
        position: t('reviews.2.position'),
        review: t('reviews.2.review'),
        grade: t('reviews.2.grade'),
      },
    ],
    [t],
  );

  return (
    <section className="flex flex-col items-center gap-12 px-[100px] pt-[100px] pb-[145px] max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col items-center gap-3 text-center">
        <Title as="h2">{t('title')}</Title>
        <Text className="w-[70%] max-sm:w-full">{t('description')}</Text>
      </FadeIn>
      <FadeIn className="flex items-center gap-8 max-xl:flex-col">
        {reviews.map((review, i) => (
          <ReviewCard key={review.name} main={i === 1} {...review} />
        ))}
      </FadeIn>
      <Link href="/our-work">
        <Button textAlign="center">
          {t('btnLabel')} <ArrowRightIcon />
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
  grade: string;
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
          grade === '5' ? '/images/home/5-star.svg' : '/images/home/4-star.svg'
        }
        alt="rating"
        width={164}
        height={28}
      />
    </article>
  );
};
