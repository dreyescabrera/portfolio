import { Icon } from "@common/Icon";

function NavItem({ id, text, iconName, isActive, callback }) {
	const closeSidebar = () => {
		if (document.documentElement.clientWidth < 678) {
			callback();
		}
	};
	return (
		<a
			href={"#" + id}
			className={`flex items-center space-x-4 capitalize font-casual transition-colors duration-100 ${
				isActive ? "text-lightGray" : ""
			}`}
			onClick={closeSidebar}
		>
			<Icon
				type={iconName}
				styles={`w-6 aspect-square transition-colors duration-100 ${
					isActive ? "text-terciary" : ""
				}`}
			/>
			<span>{text}</span>
		</a>
	);
}

export { NavItem };
