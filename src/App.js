import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import bouncingBall from "./assets/img/bouncing-ball.gif";
import carsRUs from "./assets/img/cars-r-us.gif";
import Contact from "./components/Contact";

const projects = [
  {
    title: "Bouncing Ball",
    description:
      "A ball that bounces. Also includes a little game where you have to try to hit all the targets as fast as possible",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://gitlab.com/hulksunil/bouncing-ball",
    img: bouncingBall,
  },
  {
    title: "Car Rental Application",
    description:
      "This car rental app connects users with vehicles for short-term rentals, ranging from a few hours to a few weeks, serving as the interface between customers and the rental company.",
    tags: ["MongoDB", "Express", "ReactJS", "Node.js"],
    link: "https://github.com/username/project-two",
    img: carsRUs,
  },
];

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Projects projects={projects} />

      <Skills />
      <Contact />
    </div>
  );
}

export default App;
