import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { getTagColorClass } from "./tagColors";

const ProjectModal = ({
  project,
  isVisible,
  onClose,
  onPrevious,
  onNext,
}) => {
  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-[1200] p-4 md:p-8 flex items-center justify-center transition-all duration-200 ${isVisible
        ? "bg-slate-950/80 backdrop-blur-sm opacity-100"
        : "bg-slate-950/0 backdrop-blur-none opacity-0"
        }`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-6xl max-h-[92vh] overflow-auto rounded-[2rem] border border-primary/30 bg-slate-50 dark:bg-slate-900 shadow-2xl shadow-sky-500/20 transition-all duration-250 ${isVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-[0.97] translate-y-3"
          }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors"
          onClick={onClose}
          aria-label="Close project preview"
        >
          <IoClose className="mx-auto text-xl" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-[520px] bg-slate-950">
            <img
              src={project.img}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>

          <div className="p-8 md:p-10 flex flex-col">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-px bg-primary"></span>
                <span className="text-xs tracking-[0.2em] font-bold uppercase text-primary">
                  Project Deep Dive
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${getTagColorClass(tag)}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-8 mt-auto">
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onPrevious}
                  className="inline-flex items-center justify-center px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs tracking-[0.12em] uppercase transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  <FiChevronLeft className="mr-1 text-base" />
                  Previous
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="inline-flex items-center justify-center px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs tracking-[0.12em] uppercase transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  Next
                  <FiChevronRight className="ml-1 text-base" />
                </button>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-primary/40 text-primary font-bold tracking-[0.14em] uppercase text-xs transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_18px_rgba(14,165,233,0.22)]"
                >
                  View Project
                  <FiArrowRight className="ml-2 text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
