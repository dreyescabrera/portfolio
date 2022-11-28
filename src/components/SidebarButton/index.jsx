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
        <span className="w-10 bg-[#ccc2] aspect-square flex justify-center items-center rounded-full transition-transform transition-100 hover:scale-105">
          <Icon type={socialMedia} styles="w-6 aspect-square text-gray-100" />
        </span>
      </a>
    </li>
  );
}

export { SidebarButton };
