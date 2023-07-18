import { sanitize } from 'isomorphic-dompurify';
import { ProjectButton } from './project-button';
import { Icon, IconType } from '@/components/common/icon';

type ProjectCardProps = {
	title: string;
	img: {
		src: string;
		alt: string;
	};
	description: string;
	technologies: {
		id: string;
		name: string;
	}[];
	demo: string;
	source: string;
};

export const ProjectCard = ({
	title,
	img,
	description,
	technologies,
	demo,
	source,
}: ProjectCardProps) => {
	return (
		<article className="max-w-sm p-6 rounded-sm shadow-md dark:bg-quaternary transition-colors duration-500">
			<img {...img} aria-label={title} className="w-full aspect-video rounded-sm" loading="lazy" />
			<h3 className="my-4 text-xl xs:text-2xl font-semibold text-primary dark:text-darkPrimary underline decoration-secondary dark:decoration-terciary underline-offset-8 lg:text-2xl transition-colors duration-500">
				{title}
			</h3>
			<p
				dangerouslySetInnerHTML={{
					__html: sanitize(description),
				}}
				className="pb-5 text-darkGray dark:text-lightGray text-sm xs:text-base lg:text-lg transition-colors duration-500"
			/>
			<div className="flex my-4 gap-2">
				{technologies.map((tech) => (
					<Icon type={tech.name as IconType} key={tech.id} styles="w-10 h-10 lg:w-12 lg:h-12" />
				))}
			</div>
			<div className="flex flex-wrap gap-2">
				<ProjectButton link={demo} variant="call-to-action">
					View Demo
				</ProjectButton>
				<ProjectButton link={source}>Source Code</ProjectButton>
			</div>
		</article>
	);
};
