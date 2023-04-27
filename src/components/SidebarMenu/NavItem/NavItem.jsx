export const NavItem = ({ id, callback, children }) => {
	const closeSidebar = () => {
		if (document.documentElement.clientWidth < 678) {
			callback();
		}
	};
	return (
		<a
			href={"#" + id}
			className={`flex items-center space-x-4 capitalize font-casual transition-colors duration-100 `}
			onClick={closeSidebar}
		>
			{children}
		</a>
	);
};
