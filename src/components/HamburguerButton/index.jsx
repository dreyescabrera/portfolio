import React from "react";

function HamburguerButton({ sidebarIsOpen, setSidebarIsOpen }) {
  return (
    <div
      className="relative flex justify-center items-center w-14 h-14 cursor-pointer transition-all duration-500 ease-in-out z-20 row-start-1 col-start-5 col-end-7 justify-self-center self-center sm:col-start-6  md:hidden"
      onClick={() => setSidebarIsOpen((prev) => !prev)}
    >
      <div
        className={`w-[35px] h-1 bg-white rounded-md transition-all duration-1000 ease-in-out 
           before:content[''] before:absolute before:w-[35px] before:h-1 before:bg-white before:rounded-md before:transition-all before:duration-1000 before:ease-in-out before:-translate-y-3 
           after:content[''] after:absolute after:w-[35px] after:h-1 after:bg-white after:rounded-md after:transition-all after:duration-1000 after:ease-in-out after:translate-y-3
           ${
             sidebarIsOpen
               ? "-translate-x-[26px] bg-transparent before:rotate-45 before:translate-x-[25px] before:translate-y-[0px] after:rotate-[-45deg] after:translate-x-[25px] after:translate-y-[0px]"
               : undefined
           }`}
      ></div>
    </div>
  );
}

export { HamburguerButton };
