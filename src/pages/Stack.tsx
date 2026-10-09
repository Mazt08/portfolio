const stack = [
  { label: "HTML", cat: "01 — FRONTEND & UI" },
  { label: "CSS", cat: "01 — FRONTEND & UI" },
  { label: "JavaScript", cat: "01 — FRONTEND & UI" },
  { label: "TypeScript", cat: "01 — FRONTEND & UI" },
  { label: "React", cat: "01 — FRONTEND & UI" },
  { label: "PHP", cat: "02 — BACKEND" },
  { label: "Next.js", cat: "01 — FRONTEND & UI" },
  { label: "Node.js", cat: "02 — BACKEND" },
  { label: "Python", cat: "02 — BACKEND" },
  { label: "MySQL", cat: "03 — DATABASES" },
  { label: "Dart", cat: "08 — MOBILE" },
  { label: "Flutter", cat: "08 — MOBILE" },
  { label: "Git", cat: "09 — DEV TOOLS" },
  { label: "GitHub", cat: "09 — DEV TOOLS" },
  { label: "Figma", cat: "09 — DEV TOOLS" },
];

export default function Stack() {
  return (
    <main className="min-h-screen bg-[#0a0a0e] text-[#f0f0f5]">
      <div className="max-w-3xl mx-auto px-6 py-20 lg:py-28">
        <h1 className="font-['JetBrains_Mono'] text-4xl md:text-6xl font-extrabold tracking-tighter mb-2 bg-gradient-to-br from-[#f0f0f5] via-[#c4f030] to-[#f0f0f5] bg-clip-text text-transparent">Stack</h1>
        <p className="text-[#9898a8] text-base md:text-lg mb-12">From github.com/Mazt08 — HTML, CSS, JS, PHP, TypeScript, React, Node.js, Python, MySQL, Dart, Flutter, Git, GitHub, Figma.</p>
        <div className="flex flex-wrap gap-2 mb-10">
          {stack.map(({ label }) => (
            <span key={label} className="text-sm font-['JetBrains_Mono'] bg-[#111118] border border-[#1f1f28]/70 text-[#f0f0f5]/90 px-3.5 py-1.5 rounded-full hover:border-[#c4f030]/40 hover:text-[#c4f030] transition-colors">{label}</span>
          ))}
        </div>
        <div className="border-t border-[#1f1f28]/40 pt-8 space-y-6">
          {[
            { title: "01 — FRONTEND & UI", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
            { title: "02 — BACKEND", items: ["PHP", "Node.js", "Python"] },
            { title: "03 — DATABASES", items: ["MySQL"] },
            { title: "08 — MOBILE", items: ["Dart", "Flutter"] },
            { title: "09 — DEV TOOLS", items: ["Git", "GitHub", "Figma"] },
          ].map((g) => (
            <div key={g.title}>
              <h3 className="font-['JetBrains_Mono'] text-xs tracking-[0.15em] uppercase text-[#c4f030]/70 mb-2">{g.title}</h3>
              <div className="flex flex-wrap gap-2">{g.items.map((i) => (<span key={i} className="text-sm font-['JetBrains_Mono'] text-[#f0f0f5]/80">{i}</span>))}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-[#1f1f28]/40 text-xs text-[#9898a8] font-['JetBrains_Mono']">Based on github.com/Mazt08</div>
      </div>
    </main>
  );
}
