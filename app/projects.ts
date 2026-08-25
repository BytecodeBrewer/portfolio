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
  nodes: string[];
};

type ProjectMedia = {
  src: string;
  alt: string;
  title: string;
  caption: string;
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
  productNotesTitle: string;
  productNotes: string[];
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
    ],
    productNotesTitle: "How to read it",
    productNotes: [
      "This is not positioned as a trading tool; it is a staged analytics and data-engineering project.",
      "The strongest signal is the roadmap discipline: usable slices instead of one oversized architecture promise.",
      "Future screenshots should show the dashboard and the metric layer working on real historical data."
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
    ],
    productNotesTitle: "What this page should prove",
    productNotes: [
      "Q-Bet is early, so the page must clearly separate implemented domain layer from future v1 target.",
      "The engine flow should emphasize calculations, constraints and approval boundaries, not hype around automation.",
      "Later portfolio assets should show formulas, example opportunity objects and simulation output."
    ]
  },
  {
    slug: "smart",
    index: "03",
    name: "SMART",
    label: "AI-assisted test infrastructure",
    summary: "A completed student team project that turns natural-language test intent into generated Playwright code, runs it against reproducible mockserver data and returns feedback in one UI loop.",
    contribution: "Student team project - completed",
    tags: ["TypeScript", "Go", "MCP", "Playwright", "Mockserver", "Docker"],
    href: "https://github.com/BytecodeBrewer/smart-showcase",
    tone: "violet",
    signal: [28, 40, 48, 43, 65, 58, 77, 84],
    storySections: [
      {
        eyebrow: "Why it existed",
        title: "Generated tests only help when they can actually run",
        body: "The point was not to build another chat surface that spits out code and leaves the user alone with it. SMART connects prompt, validation, generated Playwright, mockserver data and execution feedback, so the test idea becomes something inspectable and runnable."
      },
      {
        eyebrow: "Demo shape",
        title: "Prompt, code, run result, then refinement",
        body: "The demo is the useful thing to show: a booking scenario is written as natural language, the system validates the prompt, generates Playwright code and opens a run view with output, browser screenshot and feedback. Not magic. More like a controlled workflow with fewer places to lose the thread."
      },
      {
        eyebrow: "My contribution",
        title: "Frontend flow, validation logic and documentation",
        body: "I worked across the visible workflow: chat-like interaction, prompt validation, generated-code presentation, save/edit actions, result feedback and project documentation. The portfolio page should therefore show the product loop first, and the engineering detail only after that."
      }
    ],
    diagram: {
      label: "Demo loop",
      title: "From test intent to a reproducible run",
      intro: "SMART should be read as a loop, not as a dependency list. The user starts with intent, the system turns that into generated test code, and the run result closes the loop.",
      nodes: ["Booking test scenario", "Prompt validation", "Generated Playwright code", "Mockserver / supplier data", "Browser execution", "Output, screenshot and video", "Edit or save", "Reusable testcase"]
    },
    mediaTitle: "What belongs on the page",
    mediaIntro: "These assets make SMART understandable without turning the page into a poster dump: one logo visual, one demo screen, one execution proof and one sprint history.",
    media: [
      {
        src: "/projects/smart-svg/cover-smart.svg",
        alt: "SMART project logo with the subtitle Software for Mockserver and Automated Resource Testing",
        title: "Logo and project name",
        caption: "Good as the visual opener. It communicates the acronym and keeps the project title clean: SMART, not smart-showcase.",
        span: "wide"
      },
      {
        src: "/projects/smart-svg/chat-ui.svg",
        alt: "SMART chat interface showing a German travel-booking test prompt and generated Playwright code",
        title: "Demo interface",
        caption: "This is the strongest product screenshot: user intent, prompt validation and generated Playwright code are visible in one screen."
      },
      {
        src: "/projects/smart-svg/test-run-result.svg",
        alt: "SMART run view showing Playwright test output and a browser screenshot of a CHECK24 travel page",
        title: "Test execution",
        caption: "Useful as proof that the generated test is not only text. The run view shows logs, browser state and feedback."
      },
      {
        src: "/projects/smart-svg/timeline.svg",
        alt: "SMART sprint timeline from design thinking through pilot, MVP and MCP server work",
        title: "Completed sprint path",
        caption: "This belongs on the page as project history: four sprints from problem framing to pilot, MVP and the final MCP/SU-Proxy work.",
        span: "wide"
      }
    ],
    roadmapTitle: "Completed sprint path",
    roadmap: [
      { title: "Sprint 1", status: "Completed", text: "Design thinking phase: problem space, target space, first prototypes and the technical stack decision." },
      { title: "Sprint 2", status: "Completed", text: "Pilot phase: frontend input flow, prompt API connection, system prompts, entity relations and simple SU-Proxy behavior." },
      { title: "Sprint 3", status: "Completed", text: "MVP phase: Playwright generation from user prompts, prompt validation, request/response tagging and storage-connected data handling." },
      { title: "Sprint 4", status: "Completed", text: "Final integration: running tests through the web interface, user-prompt feedback, cache integration, frontend chat history and MCP server work." }
    ],
    productNotesTitle: "What should not be over-presented",
    productNotes: [
      "The Vercel phone screenshots are deployment debugging material, not portfolio content.",
      "The full architecture flow and MCP class diagram are useful engineering references, but too dense for the first SMART read.",
      "The page should show SMART as a completed team project: demo loop, sprint path and clear personal contribution."
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
    ],
    productNotesTitle: "Why this is general",
    productNotes: [
      "The problem is not limited to study modules; it applies to any Notion workspace split across separate databases.",
      "The valuable proof is the merge behavior: source tables, mapping state, deletion handling and one central target.",
      "A future demo should show Notion before the tool, the sync run, and the unified database after the tool."
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
