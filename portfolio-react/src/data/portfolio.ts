export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "riverflow",
    title: "RiverFlow",
    description: "Mobile app. Dart. Fluid UI with stream-based architecture.",
    tech: ["Dart", "Flutter"],
    link: "https://github.com/Mazt08/RiverFlow",
  },
  {
    id: "maze-bank",
    title: "Maze_Bank",
    description: "Full-stack banking system. TypeScript. OAuth2 + MySQL. Session handling.",
    tech: ["TypeScript", "OAuth", "MySQL"],
    link: "https://github.com/Mazt08/Maze_Bank",
  },
  {
    id: "mobile-app-chocolate-candy",
    title: "mobile-app-chocolate-candy",
    description: "Mobile e-commerce. TypeScript. Centralized state management + cart flows.",
    tech: ["TypeScript", "Mobile", "State Management"],
    link: "https://github.com/Mazt08/mobile-app-chocolate-candy",
  },
  {
    id: "mazcro",
    title: "MazCro",
    description: "Windows macro recorder. Python. Records + replays input sequences.",
    tech: ["Python", "Automation"],
    link: "https://github.com/Mazt08/MazCro",
  },
  {
    id: "iam",
    title: "IAM",
    description: "Identity Access Management. Role-based auth flows. Permissions engine.",
    tech: ["Auth", "IAM"],
    link: "https://github.com/Mazt08/iam",
  },
];


export const blogPosts: BlogPost[] = [
  {
    slug: "building-with-ai-workflows",
    title: "Building with AI Workflows",
    date: "Jan 15, 2026",
    tags: ["AI", "Workflow", "Dev"],
    excerpt:
      "Integrating prompt engineering with full-stack dev. Key: code generation, AI review, automation.",
    content: `# Building with AI Workflows

When you treat prompts like APIs â€” structured inputs, predictable outputs â€” your dev velocity multiplies. This is what I've been doing: treating AI as a collaborator in the build loop, not a search engine.

## The Core Loop

The loop looks like this:

\`\`\`
Task â†’ Prompt â†’ Generate â†’ Review â†’ Integrate â†’ Iterate
\`\`\`

Each step is deliberate. Prompt engineering isn't about getting the perfect answer on the first try â€” it's about narrowing variance so every iteration is usable.

## Code Generation

The real unlock isn't generating full files. It's generating **targeted diffs**. Asking AI to write an entire component from scratch usually produces generic output. Asking it to refactor one function, fix a type error, or implement a specific pattern? High signal.

\`\`\`typescript
// Instead of: "build me a form component"
// Try: "add zod validation to this existing form, preserve current state logic"

const schema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});
\`\`\`

## AI Review in CI

The next upgrade is running AI review inside your CI pipeline. Not to replace code review â€” but to catch the obvious stuff before it reaches a human: type inconsistencies, missing error handling, naming convention drift.

## Key Takeaways

- Design prompts as contracts: input schema â†’ output schema
- Use AI review at the edge of your pipeline, not the center
- Automate repetitive scaffolding so you can focus on architecture
- Track which prompts produce high-quality output and reuse them`,
  },
  {
    slug: "next-osint-tools",
    title: "Next: OSINT Tools",
    date: "Jan 10, 2026",
    tags: ["OSINT", "Cybersecurity", "Python"],
    excerpt:
      "GeoOSINT pipelines. Cybersecurity + data intelligence. Prompt-driven extraction â€” learning angle, not exploit hunting.",
    content: `# Next: OSINT Tools

OSINT â€” Open Source Intelligence â€” is about structured data extraction from public sources. The tooling is underbuilt, the methodology is undervalued, and the use cases are legitimate: threat research, digital forensics, journalism, and red team support.

This isn't about script-kiddie tricks. It's about building reusable pipelines.

## What I'm Learning

**GeoOSINT**: Cross-referencing image metadata, satellite imagery, and public geodata to locate or verify locations. The skill is pattern recognition across heterogeneous data sources.

## Prompt-Driven Extraction

Language models are surprisingly good at parsing semi-structured text â€” news articles, forum posts, public records â€” into structured JSON. The pipeline:

\`\`\`
Raw text â†’ LLM prompt â†’ Structured output â†’ Storage â†’ Analysis
\`\`\`

The trick is prompt construction: you define the schema, the model fills it. No manual parsing.

\`\`\`python
def extract_entities(raw_text: str, llm_call) -> dict:
    prompt = f"""
    Extract the following from the text below.
    Return JSON only. Schema: {{name, location, date, source}}

    Text: {raw_text}
    """
    return llm_call(prompt)
\`\`\`

## Approach Principles

- **Privacy first**: Only target publicly available data
- **Structured learning**: Document every tool, every technique
- **Reproducible pipelines**: Every script is a reusable module
- **Pattern recognition over harm**: AI for signal extraction, not attack surface enumeration

## What's Next

Building a small GeoOSINT toolkit in Python. Image EXIF extraction, reverse image search integration, and cross-referencing with public geo APIs.`,
  },
];
