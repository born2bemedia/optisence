'use client';

import Link from 'next/link';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { PrimitiveCard } from '@/shared/ui/components/primitive-card';
import { Url } from '@/shared/ui/components/url';
import {
  BookIcon,
  LocationIcon,
  MessageIcon,
  PhoneIcon,
} from '@/shared/ui/icons/orange';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const HowReachUs = () => {
  return (
    <section className="max-sm:gap-12- flex flex-col gap-20 px-[80px] py-[100px] max-sm:px-8 max-sm:py-4">
      <FadeIn className="mr-auto ml-auto flex w-[656px] flex-col gap-3 text-center max-lg:w-full">
        <Title size="xl" as="h2" weight={600}>
          How to Reach Us
        </Title>
        <Text>
          We are always ready to discuss your business needs and provide
          personalized solutions. You can get in touch with us through the
          following contact points:
        </Text>
      </FadeIn>
      <section className="flex flex-col gap-5">
        <FadeIn className="flex gap-5 max-sm:flex-col">
          <PrimitiveCard title="Office address" icon={<LocationIcon />}>
            <Text>
              Office 706, 7th Floor, 134 Bree Street, Cape Town City Centre,
              Cape Town, Western Cape, 8000, South Africa
            </Text>
          </PrimitiveCard>
          <PrimitiveCard title="Registered address" icon={<BookIcon />}>
            <Text>
              134 Bree Street, Cape Town City Centre, Cape Town, Western Cape,
              8000
            </Text>
          </PrimitiveCard>
        </FadeIn>
        <FadeIn className="flex gap-5 max-sm:flex-col">
          <PrimitiveCard title="Email" icon={<MessageIcon />}>
            <Url
              value="mailto:info@optisence.com"
              placeholder="info@optisence.com"
            />
          </PrimitiveCard>
          <PrimitiveCard title="Phone" icon={<PhoneIcon />}>
            <Link href="tel:+000000000000">+ 00 000 000 00 00</Link>
          </PrimitiveCard>
        </FadeIn>
      </section>
    </section>
  );
};
