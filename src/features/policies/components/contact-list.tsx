'use client';

import { useTranslations } from 'next-intl';

import { List } from '@/shared/ui/components/list';

export const ContactList = () => {
  const t = useTranslations('policy.contacts');

  return (
    <List
      values={[
        {
          text: `${t('0')}: info@optisence.com`,
          href: 'mailto:info@optisence.com',
        },
        {
          text: `${t('1')}: +27218913127`,
          href: 'tel:+27218913127',
        },
        {
          text: `${t('2')}`,
          href: '/contact-us',
        },
      ]}
    />
  );
};
