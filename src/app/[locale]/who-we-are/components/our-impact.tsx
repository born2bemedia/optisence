'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LinesSection } from '@/shared/ui/components/lines-section';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';

export const OurImpact = () => {
  const t = useTranslations('who-we-are.ourImpact');

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
        <Link href="/our-work">
          <Button>
            {t('btnLabel')} <ArrowRightIcon />
          </Button>
        </Link>
      }
    />
  );
};
