// Selected work is labeled by industry, not employer. Keep client, company,
// and product names out of this file: it ships to a public site.
export interface SelectedWork {
  domain: string;
  title: string;
  summary: string;
  metric: { value: string; label: string };
  /** Steps of the system diagram, left to right. */
  flow: string[];
  /** Index of the flow step drawn in the accent color: the AI or key step. */
  highlight: number;
  /** Side path shown under the diagram, e.g. what happens when the AI is unsure. */
  branch?: string;
  description: string;
  proof: string;
  tech: string[];
  article?: string;
  /** Slug of a matching case study in caseStudies.ts. */
  caseStudy?: string;
}

export interface OpenSourceProject {
  title: string;
  description: string;
  image: string;
  github: string;
}

export const selectedWork: SelectedWork[] = [
  {
    domain: "Healthcare",
    title: "AI referral intake",
    summary: "Reads faxed and emailed referrals with AI and enters clean ones into the clinic's records system.",
    metric: { value: "23,000", label: "automated tests" },
    flow: ["Fax or email", "AI reads it", "Insurance check", "Clinic records"],
    highlight: 1,
    branch: "AI unsure? A person reviews it",
    description:
      "Faxed and emailed referrals are read by AI, checked against the patient's insurance, and entered into the clinic's records system. Anything the AI is unsure of goes to a person instead of guessing. It has since grown into billing, scheduling, and patient messaging.",
    proof:
      "In daily use by clinic staff and built to HIPAA requirements. Made about 90% of 8,600+ commits. Moved 31,000 referrals and 81,000 documents off the old system.",
    tech: ["Python", "FastAPI", "PostgreSQL", "React", "AWS Textract", "AWS Bedrock", "Gemini", "OpenAI"],
  },
  {
    domain: "Contact center",
    title: "Voice AI agent",
    summary: "Makes and takes calls, follows the script, and hands qualified callers to a live agent.",
    metric: { value: "640+", label: "automated tests" },
    flow: ["Caller speaks", "Speech to text", "AI picks reply and next step", "Voice reply"],
    highlight: 2,
    branch: "Qualified? Transfer to a live agent",
    description:
      "Places and answers calls, follows the call script, detects voicemail in English and Spanish, and hands qualified callers to a live agent. Each turn runs two models at once: one speaks while the other picks the next step, so the caller never waits on it.",
    proof: "Made 88% of 750+ commits.",
    tech: ["Python", "LiveKit", "Deepgram", "Cartesia", "OpenAI", "Twilio", "Redis", "AWS Lambda"],
    article: "https://medium.com/p/5cf0886f3c32",
    caseStudy: "voice-ai-agent",
  },
  {
    domain: "Engineering productivity",
    title: "AI coding agents",
    summary: "Turn a ticket into a tested, reviewed pull request for a person to merge.",
    metric: { value: "2.3×", label: "monthly merged output after the switch" },
    flow: ["Ticket", "Agent writes code", "Browser tests", "Code review", "Pull request"],
    highlight: 1,
    branch: "A person approves every merge",
    description:
      "A ticket goes in. An agent writes the change, tests it in a real browser, works through code review, and opens a pull request for a person to merge. I built two of these for two teams, plus an in-house pull request reviewer that replaced a paid service.",
    proof: "Agents now write about 72% of merged changes in the core apps. 380+ agent pull requests merged across 16 repositories.",
    tech: ["TypeScript", "Python", "Claude Code", "Codex", "GitHub Actions", "AWS ECS", "Terraform"],
    caseStudy: "ai-coding-agents",
  },
  {
    domain: "Contact center",
    title: "Lead-scoring model",
    summary: "Predicts who will answer and when, so the dialer calls the right people at the right time.",
    metric: { value: "0.90", label: "AUC on held-out data" },
    flow: ["Past call history", "Model scores each lead", "Best time to call", "Dialer"],
    highlight: 1,
    branch: "Retrains weekly and ships only if it beats the baseline",
    description:
      "Predicts how likely each lead is to answer, by time of day and attempt number, so the dialer calls the right people at the right time. It retrains every week and only ships when it beats a simple baseline.",
    proof: "Built alone, from data pipeline to weekly retraining.",
    tech: ["Python", "XGBoost", "MySQL", "AWS ECS Fargate"],
  },
  {
    domain: "Enterprise training",
    title: "Training and readiness platforms",
    summary: "Track courses, certifications, and staff readiness for many companies on one system.",
    metric: { value: "6,000", label: "people at once, load-tested" },
    flow: ["Many companies", "One platform", "Data walled off per company", "Audit trail"],
    highlight: 2,
    branch: "Single sign-on with each company's login",
    description:
      "Two platforms that track courses, certifications, and staff readiness for large organizations. One keeps each company's data walled off, with field-level permissions and a full audit trail. The other adds single sign-on and live updates, and was load-tested for 6,000 people at once.",
    proof: "Primary builder on both, with 2,200+ and 340+ commits.",
    tech: [".NET 8", "SQL Server", "FastAPI", "PostgreSQL", "React", "Redis", "SAML"],
  },
  {
    domain: "Cloud",
    title: "AWS infrastructure as code",
    summary: "The whole AWS setup lives in code, and deploys roll back on their own when something breaks.",
    metric: { value: "~600", label: "AWS resources defined in code" },
    flow: ["Code change", "GitHub Actions", "Blue/green deploy", "4 AWS environments"],
    highlight: 2,
    branch: "Alarm fires? Roll back automatically",
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
      "Team leads describe a goal, and an AI agent logs into web portals, gathers the data, and reports on it.",
    image: "/agent-factory-demo.gif",
    github: "https://github.com/Andymendez100/Agent-Factory",
  },
  {
    title: "Multi-Format RAG API",
    description:
      "Search across 14+ document formats, with GPU text extraction from images and combined keyword and semantic search.",
    image: "/projects/rag-demo.gif",
    github: "https://github.com/Andymendez100/rag",
  },
  {
    title: "AI Assessment Creator",
    description:
      "Turns training documents into quizzes, streamed live, using 95% fewer tokens by sending only the relevant passages.",
    image: "/projects/ai-assessment-creator-demo.gif",
    github: "https://github.com/Andymendez100/AI-Assessment-Creator",
  },
  {
    title: "MeetBeats",
    description: "A music bot that joins Google Meet calls and plays requests from the chat.",
    image: "/projects/meetbeats-preview.svg",
    github: "https://github.com/Andymendez100/MeetBeats",
  },
];
