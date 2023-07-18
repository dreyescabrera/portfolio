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
				<span className="w-10 bg-darkGray aspect-square flex justify-center items-center rounded-full transition-transform transition-100 hover:scale-105 3xl:w-12">
					<Icon type={socialMedia} styles="w-6 3xl:w-7 aspect-square text-lightGray" />
				</span>
			</a>
		</li>
	);
}
