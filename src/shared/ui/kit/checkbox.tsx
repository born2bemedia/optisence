'use client';

import { type ReactNode, useId } from 'react';
import { Indicator, Root } from '@radix-ui/react-checkbox';

import { CheckIcon } from '@/shared/ui/icons/outline';
import { Text } from '@/shared/ui/kit/text';

export function Checkbox({
  label,
  onCheckedChange,
  checked = false,
  id,
}: {
  label?: ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  id?: string;
}) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  return (
    <div className="flex items-center gap-3">
      <Root
        className="flex h-[18px] w-[18px] flex-shrink-0 cursor-pointer items-center justify-center rounded-[3px] border border-[#FF572D] bg-transparent transition-all duration-300 ease-in-out hover:shadow-[0_0_0_1px_#FF572D] focus:shadow-[0_0_0_1px_#FF572D] data-[state=checked]:bg-[#FF572D]"
        id={checkboxId}
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <Indicator className="mt-0.5">
          <CheckIcon />
        </Indicator>
      </Root>
      <label htmlFor={checkboxId}>
        <Text color="dark">{label}</Text>
      </label>
    </div>
  );
}
