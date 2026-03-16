# Portfolio Projects Redesign — Design Document

**Date:** 2026-02-28
**Goal:** Add AI-Assessment-Creator as a rich, visual project card and reorganize the Projects section into Personal Projects + Professional Highlights.

## Current State

- Single "Projects" section with 7 text-only cards in a 2-column grid
- All projects are professional/work projects — no images, no links, no repos
- Card data: title, description, tech[], impact

## Design

### Two-Section Split

Replace the current single "Projects" section with two subsections under one scroll target:

#### 1. Personal Projects (top)

Rich cards with visual previews:

- GIF/screenshot preview in a rounded container
- Title, description, tech badges, impact metric
- GitHub link icon + optional live demo link
- Full-width card when only one project; 2-column grid when more are added

**Data model:**
```ts
interface PersonalProject {
  title: string;
  description: string;
  tech: string[];
  impact: string;
  image: string;       // path to GIF/screenshot in /public/projects/
  github?: string;     // GitHub URL
  live?: string;       // live demo URL
}
```

**First entry — AI-Assessment-Creator:**
- Title: "AI Assessment Creator"
- Description: Full-stack app that transforms documents into AI-generated quizzes using GPT-4o with real-time streaming, RAG integration, and granular regeneration controls
- Tech: React, Node.js, Express, MongoDB, OpenAI, Tailwind CSS, Zustand
- Impact: "95% token reduction via RAG pipeline"
- Image: GIF showing full workflow (paste text → configure → stream questions → results)
- GitHub: https://github.com/Andymendez100/AI-Assessment-Creator

#### 2. Professional Highlights (bottom)

Compact cards — tighter layout than current:

- 3-column grid on desktop (sm:grid-cols-2 md:grid-cols-3)
- Smaller text, less padding
- Keep: title, one-line description, impact metric, tech badges
- No images or links

Uses existing 7 professional projects data.

### Navigation

- Navbar keeps a single "Projects" link scrolling to the combined section
- Both subsections share the `projects` ID area

### Files to Change

1. `src/data/projects.ts` — split into personalProjects and professionalProjects arrays with new PersonalProject interface
2. `src/components/sections/Projects.tsx` — render both subsections with separate headings
3. `src/components/ui/ProjectCard.tsx` — make compact for professional highlights
4. **New:** `src/components/ui/PersonalProjectCard.tsx` — rich card with image + links
5. `public/projects/` — directory for project assets (GIFs, screenshots)

### GIF Creation

- Spin up AI-Assessment-Creator locally
- Walk through: paste text → configure → generate → view results
- Capture as GIF, save to `public/projects/ai-assessment-creator.gif`
