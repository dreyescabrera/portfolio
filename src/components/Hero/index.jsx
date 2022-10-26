import React from "react";
import { HeroButtton } from "../HeroButton";
import { useModifyText } from "./useModifyText";

function Hero({ sidebarIsOpen, setSidebarIsOpen }) {
  const { textValue, answerQuestion } = useModifyText();

  return (
    <header
      className={`grid grid-cols-6 grid-rows-5 justify-items-center w-full h-screen bg-hero-desktop bg-cover bg-center text-[#16303b] lg:justify-items-stretch`}
    >
      <div
        className="relative flex justify-center items-center w-14 h-14 cursor-pointer transition-all duration-500 ease-in-out z-20 row-start-1 col-start-6 self-center md:hidden"
        onClick={() => setSidebarIsOpen((prev) => !prev)}
      >
        <div
          className={`w-[35px] h-1 bg-white rounded-md transition-all duration-1000 ease-in-out ${
            sidebarIsOpen
              ? "-translate-x-[26px] bg-transparent before:rotate-45 before:translate-x-[25px] before:translate-y-[0] after:rotate-[-45deg] after:translate-x-[25px] after:translate-y-[0]"
              : undefined
          }
           before:content[''] before:absolute before:w-[35px] before:h-1 before:bg-white before:rounded-md before:transition-all before:duration-1000 before:ease-in-out before:-translate-y-3 
           after:content[''] after:absolute after:w-[35px] after:h-1 after:bg-white after:rounded-md after:transition-all after:duration-1000 after:ease-in-out after:translate-y-3`}
        ></div>
      </div>
      <div className="col-start-2 row-start-2 col-end-6 space-y-3 antialiased sm:space-y-4">
        <h1 className="font-bold text-4xl tracking-tight sm:text-5xl lg:text-7xl">
          Diego Reyes
        </h1>
        <p className="pl-[2px] text-2xl font-semibold leading-7 lg:text-4xl">
          Frontend Developer
        </p>
        <div className="pt-6 font-medium lg:pt-10">
          <span className="text-xl lg:text-2xl">{textValue}</span>
          <div className="mt-2 space-x-4 lg:mt-4">
            <HeroButtton
              text="Why should I?"
              answerQuestion={answerQuestion}
              questionText={textValue}
            />
            <HeroButtton
              text="Of course!"
              answerQuestion={answerQuestion}
              questionText={textValue}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export { Hero };
