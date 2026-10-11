import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";

const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Stack", href: "/stack" },
  { label: "Affiliations", href: "/affiliations" },
  { label: "Contact", href: "/contact" },
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

      {/* Backdrop — closes the drawer when tapped outside it */}
      {open && (
        <button
          aria-label="Close nav"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in"
        />
      )}

      {/* Collapsible drawer — fixed left, stays on zoom */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-[14rem] sm:w-[16rem] bg-[#0a0a0e]/98 backdrop-blur-md border-r border-[#1f1f28]/60 lg:sticky lg:top-0 lg:z-auto lg:h-screen lg:shrink-0 lg:overflow-y-auto lg:bg-[#0a0a0e] lg:w-[16rem] transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex flex-col h-full px-4 py-8 lg:py-12 lg:px-5">
          {/* Close button (mobile only) */}
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden self-end mb-6 w-9 h-9 rounded-full bg-[#111118] border border-[#1f1f28] flex items-center justify-center text-[#f0f0f5] hover:text-[#c4f030] transition-colors"
            aria-label="Close nav"
          >
            <X size={14} />
          </button>

          {/* Brand */}
          <div className="mb-10">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="font-['JetBrains_Mono'] text-xl font-extrabold tracking-tighter text-[#f0f0f5] hover:text-[#c4f030] transition-colors block leading-none text-left"
            >
              John Rex Aspiras
            </Link>
            <p className="text-[11px] text-[#9898a8] mt-2 font-['JetBrains_Mono'] leading-snug tracking-tight">
              Prompt engineer + AI-assisted developer
            </p>
          </div>

          {/* Nav — left-aligned, fixed at left always */}
          <nav className="space-y-1.5 flex-1">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-2.5 text-[14px] font-['JetBrains_Mono'] text-[#9898a8] hover:text-[#c4f030] py-1.5 px-2 -ml-2 rounded-lg hover:bg-[#111118]/60 transition-all tracking-tight leading-none text-left"
              >
                <ChevronRight
                  size={12}
                  className="text-[#c4f030]/40 group-hover:text-[#c4f030] transition-colors shrink-0"
                />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
