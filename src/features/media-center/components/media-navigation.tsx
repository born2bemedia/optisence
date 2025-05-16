'use client';

import type { ReactNode } from 'react';
import { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { useWindow } from '@/shared/lib/hooks';
import { cn } from '@/shared/lib/utils';
export const MediaNavigation = () => {
  const t = useTranslations('mediaCenter.navigation');

  const pathname = usePathname();
  const { width } = useWindow();

  const noLocalePathname = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');

  const articles = useMemo(
    () => [
      {
        name: t('0.name'),
        preview: t('0.preview'),
        url: '/media-center/5-signs-your-business',
      },
      {
        name: t('1.name'),
        preview: t('1.preview'),
        url: '/media-center/sustainability-as-strategy',
      },
      {
        name: t('2.name'),
        preview: t('2.preview'),
        url: '/media-center/disrupt-or-be-disrupted',
      },
      {
        name: t('3.name'),
        preview: t('3.preview'),
        url: '/media-center/customer-centric-strategy',
      },
    ],
    [t],
  );

  return (
    <ul className="flex w-full items-center justify-between gap-1 overflow-x-auto overflow-y-hidden py-1.5 whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {articles.map(({ name, preview, url }) => (
        <li key={url}>
          {noLocalePathname === url ? (
            <NavChip url={url} active>
              {width < 768 ? preview : name}
            </NavChip>
          ) : (
            <NavChip url={url}>{width < 1917 ? preview : name}</NavChip>
          )}
        </li>
      ))}
    </ul>
  );
};

const NavChip = ({
  children,
  url,
  active,
}: {
  children: ReactNode;
  url: string;
  active?: boolean;
}) => (
  <Link
    href={url}
    className={cn(
      'border-primary cursor-pointer rounded-3xl border px-8 py-1.5',
      active ? 'bg-primary text-white' : 'text-[#181818]',
    )}
  >
    {children}
  </Link>
);
