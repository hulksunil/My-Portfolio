import HeadingTitle from "../utils/HeadingTitle";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import useProjectModal from "./useProjectModal";

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
  const {
    selectedProjectIndex,
    isModalVisible,
    openModal,
    closeModal,
    showNextProject,
    showPreviousProject,
  } = useProjectModal(projects.length);

  const selectedProject =
    selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;

  return (
    <section id="projects" className="projects odd-section px-5 py-24 relative overflow-hidden">
      <div className="absolute top-10 -left-10 w-56 h-56 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 -right-8 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <HeadingTitle title="Projects" description="I love working on projects! Here are some of the projects that I have worked on:" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <div key={project.title} className="flex">
            <ProjectCard {...project} onSelect={() => openModal(index)} />
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isVisible={isModalVisible}
        onClose={closeModal}
        onPrevious={showPreviousProject}
        onNext={showNextProject}
      />
    </section>
  );
};

export default Projects;
