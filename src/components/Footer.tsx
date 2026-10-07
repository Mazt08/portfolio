import { GitBranch, Mail, Globe, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

const socials = [
  { href: "mailto:Aspirasj6@gmail.com", icon: Mail, label: "Email", external: false },
  { href: "https://github.com/Mazt08", icon: GitBranch, label: "GitHub", external: true },
  { href: "https://linkedin.com/in/john-rex-aspiras-b86a08311", icon: Globe, label: "LinkedIn", external: true },
  { href: "https://facebook.com/promaztt", icon: Globe2, label: "Facebook", external: true },
];

const nav = [
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f28] bg-[#0a0a0e]">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-[JetBrains_Mono] text-sm font-semibold text-[#f0f0f5] mb-1">
              <span className="text-[#c4f030]">{`>`}</span> Rex Mazt08
            </p>
            <p className="text-xs text-[#9898a8]">BSIT Student - Prompt Engineer - AI Developer</p>
          </div>
          <nav className="flex items-center gap-5">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} className="text-xs text-[#9898a8] hover:text-[#c4f030] transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {socials.map(({ href, icon: Icon, label, external }) => (
              <a key={label} href={href} aria-label={label} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="text-[#f0f0f5]/40 hover:text-[#c4f030] transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-[#1f1f28]/50 flex flex-col sm:flex-row justify-between gap-2 text-[11px] text-[#9898a8]/60">
          <span>© {new Date().getFullYear()} John Rex</span>
          <span>Vite - React - Tailwind - TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
