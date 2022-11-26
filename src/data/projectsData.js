import ipTrackerImg from "./../assets/img/ip-tracker.webp";
import toDoAppImg from "./../assets/img/todo-app.webp";
import countryQuizImg from "./../assets/img/quiz-game.webp";
import portfolioImg from "./../assets/img/portfolio.webp";

const projects = {
  ipTracker: {
    title: "IP Tracker App",
    imgURL: ipTrackerImg,
    description:
      "Tracks the IP Address or Domain Name inserted by fetching data from <strong>Ipify API</strong> and placed a markup on its location using the coordinates provided, and a global map provided by <strong>Leaflet</strong>.",
    demo: "https://realdiegor.github.io/ip_tracker/",
    source: "https://github.com/realDiegoR/ip_tracker",
    technologies: ["html", "css", "javascript"],
  },
  toDoApp: {
    title: "ToDo App",
    imgURL: toDoAppImg,
    description:
      "Manage your daiy tasks by creating, marking as active or completed, filtering and deleting ToDo's. This app features fetching from <strong>LocalStorage</strong> and multiple tabs synchronization.",
    demo: "https://realdiegor.github.io/Todo-App-React/",
    source: "https://github.com/realDiegoR/Todo-App-React",
    technologies: ["react", "sass"],
  },
  countryQuiz: {
    title: "Country Quiz",
    imgURL: countryQuizImg,
    description:
      "Fetches the data it needs from the <strong>REST Countries API</strong>. It chooses a question and a country, three thinkfully wrong options and the correct one among the others. It contains a timer and a correct counter.",
    demo: "https://realdiegor.github.io/Country-quiz/",
    source: "https://github.com/realDiegoR/Country-quiz",
    technologies: ["html", "css", "javascript"],
  },
  portfolio: {
    title: "Portfolio",
    imgURL: portfolioImg,
    description:
      "Personal web page dedicated to show my personal and professional skills and progress. It contains an amazing <strong>text animation</strong> that encourages you to learn more about me, made with JavaScript and the <strong>useReducer Hook</strong>.",
    demo: "https://realdiegor.github.io/portfolio/",
    source: "https://github.com/realDiegoR/portfolio",
    technologies: ["react", "tailwind", "vite"],
  },
};

export default projects;
