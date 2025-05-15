'use client';

import type { ReactNode } from 'react';
import { useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ConsultingSolutions = () => {
  const t = useTranslations('home.consultingSolutions');

  const items = useMemo(
    () => [
      {
        title: t('items.0.title'),
        desc: t('items.0.description'),
        keys: t('items.0.keys')
          .split(',')
          .map(s => s.trim()),
        type: 'marketing',
      },
      {
        title: t('items.1.title'),
        desc: t('items.1.description'),
        keys: t('items.1.keys')
          .split(',')
          .map(s => s.trim()),
        type: 'corporate',
      },
    ],
    [t],
  );

  return (
    <section className="flex flex-col gap-[92px] px-[100px] pt-[100px] pb-[145px] max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col items-center gap-3 text-center">
        <div className="flex flex-col items-center">
          <Title as="h2" className="leading-[120%]">
            {t('title.first')}
          </Title>
          <Title as="h2" color="primary" className="leading-[120%]">
            {t('title.second')}
          </Title>
        </div>
        <Text className="w-[43%] max-sm:w-full">{t('description')}</Text>
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
      <Link
        href={`/${type === 'marketing' ? 'marketing-operations-advisory' : 'corporate-strategy-guidance'}`}
      >
        <Button textAlign="center" fullWidth>
          {type === 'marketing'
            ? 'Explore Marketing Operations Advisory'
            : 'Discover Corporate Strategy Guidance'}
          <ArrowRightIcon />
        </Button>
      </Link>
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
