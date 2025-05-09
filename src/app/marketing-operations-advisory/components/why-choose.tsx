'use client';

import Image from 'next/image';

import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const WhyChoose = () => {
  return (
    <section className="flex flex-col gap-20 px-[100px] py-20 max-sm:gap-6 max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col gap-3 text-center">
        <Title as="h2" weight={600} className="leading-[120%]">
          <span className="text-primary">Why Choose Optisence</span>
          <br /> for Marketing Operations Advisory
        </Title>
        <Text>
          Our approach is always focused on results. Here’s a snapshot of the
          impact we’ve had on businesses we’ve worked with:
        </Text>
      </FadeIn>
      <FadeIn className="flex flex-col gap-5">
        <section className="flex gap-5 max-xl:flex-col">
          <Card
            title="Tailored Solutions"
            text="We don’t offer one-size-fits-all solutions. Our services are designed to meet your needs, regardless of your business size or industry."
            className="w-[30%] max-lg:w-full"
          />
          <Image
            className="h-[191px] w-[60%] rounded-4xl object-cover max-xl:h-[300px] max-lg:h-[191px] max-lg:w-full"
            src="/images/marketing-operations/1.png"
            alt="why choose"
            width={596}
            height={191}
            unoptimized
          />
          <Card
            title="Proven Results"
            text="Our approach is built around data-driven insights and measurable outcomes, ensuring that every decision drives success for your business."
            className="w-[30%] max-lg:w-full"
          />
        </section>
        <section className="flex gap-5 max-xl:flex-col">
          <Card
            title="Cutting-Edge Technology"
            text="We leverage the latest technologies and marketing automation tools to make your operations more efficient and scalable."
          />
          <Card
            title="Experienced Team"
            text="Our team of experts brings deep industry knowledge and hands-on experience to ensure your marketing operations are optimized for growth."
          />
          <Card
            title="Long-Term Partnership"
            text="We believe in building long-term relationships with our clients. We’re with you every step of the way, helping you adapt to market changes and grow your business sustainably."
          />
        </section>
      </FadeIn>
    </section>
  );
};

const Card = ({
  text,
  title,
  className,
}: {
  title: string;
  text: string;
  className?: string;
}) => (
  <article
    className={cn(
      'flex flex-col gap-5 rounded-4xl bg-[#F5F5F5] p-8',
      className,
    )}
  >
    <Text size="2xl" weight={600} color="dark">
      {title}
    </Text>
    <Text>{text}</Text>
  </article>
);
