'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useRequestDialogStore } from '@/features/request-form/services';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { CompassIcon, TimerIcon, WebIcon } from '@/shared/ui/icons/orange';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const LookingAhead = () => {
  const t = useTranslations('who-we-are.lookingAhead');
  const { setOpen } = useRequestDialogStore();

  const cards = useMemo(
    () => [
      {
        icon: TimerIcon,
        title: t('items.0.title'),
        text: t('items.0.text'),
      },
      {
        icon: CompassIcon,
        title: t('items.1.title'),
        text: t('items.1.text'),
      },
      {
        icon: WebIcon,
        title: t('items.2.title'),
        text: t('items.2.text'),
      },
    ],
    [t],
  );

  return (
    <section className="flex flex-col gap-20 px-[100px] py-20 max-sm:gap-6 max-sm:px-4 max-sm:py-8">
      <FadeIn className="text-center">
        <Title as="h2" weight={600}>
          <span className="text-primary">{t('title.first')}</span>
          <br /> {t('title.second')}
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
            <Text>{t('description')}</Text>
          </section>
          <Button className="mt-auto" onClick={() => setOpen(true)}>
            {t('btnLabel')} <ArrowRightIcon />
          </Button>
        </section>
        <section className="flex w-1/2 flex-col gap-5 max-lg:w-full">
          {cards.map(card => (
            <Card key={card.title} {...card} />
          ))}
          <section className="hidden max-lg:flex">
            <Button textAlign="center" onClick={() => setOpen(true)} fullWidth>
              {t('btnLabel')} <ArrowRightIcon />
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
