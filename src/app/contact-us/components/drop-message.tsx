'use client';

import { ContactForm } from '@/features/contact-form/components';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const DropMessage = () => {
  return (
    <section className="flex flex-col gap-12 px-[100px] py-[80px] max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col gap-3 text-center">
        <Title as="h2">Drop Us a Message</Title>
        <Text className="mr-auto ml-auto w-[656px] max-lg:w-full">
          We’d love to hear from you! Fill out the form below, and a member of
          our team will get in touch with you shortly to discuss how we can
          support your business needs:
        </Text>
      </FadeIn>
      <FadeIn>
        <ContactForm />
      </FadeIn>
    </section>
  );
};
