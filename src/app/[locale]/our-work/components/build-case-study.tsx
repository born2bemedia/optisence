'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { useRequestDialogStore } from '@/features/request-form/services';

import { LinesSection } from '@/shared/ui/components/lines-section';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';

export const BuildCaseStudy = () => {
  const t = useTranslations('our-work.buildCaseStudy');
  const { setOpen } = useRequestDialogStore();

  return (
    <LinesSection
      title={
        <>
          {t('title.0')}
          <br />
          {t('title.1')}
        </>
      }
      text={t('description')}
      bottomContent={
        <div className="flex gap-5 max-md:flex-col">
          <Button
            onClick={() => setOpen(true)}
            className="max-md:w-full max-md:justify-center"
          >
            {t('buttons.0')} <ArrowRightIcon />
          </Button>
          <Link href="/marketing-operations-advisory">
            <Button
              variant="outline"
              className="max-md:w-full max-md:justify-center"
            >
              {t('buttons.1')} <ArrowRightIcon color="#FF572D" />
            </Button>
          </Link>
        </div>
      }
    />
  );
};
