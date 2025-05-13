'use client';

import { type ReactNode, useCallback } from 'react';
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as DTitle,
  Trigger,
} from '@radix-ui/react-dialog';

import { CloseIcon } from '@/shared/ui/icons/outline';
import { Title } from '@/shared/ui/kit/title';

import { useOrderDialogStore } from '../services';
import { OrderForm } from './order-form';
import { ThankYouView } from './trank-you-view';

export const OrderDialog = () => {
  const {
    open,
    setOpen,
    sent,
    setSent,
    productName,
    setProductName,
    productPrice,
    setProductPrice,
  } = useOrderDialogStore();

  const onSuccess = useCallback(() => {
    setSent(true);
    setProductName('');
    setProductPrice('');
  }, [setProductName, setProductPrice, setSent]);

  return (
    <Root
      open={open}
      onOpenChange={() => {
        setOpen(false);
        setSent(false);
      }}
    >
      <Trigger />
      <Portal>
        <Overlay className="animate-overlayShow fixed inset-0 z-[998] bg-black/55 backdrop-blur-sm" />
        <Content
          className="animate-contentShow fixed top-1/2 left-1/2 z-[999] w-[600px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-3xl bg-white p-6 focus:outline-none max-sm:w-[96%]"
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <DTitle />
          <Description asChild>
            {sent ? (
              <ThankYouView />
            ) : (
              <ScrollContainer>
                <section className="flex flex-col gap-12">
                  <Title
                    as="h4"
                    size="lg"
                    color="primary"
                    weight={500}
                    className="text-center"
                  >
                    {productName}
                  </Title>
                  <OrderForm
                    productName={productName}
                    productPrice={productPrice}
                    onSuccess={onSuccess}
                  />
                </section>
              </ScrollContainer>
            )}
          </Description>
          <Close className="absolute top-6 right-6 cursor-pointer">
            <CloseIcon />
          </Close>
        </Content>
      </Portal>
    </Root>
  );
};

const ScrollContainer = ({ children }: { children: ReactNode }) => (
  <section className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-[#DFDFDF] scrollbar-track-white max-sm:scrollbar-none mt-3 h-max overflow-y-auto p-1 max-sm:h-[86vh]">
    {children}
  </section>
);
