'use client';

import { useTranslations } from 'next-intl';

import { LinesSection } from '@/shared/ui/components/lines-section';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';

export const DownloadPrice = () => {
  const t = useTranslations('marketingOperations.downloadPrice');

  return (
    <LinesSection
      title={t('title')}
      text={t('description')}
      bottomContent={
        <Button>
          {t('btn')}
          <ArrowRightIcon />
        </Button>
      }
    />
  );
};
