'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ThankYouView = () => {
  return (
    <section className="flex flex-col items-center gap-3 text-center">
      <Title size="lg" color="primary">
        Thank You
      </Title>
      <Text>
        Your request has been successfully submitted. Our team of experts is
        currently reviewing your information and will contact you shortly to
        discuss your business needs and provide customized solutions.
      </Text>
    </section>
  );
};
