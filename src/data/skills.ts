export interface SkillGroup {
  name: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: "AI",
    skills: [
      "LLM agents",
      "Voice AI",
      "RAG and document AI",
      "Fine-tuning and evals",
      "Machine learning (XGBoost)",
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
    skills: ["HIPAA", "Multi-tenant data isolation", "Audit trails", "SAML single sign-on", "Healthcare billing (837 / 835)", "TCPA"],
  },
  {
    name: "Contact center",
    skills: ["Twilio", "Genesys Cloud", "LiveKit", "Dialer and call routing"],
  },
  {
    name: "Leadership",
    skills: ["Led a 16+ person technology org", "Hiring and mentoring", "Budgets and vendors", "Roadmaps", "AI-first engineering process"],
  },
];
