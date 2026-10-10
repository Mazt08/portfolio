import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/portfolio";

const techColors: Record<string, string> = {
  Dart: "text-[#54c5f8]",
  Flutter: "text-[#54c5f8]",
  TypeScript: "text-[#3178c6]",
  OAuth: "text-[#eb5424]",
  MySQL: "text-[#4479a1]",
  Mobile: "text-[#a78bfa]",
  "State Management": "text-[#f59e0b]",
  Python: "text-[#3572a5]",
  Automation: "text-[#10b981]",
  Auth: "text-[#f43f5e]",
  IAM: "text-[#f43f5e]",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-[#111118]/80 glass-card rounded-3xl p-7 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c4f030]/10 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-['JetBrains_Mono'] text-base font-semibold text-[#f0f0f5] group-hover:text-[#c4f030] transition-colors leading-tight">
          {project.title}
        </h3>
        <ArrowUpRight
          size={16}
          className="text-[#9898a8] group-hover:text-[#c4f030] transition-colors shrink-0 mt-0.5 ml-2"
        />
      </div>
      <p className="text-sm text-[#9898a8] mb-4 leading-relaxed flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className={`text-[11px] font-['JetBrains_Mono'] px-2.5 py-0.5 rounded-full bg-[#0a0a0e] border border-[#1f1f28] group-hover:border-[#1f1f28]/80 ${
              techColors[t] ?? "text-[#f0f0f5]/60"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

