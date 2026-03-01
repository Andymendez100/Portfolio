export interface ExperienceEntry {
  company: string;
  title: string;
  period: string;
  highlights: string[];
  tech: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Balboa Digital",
    title: "Director of IT",
    period: "2023 — Present",
    highlights: [
      "Spearheading AI strategy and implementation across the organization, including production Voice AI bots with telephony integration",
      "Architecting multi-agent orchestration platforms using LangGraph for complex workflow automation",
      "Leading cloud infrastructure modernization with AWS, achieving 30% cost reduction",
    ],
    tech: [
      "TypeScript",
      "Python",
      "LangGraph",
      "AWS",
      "React",
      "Pipecat",
      "LiveKit",
    ],
  },
  {
    company: "Balboa Digital",
    title: "VP of Engineering",
    period: "2022 — 2023",
    highlights: [
      "Led engineering team in platform re-architecture, achieving 99.8% speed improvement through multi-threading optimization",
      "Established CI/CD pipelines and DevOps best practices across all projects",
      "Designed and implemented local RAG systems with vLLM and PaddleOCR",
    ],
    tech: [
      "Node.js",
      "Docker",
      "Kubernetes",
      "MongoDB",
      "vLLM",
      "CI/CD",
    ],
  },
  {
    company: "Balboa Digital",
    title: "Lead Software Engineer",
    period: "2021 — 2022",
    highlights: [
      "Built full-stack applications serving enterprise clients with React and Node.js",
      "Implemented GraphQL APIs and real-time data pipelines",
      "Mentored junior developers and established code review processes",
    ],
    tech: ["React", "GraphQL", "Node.js", "MySQL", "Tailwind CSS"],
  },
  {
    company: "Raytheon",
    title: "Software Engineer",
    period: "2020 — 2021",
    highlights: [
      "Won NAWCTSD AI Innovation Challenge with real-time anomaly detection tool",
      "Developed training simulation software for defense applications",
      "Collaborated with cross-functional teams on mission-critical systems",
    ],
    tech: ["Python", "JavaScript", "Machine Learning", "Data Analysis"],
  },
  {
    company: "Soul Machines",
    title: "Solutions Engineer",
    period: "2019 — 2020",
    highlights: [
      "Built AI-powered digital human interfaces for Fortune 500 clients",
      "Integrated conversational AI with realistic avatar rendering pipelines",
      "Delivered client-facing demos and technical presentations",
    ],
    tech: ["JavaScript", "Three.js", "WebGL", "Conversational AI", "REST APIs"],
  },
  {
    company: "IESD",
    title: "Software Developer",
    period: "2018 — 2019",
    highlights: [
      "Developed GIS-based web applications for environmental monitoring",
      "Built interactive data visualization dashboards",
    ],
    tech: ["JavaScript", "ArcGIS", "Python", "PostgreSQL"],
  },
  {
    company: "Trilogy Education",
    title: "Teaching Assistant",
    period: "2018",
    highlights: [
      "Assisted in teaching full-stack web development bootcamp",
      "Mentored students through complex coding challenges and projects",
    ],
    tech: ["JavaScript", "React", "Node.js", "MongoDB", "MySQL"],
  },
];
