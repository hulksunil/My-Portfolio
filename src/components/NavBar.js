import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

import CV from "../assets/Sunil_Kublalsingh.pdf";

const CustomNavLink = ({ href, activeLink, setActiveLink }) => {
  return (
    <Nav.Link
      href={"#" + href}
      className={activeLink === href ? "active navbar-link" : "navbar-link"}
      onClick={() => setActiveLink({ href })}
    >
      {href.charAt(0).toUpperCase() + href.slice(1)}
    </Nav.Link>
  );
};

/**
 * NavBar component
 * Displays the navbar at the top of the page with links to different sections
 * The navbar is sticky and changes color when scrolled
 * The navbar also has a toggle button for mobile
 *
 * TODO(sunil): Add social media links (github, linkedin, etc.) (otherwise add them in intro)
 */
const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    // for when  they scroll, we want the navbar to become sticky
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
          <span className="navbar-toggler-icon navbar-dark"></span>
        </Navbar.Toggle>

        {/* The actual content of the navbar */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <CustomNavLink
              href="home"
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <Nav.Link href={CV} target="_blank" className={"navbar-link"}>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
