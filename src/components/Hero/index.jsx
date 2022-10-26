import React from "react";
import { HeroButtton } from "../HeroButton";
import { useModifyText } from "./useModifyText";

function Hero() {
  const { textValue, answerQuestion } = useModifyText();

  return (
    <header
      className={`grid grid-cols-6 grid-rows-5 justify-items-center w-full h-screen bg-hero-desktop bg-cover bg-center text-[#16303b] lg:justify-items-stretch`}
    >
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
