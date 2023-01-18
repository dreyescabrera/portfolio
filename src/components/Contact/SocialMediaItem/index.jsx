import React from "react";
import { Icon } from "../../common/Icon";

function SocialMediaItem({ name, nickname, link }) {
  return (
    <li className="flex w-full p-4 gap-4 items-center rounded-sm shadow-md">
      <span className="w-11 bg-quintenary aspect-square flex justify-center items-center rounded-full">
        <Icon type={name.toLowerCase()} styles="w-6 h-6 text-secondary" />
      </span>
      <div>
        <h3 className="font-bold text-xl xs:text-2xl text-quaternary">
          {name}
        </h3>
        <a
          href={link}
          className=" text-midGray xs:text-lg xl:text-xl lg:hover:text-gray-800 align-bottom transition-colors duration-150"
          aria-label={`Visit my ${name}`}
          target="_blank"
          rel="noreferrer"
        >
          {nickname}
          <Icon
            type="externalLink"
            styles="relative top-0.5 w-5 h-5 ml-1.5 inline-block align-text-top"
          />
        </a>
      </div>
    </li>
  );
}

export { SocialMediaItem };
