'use client';

import Image from 'next/image';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { PrimitiveCard } from '@/shared/ui/components/primitive-card';
import { Url } from '@/shared/ui/components/url';
import {
  FacebookOrangeIcon,
  InstagramOrangeIcon,
  XOrangeIcon,
} from '@/shared/ui/icons/socials';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const StayConnected = () => {
  return (
    <section className="flex flex-col gap-20 px-[100px] py-[80px] max-sm:gap-12 max-sm:px-4 max-sm:py-8">
      <section className="flex flex-col gap-3 text-center">
        <FadeIn className="flex flex-col text-center">
          <Title size="xl" as="h2" weight={600} className="leading-[120%]">
            Stay Connected with Us
          </Title>
          <Title
            size="xl"
            color="primary"
            as="h2"
            weight={600}
            className="leading-[120%]"
          >
            on Social Media
          </Title>
        </FadeIn>
        <FadeIn>
          <Text className="mr-auto ml-auto w-[656px] max-lg:w-full">
            For the latest updates, industry news, and helpful tips to grow your
            business, be sure to follow us on our social channels:
          </Text>
        </FadeIn>
      </section>
      <FadeIn className="flex gap-5 max-lg:flex-col">
        <PrimitiveCard title="Facebook" icon={<FacebookOrangeIcon />}>
          <Url value="#" placeholder="Insert Link" />
        </PrimitiveCard>
        <PrimitiveCard title="Instagram" icon={<InstagramOrangeIcon />}>
          <Url value="#" placeholder="Insert Link" />
        </PrimitiveCard>
        <GirlCard />
        <PrimitiveCard title="Twitter" icon={<XOrangeIcon />}>
          <Url value="#" placeholder="Insert Link" />
        </PrimitiveCard>
      </FadeIn>
    </section>
  );
};

const GirlCard = () => (
  <section className="relative h-auto w-full">
    <Image
      className="shrink-0 rounded-4xl object-cover"
      src="/images/contact-us/girl.jpg"
      alt="girl-img"
      unoptimized
      fill
    />
  </section>
);
