import React from "react";
import { Icon } from "../../common/Icon";

function SkillsItem({ name, iconName }) {
  return (
    <li className="flex flex-col w-24 h-28 p-2 justify-center items-center gap-1 text-center shadow-md lg:w-28 lg:h-32">
      <Icon type={iconName} styles="w-14 h-14 lg:w-16 lg:h-16" />
      <span className="tracking-wide leading-5 font-luxury">{name}</span>
    </li>
  );
}

export { SkillsItem };
