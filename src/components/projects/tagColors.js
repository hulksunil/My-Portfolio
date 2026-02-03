export const getTagColorClass = (tag) => {
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
