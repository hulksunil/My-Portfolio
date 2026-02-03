import { FiArrowRight } from "react-icons/fi";
import HeadingTitle from "./utils/HeadingTitle";

const getTagColorClass = (tag) => {
  const normalized = tag.toLowerCase();

  if (normalized.includes("flutter")) return "bg-sky-500/10 text-sky-600 dark:text-sky-300 border-sky-500/25";
  if (normalized === "go") return "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/25";
  if (normalized.includes("tcp")) return "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border-indigo-500/25";
  if (normalized.includes("udp")) return "bg-violet-500/10 text-violet-600 dark:text-violet-300 border-violet-500/25";
  if (normalized.includes("socket")) return "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-300 border-fuchsia-500/25";
  if (normalized.includes("windows")) return "bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/25";
  if (normalized.includes("macos")) return "bg-slate-500/10 text-slate-600 dark:text-slate-300 border-slate-500/25";
  if (normalized.includes("react")) return "bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/25";
  if (normalized.includes("node")) return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/25";
  if (normalized.includes("express")) return "bg-neutral-500/10 text-neutral-600 dark:text-neutral-300 border-neutral-500/25";
  if (normalized.includes("mongodb")) return "bg-green-500/10 text-green-600 dark:text-green-300 border-green-500/25";
  if (normalized.includes("firebase") || normalized.includes("firestore")) return "bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/25";
  if (normalized.includes("typescript")) return "bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/25";
  if (normalized.includes("javascript")) return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border-yellow-500/25";
  if (normalized === "java" || normalized.includes("javafx")) return "bg-orange-500/10 text-orange-600 dark:text-orange-300 border-orange-500/25";
  if (normalized.includes("kotlin")) return "bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/25";
  if (normalized.includes("c++")) return "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border-indigo-500/25";
  if (normalized.includes("c#")) return "bg-violet-500/10 text-violet-600 dark:text-violet-300 border-violet-500/25";
  if (normalized.includes("html")) return "bg-rose-500/10 text-rose-600 dark:text-rose-300 border-rose-500/25";
  if (normalized.includes("css")) return "bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/25";
  if (normalized.includes("bootstrap")) return "bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/25";
  if (normalized.includes("mysql") || normalized.includes("sql")) return "bg-teal-500/10 text-teal-600 dark:text-teal-300 border-teal-500/25";
  if (normalized.includes("arduino") || normalized.includes("esp32") || normalized.includes("hardware")) return "bg-red-500/10 text-red-600 dark:text-red-300 border-red-500/25";
  if (normalized.includes("team leader")) return "bg-pink-500/10 text-pink-600 dark:text-pink-300 border-pink-500/25";
  if (normalized.includes("solo project")) return "bg-lime-500/10 text-lime-700 dark:text-lime-300 border-lime-500/25";
  if (normalized.includes("jodd")) return "bg-orange-500/10 text-orange-600 dark:text-orange-300 border-orange-500/25";
  if (normalized.includes("gitlab")) return "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/25";

  return "bg-primary/10 text-sky-600 dark:text-sky-300 border-primary/25";
};

function ProjectCard({ title, description, tags, link, img }) {
  return (
    <article className="group relative h-full rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl shadow-slate-200/40 dark:shadow-none transition-all duration-500 hover:-translate-y-2 hover:border-primary/50">
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
            className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl border border-primary/40 text-primary font-bold tracking-[0.14em] uppercase text-xs transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_18px_rgba(14,165,233,0.22)]"
          >
            View Project
            <FiArrowRight className="ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
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
    <section id="projects" className="projects odd-section px-5 py-24 relative overflow-hidden">
      <div className="absolute top-10 -left-10 w-56 h-56 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 -right-8 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <HeadingTitle title="Projects" description="I love working on projects! Here are some of the projects that I have worked on:" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {projects.map((project) => (
          <div key={project.title} className="flex">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
