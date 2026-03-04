import { useEffect, useState } from "react";
import HeadingTitle from "../utils/HeadingTitle";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import useProjectModal from "./useProjectModal";
import projects from "../../data/projects";

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
const Projects = () => {
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
  const additionalProjectRows = [];

  for (let i = 0; i < remainingProjects.length; i += 3) {
    additionalProjectRows.push(remainingProjects.slice(i, i + 3));
  }

  const selectedProject =
    selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;

  return (
    <section id="projects" className="projects px-5 py-24 relative overflow-hidden">
      <HeadingTitle title="Projects" description="I love working on projects! Here are some of the projects that I have worked on:" />

      {/* Top 3 projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {top3Projects.map((project, index) => (
          <div
            key={project.title}
            // if the index is 2, make it span 2 columns on md and lg
            className={`w-full ${index === 2
              ? "md:col-span-2 lg:col-span-1 md:max-w-[min(32rem,100%)] md:mx-auto lg:max-w-none"
              : ""
              }`}
          >
            <ProjectCard
              {...project}
              onSelect={!isMobile ? () => openModal(index) : undefined}
              usePosterPreview={false}
              imageLoading="eager"
              imageFetchPriority="high"
              revealDelayMs={index * 140}
            />
          </div>
        ))}
      </div>

      {/* Remaining projects */}
      {remainingProjects.length > 0 && (
        <div className="mt-16 rounded-3xl border border-slate-200/70 dark:border-slate-800 bg-slate-200/40 dark:bg-slate-900/30 p-6 md:p-24 w-fit mx-auto">
          <div className="mb-6">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
              Additional Projects
            </p>
          </div>

          <div className="space-y-4 lg:space-y-5 max-w-[1140px] mx-auto">
            {/* Mobile */}
            <div className="md:hidden space-y-4">
              {remainingProjects.map((project, index) => (
                <div key={project.title} className="w-full max-w-sm mx-auto">
                  <ProjectCard
                    {...project}
                    onSelect={!isMobile ? () => openModal(index + 3) : undefined}
                    isFeatured={false}
                    isCompact
                    enableReveal={false}
                  />
                </div>
              ))}
            </div>

            {/* Medium screens: 2-column symmetry */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
              {remainingProjects.map((project, index) => {
                const isOddLast =
                  remainingProjects.length % 2 === 1 &&
                  index === remainingProjects.length - 1;
                return (
                  <div
                    key={project.title}
                    className={isOddLast ? "col-span-2 flex justify-center" : "flex justify-center"}
                  >
                    <div className="w-full max-w-sm">
                      <ProjectCard
                        {...project}
                        onSelect={!isMobile ? () => openModal(index + 3) : undefined}
                        isFeatured={false}
                        isCompact
                        enableReveal={false}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Large screens: 3-column rows with centered partial final row */}
            <div className="hidden lg:block space-y-5">
              {additionalProjectRows.map((row, rowIndex) => (
                <div
                  key={`additional-project-row-${rowIndex}`}
                  className={row.length < 3
                    ? "flex flex-wrap justify-center gap-5"
                    : "grid grid-cols-3 gap-5 justify-items-center"
                  }
                >
                  {row.map((project, itemIndex) => {
                    const projectIndex = rowIndex * 3 + itemIndex;
                    return (
                      <div key={project.title} className={row.length < 3 ? "w-full max-w-sm" : "flex justify-center"}>
                        <ProjectCard
                          {...project}
                          onSelect={!isMobile ? () => openModal(projectIndex + 3) : undefined}
                          isFeatured={false}
                          isCompact
                          enableReveal={false}
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
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
