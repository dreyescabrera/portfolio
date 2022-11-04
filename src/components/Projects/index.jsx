import React from "react";
import ipTrackerURL from "/img/ip-tracker.webp";
import todoAppURL from "/img/todo-app.webp";
import countryQuizURL from "/img/quiz-game.webp";
import { ProjectCard } from "../ProjectCard";

const projects = {
  ipTracker: {
    title: "IP Tracker App",
    img: ipTrackerURL,
    description: (
      <p>
        Tracks the IP Address or Domain Name inserted by fetching data from{" "}
        <strong>Ipify API</strong> and placed a markup on its location using the
        coordinates provided, and a global map provided by{" "}
        <strong>Leaflet</strong>.
      </p>
    ),
    demo: "https://realdiegor.github.io/ip_tracker/",
    source: "https://github.com/realDiegoR/ip_tracker",
  },
  toDoApp: {
    title: "ToDo App",
    img: todoAppURL,
    description: (
      <p>
        Manage your daiy tasks by creating, marking as active or completed,
        filtering and deleting ToDo's. This app features fetching from{" "}
        <strong>LocalStorage</strong> and multiple tabs synchronization.
      </p>
    ),
    demo: "https://realdiegor.github.io/Todo-App-React/",
    source: "https://github.com/realDiegoR/Todo-App-React",
  },
  countryQuiz: {
    title: "Country Quiz",
    img: countryQuizURL,
    description: (
      <p>
        Fetches the data it needs from the <strong>REST Countries API</strong>.
        It chooses a question and a country, three thinkfully wrong options and
        the correct one among the others. It contains a timer and a correct
        counter.
      </p>
    ),
    demo: "https://realdiegor.github.io/Country-quiz/",
    source: "https://github.com/realDiegoR/Country-quiz",
  },
};

function Projects() {
  return (
    <section id="projects">
      <h2 className="relative pt-2 text-[#21396c] text-3xl font-bold tracking-tight after:content[''] after:absolute after:-bottom-4 after:left-0 after:w-1/6 after:h-[3px] after:rounded-full after:bg-[#0e5eb1] lg:pt-8 lg:after:w-16 xl:tracking-normal">
        Projects
      </h2>
      <div className="flex flex-wrap items-center gap-6 justify-center mt-10 lg:gap-10">
        <ProjectCard project={projects.ipTracker} />
        <ProjectCard project={projects.toDoApp} />
        <ProjectCard project={projects.countryQuiz} />
      </div>
    </section>
  );
}

export { Projects };
