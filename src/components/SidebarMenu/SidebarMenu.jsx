import { ProfileImage } from "@common/ProfileImage";
import { SidebarMediaButton } from "./SidebarMediaButton/SidebarMediaButton";
import { ThemeSwitch } from "./ThemeSwitch/ThemeSwitch";

const NAV_ITEMS = [
	{ text: "home", id: "home", iconName: "home" },
	{
		text: "who am i?",
		id: "whoami?",
		iconName: "profile",
	},
	{
		text: "projects",
		id: "projects",
		iconName: "bolt",
	},
	{ text: "contact", id: "contact", iconName: "mail" },
];

export const SidebarMenu = ({ isActive, renderNavItem }) => {
	return (
		<aside
			className={`fixed w-4/5 left-0 h-screen flex flex-col justify-start items-center px-6 py-8 gap-5 overflow-auto bg-black transition-transform duration-500 z-20 md:w-60 lg:w-72 2xl:w-1/6 ${
				isActive ? "translate-x-0" : "-translate-x-full"
			} bg-`}
		>
			<ProfileImage shape="circle" />
			<h2 className="text-3xl text-lightGray font-semibold font-luxury md:text-2xl 3xl:text-4xl">
				Diego Reyes
			</h2>
			<ul className="flex space-x-5">
				<SidebarMediaButton
					link="https://www.instagram.com/realdiegor/"
					socialMedia="instagram"
				/>
				<SidebarMediaButton
					link="https://github.com/realDiegoR"
					socialMedia="github"
				/>
				<SidebarMediaButton
					link="https://www.linkedin.com/in/diegoreyescabrera/"
					socialMedia="linkedin"
				/>
			</ul>
			<nav className="pt-2 md:self-start lg:pt-8">
				<ul className="flex flex-col gap-5 text-midGray font-semibold tracking-wide text-lg md:text-xl md:gap-6 3xl:text-2xl">
					{NAV_ITEMS.map((item) => (
						<li key={item.id}>{renderNavItem(item)}</li>
					))}
				</ul>
			</nav>
			<ThemeSwitch />
		</aside>
	);
};
