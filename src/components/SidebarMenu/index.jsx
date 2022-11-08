import React from "react";
import { ProfileImage } from "../ProfileImage/";
import { LinkButton } from "../LinkButton";
import { NavItem } from "../NavItem";

function SidebarMenu({ sidebarIsOpen }) {
  return (
    <aside
      className={`fixed w-full left-0 h-screen flex flex-col justify-start items-center px-6 pt-16 gap-5 bg-[#050c19] transition-all duration-700 md:pt-8  ${
        sidebarIsOpen ? " left-0" : "-left-full"
      }  z-10 md:w-60  lg:w-72`}
    >
      <ProfileImage shape="circle" />
      <h2 className="text-3xl text-gray-200 font-semibold font-luxury tracking-tight md:text-2xl ">
        Diego Reyes
      </h2>
      <ul className="flex space-x-5">
        <LinkButton
          type="media"
          link="https://www.instagram.com/realdiegor/"
          content="instagram"
        />
        <LinkButton
          type="media"
          link="https://github.com/realDiegoR"
          content="github"
        />
        <LinkButton
          type="media"
          link="https://www.linkedin.com/in/diegoalejandroreyescabrera/"
          content="linkedin"
        />
      </ul>
      <nav className="pt-2 md:self-start lg:pt-8">
        <ul className="flex flex-col gap-5 text-[#82858c] font-semibold sm:text-xl md:text-lg">
          <NavItem name="home" id="home" iconName="home" />
          <NavItem name="who am i?" id="whoami?" iconName="profile" />
          <NavItem name="projects" id="projects" iconName="bolt" />
          <NavItem name="contact" id="contact" iconName="mail" />
        </ul>
      </nav>
    </aside>
  );
}

export { SidebarMenu };
