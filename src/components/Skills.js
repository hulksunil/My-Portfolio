import { useEffect, useState } from "react";
import HeadingTitle from "./utils/HeadingTitle";
import {
  FaCode,
  FaDatabase,
  FaGlobe,
  FaTools,
  FaCogs,
  FaLanguage,
  FaJava,
  FaPython,
  FaCuttlefish, // fallback for C#
  FaJs,
  FaGitAlt,
  FaMicrochip, // assembly
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTypescript,
  SiKotlin,
  SiGnubash,
  SiReact,
  SiNodedotjs,
  SiSpringboot,
  SiJunit5,
  SiJest,
  SiMongodb,
  SiGooglecloud,
  SiSwagger,
  SiIntellijidea,
  SiUml,
  SiGo,
  SiFlutter,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";

const SkillCard = ({ skillIcons, category, skillList }) => {
  const { ref: skillRef, inView: skillIsVisible } = useInView();
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (skillIsVisible) {
      setHasBeenVisible(true);
    }
  }, [skillIsVisible]);

  return (
    <div
      ref={skillRef}
      className={`group flash-in-section w-full h-full bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none hover:border-primary/40 hover:scale-[1.03] hover:shadow-[0_14px_34px_rgba(14,165,233,0.22)] dark:hover:shadow-[0_14px_34px_rgba(14,165,233,0.28)] transition-all duration-300 ${hasBeenVisible ? "is-visible" : ""
        }`}
    >
      <div className="h-full">
        <h3 className="flex items-center mb-4 text-xl font-semibold">
          {skillIcons[category]}
          <span className="ml-2">{category}</span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {skillList.map(({ name, icon }) => (
            <div
              key={name}
              className="flex flex-col items-center text-center"
              style={{ width: "90px" }}
            >
              <div className="tech-icon-bubble">
                {icon}
              </div>
              <small className="mt-2 text-slate-700 dark:text-slate-200">{name}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = {
    "Programming Languages": [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C#", icon: <FaCuttlefish /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Kotlin", icon: <SiKotlin /> },
      { name: "Bash Scripting", icon: <SiGnubash /> },
      { name: "Go", icon: <SiGo /> },
    ],
    "Frameworks & Libraries": [
      { name: "ReactJS", icon: <SiReact /> },
      { name: "NodeJS", icon: <SiNodedotjs /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Flutter", icon: <SiFlutter /> },

      { name: "JUnit", icon: <SiJunit5 /> },
      { name: "Jest", icon: <SiJest /> },
    ],
    Databases: [
      { name: "SQL", icon: <FaDatabase /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firestore", icon: <SiGooglecloud /> },
    ],
    "Tools & Platforms": [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Swagger", icon: <SiSwagger /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
      { name: "UML", icon: <SiUml /> },
    ],
    "Additional Knowledge": [
      { name: "80x86 Assembly", icon: <FaMicrochip /> },
      { name: "VHDL", icon: <FaCogs /> },
    ],
    Languages: [
      { name: "English (Fluent)", icon: <FaLanguage /> },
      { name: "French (Intermediate)", icon: <FaLanguage /> },
    ],
  };

  const skillIcons = {
    "Programming Languages": <FaCode className="hoverIcon text-primary transition-transform duration-[1500ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]" />,
    "Frameworks & Libraries": <FaGlobe className="hoverIcon text-primary transition-transform duration-[1500ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]" />,
    Databases: <FaDatabase className="hoverIcon text-primary transition-transform duration-[1500ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]" />,
    "Tools & Platforms": <FaTools className="hoverIcon text-primary transition-transform duration-[1500ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]" />,
    "Additional Knowledge": <FaCogs className="hoverIcon text-primary transition-transform duration-[1500ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]" />,
    Languages: <FaLanguage className="hoverIcon text-primary transition-transform duration-[1500ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]" />,
  };

  return (
    <div className="px-5 py-24" id="skills">
      <HeadingTitle title="Skills" description="Tools and technologies I've mastered over the years." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="flex">
            <SkillCard
              skillIcons={skillIcons}
              category={category}
              skillList={skillList}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
