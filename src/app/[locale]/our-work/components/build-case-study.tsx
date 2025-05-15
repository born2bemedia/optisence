'use client';

import Link from 'next/link';

import { useRequestDialogStore } from '@/features/request-form/services';

import { LinesSection } from '@/shared/ui/components/lines-section';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';

export const BuildCaseStudy = () => {
  const { setOpen } = useRequestDialogStore();

  return (
    <LinesSection
      title={
        <>
          Ready to Build Your Own
          <br /> Case Study?
        </>
      }
      text="Whether you're scaling, transforming, or navigating complexity — Optisence becomes your unfair advantage. Let’s turn your next challenge into a win worth writing about."
      bottomContent={
        <div className="flex gap-5 max-md:flex-col">
          <Button
            onClick={() => setOpen(true)}
            className="max-md:w-full max-md:justify-center"
          >
            Request a Custom Solution <ArrowRightIcon />
          </Button>
          <Link href="/marketing-operations-advisory">
            <Button
              variant="outline"
              className="max-md:w-full max-md:justify-center"
            >
              Discover Marketing Advisory <ArrowRightIcon color="#FF572D" />
            </Button>
          </Link>
        </div>
      }
    />
  );
};
