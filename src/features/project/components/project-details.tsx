'use client';

import { useTranslations } from 'next-intl';

import { List } from '@/shared/ui/components/list';
import { Text } from '@/shared/ui/kit/text';

import type { Project } from '../lib';

export const ProjectDetails = ({ project }: { project: Project }) => {
  const t = useTranslations('our-work.projects');
  return (
    <article className="flex flex-col gap-5 rounded-xl p-8">
      <section className="flex flex-col items-center gap-2.5">
        <Text color="dark" weight={600} size="3xl" className="w-full">
          {project.name}
        </Text>
        <section className="flex w-full flex-col rounded-[20px] border border-[#5755514d] p-5">
          <div>
            <span className="font-bold">{t('client')}:</span> {project.client} |{' '}
            <span className="font-bold">{t('industry')}:</span>{' '}
            {project.industry}
          </div>
          <div>
            <span className="font-bold">{t('usedServices')}:</span>{' '}
            {project.usedServices.join(' · ')}
          </div>
        </section>
      </section>
      <section className="flex flex-col gap-5">
        <section className="flex w-full flex-col gap-5">
          <ListLayout>
            <Text size="xl" color="primary" weight={600}>
              {t('problem')}:
            </Text>
            <List values={project.problems} noHighlight />
          </ListLayout>
          <ListLayout>
            <Text size="xl" color="primary" weight={600}>
              {t('whatWeSaw')}:
            </Text>
            <List values={project.problemsResults} noHighlight />
          </ListLayout>
        </section>
        <section className="flex w-full flex-col gap-5">
          <ListLayout>
            <Text size="xl" color="primary" weight={600}>
              {t('whatWeBuilt')}:
            </Text>
            <List values={project.built} noHighlight />
          </ListLayout>
          <ListLayout>
            <Text size="xl" color="primary" weight={600}>
              {t('whatChanged')}:
            </Text>
            <List values={project.builtResults} noHighlight />
          </ListLayout>
        </section>
      </section>
      <Slogan>{project.slogan}</Slogan>
    </article>
  );
};

const ListLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex w-full flex-col gap-5">{children}</div>
);

const Slogan = ({ children }: { children: React.ReactNode }) => (
  <section className="bg-primary w-full rounded-4xl px-8 py-2">
    <Text color="light" weight={600}>
      {children}
    </Text>
  </section>
);
