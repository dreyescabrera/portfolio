import React from "react";
import { Icon } from "../Icon";

function LinkButton({ content, link, type }) {
  switch (type) {
    case "media":
      return (
        <li>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit my ${content}`}
          >
            <Icon type={content} sidebarMedia />
          </a>
        </li>
      );
    case "project":
      return (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 text-sm bg-secondary text-gray-50 rounded-full hover:bg-primary transition-colors duration-200 lg:text-base lg:px-3"
        >
          {content}
        </a>
      );
    default:
      throw new Error("type was not specified");
  }
}

export { LinkButton };
