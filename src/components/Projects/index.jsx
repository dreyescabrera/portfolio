import React from "react";
import { SectionTitle } from "../SectionTitle";
import { ProjectCard } from "../ProjectCard";
import projects from "./projectsData.js";

function Projects({ refference }) {
  return (
    <section className="m-sm lg:m-lg" id="projects" ref={refference}>
      <SectionTitle text="Projects" />
      <section className="flex flex-wrap items-center gap-8 justify-center mt-10 lg:gap-10">
        <ProjectCard project={projects.ipTracker} />
        <ProjectCard project={projects.toDoApp} />
        <ProjectCard project={projects.countryQuiz} />
        <ProjectCard project={projects.portfolio} />
      </section>
    </section>
  );
}

export { Projects };
