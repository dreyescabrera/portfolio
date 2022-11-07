import React from "react";
import tinyURL from "/portfolio-pics/tinySmilingMe.jpg";
import URL from "/portfolio-pics/smilingMe.jpg";

function ProfileImage({ shape }) {
  switch (shape) {
    case "circle":
      return (
        <img
          src={tinyURL}
          className={`w-[130px] min-[375px]:w-[150px] object-cover object-top rounded-full aspect-square shadow-[0_0_0_10px_#1d2635] `}
          loading="lazy"
        />
      );
    case "square":
      return (
        <img
          src={URL}
          className={`w-3/4 max-w-xs self-center rounded`}
          loading="lazy"
        />
      );
    default:
      throw new Error("Profile Image Shape needs to be defined.");
  }
}

export { ProfileImage };
