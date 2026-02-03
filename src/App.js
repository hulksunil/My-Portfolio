import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Intro from "./components/hero/Intro";
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
import pcRemote from "./assets/img/projects/pc-remote.gif";

const projects = [{
  title: "PC-Remote",
  description:
    "A client-server application that lets users control their PC from a mobile device with mouse input, media controls, and system power options, built on TCP and UDP sockets.",
  tags: ["Flutter", "Go", "TCP", "UDP", "Sockets", "Windows", "macOS", "Solo Project"],
  link: "https://github.com/hulksunil/PC-Remote",
  dateDeveloped: new Date("2025-08-01"),
  img: pcRemote,
},
{
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

const Loader = ({ load }) => {
  return (

    <div className="loader">
      <div className={load ? "loader_icon" : "loader_icon loader_icon_none"}></div>
    </div>

  );
}


function App() {
  const [load, updateLoad] = useState(true);
  const [theme, setTheme] = useState("dark"); // default to dark

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Add/remove theme class on body and html when it changes
  useEffect(() => {
    // Legacy support for body classes
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);

    // Official Tailwind Dark Mode support on root
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Pause animations during scroll for better performance
  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      // Add class to pause animations
      document.body.classList.add('is-scrolling');

      // Clear existing timer
      clearTimeout(scrollTimer);

      // Remove class after scrolling stops (150ms debounce)
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);


  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

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

      <Loader load={load} />

      <>
        <NavBar toggleTheme={toggleTheme} currentTheme={theme} />
        <Intro />
        <Experience />
        <Projects projects={projects.sort((a, b) => b.dateDeveloped - a.dateDeveloped)} theme={theme} />
        <Skills />
        <Contact />
        <Footer />
      </>
    </div>
  );
}


export default App;
