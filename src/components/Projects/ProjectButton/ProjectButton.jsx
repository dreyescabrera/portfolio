export const ProjectButton = ({ link, text, mainCtA }) => {
	const mainCtaColors =
		"bg-secondary text-white border-2 border-transparent hover:bg-primary dark:text-primary dark:bg-darkPrimary dark:hover:bg-lightGray";
	const regularColors =
		"text-terciary border-terciary border-2 hover:bg-quintenary dark:hover:bg-[rgba(51,101,176,0.3)]  dark:text-lightGray dark:border-darkSecondary";
	const colors = mainCtA ? mainCtaColors : regularColors;

	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className={`${colors} px-4 py-2 text-sm xs:text-base rounded-sm transition-colors duration-200 lg:text-base lg:px-3`}
		>
			{text}
		</a>
	);
};
