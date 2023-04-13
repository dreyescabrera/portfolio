import { forwardRef } from "react";
import { SectionTitle } from "../common/SectionTitle";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { projects } from "../../data/projects";

export const Projects = forwardRef(function Projects(_, ref) {
	return (
		<section className="m-sm lg:m-lg" id="projects" ref={ref}>
			<SectionTitle text="Projects" />
			<section className="grid grid-cols-flexible gap-6 mt-10">
				{projects.map((project) => (
					<ProjectCard {...project} key={project.id} />
				))}
			</section>
		</section>
	);
});
