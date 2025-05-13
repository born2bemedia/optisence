'use client';

import { useRequestDialogStore } from '@/features/request-form/services';

import { LinesSection } from '@/shared/ui/components/lines-section';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';

export const NextSteps = () => {
  const { setOpen } = useRequestDialogStore();

  return (
    <LinesSection
      title={
        <>
          Next Steps: Ready to Take <br />
          Your Business to New Heights?
        </>
      }
      text="The Optisence crew is happy to help you navigate complex business landscapes and achieve your corporate goals. Whether you’re looking to optimize your existing strategy or transform your entire approach, we have the expertise to guide you. Get started today, and create a corporate strategy that works for your business!"
      bottomContent={
        <Button onClick={() => setOpen(true)}>
          Request a Consultation <ArrowRightIcon />
        </Button>
      }
    />
  );
};
