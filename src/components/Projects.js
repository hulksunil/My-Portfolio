import { Badge, Col, Container, Row } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";

function ProjectCard({ title, description, tags, link, img }) {
  return (
    <Card className="projectCard">
      <Card.Body>
        <Card.Img variant="top" src={img} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="projectKeywords">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="mr-2">
              {tag}
            </Badge>
          ))}
        </div>
        <Button variant="outline-light" href={link} target="_blank">
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
}

/**
 * Projects component
 * Displays the projects that I have worked on
 * TODO(sunil): Add more projects after touching them up a bit(optional)
 *
 * projects to add:
 * Shoe Store From internship assessment (https://github.com/hulksunil/Shoe_Store) (might need to change the colors or something cuz it be looking wild)
 * coen 366 peer to peer (just demo it with 2 terminals side by side and have the client connect to the server I guess)
 * Java Application for Gmail (https://gitlab.com/headbandSunil/java-application-for-gmail/-/tree/master?ref_type=heads) (gotta make sure I can run it on my computer lol)
 * Make a simon game quick in react or something and then add it (shouldn't be too hard)
 *
 */
const Projects = ({ projects }) => {
  return (
    <Container fluid id="projects" className="projects mainHeader">
      <h1>Projects</h1>
      <p>
        I love working on projects! Here are some of the projects that I have
        worked on:
      </p>

      <Row className="justify-content-around">
        {projects.map((project) => (
          <Col sm={12} md={6} lg={4} key={project.title}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Projects;
