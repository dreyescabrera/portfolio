import { ProjectCard } from './project-card';
import { projects } from '@/data/projects';

export function ProjectGrid() {
	return (
		<section className="mt-10 grid grid-cols-flexible gap-6">
			{projects.map((project) => (
				<ProjectCard {...project} key={project.id} />
			))}
		</section>
	);
}
