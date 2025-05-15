'use client';

import { ProjectCard, ProjectsSlider } from '@/features/project/components';
import { projects } from '@/features/project/lib';

import { useWindow } from '@/shared/lib/hooks/use-window';
import { cn } from '@/shared/lib/utils';
import { FadeIn } from '@/shared/ui/components/fade-in';

import st from './projects-list.module.scss';

export const ProjectsList = ({
  projectsRange,
}: {
  projectsRange: [number, number];
}) => {
  const { width } = useWindow();

  const [start, end] = projectsRange;

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
