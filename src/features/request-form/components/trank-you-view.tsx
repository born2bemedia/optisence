'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { useRequestDialogStore } from '../services';

export const ThankYouView = () => {
  const t = useTranslations('thankYou');
  const { setOpen } = useRequestDialogStore();

  return (
    <section className="flex flex-col items-center gap-6 text-center">
      <Title size="lg">{t('title')}</Title>
      <Text>{t('msg')}</Text>
      <Button textAlign="center" onClick={() => setOpen(false)} fullWidth>
        {t('btn')}
      </Button>
    </section>
  );
};
