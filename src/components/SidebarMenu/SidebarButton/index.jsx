import React from "react";
import { Icon } from "../../common/Icon";

function SidebarButton({ socialMedia, link }) {
  const capitalizedWord =
    socialMedia.charAt(0).toUpperCase() + socialMedia.slice(1);
  return (
    <li>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit my ${socialMedia}`}
      >
        <span
          className="w-10 bg-[#ccc2] aspect-square flex justify-center items-center rounded-full transition-transform transition-100 hover:scale-105"
          title={capitalizedWord}
        >
          <Icon type={socialMedia} styles="w-6 aspect-square text-gray-100" />
        </span>
      </a>
    </li>
  );
}

export { SidebarButton };
