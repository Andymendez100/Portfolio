# Portfolio Projects Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Split the Projects section into Personal Projects (rich cards with images/links) and Professional Highlights (compact cards), adding AI-Assessment-Creator as the first personal project.

**Architecture:** The existing `Projects` section component will render two subsections with separate headings. Data splits into two arrays with different interfaces. A new `PersonalProjectCard` component handles the rich card layout. Existing `ProjectCard` gets compacted for professional highlights.

**Tech Stack:** React 19, TypeScript, Tailwind CSS 4, Framer Motion 11, Lucide React icons

---

### Task 1: Update Data Layer — Split Projects Data

**Files:**
- Modify: `src/data/projects.ts`

**Step 1: Update the data file with new interfaces and split arrays**

Replace the entire file contents with:

```ts
export interface PersonalProject {
  title: string;
  description: string;
  tech: string[];
  impact: string;
  image: string;
  github?: string;
  live?: string;
}

export interface ProfessionalProject {
  title: string;
  description: string;
  tech: string[];
  impact: string;
}

export const personalProjects: PersonalProject[] = [
  {
    title: "AI Assessment Creator",
    description:
      "Full-stack app that transforms documents into AI-generated quizzes using GPT-4o. Features real-time streaming with Server-Sent Events, Retrieval-Augmented Generation for intelligent document processing, and three-level granular regeneration controls.",
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI", "Tailwind CSS"],
    impact: "95% token reduction via RAG pipeline",
    image: "/projects/ai-assessment-creator-placeholder.svg",
    github: "https://github.com/Andymendez100/AI-Assessment-Creator",
  },
];

export const professionalProjects: ProfessionalProject[] = [
  {
    title: "Production Voice AI Bot",
    description:
      "End-to-end production voice AI system with full telephony integration, conversational AI pipeline, and custom Answering Machine Detection (AMD), automating outbound call workflows and significantly increasing live contact rates.",
    tech: ["Python", "Pipecat", "LiveKit", "AWS", "LangGraph", "Twilio"],
    impact: "Automated outbound call workflows at scale",
  },
  {
    title: "Agent Factory",
    description:
      "Reusable AI agent workflow platform built with LangGraph, streamlining team lead operations across departments and accelerating automation adoption across the organization.",
    tech: ["Python", "LangGraph", "TypeScript", "React", "Docker"],
    impact: "Streamlined operations across departments",
  },
  {
    title: "Local RAG System",
    description:
      "Fully local Retrieval-Augmented Generation system with custom document ingestion using vLLM for inference, PaddleOCR for document processing, and CUDA acceleration. Zero data leaves the network.",
    tech: ["Python", "vLLM", "PaddleOCR", "CUDA", "Docker"],
    impact: "100% local — zero data egress",
  },
  {
    title: "Platform Re-architecture",
    description:
      "Transformed a single-threaded core platform into a multi-threaded architecture, dramatically improving throughput and agent productivity across the contact center.",
    tech: ["Node.js", "Worker Threads", "Redis", "Docker"],
    impact: "99.8% speed improvement",
  },
  {
    title: "AWS Cloud Migration",
    description:
      "Led enterprise cloud migration from on-premise infrastructure to AWS, implementing load balancing and auto-scaling for cost optimization, reliability, and scalability.",
    tech: ["AWS", "EC2", "Docker", "CI/CD", "CloudFront"],
    impact: "30% cost reduction, 40% reliability improvement",
  },
  {
    title: "NAWCTSD AI Challenge Winner",
    description:
      "Engineered a real-time anomaly detection tool at Raytheon Technologies that cut mission preparation time by 50%. Recognized as Top Innovation by NAWCTSD judges.",
    tech: ["Python", "Machine Learning", "Data Visualization", "Real-time"],
    impact: "Top Innovation Award — Raytheon",
  },
  {
    title: "Digital Agent Interfaces",
    description:
      "Front-end interface for AI-powered digital agents at Soul Machines, deployed by enterprise clients including Woolworths and General Motors. Brought autonomous digital humans to life across customer-facing channels.",
    tech: ["JavaScript", "Three.js", "WebGL", "Conversational AI"],
    impact: "Deployed for Fortune 500 clients",
  },
];
```

