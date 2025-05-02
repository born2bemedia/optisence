'use client';

import type { ReactNode } from 'react';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';

import { ChevronDown } from '@/shared/ui/icons/outline';
import { Text } from '@/shared/ui/kit/text';

export type DropdownOptions = { value: string; label: React.ReactNode };

export function Dropdown({
  options,
  value,
  onChange,
}: {
  options: DropdownOptions[];
  value: ReactNode;
  onChange?: (value: string) => void;
}) {
  return (
    <Root>
      <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1 rounded-full bg-transparent outline-0 hover:opacity-80 [&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:ease-in-out data-[state=open]:[&>svg]:rotate-180">
        <Text>{value}</Text>
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={10}
          className="z-[900] flex min-w-[100px] animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] flex-col gap-[6px] rounded-md bg-white p-2 shadow-[0px_10px_38px_-10px_rgba(22,23,24,0.35),0px_10px_20px_-15px_rgba(22,23,24,0.2)] data-[side=bottom]:animate-[slideUpAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=left]:animate-[slideRightAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=right]:animate-[slideLeftAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=top]:animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)]"
        >
          {options.map(option => (
            <DropdownMenuItem
              key={option.value}
              className="relative flex h-[25px] cursor-pointer items-center rounded-[3px] transition-all duration-300 ease-in-out outline-none select-none hover:bg-[#FAFAFA]"
              onClick={() => onChange?.(option.value)}
            >
              <Text>{option.label}</Text>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
}
