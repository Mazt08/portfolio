import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "../data/portfolio";

/** Minimal markdown→HTML renderer for blog content */
function renderMarkdown(raw: string): string {
  return raw
    .trim()
    // Code blocks (``` lang ... ```)
    .replace(/```(\w*)\n?([\s\S]*?)```/g, (_m, _lang, code) => {
      const escaped = code
        .trim()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      return `<pre><code>${escaped}</code></pre>`;
    })
    // H1
    .replace(/^# (.+)$/gm, '<h1 class="font-mono text-3xl md:text-4xl font-bold text-[#f0f0f5] mb-6 mt-10 first:mt-0">$1</h1>')
    // H2
    .replace(/^## (.+)$/gm, '<h2 class="font-mono text-xl font-semibold text-[#c4f030] mb-4 mt-10">$1</h2>')
    // H3
    .replace(/^### (.+)$/gm, '<h3 class="font-mono text-lg font-semibold text-[#f0f0f5] mb-3 mt-8">$1</h3>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#f0f0f5] font-semibold">$1</strong>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Bullet list items
    .replace(/^- (.+)$/gm, '<li class="text-[#9898a8] text-sm leading-relaxed mb-1.5 ml-4 list-disc">$1</li>')
    // Wrap consecutive <li> in <ul>
    .replace(/(<li[\s\S]*?<\/li>\n?)+/g, (m) => `<ul class="my-4 space-y-0.5 pl-4">${m}</ul>`)
    // Paragraphs (blank line separated blocks that aren't elements)
    .replace(/^(?!<[a-z]|$)(.+)$/gm, '<p class="text-[#9898a8] text-sm leading-7 mb-4">$1</p>')
    // Collapse multiple newlines
    .replace(/\n{3,}/g, '\n\n');
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="min-h-[calc(100vh-4rem)] pt-32 pb-20 text-center px-6">
        <p className="font-['JetBrains_Mono'] text-[#c4f030] text-sm mb-4">404</p>
        <h2 className="font-['JetBrains_Mono'] text-3xl font-bold text-[#f0f0f5] mb-6">
          Post not found
        </h2>
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-[#9898a8] hover:text-[#c4f030] transition-colors">
          <ArrowLeft size={16} /> Back to blog
        </Link>
      </section>
    );
  }

  return (
    <article className="min-h-[calc(100vh-4rem)] pt-14 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#9898a8] hover:text-[#c4f030] mb-10 transition-colors"
        >
          <ArrowLeft size={15} /> Blog
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <time className="text-[11px] font-['JetBrains_Mono'] text-[#9898a8]">
            {post.date}
          </time>
          <span className="text-[#1f1f28]">·</span>
          <div className="flex gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded-full bg-[#111118] border border-[#1f1f28] text-[#c4f030]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Title */}
        <h1 className="font-['JetBrains_Mono'] text-3xl md:text-4xl font-bold text-[#f0f0f5] mb-10 tracking-tight leading-tight">
          {post.title}
        </h1>

        {/* Divider */}
        <div className="border-t border-[#1f1f28] mb-10" />

        {/* Content */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />

        {/* Footer nav */}
        <div className="mt-14 pt-8 border-t border-[#1f1f28]">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#9898a8] hover:text-[#c4f030] transition-colors"
          >
            <ArrowLeft size={15} /> All posts
          </Link>
        </div>
      </div>
    </article>
  );
}

