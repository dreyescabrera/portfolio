import React from "react";
import { LinkButton } from "../LinkButton";

function ProjectCard({ project }) {
  return (
    <div className="bg-gray-50 max-w-xs px-4 py-6 rounded-xl shadow-md lg:shadow">
      <img
        src={project.img}
        alt={project.title}
        className="rounded-md"
        loading="lazy"
      />
      <p className="my-4 text-xl font-semibold text-[#21396c] underline decoration-[#0e5eb1] underline-offset-8 lg:text-2xl">
        {project.title}
      </p>

      <p className="text-sm lg:text-base">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <LinkButton text="View Demo" link={project.demo} />
        <LinkButton text="Source Code" link={project.source} />
      </div>
    </div>
  );
}

export { ProjectCard };
