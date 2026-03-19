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
      <div className={load ? "loader_icon" : "loader_icon loader_icon_none"}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
          <circle fill='rgb(var(--color-loader-dot-rgb))' stroke='rgb(var(--color-loader-dot-rgb))' strokeWidth='15' r='15' cx='35' cy='100'>
            <animate attributeName='cx' calcMode='spline' dur='2' values='35;165;165;35;35' keySplines='0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1' repeatCount='indefinite' begin='0'></animate>
          </circle>
          <circle fill='rgb(var(--color-loader-dot-rgb))' stroke='rgb(var(--color-loader-dot-rgb))' strokeWidth='15' opacity='.8' r='15' cx='35' cy='100'>
            <animate attributeName='cx' calcMode='spline' dur='2' values='35;165;165;35;35' keySplines='0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1' repeatCount='indefinite' begin='0.05'></animate>
          </circle>
          <circle fill='rgb(var(--color-loader-dot-rgb))' stroke='rgb(var(--color-loader-dot-rgb))' strokeWidth='15' opacity='.6' r='15' cx='35' cy='100'>
            <animate attributeName='cx' calcMode='spline' dur='2' values='35;165;165;35;35' keySplines='0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1' repeatCount='indefinite' begin='.1'></animate>
          </circle>
          <circle fill='rgb(var(--color-loader-dot-rgb))' stroke='rgb(var(--color-loader-dot-rgb))' strokeWidth='15' opacity='.4' r='15' cx='35' cy='100'>
            <animate attributeName='cx' calcMode='spline' dur='2' values='35;165;165;35;35' keySplines='0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1' repeatCount='indefinite' begin='.15'></animate>
          </circle>
          <circle fill='rgb(var(--color-loader-dot-rgb))' stroke='rgb(var(--color-loader-dot-rgb))' strokeWidth='15' opacity='.2' r='15' cx='35' cy='100'>
            <animate attributeName='cx' calcMode='spline' dur='2' values='35;165;165;35;35' keySplines='0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1' repeatCount='indefinite' begin='.2'></animate>
          </circle>
        </svg>
      </div>
    </div>
  );
}


function App() {
  const [load, updateLoad] = useState(true);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

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

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      // Update theme if the user hasn't explicitly set one in localStorage
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

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
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
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
