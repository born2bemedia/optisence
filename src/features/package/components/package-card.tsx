'use client';

import { useCallback } from 'react';

import { useOrderDialogStore } from '@/features/order/services';

import { cn } from '@/shared/lib/utils';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';

import type { Package } from '../lib';

export const PackageCard = ({
  description,
  features,
  name,
  price,
  reasonToChoose,
  className,
}: Package & { className?: string }) => {
  const { setProductName, setOpen, setProductPrice } = useOrderDialogStore();

  const onOrder = useCallback(() => {
    setProductName(name);
    setProductPrice(price);
    setOpen(true);
  }, [setProductName, name, setProductPrice, price, setOpen]);

  return (
    <article
      className={cn(
        'flex h-max flex-col gap-6 rounded-4xl bg-[#F5F5F5] p-8 max-md:h-full',
        className,
      )}
    >
      <section className="flex flex-col gap-5">
        <section className="flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-3">
          <Text size="3xl" color="dark" weight={600}>
            {name}
          </Text>
          <span className="w-max shrink-0 rounded-full bg-[#DFDFDF] px-3 py-1.5">
            {price}
          </span>
        </section>
        <Text>{description}</Text>
      </section>
      <Divider />
      <section className="flex flex-col gap-5">
        <Text size="xl" color="dark" weight={500}>
          Includes:
        </Text>
        <ul className="grid grid-cols-2 gap-3 max-md:flex max-md:flex-col">
          {features.map(feature => (
            <li key={feature} className="flex items-center gap-3">
              <Dot />
              <Text>{feature}</Text>
            </li>
          ))}
        </ul>
      </section>
      <Text size="xl" color="dark" weight={500}>
        Why Choose This Package?
      </Text>
      <Text>{reasonToChoose}</Text>
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

const Dot = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="7"
    viewBox="0 0 6 7"
    fill="none"
  >
    <circle cx="3" cy="3.5" r="3" fill="#FF572D" />
  </svg>
);
