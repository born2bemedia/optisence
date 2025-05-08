'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useWindow } from '@/shared/lib/hooks';
import { cn } from '@/shared/lib/utils';

import { articles } from '../lib';

export const MediaNavigation = () => {
  const pathname = usePathname();
  const { width } = useWindow();

  return (
    <ul className="flex w-full items-center justify-between gap-1 overflow-x-auto overflow-y-hidden py-1.5 whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {articles.map(({ name, preview, url }) => (
        <li key={url}>
          {pathname === url ? (
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
