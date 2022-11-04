import React from "react";
import { ProfileImage } from "../ProfileImage/";
import { Icon } from "../Icon";

function SidebarMenu({ sidebarIsOpen }) {
  return (
    <aside
      className={`fixed w-full left-0 h-screen flex flex-col justify-start items-center px-6 pt-10 gap-4 bg-[#050c19] transition-all duration-700 min-[375px]:pt-20 md:pt-8  ${
        sidebarIsOpen ? " left-0" : "-left-full"
      }  z-10 md:w-60  lg:w-72`}
    >
      <ProfileImage shape="circle" />
      <p className="text-3xl text-gray-100 font-semibold tracking-tight md:text-2xl ">
        Diego Reyes
      </p>
      <div className="flex space-x-5">
        <a
          href="https://www.instagram.com/realdiegor/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon type="instagram" withBackground={true} />
        </a>
        <a
          href="https://github.com/realDiegoR"
          target="_blank"
          rel="noreferrer"
        >
          <Icon type="github" withBackground={true} />
        </a>
        <a
          href="https://www.linkedin.com/in/diegoalejandroreyescabrera/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon type="linkedin" withBackground={true} />
        </a>
      </div>
      <nav className="pt-8 md:self-start">
        <ul className="flex flex-col gap-5 text-[#82858c] font-semibold sm:text-xl md:text-lg">
          <li className="">
            <a href="#home" className="flex items-center space-x-4">
              <Icon type="home" navMenu />
              <span>Home</span>
            </a>
          </li>
          <li className="">
            <a href="#whoami" className="flex items-center space-x-4">
              <Icon type="profile" navMenu />
              <span>Who am I?</span>
            </a>
          </li>
          <li className="">
            <a href="#projects" className="flex items-center space-x-4">
              <Icon type="bolt" navMenu />
              <span>Projects</span>
            </a>
          </li>
          <li className="">
            <a href="#contact" className="flex items-center space-x-4">
              <Icon type="mail" navMenu />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export { SidebarMenu };
