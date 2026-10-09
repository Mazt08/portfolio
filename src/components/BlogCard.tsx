import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "../data/portfolio";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col bg-[#111118]/80 glass-card rounded-3xl p-7 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c4f030]/10 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <time className="text-[11px] font-['JetBrains_Mono'] text-[#9898a8]">
          {post.date}
        </time>
        <div className="flex gap-1.5">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded-full bg-[#0a0a0e] border border-[#1f1f28] text-[#9898a8]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <h3 className="font-['JetBrains_Mono'] text-base font-semibold text-[#f0f0f5] group-hover:text-[#c4f030] transition-colors mb-2 leading-snug">
        {post.title}
      </h3>
      <p className="text-sm text-[#9898a8] mb-4 leading-relaxed flex-1">
        {post.excerpt}
      </p>
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#c4f030] font-['JetBrains_Mono']">
        Read more <ArrowRight size={12} />
      </span>
    </Link>
  );
}

