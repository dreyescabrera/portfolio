import React from "react";
import { ProfileImage } from "../ProfileImage/";
import { Icon } from "../Icon";

function SidebarMenu({ sidebarIsOpen }) {
  return (
    <aside
      className={`fixed w-full left-0 h-screen flex flex-col items-center p-6 space-y-4 bg-[#050c19] transition-all duration-700 ${
        sidebarIsOpen ? " left-0" : "-left-full"
      }  z-10 md:w-60  lg:w-72`}
    >
      <ProfileImage shape="circle" />
      <p className="text-3xl text-gray-100 font-semibold tracking-tight md:text-2xl">
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
          <li className="flex items-center space-x-4">
            <Icon type="home" />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-4">
            <Icon type="profile" />
            <span>Who am I?</span>
          </li>
          <li className="flex items-center space-x-4">
            <Icon type="bolt" />
            <span>Projects</span>
          </li>
          <li className="flex items-center space-x-4">
            <Icon type="mail" />
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export { SidebarMenu };
