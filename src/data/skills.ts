export interface SkillGroup {
  name: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: "AI",
    skills: [
      "LLM agents",
      "voice AI",
      "RAG and document AI",
      "fine-tuning and evals",
      "machine learning (XGBoost)",
      "Claude Code and Codex automation",
    ],
  },
  {
    name: "Engineering",
    skills: ["Python", "TypeScript", "C# / .NET", "React", "FastAPI", "Node.js", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    name: "Cloud",
    skills: ["AWS", "OpenTofu / Terraform", "ECS Fargate", "Lambda", "GitHub Actions", "Docker"],
  },
  {
    name: "Regulated systems",
    skills: ["HIPAA", "multi-tenant data isolation", "audit trails", "SAML single sign-on", "healthcare billing (837 / 835)", "TCPA"],
  },
  {
    name: "Contact center",
    skills: ["Twilio", "Genesys Cloud", "LiveKit", "dialer and call routing"],
  },
  {
    name: "Leadership",
    skills: ["16+ person technology org", "hiring and mentoring", "budgets and vendors", "roadmaps", "AI-first engineering process"],
  },
];
