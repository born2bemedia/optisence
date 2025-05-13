'use client';

import type { ReactNode } from 'react';
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

import type { Project } from '../lib';
import { ProjectDetails } from './project-details';

export const ProjectDetailsDialog = ({
  isOpen,
  project,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  project: Project;
}) => {
  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger />
      <Portal>
        <Overlay className="animate-overlayShow fixed inset-0 z-[998] bg-black/55 backdrop-blur-sm" />
        <Content
          className="animate-contentShow fixed top-1/2 left-1/2 z-[999] w-[96%] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-3xl bg-white focus:outline-none"
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <DTitle />
          <Description asChild>
            <ScrollContainer>
              <ProjectDetails project={project} />
            </ScrollContainer>
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
  <section className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-[#DFDFDF] scrollbar-track-white max-sm:scrollbar-none mt-3 h-[90vh] overflow-y-auto p-1 max-sm:h-[86vh]">
    {children}
  </section>
);
