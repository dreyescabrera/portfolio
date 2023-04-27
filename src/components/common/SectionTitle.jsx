export const SectionTitle = ({ children }) => {
	return (
		<h2 className="relative mb-8 text-primary dark:text-darkPrimary text-3xl font-bold font-luxury tracking-tight after:content[''] after:absolute after:-bottom-4 after:left-0 after:w-1/6 after:h-[.1875rem] after:rounded-full after:bg-secondary dark:after:bg-terciary xs:text-4xl lg:after:w-16 xl:tracking-normal transition-colors duration-500 after:transition-colors after:duration-500">
			{children}
		</h2>
	);
};
