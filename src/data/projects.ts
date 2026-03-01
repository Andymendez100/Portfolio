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
];

export const professionalProjects: ProfessionalProject[] = [
  {
    title: "Production Voice AI Bot",
    description:
      "End-to-end production voice AI system with full telephony integration, conversational AI pipeline, and custom Answering Machine Detection (AMD), automating outbound call workflows and significantly increasing live contact rates.",
    tech: ["Python", "Pipecat", "LiveKit", "AWS", "LangGraph", "Twilio"],
    impact: "Automated outbound call workflows at scale",
  },
  {
    title: "Agent Factory",
    description:
      "Reusable AI agent workflow platform built with LangGraph, streamlining team lead operations across departments and accelerating automation adoption across the organization.",
    tech: ["Python", "LangGraph", "TypeScript", "React", "Docker"],
    impact: "Streamlined operations across departments",
  },
  {
    title: "Local RAG System",
    description:
      "Fully local Retrieval-Augmented Generation system with custom document ingestion using vLLM for inference, PaddleOCR for document processing, and CUDA acceleration. Zero data leaves the network.",
    tech: ["Python", "vLLM", "PaddleOCR", "CUDA", "Docker"],
    impact: "100% local — zero data egress",
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
