'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';

export const StepsBlock = ({
  title,
  description,
  values,
  imgUrl,
}: {
  title: string;
  description: ReactNode;
  values: { title: string; content: ReactNode }[];
  imgUrl: string;
}) => {
  return (
    <section className="flex flex-col gap-8">
      <section className="flex items-center gap-12 max-sm:flex-col max-sm:gap-8">
        <Text
          size="3xl"
          color="dark"
          className="w-1/2 max-sm:w-full"
          weight={600}
        >
          {title}
        </Text>
        <section className="w-1/2 max-sm:w-full">{description}</section>
      </section>
      <section className="flex gap-12 max-sm:flex-col max-sm:gap-8">
        <ul className="flex w-1/2 flex-col gap-5 max-sm:w-full">
          {values.map(({ title, content }) => (
            <li
              key={title}
              className="flex flex-col gap-5 rounded-[20px] bg-[#F5F5F5] p-5"
            >
              <Text size="3xl" color="dark" weight={600}>
                {title}
              </Text>
              {content}
            </li>
          ))}
        </ul>
        <Image
          className="h-auto w-1/2 rounded-4xl object-cover max-sm:h-[358px] max-sm:w-full"
          src={imgUrl}
          alt={title}
          width={500}
          height={500}
          unoptimized
        />
      </section>
    </section>
  );
};
