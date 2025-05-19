'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { CompassIcon, TimerIcon, WebIcon } from '@/shared/ui/icons/orange';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OurJourney = () => {
  const t = useTranslations('who-we-are.ourJourney');

  return (
    <section className="px-[100px] pt-[80px] pb-[122px] max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex justify-center gap-8 text-center">
        <Title as="h2" weight={600} className="leading-[120%]">
          <span className="text-primary">{t('title.first')}</span> <br />
          {t('title.second')}
        </Title>
      </FadeIn>
      <PictureSection />
      <JourneySection />
    </section>
  );
};

const PictureSection = () => {
  const t = useTranslations('who-we-are.ourJourney');

  return (
    <FadeIn className="mt-10 flex items-center gap-5 max-sm:mt-6 max-sm:flex-col max-sm:items-start max-sm:gap-6">
      <section className="flex w-1/2 flex-col gap-5 max-sm:w-full max-sm:gap-3">
        <Text>{t('description.first')}</Text>
        <Text>{t('description.second')}</Text>
      </section>
      <Image
        className="h-[210px] w-1/2 rounded-4xl object-cover max-sm:w-full"
        src="/images/who-we-are/1.jpg"
        alt="Our Journey"
        width={715}
        height={210}
        unoptimized
      />
    </FadeIn>
  );
};

const JourneySection = () => {
  const t = useTranslations('who-we-are.ourJourney');

  const items = [
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
  ];

  return (
    <FadeIn className="mt-10 flex gap-5 max-sm:mt-6 max-sm:flex-col">
      {items.map(({ icon: Icon, text, title }) => (
        <article
          key={title}
          className="flex flex-col gap-3 rounded-4xl bg-[#F5F5F5] p-8"
        >
          <Icon />
          <div className="mt-auto flex flex-col gap-5">
            <Text size="3xl" color="dark" weight={600}>
              {title}
            </Text>
            <Text>{text}</Text>
          </div>
        </article>
      ))}
    </FadeIn>
  );
};
