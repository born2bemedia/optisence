'use client';

import { Divider } from '@/shared/ui/kit/divider';
import { Title } from '@/shared/ui/kit/title';

export const Header = ({
  title,
}: {
  title: string;
}) => {

  return (
    <header className="flex flex-col items-center justify-center gap-6 rounded-4xl bg-[#F5F5F5] py-8 text-center">
      <Title color="dark">{title}</Title>
      <Divider className="w-[50%] bg-[#DFDFDF] max-sm:w-3/4" />
    </header>
  );
};