**Step 2: Verify TypeScript compiles**

Run: `cd /Users/andymendez/Documents/Personal/Code/Portfolio && npx tsc --noEmit`
Expected: No errors (or only pre-existing unrelated errors)

**Step 3: Commit**

```bash
git add src/data/projects.ts
git commit -m "refactor: split projects data into personal and professional arrays"
```

---

### Task 2: Create Placeholder Image

**Files:**
- Create: `public/projects/ai-assessment-creator-placeholder.svg`

**Step 1: Create the projects directory and placeholder SVG**

Create `public/projects/ai-assessment-creator-placeholder.svg` — an SVG with a dark gradient background matching the portfolio theme, showing a stylized app mockup silhouette (document icon + quiz/checklist elements + streaming indicator). Use the portfolio accent colors (#3b82f6 blue, #22d3ee cyan) on a #0c0c0f background.

The SVG should be ~800x450 (16:9 ratio) and visually suggest the app's purpose without being a real screenshot.

**Step 2: Commit**

```bash
git add public/projects/
git commit -m "feat: add placeholder image for AI Assessment Creator project card"
```

---

### Task 3: Create PersonalProjectCard Component

**Files:**
- Create: `src/components/ui/PersonalProjectCard.tsx`

**Step 1: Create the rich project card component**

```tsx
import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { fadeInUp } from "../../lib/animations";
import TechBadge from "./TechBadge";
import type { PersonalProject } from "../../data/projects";

interface PersonalProjectCardProps {
  project: PersonalProject;
  index: number;
}

export default function PersonalProjectCard({
  project,
  index,
}: PersonalProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="group overflow-hidden rounded-xl border border-border bg-bg-card transition-all hover:border-border-bright hover:shadow-lg hover:shadow-accent-blue/5"
    >
      {/* Image preview */}
      <div className="relative aspect-video overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold text-fg-bold transition-colors group-hover:text-accent-blue">
            {project.title}
          </h3>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-muted transition-colors hover:text-fg-bold"
                aria-label={`${project.title} on GitHub`}
              >
                <Github size={18} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-muted transition-colors hover:text-accent-cyan"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-fg">
          {project.description}
        </p>

        {/* Impact metric */}
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-accent-cyan">
          <TrendingUp size={14} />
          {project.impact}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No type errors from this file

**Step 3: Commit**

```bash
git add src/components/ui/PersonalProjectCard.tsx
git commit -m "feat: add PersonalProjectCard component with image preview and links"
```

---

### Task 4: Make ProjectCard Compact for Professional Highlights

**Files:**
- Modify: `src/components/ui/ProjectCard.tsx`

**Step 1: Update ProjectCard to use compact styling**

Update the import to use `ProfessionalProject` type and tighten the layout:

```tsx
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { fadeInUp } from "../../lib/animations";
import TechBadge from "./TechBadge";
import type { ProfessionalProject } from "../../data/projects";

interface ProjectCardProps {
  project: ProfessionalProject;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="group rounded-lg border border-border bg-bg-card p-4 transition-all hover:border-border-bright hover:shadow-lg hover:shadow-accent-blue/5"
    >
      <h3 className="mb-1.5 text-sm font-bold text-fg-bold transition-colors group-hover:text-accent-blue">
        {project.title}
      </h3>

      <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-fg">
        {project.description}
      </p>

      {/* Impact metric */}
      <div className="mb-3 flex items-center gap-1.5 text-xs font-medium text-accent-cyan">
        <TrendingUp size={12} />
        {project.impact}
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>
    </motion.div>
  );
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`

**Step 3: Commit**

```bash
git add src/components/ui/ProjectCard.tsx
git commit -m "refactor: make ProjectCard compact for professional highlights section"
```

---

### Task 5: Update TechBadge for Compact Variant

**Files:**
- Modify: `src/components/ui/TechBadge.tsx`

**Step 1: Add optional `compact` prop**

```tsx
interface TechBadgeProps {
  label: string;
  compact?: boolean;
}

export default function TechBadge({ label, compact }: TechBadgeProps) {
  return (
    <span
      className={`inline-block rounded-full border border-border bg-glass font-medium text-fg transition-colors hover:border-accent-blue/40 hover:text-fg-bold ${
        compact ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs"
      }`}
    >
      {label}
    </span>
  );
}
```

**Step 2: Update ProjectCard to pass `compact` to TechBadge**

In `src/components/ui/ProjectCard.tsx`, change:
```tsx
<TechBadge key={t} label={t} />
```
to:
```tsx
<TechBadge key={t} label={t} compact />
```

**Step 3: Commit**

```bash
git add src/components/ui/TechBadge.tsx src/components/ui/ProjectCard.tsx
git commit -m "feat: add compact variant to TechBadge for professional highlights"
```

---

### Task 6: Rewrite Projects Section with Two Subsections

**Files:**
- Modify: `src/components/sections/Projects.tsx`

**Step 1: Rewrite Projects.tsx to render both subsections**

```tsx
import { personalProjects, professionalProjects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import PersonalProjectCard from "../ui/PersonalProjectCard";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <div>
      {/* Personal Projects */}
      <SectionHeading
        eyebrow="Projects"
        heading="What I'm Building"
        description="Side projects and open-source work."
      />

      <div className="mb-20 grid gap-6 sm:grid-cols-2">
        {personalProjects.map((project, index) => (
          <PersonalProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* Professional Highlights */}
      <SectionHeading
        eyebrow="Professional"
        heading="Industry Experience"
        description="Production systems and innovations across AI, cloud, and full-stack engineering."
      />

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {professionalProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`

**Step 3: Verify dev server runs and renders correctly**

Run: `npm run dev`
Open http://localhost:5173 and scroll to the Projects section. Verify:
- "What I'm Building" heading with AI-Assessment-Creator card (placeholder image, GitHub link, tech badges)
- "Industry Experience" heading with 7 compact professional cards in 3-column grid

**Step 4: Commit**

```bash
git add src/components/sections/Projects.tsx
git commit -m "feat: split projects into personal and professional subsections"
```

---

### Task 7: Update Code Panel Source Import

**Files:**
- Modify: `src/App.tsx`

**Step 1: Verify the code panel still works**

The `App.tsx` imports `Projects.tsx?raw` for the code panel. Since we changed the contents of Projects.tsx, the code panel will automatically pick up the new source. No changes needed to App.tsx — just verify the code panel toggle still works by clicking the `</>` button in the navbar.

**Step 2: Commit (only if changes were needed)**

No commit expected for this task.

---

### Task 8: Visual QA and Final Polish

**Step 1: Run dev server and check all viewports**

Run: `npm run dev`

Check at:
- Desktop (1440px+): Personal project card should be nicely sized, professional cards in 3-column grid
- Tablet (768px): 2-column grids
- Mobile (375px): Single column, all cards stack

**Step 2: Check hover states and animations**

- Personal project card: image zooms slightly, title turns blue, border brightens
- Professional cards: title turns blue, border brightens
- GitHub/external link icons: color changes on hover
- All cards fade in from below with stagger

**Step 3: Fix any visual issues found**

**Step 4: Final commit**

```bash
git add -A
git commit -m "polish: visual QA fixes for projects redesign"
```

---

## GIF Replacement (Future — when MongoDB + OpenAI available)

When ready to replace the placeholder with a real GIF:

1. Install MongoDB: `brew tap mongodb/brew && brew install mongodb-community && brew services start mongodb-community`
2. Create `/Users/andymendez/Documents/Personal/Code/AI-Assessment-Creator/server/.env` with your `OPENAI_API_KEY` and `MONGODB_URI`
3. Start server: `cd AI-Assessment-Creator/server && npm run dev`
4. Start client: `cd AI-Assessment-Creator/client && npm run dev`
5. Open http://localhost:5173
6. Use a screen recording tool (e.g. `Kap` for macOS, or `ffmpeg`) to capture the workflow
7. Convert to GIF/WebP and save as `Portfolio/public/projects/ai-assessment-creator.gif`
8. Update `src/data/projects.ts`: change `image` from `.svg` to `.gif`
