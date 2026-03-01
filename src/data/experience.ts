export interface ExperienceEntry {
  company: string;
  title: string;
  period: string;
  highlights: string[];
  tech: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Balboa Digital",
    title: "Director of IT",
    period: "Nov 2024 — Present",
    highlights: [
      "Lead technology infrastructure, AI strategy, and digital transformation for a high-volume contact center, ensuring scalability, security, and operational efficiency across all platforms",
      "Engineered a production Voice AI bot end-to-end, including telephony integration, conversational AI pipeline, and custom Answering Machine Detection (AMD) system",
      "Designed and deployed an Agent Factory using LangGraph to create reusable AI agent workflows, streamlining team lead operations across departments",
      "Architected a fully local RAG system with vLLM, PaddleOCR, and CUDA, eliminating cloud dependency for intelligent document search and retrieval",
      "Spearheaded SentinelOne security implementation, elevating cybersecurity profile to 96/100 and qualifying for cyber insurance discounts",
    ],
    tech: [
      "Python",
      "LangGraph",
      "vLLM",
      "Pipecat",
      "LiveKit",
      "AWS",
      "SentinelOne",
      "Twilio",
    ],
  },
  {
    company: "Balboa Digital",
    title: "Software Engineering Manager",
    period: "Aug 2022 — Oct 2024",
    highlights: [
      "Re-architected core platform from single-threaded to multi-threaded task processing, unlocking a 99.8% speed improvement",
      "Led enterprise cloud migration from on-premise to AWS, reducing operational costs by 30% and improving system reliability by 40%",
      "Built a mentorship and leadership development program that improved team retention by 25% and produced three promotion-ready engineers",
    ],
    tech: [
      "Node.js",
      "AWS",
      "Docker",
      "CI/CD",
      "Kubernetes",
      "TypeScript",
    ],
  },
  {
    company: "Balboa Digital",
    title: "Web Application Developer",
    period: "Feb 2020 — Aug 2022",
    highlights: [
      "Decreased call load times by 80% (under 2 seconds) and increased CRM loading speed by over 60%",
      "Refactored the codebase to improve performance by 120% while reducing code volume by 50%",
      "Built a real-time monitoring application with merge/listen capabilities to track business and employee performance",
    ],
    tech: ["JavaScript", "React", "Node.js", "MySQL", "WebSockets"],
  },
  {
    company: "Raytheon Technologies",
    title: "Senior Full Stack Developer",
    period: "Oct 2021 — Aug 2022",
    highlights: [
      "Won Top Innovation at the NAWCTSD AI Challenge by engineering a real-time anomaly detection tool that cut mission preparation time by 50%",
      "Redesigned the developer onboarding process, reducing ramp-up time by 50%",
      "Architected WebSocket-based real-time data sync into the LMS, driving a 75% increase in trainee satisfaction scores",
    ],
    tech: ["Python", "JavaScript", "Machine Learning", "WebSockets", "React"],
  },
  {
    company: "Soul Machines",
    title: "Senior Software Engineer",
    period: "Jan 2022 — Aug 2022",
    highlights: [
      "Developed the front-end interface for AI-powered digital agents deployed by enterprise clients including Woolworths and General Motors",
      "Built conversational UI components that brought autonomous digital humans to life across customer-facing channels",
      "Contributed to a platform serving Fortune 500 brands in conversational AI and real-time rendering",
    ],
    tech: ["JavaScript", "Three.js", "WebGL", "Conversational AI", "React"],
  },
  {
    company: "Inland Empire Software Development",
    title: "Lead Software Engineer",
    period: "Apr 2019 — Sep 2021",
    highlights: [
      "Led a cross-functional team of engineers, managing project delivery end-to-end and mentoring junior developers",
      "Delivered a 160% improvement in site performance through infrastructure and server optimizations",
      "Reduced infrastructure costs by 25% by implementing Redis caching and optimizing database queries at scale",
    ],
    tech: ["JavaScript", "React", "Node.js", "Redis", "MongoDB"],
  },
  {
    company: "Trilogy Education",
    title: "Full Stack Web Development Teacher",
    period: "May 2021 — Dec 2021",
    highlights: [
      "Taught full-stack web development to cohorts of career-transitioning students",
      "Mentored students through capstone projects and portfolio development",
    ],
    tech: ["JavaScript", "React", "Node.js", "MongoDB", "MySQL"],
  },
  {
    company: "Freelance",
    title: "Freelance Web Developer",
    period: "Aug 2016 — Oct 2021",
    highlights: [
      "Founded and operated a freelance practice delivering full-stack web applications across multiple industries using the MERN stack",
      "Achieved 99.9% uptime across all client applications while maintaining ADA and GDPR compliance",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "AWS"],
  },
];
