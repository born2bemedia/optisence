'use client';

import { PhoneInput, type PhoneInputProps } from 'react-international-phone';

import { Text } from '@/shared/ui/kit/text';

import 'react-international-phone/style.css';

export function PhoneField({
  country,
  label,
  hint,
  ...args
}: PhoneInputProps & {
  country?: string;
  label?: string;
  hint?: string;
}) {
  return (
    <label className="relative flex w-full flex-col gap-0.5">
      <div className="flex items-center gap-2">
        <Text color="dark">{label}</Text>
        {hint && (
          <Text color="danger" italic>
            {hint}
          </Text>
        )}
      </div>
      <PhoneInput
        defaultCountry={country ?? 'us'}
        className="!h-[48px]"
        inputClassName="w-full !h-full !rounded-r-full bg-white/10 text-[#3B3B35] text-base leading-6 !border-0 transition-all duration-300 ease-in-out focus:outline-none"
        countrySelectorStyleProps={{
          buttonClassName:
            '!h-full bg-white !border-0 !rounded-l-full !border-r !border-r-black/10 pr-4 !pl-3 hover:!bg-white',
          dropdownStyleProps: {
            className: 'outline-none',
          },
        }}
        {...args}
      />
    </label>
  );
}
