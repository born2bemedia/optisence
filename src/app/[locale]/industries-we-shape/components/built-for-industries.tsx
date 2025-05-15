'use client';

import Link from 'next/link';

import { useRequestDialogStore } from '@/features/request-form/services';

import { LinesSection } from '@/shared/ui/components/lines-section';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

export const BuiltForIndustries = () => {
  const { setOpen } = useRequestDialogStore();

  return (
    <LinesSection
      title={
        <>
          Built for Industries That <br />
          Refuse to Stay Still
        </>
      }
      text={
        <>
          If your industry is changing fast — good. That’s where we work best.
          We thrive in transformation zones: sectors in motion, challenged by
          disruption, demanding reinvention. We bring clarity where there’s
          noise, direction where there’s drift, and traction where others stall.
          <br />
          Optisence isn’t for the status quo. It’s for those ready to evolve,
          scale, and lead.
        </>
      }
      bottomContent={
        <>
          <Text size="lg" weight={500} color="dark">
            Transform Your Industry with Optisence
          </Text>
          <div className="mt-8 flex gap-5 max-md:flex-col">
            <Button
              onClick={() => setOpen(true)}
              className="max-md:w-full max-md:justify-center"
            >
              Request a Strategy Session <ArrowRightIcon />
            </Button>
            <Link href="/corporate-strategy-guidance">
              <Button
                variant="outline"
                className="max-md:w-full max-md:justify-center"
              >
                Explore Our Capabilities <ArrowRightIcon color="#FF572D" />
              </Button>
            </Link>
          </div>
        </>
      }
    />
  );
};
