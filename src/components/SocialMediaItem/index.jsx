import React from "react";
import { Icon } from "../Icon";

function SocialMediaItem({ name, nickname, link }) {
  return (
    <li className="flex w-full p-4 gap-4 items-center shadow-md">
      <Icon type={name.toLowerCase()} contactMedia />
      <div>
        <h3 className="font-bold text-xl text-quintenary">{name}</h3>
        <a
          href={link}
          className=" text-gray-500 lg:hover:text-gray-800 transition-colors duration-150"
          target="_blank"
          rel="noreferrer"
        >
          {nickname}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 ml-1.5 inline-block align-top"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>
    </li>
  );
}

export { SocialMediaItem };
