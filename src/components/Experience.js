import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaBuilding, FaChalkboardTeacher, FaLanguage, FaTerminal, FaTools, FaLaptopCode } from "react-icons/fa";
import HeadingTitle from "./utils/HeadingTitle";

const ExperienceEntry = ({ exp, index, isLast }) => {
  const { ref: experienceRef, inView: experienceIsVisible } = useInView();
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const isReversed = index % 2 === 1;

  useEffect(() => {
    if (experienceIsVisible) {
      setHasBeenVisible(true);
    }
  }, [experienceIsVisible]);

  return (
    <div
      ref={experienceRef}
      className={`relative ${isLast ? "" : "mb-16 md:mb-24"} transition-all duration-700 ${hasBeenVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
    >
      <div
        className={`md:flex items-center justify-between w-full ${isReversed ? "md:flex-row-reverse" : ""
          }`}
      >
        <div
          className={`md:w-5/12 hidden md:block ${isReversed ? "text-left" : "text-right"
            }`}
        >
          <span className="text-sm font-mono text-primary font-bold uppercase">
            {exp.duration}
          </span>
          <p className="text-slate-500 dark:text-slate-400 text-sm">{exp.location}</p>
        </div>
        {/* The little dot in the middle (left on mobile) of the timeline */}
        <div className="absolute left-[-38px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark z-10 shadow-[0_0_15px_rgba(14,165,233,0.45)]"></div>

        {/* Actual content */}
        <div className="md:w-5/12">
          <div className="glass p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-primary/40 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-primary text-xl group-hover:scale-110 transition-transform">
                {exp.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {exp.company}
                </h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {exp.role}
                </p>
              </div>
            </div>

            <div className="md:hidden mb-4">
              <span className="text-xs font-mono text-primary font-bold uppercase">
                {exp.duration} • {exp.location}
              </span>
            </div>

            <ul className="space-y-3 text-md md:text-sm text-slate-600 dark:text-slate-400">
              {exp.points.map((point) => (
                <li key={point} className="flex gap-3 ">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Experience component
 * Might want to change the way it looks to make it more visually appealing
 * TOOD(sunil): Search up more inspiration for different ways to display experience so it looks more visually appealing
 * TOOD(sunil): Add more experiences(optional)
 */

const Experience = () => {
  const experiences = [
    {
      company: "Transperfect",
      role: "Language Data Annotator",
      duration: "Apr 2025 - Aug 2025",
      location: "Remote",
      icon: <FaLanguage />,
      points: [
        "Labeled and classified English language audio and text data to support AI systems training.",
        "Identified emotional nuances and annotated linguistic patterns to improve model accuracy.",
        "Met daily performance benchmarks while adapting to shifting priorities.",
      ],
    },
    {
      company: "Morgan Stanley",
      role: "Software Developer (Internship)",
      duration: "May 2024 - Aug 2024",
      location: "Montréal, QC",
      icon: <FaBuilding />,
      points: [
        "Developed full stack internal software using REST endpoints in Java Spring Boot.",
        "Extracted JSON schema info automatically to generate user-friendly table definitions.",
        "Built ReactJS and TypeScript interface for real-time table updates.",
      ],
    },
    {
      company: "Morgan Stanley",
      role: "Software Developer (Internship)",
      duration: "Jan 2023 - Aug 2023",
      location: "Montréal, QC",
      icon: <FaTerminal />,
      points: [
        "Migrated trade confirmation delivery management system to Gradle and Spring Boot.",
        "Optimized code manageability and improved backend service performance.",
      ],
    },
    {
      company: "Advizee",
      role: "Web Developer (Internship)",
      duration: "Apr 2021 - Jun 2021",
      location: "Remote",
      icon: <FaLaptopCode />,
      points: [
        "Collaborated with team members to develop an inventory system for a sneaker retailer using ReactJS with Firestore.",
      ],
    },
    {
      company: "English Montreal School Board (EMSB)",
      role: "Maintenance Workman",
      duration: "Summers 2018 - 2021",
      location: "Montréal, QC",
      icon: <FaTools />,
      points: [
        "Worked closely with a team to clean and maintain school facilities to ensure readiness for the new school year.",
        "Executed tasks under the head caretaker, including stripping and waxing floors and moving furniture between classrooms.",
      ],
    },
    {
      company: "Dawson College",
      role: "Peer Tutor",
      duration: "2019 - 2020",
      location: "Montréal, QC",
      icon: <FaChalkboardTeacher />,
      points: [
        "Tutored students in linear algebra, HTML, and Java.",
        "Supported students with test and final exam preparation.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 odd-section">
      <div className="max-w-4xl mx-auto px-6">
        <HeadingTitle title="Work Experience" />

        <div className="relative pl-8 md:pl-0">

          {/* Vertical lines */}
          {/* Desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-200 dark:bg-slate-800"></div>
          {/* Mobile */}
          <div className="md:hidden absolute left-0 w-0.5 h-full bg-slate-200 dark:bg-slate-800"></div>

          {experiences.map((exp, index) => (
            <ExperienceEntry
              key={`${exp.company}-${exp.duration}`}
              exp={exp}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
