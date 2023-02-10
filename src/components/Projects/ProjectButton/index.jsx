import React from "react";

function ProjectButton({ link, text, mainCtA }) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className={`${
				mainCtA
					? "bg-secondary text-white border-2 border-transparent hover:bg-primary dark:text-primary dark:bg-darkPrimary dark:hover:bg-lightGray"
					: "text-terciary border-terciary border-2 dark:hover:bg-[rgba(51,101,176,0.3)]  dark:text-lightGray dark:border-darkSecondary"
			} px-4 py-2 text-sm xs:text-base rounded-sm transition-colors duration-200 lg:text-base lg:px-3`}
		>
			{text}
		</a>
	);
}

export { ProjectButton };
