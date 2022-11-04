import React from "react";
import tinyImgUrl from "/portfolio-pics/smiling2square.png";
import biggerImgUrl from "/portfolio-pics/smiling2.jpg";

function ProfileImage({ shape }) {
  if (shape === "circle") {
    return (
      <img
        src={biggerImgUrl}
        className={`w-[150px] object-cover object-top rounded-full aspect-square shadow-[0_0_0_10px_#1d2635] `}
        loading="lazy"
      />
    );
  } else if (shape === "square") {
    return (
      <img
        src={biggerImgUrl}
        className={`w-3/4 max-w-xs self-center rounded`}
        loading="lazy"
      />
    );
  } else {
    throw new Error("Profile Image Shape needs to be defined.");
  }
}

export { ProfileImage };
