'use client';

import { useCallback, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';

import { DeIcon, EnIcon } from '@/shared/ui/icons/countries';
import { TranslateIcon } from '@/shared/ui/icons/outline';
import { Text } from '@/shared/ui/kit/text';

const LANGUAGES = [
  { code: 'en', icon: <EnIcon />, label: 'EN' },
  { code: 'de', icon: <DeIcon />, label: 'DE' },
  // { code: 'it', icon: <ItIcon />, label: 'IT' },
];

export const LangSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = useCallback(
    (lang: string) => {
      const segments = pathname.split('/');

      const langIndex = LANGUAGES.findIndex(l => l.code === segments[1]);

      let newSegments: string[];
      if (langIndex !== -1) {
        newSegments = [...segments];
        newSegments[1] = lang;
      } else {
        newSegments = [...segments];
        newSegments.splice(1, 0, lang);
      }

      const newPath = newSegments.join('/') || '/';

      router.push(newPath);
      setIsOpen(false);
    },
    [pathname, router],
  );

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#F5F5F5] transition duration-300 ease-in-out outline-none hover:bg-[#DBDBDB]">
        <TranslateIcon color={isOpen ? '#FF572D' : '#575551'} />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent className="z-[999] overflow-hidden rounded-3xl border border-[#DBDBDB] bg-white shadow-[0px_10px_25px_0px_rgba(0,0,0,0.10)]">
          {LANGUAGES.map(({ code, icon, label }) => (
            <DropdownMenuItem
              key={code}
              onSelect={() => changeLanguage(code)}
              className="hover:bg-primary-opacity flex cursor-pointer items-center gap-2 border-b border-[#DBDBDB] p-3 transition duration-300 ease-in-out outline-none last:border-b-0"
            >
              {icon}
              <Text weight={500}>{label}</Text>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
};
