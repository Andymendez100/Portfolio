export interface Project {
  title: string;
  description: string;
  tech: string[];
  impact: string;
}

export const projects: Project[] = [
  {
    title: "Voice AI Bot",
    description:
      "Production voice AI system with telephony integration, conversational AI pipeline, and custom answering machine detection. Handles real-time voice interactions at scale with sub-second latency.",
    tech: ["Python", "Pipecat", "LiveKit", "AWS", "LangGraph"],
    impact: "Production deployment with real-time telephony",
  },
  {
    title: "Agent Factory",
    description:
      "Multi-agent orchestration platform built with LangGraph enabling complex workflow automation. Agents collaborate on tasks including research, code generation, and data analysis.",
    tech: ["Python", "LangGraph", "TypeScript", "React", "Docker"],
    impact: "Automated complex multi-step workflows",
  },
  {
    title: "Local RAG System",
    description:
      "Fully local Retrieval-Augmented Generation system using vLLM for inference, PaddleOCR for document processing, and CUDA acceleration. Zero data leaves the network.",
    tech: ["Python", "vLLM", "PaddleOCR", "CUDA", "Docker"],
    impact: "100% local — zero data egress",
  },
  {
    title: "Platform Re-architecture",
    description:
      "Led the transformation of a single-threaded application into a multi-threaded architecture, dramatically improving throughput and eliminating processing bottlenecks.",
    tech: ["Node.js", "Worker Threads", "Redis", "Docker"],
    impact: "99.8% speed improvement",
  },
  {
    title: "AWS Cloud Migration",
    description:
      "Planned and executed enterprise cloud migration from on-premise infrastructure to AWS, optimizing for cost, reliability, and scalability.",
    tech: ["AWS", "Terraform", "Docker", "CI/CD", "CloudFront"],
    impact: "30% cost reduction, 40% reliability improvement",
  },
  {
    title: "NAWCTSD AI Challenge Winner",
    description:
      "Built a real-time anomaly detection tool for defense training simulations at Raytheon. Recognized as Top Innovation by NAWCTSD judges.",
    tech: ["Python", "Machine Learning", "Data Visualization", "Real-time"],
    impact: "Top Innovation Award — Raytheon",
  },
  {
    title: "Digital Agent Interfaces",
    description:
      "AI-powered digital human interfaces for Fortune 500 clients at Soul Machines. Combined conversational AI with photorealistic avatar rendering for immersive user experiences.",
    tech: ["JavaScript", "Three.js", "WebGL", "Conversational AI"],
    impact: "Deployed for Fortune 500 clients",
  },
];
