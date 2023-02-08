import React from "react";

function ProjectButton({ link, text, mainCtA }) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className={`${
				mainCtA
					? "bg-secondary text-white border-2 border-transparent hover:bg-primary dark:bg-terciary dark:hover:bg-primary"
					: "text-terciary border-terciary border-2 hover:bg-quintenary dark:hover:bg-primary dark:hover:border-transparent dark:text-lightGray"
			} px-4 py-2 text-sm xs:text-base rounded-sm transition-colors duration-200 lg:text-base lg:px-3`}
		>
			{text}
		</a>
	);
}

export { ProjectButton };
