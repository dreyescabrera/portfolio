import { forwardRef } from 'react';
import { SectionTitle } from '@/components/common/section-title';
import { ProjectCard } from './project-card';
import { projects } from '@/data/projects';

export const Projects = forwardRef<HTMLDivElement>(function Projects(props, ref) {
	return (
		<section className="m-sm lg:m-lg" id="projects" ref={ref}>
			<SectionTitle>Projects</SectionTitle>
			<section className="grid grid-cols-flexible gap-6 mt-10">
				{projects.map((project) => (
					<ProjectCard {...project} key={project.id} />
				))}
			</section>
		</section>
	);
});
