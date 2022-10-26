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
      ev.target.innerWidth > 768
        ? setSidebarIsOpen(true)
        : setSidebarIsOpen(false);
    });
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
