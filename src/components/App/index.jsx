import React from "react";
import { ProfileImage } from "../ProfileImage/";
import { SidebarMenu } from "../SidebarMenu/";
import { Hero } from "../Hero";
import { About } from "../About";
import { Skills } from "../Skills";

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
      <div className="bg-gray-50 transition-all duration-700 md:pl-60 lg:pl-72">
        <Hero
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        />
        <div className="p-8 lg:px-12 lg:py-16 xl:px-40">
          <About />
          <Skills />
        </div>
      </div>
    </React.Fragment>
  );
}

export { App };
