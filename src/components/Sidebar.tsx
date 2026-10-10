import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";

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
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle — always visible on small screens */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-3 z-50 lg:hidden w-10 h-10 rounded-full bg-[#111118]/90 border border-[#1f1f28] flex items-center justify-center text-[#c4f030] shadow-lg shadow-black/40 hover:scale-105 transition-transform"
        aria-label="Open nav"
      >
        <Menu size={18} />
      </button>

      {/* Collapsible drawer — fixed left, stays on zoom */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-[7rem] bg-[#0a0a0e]/98 backdrop-blur-md border-r border-[#1f1f28]/60 lg:sticky lg:top-0 lg:z-auto lg:h-screen lg:shrink-0 lg:overflow-y-auto lg:bg-[#0a0a0e] lg:w-[7rem] transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="flex flex-col h-full px-2 py-8 lg:py-12 lg:px-2">
          {/* Close button (mobile only) */}
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden self-end mb-4 w-8 h-8 rounded-full bg-[#111118] border border-[#1f1f28] flex items-center justify-center text-[#f0f0f5] hover:text-[#c4f030] transition-colors"
            aria-label="Close nav"
          >
            <X size={14} />
          </button>

          {/* Brand */}
          <div className="mb-8">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="font-['JetBrains_Mono'] text-lg font-bold tracking-tight text-[#f0f0f5] hover:text-[#c4f030] transition-colors block leading-snug -ml-1"
            >
              John Rex Aspiras
            </Link>
            <p className="text-[11px] text-[#9898a8] mt-1 font-['JetBrains_Mono'] leading-snug -ml-1">
              Prompt engineer + AI-assisted developer
            </p>
          </div>

          {/* Nav — all text shifted left */}
          <nav className="space-y-0.5 flex-1">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-1 text-[13px] font-['JetBrains_Mono'] text-[#9898a8] hover:text-[#c4f030] py-1 pl-0 transition-colors tracking-tight leading-none"
              >
                <ChevronRight
                  size={10}
                  className="text-[#c4f030]/30 group-hover:text-[#c4f030] transition-colors shrink-0"
                />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
