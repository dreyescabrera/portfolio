import React from "react";
import { useIcons } from "./useIcons";

function Skills() {
  const icons = useIcons();

  return (
    <section className="">
      <h2 className="relative text-[#21396c] text-3xl font-bold tracking-tight after:content[''] after:absolute after:-bottom-4 after:left-0 after:w-1/6 after:h-[3px] after:rounded-full after:bg-[#0e5eb1] lg:after:w-16 xl:tracking-normal">
        Skills
      </h2>
      <p className="mt-10 lg:text-lg">
        These are the skills I have managed to gather through all my process as
        a self-taught developer. Every day I develop my own knowledge on these
        and new technologies that captivates me to keep moving forward.
      </p>
      <div className="flex flex-wrap gap-6 m-6 justify-evenly">
        <span className="flex flex-col w-20 justify-center items-center">
          {icons.html}
          HTML
        </span>
        <span className="flex flex-col w-20 justify-center items-center">
          {icons.css}
          CSS/SASS
        </span>
        <span className="flex flex-col w-20 justify-center items-center">
          {icons.javascript}
          JavaScript
        </span>
        <span className="flex flex-col w-20 justify-center items-center">
          {icons.react}
          React.js
        </span>
        <span className="flex flex-col w-20 justify-center items-center text-center leading-4">
          {icons.tailwind}
          Tailwind CSS
        </span>
        <span className="flex flex-col w-20 justify-center items-center">
          {icons.vite}
          Vite.js
        </span>
        <span className="flex flex-col w-20 justify-center items-center">
          {icons.git}
          Git
        </span>
      </div>
    </section>
  );
}

export { Skills };
