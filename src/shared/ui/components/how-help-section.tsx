import type { ReactNode } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const HowHelpSection = ({
  title,
  description,
  subtitle,
  stats,
}: {
  title: ReactNode;
  description: string;
  subtitle: string;
  stats: { percent: number; text: string }[];
}) => {
  const t = useTranslations('marketingOperations.howWeHelp');

  return (
    <section className="flex flex-col gap-20 px-[100px] py-20 max-sm:gap-6 max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col gap-3 text-center">
        <Title as="h2" size="xl" weight={600} className="leading-[120%]">
          {title}
        </Title>
        <Text>{subtitle}</Text>
      </FadeIn>
      <section className="flex flex-col gap-8 max-sm:gap-6">
        <FadeIn className="flex gap-5 max-lg:flex-col">
          {stats.map(item => (
            <StatCard key={item.text} {...item} />
          ))}
        </FadeIn>
        <FadeIn className="flex items-start justify-between gap-3 max-lg:flex-col max-lg:items-center max-lg:text-center">
          <Text className="w-[70%] max-lg:w-full">{description}</Text>
          <Link href="/industries-we-shape">
            <Button>
              {t('btn')} <ArrowRightIcon />
            </Button>
          </Link>
        </FadeIn>
      </section>
    </section>
  );
};

const StatCard = ({ percent, text }: { percent: number; text: string }) => {
  return (
    <article className="group hover:bg-primary flex flex-1 flex-col gap-3 rounded-4xl bg-[#F5F5F5] p-8 transition-all duration-300">
      <Text
        color="dark"
        weight={600}
        className="text-[52px] group-hover:text-white"
      >
        {percent}%
      </Text>
      <Text className="group-hover:text-white">{text}</Text>
    </article>
  );
};
