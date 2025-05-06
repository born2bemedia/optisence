'use client';

import type { ReactNode } from 'react';
import type {
  DropdownMenuItemProps,
  DropdownMenuTriggerProps,
} from '@radix-ui/react-dropdown-menu';
import {
  Content,
  Item,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dropdown-menu';

import { cn } from '@/shared/lib/utils';
import { ArrowBottom } from '@/shared/ui/icons/outline';

export const Select = Root;
export const SelectTrigger = ({
  className,
  children,
  ...args
}: DropdownMenuTriggerProps) => (
  <Trigger
    className={cn(
      'flex w-full items-center justify-between gap-1 rounded-[24px] border border-[#E6E6E4] bg-[#F6F6F4] p-4',
      className,
    )}
    {...args}
  >
    {children}
    <ArrowBottom />
  </Trigger>
);
export const SelectMenu = ({ children }: { children: ReactNode }) => (
  <Portal>
    <Content
      className="z-[999] rounded-[24px] border border-[#E6E6E4] bg-[#F6F6F4]"
      sideOffset={6}
    >
      {children}
    </Content>
  </Portal>
);
export const SelectItem = ({
  children,
  className,
  ...args
}: DropdownMenuItemProps) => (
  <Item
    className={cn(
      'flex cursor-pointer items-center gap-3 border-b border-[#E6E6E4] p-4 last:border-b-0',
      className,
    )}
    {...args}
  >
    {children}
  </Item>
);
