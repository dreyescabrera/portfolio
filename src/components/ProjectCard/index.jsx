import React from "react";
import DOMPurify from "dompurify";

import { ProjectButton } from "../ProjectButton";

function ProjectCard({ project }) {
  return (
    <article className="bg-gray-50 max-w-sm p-6 rounded-sm shadow-md">
      <img
        src={project.imgURL}
        alt={project.title}
        aria-label={project.title}
        className="w-full aspect-video rounded-sm"
        loading="lazy"
      />
      <h3 className="my-4 text-xl xs:text-2xl font-semibold text-primary underline decoration-secondary underline-offset-8 lg:text-2xl">
        {project.title}
      </h3>

      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(project.description),
        }}
        className="text-sm xs:text-base lg:text-base"
      ></p>
      <div className="mt-6 flex flex-wrap gap-2">
        <ProjectButton text="View Demo" link={project.demo} mainCTO />
        <ProjectButton text="Source Code" link={project.source} />
      </div>
    </article>
  );
}

export { ProjectCard };
