// Selected work is labeled by industry, not employer. Keep client, company,
// and product names out of this file: it ships to a public site.
export interface SelectedWork {
  domain: string;
  title: string;
  description: string;
  proof: string;
  tech: string[];
  article?: string;
}

export interface OpenSourceProject {
  title: string;
  description: string;
  github: string;
}

export const selectedWork: SelectedWork[] = [
  {
    domain: "Healthcare",
    title: "AI referral intake for physical therapy clinics",
    description:
      "Faxed and emailed referrals are read by AI, checked against the patient's insurance, and entered into the clinic's records system. Anything the AI is unsure of goes to a person instead of guessing. It has since grown into billing, scheduling, and patient messaging.",
    proof:
      "In daily use by clinic staff and built to HIPAA requirements. Made about 90% of 8,600+ commits, with 23,000 tests. Moved 31,000 referrals and 81,000 documents off the old system.",
    tech: ["Python", "FastAPI", "PostgreSQL", "React", "AWS Textract", "AWS Bedrock", "Gemini", "OpenAI"],
  },
  {
    domain: "Contact center",
    title: "Voice AI agent for outbound calling",
    description:
      "Places and answers calls, follows the call script, detects voicemail in English and Spanish, and hands qualified callers to a live agent. Each turn runs two models at once: one speaks while the other picks the next step, so the caller never waits on it.",
    proof: "Made 88% of 750+ commits, covered by 640+ tests.",
    tech: ["Python", "LiveKit", "Deepgram", "Cartesia", "OpenAI", "Twilio", "Redis", "AWS Lambda"],
    article: "https://medium.com/p/5cf0886f3c32",
  },
  {
    domain: "Engineering productivity",
    title: "AI coding agents that ship pull requests",
    description:
      "A ticket goes in. An agent writes the change, tests it in a real browser, works through code review, and opens a pull request for a person to merge. I built two of these for two teams, plus an in-house pull request reviewer that replaced a paid service.",
    proof: "375 agent-built branches merged across 19 repositories.",
    tech: ["TypeScript", "Python", "Claude Code", "Codex", "GitHub Actions", "AWS ECS", "Terraform"],
  },
  {
    domain: "Contact center",
    title: "Lead-scoring model",
    description:
      "Predicts how likely each lead is to answer, by time of day and attempt number, so the dialer calls the right people at the right time. It retrains every week and only ships when it beats a simple baseline.",
    proof: "AUC of 0.90 on held-out data, trained on millions of past calls. Built alone.",
    tech: ["Python", "XGBoost", "MySQL", "AWS ECS Fargate"],
  },
  {
    domain: "Enterprise training",
    title: "Multi-company training and readiness platforms",
    description:
      "Two platforms that track courses, certifications, and staff readiness for large organizations. One keeps each company's data walled off, with field-level permissions and a full audit trail. The other adds single sign-on and live updates, and was load-tested for 6,000 people at once.",
    proof: "Primary builder on both, with 2,200+ and 340+ commits.",
    tech: [".NET 8", "SQL Server", "FastAPI", "PostgreSQL", "React", "Redis", "SAML"],
  },
  {
    domain: "Cloud",
    title: "AWS infrastructure as code",
    description:
      "Defined about 600 AWS resources in code across four environments. Moved services from servers to containers, with blue/green deploys that roll back on their own when alarms fire, and retired the old deploy tooling.",
    proof: "Built alone, 296 of 300 commits.",
    tech: ["AWS", "OpenTofu", "ECS Fargate", "Lambda", "CodeDeploy", "GitHub Actions"],
  },
];

export const openSource: OpenSourceProject[] = [
  {
    title: "Agent Factory",
    description:
      "Team leads describe a goal, and an AI agent logs into internal portals, gathers the data, and reports on it.",
    github: "https://github.com/Andymendez100/Agent-Factory",
  },
  {
    title: "Multi-Format RAG API",
    description:
      "Search across 14+ document formats, with GPU text extraction from images and combined keyword and semantic search.",
    github: "https://github.com/Andymendez100/rag",
  },
  {
    title: "AI Assessment Creator",
    description:
      "Turns training documents into quizzes, streamed live, using 95% fewer tokens by sending only the relevant passages.",
    github: "https://github.com/Andymendez100/AI-Assessment-Creator",
  },
  {
    title: "MeetBeats",
    description: "A music bot that joins Google Meet calls and plays requests from the chat.",
    github: "https://github.com/Andymendez100/MeetBeats",
  },
];
