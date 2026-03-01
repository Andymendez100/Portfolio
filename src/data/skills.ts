export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python"],
  },
  {
    name: "AI / ML",
    skills: [
      "LangGraph",
      "LangChain",
      "vLLM",
      "Ollama",
      "Pipecat",
      "LiveKit",
      "OpenAI API",
      "Anthropic API",
      "Hugging Face",
    ],
  },
  {
    name: "Frontend",
    skills: [
      "React",
      "Tailwind CSS",
      "Three.js",
      "GraphQL",
      "Material-UI",
    ],
  },
  {
    name: "Backend & Cloud",
    skills: [
      "Node.js",
      "MongoDB",
      "MySQL",
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
    ],
  },
  {
    name: "DevOps & Tools",
    skills: ["CI/CD", "Linux", "Nginx", "GitHub", "GitLab"],
  },
];
