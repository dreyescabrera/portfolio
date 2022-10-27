import React from "react";

function ScrollButton() {
  return (
    <button className="relative row-start-5 col-start-3 place-self-center col-end-5 border-[3px] border-solid rounded-full text-white animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="relative top-[2px] w-10 h-14 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  );
}

export { ScrollButton };
