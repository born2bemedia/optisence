'use client';

import Link from 'next/link';

export const Url = ({
  value,
  placeholder,
}: {
  value: string;
  placeholder?: string;
}) => (
  <Link href={value} className="text-primary underline">
    {placeholder ?? value}
  </Link>
);
