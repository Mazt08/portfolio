import { useState, useEffect } from "react";
import { ExternalLink, Users } from "lucide-react";

const affiliations = [
  {
    name: "ABPH",
    role: "Member",
    desc: "A community where Filipino builders share what they're shipping and get real feedback — not theory.",
    link: "#",
  },
  {
    name: "FWDP",
    role: "Member",
    desc: "Focused on practical engineering, web systems, and shipping with speed over perfection.",
    link: "#",
  },
];

export default function Affiliations() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => Math.max(1, c + (Math.random() > 0.5 ? 1 : -1)));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0e] text-[#f0f0f5]">
      <div className="max-w-3xl mx-auto px-6 py-20 lg:py-28">
        <h1 className="font-['JetBrains_Mono'] text-4xl md:text-6xl font-extrabold tracking-tighter mb-3 bg-gradient-to-br from-[#f0f0f5] via-[#c4f030] to-[#f0f0f5] bg-clip-text text-transparent">Affiliations</h1>
        <p className="text-[#9898a8] text-base md:text-lg mb-12">Associations and communities I'm part of — and how I show up in them.</p>

        <div className="space-y-6">
          {affiliations.map((a) => (
            <a
              key={a.name}
              href={a.link}
              className="group block bg-[#111118]/70 glass-card rounded-3xl p-6 md:p-8 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#c4f030]/10 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#0a0a0e] border border-[#1f1f28] flex items-center justify-center text-[#c4f030] font-['JetBrains_Mono'] text-xl font-bold shrink-0">
                  {a.name[0]}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="font-['JetBrains_Mono'] text-xl font-bold text-[#f0f0f5]">{a.name}</h2>
                    <span className="text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded-full bg-[#c4f030]/10 text-[#c4f030] border border-[#c4f030]/20">{a.role}</span>
                  </div>
                  <p className="text-sm text-[#9898a8] leading-relaxed mb-4">{a.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-['JetBrains_Mono'] text-[#c4f030] group-hover:underline underline-offset-3">Visit <ExternalLink size={12} /></span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Live viewer widget */}
        <div className="mt-12 inline-flex items-center gap-2 bg-[#111118]/70 border border-[#1f1f28]/60 rounded-full px-4 py-2 text-xs font-['JetBrains_Mono'] text-[#9898a8]">
          <Users size={14} className="text-[#c4f030]" />
          <span className="text-[#f0f0f5] font-bold">{count}</span> <span>person viewing now</span>
        </div>
      </div>
    </main>
  );
}
