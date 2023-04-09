import { ProfileImage } from "../common/ProfileImage";
import { SidebarMediaButton } from "./SidebarMediaButton/SidebarMediaButton";
import { ThemeSwitch } from "./ThemeSwitch/ThemeSwitch";

function SidebarMenu({ sidebarIsOpen, renderNavItem }) {
	const show = sidebarIsOpen ? "left-0" : "-left-full";
	return (
		<aside
			className={`fixed w-4/5 left-0 h-screen flex flex-col justify-start items-center px-6 py-8 gap-5 overflow-auto bg-black  transition-all duration-700 z-20 ${show} md:w-60  lg:w-72 2xl:w-1/6`}
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
					{renderNavItem({ name: "home", id: "home", iconName: "home" })}
					{renderNavItem({
						name: "who am i?",
						id: "whoami?",
						iconName: "profile",
					})}
					{renderNavItem({
						name: "projects",
						id: "projects",
						iconName: "bolt",
					})}
					{renderNavItem({ name: "contact", id: "contact", iconName: "mail" })}
				</ul>
			</nav>
			<ThemeSwitch />
		</aside>
	);
}

export { SidebarMenu };
