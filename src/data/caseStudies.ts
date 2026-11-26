// Case studies ship to a public site. Same rules as projects.ts: no employer,
// client, or internal product names, and no volumes, revenue, costs, or SLAs.
export interface CaseStudySection {
  heading: string;
  paragraphs?: string[];
  /** "Short title: explanation" bullets render the title in bold. */
  bullets?: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  domain: string;
  summary: string;
  role: string;
  period: string;
  stack: string[];
  results: { value: string; label: string }[];
  /** Diagram for studies without a matching Selected work card. */
  flow?: { flow: string[]; highlight: number; branch?: string };
  sections: CaseStudySection[];
}

/** Each study is built as its own HTML file so links work on static hosting. */
export const caseStudyPath = (slug: string) => `/case-studies/${slug}.html`;

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-coding-agents",
    title: "AI coding agents that turn tickets into tested, reviewed pull requests",
    domain: "Engineering productivity",
    summary:
      "I designed and built a coding agent that takes a Jira ticket through triage, a build, automated review, and a live QA run, then stops at a pull request a person merges. A second team now runs a version two of the design.",
    role: "Designed and built both versions; sole engineer",
    period: "2026",
    stack: [
      "TypeScript",
      "Claude Code",
      "Codex CLI",
      "CodeRabbit",
      "Playwright",
      "AWS Lambda",
      "API Gateway",
      "SQS",
      "ECS Fargate",
      "CodeBuild",
      "GitHub Actions",
      "Terraform",
      "Jira",
    ],
    results: [
      { value: "2.3×", label: "monthly merged pull requests, before vs. after" },
      { value: "72%", label: "of merged changes in the core apps written by the agent" },
      { value: "380+", label: "agent pull requests merged, every one approved by a person" },
    ],
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Small, well-scoped tickets sat in the queue because the work around the code took the time: reading the repo, running lint, answering review comments, and clicking through the change before anyone trusted it. I wanted an engineer to hand over a ticket and get back a pull request that had already been tested and reviewed, with a person still deciding what merges.",
          "Writing the code was the easy part. The hard part was making the loop safe. An agent that retries review forever, or reports success without evidence, creates more work than it saves. The design had to bound every loop, record evidence for every claim, and end every run in a clear state.",
        ],
      },
      {
        heading: "What I built",
        paragraphs: [
          "A Jira ticket goes to an API Gateway Lambda that checks the webhook secret, queues the event on SQS, and acknowledges within five seconds. A worker Lambda triages the ticket: a question gets an answer, a bug gets an investigation, and a feature becomes a build brief. The requester must approve the brief before any code runs.",
          "An approved brief starts one run per target repo on ECS Fargate. Claude Code works the repo, runs the linter, and does a Codex pre-check. It then opens a draft pull request and triggers CodeRabbit. Each review starts a respond run that fixes mechanical findings, replies to each thread, and escalates design questions to a person. When review is clean, the run deploys a live preview, runs the pull request's QA plan in headless Playwright, and posts either “Ready to merge.” with the evidence and a test recipe, or “BLOCKED:” with the reason.",
        ],
        bullets: [
          "Skill library: Run playbooks call named skills such as open-pr, codex-review, and browser-qa. Each skill owns one rule, and structural tests check that the playbooks use them.",
          "Preview QA: Each preview runs as its own Fargate Spot service behind a shared load balancer, and tears down when the ticket's pull requests close.",
          "Wiki feedback: Merged pull requests update an LLM-maintained wiki, which generates the AGENTS.md file that later runs read.",
        ],
      },
      {
        heading: "Key decisions",
        bullets: [
          "Skills over one large prompt: Each playbook names the operation it needs, and each operation lives in one file. The tradeoff is more moving parts, which I accepted so that changing one rule touches one file.",
          "Hard caps over judgment in review loops: CodeRabbit gets at most two passes and Codex gets three. Some pull requests stop with open findings and need a person. I accepted that cost, because a runaway loop is worse.",
          "Codex before CodeRabbit: A local Codex pass runs before the pull request opens, so the paid review sees a cleaner diff. The tradeoff is two reviewers that can disagree, which the pass cap contains.",
          "People merge, and every run ends in a stop state: The agent never merges. Each run ends as ready or blocked with a reason, so no run goes silent. Auto-merge would be faster, but this keeps a person accountable for every change.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Comparing the five months after launch with the five before, merged pull requests per month went from about 75 to about 176, and lines changed rose by a similar amount. Pull requests got larger, not smaller. In the two core applications, the agent wrote about 72% of merged changes.",
          "Across 16 repositories it has merged more than 380 pull requests, every one approved by a person. The approach then moved to a second team as version two. There, labeling an issue starts one run that builds the change, QAs it in a headless browser, runs tests and a Codex pre-check, opens the pull request, answers review findings until they're clean, and pings the team in Slack.",
          "That second team hit a real limit: the hosted reviewer's rate limits slowed reviews down. I replaced it with an in-house reviewer and made it a required merge check, so a pull request can't merge without a completed review.",
        ],
      },
      {
        heading: "What I learned",
        paragraphs: [
          "The harness can fail in ways the code doesn't. Claude Code moved long shell commands to the background, so the agent exited while a preview deploy kept running. I raised the time limits, up to 40 minutes for a single long step, and turned off background tasks outside build runs. I now test agent runs against long steps, not just short ones.",
          "Third-party review tools are a dependency with their own rate limits. If a merge gate depends on one, the pipeline stalls when that tool does. Own the gate, or define a timeout and a fallback.",
          "Stop states matter as much as success states. A blocked message with a reason gives a reviewer something to act on. Silence doesn't.",
        ],
      },
    ],
  },
  {
    slug: "voice-ai-agent",
    title: "A production voice AI agent for outbound and inbound calls",
    domain: "Contact center",
    summary:
      "I led the build of a voice agent that runs scripted outbound and inbound calls in production. Compliance checks run before any model call, and each turn uses two models so the spoken reply never waits on the next-step decision.",
    role: "Technical lead and primary engineer",
    period: "2025–2026",
    stack: [
      "Python 3.12",
      "LiveKit Agents",
      "Twilio SIP",
      "Deepgram Flux",
      "Cartesia Sonic",
      "Silero VAD",
      "OpenAI GPT-4.1 and GPT-4.1-mini",
      "MongoDB",
      "Redis",
      "AWS Lambda",
      "Serverless Framework",
      "Pytest",
    ],
    results: [
      { value: "754", label: "commits, 88% of them mine" },
      { value: "643", label: "automated tests" },
      { value: "2", label: "languages, English and Spanish" },
    ],
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "A contact center needed a voice agent for both outbound and inbound calls. Each call follows a branching script, and the person on the line can interrupt, ask questions, change their mind, or ask for something that must be honored right away. Some of those requests, such as do-not-call, wrong person, transfer, or callback, carry compliance weight. Voicemail and call screening have to be handled correctly too, or the bot talks over a machine or a live person.",
          "I started with Pipecat prototypes in 2025. They proved the pieces could talk to a phone line, but they didn't answer the hard questions: how a script changes safely at runtime, how the bot tells a machine from a person, and how a team ships changes to live calls without breaking them. So I moved the work to LiveKit Agents.",
        ],
      },
      {
        heading: "What I built",
        paragraphs: [
          "The agent runs on LiveKit Agents in Python 3.12. Twilio carries the calls over SIP, and transfers use conference calls. Silero detects speech, Deepgram Flux handles multilingual speech-to-text, and Cartesia Sonic provides the voice. Each turn makes two model calls: GPT-4.1-mini writes the spoken reply while GPT-4.1 classifies the caller's answer and picks the next script step. Scripts live in MongoDB. A state manager tracks call facts and maps them to a final outcome code. Node services on AWS Lambda handle dispatch, and Redis holds call slots and caches lookups.",
        ],
        bullets: [
          "Deterministic intercepts first: Do-not-call, wrong person, transfer, and callback requests are handled in code before any model runs.",
          "Two-call pipeline: The reply streams straight to the voice engine. The classifier returns structured JSON (stay, transition, repair, concern, terminate, callback, escalate) and never speaks.",
          "Voicemail detection: Twilio machine detection, transcript patterns, and a silence timer, in English and Spanish. Guards stop a late machine result from playing a voicemail over a person who already answered.",
          "Language switching: The agent asks before it changes language and switches only on a clear yes.",
          "Capacity safety: Redis call slots prevent over-dialing, and a cleanup job heals calls left stuck.",
          "Environments: Dev, QA, and production, with a test line per developer so engineers can run live calls without touching shared numbers.",
        ],
      },
      {
        heading: "Key decisions",
        bullets: [
          "Two calls per turn, one speaks: The caller hears the reply without waiting on classification, and the classifier can't say anything wrong out loud. The cost is a second model call every turn and the work of reconciling the two.",
          "Compliance rules before the model: Do-not-call and transfer requests are handled in code, so they never depend on model judgment. The tradeoff is that the rules are rigid and need a code change to alter.",
          "Optimistic voicemail detection: The agent assumes a person and runs machine detection in parallel. The tradeoff is that it can speak briefly into a voicemail greeting before it stops.",
          "Script as data: Scripts live in MongoDB, and tests import the same builders that deploy them. Behavior changes need no code release, but prompt drift is harder to review, so end-to-end tests use an LLM judge to check intent.",
          "Script moves only after the caller hears the reply: If the caller cuts the reply off, the move is dropped and their words are judged with the next turn. This adds turn-state complexity, but the script never advances past a line the caller didn't hear.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "The agent runs in production. Merging to main deploys to production automatically, and the same merge syncs to QA. The test suites include replay tests modeled on real call patterns and end-to-end tests that check which script step and outcome code a call ends on. Several production fixes landed with a reproducing test first, such as a hangup that arrived before the final transcript.",
          "I can't share call volumes or business results here, so the evidence I can show is the engineering and the release process.",
        ],
      },
      {
        heading: "What I learned",
        paragraphs: [
          "Most failures came from timing and turn-taking, not model quality. Calls broke when a hangup arrived before the final transcript, when a voicemail played over someone who had just answered, and when a reply was cut off mid-question. The fixes were state rules, not prompt edits. Porting the pipeline to a new framework was the easy part. The state layer is where the bugs lived.",
          "Keeping the script as data paid off, but only with the same test discipline as code. Once the old routing path was proven unused, I deleted it instead of keeping two systems alive.",
        ],
      },
    ],
  },
  {
    slug: "operations-automation",
    title: "Auditing an operations team's spreadsheets before automating them",
    domain: "Operations strategy",
    summary:
      "Operations work ran through 109 live spreadsheets. I mapped all of them, sorted every workflow into four tiers from eliminate to governed AI, and shipped the fixes that stop data loss first.",
    role: "Led the audit and strategy, and wrote the executive brief",
    period: "2026",
    stack: [
      "Google Drive and Sheets APIs",
      "Code audit",
      "Dependency mapping",
      "SQL",
      "Four-tier triage",
      "Human-approved AI",
    ],
    results: [
      { value: "6,900", label: "files inventoried" },
      { value: "109", label: "live spreadsheets mapped" },
      { value: "58M", label: "spreadsheet cells audited" },
    ],
    flow: {
      flow: ["6,900 files", "109 live sheets", "Four-tier triage", "Wave 1 fixes"],
      highlight: 2,
      branch: "AI comes last, once the data is clean",
    },
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Much of the operations work ran through spreadsheets. Schedules, attendance, billing timesheets, KPI rollups, and client reports lived in Google Sheets that people had built over years to work around gaps in the core operations app. Everyone knew the team relied on spreadsheets, but no one had a full map of them or of how they fed each other.",
          "I started with a full inventory: about 6,900 files, of which 109 Google Sheets had changed in the past 90 days. Across 19 priority workbooks, the cell count was about 58 million. Some sheets had outgrown the export tools, and one hub sheet fed a dozen downstream trackers. A break in that hub would cascade through staffing, billing, and reporting at once.",
          "A code audit showed why the workarounds existed: several workflows needed things the app didn't do yet, so people built around them. The spreadsheets were filling real gaps, and those gaps were the thing to fix.",
        ],
      },
      {
        heading: "What I did",
        paragraphs: [
          "I wrote the findings up as an executive brief for leadership, with the code findings and the spreadsheet inventory side by side. The central question wasn't how to automate these sheets. It was which of them should exist at all. Every workflow went through the same four tiers, starting at the simplest layer that could be trusted:",
        ],
        bullets: [
          "Eliminate or simplify: Retire duplicate trackers and copy-paste bridges instead of automating them one for one.",
          "Fix the core app: Repair the tools people already work in before building beside them.",
          "Deterministic automation: Use auditable code and SQL for anything that needs exact answers, such as billing hours and attendance.",
          "Governed AI: Use AI only on clean data, where judgment or summarizing is the job, with a person approving any operational change.",
        ],
      },
      {
        heading: "Key decisions",
        bullets: [
          "Fix before rebuild: I didn't port the spreadsheets into the app one for one. Retiring duplicated logic takes longer to explain, but it removes the sheets instead of moving their failure modes into new code.",
          "Software before AI: Several AI ideas, such as coaching prep, depended on data still locked in spreadsheets, so AI went in the last wave. The tradeoff is that the most visible AI features arrive last.",
          "Narrow first release: Wave 1 covered schedule integrity, bulk entry, and exception handling, with no new reporting or AI, so the operations team could check it against the data they use every day.",
          "Operations sign-off before rollout: Operations QA had to approve every Wave 1 deliverable before production. It adds time, and it makes the people who had been working around the problems the acceptance test.",
          "Two delivery paths: I presented an AI-accelerated path and a baseline path with their tradeoffs, and left the budget call to leadership.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Wave 1 is live in production. It shipped safer schedule copy and break saving, a bulk schedule upload with a dry-run preview, a multi-program eligibility grid, and bulk exception handling with an impact preview before saving. Later waves are scoped and planned.",
          "I'm not claiming a business-impact number for Wave 1 yet. The lasting result is the audit itself: a complete inventory that turns a vague spreadsheet problem into a ranked list of what to retire, what to fix, and what to automate.",
        ],
      },
      {
        heading: "What I learned",
        paragraphs: [
          "The audit was more useful than the roadmap. Once the inventory was on paper, the conversation moved from whether the spreadsheets were a problem to which ones to retire first.",
          "A spreadsheet is usually a workaround for a software gap. Before automating one, ask what it compensates for. Fixing that gap often removes the sheet.",
          "Operator acceptance belongs in the plan from the start. The QA gate looked like overhead, but it's the reason the release is trusted. Next time I'd also set a measured baseline before the first release, so the impact can be shown in numbers.",
        ],
      },
    ],
  },
];
