import React from "react";
import { Icon } from "../../common/Icon";

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
          isCurrentSection ? "text-lightGray" : null
        }`}
        onClick={closeSidebar}
      >
        <Icon
          type={iconName}
          styles={`w-6 aspect-square transition-colors duration-100 ${
            isCurrentSection && "text-terciary"
          }`}
        />
        <span>{name}</span>
      </a>
    </li>
  );
}

export { NavItem };
