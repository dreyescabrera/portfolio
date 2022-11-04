import React from "react";
import { Icon } from "../Icon";

function Skills() {
  return (
    <section className="">
      <h2 className="relative pt-2 text-[#21396c] text-3xl font-bold tracking-tight after:content[''] after:absolute after:-bottom-4 after:left-0 after:w-1/6 after:h-[3px] after:rounded-full after:bg-[#0e5eb1] lg:pt-8 lg:after:w-16 xl:tracking-normal">
        Skills
      </h2>
      <p className="mt-10 lg:text-lg">
        These are the skills I have managed to gather through all my process as
        a self-taught developer. Every day I develop my own knowledge on these
        and new technologies that captivates me to keep moving forward.
      </p>
      <div className="flex flex-wrap gap-6 m-6 justify-evenly">
        <span className="flex flex-col w-20 justify-center items-center">
          <Icon type="html" />
          HTML
        </span>
        <span className="flex flex-col w-20 justify-center items-center">
          <Icon type="css" />
          CSS/SASS
        </span>
        <span className="flex flex-col w-20 justify-center items-center">
          <Icon type="javascript" />
          JavaScript
        </span>
        <span className="flex flex-col w-20 justify-center items-center">
          <Icon type="react" />
          React.js
        </span>
        <span className="flex flex-col w-20 justify-center items-center text-center leading-4">
          <Icon type="tailwind" />
          Tailwind CSS
        </span>
        <span className="flex flex-col w-20 justify-center items-center">
          <Icon type="vite" />
          Vite.js
        </span>
        <span className="flex flex-col w-20 justify-center items-center">
          <Icon type="git" />
          Git
        </span>
      </div>
    </section>
  );
}

export { Skills };
