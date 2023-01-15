import React from "react";
import DOMPurify from "dompurify";
import { Icon } from "../../common/Icon";

import { ProjectButton } from "../ProjectButton";

function ProjectCard({ project }) {
  return (
    <article className="max-w-sm p-6 rounded-sm shadow-md">
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
        className="text-gray-800 text-sm xs:text-base lg:text-lg"
      />
      <div className="flex my-4 gap-2">
        {project.technologies.map((tech) => (
          <Icon type={tech} key={tech} styles="w-10 h-10 lg:w-12 lg:h-12" />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <ProjectButton text="View Demo" link={project.demo} mainCtA />
        <ProjectButton text="Source Code" link={project.source} />
      </div>
    </article>
  );
}

export { ProjectCard };
