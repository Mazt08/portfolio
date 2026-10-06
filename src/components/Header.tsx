import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { Moon, Sun, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const { dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#1f1f28] transition-all duration-200 ${
        scrolled
          ? "bg-[#0a0a0e]/95 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-[#0a0a0e]/80 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-['JetBrains_Mono'] text-base md:text-lg font-semibold text-[#f0f0f5] hover:text-[#c4f030] transition-colors tracking-tight"
        >
          <span className="text-[#c4f030]">{">"}</span> Rex Mazt08
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#c4f030]"
                    : "text-[#f0f0f5]/60 hover:text-[#f0f0f5]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-[#1f1f28] bg-[#111118] hover:border-[#c4f030] hover:text-[#c4f030] text-[#f0f0f5]/70 transition-all duration-150"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-[#1f1f28] bg-[#111118] hover:border-[#c4f030] hover:text-[#c4f030] text-[#f0f0f5]/70 transition-all"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg border border-[#1f1f28] bg-[#111118] hover:border-[#c4f030] hover:text-[#c4f030] text-[#f0f0f5]/70 transition-all"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#1f1f28] bg-[#0a0a0e]/98 backdrop-blur-xl">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "text-[#c4f030] bg-[#c4f030]/10"
                      : "text-[#f0f0f5]/70 hover:text-[#f0f0f5] hover:bg-[#111118]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

