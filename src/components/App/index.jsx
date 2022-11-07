import React from "react";
import { SidebarMenu } from "../SidebarMenu/";
import { Hero } from "../Hero";
import { About } from "../About";
import { Skills } from "../Skills";
import { Projects } from "../Projects";

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(
    () => window.innerWidth > 768
  );

  React.useEffect(() => {
    window.addEventListener("resize", (ev) => {
      ev.target.innerWidth >= 768
        ? setSidebarIsOpen(true)
        : setSidebarIsOpen(false);
    });
  }, []);

  return (
    <>
      <SidebarMenu sidebarIsOpen={sidebarIsOpen} />
      <div className="bg-gray-50 transition-all duration-700 md:pl-60 lg:pl-72">
        <Hero
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        />
        <main className="px-6 lg:px-12 xl:px-40">
          <About />
          <Skills />
          <Projects />
        </main>
      </div>
    </>
  );
}

export { App };
