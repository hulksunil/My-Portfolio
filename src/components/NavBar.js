import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import CV from "../assets/Sunil_Kublalsingh.pdf";
import { FaMoon, FaSun } from "react-icons/fa";

const CustomNavLink = ({ href, activeLink, setActiveLink }) => {
  return (
    <Nav.Link
      href={"#" + href}
      className={activeLink === href ? "active navbar-link" : "navbar-link"}
      onClick={() => setActiveLink(href)}   // fixed small bug (was { href })
    >
      {href.charAt(0).toUpperCase() + href.slice(1)}
    </Nav.Link>
  );
};

const NavBar = ({ toggleTheme, currentTheme }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="md" className={scrolled || toggled ? "scrolled" : ""}>
      <Container>
        {/* The 3 bars */}
        <Navbar.Toggle
          onClick={() => setToggled((prev) => !prev)}
          aria-controls="basic-navbar-nav"
        >
          <span className={`navbar-toggler-icon ${currentTheme === "dark" ? "navbar-dark" : "navbar-light"}`}></span>
        </Navbar.Toggle>

        {/* The actual content of the navbar */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <CustomNavLink
              href="home"
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <Nav.Link href={CV} target="_blank" className="navbar-link">
              Resume
            </Nav.Link>
            <CustomNavLink
              href="experience"
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <CustomNavLink
              href="projects"
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <CustomNavLink
              href="skills"
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <CustomNavLink
              href="contact"
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />

            {/* Theme toggle button */}
            <Nav.Link
              onClick={toggleTheme}
              className="navbar-link theme-toggle"
              style={{ cursor: "pointer" }}
            >
              {currentTheme === "dark" ? <FaSun /> : <FaMoon />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
