import React from "react";

(async function () {
  if (!("scrollBehavior" in document.documentElement.style)) {
    import("scroll-behavior-polyfill");
  }
})();

import { HamburguerButton } from "../common/HamburguerButton";
import { SidebarMenu } from "../SidebarMenu/";
import { Hero } from "../Hero";
import { About } from "../About";
import { Skills } from "../Skills";
import { Projects } from "../Projects";
import { Contact } from "../Contact";
import { useIntersectionObserver } from "./useIntersectionObserver";

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(
    window.innerWidth >= 768
  );

  React.useEffect(() => {
    window.addEventListener("resize", (ev) => {
      setSidebarIsOpen(ev.target.innerWidth >= 768);
    });
  }, []);

  const { activeNavItem, homeRef, whoamiRef, projectsRef, contactRef } =
    useIntersectionObserver();

  return (
    <>
      <SidebarMenu
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
        activeNavItem={activeNavItem}
      />
      <HamburguerButton
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      <div className="transition-all duration-700 md:pl-60 lg:pl-72">
        <Hero
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
          refference={homeRef}
        />
        <main className="w-11/12 max-w-5xl m-auto font-casual">
          <About refference={whoamiRef} />
          <Skills />
          <Projects refference={projectsRef} />
          <Contact refference={contactRef} />
          <p className="text-center mt-14 mb-5 lg:mt-20 lg:mb-8">
            Made with 💙 by{" "}
            <a
              href="https://www.linkedin.com/in/diegoreyescabrera/"
              className="underline cursor-pointer text-primary hover:text-terciary"
              target="_blank"
              rel="noreferrer"
            >
              Diego Reyes
            </a>
          </p>
        </main>
      </div>
    </>
  );
}

export { App };
