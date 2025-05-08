'use client';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './header.module.css';

export const Header = () => {
  return (
    <FadeIn className="flex gap-5 px-[100px] pt-[100px] pb-12 max-sm:flex-col max-sm:px-4 max-sm:py-8">
      <section className="w-1/2 max-sm:w-full max-sm:gap-8 max-sm:text-center">
        <Title as="h2" weight={600}>
          Media Center
        </Title>
        <Text>
          Welcome to the Optisence Media Center Hub — a destination for
          forward-thinking business leaders, marketers, and strategists. Here,
          we decode complexity, challenge conventional thinking, and deliver the
          sharpest perspectives on business transformation, operational
          excellence, and sustainable growth.
          <br />
          <br />
          Our content isn&apos;t just about trends — it&apos;s about traction.
          Whether you&apos;re scaling a startup or leading a global enterprise,
          these insights are built to move your business forward. Powered by
          real-world experience and grounded in data, every article is designed
          to help you think boldly, act strategically, and grow intelligently.
          <br />
          <br />
          Explore the ideas driving modern business — and discover how Optisence
          can help you lead the future.
        </Text>
      </section>
      <section
        className={cn(
          st.imgBg,
          'flex w-1/2 flex-col p-8 max-sm:h-[358px] max-sm:w-full max-sm:text-center',
        )}
      >
        <Text className="mt-auto" color="light" weight={600} size="3xl">
          Where Strategy Meets Execution
        </Text>
      </section>
    </FadeIn>
  );
};
