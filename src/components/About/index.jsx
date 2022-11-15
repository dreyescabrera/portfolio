import React from "react";
import { SectionTitle } from "../SectionTitle";
import { ProfileImage } from "../ProfileImage";
import { Icon } from "../Icon";

function About({ refference }) {
  return (
    <section className="m-sm lg:m-lg" id="whoami?" ref={refference}>
      <SectionTitle text="Who Am I?" />
      <p className="mt-8 xs:text-lg">
        Hello, I am Diego Reyes, a 19 years old frontend developer from
        Venezuela, currently located in Atlanta, USA.
      </p>
      <p className="xs:text-lg">
        One year ago I found a passion for creating when I took a course of
        programming with Javascript, since then I have been working on
        developing my capability of solving users problems in a very efficient
        way, and a very clean code within my apps. I love understanding how
        things work from behind, I really like that.
      </p>
      <section className="flex flex-col items-center gap-10 mt-8 lg:flex-row lg:justify-around xl:my-16">
        <ProfileImage shape="square" />
        <article className="space-y-4 max-w-lg">
          <h3 className="text-primary font-bold text-2xl text-center tracking-tight xs:text-3xl">
            Frontend Developer
          </h3>
          <p className="xs:text-lg">
            <Icon type="arrowLeft" />I am focused on learning new frontend
            frameworks and libraries, such as React.js and its ecosystem, soon
            to come the whole MERN Stack.
          </p>
          <p className="xs:text-lg">
            <Icon type="arrowLeft" />
            On my days off, I try to split my time between coding my current
            side project and getting some quality moments near the people I love
            and green areas... and often playing my forever-fav videogames.
          </p>
          <p className="xs:text-lg">
            <Icon type="arrowLeft" />I am a never giving up person. Every day is
            a new step forward to my personal goals. Life is so beautiful when
            you pursue your reasons for living it.
          </p>
        </article>
      </section>
    </section>
  );
}

export { About };
