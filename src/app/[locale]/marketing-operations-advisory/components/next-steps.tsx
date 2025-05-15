'use client';

import { useRequestDialogStore } from '@/features/request-form/services';

import { LinesSection } from '@/shared/ui/components/lines-section';
import { Button } from '@/shared/ui/kit/button';

export const NextSteps = () => {
  const { setOpen } = useRequestDialogStore();

  return (
    <LinesSection
      title={
        <>
          Next Steps: Ready to Maximize <br /> Your Marketing Potential?
        </>
      }
      text="We’re committed to helping businesses unlock their full marketing potential. Whether you’re looking for a complete transformation or targeted optimization, we have the expertise to guide you. Get started today and create a marketing strategy that works for your business!"
      bottomContent={
        <Button onClick={() => setOpen(true)}>Request a Consultation</Button>
      }
    />
  );
};
