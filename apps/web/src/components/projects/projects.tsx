import { SectionTitle } from '@/components/common/section-title';
import { ProjectCard } from './project-card';
import { projects } from '@/data/projects';
import { PageSection } from '../common';

export function Projects() {
	return (
		<PageSection>
			<SectionTitle>Work I&apos;ve Done</SectionTitle>
			<section className="mt-10 grid grid-cols-flexible gap-6">
				{projects.map((project) => (
					<ProjectCard {...project} key={project.id} />
				))}
			</section>
		</PageSection>
	);
}
