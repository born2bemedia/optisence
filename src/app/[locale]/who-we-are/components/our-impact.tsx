'use client';

import Link from 'next/link';

import { LinesSection } from '@/shared/ui/components/lines-section';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';

export const OurImpact = () => (
  <LinesSection
    title={
      <>
        <span className="text-primary">Our Impact:</span>
        <br /> Real Results for Real Businesses
      </>
    }
    text="The transformational growth and tangible results define the success of Optisence we’ve driven for our clients. We work with businesses across industries, and the results speak for themselves. Whether helping a tech startup scale or refining operations for an international brand, we focus on delivering measurable outcomes that help our clients achieve their goals."
    bottomContent={
      <Link href="/our-work">
        <Button>
          See Our Success Stories <ArrowRightIcon />
        </Button>
      </Link>
    }
  />
);
