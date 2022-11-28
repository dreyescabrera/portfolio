import React from "react";
import { SectionTitle } from "../SectionTitle";
import { TextContent } from "../TextContent";
import { SkillsItem } from "../SkillsItem";

function Skills() {
  return (
    <section className="m-sm lg:m-lg">
      <SectionTitle text="Skills" />
      <TextContent
        text="These are the skills I have managed to gather through all my process as
        a self-taught developer. Every day I develop my own knowledge on these
        and new technologies that captivates me to keep moving forward."
      />
      <ul className="flex flex-wrap gap-6 m-6 justify-evenly lg:gap-10">
        <SkillsItem name="HTML" iconName="html" />
        <SkillsItem name="CSS" iconName="css" />
        <SkillsItem name="SASS" iconName="sass" />
        <SkillsItem name="JavaScript" iconName="javascript" />
        <SkillsItem name="React.js" iconName="react" />
        <SkillsItem name="Tailwind CSS" iconName="tailwind" />
        <SkillsItem name="Vite.js" iconName="vite" />
        <SkillsItem name="Git" iconName="git" />
      </ul>
    </section>
  );
}

export { Skills };
