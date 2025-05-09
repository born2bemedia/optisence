'use client';

import Link from 'next/link';

import { LinesSection } from '@/shared/ui/components/lines-section';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';

export const OptisenceFamily = () => (
  <LinesSection
    title={
      <>
        <span className="text-primary">Join the Optisence Family:</span>
        <br /> A Culture of Innovation and Collaboration
      </>
    }
    text="At Optisence, we don’t just work together — we innovate together. Our team is a collaborative, passionate group of professionals who thrive on solving business challenges and creating opportunities for our clients. We offer a supportive environment where creativity is encouraged and professional development is prioritized. Our culture is built on continuous learning, teamwork, and a shared passion for results."
    bottomContent={
      <Link href="/careers">
        <Button>
          Join Our Team <ArrowRightIcon />
        </Button>
      </Link>
    }
  />
);
