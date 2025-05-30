'use client';

import { useTranslations } from 'next-intl';

import { ContactForm } from '@/features/contact-form/components';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const DropMessage = () => {
  const t = useTranslations('contact.form');

  return (
    <section className="flex flex-col gap-12 px-[100px] py-[80px] max-sm:px-4 max-sm:py-8">
      <FadeIn className="flex flex-col gap-3 text-center">
        <Title as="h2" size="xl" weight={600}>
          {t('title')}
        </Title>
        <Text className="mr-auto ml-auto w-[656px] max-lg:w-full">
          {t('text')}
        </Text>
      </FadeIn>
      <FadeIn>
        <ContactForm />
      </FadeIn>
    </section>
  );
};
