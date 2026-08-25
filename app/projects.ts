export type ProjectTone = "cyan" | "green" | "violet" | "amber";

type StorySection = {
  eyebrow: string;
  title: string;
  body: string;
};

type Diagram = {
  label: string;
  title: string;
  intro: string;
  nodes: DiagramNode[];
};

type ProjectMedia = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  span?: "wide";
  variant?: "logo";
};

type DiagramNode = string | {
  title: string;
  text?: string;
  media?: ProjectMedia;
  span?: "wide";
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  label: string;
  summary: string;
  contribution: string;
  tags: string[];
  href: string;
  tone: ProjectTone;
  signal: number[];
  storySections: StorySection[];
  diagram: Diagram;
  media?: ProjectMedia[];
  mediaTitle?: string;
  mediaIntro?: string;
  roadmapTitle: string;
  roadmap: { title: string; status: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "argus",
    index: "01",
    name: "ARGUS",
    label: "Market analytics platform",
    summary: "A Python market-data system growing from an FX utility into a layered analytics and monitoring platform.",
    contribution: "Independent project - active development",
    tags: ["Python", "pandas", "NumPy", "yfinance", "pytest"],
    href: "https://github.com/BytecodeBrewer/argus",
    tone: "cyan",
    signal: [32, 44, 38, 57, 52, 73, 68, 88],
    storySections: [
      {
        eyebrow: "Current shape",
        title: "A converter becoming a data product",
        body: "ARGUS started as a focused FX converter, but the useful portfolio story is the growth path: clients, services, analytics and UI are being separated so the project can move from local tool to market analytics system."
      },
      {
        eyebrow: "Why the roadmap matters",
        title: "Every sprint adds one usable layer",
        body: "The roadmap is the evidence here. Sprint 1 established the runnable foundation. Sprint 2 moves into stronger market metrics and real data clients. Later sprints add storage, a web-ready UI, scheduled ingestion and eventually AI-assisted monitoring."
      }
    ],
    diagram: {
      label: "Roadmap-backed data path",
      title: "From API data to market monitoring",
      intro: "ARGUS should read as a staged data-engineering project: each layer makes the next one possible without pretending the final monitoring product already exists.",
      nodes: ["Live FX API", "Historical market data", "Client layer", "Validation", "Metric functions", "Charts / dashboard", "Storage layer", "AI-assisted monitoring"]
    },
    roadmapTitle: "Sprint path",
    roadmap: [
      { title: "Sprint 1", status: "Completed", text: "Package structure, live conversion, Tkinter prototype, first analytics, tests, CI and public project setup." },
      { title: "Sprint 2", status: "In progress", text: "Stronger market metrics, broader data clients, yfinance workflows and tested pandas transformations." },
      { title: "Sprint 3", status: "Planned", text: "Storage layer, clearer data architecture and a web-ready interface direction with NiceGUI." },
      { title: "Sprint 4+", status: "Future", text: "Docker, scheduled ingestion, cloud storage, quality checks, reporting and later AI-assisted monitoring." }
    ]
  },
  {
    slug: "q-bet",
    index: "02",
    name: "Q-Bet",
    label: "Quant engine architecture",
    summary: "A modular Python quant engine for matched betting, sports arbitrage, strategy simulation and controlled execution planning.",
    contribution: "Independent project - core domain stage",
    tags: ["Python", "Pydantic", "pytest", "Quant modeling", "Data pipelines"],
    href: "https://github.com/BytecodeBrewer/Q-Bet",
    tone: "green",
    signal: [26, 35, 46, 42, 59, 66, 73, 91],
    storySections: [
      {
        eyebrow: "Target product",
        title: "A cloud-ready quant betting portfolio",
        body: "The intended v1 is a web application with a complete matched-betting engine, simulation mode, capital orchestration, collectors or API adapters, reports and controlled execution. The useful angle is not a betting promise, but a system that turns manual opportunity work into modeled, testable workflows."
      },
      {
        eyebrow: "Current state",
        title: "Domain models first, execution later",
        body: "The repo is currently in the core domain stage: typed models for events, markets, offers, opportunities, strategy results and execution plans are implemented and ready for review. Matched-betting calculations, orchestrator logic, collectors, UI and execution adapters come after the domain layer is stable."
      },
      {
        eyebrow: "Portfolio signal",
        title: "Math, risk and software boundaries",
        body: "Q-Bet should communicate modeling discipline: expected value, ROI, liquidity, risk, capital lock-up and approval boundaries need to become explicit software objects before any real execution is even considered."
      }
    ],
    diagram: {
      label: "Engine progression",
      title: "From odds data to controlled execution",
      intro: "The page should show the future system without overselling the current implementation. The active work is the left side of the flow; the v1 target is the full chain.",
      nodes: ["Events / markets / offers", "Typed domain layer", "Opportunity detection", "Strategy calculation", "Risk & capital rules", "Simulation mode", "User-approved execution", "Reports / dashboard"]
    },
    roadmapTitle: "Current stage to v1 target",
    roadmap: [
      { title: "Stage 1", status: "Current", text: "Core Pydantic domain models and tests for the objects the engines will rely on." },
      { title: "Base Engine", status: "Next", text: "Matched-betting calculations, free-bet strategies, dutching, stake optimization and arbitrage checks." },
      { title: "Capital Layer", status: "Planned", text: "An orchestrator that routes capital by EV, ROI, risk, liquidity and lock-up across strategy engines." },
      { title: "Cloud v1", status: "Target", text: "Web UI, collectors, API adapters, simulation controls, performance reports and approved execution flows." }
    ]
  },
  {
    slug: "smart",
    index: "03",
    name: "SMART",
    label: "AI-assisted test infrastructure",
    summary: "A student team project that turns natural-language test intent into generated Playwright code, runs it against reproducible mockserver data and returns feedback in one UI loop.",
    contribution: "Student team project - completed",
    tags: ["TypeScript", "Go", "MCP", "Playwright", "Mockserver", "Docker"],
    href: "https://github.com/BytecodeBrewer/smart-showcase",
    tone: "violet",
    signal: [28, 40, 48, 43, 65, 58, 77, 84],
    storySections: [
      {
        eyebrow: "Why it existed",
        title: "Generated tests only help when they can actually run",
        body: "SMART was built around a simple gap: natural-language test ideas are useful only when they become reviewable, runnable test cases. The system connects prompt validation, generated Playwright code, mockserver data and execution feedback in one workflow."
      },
      {
        eyebrow: "Demo shape",
        title: "Prompt, review, execute, reuse",
        body: "The useful part is the controlled sequence. A user writes the scenario, receives validation feedback, reviews the generated Playwright code and starts the run only after confirmation. Automation helps here, but it does not run ahead of the user."
      },
      {
        eyebrow: "My contribution",
        title: "Frontend flow, validation logic and documentation",
        body: "I worked across the visible workflow: chat-like interaction, prompt validation, generated-code presentation, save/edit actions, result feedback and project documentation."
      }
    ],
    diagram: {
      label: "Demo flow",
      title: "Seven steps from prompt to reusable test",
      intro: "The flow below shows one test case from clean chat context to a saved, reusable test.",
      nodes: [
        { title: "Open new chat", text: "A fresh chat creates a clean context for a new test scenario." },
        { title: "Write prompt", text: "The user describes the test case in natural language and sends it." },
        { title: "Validate prompt", text: "The prompt is checked first. Missing information leads to feedback; a valid prompt moves on." },
        {
          title: "Generate Playwright code",
          text: "The system returns generated code for review before anything is executed.",
          span: "wide",
          media: {
            src: "/projects/smart-svg/chat-ui.svg",
            alt: "SMART chat interface showing a German travel-booking test prompt and generated Playwright code",
            title: "Prompt-to-code interface",
            caption: "The generated test appears inside the same chat flow, so the user can review it before running it."
          }
        },
        { title: "Confirm run", text: "The user checks the draft, edits if needed and starts the run deliberately." },
        {
          title: "Start test environment",
          text: "The environment starts and Playwright runs the generated flow in a browser view.",
          span: "wide",
          media: {
            src: "/projects/smart-svg/test-run-result.svg",
            alt: "SMART run view showing Playwright test output and browser execution",
            title: "Run view",
            caption: "The execution view shows the run output and the browser state of the tested flow."
          }
        },
        { title: "Save, edit or rerun", text: "The test case and chat history stay available for later edits and reruns." }
      ]
    },
    roadmapTitle: "Project roadmap",
    roadmap: [
      { title: "Sprint 1", status: "Foundation", text: "Design thinking phase: problem space, target space, first prototypes and the technical stack decision." },
      { title: "Sprint 2", status: "Pilot", text: "Frontend input flow, prompt API connection, system prompts, entity relations and simple SU-Proxy behavior." },
      { title: "Sprint 3", status: "MVP", text: "Playwright generation from user prompts, prompt validation, request/response tagging and storage-connected data handling." },
      { title: "Sprint 4", status: "Integration", text: "Running tests through the web interface, user-prompt feedback, cache integration, frontend chat history and MCP server work." }
    ]
  },
  {
    slug: "notion-sync",
    index: "04",
    name: "Notion Sync",
    label: "Workflow automation",
    summary: "A desktop automation that mirrors records from multiple Notion databases into one central operational database.",
    contribution: "Independent project - working prototype",
    tags: ["Electron", "Node.js", "Notion API", "JSON", "Automation"],
    href: "https://github.com/BytecodeBrewer/notion-sync",
    tone: "amber",
    signal: [24, 34, 42, 55, 47, 62, 74, 80],
    storySections: [
      {
        eyebrow: "Notion gap",
        title: "Connected views are not a real merge",
        body: "Notion can display multiple data sources and separate views, but it does not give users a true merged database where records from different source tables live in one operational layer. That matters whenever someone wants one consistent table instead of mentally switching between views."
      },
      {
        eyebrow: "What the tool does",
        title: "Several source databases, one working table",
        body: "Notion Sync mirrors selected source databases into one central target database. It keeps a persistent mapping, tracks deletions and gives the user a small desktop status surface, so the central table becomes the place where work is actually handled."
      },
      {
        eyebrow: "Future product direction",
        title: "From desktop helper to permissioned sync service",
        body: "The stronger version is a hosted connector-based service: users grant Notion permissions, the tool checks schema compatibility, warns about mismatches and runs continuously without requiring a desktop process to stay alive."
      }
    ],
    diagram: {
      label: "Database merge model",
      title: "From separated views to one operational layer",
      intro: "The core idea is the merge boundary: source databases stay independent, but the user gets one central table that behaves like the working surface.",
      nodes: ["Source DB A", "Source DB B", "Source DB C", "Notion API", "Schema mapping", "Deletion tracking", "Central target DB", "Status surface"]
    },
    roadmapTitle: "Product path",
    roadmap: [
      { title: "Desktop prototype", status: "Working", text: "Electron app, status GUI, tray mode and user-data storage behavior." },
      { title: "Sync core", status: "Working", text: "Mirrors source records into a central database with persistent mapping state." },
      { title: "Robustness", status: "Next", text: "Conflict handling, property mismatch warnings and clearer sync diagnostics." },
      { title: "Cloud service", status: "Future", text: "Permissioned connectors, scheduled sync and schema checks without desktop dependency." }
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
