'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import { List } from '@/shared/ui/components/list';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';

import type { Project } from '../lib';

const ProjectDetailsDialog = dynamic(
  () =>
    import('./project-details-dialog').then(mod => mod.ProjectDetailsDialog),
  {
    ssr: false,
  },
);

export const ProjectCard = ({ project }: { project: Project }) => {
  const [open, setOpen] = useState(false);

  return (
    <article className="flex flex-col gap-8 rounded-xl bg-[#F5F5F5] p-8 max-md:gap-5">
      <section className="flex items-center gap-2 max-md:flex-col max-md:items-start max-md:gap-5">
        <Text
          color="dark"
          weight={600}
          size="3xl"
          className="w-1/2 max-md:w-full"
        >
          {project.name}
        </Text>
        <section className="flex w-1/2 flex-col rounded-[20px] border border-[#5755514d] p-5 max-md:w-full">
          <div>
            <span className="font-bold">Client:</span> {project.client} |{' '}
            <span className="font-bold">Industry:</span> {project.industry}
          </div>
          <div>
            <span className="font-bold">Services used:</span>{' '}
            {project.usedServices.join(' · ')}
          </div>
        </section>
      </section>
      <section className="flex gap-3 max-md:hidden">
        <section className="flex w-full gap-5">
          <ListLayout>
            <Text size="xl" color="primary" weight={600}>
              The Problem:
            </Text>
            <List values={project.problems} noHighlight />
          </ListLayout>
          <ListLayout>
            <Text size="xl" color="primary" weight={600}>
              What We Saw:
            </Text>
            <List values={project.problemsResults} noHighlight />
          </ListLayout>
        </section>
        <Divider className="h-auto w-[1px] bg-black/20" />
        <section className="flex w-full gap-5 max-md:hidden">
          <ListLayout>
            <Text size="xl" color="primary" weight={600}>
              What We Built:
            </Text>
            <List values={project.built} noHighlight />
          </ListLayout>
          <ListLayout>
            <Text size="xl" color="primary" weight={600}>
              What Changed:
            </Text>
            <List values={project.builtResults} noHighlight />
          </ListLayout>
        </section>
      </section>
      <Slogan>{project.slogan}</Slogan>
      <Button
        className="hidden max-md:flex"
        textAlign="center"
        onClick={() => setOpen(true)}
        fullWidth
      >
        Learn More <ArrowRightIcon />
      </Button>
      <ProjectDetailsDialog
        project={project}
        isOpen={open}
        setIsOpen={setOpen}
      />
    </article>
  );
};

const ListLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex w-full flex-col gap-5">{children}</div>
);

const Slogan = ({ children }: { children: React.ReactNode }) => (
  <section className="bg-primary w-full rounded-4xl px-8 py-2 max-md:hidden">
    <Text color="light" weight={600}>
      {children}
    </Text>
  </section>
);
