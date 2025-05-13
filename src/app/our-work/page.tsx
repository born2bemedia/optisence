import {
  BuildCaseStudy,
  Hero,
  ProjectsApart,
  ProjectsList,
} from './components';

export default function OurWork() {
  return (
    <main>
      <Hero />
      <ProjectsList projectsRange={[0, 4]} />
      <ProjectsApart />
      <ProjectsList projectsRange={[4, 7]} />
      <BuildCaseStudy />
    </main>
  );
}
