import {
  FaBuilding,
  FaChalkboardTeacher,
  FaLanguage,
  FaTerminal,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";

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

export default experiences;
