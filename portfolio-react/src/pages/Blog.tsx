import { blogPosts } from "../data/portfolio";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  return (
    <section className="min-h-[calc(100vh-4rem)] pt-16 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-['JetBrains_Mono'] text-[#c4f030] mb-2 tracking-widest uppercase">
          Writing
        </p>
        <h1 className="font-['JetBrains_Mono'] text-4xl md:text-5xl font-bold text-[#f0f0f5] mb-3 tracking-tight">
          Blog
        </h1>
        <p className="text-[#9898a8] text-base mb-12 max-w-xl">
          Notes on AI workflows, OSINT, and full-stack development. No fluff — things I'm actually building or learning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blogPosts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

