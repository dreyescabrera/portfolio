import React from "react";

function LinkButton({ text, link }) {
  return (
    <a
      href={link}
      className="px-4 py-2 text-sm bg-[#0e5eb1] text-white rounded-full shadow shadow-blue-200 hover:bg-[#0b4b8d] transition-all duration-300 lg:text-base lg:px-3"
    >
      {text}
    </a>
  );
}

export { LinkButton };
