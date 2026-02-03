import { useEffect, useState, memo } from "react";
import CV from "../../assets/Sunil_Kublalsingh.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import CodeWindow from "./CodeWindow";
import BackgroundGradients from "./BackgroundGradients";

const TypingThing = memo(({ toRotate, active }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("\u00A0");
  const [delta, setDelta] = useState(200);
  const period = 500;

  useEffect(() => {
    if (!active) return; // pause updates when not active

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, active, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let newText = isDeleting
      ? fullText.substring(0, text.length - 1) // if deleting, then remove one character
      : fullText.substring(0, text.length + 1); // if not deleting, then add one character

    setText(newText);

    // If deleting, we want to remove characters faster than adding them
    if (isDeleting) {
      // if statement to prevent from deleting too quickly (which would be almost instant and not look good)
      if (delta > 100) {
        setDelta((prevDelta) => prevDelta / 2);
      }
    }
    // If we are not deleting and newText is the same as fullText, then we want to start deleting (we also reset the speed to the slowest)
    if (!isDeleting && newText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    }
    // If we are deleting and newText is empty, then we want to start typing the next word (we also reset the speed to the slowest)
    else if (isDeleting && newText === "") {
      setIsDeleting(false);
      setDelta(100);
      setLoopNum(loopNum + 1);
      setText("\u00A0");
    }
  };
  return <span className="typingText"> {text}</span>;
});

const Intro = () => {
  const { ref: introRef, inView: introIsVisible } = useInView();

  const toRotate = [
    "Full Stack Developer",
    "Coffee Addict",
    "Problem Solver",
    "Tech Enthusiast",
    "Comp Eng Student",
    "Innovator",
  ];

  return (
    <section id="home" className="px-4 sm:px-12 lg:px-24 relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
      <BackgroundGradients />

      <div className="max-w-7xl mx-auto px-6 pt-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col gap-8" ref={introRef}>
            {/* Active Status Badge */}
            <div className="hidden md:flex lg:flex items-center gap-2 bg-[#0ea5e9]/5 dark:bg-white/5 border border-[#0ea5e9]/20 dark:border-white/10 w-fit px-2 py-1 rounded-full backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                {/* Outer ring - pinging */}
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary"></span>
                {/* Inner ring - solid circle */}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[#0ea5e9] dark:text-[#38bdf8] text-[10px] font-bold uppercase tracking-[0.2em]">Available for new opportunities</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-[1.1] mb-6">
                Hi! I'm <span className="gradient-text">Sunil</span>
              </h1>

              <div className="text-2xl md:text-4xl font-medium text-slate-500 dark:text-slate-400 font-display flex items-center gap-4 min-h-[50px]">
                <span className="text-slate-900 dark:text-white font-mono opacity-80">&gt;</span>
                <TypingThing toRotate={toRotate} active={introIsVisible} />
              </div>
            </div>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl font-light">
              Driven by curiosity and a desire to innovate, with the goal of
              contributing to cutting-edge technologies that shape the future.
            </p>

            <div className="flex flex-wrap items-center gap-8 mt-4">
              <a
                href={CV}
                target="_blank"
                rel="noreferrer"
                className="bg-[#0ea5e9] hover:bg-[#38bdf8] text-white px-10 py-4 rounded-2xl text-[16px] font-bold transition-all no-underline shadow-[0_10px_40px_rgba(14,165,233,0.4)] hover:-translate-y-1 active:translate-y-0 text-center"
              >
                Download Resume
              </a>

              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/hulksunil"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 glass hover:bg-[#0ea5e9] dark:hover:bg-[#0ea5e9]/20 border border-black/5 dark:border-white/10 rounded-xl transition-all text-slate-900 dark:text-white hover:text-white hover:scale-110 active:scale-95 shadow-lg group"
                  aria-label="GitHub"
                >
                  <FaGithub size={26} className="transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/Sunil-Kublalsingh/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 glass hover:bg-[#0ea5e9] dark:hover:bg-[#0ea5e9]/20 border border-black/5 dark:border-white/10 rounded-xl transition-all text-slate-900 dark:text-white hover:text-white hover:scale-110 active:scale-95 shadow-lg group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={26} className="transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Code Window */}
          <div className="lg:col-span-5 hidden lg:block perspective-1000">
            <div className="animate-float">
              <div className="transform rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl">
                <CodeWindow />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator - Pushed down to avoid overlap */}
      <div className="hidden md:flex lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[9px] text-slate-500 uppercase tracking-[0.3em] font-bold">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-300 dark:border-slate-700 flex justify-center p-1">
          <div className="w-1 h-1.5 bg-[#0ea5e9] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default memo(Intro);
