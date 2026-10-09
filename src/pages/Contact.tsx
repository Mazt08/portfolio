import { Mail, GitFork, Globe, Globe2, ExternalLink } from "lucide-react";

const links = [
  {
    href: "mailto:Aspirasj6@gmail.com",
    icon: Mail,
    label: "Email",
    value: "Aspirasj6@gmail.com",
    external: false,
  },
  {
    href: "https://linkedin.com/in/john-rex-aspiras-b86a08311",
    icon: Globe,
    label: "LinkedIn",
    value: "john-rex-aspiras",
    external: true,
  },
  {
    href: "https://github.com/Mazt08",
    icon: GitFork,
    label: "GitHub",
    value: "Mazt08",
    external: true,
  },
  {
    href: "https://facebook.com/promaztt",
    icon: Globe2,
    label: "Facebook",
    value: "promaztt",
    external: true,
  },
];

export default function Contact() {
  return (
    <section className="min-h-[calc(100vh-4rem)] pt-16 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-['JetBrains_Mono'] text-[#c4f030] mb-2 tracking-widest uppercase">
          Contact
        </p>
        <h1 className="font-['JetBrains_Mono'] text-4xl md:text-5xl font-bold text-[#f0f0f5] mb-3 tracking-tight">
          Get in touch
        </h1>
        <p className="text-[#9898a8] text-base mb-12 max-w-xl">
          Open to collaboration, technical discussions, and interesting projects. No recruiters sending mass templates.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {links.map(({ href, icon: Icon, label, value, external }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-center gap-5 bg-[#111118]/90 glass-card rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#c4f030]/10 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-[#0a0a0e] border border-[#1f1f28] group-hover:border-[#c4f030]/40 transition-colors">
                <Icon size={18} className="text-[#c4f030]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-[#f0f0f5] mb-0.5">{label}</p>
                <p className="text-xs text-[#9898a8] font-['JetBrains_Mono'] truncate">
                  {value}
                </p>
              </div>
              {external && (
                <ExternalLink
                  size={14}
                  className="text-[#9898a8]/40 group-hover:text-[#c4f030] flex-shrink-0 transition-colors"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


