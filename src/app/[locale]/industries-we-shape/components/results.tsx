'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Results = () => {
  const t = useTranslations('industries-we-shape.results');

  const items = [
    {
      title: t('items.0.title'),
      description: t('items.0.description'),
    },
    {
      imgUrl: '/images/industries-we-shape/2.jpg',
    },
    {
      title: t('items.1.title'),
      description: t('items.1.description'),
    },
    {
      title: t('items.2.title'),
      description: t('items.2.description'),
    },
    {
      imgUrl: '/images/industries-we-shape/3.jpg',
    },
    {
      title: t('items.3.title'),
      description: t('items.3.description'),
    },
    {
      title: t('items.4.title'),
      description: t('items.4.description'),
    },
    {
      imgUrl: '/images/industries-we-shape/4.jpg',
    },
  ];

  return (
    <section className="flex flex-col gap-20 px-[100px] py-[80px] max-md:gap-8 max-md:px-4 max-md:py-8">
      <FadeIn className="flex flex-col gap-3 text-center max-md:gap-6">
        <Title as="h2" size="xl" weight={600} className="leading-[120%]">
          <span className="text-primary">{t('title.first')}</span>
          <br /> {t('title.second')}
        </Title>
        <Text>{t('description')}</Text>
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
