import { Card, Col, Container, Row } from "react-bootstrap";
import {
  FaCode,
  FaDatabase,
  FaGlobe,
  FaLanguage,
  FaTools,
} from "react-icons/fa";

const Skills = () => {
  const skills = {
    Programming: [
      "Java",
      "Python",
      "C#",
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
      "JUnit",
      "Swagger",
      "Jest",
      "UML",
      "VS Code",
      "IntelliJ",
      "Microsoft Office: Word-Excel-PPT",
    ],
    Languages: ["English", "French"],
  };

  const skillIcons = {
    Programming: <FaCode />,
    "Web Development": <FaGlobe />,
    Databases: <FaDatabase />,
    Tools: <FaTools />,
    Languages: <FaLanguage />,
  };

  return (
    <Container className="py-5 mainHeader" id="skills">
      <h1 className="text-center text-light mb-4">Skills</h1>
      <Row>
        {Object.entries(skills).map(([category, skillList]) => (
          <Col key={category} md={6} lg={4} className="mb-4">
            <Card className="skillCard text-light h-100">
              <Card.Body>
                <Card.Title className="d-flex align-items-center">
                  {skillIcons[category]}{" "}
                  <span className="ms-2">{category}</span>
                </Card.Title>
                <ul className="list-unstyled">
                  {skillList.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
