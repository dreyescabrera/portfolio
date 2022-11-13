import React from "react";
import { SectionTitle } from "../SectionTitle";
import { ProfileImage } from "../ProfileImage";

function About({ refference }) {
  const arrowLeft = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4 inline-block text-[#21396c] mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );

  return (
    <section className="m-sm lg:m-lg" id="whoami?" ref={refference}>
      <SectionTitle text="Who Am I?" />
      <p className="mt-8 lg:text-lg">
        Hello, I am Diego Reyes, a 19 years old frontend developer from
        Venezuela, currently located in Atlanta, USA.
      </p>
      <p className="lg:text-lg">
        One year ago I found a passion for creating when I took a course of
        programming with Javascript, since then I have been working on
        developing my capability of solving users problems in a very efficient
        way, and a very clean code within my apps. I love understanding how
        things work from behind, I really like that.
      </p>
      <section className="flex flex-col items-center gap-10 mt-8 lg:flex-row lg:justify-around lg:text-lg xl:my-16">
        <ProfileImage shape="square" />
        <article className="space-y-4 max-w-lg">
          <h3 className="text-primary font-bold text-2xl text-center tracking-tight md:text-3xl">
            Frontend Developer
          </h3>
          <p>
            {arrowLeft}I am focused on learning new frontend frameworks and
            libraries, such as React.js and its ecosystem, soon to come the
            whole MERN Stack.
          </p>
          <p>
            {arrowLeft}
            On my days off, I try to split my time between coding my current
            side project and getting some quality moments near the people I love
            and green areas... and often playing my forever-fav videogames.
          </p>
          <p>
            {arrowLeft}I am a never giving up person. Every day is a new step
            forward to my personal goals. Life is so beautiful when you pursue
            your reasons for living it.
          </p>
        </article>
      </section>
    </section>
  );
}

export { About };
