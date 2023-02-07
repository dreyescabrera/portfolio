import React from "react";
import { ProfileImage } from "../common/ProfileImage";
import { SidebarMediaButton } from "./SidebarMediaButton";
import { NavItem } from "./NavItem";
import { Icon } from "../common/Icon";

function SidebarMenu({ sidebarIsOpen, activeNavItem, setSidebarIsOpen }) {
	const changeTheme = (ev) => {
		ev.currentTarget.firstChild.classList.toggle("translate-x-8");
		ev.currentTarget.firstChild.classList.toggle("rotate-180");
	};

	return (
		<aside
			className={`fixed w-full left-0 h-screen flex flex-col justify-start items-center px-6 py-8 gap-5 overflow-auto bg-black dark:bg-red-500 transition-all duration-700 z-10 ${
				sidebarIsOpen ? " left-0" : "-left-full"
			} md:w-60  lg:w-72 2xl:w-1/6`}
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
					<NavItem
						name="home"
						id="home"
						iconName="home"
						activeNavItem={activeNavItem}
						setSidebarIsOpen={setSidebarIsOpen}
					/>
					<NavItem
						name="who am i?"
						id="whoami?"
						iconName="profile"
						activeNavItem={activeNavItem}
						setSidebarIsOpen={setSidebarIsOpen}
					/>
					<NavItem
						name="projects"
						id="projects"
						iconName="bolt"
						activeNavItem={activeNavItem}
						setSidebarIsOpen={setSidebarIsOpen}
					/>
					<NavItem
						name="contact"
						id="contact"
						iconName="mail"
						activeNavItem={activeNavItem}
						setSidebarIsOpen={setSidebarIsOpen}
					/>
				</ul>
			</nav>
			<div className="flex gap-2 items-center justify-center mt-6 self-start ">
				<Icon type="sun" styles="w-6 h-full text-white" />
				<div
					className="w-14 h-6 p-0.5 bg-red-50  rounded-full overflow-hidden cursor-pointer"
					onClickCapture={changeTheme}
				>
					<div className="w-5 h-full bg-gradient-to-r from-terciary to-primary bg-terciary rounded-full transition-transform duration-500 ease-in-out"></div>
				</div>
				<Icon type="moon" styles="w-6 h-full text-white" />
			</div>
		</aside>
	);
}

export { SidebarMenu };
