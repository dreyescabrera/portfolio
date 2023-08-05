import Image from 'next/image';
import { sanitize } from 'isomorphic-dompurify';
import { Icon, IconType } from '@/components/common/icon';
import { AnchorButton } from '../common/anchor-button';

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
		<article className="max-w-sm rounded-sm p-6 shadow-md transition-colors duration-500 dark:bg-quaternary">
			<Image
				src={img.src}
				alt={img.alt}
				width={300}
				height={200}
				aria-label={title}
				className="aspect-video w-full rounded-sm"
			/>
			<h3 className="my-4 text-xl font-semibold text-primary underline decoration-secondary underline-offset-8 transition-colors duration-500 dark:text-darkPrimary dark:decoration-terciary xs:text-2xl lg:text-2xl">
				{title}
			</h3>
			<p
				dangerouslySetInnerHTML={{
					__html: sanitize(description),
				}}
				className="pb-5 text-sm text-darkGray transition-colors duration-500 dark:text-lightGray xs:text-base lg:text-lg"
			/>
			<div className="my-4 flex gap-2">
				{technologies.map((tech) => (
					<Icon type={tech.name as IconType} key={tech.id} styles="w-10 h-10 lg:w-12 lg:h-12" />
				))}
			</div>
			<div className="flex flex-wrap gap-2">
				<AnchorButton link={demo}>View Demo</AnchorButton>
				<AnchorButton variant="secondary" link={source}>
					Source Code
				</AnchorButton>
			</div>
		</article>
	);
};
