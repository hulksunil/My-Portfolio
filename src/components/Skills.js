import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  FaCode,
  FaDatabase,
  FaGlobe,
  FaLanguage,
  FaTools,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";



const SkillCard = ({ skillIcons, category, skillList }) => {
  const { ref: skillRef, inView: skillIsVisible } = useInView();
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  // This is so that the fade-in animation only happens once
  useEffect(() => {
    if (skillIsVisible) {
      setHasBeenVisible(true);
    }
  }, [skillIsVisible]);


  return <Card ref={skillRef} className={`skillCard flash-in-section text-light h-100 ${hasBeenVisible ? "is-visible" : ""}`}>
    <Card.Body>
      <Card.Title className="d-flex align-items-center">
        {skillIcons[category]}
        <span className="ms-2">{category}</span>
      </Card.Title>
      <ul className="list-unstyled">
        {skillList.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </Card.Body>
  </Card>;
}



const Skills = () => {


  const skills = {
    Programming: [
      "Java",
      "Python",
      "C#",
      "C++",
      "Kotlin",
      "JavaScript/TypeScript",
      "Bash Scripting",
      "80x86 Assembly",
      "VHDL",
    ],
    "Web Development": ["HTML", "CSS", "ReactJS", "NodeJS", "Spring Boot"],
    Databases: ["SQL", "MongoDB", "Firestore"],
    Tools: [
      "Git",
      "Swagger",
      "JUnit",
      "Jest",
      "UML",
      "VS Code",
      "IntelliJ",
      "Microsoft Office: Word-Excel-PPT",
    ],
    Languages: ["English", "French"],
  };

  const skillIcons = {
    Programming: <FaCode className="hoverIcon" />,
    "Web Development": <FaGlobe className="hoverIcon" />,
    Databases: <FaDatabase className="hoverIcon" />,
    Tools: <FaTools className="hoverIcon" />,
    Languages: <FaLanguage className="hoverIcon" />,
  };



  return (
    <Container className="py-5 mainHeader" id="skills">
      <h1 className="text-center text-light mb-4">Skills</h1>
      <Row>
        {Object.entries(skills).map(([category, skillList]) => (
          <Col key={category} md={6} lg={4} className="mb-4">
            <SkillCard skillIcons={skillIcons} category={category} skillList={skillList} />
          </Col>
        ))}
      </Row>
    </Container >
  );
};

export default Skills;


