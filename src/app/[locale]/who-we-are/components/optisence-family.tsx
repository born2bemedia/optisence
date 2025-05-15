'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LinesSection } from '@/shared/ui/components/lines-section';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';

export const OptisenceFamily = () => {
  const t = useTranslations('who-we-are.optisenceFamily');

  return (
    <LinesSection
      title={
        <>
          <span className="text-primary">{t('title.first')}</span>
          <br /> {t('title.second')}
        </>
      }
      text={t('description')}
      bottomContent={
        <Link href="/careers">
          <Button>
            {t('btnLabel')} <ArrowRightIcon />
          </Button>
        </Link>
      }
    />
  );
};
