import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

const ExperienceEntry = ({ exp, index }) => {
  const { ref: experienceRef, inView: experienceIsVisible } = useInView();
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (experienceIsVisible) {
      setHasBeenVisible(true);
    }
  }, [experienceIsVisible]);

  return (
    <div
      ref={experienceRef}
      className={`timeline-item fade-in-section ${hasBeenVisible ? "is-visible" : ""
        }`}
      key={index}
    >
      <div className="timeline-dot" />
      <Card className="experienceCard shadow-lg rounded-3 mb-6 timeline-card">
        <Card.Body>
          <h4>{exp.company}</h4>
          <p>
            <strong className="text-secondary">{exp.role}</strong> |{" "}
            {exp.duration} | {exp.location}
          </p>
          <ul>
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
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
      points: [
        "Labeled and classified English language audio and text data to support the development and training of AI systems, including emotion and sentiment recognition models.",
        "Identified emotional nuances in spoken English, annotated linguistic patterns, and flagged inconsistencies to improve model accuracy and training datasets.",
        "Met daily quality and performance benchmarks (KPIs) while adapting quickly to shifting priorities and maintaining high standards of data integrity and consistency.",
      ],
    },
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
    {
      company: "English Montreal School Board (EMSB)",
      role: "Maintenance Workman",
      duration: "Summers 2018 – 2021",
      location: "Montréal, QC",
      points: [
        "Worked closely with a team to perform thorough cleaning and maintenance of school facilities achieving high standards of cleanliness and readiness for the new school year.",
        "Executed tasks under the direction of the head caretaker, including stripping and waxing floors, and efficiently relocating furniture and desks between classrooms.",
      ],
    },
    {
      company: "Dawson College",
      role: "Peer Tutor",
      duration: "2019 – 2020",
      location: "Montréal, QC",
      points: [
        "Tutored students in courses I had previously completed, including linear algebra, HTML, and Java.",
        "Supported students in preparing for tests and final exams.",
      ],
    },
  ];

  return (
    <div id="experience" className="px-5 py-2 odd-section experience mainHeader">
      <h1>Work Experience</h1>

      {experiences.map((exp, index) => (
        <ExperienceEntry exp={exp} index={index} />
      ))}
    </div>
  );
};

export default Experience;
