import React from "react";
import { Icon } from "../Icon";

function SidebarButton({ socialMedia, link }) {
  return (
    <li>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit my ${socialMedia}`}
      >
        <Icon type={socialMedia} sidebarMedia />
      </a>
    </li>
  );
}

export { SidebarButton };
