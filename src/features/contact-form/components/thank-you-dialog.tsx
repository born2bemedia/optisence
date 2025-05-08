'use client';

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

import { CloseIcon } from '@/shared/ui/icons/orange';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ThankYouDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger />
      <Portal>
        <Overlay className="animate-overlayShow fixed inset-0 z-[998] bg-black/55 backdrop-blur-sm" />
        <Content
          className="animate-contentShow fixed top-1/2 left-1/2 z-[999] w-[50%] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-3xl bg-white px-8 pt-[52px] pb-10 focus:outline-none max-sm:w-[96%]"
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <DTitle />
          <Description asChild>
            <section className="flex flex-col items-center gap-6 text-center">
              <Title size="lg">Thank You!</Title>
              <Text>
                Thank you for taking the time to provide your information. We
                are excited to collaborate with you and take the first step
                toward achieving your business goals. Expect to hear from us
                soon!
              </Text>
            </section>
          </Description>
          <Close className="absolute top-6 right-6 cursor-pointer">
            <CloseIcon />
          </Close>
        </Content>
      </Portal>
    </Root>
  );
};
