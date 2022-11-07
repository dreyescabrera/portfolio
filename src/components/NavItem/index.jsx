import React from "react";
import { Icon } from "../Icon";

function NavItem({ id, name, iconName }) {
  const href = "#" + id;
  return (
    <li>
      <a href={href} className="flex items-center space-x-4 capitalize">
        <Icon type={iconName} navMenu />
        <span>{name}</span>
      </a>
    </li>
  );
}

export { NavItem };
