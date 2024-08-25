// import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import logo from "../assets/img/logo.png";

import { useState, useEffect } from "react";

const NavLink = ({ href, activeLink, setActiveLink }) => {
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

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

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
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* <Navbar.Brand href="#home">
          <img src={logo} alt="logo saying Sunil Kublalsingh" />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("home")}
            >
              Home
            </Nav.Link> */}
            <NavLink
              href="home"
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <NavLink
              href="resume"
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <NavLink
              href="contact"
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// const NavBar = () => {
//   const [activeLink, setActiveLink] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   };

//   return (
//     <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
//       <Container>
//         <Navbar.Brand href="/">
//           <img src={logo} alt="Logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//           <span className="navbar-toggler-icon"></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link
//               href="#home"
//               className={
//                 activeLink === "home" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("home")}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               href="#skills"
//               className={
//                 activeLink === "skills" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("skills")}
//             >
//               Skills
//             </Nav.Link>
//             <Nav.Link
//               href="#projects"
//               className={
//                 activeLink === "projects" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("projects")}
//             >
//               Projects
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

export default NavBar;
