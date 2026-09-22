import bouncingBall from "../assets/img/projects/bouncing-ball.gif";
import carsRUs from "../assets/img/projects/cars-r-us.gif";
import hovercraftProject from "../assets/img/projects/hovercraft-project-5.gif";
import portfolio from "../assets/img/projects/portfolio.gif";
import emailClient from "../assets/img/projects/emailClient.gif";
import airzen from "../assets/img/projects/airzen.gif";
import pcRemote from "../assets/img/projects/pc-remote.gif";
import yap2Learn from "../assets/img/projects/yap2Learn.gif";

import bouncingBallPoster from "../assets/img/projects/posters/bouncing-ball.png";
import carsRUsPoster from "../assets/img/projects/posters/cars-r-us.png";
import hovercraftProjectPoster from "../assets/img/projects/posters/hovercraft-project-5.png";
import portfolioPoster from "../assets/img/projects/posters/portfolio.png";
import emailClientPoster from "../assets/img/projects/posters/emailClient.png";
import yap2LearnPoster from "../assets/img/projects/posters/yap2Learn.png";

// Priority 1: Project most proud of
// Priority 2: 2nd most projects im proud of
// All other priorities are just for organization purposes
// Projects get ordered based on priority and then date developed so recentmost projects that I'm proud of are at the top
const projects = [
  {
    title: "Yap2Learn",
    description: "A voice-first, scenario-based language learning application focused on conversational practice, where users chat with an AI in their chosen language allowing users to build confidence without the stress of social interactions.",
    tags: ["TypeScript", "React Native", "ElevenLabs", "Google Gemini", "Prompt Engineering", "Hackathon Team Project"],
    link: "https://github.com/hulksunil/Yap2Learn",
    dateDeveloped: new Date("2026-01-24"),
    priority: 2,
    img: yap2Learn,
    poster: yap2LearnPoster,
  },
  {
    title: "PC-Remote",
    description:
      "A client-server application that lets users control their PC from a mobile device with mouse input, media controls, and system power options, built on TCP and UDP sockets.",
    tags: ["Flutter", "Go", "TCP", "UDP", "Sockets", "Windows", "macOS", "Solo Project"],
    link: "https://github.com/hulksunil/PC-Remote",
    dateDeveloped: new Date("2025-08-01"),
    priority: 1,
    img: pcRemote,
  },
  {
    title: "AirZen",
    description:
      "A device developed to provide insights into air quality metrics empowering users to breathe easy with peace of mind",
    tags: ["ESP32", "Android Studio", "Hardware Project", "Java", "C++", "Firebase Realtime Database", "Team Leader of 6"],
    link: "https://github.com/hulksunil/AirZen",
    dateDeveloped: new Date("2024-09-01"),
    priority: 1,
    img: airzen,
  },
  {
    title: "Bouncing Ball",
    description:
      "A solo project created early on that involves a ball that bounces. Also includes a little game where you have to try to hit all the targets as fast as possible",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Solo Project"],
    link: "https://gitlab.com/hulksunil/bouncing-ball",
    dateDeveloped: new Date("2020-01-01"),
    priority: 5,
    img: bouncingBall,
    poster: bouncingBallPoster,
  },
  {
    title: "Car Rental Application",
    description:
      "Created with a team of 5 members, this car rental app connects users with vehicles for short-term rentals, ranging from a few hours to a few weeks, serving as the interface between customers and the rental company",
    tags: ["MongoDB", "Express", "ReactJS", "Node.js", "Team Leader of 5"],
    link: "https://github.com/hulksunil/Error_404-soen341projectW2024",
    dateDeveloped: new Date("2024-01-01"),
    priority: 2,
    img: carsRUs,
    poster: carsRUsPoster,
  },
  {
    title: "Hovercraft Project",
    description:
      "Designed by a team of 4, this hovercraft was created using an Arduino, some powerful fans and a couple sensors for guidance and control. It was engineered to autonomously navigate through a maze without any external assistance. ",
    tags: ["Arduino", "C++", "Hardware Project", "Team Leader of 4"],
    link: "https://github.com/AGBellerive/ENGR290/tree/main/Hovercraft%20Project/hovercraft-project",
    dateDeveloped: new Date("2023-09-01"),
    priority: 2,
    img: hovercraftProject,
    poster: hovercraftProjectPoster,
  },
  {
    title: "Email Client",
    description:
      "Developed a feature-rich email client with SMTP and IMAP protocol capabilities using the Jodd mail API.",
    tags: ["JavaFX", "MySQL", "Jodd", "Solo Project"],
    link: "https://gitlab.com/headbandSunil/java-application-for-gmail/-/tree/master?ref_type=heads",
    dateDeveloped: new Date("2021-01-01"),
    priority: 5,
    img: emailClient,
    poster: emailClientPoster,
  },
  {
    title: "Portfolio Website",
    description:
      "Created using ReactJS and Bootstrap, this website is the one you see here! It showcases who I am and what I've done 😁",
    tags: ["ReactJS", "Bootstrap", "Solo Project"],
    link: "https://github.com/hulksunil/My-Portfolio",
    dateDeveloped: new Date("2024-08-01"),
    priority: 5,
    img: portfolio,
    poster: portfolioPoster,
  }
];

const sortedProjects = [...projects].sort(
  (a, b) => a.priority - b.priority || b.dateDeveloped - a.dateDeveloped
);

export default sortedProjects;
