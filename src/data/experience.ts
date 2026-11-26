export interface Role {
  title: string;
  period: string;
  summary: string;
}

export interface ExperienceEntry {
  company: string;
  roles: Role[];
}

// Titles and dates match the resume. Change them there first.
export const experience: ExperienceEntry[] = [
  {
    company: "Balboa Digital",
    roles: [
      {
        title: "Director of IT",
        period: "Nov 2024 – Present",
        summary:
          "Lead a 16+ person organization across engineering, infrastructure, QA, IT support, and design. Built the company's voice AI agent, lead-scoring model, and AI coding agent.",
      },
      {
        title: "Software Engineering Manager",
        period: "Aug 2022 – Oct 2024",
        summary:
          "Led the move from on-premises servers to AWS, with 30% lower infrastructure cost and 40% better reliability. Rebuilt core task processing to run in parallel, 99.8% faster.",
      },
      {
        title: "Web Application Developer",
        period: "Feb 2020 – Aug 2022",
        summary:
          "Cut call load times by 80%, to under 2 seconds, and built a real-time app for monitoring agent performance.",
      },
    ],
  },
  {
    company: "Raytheon Technologies",
    roles: [
      {
        title: "Senior Full Stack Developer",
        period: "Oct 2021 – Aug 2022",
        summary:
          "Won Top Innovation at the NAWCTSD AI Challenge with a real-time anomaly detection tool that cut mission preparation time in half.",
      },
    ],
  },
  {
    company: "Soul Machines",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "Jan 2022 – Aug 2022",
        summary: "Built the front end for AI digital humans used by Fortune 500 brands.",
      },
    ],
  },
  {
    company: "Inland Empire Software Development",
    roles: [
      {
        title: "Lead Software Engineer",
        period: "Apr 2019 – Sep 2021",
        summary:
          "Led and mentored a team of engineers. Made client sites 160% faster and cut infrastructure costs by 25%.",
      },
    ],
  },
  {
    company: "Trilogy Education",
    roles: [
      {
        title: "Full Stack Web Development Teacher",
        period: "May 2021 – Dec 2021",
        summary: "Taught full-stack web development to people changing careers.",
      },
    ],
  },
  {
    company: "Freelance",
    roles: [
      {
        title: "Web Developer",
        period: "Aug 2016 – Oct 2021",
        summary: "Built and ran full-stack web apps for clients across several industries.",
      },
    ],
  },
];
