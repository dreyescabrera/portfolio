import React from "react";
import { Icon } from "../Icon";

function SkillsItem({ name, iconName }) {
  return (
    <li className="flex flex-col w-20 justify-center items-center gap-1 text-center">
      <Icon type={iconName} />
      <span className="leading-4">{name}</span>
    </li>
  );
}

export { SkillsItem };
