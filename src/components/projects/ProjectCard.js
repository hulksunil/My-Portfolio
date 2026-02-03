import { FiArrowRight } from "react-icons/fi";
import { getTagColorClass } from "./tagColors";

const ProjectCard = ({ title, description, tags, link, img, onSelect }) => {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      className="group relative h-full rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl shadow-slate-200/40 dark:shadow-none transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 z-20 border border-primary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-all duration-700 grayscale-[25%] group-hover:grayscale-0 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent pointer-events-none" />
      </div>

      <div className="p-7 flex flex-col h-[calc(100%-14rem)]">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-4 h-px bg-primary"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
              Featured Project
            </span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${getTagColorClass(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-6 mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl border border-primary/40 text-primary font-bold tracking-[0.14em] uppercase text-xs transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_18px_rgba(14,165,233,0.22)]"
          >
            View Project
            <FiArrowRight className="ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
