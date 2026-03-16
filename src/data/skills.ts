export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Leadership & Strategy",
    skills: [
      "IT Strategy & Roadmapping",
      "Cross-Functional Team Leadership",
      "Vendor Negotiations & Licensing",
      "Budget & Resource Management",
      "Stakeholder Communication",
      "Agile / Scrum",
    ],
  },
  {
    name: "AI & Automation",
    skills: [
      "Voice AI Systems",
      "Multi-Agent Platforms",
      "RAG & Document Intelligence",
      "Conversational AI Pipelines",
      "LLM Integration & Deployment",
      "Workflow Automation",
    ],
  },
  {
    name: "Cloud & Infrastructure",
    skills: [
      "AWS Architecture",
      "Cloud Migration & Modernization",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "High-Availability Systems",
      "Legacy Platform Modernization",
    ],
  },
  {
    name: "Security & Compliance",
    skills: [
      "Endpoint Security (SentinelOne)",
      "Cybersecurity Strategy",
      "ADA & GDPR Compliance",
      "VPN & Network Security",
      "Cyber Insurance Qualification",
    ],
  },
  {
    name: "Platforms & Operations",
    skills: [
      "Genesys Contact Center",
      "Twilio / Five9 Telephony",
      "Salesforce",
      "Jira & Confluence",
      "Microsoft 365",
      "Tableau / Power BI",
    ],
  },
];
