import { Link } from "react-router-dom";
import { ArrowRight, Terminal } from "lucide-react";
import { projects, blogPosts } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";

export default function Home() {
  return (
    <main>
      {/* â”€â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative min-h-[92vh] flex items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-b from-[#0a0a0e] via-[#111118] to-[#0a0a0e]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c4f030]/[0.04] rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <img
            src="https://avatars.githubusercontent.com/u/148603205?v=4"
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-[3px] border-[#c4f030]/30 mx-auto mb-8 profile-glow hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="animate-fade-up-1 font-['JetBrains_Mono'] text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter mb-5 leading-[0.9] bg-gradient-to-br from-[#f0f0f5] via-[#f0f0f5] to-[#c4f030] bg-clip-text text-transparent">
            John Rex Aspiras
          </h1>
          <p className="animate-fade-up-2 text-lg md:text-xl text-[#9898a8] leading-relaxed max-w-lg mx-auto">
            Prompt engineer + AI-assisted developer. Builds full-stack systems, automates what can be automated, ships things that work.
          </p>
          <div className="animate-fade-up-3 mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/projects" className="inline-flex items-center gap-2 bg-[#c4f030] text-[#0a0a0e] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#d4ff40] transition-colors text-sm">
              <Terminal size={16} /> View Projects
            </Link>
            <Link to="/blog" className="inline-flex items-center gap-2 border border-[#1f1f28] text-[#f0f0f5]/80 font-medium px-5 py-2.5 rounded-xl hover:border-[#c4f030] hover:text-[#f0f0f5] transition-colors text-sm">
              Read Notes
            </Link>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Featured Work â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 border-t border-[#1f1f28]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-['JetBrains_Mono'] text-[#c4f030] mb-2 tracking-widest uppercase">Work</p>
              <h2 className="font-['JetBrains_Mono'] text-3xl md:text-4xl font-bold text-[#f0f0f5]">Featured Projects</h2>
            </div>
            <Link to="/projects" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[#c4f030] hover:underline">
              All projects <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.slice(0, 4).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <div className="mt-6 sm:hidden text-center">
            <Link to="/projects" className="text-sm text-[#c4f030] hover:underline inline-flex items-center gap-1">
              All projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Latest Notes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 border-t border-[#1f1f28]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-['JetBrains_Mono'] text-[#c4f030] mb-2 tracking-widest uppercase">Writing</p>
              <h2 className="font-['JetBrains_Mono'] text-3xl md:text-4xl font-bold text-[#f0f0f5]">Latest Notes</h2>
            </div>
            <Link to="/blog" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[#c4f030] hover:underline">
              All posts <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}