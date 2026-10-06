export type ProjectTone = "cyan" | "green" | "violet" | "amber" | "emerald" | "blue";

export type ProjectStatus = "active" | "paused" | "side-quest";

export type StorySection = {
  eyebrow: { en: string; de: string };
  title: { en: string; de: string };
  body: { en: string; de: string };
};

export type DiagramMedia = {
  src: string;
  alt: string;
  title: { en: string; de: string };
  caption: { en: string; de: string };
  span?: "wide";
  variant?: "logo";
};

export type DiagramNode = string | {
  title: { en: string; de: string };
  text?: { en: string; de: string };
  media?: DiagramMedia;
  span?: "wide";
};

export type Diagram = {
  label: { en: string; de: string };
  title: { en: string; de: string };
  intro: { en: string; de: string };
  nodes: DiagramNode[];
};

export type TechIcon =
  | "python"
  | "django"
  | "typescript"
  | "go"
  | "docker"
  | "pandas"
  | "numpy"
  | "nextjs"
  | "electron"
  | "pytorch"
  | "azure"
  | "databricks"
  | "snowflake"
  | "mcp"
  | "playwright"
  | "fastapi"
  | "postgres"
  | "redis"
  | "yfinance"
  | "pytest"
  | "pydantic"
  | "supabase"
  | "vercel"
  | "ai";

export type Project = {
  slug: string;
  index: string;
  name: string;
  label: { en: string; de: string };
  classification: { en: string; de: string };
  summary: { en: string; de: string };
  contribution: { en: string; de: string };
  status: ProjectStatus;
  aiAugmented?: boolean;
  aiBadgeText?: { en: string; de: string };
  isPrivateRepo?: boolean;
  techStack: TechIcon[];
  secondaryTechStack?: TechIcon[];
  tags: string[];
  href?: string;
  tone: ProjectTone;
  signal: number[];
  introduction: { en: string; de: string };
  backgroundType: "market_gap" | "proof_of_work" | "heavy_workload" | "academic";
  background: { en: string; de: string };
  storySections: StorySection[];
  diagram: Diagram;
  media?: DiagramMedia[];
  mediaTitle?: { en: string; de: string };
  mediaIntro?: { en: string; de: string };
  roadmapTitle: { en: string; de: string };
  roadmap: { title: string; status: { en: string; de: string }; text: { en: string; de: string } }[];
};

