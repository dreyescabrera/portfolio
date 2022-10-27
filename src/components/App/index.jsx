import React from "react";
import { ProfileImage } from "../ProfileImage/";
import { SidebarMenu } from "../SidebarMenu/";
import { Hero } from "../Hero";

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(
    () => window.innerWidth > 768
  );

  // if (window.innerWidth > 768) setSidebarIsOpen(true);

  React.useEffect(() => {
    window.addEventListener("resize", (ev) => {
      // console.log(ev, ev.target.innerWidth, sidebarIsOpen);
      ev.target.innerWidth >= 768
        ? setSidebarIsOpen(true)
        : setSidebarIsOpen(false);
      if (ev.target.innerWidth === 767 || ev.target.innerWidth === 769) {
        console.log(ev, ev.target.innerWidth, sidebarIsOpen);
        setTimeout(() => {}, 50);
      }
    });

    window.addEventListener("click", () => {});
  }, []);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <SidebarMenu sidebarIsOpen={sidebarIsOpen} />
      <div className="transition-all duration-700 md:pl-60 lg:pl-72">
        <Hero
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        ></Hero>
      </div>
    </React.Fragment>
  );
}

export { App };
