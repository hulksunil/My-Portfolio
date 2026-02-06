import { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const {
    selectedProjectIndex,
    isModalVisible,
    openModal,
    closeModal,
    showNextProject,
    showPreviousProject,
  } = useProjectModal(projects.length);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleMediaChange = () => setIsMobile(mediaQuery.matches);

    handleMediaChange();
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const top3Projects = projects.slice(0, 3);
  const remainingProjects = projects.slice(3);

  const selectedProject =
    selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;

  return (
    <section id="projects" className="projects px-5 py-24 relative overflow-hidden">
      <div className="absolute top-10 -left-10 w-56 h-56 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 -right-8 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <HeadingTitle title="Projects" description="I love working on projects! Here are some of the projects that I have worked on:" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {top3Projects.map((project, index) => (
          <div key={project.title} className="flex">
            <ProjectCard
              {...project}
              onSelect={!isMobile ? () => openModal(index) : undefined}
            />
          </div>
        ))}
      </div>

      {remainingProjects.length > 0 && (
        <div className="mt-16 rounded-3xl border border-slate-200/70 dark:border-slate-800 bg-slate-100/40 dark:bg-slate-900/30 p-6 md:p-24 w-fit mx-auto">
          <div className="mb-6">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
              Additional Projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 w-fit mx-auto">
            {remainingProjects.map((project, index) => (
              <div key={project.title} className="flex justify-center">
                <ProjectCard
                  {...project}
                  onSelect={!isMobile ? () => openModal(index + 3) : undefined}
                  isFeatured={false}
                  isCompact
                />
              </div>
            ))}
          </div>
        </div>
      )}

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
