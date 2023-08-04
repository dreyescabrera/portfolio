import { SectionTitle } from '@/components/common/section-title';
import { ProjectCard } from './project-card';
import { projects } from '@/data/projects';

export function Projects() {
	return (
		<section className="m-sm lg:m-lg" id="projects">
			<SectionTitle>Work I&apos;ve Done</SectionTitle>
			<section className="mt-10 grid grid-cols-flexible gap-6">
				{projects.map((project) => (
					<ProjectCard {...project} key={project.id} />
				))}
			</section>
		</section>
	);
}
