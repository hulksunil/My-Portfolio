import { useState, useEffect, memo } from "react";
import CV from "../assets/Sunil_Kublalsingh.pdf";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";

const navLinks = ["home", "projects", "experience", "skills", "about", "contact"];

const CustomNavLink = ({ href, activeLink, setActiveLink, onClick }) => {
  return (
    <a
      href={"#" + href}
      className={`${activeLink === href
        ? "text-slate-900 dark:text-white font-semibold"
        : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
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
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileToggled, setIsMobileToggled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep active state in sync when URL hash changes (back/forward, direct hash edits)
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && navLinks.includes(hash)) {
        setActiveLink(hash);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  // Intersection Observer to detect which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is 20% from top
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveLink((prev) => {
            if (prev !== sectionId) {
              window.history.replaceState(null, "", `#${sectionId}`);
            }
            return sectionId;
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = navLinks.map((link) => document.getElementById(link));
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-4 sm:px-8 py-3 transition-all duration-500 will-change-transform ${hasScrolled ? "translate-y-0" : "translate-y-2"
        }`}
    >
      <div
        className={`max-w-7xl mx-auto glass rounded-[20px] transition-all duration-300 overflow-hidden ${hasScrolled
          ? "bg-white/70 dark:bg-black/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border-black/[0.05] dark:border-white/10"
          : "bg-white/30 dark:bg-black/20 border-black/[0.03] dark:border-white/5"
          }`}
      >
        {/* Main Navbar Row */}
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(14,165,233,0.2)] dark:shadow-[0_0_15px_rgba(14,165,233,0.4)]">
              <a href="#home" onClick={() => setActiveLink("home")}>
                <img src="/favicon/favicon.svg" alt="Logo" className="w-full h-full object-cover" />
              </a>
            </div>
            <span className="font-display font-bold text-lg tracking-tight hidden sm:block text-slate-900 dark:text-white">
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
              className="p-2.5 rounded-xl transition-all text-slate-600 dark:text-white hover:scale-110"
              aria-label="Toggle Theme"
            >
              {currentTheme === "dark" ? (
                <FaSun className="text-white" />
              ) : (
                <FaMoon className="text-slate-600" />
              )}
            </button>

            <a
              href={CV}
              target="_blank"
              rel="noreferrer"
              className="bg-[#0ea5e9] hover:bg-[#38bdf8] text-white px-4 sm:px-7 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-bold transition-all no-underline shadow-[0_5px_20px_rgba(14,165,233,0.2)] dark:shadow-[0_0_20px_rgba(14,165,233,0.3)]"
            >
              Resume
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-slate-900 dark:text-white"
              onClick={() => setIsMobileToggled(!isMobileToggled)}
              aria-label="Toggle Menu"
            >
              <FaBars size={24} className={`transition-transform duration-300 ${isMobileToggled ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Row - Expanded within the same container */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileToggled ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col items-center py-6 gap-6 border-t border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-xl">
            {navLinks.map((link) => (
              <CustomNavLink
                key={link}
                href={link}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
                onClick={() => setIsMobileToggled(false)}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(NavBar);
