export type ProjectTone = "cyan" | "green" | "violet" | "amber";

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
  problem: string;
  solution: string;
  diagramTitle: string;
  diagramNodes: string[];
  roadmap: { title: string; status: string; text: string }[];
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
    problem: "Market data work often starts as scattered API calls, one-off charts and manual interpretation. That is fine for learning, but it does not become a reliable tool until ingestion, validation, metrics and presentation are separated.",
    solution: "ARGUS is being shaped into a market analytics system: data clients pull live and historical market data, service layers normalize the flow, analytics modules compute reusable metrics, and UI layers expose the result without tying the product to one prototype interface.",
    diagramTitle: "ARGUS data path",
    diagramNodes: ["Live FX API", "yfinance / future FX data", "Client layer", "Validation", "Metrics", "Charts & dashboard", "Future reports", "AI-assisted monitoring"],
    roadmap: [
      { title: "Sprint 1", status: "Completed", text: "Package structure, live conversion, Tkinter prototype, analytics prototype, tests, CI and public project setup." },
      { title: "Sprint 2", status: "In progress", text: "Stronger market metrics, broader data clients, yfinance workflows and tested pandas transformations." },
      { title: "Sprint 3", status: "Planned", text: "Storage layer, clearer data architecture and a web-ready interface direction with NiceGUI." },
      { title: "Sprint 4+", status: "Future", text: "Docker, scheduled ingestion, cloud storage, quality checks, reporting and later AI-assisted monitoring." }
    ],
    productNotes: [
      "The current value is not a trading promise; it is the architecture path from small converter to analytics system.",
      "The portfolio angle is data engineering: ingestion, transformation, quality, visualization and staged product growth.",
      "The roadmap matters because it shows the project is moving by usable slices instead of architecture theater."
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
    problem: "Manual opportunity checking, stake calculation and capital allocation do not scale well. Once multiple engines, accounts and risk rules are involved, the system needs typed models and controlled execution boundaries.",
    solution: "Q-Bet starts with a validated domain layer for events, markets, offers, opportunities and execution plans. The target product is a cloud-ready web application that can collect data, simulate strategies, allocate capital and later execute approved workflows under strict guardrails.",
    diagramTitle: "Q-Bet engine flow",
    diagramNodes: ["Bookmaker / exchange data", "Normalization", "Opportunity engine", "Strategy engine", "Risk & capital allocation", "Simulation mode", "Approved execution", "Reports & dashboard"],
    roadmap: [
      { title: "Domain layer", status: "Ready for review", text: "Typed models for events, markets, offers, opportunities, strategy results and execution plans." },
      { title: "Base engine", status: "Next", text: "Matched-betting calculations, stake optimization, arbitrage checks, dutching and free-bet strategies." },
      { title: "Orchestrator", status: "Planned", text: "Capital routing by EV, ROI, risk, liquidity and capital lock-up across multiple engines." },
      { title: "Cloud application", status: "Future", text: "Collectors, API adapters, web UI, simulation controls, reports and controlled real execution." }
    ],
    productNotes: [
      "The important signal is the product model: manual betting workflows become a controlled strategy and capital system.",
      "The system should never be framed as unmanaged autonomy; user-approved execution and risk boundaries are part of the design.",
      "For the portfolio, Q-Bet shows domain modeling, pipeline thinking and safety-aware automation."
    ]
  },
  {
    slug: "smart",
    index: "03",
    name: "S.M.A.R.T.",
    label: "AI-assisted test infrastructure",
    summary: "A team project with CHECK24 combining natural-language Playwright generation, deterministic mock data and execution feedback.",
    contribution: "Student team - frontend, workflow & validation",
    tags: ["TypeScript", "Go", "S3", "Parquet", "Redis", "Docker"],
    href: "https://github.com/BytecodeBrewer/smart-showcase",
    tone: "violet",
    signal: [28, 40, 48, 43, 65, 58, 77, 84],
    problem: "End-to-end tests are useful, but writing and maintaining them is expensive when test data, generated code and execution feedback are not connected.",
    solution: "S.M.A.R.T. connects natural-language test intent with generated Playwright flows, deterministic mock data and execution feedback. My work focused on interface flows, validation paths, storage-connected data handling and documentation.",
    diagramTitle: "S.M.A.R.T. feedback loop",
    diagramNodes: ["Natural language intent", "Prompt validation", "Playwright generation", "Mock data", "Execution", "Feedback", "Refinement", "Documentation"],
    roadmap: [
      { title: "Input", status: "Built", text: "User-facing flow for describing test intent and validating generated output." },
      { title: "Data", status: "Built", text: "Mock-data paths and storage-connected handling for reproducible test contexts." },
      { title: "Execution", status: "Built", text: "Playwright-centered feedback loop around generated tests." },
      { title: "Showcase", status: "Portfolio", text: "The project demonstrates AI-assisted developer tooling rather than a generic chatbot surface." }
    ],
    productNotes: [
      "The strongest explanation is not 'AI generates tests'; it is the loop between intent, mock data, execution and feedback.",
      "This project is useful as a bridge between frontend, data handling and AI-supported automation.",
      "Future media should show the flow from prompt to generated test result."
    ]
  },
  {
    slug: "notion-sync",
    index: "04",
    name: "Notion Sync",
    label: "Workflow automation",
    summary: "A desktop automation that mirrors tasks from multiple module databases into one central Notion database.",
    contribution: "Independent project - working prototype",
    tags: ["Electron", "Node.js", "Notion API", "JSON", "Automation"],
    href: "https://github.com/BytecodeBrewer/notion-sync",
    tone: "amber",
    signal: [24, 34, 42, 55, 47, 62, 74, 80],
    problem: "Notion can show multiple data sources in connected views, but it does not truly merge several separate databases into one real table with one unified task model. For study workflows, that means module tasks stay split across views and databases.",
    solution: "Notion Sync mirrors selected module databases into one central All Tasks database. It keeps persistent mappings, tracks deletions and runs as a desktop app with status UI and tray operation, so the user can work from one table instead of mentally reconciling several Notion views.",
    diagramTitle: "Notion Sync merge model",
    diagramNodes: ["Module DB A", "Module DB B", "Module DB C", "Notion API", "Mapping file", "Deletion tracking", "All Tasks database", "Status UI / tray"],
    roadmap: [
      { title: "Prototype", status: "Working", text: "Electron app, status GUI, tray mode, mapping file and user-data storage behavior." },
      { title: "Sync core", status: "Working", text: "Mirrors module database items into a central database with persistent mapping." },
      { title: "Robustness", status: "Next", text: "Better conflict handling, property mismatch warnings and clearer user-facing sync diagnostics." },
      { title: "Cloud version", status: "Future", text: "Move from desktop-only execution toward a permissioned online service with connectors." }
    ],
    productNotes: [
      "The product story is a real Notion limitation: connected views are not the same as one merged operational table.",
      "The valuable part is less the folder structure and more the sync model: source databases, mapping state, deletion tracking and a central target.",
      "A future web version should focus on permissions, schema checks and user-visible warnings before merging."
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
