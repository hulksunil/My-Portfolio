import { Col, Container, ListGroup, Row } from "react-bootstrap";

/**
 * Experience component
 * Might want to change the way it looks to make it more visually appealing
 * TOOD(sunil): Search up more inspiration for different ways to display experience so it looks more visually appealing
 * TOOD(sunil): Add more experiences(optional)
 */

const Experience = () => {
  const experiences = [
    {
      company: "Morgan Stanley",
      role: "Software Developer (Internship)",
      duration: "May 2024 - Aug 2024",
      location: "Montréal, QC",
      points: [
        "Implemented full stack internal software using REST endpoints created in Java Spring Boot that sped up SQL table creations, modifications, and viewing capabilities that was used across many teams in the department.",
        "Extracted JSON schema information from data files automatically generating a user-friendly definition of a table schema.",
        "Created a simplified and easy-to-use interface under ReactJS and TypeScript to allow for quick and real-time updates of the changes done to the tables.",
      ],
    },
    {
      company: "Morgan Stanley",
      role: "Software Developer (Internship)",
      duration: "Jan 2023 - Aug 2023",
      location: "Montréal, QC",
      points: [
        "Migrated a trade confirmation delivery management system with Gradle, a newer Java version, and Spring Boot to improve efficiency and manageability of code to shorten the timespan required for customers to receive their confirmation.",
        "Adapted legacy code in accordance with agile development principles.",
      ],
    },
    {
      company: "Advizee",
      role: "Web Developer (Internship)",
      duration: "Apr 2021 – Jun 2021",
      location: "Remote",
      points: [
        "Collaborated with team members to develop an inventory system for a sneaker retailer using ReactJS to create web pages with a database in Firestore.",
      ],
    },
  ];

  return (
    <Container id="experience" className="experience mainHeader">
      <h1>Work Experience</h1>

      {experiences.map((exp, index) => (
        <Row className="mb-4" key={index}>
          <Col>
            <h4 className="text-light">{exp.company}</h4>
            <p>
              <strong className="text-secondary">{exp.role}</strong> |{" "}
              {exp.duration} | {exp.location}
            </p>
            <ListGroup variant="flush">
              {exp.points.map((point, i) => (
                <ListGroup.Item
                  key={i}
                  className="bg-dark text-white border-light"
                >
                  {point}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Experience;
