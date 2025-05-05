'use client';

import Image from 'next/image';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const items = [
  {
    title: 'Careers at Optisence',
    desc: 'Join Optisence and shape the future of business and marketing with a creative, innovative, and collaborative team.',
    btnText: 'Browse Our Career Opportunities',
    imgUrl: '/images/home/banner-1.jpg',
  },
  {
    title: 'Media Center',
    desc: 'The Optisence Media Center offers expert insights and solutions on the latest trends in business and marketing.',
    btnText: 'Visit Our Media Center',
    imgUrl: '/images/home/banner-2.jpg',
  },
  {
    title: 'Contact Us',
    desc: 'Contact us today for a consultation on marketing optimization or corporate strategy to drive your business transformation.',
    btnText: 'Get in Touch',
    imgUrl: '/images/home/banner-3.jpg',
  },
];

export const Banners = () => {
  return (
    <section className="flex flex-col gap-8 px-[100px] pt-[100px] pb-[145px] max-sm:px-4 max-sm:py-8">
      {items.slice(0, 1).map(item => (
        <Card key={item.title} special {...item} />
      ))}
      <section className="flex gap-8 max-sm:flex-col">
        {items.slice(1, 3).map(item => (
          <Card key={item.title} {...item} />
        ))}
      </section>
    </section>
  );
};

const Card = ({
  btnText,
  desc,
  imgUrl,
  title,
  special = false,
}: {
  title: string;
  desc: string;
  btnText: string;
  imgUrl: string;
  special?: boolean;
}) => {
  return (
    <FadeIn
      className={cn(
        'relative flex flex-col items-center gap-12 overflow-hidden p-12 text-center max-sm:h-[400px] max-sm:justify-between max-sm:p-4',
        special ? 'px-12 py-24' : 'p-12',
      )}
    >
      <div className="z-30 flex flex-col items-center gap-3">
        <Title as="h3" color="light">
          {title}
        </Title>
        <Text className={cn('text-white/80', special && 'w-7/10')}>{desc}</Text>
      </div>
      <Button className="z-30">
        {btnText} <ArrowRightIcon />
      </Button>
      <div className="absolute inset-0 z-10 rounded-4xl bg-[linear-gradient(180deg,rgba(12,3,1,0.9)_31.07%,rgba(12,3,1,0.36)_100%)]" />
      <Image
        className="rounded-4xl object-cover"
        src={imgUrl}
        alt="bg"
        fill
        unoptimized
      />
    </FadeIn>
  );
};
