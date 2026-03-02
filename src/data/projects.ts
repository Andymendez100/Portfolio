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
  article?: string;
}

export const personalProjects: PersonalProject[] = [
  {
    title: "AI Assessment Creator",
    description:
      "Full-stack app that transforms documents into AI-generated quizzes using GPT-4o. Features real-time streaming with Server-Sent Events, Retrieval-Augmented Generation for intelligent document processing, and three-level granular regeneration controls.",
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI", "Tailwind CSS"],
    impact: "95% token reduction via RAG pipeline",
    image: "/projects/ai-assessment-creator-demo.gif",
    github: "https://github.com/Andymendez100/AI-Assessment-Creator",
  },
  {
    title: "Agent Factory",
    description:
      "No-code AI agent platform for BPO operations. Team leads define a goal and select internal platforms — the AI autonomously logs into portals, scrapes employee data, and analyzes KPIs using a LangGraph ReAct loop with dynamically generated Playwright tools. Live execution streams to a React Flow canvas via WebSocket.",
    tech: ["Python", "FastAPI", "LangGraph", "Playwright", "React", "PostgreSQL", "Celery", "Docker"],
    impact: "True autonomous AI agent — not a step sequencer",
    image: "/agent-factory-demo.gif",
    github: "https://github.com/Andymendez100/Agent-Factory",
  },
  {
    title: "Multi-Format RAG API",
    description:
      "Production RAG API that ingests 14+ document formats (PDF, Excel, Word, PowerPoint, images) with GPU-accelerated OCR via PaddleOCR, generates embeddings via OpenAI or vLLM, and stores vectors in Qdrant for hybrid BM25 + semantic search. Fully containerized with PostgreSQL metadata store.",
    tech: ["Python", "FastAPI", "Qdrant", "PostgreSQL", "PaddleOCR", "Docker"],
    impact: "14+ formats, GPU-accelerated OCR, hybrid search",
    image: "/projects/rag-demo.gif",
    github: "https://github.com/Andymendez100/rag",
  },
  {
    title: "MeetBeats",
    description:
      "Music bot for Google Meet — like Discord music bots, but for meetings. Joins as a participant via Playwright, monitors chat for commands, and streams YouTube audio through a PulseAudio virtual microphone pipeline. Fully containerized with Docker.",
    tech: ["TypeScript", "Node.js", "Playwright", "PulseAudio", "yt-dlp", "Docker"],
    impact: "Full audio pipeline — YouTube to WebRTC",
    image: "/projects/meetbeats-preview.svg",
    github: "https://github.com/Andymendez100/MeetBeats",
  },
];

export const professionalProjects: ProfessionalProject[] = [
  {
    title: "Production Voice AI Bot",
    description:
      "End-to-end production voice AI system with full telephony integration, conversational AI pipeline, and custom Answering Machine Detection (AMD), automating outbound call workflows and significantly increasing live contact rates.",
    tech: ["Python", "Pipecat", "LiveKit", "AWS", "LangGraph", "Twilio"],
    impact: "Automated outbound call workflows at scale",
    article: "https://medium.com/p/5cf0886f3c32",
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
