import React from "react";
import parse from "html-react-parser";
import { LinkButton } from "../LinkButton";

function ProjectCard({ project }) {
  return (
    <article className="bg-gray-50 max-w-xs px-4 py-6 rounded-xl shadow-md lg:shadow">
      <img
        src={project.imgURL}
        alt={project.title}
        className="rounded-md"
        loading="lazy"
      />
      <h3 className="my-4 text-xl font-semibold text-primary underline decoration-secondary underline-offset-8 lg:text-2xl">
        {project.title}
      </h3>

      <p className="text-sm lg:text-base">{parse(project.description)}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <LinkButton content="View Demo" link={project.demo} type="project" />
        <LinkButton
          content="Source Code"
          link={project.source}
          type="project"
        />
      </div>
    </article>
  );
}

export { ProjectCard };
