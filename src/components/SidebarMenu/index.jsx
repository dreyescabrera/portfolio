import React from "react";
import { ProfileImage } from "../ProfileImage/";
import { SidebarButton } from "../SidebarButton";
import { NavItem } from "../NavItem";

function SidebarMenu({ sidebarIsOpen, activeNavItem, setSidebarIsOpen }) {
  return (
    <aside
      className={`fixed w-full left-0 h-screen flex flex-col justify-start items-center px-6 pt-16 gap-5 bg-[#050c19] transition-all duration-700 md:pt-8 z-10 ${
        sidebarIsOpen ? " left-0" : "-left-full"
      } md:w-60  lg:w-72`}
    >
      <ProfileImage shape="circle" />
      <h2 className="text-3xl text-gray-200 font-semibold font-luxury tracking-tight md:text-2xl ">
        Diego Reyes
      </h2>
      <ul className="flex space-x-5">
        <SidebarButton
          link="https://www.instagram.com/realdiegor/"
          socialMedia="instagram"
        />
        <SidebarButton
          link="https://github.com/realDiegoR"
          socialMedia="github"
        />
        <SidebarButton
          link="https://www.linkedin.com/in/diegoreyescabrera/"
          socialMedia="linkedin"
        />
      </ul>
      <nav className="pt-2 md:self-start lg:pt-8">
        <ul className="flex flex-col gap-5 text-[#82858c] font-semibold sm:text-xl md:text-lg">
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
    </aside>
  );
}

export { SidebarMenu };
