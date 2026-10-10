import { ExternalLink, GitFork, Globe } from "lucide-react";
import { blogPosts, projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";

export default function Home() {
  return (
    <main className="px-6 py-12 lg:px-16 lg:py-16">
      {/* Hero */}
      <section className="text-center mb-16">
        <div className="relative inline-block mb-6">
          <img src="https://avatars.githubusercontent.com/u/148603205?v=4" alt="John Rex Aspiras" className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover mx-auto ring-4 ring-[#c4f030]/20 ring-offset-4 ring-offset-[#0a0a0e] shadow-2xl shadow-[#c4f030]/10" />
        </div>
        <h1 className="font-['JetBrains_Mono'] text-4xl sm:text-6xl font-extrabold tracking-tighter mb-2 leading-none bg-gradient-to-br from-[#f0f0f5] via-[#c4f030] to-[#f0f0f5] bg-clip-text text-transparent">John Rex Aspiras</h1>
        <p className="text-[#9898a8] text-base sm:text-lg max-w-md mx-auto leading-relaxed mb-6">Prompt engineer + AI-assisted developer. Builds full-stack systems, automates what can be automated, ships things that work.</p>
        <div className="flex items-center justify-center gap-3 mb-8">
          <a href="https://github.com/Mazt08" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-[#111118] border border-[#1f1f28] flex items-center justify-center text-[#f0f0f5] hover:text-[#c4f030] hover:border-[#c4f030]/40 transition-all"><GitFork size={18} /></a>
          <a href="https://linkedin.com/in/john-rex-aspiras-b86a08311" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[#111118] border border-[#1f1f28] flex items-center justify-center text-[#f0f0f5] hover:text-[#c4f030] hover:border-[#c4f030]/40 transition-all"><Globe size={18} /></a>
          <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#111118] border border-[#1f1f28] flex items-center justify-center text-[#f0f0f5] hover:text-[#c4f030] hover:border-[#c4f030]/40 transition-all"><Globe size={18} /></a>
          <a href="mailto:Aspirasj6@gmail.com" aria-label="Email" className="w-10 h-10 rounded-full bg-[#111118] border border-[#1f1f28] flex items-center justify-center text-[#f0f0f5] hover:text-[#c4f030] hover:border-[#c4f030]/40 transition-all"><ExternalLink size={16} /></a>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {["HTML", "CSS", "JS", "PHP", "React", "Node", "TS", "Dart", "Flutter", "Git", "MySQL", "Figma", "Python"].map((t) => (
            <span key={t} className="text-[11px] font-['JetBrains_Mono'] px-3 py-1 rounded-full bg-[#111118] border border-[#1f1f28] text-[#c4f030]">{t}</span>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-10 border-t border-[#1f1f28]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-['JetBrains_Mono'] text-[#c4f030] mb-2 tracking-widest uppercase">Work</p>
              <h2 className="font-['JetBrains_Mono'] text-3xl md:text-4xl font-bold text-[#f0f0f5]">Featured Projects</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.slice(0, 4).map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      {/* Latest Notes */}
      <section className="py-20 border-t border-[#1f1f28]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-['JetBrains_Mono'] text-[#c4f030] mb-2 tracking-widest uppercase">Writing</p>
              <h2 className="font-['JetBrains_Mono'] text-3xl md:text-4xl font-bold text-[#f0f0f5]">Latest Notes</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
