import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
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
  SiVisualstudio,
  SiIntellijidea,
  SiUml,
  SiGo,
  SiFlutter,
} from "react-icons/si";
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
    <Card
      ref={skillRef}
      className={`skillCard flash-in-section text-light h-100 ${hasBeenVisible ? "is-visible" : ""
        }`}
    >
      <Card.Body>
        <Card.Title className="d-flex align-items-center mb-3">
          {skillIcons[category]}
          <span className="ms-2">{category}</span>
        </Card.Title>
        <div className="d-flex flex-wrap gap-3">
          {skillList.map(({ name, icon }) => (
            <div
              key={name}
              className="d-flex flex-column align-items-center text-center"
              style={{ width: "90px" }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                }}
              >
                {icon}
              </div>
              <small className="mt-2">{name}</small>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
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
      { name: "VS Code", icon: <SiVisualstudio /> },
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
    "Programming Languages": <FaCode className="hoverIcon" />,
    "Frameworks & Libraries": <FaGlobe className="hoverIcon" />,
    Databases: <FaDatabase className="hoverIcon" />,
    "Tools & Platforms": <FaTools className="hoverIcon" />,
    "Additional Knowledge": <FaCogs className="hoverIcon" />,
    Languages: <FaLanguage className="hoverIcon" />,
  };

  return (
    <Container className="py-5 mainHeader" id="skills">
      <h1 className="text-center text-light mb-4">Skills</h1>
      <Row>
        {Object.entries(skills).map(([category, skillList]) => (
          <Col key={category} md={6} lg={4} className="mb-4">
            <SkillCard
              skillIcons={skillIcons}
              category={category}
              skillList={skillList}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
