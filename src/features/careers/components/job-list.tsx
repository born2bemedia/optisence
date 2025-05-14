'use client';

import { Content, Item, Root, Trigger } from '@radix-ui/react-accordion';

import type { JobPosition } from '../lib';
import { JobDetails } from './job-details';
import { JobTitle } from './job-title';

export const JobList = ({ jobs }: { jobs: JobPosition[] }) => {
  return (
    <Root className="flex w-full flex-col gap-5" type="single" collapsible>
      {jobs.map(item => (
        <Item
          key={item.name}
          value={item.name}
          className="rounded-4xl bg-white px-8 py-5 max-md:bg-[#F5F5F5]"
        >
          <Trigger className="w-full">
            <JobTitle data={{ name: item.name, type: item.type }} />
          </Trigger>
          <Content className="overflow-hidden data-[state=closed]:animate-[slideUp_300ms_cubic-bezier(0.87,0,0.13,1)] data-[state=open]:animate-[slideDown_300ms_cubic-bezier(0.87,0,0.13,1)]">
            <JobDetails job={item} />
          </Content>
        </Item>
      ))}
    </Root>
  );
};
