import React from "react";
import { SectionTitle } from "../SectionTitle";
import { ProjectCard } from "../ProjectCard";
import projects from "./../../data/projectsData";

function Projects({ refference }) {
  return (
    <section className="m-sm lg:m-lg" id="projects" ref={refference}>
      <SectionTitle text="Projects" />
      <section className="flex flex-wrap items-center gap-8 justify-center mt-10 lg:gap-10">
        {Object.values(projects).map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </section>
    </section>
  );
}

export { Projects };
