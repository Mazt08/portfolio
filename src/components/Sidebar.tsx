import { Link } from "react-router-dom";

const nav = [
  { label: "Shop", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/" },
  { label: "Stack", href: "/stack" },
  { label: "Certifications", href: "/" },
  { label: "Affiliations", href: "/" },
];

export default function Sidebar() {
  return (
    <aside className="lg:w-28 pl-0 py-8 lg:py-12 lg:border-r lg:border-[#1f1f28]/60 bg-[#0a0a0e]">
      <div className="mb-8">
        <Link to="/" className="font-['JetBrains_Mono'] text-xl font-bold tracking-tight text-[#f0f0f5] hover:text-[#c4f030] transition-colors -ml-2">John Rex Aspiras</Link>
        <p className="text-xs text-[#9898a8] mt-1 font-['JetBrains_Mono'] -ml-2">Prompt engineer + AI-assisted developer</p>
      </div>
      <nav className="space-y-1 -ml-3">
        {nav.map((item) => (
          <Link key={item.label} to={item.href} className="block text-sm text-[#9898a8] hover:text-[#c4f030] py-1.5 transition-colors font-['JetBrains_Mono'] tracking-tight">{item.label}</Link>
        ))}
      </nav>
    </aside>
  );
}
