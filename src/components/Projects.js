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

const Projects = ({ projects }) => {
  return (
    <Container fluid id="projects" className="projects">
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
