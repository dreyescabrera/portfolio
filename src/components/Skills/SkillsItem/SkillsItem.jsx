import { Icon } from "@common/Icon";

export const SkillsItem = ({ name, iconName }) => {
	return (
		<li className="flex flex-col w-24 h-28 p-2 justify-center items-center gap-1 text-center shadow-md dark:bg-quaternary dark:text-white lg:w-28 lg:h-32 transition-colors duration-500">
			<Icon type={iconName} styles="w-14 h-14 lg:w-16 lg:h-16" />
			<span className="text-black tracking-wide leading-5 font-luxury dark:text-lightGray transition-colors duration-500">
				{name}
			</span>
		</li>
	);
};
