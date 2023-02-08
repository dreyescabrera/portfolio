import React from "react";
import { Icon } from "../../common/Icon";

function SocialMediaItem({ name, nickname, link }) {
	return (
		<li className="flex w-full p-4 gap-4 items-center rounded-sm shadow-md dark:bg-quaternary">
			<span className="w-11 bg-quintenary aspect-square flex justify-center items-center rounded-full dark:bg-primary">
				<Icon
					type={name.toLowerCase()}
					styles="w-6 h-6 text-secondary dark:text-lightGray"
				/>
			</span>
			<div>
				<h3 className="font-bold text-xl xs:text-2xl text-quaternary dark:text-terciary">
					{name}
				</h3>
				<a
					href={link}
					className=" text-midGray dark:text-lightGray xs:text-lg xl:text-xl lg:hover:text-gray-800 dark:lg:hover:text-quintenary align-bottom transition-colors duration-150"
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
}

export { SocialMediaItem };
