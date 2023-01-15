import React from "react";
import tinyURL from "/src/assets/img/mini-profile-picture.webp";
import URL from "/src/assets/img/profile-picture.webp";

function ProfileImage({ shape }) {
  switch (shape) {
    case "circle":
      return (
        <img
          src={tinyURL}
          alt="Profile Image"
          className={`w-[130px] min-[375px]:w-[150px] object-cover object-top rounded-full aspect-square shadow-[0_0_0_10px] shadow-darkGray`}
          loading="lazy"
        />
      );
    case "square":
      return (
        <img
          src={URL}
          alt="Profile Image"
          className={`w-3/4 h-full max-w-xs self-center rounded`}
          loading="lazy"
        />
      );
    default:
      throw new Error("Profile Image Shape needs to be defined.");
  }
}

export { ProfileImage };
