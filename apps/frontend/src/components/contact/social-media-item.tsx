import { Icon, IconType } from '@/components/common/icon';

type SocialMediaItemProps = {
	name: string;
	nickname: string;
	link: string;
};

export const SocialMediaItem = ({ name, nickname, link }: SocialMediaItemProps) => {
	return (
		<li className="flex w-full items-center gap-4 rounded-sm p-4 shadow-md transition-colors duration-500 dark:bg-quaternary">
			<span className="flex aspect-square w-11 items-center justify-center rounded-full bg-quintenary transition-colors duration-500 dark:bg-primary">
				<Icon
					type={name.toLowerCase() as IconType}
					styles="w-6 h-6 text-secondary dark:text-lightGray transition-colors duration-500"
				/>
			</span>
			<div>
				<h3 className="text-xl font-bold text-quaternary transition-colors duration-500 dark:text-darkSecondary xs:text-2xl">
					{name}
				</h3>
				<a
					href={link}
					className=" align-bottom text-midGray transition-colors duration-150 hover:text-gray-800 dark:text-lightGray dark:hover:text-darkPrimary xs:text-lg xl:text-xl"
					aria-label={`Visit my ${name}`}
					target="_blank"
					rel="noreferrer"
				>
					{nickname}
					<Icon
						type="externalLink"
						styles="relative top-0.5 w-5 h-5 ml-1.5 inline-block align-text-top"
					/>
				</a>
			</div>
		</li>
	);
};
