'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { useRequestDialogStore } from '@/features/request-form/services';

import { LinesSection } from '@/shared/ui/components/lines-section';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

export const BuiltForIndustries = () => {
  const t = useTranslations('industries-we-shape.builtForIndustries');
  const { setOpen } = useRequestDialogStore();

  return (
    <LinesSection
      title={
        <>
          {t('title.first')} <br />
          {t('title.second')}
        </>
      }
      text={
        <>
          {t('description.first')}
          <br />
          <br />
          {t('description.second')}
        </>
      }
      bottomContent={
        <>
          <Text size="lg" weight={500} color="dark">
            {t('subtitle')}
          </Text>
          <div className="mt-8 flex gap-5 max-md:flex-col">
            <Button
              onClick={() => setOpen(true)}
              className="max-md:w-full max-md:justify-center"
            >
              {t('btnLabels.0')} <ArrowRightIcon />
            </Button>
            <Link href="/corporate-strategy-guidance">
              <Button
                variant="outline"
                className="max-md:w-full max-md:justify-center"
              >
                {t('btnLabels.1')} <ArrowRightIcon color="#FF572D" />
              </Button>
            </Link>
          </div>
        </>
      }
    />
  );
};
