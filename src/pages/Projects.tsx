import { useState } from "react";
import { projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";

const allTechs = Array.from(new Set(projects.flatMap((p) => p.tech))).sort();

export default function Projects() {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? projects.filter((p) => p.tech.includes(active))
    : projects;

  return (
    <section className="min-h-[calc(100vh-4rem)] pt-16 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <p className="text-xs font-['JetBrains_Mono'] text-[#c4f030] mb-2 tracking-widest uppercase">
          Work
        </p>
        <h1 className="font-['JetBrains_Mono'] text-4xl md:text-5xl font-bold text-[#f0f0f5] mb-3 tracking-tight">
          Projects
        </h1>
        <p className="text-[#9898a8] text-base mb-10 max-w-xl">
          Five builds spanning mobile, full-stack, automation, and identity management. All source on GitHub.
        </p>

        {/* Tech filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActive(null)}
            className={`text-xs font-['JetBrains_Mono'] px-3 py-1.5 rounded-full border transition-all ${
              active === null
                ? "bg-[#c4f030] text-[#0a0a0e] border-[#c4f030] font-semibold"
                : "border-[#1f1f28] text-[#9898a8] hover:border-[#c4f030] hover:text-[#f0f0f5]"
            }`}
          >
            All
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setActive(tech === active ? null : tech)}
              className={`text-xs font-['JetBrains_Mono'] px-3 py-1.5 rounded-full border transition-all ${
                active === tech
                  ? "bg-[#c4f030] text-[#0a0a0e] border-[#c4f030] font-semibold"
                  : "border-[#1f1f28] text-[#9898a8] hover:border-[#c4f030] hover:text-[#f0f0f5]"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-[#9898a8] text-sm font-['JetBrains_Mono'] mt-8">
            No projects match that filter.
          </p>
        )}
      </div>
    </section>
  );
}

