'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';
import { Title } from '@/shared/ui/kit/title';

export const Header = ({
  title,
  updatedOn,
}: {
  title: string;
  updatedOn: string;
}) => {
  const t = useTranslations('policy');

  return (
    <header className="flex flex-col items-center justify-center gap-6 rounded-4xl bg-[#F5F5F5] py-8 text-center">
      <Title color="dark">{title}</Title>
      <Divider className="w-[50%] bg-[#DFDFDF] max-sm:w-3/4" />
      <Button>
        {t('updatedOn')}: {updatedOn}
      </Button>
    </header>
  );
};
