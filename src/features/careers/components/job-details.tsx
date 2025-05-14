'use client';

import { List } from '@/shared/ui/components/list';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';

import type { JobPosition } from '../lib';

export const JobDetails = ({
  job,
}: {
  job: Omit<JobPosition, 'type' | 'name'>;
}) => {
  return (
    <section className="flex w-full flex-col gap-5 pt-8">
      <section className="flex gap-6 max-md:flex-col">
        <section className="flex flex-1 flex-col gap-3 rounded-4xl bg-[#FFE6E0] p-8 max-md:bg-white max-md:p-0">
          {job.description.text.map((item, idx) => {
            const bolds =
              job.description.bold
                ?.filter(b => b.paragraph === idx)
                .map(b => b.text) || [];
            if (bolds.length === 0) {
              return (
                <Text key={item} color="dark">
                  {item}
                </Text>
              );
            }

            const regex = new RegExp(
              `(${bolds.map(b => b.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
              'g',
            );

            return (
              <Text key={item} color="dark">
                {item.split(regex).map((part, i) =>
                  bolds.includes(part) ? (
                    <span key={i} className="font-semibold">
                      {part}
                    </span>
                  ) : (
                    part
                  ),
                )}
              </Text>
            );
          })}
        </section>
        <section className="flex flex-1 flex-col gap-5">
          <Text color="dark" weight={600}>
            What you bring to the table:
          </Text>
          <List values={job.requirements} gap={12} noHighlight />
        </section>
        <section className="flex flex-1 flex-col gap-5">
          <Text color="dark" weight={600}>
            What you’ll be doing:
          </Text>
          <List values={job.responsibilities} gap={12} noHighlight />
        </section>
      </section>
      <Divider className="bg-[rgba(24,24,24,0.20)]" />
      <Text>
        {job.summary.bold && job.summary.bold.length > 0
          ? job.summary.text
              .split(
                new RegExp(
                  `(${job.summary.bold.map(b => b.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
                  'g',
                ),
              )
              .map((part, idx) =>
                job.summary.bold!.includes(part) ? (
                  <span key={idx} className="text-dark font-medium">
                    {part}
                  </span>
                ) : (
                  part
                ),
              )
          : job.summary.text}
      </Text>
    </section>
  );
};
