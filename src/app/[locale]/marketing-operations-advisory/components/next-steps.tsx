'use client';

import { useTranslations } from 'next-intl';

import { useRequestDialogStore } from '@/features/request-form/services';

import { LinesSection } from '@/shared/ui/components/lines-section';
import { Button } from '@/shared/ui/kit/button';

export const NextSteps = () => {
  const { setOpen } = useRequestDialogStore();
  const t = useTranslations('marketingOperations.nextSteps');

  return (
    <LinesSection
      title={
        <>
          {t('title.0')} <br /> {t('title.1')}
        </>
      }
      text={t('description')}
      bottomContent={<Button onClick={() => setOpen(true)}>{t('btn')}</Button>}
    />
  );
};
