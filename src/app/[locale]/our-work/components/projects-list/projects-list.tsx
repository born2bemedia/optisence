'use client';

import { useTranslations } from 'next-intl';

import { ProjectCard, ProjectsSlider } from '@/features/project/components';
import type { Project } from '@/features/project/lib';

import { useWindow } from '@/shared/lib/hooks/use-window';
import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';

import st from './projects-list.module.scss';

export const ProjectsList = ({
  projectsRange,
}: {
  projectsRange: [number, number];
}) => {
  const t = useTranslations('our-work.projects');

  const { width } = useWindow();

  const [start, end] = projectsRange;

  const projects: Project[] = [
    {
      name: t('0.name'),
      client: t('0.client'),
      industry: t('0.industry'),
      usedServices: [
        t('0.usedServices.0'),
        t('0.usedServices.1'),
        t('0.usedServices.2'),
      ],
      problems: [t('0.problems.0'), t('0.problems.1'), t('0.problems.2')],
      problemsResults: [
        t('0.problemsResults.0'),
        t('0.problemsResults.1'),
        t('0.problemsResults.2'),
      ],
      built: [t('0.built.0'), t('0.built.1'), t('0.built.2')],
      builtResults: [
        t('0.builtResults.0'),
        t('0.builtResults.1'),
        t('0.builtResults.2'),
      ],
      slogan: t('0.slogan'),
    },
    {
      name: t('1.name'),
      client: t('1.client'),
      industry: t('1.industry'),
      usedServices: [
        t('1.usedServices.0'),
        t('1.usedServices.1'),
        t('1.usedServices.2'),
      ],
      problems: [t('1.problems.0'), t('1.problems.1')],
      problemsResults: [
        t('1.problemsResults.0'),
        t('1.problemsResults.1'),
        t('1.problemsResults.2'),
      ],
      built: [t('1.built.0'), t('1.built.1'), t('1.built.2')],
      builtResults: [
        t('1.builtResults.0'),
        t('1.builtResults.1'),
        t('1.builtResults.2'),
      ],
      slogan: t('1.slogan'),
    },
    {
      name: t('2.name'),
      client: t('2.client'),
      industry: t('2.industry'),
      usedServices: [
        t('2.usedServices.0'),
        t('2.usedServices.1'),
        t('2.usedServices.2'),
      ],
      problems: [t('2.problems.0'), t('2.problems.1'), t('2.problems.2')],
      problemsResults: [
        t('2.problemsResults.0'),
        t('2.problemsResults.1'),
        t('2.problemsResults.2'),
      ],
      built: [t('2.built.0'), t('2.built.1'), t('2.built.2')],
      builtResults: [
        t('2.builtResults.0'),
        t('2.builtResults.1'),
        t('2.builtResults.2'),
      ],
      slogan: t('2.slogan'),
    },
    {
      name: t('3.name'),
      client: t('3.client'),
      industry: t('3.industry'),
      usedServices: [
        t('3.usedServices.0'),
        t('3.usedServices.1'),
        t('3.usedServices.2'),
      ],
      problems: [t('3.problems.0'), t('3.problems.1')],
      problemsResults: [
        t('3.problemsResults.0'),
        t('3.problemsResults.1'),
        t('3.problemsResults.2'),
      ],
      built: [t('3.built.0'), t('3.built.1'), t('3.built.2')],
      builtResults: [
        t('3.builtResults.0'),
        t('3.builtResults.1'),
        t('3.builtResults.2'),
      ],
      slogan: t('3.slogan'),
    },
    {
      name: t('4.name'),
      client: t('4.client'),
      industry: t('4.industry'),
      usedServices: [
        t('4.usedServices.0'),
        t('4.usedServices.1'),
        t('4.usedServices.2'),
      ],
      problems: [t('4.problems.0'), t('4.problems.1')],
      problemsResults: [
        t('4.problemsResults.0'),
        t('4.problemsResults.1'),
        t('4.problemsResults.2'),
      ],
      built: [t('4.built.0'), t('4.built.1'), t('4.built.2')],
      builtResults: [
        t('4.builtResults.0'),
        t('4.builtResults.1'),
        t('4.builtResults.2'),
      ],
      slogan: t('4.slogan'),
    },
    {
      name: t('5.name'),
      client: t('5.client'),
      industry: t('5.industry'),
      usedServices: [
        t('5.usedServices.0'),
        t('5.usedServices.1'),
        t('5.usedServices.2'),
      ],
      problems: [t('5.problems.0'), t('5.problems.1')],
      problemsResults: [
        t('5.problemsResults.0'),
        t('5.problemsResults.1'),
        t('5.problemsResults.2'),
      ],
      built: [t('5.built.0'), t('5.built.1'), t('5.built.2')],
      builtResults: [
        t('5.builtResults.0'),
        t('5.builtResults.1'),
        t('5.builtResults.2'),
      ],
      slogan: t('5.slogan'),
    },
    {
      name: t('6.name'),
      client: t('6.client'),
      industry: t('6.industry'),
      usedServices: [
        t('6.usedServices.0'),
        t('6.usedServices.1'),
        t('6.usedServices.2'),
      ],
      problems: [t('6.problems.0'), t('6.problems.1')],
      problemsResults: [
        t('6.problemsResults.0'),
        t('6.problemsResults.1'),
        t('6.problemsResults.2'),
      ],
      built: [t('6.built.0'), t('6.built.1'), t('6.built.2')],
      builtResults: [
        t('6.builtResults.0'),
        t('6.builtResults.1'),
        t('6.builtResults.2'),
      ],
      slogan: t('6.slogan'),
    },
  ];

  return (
    <FadeIn
      className={cn(
        st.layout,
        'px-[100px] pt-[40px] pb-[80px] max-md:px-4 max-md:py-8',
      )}
    >
      <section className={st.cards}>
        {width > 768 ? (
          projects.slice(start, end).map((project, i) => (
            <section
              key={project.name}
              className={st.cardContainer}
              style={{
                top: `calc(10px ${(i + 1) * 50}px)`,
              }}
            >
              <ProjectCard project={project} />
            </section>
          ))
        ) : (
          <ProjectsSlider projectsRange={projectsRange} />
        )}
      </section>
    </FadeIn>
  );
};
