import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import bouncingBall from "./assets/img/projects/bouncing-ball.gif";
import carsRUs from "./assets/img/projects/cars-r-us.gif";
import hovercraftProject from "./assets/img/projects/hovercraft-project-5.gif";
import portfolio from "./assets/img/projects/portfolio.gif";
import emailClient from "./assets/img/projects/emailClient.gif";
import airzen from "./assets/img/projects/airzen.gif";

const projects = [{
  title: "AirZen",
  description:
    "A device developed to provide insights into air quality metrics empowering users to breathe easy with peace of mind",
  tags: ["ESP32", "Android Studio", "Hardware Project", "Java", "C++", "Firebase Realtime Database", "Team Leader of 6"],
  link: "https://github.com/hulksunil/AirZen",
  dateDeveloped: new Date("2024-09-01"),
  img: airzen,
},
{
  title: "Bouncing Ball",
  description:
    "A solo project created early on that involves a ball that bounces. Also includes a little game where you have to try to hit all the targets as fast as possible",
  tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Solo Project"],
  link: "https://gitlab.com/hulksunil/bouncing-ball",
  dateDeveloped: new Date("2020-01-01"),
  img: bouncingBall,
},
{
  title: "Car Rental Application",
  description:
    "Created with a team of 5 members, this car rental app connects users with vehicles for short-term rentals, ranging from a few hours to a few weeks, serving as the interface between customers and the rental company",
  tags: ["MongoDB", "Express", "ReactJS", "Node.js", "Team Leader of 5"],
  link: "https://github.com/hulksunil/Error_404-soen341projectW2024",
  dateDeveloped: new Date("2024-01-01"),
  img: carsRUs,
},
{
  title: "Hovercraft Project",
  description:
    "Designed by a team of 4, this hovercraft was created using an Arduino, some powerful fans and a couple sensors for guidance and control. It was engineered to autonomously navigate through a maze without any external assistance. ",
  tags: ["Arduino", "C++", "Hardware Project", "Team Leader of 4"],
  link: "", // No link yet (private repo) https://github.com/AGBellerive/ENGR290
  dateDeveloped: new Date("2023-09-01"),
  img: hovercraftProject,
},
{
  title: "Email Client",
  description:
    "Developed a feature-rich email client with SMTP and IMAP protocol capabilities using the Jodd mail API.",
  tags: ["JavaFX", "MySQL", "Jodd", "Solo Project"],
  link: "https://gitlab.com/headbandSunil/java-application-for-gmail/-/tree/master?ref_type=heads",
  dateDeveloped: new Date("2021-01-01"),
  img: emailClient,
},
{
  title: "Portfolio Website",
  description:
    "Created using ReactJS and Bootstrap, this website is the one you see here! It showcases who I am and what I've done 😁",
  tags: ["ReactJS", "Bootstrap", "Solo Project"],
  link: "https://github.com/hulksunil/My-Portfolio",
  dateDeveloped: new Date("2024-08-01"),
  img: portfolio,
},
];

function App() {
  return (
    <div className="App">
      <div style={{ display: "none" }}>
        Sunil Kublalsingh
        Sunil Kublalsingh
        Sunil Kublalsingh
        Sunil Kublalsingh
        Sunil Kublalsingh
        Sunil Kublalsingh
      </div>
      <NavBar />
      <Intro />
      <Experience />
      <Projects projects={projects.sort((a, b) => b.dateDeveloped - a.dateDeveloped)} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
