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

export type TechIcon = "python" | "typescript" | "go" | "docker" | "pandas" | "numpy" | "nextjs" | "electron" | "pytorch" | "azure" | "databricks" | "snowflake" | "mcp" | "playwright" | "fastapi" | "postgres" | "redis" | "yfinance" | "pytest" | "pydantic";

export type Project = {
  slug: string;
  index: string;
  name: string;
  label: { en: string; de: string };
  summary: { en: string; de: string };
  contribution: { en: string; de: string };
  status: ProjectStatus;
  aiAugmented?: boolean;
  aiBadgeText?: { en: string; de: string };
  isPrivateRepo?: boolean;
  techStack: TechIcon[];
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
    summary: {
      en: "A Python market-data pipeline expanding from FX utilities into layered analytics, anomaly detection, and automated alerting.",
      de: "Eine Python Markt-Datenpipeline, die sich vom FX-Utility zu einer vielschichtigen Analytik- und Monitoring-Plattform entwickelt."
    },
    contribution: {
      en: "Independent Side-Quest · Team analytics & market telemetry focus",
      de: "Eigenständiges Side-Quest · Teamanalytik & Markt-Telemetrie"
    },
    status: "active",
    aiAugmented: false,
    techStack: ["python", "pandas", "numpy", "yfinance", "pytest", "fastapi"],
    tags: ["Python", "pandas", "NumPy", "yfinance", "FastAPI", "pytest"],
    href: "https://github.com/BytecodeBrewer/ARGUS",
    tone: "cyan",
    signal: [32, 44, 38, 57, 52, 73, 68, 88],
    introduction: {
      en: "ARGUS bridges raw financial feeds with modular transformation engines, turning volatile market tickers into structured analytical signals without external AI shortcuts.",
      de: "ARGUS verbindet rohe Finanzdaten-Feeds mit modularen Transformations-Engines, um volatile Marktticker ohne KI-Abkürzungen in strukturierte Analysesignale zu verwandeln."
    },
    backgroundType: "market_gap",
    background: {
      en: "Built to spot financial market opportunities without paying thousands for bloated enterprise terminals. Developed collaboratively as an independent side-quest to track FX & equities.",
      de: "Entwickelt, um Marktchancen auf Finanzmärkten zu erkennen, ohne Tausende für überladene Enterprise-Terminals auszugeben. Begann als kollaboratives Side-Quest für FX & Aktien."
    },
    storySections: [
      {
        eyebrow: { en: "Current shape", de: "Aktueller Stand" },
        title: { en: "From FX utility to financial pipeline", de: "Vom FX-Utility zur Finanzpipeline" },
        body: {
          en: "ARGUS isolates data ingested from yfinance and FX APIs into structured pandas pipelines. Clean separation of fetchers, transformers, and visualizers ensures pipeline updates don't break downstream metrics.",
          de: "ARGUS trennt Datenimporte aus yfinance und FX APIs in strukturierte pandas-Pipelines. Klare Abgrenzung von Ingestion, Transformation und Visualisierung garantiert Stabilität."
        }
      },
      {
        eyebrow: { en: "System direction", de: "System-Richtung" },
        title: { en: "Scheduled ingestion & smart alerts", de: "Genaue Ingestion & Smarte Warnungen" },
        body: {
          en: "Every sprint refines real-time risk calculation and anomaly indicators. The target is automated daily batch pipelines with instant Discord/Slack monitoring triggers.",
          de: "Jeder Sprint verfeinert Risikoberechnungen und Anomalie-Indikatoren in Echtzeit. Ziel sind tägliche Batch-Pipelines mit automatischen Alerts."
        }
      }
    ],
    diagram: {
      label: { en: "Data Engineering Flow", de: "Data Engineering Ablauf" },
      title: { en: "From Market Ticker to Anomaly Detection", de: "Vom Marktticker zur Anomalieerkennung" },
      intro: {
        en: "Data flows sequentially through modular fetchers, validation checks, pandas vectorization, and analytical alert outputs.",
        de: "Daten fließen sequenziell durch modulare Ingestion-Layer, Validierungen, pandas-Vektorisierung und analytische Alert-Systeme."
      },
      nodes: [
        { title: { en: "Live Market APIs", de: "Live-Markt-APIs" }, text: { en: "yfinance & FX currency feeds", de: "yfinance & FX Währungs-Feeds" } },
        { title: { en: "Validation & Normalization", de: "Validierung & Normalisierung" }, text: { en: "Pydantic schema checks & missing data interpolation", de: "Pydantic Schemaprüfungen & Lückenfüllung" } },
        { title: { en: "Pandas Analytics Engine", de: "Pandas Analytics Engine" }, text: { en: "Vectorized moving averages, volatility metrics & EV", de: "Vektorisierte Gleitende Durchschnitte & Volatilität" } },
        { title: { en: "Alert Engine", de: "Alert Engine" }, text: { en: "Rule-based pattern recognition for abnormal spikes", de: "Regelbasierte Mustererkennung für unübliche Markt-Ausschläge" } }
      ]
    },
    roadmapTitle: { en: "Sprint Execution", de: "Sprint-Umsetzung" },
    roadmap: [
      { title: "Sprint 1", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Core architecture, live FX conversion & pytest test suite.", de: "Kernarchitektur, Live-FX-Umrechnung & Pytest Suite." } },
      { title: "Sprint 2", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "yfinance integrations, moving volatility metrics & pandas optimization.", de: "yfinance Integration, Volatilitätsmetriken & pandas Optimierung." } },
      { title: "Sprint 3", status: { en: "Planned", de: "Geplant" }, text: { en: "Persistent Postgres storage & web-ready monitoring dashboard.", de: "Persistente Postgres-Datenbank & Web-Monitoring Dashboard." } }
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
    summary: {
      en: "A modular quantitative engine for arbitrage detection, strategy simulation, liquidity estimation, and risk-managed execution.",
      de: "Eine modulare Quant Engine für Arbitrage-Erkennung, Strategiesimulation, Liquiditätsmessung und risikogesteuerte Ausführung."
    },
    contribution: {
      en: "Quantitative Developer & Pipeline Architect · Private Repository",
      de: "Quant-Entwickler & Pipeline-Architekt · Privates Repository"
    },
    status: "active",
    aiAugmented: false,
    isPrivateRepo: true,
    techStack: ["python", "pydantic", "pytest", "numpy", "postgres"],
    tags: ["Python", "Pydantic", "pytest", "NumPy", "Quant Modeling", "Data Pipelines"],
    tone: "green",
    signal: [26, 35, 46, 42, 59, 66, 73, 91],
    introduction: {
      en: "Q-Bet turns chaotic betting market odds into strict mathematical domain models, assessing Expected Value (EV), lock-up risk, and capital routing.",
      de: "Q-Bet transformiert Quoten aus Wettmärkten in strenge mathematische Domain-Modelle zur Berechnung von Expected Value (EV) und Risiko."
    },
    backgroundType: "market_gap",
    background: {
      en: "Manual sports arbitrage and matched betting are error-prone and time-consuming. Q-Bet was designed to automate opportunity scanning, expected value modeling, and risk calculations with software engineering rigor.",
      de: "Manuelle Sport-Arbitrage und Matched Betting sind fehleranfällig und zeitaufwendig. Q-Bet wurde entwickelt, um Arbitragechancen, EV-Modellierung und Risikoberechnungen mit harter Software-Engineering-Disziplin zu automatisieren."
    },
    storySections: [
      {
        eyebrow: { en: "Target Product", de: "Ziel-Produkt" },
        title: { en: "Quant models before risky execution", de: "Quant-Modelle vor Risiko-Ausführung" },
        body: {
          en: "Before sending any trade, Q-Bet models events, markets, offers, liquidity depth, and capital lockup in strongly-typed Pydantic schemas.",
          de: "Bevor Trades platziert werden, modelliert Q-Bet Events, Märkte, Angebote und Liquidität in streng typisierten Pydantic-Schemas."
        }
      },
      {
        eyebrow: { en: "Engineering Discipline", de: "Ingenieursdisziplin" },
        title: { en: "Math, risk & clear execution bounds", de: "Mathematik, Risiko & klare Grenzen" },
        body: {
          en: "Expected Value (EV), ROI, and capital lockup rules are explicit software objects. Simulation mode allows strategy verification before actual execution.",
          de: "Expected Value (EV), ROI und Kapitalbindung sind explizite Softwareobjekte. Ein Simulationsmodus erlaubt die Strategieprüfung vor der Ausführung."
        }
      }
    ],
    diagram: {
      label: { en: "Pipeline & Engine Architecture", de: "Pipeline & Engine Architektur" },
      title: { en: "From Odds Feed to Risk-Approved Execution", de: "Vom Quoten-Feed zur freigegebenen Ausführung" },
      intro: {
        en: "Data ingestion normalizes odds, calculates arbitrage spread, evaluates risk limits, and routes capital dynamically.",
        de: "Datenimporte normalisieren Quoten, berechnen Arbitrage-Spreads, prüfen Risikolimits und steuern Kapital dynamisch."
      },
      nodes: [
        { title: { en: "Bookmaker Odds Collectors", de: "Buchmacher Quoten-Collector" }, text: { en: "Ingest live markets & event data", de: "Import von Live-Märkten & Eventdaten" } },
        { title: { en: "Typed Pydantic Domain Layer", de: "Typisierte Pydantic Domain Layer" }, text: { en: "Strict parsing of markets, odds & limits", de: "Strikte Analyse von Märkten, Quoten & Limits" } },
        { title: { en: "EV & Arbitrage Math Engine", de: "EV & Arbitrage Mathe-Engine" }, text: { en: "Computes optimal stake allocation & EV", de: "Berechnung optimaler Einsätze & EV" } },
        { title: { en: "Capital Risk Orchestrator", de: "Kapital-Risiko Orchestrator" }, text: { en: "Enforces lockup caps & approval gates", de: "Erzwingt Liquiditätsgrenzen & Freigaben" } }
      ]
    },
    roadmapTitle: { en: "Development Stages", de: "Entwicklungsphasen" },
    roadmap: [
      { title: "Stage 1", status: { en: "Current", de: "Aktuell" }, text: { en: "Core Pydantic domain models & comprehensive math tests.", de: "Kern-Pydantic-Modelle & umfassende Mathe-Tests." } },
      { title: "Base Engine", status: { en: "Next", de: "Nächster Schritt" }, text: { en: "Matched betting, free-bet optimization & dutch calculation engine.", de: "Matched-Betting & Dutching-Berechnungs-Engine." } },
      { title: "Cloud v1", status: { en: "Target", de: "Zielversion" }, text: { en: "Web dashboard, automated odds collectors & controlled execution.", de: "Web-Dashboard, Quoten-Collector & gesteuerte Ausführung." } }
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
    summary: {
      en: "A custom terminal-driven multi-agent orchestration framework designed to handle end-to-end coding tasks with RunPod & local LLM offloading.",
      de: "Ein maßgeschneidertes Multi-Agenten-Framework mit Terminal-Interface für End-to-End Coding-Tasks mit RunPod & Lokalen LLMs."
    },
    contribution: {
      en: "Independent architecture · Autonomous agent orchestration framework",
      de: "Eigenständige Architektur · Autonomes Agenten-Orchestrierungs-Framework"
    },
    status: "active",
    aiAugmented: true,
    aiBadgeText: {
      en: "🤖 Autonomous Agent System",
      de: "🤖 Autonomes Agenten-System"
    },
    techStack: ["python", "docker", "fastapi", "postgres", "redis"],
    tags: ["Python", "Docker", "Agentic Workflows", "FastAPI", "RunPod", "Local LLMs"],
    href: "https://github.com/BytecodeBrewer/MAS",
    tone: "emerald",
    signal: [20, 38, 55, 62, 78, 85, 92, 98],
    introduction: {
      en: "MAS is built for engineers who want custom, highly tailored autonomous agents that execute complete tickets without burning thousands of commercial API tokens.",
      de: "MAS wurde für Entwickler gebaut, die maßgeschneiderte autonome Agenten wollen, die ganze Tickets bearbeiten, ohne teure API-Tokens zu verschwenden."
    },
    backgroundType: "heavy_workload",
    background: {
      en: "Commercial AI coding tools like Copilot or Cloud Code are great for quick completions, but costly and rigid for end-to-end heavy repository refactoring. MAS introduces specialized lightweight agents ('Bob', 'Worker-1') offloading heavy tasks to cost-effective RunPod cloud GPUs and local Ollama/vLLM instances.",
      de: "Kommerzielle KI-Tools wie Copilot sind gut für Zeilen-Vervollständigungen, aber teuer und starr bei kompletten Ticket-Umbauten. MAS führt spezialisierte Worker ('Bob', 'Worker-1') ein, die schwere Tasks auf kostengünstige RunPod GPUs und lokale LLMs auslagern."
    },
    storySections: [
      {
        eyebrow: { en: "Custom Control", de: "Eigene Kontrolle" },
        title: { en: "Terminal UI & full task lifecycle", de: "Terminal-UI & voller Ticket-Lebenszyklus" },
        body: {
          en: "Instead of black-box SaaS solutions, MAS gives a clean terminal client interface where tickets are accepted, broken into context graphs, implemented, tested, and submitted autonomously.",
          de: "Statt einer Blackbox-SaaS bietet MAS ein klares Terminal-Interface: Tickets werden akzeptiert, zerlegt, implementiert, getestet und selbstständig abgeschlossen."
        }
      },
      {
        eyebrow: { en: "Cost Efficiency", de: "Kosteneffizienz" },
        title: { en: "RunPod & local LLM compute scaling", de: "RunPod & Lokales LLM-Compute-Scaling" },
        body: {
          en: "By combining low-cost API calls for routing with high-throughput RunPod cloud GPU instances for massive context processing, heavy coding sessions stay insanely cost-effective.",
          de: "Durch die Kombination günstiger Routing-APIs mit leistungsstarken RunPod-Cloud-GPUs bleiben selbst extrem lange Coding-Sessions bezahlbar."
        }
      }
    ],
    diagram: {
      label: { en: "Agent Task Pipeline", de: "Agenten-Task-Pipeline" },
      title: { en: "From Ticket Creation to Autonomous Git Submission", de: "Vom Ticket bis zur autonomen Git-Submittierung" },
      intro: {
        en: "Agents coordinate work through a terminal master orchestrator, dispatching tasks to dedicated compute workers.",
        de: "Agenten koordinieren Arbeit über einen Terminal-Master-Orchestrator und verteilen Tasks auf dedizierte Worker."
      },
      nodes: [
        { title: { en: "Ticket Ingestion (Terminal)", de: "Ticket-Erfassung (Terminal)" }, text: { en: "User submits task spec via CLI", de: "Nutzer übergibt Task-Spezifikation via CLI" } },
        { title: { en: "Task Breakdown & Context Graph", de: "Task-Zerlegung & Kontext-Graph" }, text: { en: "Orchestrator maps file dependencies", de: "Orchestrator analysiert Datei-Abhängigkeiten" } },
        { title: { en: "Worker Execution (RunPod / Local LLM)", de: "Worker-Ausführung (RunPod / Lokales LLM)" }, text: { en: "Dedicated worker 'Bob' executes changes", de: "Spezialisierter Worker 'Bob' setzt Änderungen um" } },
        { title: { en: "Verification & Automated PR", de: "Verifizierung & Automatischer PR" }, text: { en: "Runs test suite and creates pull request", de: "Führt Tests aus und erstellt den Pull Request" } }
      ]
    },
    roadmapTitle: { en: "Architecture Roadmap", de: "Architektur-Roadmap" },
    roadmap: [
      { title: "v0.1 CLI Core", status: { en: "Active", de: "Aktiv" }, text: { en: "Terminal client interface, local file parsing, and tool execution loop.", de: "Terminal-Client, lokales Parsing & Werkzeug-Schleife." } },
      { title: "RunPod Offloader", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Dynamic spin-up of cost-effective GPU workers for heavy refactoring.", de: "Dynamisches Starten günstiger GPU-Worker für schwere Refactorings." } },
      { title: "Community Worker", status: { en: "Planned", de: "Geplant" }, text: { en: "Multi-tenant worker pooling for minimal subscription usage.", de: "Shared Worker-Pooling für minimale monatliche Betriebskosten." } }
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
    summary: {
      en: "A foundational repository demonstrating mastery from numerical fundamentals (NumPy from scratch) to modern RAG systems and cloud certifications.",
      de: "Ein Fundament-Repository für Data Engineering – von Numerik-Grundlagen (NumPy von Grund auf) bis zu RAG-Systemen und Zertifizierungen."
    },
    contribution: {
      en: "Personal research repo · Grounding & Proof of Work",
      de: "Persönliches Forschungs-Repo · Fundament & Proof of Work"
    },
    status: "active",
    aiAugmented: true,
    aiBadgeText: {
      en: "⚡ AI Data Transformation Experiments",
      de: "⚡ AI Daten-Transformation Experimente"
    },
    techStack: ["python", "numpy", "pytorch", "azure", "databricks", "snowflake"],
    tags: ["Python", "NumPy", "PyTorch", "Azure", "Databricks", "Snowflake", "RAG Systems"],
    href: "https://github.com/BytecodeBrewer/Data-Lab",
    tone: "blue",
    signal: [30, 45, 60, 70, 82, 88, 94, 99],
    introduction: {
      en: "Data Lab serves as the ultimate 'Proof of Work'—a structured repository where core concepts of Data Engineering and Data Science are implemented ground-up and battle-tested.",
      de: "Data Lab ist das ultimative 'Proof of Work'—ein strukturiertes Repo, in dem Kernkonzepte von Data Engineering und Data Science fundiert umgesetzt werden."
    },
    backgroundType: "proof_of_work",
    background: {
      en: "Built to deepen informatics studies and bridge university theory with industry-grade data infrastructure. Rather than relying on superficial tutorials, Data Lab hosts hand-coded numerical tools, vector search experiments, and practical implementations for Azure, Databricks, and Snowflake certifications.",
      de: "Entwickelt, um die Theorie des Informatikstudiums mit realer Dateninfrastruktur zu verbinden. Statt flacher Tutorials bietet Data Lab selbstgeschriebene Numerik-Tools, Vektorsuche-Experimente und Vorbereitungen für Azure, Databricks und Snowflake Zertifikate."
    },
    storySections: [
      {
        eyebrow: { en: "Solid Foundation", de: "Solides Fundament" },
        title: { en: "From pure math to RAG systems", de: "Von reiner Mathematik bis zu RAG-Systemen" },
        body: {
          en: "Data Lab explores the mathematical mechanics behind machine learning frameworks—implementing matrix operations, numerical stability algorithms, and retrieval-augmented generation (RAG) architectures.",
          de: "Data Lab erforscht die mathematische Mechanik hinter ML-Frameworks—von Matrix-Operationen über Numerik-Stabilität bis zu RAG-Architekturen."
        }
      },
      {
        eyebrow: { en: "Certified Mastery", de: "Zertifizierte Kompetenz" },
        title: { en: "Cloud & Warehouse Ecosystems", de: "Cloud & Data Warehouse Ökosysteme" },
        body: {
          en: "It acts as a clean public portfolio showcase for cloud data architectures on Azure, Databricks Delta Lake, and Snowflake data warehouses.",
          de: "Es dient als sauberes öffentliches Portfolio für Cloud-Datenarchitekturen auf Azure, Databricks Delta Lake und Snowflake."
        }
      }
    ],
    diagram: {
      label: { en: "Knowledge Stack", de: "Wissens-Stack" },
      title: { en: "From Fundamental Numerics to Cloud Data Pipelines", de: "Von Grundlagennumerik bis zu Cloud-Datenpipelines" },
      intro: {
        en: "Progressive technical depth: low-level numerical linear algebra up to distributed cloud warehouse operations.",
        de: "Fortschreitende technische Tiefe: von mathematischer Linearer Algebra bis zu verteilten Cloud Data Warehouses."
      },
      nodes: [
        { title: { en: "01. Numerical Core", de: "01. Numerik-Kern" }, text: { en: "NumPy math routines, linear algebra & stability", de: "NumPy Mathe-Routinen & Lineare Algebra" } },
        { title: { en: "02. Deep Learning Mechanics", de: "02. Deep Learning Mechanik" }, text: { en: "PyTorch tensor operations & gradient graphs", de: "PyTorch Tensor-Operationen & Gradienten" } },
        { title: { en: "03. Vector Search & RAG", de: "03. Vektorsuche & RAG" }, text: { en: "Embeddings, vector indexing & semantic retrieval", de: "Embeddings, Vektorindexierung & Retrieval" } },
        { title: { en: "04. Cloud Data Warehouse", de: "04. Cloud Data Warehouse" }, text: { en: "Azure Data Factory, Databricks & Snowflake pipelines", de: "Azure, Databricks & Snowflake Pipelines" } }
      ]
    },
    roadmapTitle: { en: "Lab Modules", de: "Lab Module" },
    roadmap: [
      { title: "Module A", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Numerical linear algebra routines & PyTorch fundamentals.", de: "Numerische Lineare Algebra & PyTorch Grundlagen." } },
      { title: "Module B", status: { en: "Active", de: "Aktiv" }, text: { en: "Custom RAG indexing engine & vector retrieval benchmarks.", de: "Eigene RAG Index-Engine & Vektor-Retrieval Benchmarks." } },
      { title: "Module C", status: { en: "Ongoing", de: "Laufend" }, text: { en: "Azure & Databricks certified deployment templates.", de: "Zertifizierte Azure & Databricks Deployment Templates." } }
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
    summary: {
      en: "A continuous integration script & automation service syncing documentation, technical notes, and structured metadata into Notion workspaces.",
      de: "Ein CI-Skript & Automatisierungsdienst zur Synchronisation von Doku, technischen Notizen und Metadaten in Notion Workspaces."
    },
    contribution: {
      en: "Automation Engineer · Maintenance Mode",
      de: "Automatisierungs-Ingenieur · Wartungsmodus"
    },
    status: "paused",
    aiAugmented: true,
    aiBadgeText: {
      en: "🤖 AI-Assisted Knowledge Pipeline",
      de: "🤖 KI-Gestützte Wissens-Pipeline"
    },
    techStack: ["electron", "typescript", "postgres"],
    tags: ["Electron", "TypeScript", "Node.js", "Notion API", "Workflow Automation"],
    href: "https://github.com/BytecodeBrewer/Notion-Sync",
    tone: "amber",
    signal: [24, 34, 42, 55, 47, 62, 74, 80],
    introduction: {
      en: "Notion Sync solves a real-world productivity gap: unifying multi-table databases into a real operational master table without manual copy-pasting.",
      de: "Notion Sync löst ein echtes Produktivitätsproblem: Zusammenführung mehrerer Notion-Tabellen in eine zentrale operative Master-Tabelle."
    },
    backgroundType: "market_gap",
    background: {
      en: "Notion allows linked views, but lacks a true native multi-database aggregation engine that keeps writeable records synchronized. Built with AI workflow assistance, Notion Sync runs a continuous delta-sync worker.",
      de: "Notion bietet verknüpfte Ansichten, aber keine echte native Aggregations-Engine. Mit KI-Unterstützung entwickelt, führt Notion Sync einen kontinuierlichen Delta-Sync Worker aus."
    },
    storySections: [
      {
        eyebrow: { en: "Operational Problem", de: "Operatives Problem" },
        title: { en: "Connected views are not a true merge", de: "Verknüpfte Ansichten sind kein echter Merge" },
        body: {
          en: "Fragmented project databases lead to context switching. Notion Sync creates a single source of truth operational view.",
          de: "Fragmentierte Projektdatenbanken führen zu ständigen Kontextwechseln. Notion Sync stellt eine einheitliche Master-Ansicht her."
        }
      },
      {
        eyebrow: { en: "Engineering Solution", de: "Technische Lösung" },
        title: { en: "Delta state sync & tray app", de: "Delta-State-Sync & Tray App" },
        body: {
          en: "Built with Electron & Node.js, the tool runs in system tray mode, using local state maps to handle bi-directional property updates efficiently.",
          de: "Mit Electron & Node.js entwickelt, läuft das Tool im System-Tray und nutzt lokale Zustands-Maps für effiziente Updates."
        }
      }
    ],
    diagram: {
      label: { en: "Sync Flow", de: "Sync Ablauf" },
      title: { en: "From Multi-Source Notion Tables to Master DB", de: "Von mehreren Quellen zur Master DB" },
      intro: {
        en: "Source databases trigger incremental sync passes managed by the background sync worker.",
        de: "Quell-Datenbanken stoßen inkrementelle Sync-Läufe im Hintergrund-Worker an."
      },
      nodes: [
        { title: { en: "Source DB A, B, C", de: "Quell-Datenbanken A, B, C" }, text: { en: "Fragmented input tables in Notion", de: "Getrennte Tabellen in Notion" } },
        { title: { en: "Notion Sync Delta Worker", de: "Notion Sync Delta Worker" }, text: { en: "Tracks modified timestamps & deletion IDs", de: "Überwacht Zeitstempel & gelöschte IDs" } },
        { title: { en: "Schema Mapping & Guard", de: "Schema Mapping & Schutz" }, text: { en: "Normalizes mismatched property types", de: "Normalisiert unterschiedliche Feldtypen" } },
        { title: { en: "Unified Central Master DB", de: "Zentrale Master-Datenbank" }, text: { en: "Single working table for daily ops", de: "Zentrale Tabelle für die tägliche Arbeit" } }
      ]
    },
    roadmapTitle: { en: "Product Path", de: "Produkt-Roadmap" },
    roadmap: [
      { title: "Desktop Prototype", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Electron app with tray icon & background sync.", de: "Electron App mit Tray-Icon & Hintergrund-Sync." } },
      { title: "Conflict Resolver", status: { en: "Active", de: "Aktiv" }, text: { en: "Conflict detection for simultaneous edits in master and source DBs.", de: "Konflikterkennung bei simultanen Bearbeitungen." } },
      { title: "Cloud Connector", status: { en: "Planned", de: "Geplant" }, text: { en: "Serverless execution without needing desktop process running.", de: "Serverless Ausführung ohne laufenden Desktop-Prozess." } }
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
    summary: {
      en: "A lightweight Linux system telemetry suite monitoring CPU, memory, background daemons, and system health.",
      de: "Eine kompakte Linux-Systemtelemetrie-Suite zur Überwachung von CPU, Speicher, Hintergrund-Daemons und Systemzustand."
    },
    contribution: {
      en: "Systems Developer · Long-term background tool (Side-Quest)",
      de: "System-Entwickler · Langfristiges Hintergrund-Tool (Side-Quest)"
    },
    status: "side-quest",
    aiAugmented: false,
    techStack: ["typescript", "go", "mcp", "playwright", "docker"],
    tags: ["TypeScript", "Go", "MCP", "Playwright", "System Telemetry", "Docker"],
    href: "https://github.com/BytecodeBrewer/SMART",
    tone: "violet",
    signal: [28, 40, 48, 43, 65, 58, 77, 84],
    introduction: {
      en: "SMART is a minimalist system telemetry tool for tracking CPU, memory, and process health on Linux nodes without artificial AI bloat.",
      de: "SMART ist ein minimalistisches System-Telemetrie-Tool zur Überwachung von CPU, Speicher und Prozessen auf Linux-Knoten ganz ohne künstlichen KI-Overhead."
    },
    backgroundType: "academic",
    background: {
      en: "Created during foundational systems studies to gain deep visibility into server resource consumption and daemon health.",
      de: "Entwickelt während der System-Grundlagen, um tiefe Einblicke in Server-Ressourcennutzung und Daemon-Zustände zu erlangen."
    },
    storySections: [
      {
        eyebrow: { en: "System Reliability", de: "System-Zuverlässigkeit" },
        title: { en: "Lightweight background telemetry", de: "Leichtgewichtige Hintergrund-Telemetrie" },
        body: {
          en: "Simple, battle-tested, and quietly running in the background as an essential long-term side-quest utility.",
          de: "Einfach, erprobt und leise im Hintergrund als zuverlässiges Side-Quest-Tool im Einsatz."
        }
      }
    ],
    diagram: {
      label: { en: "Workflow Flow", de: "Workflow Ablauf" },
      title: { en: "From Linux Kernel Metrics to Console HUD", de: "Von Kernel-Metriken zur Konsole" },
      intro: {
        en: "Minimal overhead pipeline streaming Linux telemetry directly to log sinks.",
        de: "Minimalistische Pipeline, die Linux-Telemetrie direkt an Log-Sinks überträgt."
      },
      nodes: [
        { title: { en: "Linux Metrics", de: "Linux-Metriken" }, text: { en: "CPU, RAM and systemd process polling", de: "CPU, RAM & systemd Prozess-Polling" } },
        { title: { en: "Telemetry Daemon", de: "Telemetrie Daemon" }, text: { en: "Formats logs & tracks anomalies", de: "Formatiert Logs & erkennt Abweichungen" } },
        { title: { en: "Console HUD", de: "Konsolen HUD" }, text: { en: "Terminal status display", de: "Terminal Statusanzeige" } }
      ]
    },
    roadmapTitle: { en: "Project Status", de: "Projekt-Status" },
    roadmap: [
      { title: "v1.0 Release", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Core daemon & systemd integration.", de: "Kern-Daemon & systemd Integration." } }
    ]
  }
];

export const projects = defaultProjects;

export function getProject(slug: string, customProjects?: Project[]) {
  const list = customProjects ?? defaultProjects;
  return list.find((project) => project.slug === slug);
}
