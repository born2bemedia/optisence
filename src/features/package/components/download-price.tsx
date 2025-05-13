'use client';

import { LinesSection } from '@/shared/ui/components/lines-section';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';

export const DownloadPrice = () => (
  <LinesSection
    title="Download Full Price List"
    text="Get a detailed overview of all our services and packages with our full-price list. Download it now to explore all options and choose the best fit for your business."
    bottomContent={
      <Button>
        Download Now
        <ArrowRightIcon />
      </Button>
    }
  />
);
