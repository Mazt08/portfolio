import { useState, useEffect } from "react";
import { ExternalLink, Users } from "lucide-react";

const affiliations = [
  {
    name: "ABPH",
    role: "Member",
    desc: "A community where Filipino builders share what they're shipping and get real feedback — not theory.",
    link: "https://github.com/Mazt08",
  },
  {
    name: "FWDP",
    role: "Member",
    desc: "Focused on practical engineering, web systems, and shipping with speed over perfection.",
    link: "https://github.com/Mazt08",
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
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a0e] via-[#0d0d14] to-[#0a0a0e] text-[#f0f0f5]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-24 lg:py-28">
        <div className="mb-14">
          <p className="text-xs font-['JetBrains_Mono'] tracking-[0.2em] text-[#c4f030]/70 uppercase mb-3">Communities</p>
          <h1 className="font-['JetBrains_Mono'] text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.85] mb-5">
            <span className="bg-gradient-to-br from-[#f0f0f5] via-[#c4f030] to-[#f0f0f5] bg-clip-text text-transparent">Affiliations</span>
          </h1>
          <p className="text-[#9898a8] text-base sm:text-xl max-w-xl leading-relaxed">Associations and communities I'm part of — and how I show up in them.</p>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {affiliations.map((a) => (
            <a
              key={a.name}
              href={a.link}
              className="group relative block overflow-hidden rounded-3xl bg-[#111118]/60 border border-[#1f1f28]/50 p-7 sm:p-9 hover:border-[#c4f030]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#c4f030]/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c4f030]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              <div className="relative flex items-start gap-5 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#0a0a0e] to-[#161620] border border-[#1f1f28] flex items-center justify-center text-[#c4f030] font-['JetBrains_Mono'] text-2xl sm:text-3xl font-bold shadow-inner shadow-black/20 shrink-0">
                  {a.name[0]}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="font-['JetBrains_Mono'] text-2xl sm:text-3xl font-bold text-[#f0f0f5] tracking-tight">{a.name}</h2>
                    <span className="text-[11px] font-['JetBrains_Mono'] px-3 py-1 rounded-full bg-[#c4f030]/10 text-[#c4f030] border border-[#c4f030]/20 font-medium">{a.role}</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#c0c0c8] leading-relaxed mb-4 max-w-lg">{a.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-['JetBrains_Mono'] text-[#c4f030] font-medium group-hover:underline underline-offset-4 decoration-1">Visit <ExternalLink size={14} /></span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 flex items-center gap-3">
          <div className="inline-flex items-center gap-3 bg-[#111118]/80 border border-[#1f1f28]/60 rounded-2xl px-5 py-3 shadow-lg shadow-black/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[#c4f030]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c4f030]/75 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c4f030]" />
              </span>
              <Users size={16} />
            </div>
            <span className="text-sm font-['JetBrains_Mono'] text-[#f0f0f5] font-bold">{count}</span>
            <span className="text-xs sm:text-sm text-[#9898a8] font-['JetBrains_Mono']">viewing now</span>
          </div>
        </div>
      </div>
    </main>
  );
}
