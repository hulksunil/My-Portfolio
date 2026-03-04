import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Intro from "./components/hero/Intro";
import Experience from "./components/Experience";
import Projects from "./components/projects/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

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

  // Toggle Tailwind dark mode class on the root element
  useEffect(() => {
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
        <Projects />
        <Experience />
        <Skills />
        <AboutMe />
        <Contact />
        <Footer />
      </>
    </div>
  );
}


export default App;
