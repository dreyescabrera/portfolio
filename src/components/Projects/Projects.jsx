import { SectionTitle } from "../common/SectionTitle";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { projects } from "../../data/projects";

function Projects({ refference }) {
	return (
		<section className="m-sm lg:m-lg" id="projects" ref={refference}>
			<SectionTitle text="Projects" />
			<section className="grid grid-cols-flexible gap-6 mt-10">
				{projects.map((project) => (
					<ProjectCard {...project} key={project.id} />
				))}
			</section>
		</section>
	);
}

export { Projects };
