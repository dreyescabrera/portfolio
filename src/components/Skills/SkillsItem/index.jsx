import React from "react";
import { Icon } from "../common/Icon";

function SkillsItem({ name, iconName }) {
  return (
    <li className="flex flex-col w-24 p-2 justify-center items-center gap-1 text-center shadow-md">
      <Icon type={iconName} styles="w-14 h-14 lg:w-16 lg:h-16" />
      <span className="tracking-wide leading-5 font-luxury lg:text">
        {name}
      </span>
    </li>
  );
}

export { SkillsItem };
