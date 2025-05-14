'use client';

import { ArrowDownIcon } from '@/shared/ui/icons/orange';
import { Text } from '@/shared/ui/kit/text';

import type { JobPosition } from '../lib';

export const JobTitle = ({
  data: { name, type },
}: {
  data: Pick<JobPosition, 'name' | 'type'>;
}) => {
  return (
    <section className="flex w-full cursor-pointer items-center">
      <section className="flex w-full items-center max-md:flex-col max-md:items-start max-md:gap-3">
        <Text
          color="dark"
          size="2xl"
          weight={600}
          className="w-[38%] text-start"
        >
          {name}
        </Text>
        <div className="flex items-center gap-3">
          <Text color="dark" weight={600} size="xl">
            Type:
          </Text>
          <JobType type={type} />
        </div>
      </section>
      <ArrowDownIcon />
    </section>
  );
};

const JobType = ({ type }: { type: JobPosition['type'] }) => (
  <span className="bg-primary w-max rounded-full px-3">
    <Text color="light" size="lg" capitalize>
      {type}
    </Text>
  </span>
);
