import React from "react";
import { Icon } from "../Icon";

function SocialMediaItem({ name, nickname, link }) {
  return (
    <li className="flex w-full p-4 gap-4 items-center rounded-sm shadow-md">
      <Icon type={name.toLowerCase()} contactMedia />
      <div>
        <h3 className="font-bold text-xl xs:text-2xl text-quintenary">
          {name}
        </h3>
        <a
          href={link}
          className=" text-gray-500 xs:text-lg lg:hover:text-gray-800 align-bottom transition-colors duration-150"
          aria-label={`Visit my ${name}`}
          target="_blank"
          rel="noreferrer"
        >
          {nickname}
          <Icon type="externalLink" />
        </a>
      </div>
    </li>
  );
}

export { SocialMediaItem };
