'use client';

import { useCallback } from 'react';

import { useOrderDialogStore } from '@/features/order/services';

import { ArrowRightIcon, LineRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

import type { Product } from '../lib';

export const ProductCard = ({ name, description, serviceDetails }: Product) => {
  const { setProductName, setOpen } = useOrderDialogStore();

  const onOrder = useCallback(() => {
    setProductName(name);
    setOpen(true);
  }, [setProductName, setOpen, name]);

  return (
    <article className="flex h-full flex-col gap-5 rounded-4xl bg-[#F5F5F5] p-8">
      <section className="flex flex-col gap-5">
        <Text color="dark" size="2xl" weight={600}>
          {name}
        </Text>
        <Text>{description}</Text>
      </section>
      <section className="mt-auto flex flex-col gap-5">
        <Text color="dark" size="xl" weight={600}>
          Service Details
        </Text>
        <div className="flex items-start gap-2">
          <span className="shrink-0">
            <LineRightIcon />
          </span>
          <Text>{serviceDetails}</Text>
        </div>
      </section>
      <Button
        onClick={onOrder}
        textAlign="center"
        className="mt-auto"
        fullWidth
      >
        Order <ArrowRightIcon />
      </Button>
    </article>
  );
};
