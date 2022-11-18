import React from "react";

function ProjectButton({ link, text, mainCTO }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`${
        mainCTO
          ? "bg-secondary text-gray-50 border-2 border-transparent hover:bg-primary"
          : "text-terciary border-terciary border-2 hover:bg-[#ccf4] hover:bg-gray-100"
      } px-4 py-2 text-sm xs:text-base rounded-sm transition-colors duration-200 lg:text-base lg:px-3`}
    >
      {text}
    </a>
  );
}

export { ProjectButton };
