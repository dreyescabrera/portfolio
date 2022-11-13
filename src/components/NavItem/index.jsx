import React from "react";
import { Icon } from "../Icon";

function NavItem({ id, name, iconName, activeNavItem, setSidebarIsOpen }) {
  const href = "#" + id;
  const isCurrentSection = activeNavItem === id;
  const closeSidebar = () => {
    if (document.documentElement.clientWidth < 678) {
      setSidebarIsOpen(false);
      document.documentElement.classList.toggle("preventScroll");
    }
  };
  return (
    <li>
      <a
        href={href}
        className={`flex items-center space-x-4 capitalize font-casual transition-colors duration-100 ${
          isCurrentSection ? "text-gray-100" : null
        }`}
        onClick={closeSidebar}
      >
        <Icon type={iconName} navMenu isCurrentSection={isCurrentSection} />
        <span>{name}</span>
      </a>
    </li>
  );
}

export { NavItem };
