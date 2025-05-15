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

export const Banners = () => {
  const t = useTranslations('home.banners');

  const items = useMemo(
    () => [
      {
        title: t('0.title'),
        desc: t('0.desc'),
        btnText: t('0.btnText'),
        link: '/careers',
        imgUrl: '/images/home/banner-1.jpg',
      },
      {
        title: t('1.title'),
        desc: t('1.desc'),
        btnText: t('1.btnText'),
        link: '/media-center/5-signs-your-business',
        imgUrl: '/images/home/banner-2.jpg',
      },
      {
        title: t('2.title'),
        desc: t('2.desc'),
        btnText: t('2.btnText'),
        link: '/contact-us',
        imgUrl: '/images/home/banner-3.jpg',
      },
    ],
    [t],
  );

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
  link,
  special = false,
}: {
  title: string;
  desc: string;
  btnText: string;
  imgUrl: string;
  link: string;
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
      <Link className="z-30" href={link}>
        <Button>
          {btnText} <ArrowRightIcon />
        </Button>
      </Link>
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
