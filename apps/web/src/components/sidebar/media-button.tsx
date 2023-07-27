import { Icon, IconType } from '@/components/common/icon';

type MediaButtonProps = {
	socialMedia: IconType;
	link: string;
};

export function MediaButton({ socialMedia, link }: MediaButtonProps) {
	const capitalizedWord = socialMedia.charAt(0).toUpperCase() + socialMedia.slice(1);
	return (
		<li>
			<a
				href={link}
				target="_blank"
				rel="noreferrer"
				aria-label={`Visit my ${socialMedia}`}
				title={capitalizedWord}
			>
				<span className="transition-100 flex aspect-square w-10 items-center justify-center rounded-full bg-darkGray transition-transform hover:scale-105 3xl:w-12">
					<Icon type={socialMedia} styles="w-6 3xl:w-7 aspect-square text-lightGray" />
				</span>
			</a>
		</li>
	);
}
