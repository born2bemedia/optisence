'use client';

import type { ReactNode } from 'react';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const LinesSection = ({
  title,
  text,
  bottomContent,
}: {
  title: ReactNode;
  text: ReactNode;
  bottomContent?: ReactNode;
}) => {
  return (
    <FadeIn className="relative mx-[100px] mb-[122px] flex flex-col gap-3 overflow-hidden pt-[80px] text-center max-sm:mx-4 max-sm:mb-4 max-sm:px-4 max-sm:py-8 max-sm:pt-4">
      <BackgroundLines />
      <Title as="h2" weight={600} className="leading-[120%]">
        {title}
      </Title>
      <Text className="mx-auto w-[45%] max-sm:w-full">{text}</Text>
      {bottomContent && (
        <section className="z-10 mx-auto mt-[20px]">{bottomContent}</section>
      )}
    </FadeIn>
  );
};

const BackgroundLines = () => {
  return (
    <FadeIn className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
      <LineLg />
      <LineMd />
      <LineSm />
    </FadeIn>
  );
};

const LineSm = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="429"
    height="278"
    viewBox="0 0 429 278"
    fill="none"
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] opacity-[0.03]"
  >
    <circle
      cx="214.497"
      cy="214.316"
      r="213.266"
      stroke="#111111"
      strokeWidth="1.71298"
    />
  </svg>
);

const LineMd = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="605"
    height="367"
    viewBox="0 0 605 367"
    fill="none"
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]"
  >
    <circle
      cx="302.497"
      cy="303.316"
      r="301.484"
      stroke="#111111"
      strokeWidth="1.71298"
    />
  </svg>
);

const LineLg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="777"
    height="410"
    viewBox="0 0 777 410"
    fill="none"
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]"
  >
    <circle
      cx="388.498"
      cy="346.316"
      r="387.133"
      stroke="#111111"
      strokeWidth="1.71298"
    />
  </svg>
);
