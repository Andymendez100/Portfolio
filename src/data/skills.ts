export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "HTML5", "CSS"],
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
      "Gemini API",
      "AWS Bedrock",
      "Hugging Face",
      "PaddleOCR",
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
      "WebSockets",
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
      "Lambda",
      "EC2",
      "S3",
      "SQS",
      "Redis",
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      "CI/CD",
      "Linux",
      "Nginx",
      "GitHub",
      "GitLab",
      "OpenVPN",
      "SentinelOne",
      "Agile",
    ],
  },
];