export const defaultProjects: Project[] = [
  {
    slug: "argus",
    index: "01",
    name: "ARGUS",
    label: {
      en: "Market Analytics & Monitoring System",
      de: "Markt-Analyse & Monitoring-System"
    },
    classification: {
      en: "Collaborative Learning Project",
      de: "Kollaboratives Lernprojekt"
    },
    summary: {
      en: "A Python market-data pipeline evolving from FX utilities into structured analytics, historical yfinance trends, and automated alerting.",
      de: "Eine Python Markt-Datenpipeline, die sich vom FX-Utility zu einer strukturierten Analytik- und Alarmierungs-Plattform entwickelt."
    },
    contribution: {
      en: "Collaborative Side-Quest · Financial Data & Telemetry",
      de: "Kollaboratives Side-Quest · Finanzdaten & Telemetrie"
    },
    status: "active",
    aiAugmented: false,
    techStack: ["python", "django", "pandas"],
    secondaryTechStack: ["fastapi", "numpy", "yfinance", "pytest", "pydantic"],
    tags: ["Python", "Django", "pandas", "FastAPI", "yfinance", "Pydantic"],
    href: "https://github.com/BytecodeBrewer/ARGUS",
    tone: "cyan",
    signal: [32, 44, 38, 57, 52, 73, 68, 88],
    introduction: {
      en: "ARGUS connects live ExchangeRate APIs and yfinance history into modular pandas transformation pipelines, generating clean volatility signals without paying thousands for bloated enterprise terminals.",
      de: "ARGUS verbindet Live ExchangeRate-APIs und yfinance-Historien in modulare pandas-Pipelines und erzeugt saubere Volatilitätssignale – ohne Tausende für überladene Enterprise-Terminals auszugeben."
    },
    backgroundType: "proof_of_work",
    background: {
      en: "Started as a collaborative project to track FX rates and stock trends. ARGUS avoids artificial black-box AI shortcuts, focusing instead on strict data validation, pandas vectorization, and deterministic anomaly alerts.",
      de: "Entstanden als kollaboratives Lernprojekt zur Überwachung von Devise- und Aktientrends. ARGUS verzichtet auf künstliche KI-Abkürzungen und setzt stattdessen auf strikte Datenvalidierung, pandas-Vektorisierung und regelbasierte Alerts."
    },
    storySections: [
      {
        eyebrow: { en: "Architecture", de: "Architektur" },
        title: { en: "Clean Pipeline Isolation", de: "Saubere Pipeline-Trennung" },
        body: {
          en: "Fetchers, domain calculators, and visualizers are strictly decoupled. Whether rendering in the Tkinter GUI or feeding a CLI debug harness, pipeline updates never break downstream analytics.",
          de: "Fetcher, Domain-Rechner und Visualisierer sind strikt getrennt. Egal ob in der Tkinter-GUI oder im CLI-Debug-Harness: Pipeline-Updates gefährden nie nachgelagerte Analysen."
        }
      },
      {
        eyebrow: { en: "Telemetry Direction", de: "Telemetrie-Ausrichtung" },
        title: { en: "Volatility Signals & Automated Alerts", de: "Volatilitätssignale & Automatische Alerts" },
        body: {
          en: "Every sprint enhances real-time risk indicators and moving volatility metrics, paving the way for automated daily batch pipelines with instant Discord or Slack notification hooks.",
          de: "Jeder Sprint verfeinert Risikoberechnungen und gleitende Volatilitätsmetriken für tägliche Batch-Pipelines mit direkten Discord- oder Slack-Alerts."
        }
      }
    ],
    diagram: {
      label: { en: "Data Engineering Flow", de: "Data Engineering Ablauf" },
      title: { en: "From Market Ticker to Anomaly Detection", de: "Vom Marktticker zur Anomalieerkennung" },
      intro: {
        en: "Market data streams sequentially through currency fetchers, Pydantic validation, pandas vectorization, and rule-based alert sinks.",
        de: "Finanzdaten fließen sequenziell durch Ingestion-Fetcher, Pydantic-Validierung, pandas-Vektorisierung und regelbasierte Alert-Sinks."
      },
      nodes: [
        { title: { en: "ExchangeRate & yfinance APIs", de: "ExchangeRate & yfinance APIs" }, text: { en: "Ingest live FX rates & stock ticker history", de: "Import von Live-Devisen & Aktienhistorien" } },
        { title: { en: "Pydantic Schema Guard", de: "Pydantic Schema-Schutz" }, text: { en: "Validates rate types & missing price interpolation", de: "Validiert Kurstypen & interpoliert Lücken" } },
        { title: { en: "Pandas Analytics Engine", de: "Pandas Analytics Engine" }, text: { en: "Vectorized moving averages, variance & volatility metrics", de: "Vektorisierte Durchschnitte & Volatilitätsmetriken" } },
        { title: { en: "Alerting & GUI Sink", de: "Alerting & GUI Engine" }, text: { en: "Renders Tkinter trends & triggers anomaly alerts", de: "Rendert Tkinter-Trends & löst Alerts aus" } }
      ]
    },
    roadmapTitle: { en: "Sprint Execution", de: "Sprint-Umsetzung" },
    roadmap: [
      { title: "Sprint 1", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Core architecture, live FX conversion, Tkinter GUI & pytest suite.", de: "Kernarchitektur, Live-FX-Umrechnung, Tkinter GUI & Pytest Suite." } },
      { title: "Sprint 2", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "yfinance historical market ingestion, moving volatility metrics & pandas optimization.", de: "yfinance Markt-Ingestion, Volatilitätsmetriken & pandas Optimierung." } },
      { title: "Sprint 3", status: { en: "Planned", de: "Geplant" }, text: { en: "Persistent Postgres storage layer & automated web monitoring alerts.", de: "Persistente Postgres-Datenbank & automatische Web-Monitoring Alerts." } }
    ]
  },
  {
    slug: "q-bet",
    index: "02",
    name: "Q-Bet",
    label: {
      en: "Quant Engine & Arbitrage Execution Architecture",
      de: "Quant Engine & Arbitrage Ausführungs-Architektur"
    },
    classification: {
      en: "Product",
      de: "Produkt"
    },
    summary: {
      en: "A high-performance quantitative pipeline engine for sports arbitrage scanning, Expected Value (EV) calculation, and risk-managed execution.",
      de: "Eine performante Quant Pipeline Engine für Arbitrage-Erkennung, Expected Value (EV) Berechnung und risikogesteuerte Ausführung."
    },
    contribution: {
      en: "Quantitative Developer & Pipeline Architect · Private Repository",
      de: "Quant-Entwickler & Pipeline-Architekt · Privates Repository"
    },
    status: "active",
    aiAugmented: true,
    aiBadgeText: {
      en: "🤖 AI-Driven Quantitative Workflow",
      de: "🤖 KI-Gestützter Quant-Workflow"
    },
    isPrivateRepo: true,
    techStack: ["python", "vercel", "supabase"],
    secondaryTechStack: ["pydantic", "postgres", "numpy", "pytest"],
    tags: ["Python", "Vercel", "Supabase", "Pydantic", "PostgreSQL", "Quant Engine"],
    tone: "green",
    signal: [26, 35, 46, 42, 59, 66, 73, 91],
    introduction: {
      en: "Q-Bet acts as a specialized high-speed calculator engine that automatically ingests betting market odds, calculates exact Expected Value (EV) and Dutch margins, eliminating manual error-prone calculations to capture inefficient market spreads.",
      de: "Q-Bet fungiert als spezialisierte High-Speed-Berechnungs-Engine, die Quoten aus Wettmärkten automatisiert synchronisiert, exakte EV- und Dutching-Margen berechnet und händische Fehler eliminiert, um ineffiziente Märkte zu erobern."
    },
    backgroundType: "market_gap",
    background: {
      en: "Manual sports arbitrage and matched betting calculations are painstakingly slow and highly susceptible to human mathematical error. Q-Bet was built to treat market odds as typed data structures, applying quantitative models, liquidity lockup limits, and automated capital routing.",
      de: "Manuelle Arbitrage- und Matched-Betting-Berechnungen sind extrem zeitaufwendig und fehleranfällig. Q-Bet wurde entwickelt, um Marktquoten als typisierte Datenstrukturen zu behandeln, quantitative Modelle anzuwenden und Risikolimits automatisiert durchzusetzen."
    },
    storySections: [
      {
        eyebrow: { en: "Engine Core", de: "Engine-Kern" },
        title: { en: "High-Speed Math & Pydantic Schemas", de: "High-Speed-Mathe & Pydantic-Schemas" },
        body: {
          en: "Every odd, market offer, liquidity depth, and capital lockup window is mapped into strongly-typed Pydantic domain models before any execution occurs.",
          de: "Jede Quote, jedes Marktangebot und jede Kapitalbindung werden in streng typisierten Pydantic-Domain-Modellen modelliert, bevor eine Ausführung erfolgt."
        }
      },
      {
        eyebrow: { en: "Risk Boundaries", de: "Risiko-Grenzen" },
        title: { en: "Capital Allocation & Simulation Mode", de: "Kapitalallokation & Simulationsmodus" },
        body: {
          en: "Expected Value (EV), ROI, and capital lockup thresholds are explicit software constraints. A full dry-run simulation mode verifies strategies against historical data before risking capital.",
          de: "Expected Value (EV), ROI und Kapitalbindungsgrenzen sind explizite Software-Constraints. Ein Dry-Run-Simulationsmodus prüft Strategien ohne finanzielles Risiko."
        }
      }
    ],
    diagram: {
      label: { en: "Pipeline & Engine Architecture", de: "Pipeline & Engine Architektur" },
      title: { en: "From Odds Synchronization to Risk Approval", de: "Von der Quoten-Synchronisation zur Risikofreigabe" },
      intro: {
        en: "Live odds streams are normalized, checked for arbitrage spreads, processed by the math engine, and evaluated against strict risk caps.",
        de: "Live-Quoten werden normalisiert, auf Arbitrage-Spreads geprüft, von der Mathe-Engine verarbeitet und gegen strenge Risikolimits evaluiert."
      },
      nodes: [
        { title: { en: "Bookmaker Odds Ingestion", de: "Buchmacher Quoten-Ingestion" }, text: { en: "Automated collectors sync live market feeds", de: "Automatische Collector synchronisieren Live-Quoten" } },
        { title: { en: "Pydantic Domain Layer", de: "Pydantic Domain Layer" }, text: { en: "Strict validation of market spreads & stake limits", de: "Strikte Validierung von Spreads & Einsatzgrenzen" } },
        { title: { en: "EV & Dutch Math Engine", de: "EV & Dutch Mathe-Engine" }, text: { en: "Computes optimal stake distributions & expected ROI", de: "Berechnet optimale Einsatzverteilungen & ROI" } },
        { title: { en: "Risk & Capital Gateway", de: "Risiko- & Kapital-Gateway" }, text: { en: "Enforces lockup limits & approves transaction dispatch", de: "Erzwingt Liquiditätsgrenzen & schaltet Trades frei" } }
      ]
    },
    roadmapTitle: { en: "Product Stages", de: "Produkt-Entwicklungsphasen" },
    roadmap: [
      { title: "Stage 1", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Core Pydantic domain models, arbitrage math engine & comprehensive test suite.", de: "Pydantic-Domainmodelle, Arbitrage-Mathe-Engine & Testabdeckung." } },
      { title: "Stage 2", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Matched betting, free-bet optimization & automated odds collector pipelines.", de: "Matched-Betting, Free-Bet-Optimierung & Quoten-Collector-Pipelines." } },
      { title: "Stage 3", status: { en: "Target", de: "Zielversion" }, text: { en: "Cloud web dashboard, live market telemetry & controlled execution limits.", de: "Cloud Web-Dashboard, Live-Markt-Telemetrie & kontrollierte Ausführung." } }
    ]
  },
  {
    slug: "mas",
    index: "03",
    name: "MAS",
    label: {
      en: "Multi-Agent System for Heavy Workloads",
      de: "Multi-Agenten-System für Heavy Workloads"
    },
    classification: {
      en: "Efficient Tool",
      de: "Effizientes Tool"
    },
    summary: {
      en: "A custom terminal-driven multi-agent orchestration framework designed to handle end-to-end coding tasks with RunPod cloud GPU & local LLM offloading.",
      de: "Ein maßgeschneidertes Multi-Agenten-Framework mit Terminal-Interface für End-to-End Coding-Tasks mit RunPod & Lokalen LLMs."
    },
    contribution: {
      en: "Autonomous Agent Framework · Heavy Refactoring Engine",
      de: "Autonomes Agenten-Framework · Heavy Refactoring Engine"
    },
    status: "active",
    aiAugmented: true,
    aiBadgeText: {
      en: "🤖 Autonomous Agent System",
      de: "🤖 Autonomes Agenten-System"
    },
    techStack: ["python", "ai", "docker"],
    secondaryTechStack: ["fastapi", "postgres", "redis", "pytest"],
    tags: ["Python", "Docker", "Agentic AI", "FastAPI", "RunPod", "vLLM"],
    href: "https://github.com/BytecodeBrewer/MAS",
    tone: "emerald",
    signal: [20, 38, 55, 62, 78, 85, 92, 98],
    introduction: {
      en: "MAS is engineered for developers who need custom autonomous agent orchestration to tackle complex repository refactorings without blowing fortunes on commercial token subscriptions.",
      de: "MAS wurde für Entwickler gebaut, die maßgeschneiderte autonome Agenten für komplexe Repository-Umbauten benötigen, ohne Unmengen für kommerzielle API-Tokens auszugeben."
    },
    backgroundType: "heavy_workload",
    background: {
      en: "Commercial AI coding tools are decent for line completion, but rigid and expensive when processing entire multi-file context graphs. MAS introduces specialized worker agents ('Bob', 'Worker-1') that stream tickets, analyze dependency trees, and offload heavy compute to cost-effective RunPod cloud GPUs or local Ollama/vLLM models.",
      de: "Kommerzielle KI-Tools eignen sich für kurze Ergänzungen, sind aber teuer bei vollständigen Kontext-Graphen. MAS führt spezialisierte Worker ('Bob', 'Worker-1') ein, die Tickets entgegennehmen, Abhängigkeiten analysieren und schwere Rechenlasten auf günstige RunPod-GPUs oder lokale LLMs auslagern."
    },
    storySections: [
      {
        eyebrow: { en: "Terminal Command Core", de: "Terminal-Steuerung" },
        title: { en: "CLI Interface & Full Ticket Lifecycle", de: "CLI Interface & Voller Ticket-Lebenszyklus" },
        body: {
          en: "Instead of black-box SaaS interfaces, MAS provides a transparent CLI harness: tickets are parsed, broken into file context trees, refactored, verified with local pytest runners, and committed.",
          de: "Statt transparenzloser SaaS-Oberflächen bietet MAS ein klares CLI-Terminal: Tickets werden gelesen, in Datei-Kontextbäume zerlegt, refactort, per Pytest verifiziert und committet."
        }
      },
      {
        eyebrow: { en: "Cost & Compute Scaling", de: "Kosten- & Compute-Skalierung" },
        title: { en: "RunPod Cloud & Local GPU Offloading", de: "RunPod Cloud & Lokales GPU-Offloading" },
        body: {
          en: "Lightweight routing models manage task distribution, while heavy context processing is dispatched dynamically to on-demand RunPod GPU instances, keeping hours of agentic coding insanely affordable.",
          de: "Günstige Routing-Modelle verwalten die Aufgabenverteilung, während schwere Kontext-Prozesse dynamisch auf RunPod GPU-Instanzen ausgelagert werden."
        }
      }
    ],
    diagram: {
      label: { en: "Agent Task Pipeline", de: "Agenten-Task-Pipeline" },
      title: { en: "From CLI Ticket Input to Autonomous Verification", de: "Vom CLI-Ticket-Input zur autonomen Verifizierung" },
      intro: {
        en: "Agents coordinate through a master terminal orchestrator, delegating file transformations to dedicated worker bots.",
        de: "Agenten koordinieren Arbeit über einen Terminal-Master-Orchestrator und delegieren Code-Transformationen an dedizierte Worker-Bots."
      },
      nodes: [
        { title: { en: "Terminal Ticket Ingestion", de: "Terminal Ticket-Erfassung" }, text: { en: "User submits task spec via CLI client", de: "Nutzer übergibt Task-Spezifikation via CLI" } },
        { title: { en: "Context Dependency Graph", de: "Kontext-Abhängigkeitsgraph" }, text: { en: "Master orchestrator parses affected source files", de: "Master-Orchestrator analysiert betroffene Quelldateien" } },
        { title: { en: "Worker Execution (RunPod / vLLM)", de: "Worker-Ausführung (RunPod / vLLM)" }, text: { en: "Worker bot 'Bob' implements multi-file changes", de: "Worker-Bot 'Bob' setzt Dateiänderungen um" } },
        { title: { en: "Verification & Git Commit", de: "Verifizierung & Git Commit" }, text: { en: "Executes test suite & generates clean git branch", de: "Führt Testsuite aus & erstellt sauberen Git-Branch" } }
      ]
    },
    roadmapTitle: { en: "System Evolution", de: "System-Entwicklungsstufen" },
    roadmap: [
      { title: "CLI Core v0.1", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Terminal client interface, local file parser & autonomous tool execution loop.", de: "Terminal-Client, lokaler Datei-Parser & autonome Werkzeug-Schleife." } },
      { title: "RunPod Offloader", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Dynamic spin-up of cost-effective GPU workers for heavy refactoring passes.", de: "Dynamisches Starten günstiger GPU-Worker für schwere Refactorings." } },
      { title: "Worker Pooling", status: { en: "Planned", de: "Geplant" }, text: { en: "Multi-tenant worker pooling for minimal operational subscription costs.", de: "Shared Worker-Pooling für minimale monatliche Betriebskosten." } }
    ]
  },
  {
    slug: "data-lab",
    index: "04",
    name: "Data Lab",
    label: {
      en: "Data Engineering Proof of Work & Research Lab",
      de: "Data Engineering Proof of Work & Forschungs-Lab"
    },
    classification: {
      en: "Single Learning Project",
      de: "Single-Lernprojekt"
    },
    summary: {
      en: "A foundational hands-on laboratory implementing core numerical algorithms, classical AI search, and cloud data architecture patterns from scratch.",
      de: "Ein Fundament-Labor für selbstgeschriebene Numerik-Algorithmen, klassische KI-Suche und Cloud-Datenarchitekturen von Grund auf."
    },
    contribution: {
      en: "Personal Research & Proof of Work · Deep Fundamentals",
      de: "Persönliches Forschungs-Repo · Fundament & Proof of Work"
    },
    status: "active",
    aiAugmented: false,
    techStack: ["python", "azure", "databricks"],
    secondaryTechStack: ["snowflake", "pytorch", "numpy", "pytest"],
    tags: ["Python", "Azure", "Databricks", "Snowflake", "PyTorch", "RAG Systems", "NumPy"],
    href: "https://github.com/BytecodeBrewer/Data-Lab",
    tone: "blue",
    signal: [30, 45, 60, 70, 82, 88, 94, 99],
    introduction: {
      en: "Data Lab bridges computer science university coursework with production-grade data engineering. Instead of using high-level black-box wrappers, mathematical methods and AI search structures are built and tested ground-up in Python.",
      de: "Data Lab verbindet Informatik-Theorie mit realer Data Engineering Infrastruktur. Statt vorgefertigte Black-Box-Tools zu kopieren, werden mathematische Verfahren und KI-Suchstrukturen in Python von Grund auf selbst entwickelt und getestet."
    },
    backgroundType: "proof_of_work",
    background: {
      en: "Designed as an uncompromising 'Proof of Work' repository. It houses numerical algorithms (root finding, linear systems, optimization), classical AI algorithms (BFS, DFS, A* heuristics), PyTorch mechanics, vector retrieval, and deployment patterns for Azure, Databricks Delta Lake, and Snowflake certifications.",
      de: "Entwickelt als kompromissloses 'Proof of Work'-Repository. Es vereint Numerik-Verfahren (Nullstellen, lineare Systeme), klassische KI (BFS, DFS, A*), PyTorch-Mechaniken, Vektor-Retrieval und Vorbereitungen für Azure, Databricks Delta Lake und Snowflake Zertifizierungen."
    },
    storySections: [
      {
        eyebrow: { en: "Math & Numerical Core", de: "Mathematik & Numerik" },
        title: { en: "Understanding Algorithms by Breaking Them", de: "Algorithmen verstehen durch Zerlegen" },
        body: {
          en: "From matrix operations to numerical stability checks: code follows the loop 'understand → implement → test → break → compare → master'. Every method must survive unit testing.",
          de: "Von Matrix-Operationen bis zu Stabilitätsprüfungen: Code folgt dem Prinzip 'Verstehen → Implementieren → Testen → Zerlegen → Meistern'. Jedes Verfahren muss Unit-Tests bestehen."
        }
      },
      {
        eyebrow: { en: "Cloud Data Engineering", de: "Cloud Data Engineering" },
        title: { en: "Certifications & Cloud Warehouses", de: "Zertifizierungen & Cloud Data Warehouses" },
        body: {
          en: "Extends foundational Python numerics into cloud data warehouse blueprints, Delta Lake storage tables, and enterprise ETL pipelines on Azure and Snowflake.",
          de: "Erweitert Python-Grundlagen in Cloud Data Warehouse Blueprints, Delta Lake Speicherstrukturen und Enterprise ETL-Pipelines auf Azure und Snowflake."
        }
      }
    ],
    diagram: {
      label: { en: "Knowledge Pipeline", de: "Wissens-Pipeline" },
      title: { en: "From Fundamental Numerics to Cloud Warehouse Blueprints", de: "Von Grundlagen-Numerik bis zu Cloud Warehouse Blueprints" },
      intro: {
        en: "Progressive technical depth: low-level numerical algorithms expanding into deep learning mechanics, vector search, and cloud data pipelines.",
        de: "Fortschreitende technische Tiefe: von mathematischer Linearer Algebra über Deep-Learning-Mechaniken und Vektorsuche bis zu Cloud Data Pipelines."
      },
      nodes: [
        { title: { en: "01. Numerical Algorithms", de: "01. Numerische Algorithmen" }, text: { en: "Linear systems, root finding, optimization & error analysis", de: "Lineare Systeme, Nullstellen, Optimierung & Fehleranalyse" } },
        { title: { en: "02. Classical AI & Graph Search", de: "02. Klassische KI & Graph-Suche" }, text: { en: "BFS, DFS, A* heuristics & graph data structures", de: "BFS, DFS, A* Heuristiken & Graph-Datenstrukturen" } },
        { title: { en: "03. Vector Retrieval & RAG", de: "03. Vektor-Retrieval & RAG" }, text: { en: "Embeddings, vector indexing & semantic search", de: "Embeddings, Vektor-Indexierung & Semantische Suche" } },
        { title: { en: "04. Cloud Data Warehouse", de: "04. Cloud Data Warehouse" }, text: { en: "Azure, Databricks Delta Lake & Snowflake pipelines", de: "Azure, Databricks Delta Lake & Snowflake Pipelines" } }
      ]
    },
    roadmapTitle: { en: "Future Aspects & Lab Focus", de: "Zukünftige Aspekte & Lab-Schwerpunkte" },
    roadmap: [
      { title: "Numerical & Search Core", status: { en: "Active", de: "Aktiv" }, text: { en: "Implementing and testing root finding, linear systems, and classical AI graph search.", de: "Implementierung und Testen von Nullstellen, linearen Systemen und Graph-Suche." } },
      { title: "Vector Search & RAG", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Building lightweight vector indexing experiments and retrieval-augmented pipelines.", de: "Aufbau leichtgewichtiger Vektor-Indexierungs-Experimente und RAG-Pipelines." } },
      { title: "Cloud Deployment Blueprints", status: { en: "Future Goal", de: "Zukunfts-Ziel" }, text: { en: "Certified Azure Data Factory, Databricks & Snowflake pipeline deployment templates.", de: "Zertifizierte Azure Data Factory, Databricks & Snowflake Deployment-Templates." } }
    ]
  },
  {
    slug: "notion-sync",
    index: "05",
    name: "Notion Sync",
    label: {
      en: "Multi-Database Workflow Automation Pipeline",
      de: "Multi-Datenbank Workflow-Automatisierungs-Pipeline"
    },
    classification: {
      en: "Efficient Tool",
      de: "Effizientes Tool"
    },
    summary: {
      en: "A continuous integration script & Electron desktop app syncing fragmented Notion workspace databases into a unified operational master table.",
      de: "Ein CI-Skript & Electron Desktop-App zur Synchronisation fragmentierter Notion-Datenbanken in eine zentrale operative Master-Tabelle."
    },
    contribution: {
      en: "Automation Engineer · System Tray Utility",
      de: "Automatisierungs-Ingenieur · System-Tray Tool"
    },
    status: "paused",
    aiAugmented: true,
    aiBadgeText: {
      en: "🤖 AI-Assisted Knowledge Pipeline",
      de: "🤖 KI-Gestützte Wissens-Pipeline"
    },
    techStack: ["typescript", "electron", "nextjs"],
    secondaryTechStack: ["postgres", "redis"],
    tags: ["TypeScript", "Electron", "Node.js", "Notion API", "Workflow Automation"],
    href: "https://github.com/BytecodeBrewer/Notion-Sync",
    tone: "amber",
    signal: [24, 34, 42, 55, 47, 62, 74, 80],
    introduction: {
      en: "Notion Sync solves a real daily productivity pain point: combining multiple scattered Notion module databases into a single operational 'All Tasks' master table without manual copy-pasting.",
      de: "Notion Sync löst ein echtes Produktivitätsproblem: Zusammenführung mehrerer getrennter Modul-Datenbanken in eine zentrale operative 'All Tasks' Master-Tabelle ohne manuelle Überträge."
    },
    backgroundType: "heavy_workload",
    background: {
      en: "While Notion offers linked views, it lacks a true native multi-database aggregation engine that keeps writeable records in sync. Built with AI workflow assistance, Notion Sync runs a background polling daemon with local JSON state mapping to keep records synchronized.",
      de: "Notion bietet verknüpfte Ansichten, aber keine echte native Aggregations-Engine. Mit KI-Unterstützung entwickelt, führt Notion Sync einen Hintergrund-Poller mit lokaler JSON-Zustandsverwaltung aus, um Datensätze synchron zu halten."
    },
    storySections: [
      {
        eyebrow: { en: "Operational Pain", de: "Operative Hürde" },
        title: { en: "Fragmented Databases vs. Central Master Table", de: "Fragmentierte DBs vs. Zentrale Master-Tabelle" },
        body: {
          en: "Juggling tasks across multiple module databases forces context switching. Notion Sync mirrors changes bidirectionally between individual course tables and the central master view.",
          de: "Das Verwalten von Aufgaben über viele Modul-Datenbanken führt zu ständigen Kontextwechseln. Notion Sync spiegelt Änderungen bidirektional zwischen Einzel-Tabellen und der Master-Ansicht."
        }
      },
      {
        eyebrow: { en: "Engineering Implementation", de: "Technische Umsetzung" },
        title: { en: "System Tray Daemon & Persistent Mapping", de: "System-Tray Daemon & Persistentes Mapping" },
        body: {
          en: "Packaged as an Electron app for Windows, the tool resides quietly in the system tray, tracking entry IDs and update timestamps via persistent mapping files (%APPDATA%).",
          de: "Als Electron-App für Windows verbleibt das Tool leise im System-Tray und überwacht Eintrags-IDs und Zeitstempel über lokale Mapping-Dateien (%APPDATA%)."
        }
      }
    ],
    diagram: {
      label: { en: "Sync Architecture", de: "Sync Architektur" },
      title: { en: "From Multiple Source Tables to Central Application", de: "Von mehreren Quell-Tabellen zur zentralen Anwendung" },
      intro: {
        en: "Source databases pass through local state mapping, schema guards, and background polling workers into the central application.",
        de: "Quell-Datenbanken fließen über lokale Mapping-Dateien, Schema-Schutz und Hintergrund-Poller in die zentrale Anwendung."
      },
      nodes: [
        { title: { en: "Source Module Databases", de: "Quell Modul-Datenbanken" }, text: { en: "Fragmented input tables across Notion workspaces", de: "Fragmentierte Eingabetabellen in Notion" } },
        { title: { en: "Polling Sync Daemon", de: "Polling Sync Daemon" }, text: { en: "Tracks modified timestamps & deleted page IDs", de: "Überwacht Zeitstempel & gelöschte IDs" } },
        { title: { en: "JSON State Mapping Guard", de: "JSON State-Mapping Schutz" }, text: { en: "Persists mapped item relation IDs in %APPDATA%", de: "Speichert ID-Zuordnungen in %APPDATA%" } },
        { title: { en: "Central Master Application", de: "Zentrale Master-Anwendung" }, text: { en: "Unified operational 'All Tasks' master database", de: "Zentrale operative 'All Tasks' Master-Datenbank" } }
      ]
    },
    roadmapTitle: { en: "Future Aspects & Enhancements", de: "Zukünftige Aspekte & Erweiterungen" },
    roadmap: [
      { title: "Electron Tray Utility", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Electron app with system tray daemon & mapping state persistence.", de: "Electron-App mit System-Tray Daemon & persistentem Zustand." } },
      { title: "Conflict Resolution", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Handling simultaneous edit edge cases between source and master tables.", de: "Behandlung von Randfällen bei gleichzeitigen Bearbeitungen." } },
      { title: "Serverless Cloud Worker", status: { en: "Future Goal", de: "Zukunfts-Ziel" }, text: { en: "Migrating background polling to cloud functions without requiring a desktop process.", de: "Migration des Hintergrund-Syncs in Cloud Functions ohne laufende Desktop-App." } }
    ]
  },
  {
    slug: "smart",
    index: "06",
    name: "SMART",
    label: {
      en: "System Monitoring, Analysis & Resource Tracking",
      de: "System Monitoring, Analysis & Resource Tracking"
    },
    classification: {
      en: "Collaborative University Project",
      de: "Kollaboratives Uni-Projekt"
    },
    summary: {
      en: "A lightweight Linux system telemetry suite written in Go & TypeScript for real-time CPU, RAM, and daemon health tracking.",
      de: "Eine kompakte Linux-Systemtelemetrie-Suite in Go & TypeScript zur Überwachung von CPU, Speicher, Daemons und Systemzustand."
    },
    contribution: {
      en: "Collaborative Systems Project · Lightweight Telemetry",
      de: "Kollaboratives System-Projekt · Leichtgewichtige Telemetrie"
    },
    status: "side-quest",
    aiAugmented: false,
    techStack: ["go", "typescript", "docker"],
    secondaryTechStack: ["mcp"],
    tags: ["Go", "TypeScript", "Docker", "System Telemetry"],
    href: "https://github.com/BytecodeBrewer/SMART",
    tone: "violet",
    signal: [28, 40, 48, 43, 65, 58, 77, 84],
    introduction: {
      en: "SMART is a minimalist system telemetry utility built during university systems studies to track Linux kernel resource consumption and systemd process health without artificial bloat.",
      de: "SMART ist ein minimalistisches System-Telemetrie-Tool, das im Rahmen eines kollaborativen Uni-Projekts entstand, um Linux-Kernel-Ressourcen und systemd-Daemons ohne künstlichen Overhead zu überwachen."
    },
    backgroundType: "academic",
    background: {
      en: "Developed as a collaborative university project to master low-level system calls, process monitoring, and containerized telemetry daemons. SMART provides crisp visibility into system health with minimal CPU footprint.",
      de: "Entwickelt im Rahmen eines kollaborativen Uni-Projekts zur Vertiefung von Systemaufrufen, Prozessüberwachung und Docker-Telemetrie. SMART liefert präzise Systemzustände bei minimaler CPU-Belastung."
    },
    storySections: [
      {
        eyebrow: { en: "System Reliability", de: "System-Zuverlässigkeit" },
        title: { en: "Low-Overhead Telemetry Daemon", de: "Leichtgewichtiger Telemetrie-Daemon" },
        body: {
          en: "Quietly collects memory, CPU load averages, and background daemon states, formatting telemetry directly into structured log streams.",
          de: "Sammelt geräuschlos Speicher, CPU-Last und Daemon-Zustände und formatiert Telemetrie direkt in strukturierte Log-Streams."
        }
      }
    ],
    diagram: {
      label: { en: "Telemetry Architecture", de: "Telemetrie Architektur" },
      title: { en: "From Linux Kernel Metrics to Terminal HUD", de: "Von Linux-Kernel-Metriken zum Terminal HUD" },
      intro: {
        en: "Low-overhead collection loop polling systemd daemons and Linux kernel metrics.",
        de: "Minimalistische Abfrageschleife für systemd-Daemons und Linux-Kernel-Metriken."
      },
      nodes: [
        { title: { en: "Linux Kernel Metrics", de: "Linux-Kernel-Metriken" }, text: { en: "Reads /proc metrics, CPU load & RAM allocations", de: "Liest /proc Metriken, CPU-Last & RAM-Belegung" } },
        { title: { en: "Go Telemetry Daemon", de: "Go Telemetrie Daemon" }, text: { en: "High-speed metric collector & anomaly filter", de: "Schneller Metrik-Sammler & Anomalie-Filter" } },
        { title: { en: "Terminal Console HUD", de: "Terminal Konsolen-HUD" }, text: { en: "Clean text-based system health display", de: "Klares textbasiertes System-HUD" } }
      ]
    },
    roadmapTitle: { en: "Future Aspects & Scope", de: "Zukünftige Aspekte & Scope" },
    roadmap: [
      { title: "Daemon Core", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Core metric collection daemon & systemd integration.", de: "Kern-Metrik-Sammler & systemd Integration." } },
      { title: "Console HUD", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Clean terminal status HUD and log output formatter.", de: "Klares Terminal-HUD und Log-Output Formatter." } },
      { title: "Multi-Node Endpoint", status: { en: "Future Goal", de: "Zukunfts-Ziel" }, text: { en: "Lightweight gRPC telemetry aggregation across multiple Linux servers.", de: "Leichtgewichtige gRPC-Telemetrie-Aggregation über mehrere Linux-Server." } }
    ]
  }
];

export const projects = defaultProjects;

export function getProject(slug: string, customProjects?: Project[]) {
  const list = customProjects ?? defaultProjects;
  return list.find((project) => project.slug === slug);
}
