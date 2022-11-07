import React from "react";
import { SectionTitle } from "../SectionTitle";
import { ProjectCard } from "../ProjectCard";
import { ipTracker, toDoApp, countryQuiz } from "./projectsData.json";

function Projects() {
  return (
    <section className="m-sm lg:m-lg" id="projects">
      <SectionTitle text="Projects" />
      <section className="flex flex-wrap items-center gap-8 justify-center mt-10 lg:gap-10">
        <ProjectCard project={ipTracker} />
        <ProjectCard project={toDoApp} />
        <ProjectCard project={countryQuiz} />
      </section>
    </section>
  );
}

export { Projects };
