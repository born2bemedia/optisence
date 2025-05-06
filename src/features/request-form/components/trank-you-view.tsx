'use client';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { useRequestDialogStore } from '../services';

export const ThankYouView = () => {
  const { setOpen } = useRequestDialogStore();

  return (
    <section className="flex flex-col items-center gap-6 text-center">
      <Title size="lg">Thank You</Title>
      <Text>
        Thank you for taking the time to provide your information. We are
        excited to collaborate with you and take the first step toward achieving
        your business goals. Expect to hear from us soon!
      </Text>
      <Button textAlign="center" onClick={() => setOpen(false)} fullWidth>
        Continue
      </Button>
    </section>
  );
};
