import DOMPurify from "dompurify";
import { ProjectButton } from "../ProjectButton/ProjectButton";
import { Icon } from "@common/Icon";

export const ProjectCard = ({
	title,
	img,
	description,
	technologies,
	demo,
	source,
}) => {
	return (
		<article className="max-w-sm p-6 rounded-sm shadow-md dark:bg-quaternary transition-colors duration-500">
			<img
				{...img}
				aria-label={title}
				className="w-full aspect-video rounded-sm"
				loading="lazy"
			/>
			<h3 className="my-4 text-xl xs:text-2xl font-semibold text-primary dark:text-darkPrimary underline decoration-secondary dark:decoration-terciary underline-offset-8 lg:text-2xl transition-colors duration-500">
				{title}
			</h3>

			<p
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(description),
				}}
				className="pb-5 text-darkGray dark:text-lightGray text-sm xs:text-base lg:text-lg transition-colors duration-500"
			/>
			<div className="flex my-4 gap-2">
				{technologies.map((tech) => (
					<Icon
						type={tech.name}
						key={tech.id}
						styles="w-10 h-10 lg:w-12 lg:h-12"
					/>
				))}
			</div>
			<div className="flex flex-wrap gap-2">
				<ProjectButton text="View Demo" link={demo} mainCtA />
				<ProjectButton text="Source Code" link={source} />
			</div>
		</article>
	);
};
