import { useState, useEffect } from "react";
import CV from "../assets/Sunil_Kublalsingh.pdf";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const CustomNavLink = ({ href, activeLink, setActiveLink, onClick }) => {
  return (
    <a
      href={"#" + href}
      className={`${activeLink === href
        ? "text-white font-semibold"
        : "text-slate-400 hover:text-white"
        } no-underline transition-all duration-300 text-[15px] font-medium capitalize tracking-wide`}
      onClick={() => {
        setActiveLink(href);
        if (onClick) onClick();
      }}
    >
      {href}
    </a>
  );
};

const NavBar = ({ toggleTheme, currentTheme }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["home", "experience", "projects", "skills", "contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-4 sm:px-8 py-4 transition-all duration-500 ${scrolled ? "translate-y-0" : "translate-y-2"
        }`}
    >
      <div
        className={`max-w-7xl mx-auto glass rounded-[20px] transition-all duration-300 overflow-hidden ${scrolled ? "bg-black/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border-white/10" : "bg-black/20 border-white/5"
          }`}
      >
        {/* Main Navbar Row */}
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(14,165,233,0.4)]">
              <img src="/favicon/favicon.svg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight hidden sm:block text-white">
              SUNIL
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <CustomNavLink
                key={link}
                href={link}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl transition-all text-white hover:scale-110"
              aria-label="Toggle Theme"
            >
              {currentTheme === "dark" ? (
                <FaSun />
              ) : (
                <FaMoon className="text-slate-300" />
              )}
            </button>

            <a
              href={CV}
              target="_blank"
              rel="noreferrer"
              className="bg-[#0ea5e9] hover:bg-[#38bdf8] text-white px-4 sm:px-7 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-bold transition-all no-underline shadow-[0_0_20px_rgba(14,165,233,0.3)]"
            >
              Resume
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setToggled(!toggled)}
              aria-label="Toggle Menu"
            >
              <FaBars size={24} className={`transition-transform duration-300 ${toggled ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Row - Expanded within the same container */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${toggled ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col items-center py-6 gap-6 border-t border-white/5 bg-black/20 backdrop-blur-xl">
            {navLinks.map((link) => (
              <CustomNavLink
                key={link}
                href={link}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
                onClick={() => setToggled(false)}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
