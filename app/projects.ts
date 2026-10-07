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
      en: "Market Analytics & Financial Telemetry Pipeline",
      de: "Markt-Analyse & Finanzdaten-Pipeline"
    },
    classification: {
      en: "Collaborative Learning Project",
      de: "Kollaboratives Lernprojekt"
    },
    summary: {
      en: "A collaborative data engineering pipeline that ingests live currency rates and historical market trends, performing pandas vectorized calculations and rule-based volatility alerts.",
      de: "Eine kollaborative Data-Engineering-Pipeline für Live-Devisen und historische Marktdaten mit pandas-Vektorisierung und regelbasierten Volatilitäts-Alerts."
    },
    contribution: {
      en: "Collaborative Side-Quest · Financial Data & Telemetry Pipeline",
      de: "Kollaboratives Side-Quest · Finanzdaten & Telemetrie Pipeline"
    },
    status: "active",
    aiAugmented: false,
    techStack: ["python", "django", "fastapi", "pandas", "postgres", "pydantic"],
    secondaryTechStack: ["numpy", "yfinance", "pytest"],
    tags: ["Python", "Django", "FastAPI", "pandas", "yfinance", "Pydantic", "PostgreSQL"],
    href: "https://github.com/BytecodeBrewer/ARGUS",
    tone: "cyan",
    signal: [32, 44, 38, 57, 52, 73, 68, 88],
    introduction: {
      en: "ARGUS is a collaborative financial data pipeline built to ingest, validate, and analyze market data without relying on proprietary black-box software or expensive enterprise terminals. It combines live ExchangeRate APIs with yfinance market history into structured transformation workflows.",
      de: "ARGUS ist eine kollaborative Finanzdaten-Pipeline zur Ingestion, Validierung und Analyse von Marktdaten – ohne proprietäre Black-Box-Tools oder teure Terminals. Es verbindet Live ExchangeRate-APIs und yfinance-Historien in strukturierte Transformations-Workflows."
    },
    backgroundType: "proof_of_work",
    background: {
      en: "Financial analytics systems often hide calculation logic behind expensive paywalls. ARGUS was launched as a collaborative learning project to explore end-to-end data processing, strict Pydantic schema validation, pandas vectorized moving volatility metrics, and deterministic anomaly alerting.",
      de: "Finanzanalyse-Systeme verbergen Berechnungen oft hinter teuren Paywalls. ARGUS wurde als kollaboratives Lernprojekt ins Leben gerufen, um tiefgründige Datenverarbeitung, strikte Pydantic-Schema-Validierung, pandas-Vektorisierung und regelbasierte Anomalie-Alerts von Grund auf zu entwickeln."
    },
    storySections: [
      {
        eyebrow: { en: "Architecture", de: "Architektur" },
        title: { en: "Modular Data Pipeline & Ingestion", de: "Modulare Data-Pipeline & Ingestion" },
        body: {
          en: "Data collectors, schema validators, and calculation layers are strictly separated. Ingestion modules validate API payloads before passing clean dataframes to analytical downstream workers.",
          de: "Data Collector, Schema-Validatoren und Berechnungslayer sind strikt getrennt. Ingestion-Module validieren API-Payloads, bevor saubere Dataframes an Analyse-Worker übergeben werden."
        }
      },
      {
        eyebrow: { en: "Telemetry Direction", de: "Telemetrie-Ausrichtung" },
        title: { en: "Volatility Signals & Anomaly Detection", de: "Volatilitätssignale & Anomalie-Erkennung" },
        body: {
          en: "Calculates rolling moving averages, variance spikes, and market spread deviations. Anomaly flags automatically prepare structured payloads for persistent storage and alert dispatchers.",
          de: "Berechnet gleitende Durchschnitte, Varianzspitzen und Spreads. Anomalie-Flags bereiten strukturierte Payloads für persistente Datenbanken und Alert-Dispatcher vor."
        }
      }
    ],
    diagram: {
      label: { en: "Data Engineering Flow", de: "Data Engineering Ablauf" },
      title: { en: "From Market Ticker Ingestion to Anomaly Alert", de: "Vom Marktticker-Import zur Anomalieerkennung" },
      intro: {
        en: "Market data streams sequentially through currency fetchers, Pydantic schema validation, pandas vectorization, and rule-based alert sinks.",
        de: "Finanzdaten fließen sequenziell durch Ingestion-Fetcher, Pydantic-Validierung, pandas-Vektorisierung und regelbasierte Alert-Sinks."
      },
      nodes: [
        { title: { en: "ExchangeRate & yfinance Ingestion", de: "ExchangeRate & yfinance Ingestion" }, text: { en: "Ingest live FX rates & historical ticker series", de: "Import von Live-Devisen & Aktienhistorien" } },
        { title: { en: "Pydantic Schema Guard", de: "Pydantic Schema-Schutz" }, text: { en: "Validates rate types & interpolates missing intervals", de: "Validiert Kurstypen & interpoliert Lücken" } },
        { title: { en: "Pandas Analytics Engine", de: "Pandas Analytics Engine" }, text: { en: "Vectorized moving volatility & variance metrics", de: "Vektorisierte Durchschnitte & Volatilitätsmetriken" } },
        { title: { en: "Persistent Storage & Alert Sink", de: "Persistenter Speicher & Alert Sink" }, text: { en: "Stores historical trends & dispatches anomaly alerts", de: "Speichert Trends & löst präzise Alerts aus" } }
      ]
    },
    roadmapTitle: { en: "Ziele & Zukunftsperspektiven", de: "Ziele & Zukunftsperspektiven" },
    roadmap: [
      { title: "Sprint 1", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Modular pipeline architecture, live FX conversion, Tkinter testing harness & pytest suite.", de: "Modulare Pipeline-Architektur, Live-FX-Umrechnung, Tkinter Test-Harness & Pytest-Suite." } },
      { title: "Sprint 2", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "yfinance historical market ingestion, rolling volatility metrics & pandas vectorization.", de: "yfinance Markt-Ingestion, Volatilitätsmetriken & pandas-Vektorisierung." } },
      { title: "Sprint 3", status: { en: "Planned", de: "Geplant" }, text: { en: "Persistent PostgreSQL storage layer, automated batch schedules & Discord alert Webhooks.", de: "Persistente PostgreSQL-Datenbank, Batch-Schedules & Discord Alert Webhooks." } }
    ]
  },
  {
    slug: "q-bet",
    index: "02",
    name: "Q-Bet",
    label: {
      en: "High-Speed Quantitative Arbitrage & Odds Engine",
      de: "High-Speed Quant Arbitrage & Quoten-Engine"
    },
    classification: {
      en: "Product",
      de: "Produkt"
    },
    summary: {
      en: "A quantitative calculation engine designed to capture inefficient market spreads across sports betting markets through automated odds synchronization and risk-managed execution.",
      de: "Eine quantitative Berechnungs-Engine zur automatisierten Erkennung ineffizienter Markt-Spreads in Wettmärkten mit risikogesteuerter Ausführung."
    },
    contribution: {
      en: "Quantitative Developer & Pipeline Architect · Private Repository",
      de: "Quant-Entwickler & Pipeline-Architekt · Privates Repository"
    },
    status: "active",
    aiAugmented: true,
    aiBadgeText: {
      en: "AI Agents & Quantitative Workflow",
      de: "KI-Agenten & Quant-Workflow"
    },
    isPrivateRepo: true,
    techStack: ["python", "vercel", "supabase", "postgres", "pydantic"],
    secondaryTechStack: ["numpy", "pytest"],
    tags: ["Python", "Vercel", "Supabase", "Pydantic", "PostgreSQL", "Quant Engine"],
    tone: "green",
    signal: [26, 35, 46, 42, 59, 66, 73, 91],
    introduction: {
      en: "Q-Bet is a quantitative calculation engine engineered to capture spreads in inefficient markets. Manual Dutching and Expected Value (EV) calculations are slow and mathematically error-prone. Q-Bet automates odds synchronization, applies quantitative models, and enforces capital protection constraints.",
      de: "Q-Bet ist eine quantitative Berechnungs-Engine zur Eroberung ineffizienter Märkte. Händische Dutching- und Expected-Value-Berechnungen sind zeitaufwendig und fehleranfällig. Q-Bet automatisiert die Quoten-Synchronisation, wendet Quant-Modelle an und erzwingt Kapital-Limits."
    },
    backgroundType: "market_gap",
    background: {
      en: "Wettmärkte und Arbitrage-Gelegenheiten ändern sich in Sekundenschnelle. Händisches Nachrechnen führt unvermeidlich zu Verzögerungen und Berechnungsfehlern. Q-Bet behandelt Marktquoten als streng typisierte Datenstrukturen, berechnet präzise Einsätze und steuert das Risiko automatisiert.",
      de: "Wettmärkte und Arbitrage-Gelegenheiten ändern sich in Sekundenschnelle. Händisches Nachrechnen führt unvermeidlich zu Verzögerungen und Berechnungsfehlern. Q-Bet behandelt Marktquoten als streng typisierte Datenstrukturen, berechnet präzise Einsätze und steuert das Risiko automatisiert."
    },
    storySections: [
      {
        eyebrow: { en: "Calculation Core", de: "Berechnungs-Kern" },
        title: { en: "Typed Data Schemas & Speed Optimization", de: "Typisierte Daten-Schemas & Speed-Optimierung" },
        body: {
          en: "Every market offer, bookmaker spread, and capital allocation window is parsed into Pydantic domain schemas before mathematical evaluation occurs.",
          de: "Jedes Marktangebot, jeder Spreads und alle Liquiditätsgrenzen werden in streng typisierte Pydantic-Schemas überführt, bevor die Berechnung erfolgt."
        }
      },
      {
        eyebrow: { en: "Risk Boundaries", de: "Risiko-Grenzen" },
        title: { en: "Capital Allocation & Simulation Engine", de: "Kapitalallokation & Simulations-Engine" },
        body: {
          en: "Strict capital lockup limits and ROI thresholds prevent over-exposure. A dry-run simulation engine validates strategies against market history before dispatching live signals.",
          de: "Strikte Kapitalbindungsgrenzen und ROI-Schwellenwerte verhindern Risiko-Overexposure. Eine Dry-Run-Simulations-Engine prüft Strategien ohne finanzielles Risiko."
        }
      }
    ],
    diagram: {
      label: { en: "Engine Architecture", de: "Engine-Architektur" },
      title: { en: "From Odds Ingestion to Risk Approval", de: "Von der Quoten-Synchronisation zur Risikofreigabe" },
      intro: {
        en: "Live bookmaker odds are collected, normalized, passed to the math engine, and evaluated against strict exposure caps.",
        de: "Live-Quoten werden erfasst, normalisiert, von der Mathe-Engine berechnet und gegen strenge Risikolimits evaluiert."
      },
      nodes: [
        { title: { en: "Odds Collector Ingestion", de: "Quoten-Collector Ingestion" }, text: { en: "Automated collectors sync live market feeds", de: "Automatische Collector synchronisieren Live-Quoten" } },
        { title: { en: "Pydantic Domain Validation", de: "Pydantic Domain-Validierung" }, text: { en: "Strict validation of odds & liquidity limits", de: "Strikte Validierung von Spreads & Einsatzgrenzen" } },
        { title: { en: "EV & Dutch Math Engine", de: "EV & Dutch Mathe-Engine" }, text: { en: "Calculates optimal stake distributions & expected ROI", de: "Berechnet optimale Einsatzverteilungen & ROI" } },
        { title: { en: "Capital & Risk Gateway", de: "Kapital- & Risiko-Gateway" }, text: { en: "Enforces lockup limits & approves execution", de: "Erzwingt Liquiditätsgrenzen & schaltet Trades frei" } }
      ]
    },
    roadmapTitle: { en: "Ziele & Zukunftsperspektiven", de: "Ziele & Zukunftsperspektiven" },
    roadmap: [
      { title: "Entwicklungsstufe 1", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Core Pydantic domain models, arbitrage math engine & comprehensive calculation unit tests.", de: "Pydantic-Domainmodelle, Arbitrage-Mathe-Engine & umfassende Berechnungs-Tests." } },
      { title: "Entwicklungsstufe 2", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Matched betting, free-bet optimization algorithms & automated odds collector pipelines.", de: "Matched-Betting, Free-Bet-Optimierung & automatisierte Quoten-Collector-Pipelines." } },
      { title: "Entwicklungsstufe 3", status: { en: "Planned", de: "Geplant" }, text: { en: "Cloud web dashboard with live telemetry, automated portfolio tracking & risk execution controls.", de: "Cloud Web-Dashboard mit Live-Telemetrie, Portfolio-Tracking & Risiko-Steuerung." } }
    ]
  },
  {
    slug: "mas",
    index: "03",
    name: "MAS",
    label: {
      en: "Multi-Agent System for Heavy Refactoring Workloads",
      de: "Multi-Agenten-System für schwere Refactoring-Workloads"
    },
    classification: {
      en: "Efficient Tool",
      de: "Effizientes Tool"
    },
    summary: {
      en: "A custom terminal-driven agentic orchestration framework built to execute multi-file repository refactorings with RunPod cloud GPU or local LLM compute offloading.",
      de: "Ein maßgeschneidertes Multi-Agenten-Framework mit Terminal-Interface für komplexe Repository-Umbauten mit RunPod Cloud-GPU oder lokalen LLMs."
    },
    contribution: {
      en: "Autonomous Agent Framework · Heavy Refactoring Engine",
      de: "Autonomes Agenten-Framework · Heavy Refactoring Engine"
    },
    status: "active",
    aiAugmented: true,
    aiBadgeText: {
      en: "AI Agents & Autonomous Workflow",
      de: "KI-Agenten & Autonomer Workflow"
    },
    techStack: ["python", "docker", "fastapi", "postgres", "redis", "ai"],
    secondaryTechStack: ["pytest"],
    tags: ["Python", "Docker", "Agentic AI", "FastAPI", "RunPod", "vLLM", "PostgreSQL"],
    href: "https://github.com/BytecodeBrewer/MAS",
    tone: "emerald",
    signal: [20, 38, 55, 62, 78, 85, 92, 98],
    introduction: {
      en: "MAS is a custom multi-agent orchestration tool designed to process multi-file refactoring tasks without black-box vendor lock-in or recurring SaaS API costs. It provides full control over context parsing and offloads heavy compute to on-demand RunPod cloud GPUs or local LLM instances.",
      de: "MAS ist ein persönliches Multi-Agenten-Tool für vielschichtige Refactoring-Aufgaben – ohne Black-Box-Tools, Unerwartete Kosten oder Abhängigkeiten. Es bietet volle Kontrolle über den Kontext und lagert schwere Rechenlasten auf RunPod-GPUs oder lokale LLMs aus."
    },
    backgroundType: "heavy_workload",
    background: {
      en: "Commercial AI coding tools struggle with full-repository context graphs and generate steep token subscription bills. MAS solves this by deploying specialized worker bots ('Bob', 'Worker-1') that analyze dependency trees, execute code transformations, run local test suites, and commit clean feature branches.",
      de: "Kommerzielle KI-Tools stoßen bei großen Kontext-Graphen schnell an Leistungsgrenzen und erzeugen hohe Monatskosten. MAS löst dies durch spezialisierte Worker-Bots ('Bob', 'Worker-1'), die Abhängigkeitsbäume analysieren, Code transformieren, Tests ausführen und Git-Branches erstellen."
    },
    storySections: [
      {
        eyebrow: { en: "Terminal Control", de: "Terminal-Steuerung" },
        title: { en: "Transparent CLI & Context Dependency Parser", de: "Transparente CLI & Kontext-Abhängigkeitsparser" },
        body: {
          en: "Tasks are submitted via CLI and converted into structured file context graphs. Agents work deterministically on isolated tasks with full execution logging.",
          de: "Aufgaben werden per CLI übergeben und in Datei-Kontextbäume zerlegt. Agenten arbeiten deterministisch an isolierten Aufgaben mit vollständigem Logging."
        }
      },
      {
        eyebrow: { en: "Compute Offloading", de: "Compute-Skalierung" },
        title: { en: "RunPod Cloud & Local vLLM Offloading", de: "RunPod Cloud & Lokales vLLM-Offloading" },
        body: {
          en: "Lightweight routing models manage task distribution while heavy contextual refactorings are dispatched dynamically to cost-effective RunPod GPU instances or local vLLM nodes.",
          de: "Leichtgewichtige Routing-Modelle verwalten die Verteilung, während schwere Refactoring-Passes dynamisch auf RunPod GPUs oder lokale vLLM-Knoten ausgelagert werden."
        }
      }
    ],
    diagram: {
      label: { en: "Agent Task Pipeline", de: "Agenten-Task-Pipeline" },
      title: { en: "From CLI Ticket Input to Verification & Commit", de: "Vom CLI-Ticket zur Verifizierung & Commit" },
      intro: {
        en: "Agents coordinate through a master terminal orchestrator, delegating file transformations to specialized worker bots.",
        de: "Agenten koordinieren Arbeit über einen Terminal-Master-Orchestrator und delegieren Code-Transformationen an dedizierte Worker-Bots."
      },
      nodes: [
        { title: { en: "CLI Task Ingestion", de: "CLI Task-Erfassung" }, text: { en: "User submits refactoring spec via terminal", de: "Nutzer übergibt Refactoring-Spezifikation via CLI" } },
        { title: { en: "Context Dependency Graph", de: "Kontext-Abhängigkeitsgraph" }, text: { en: "Orchestrator parses impacted repository files", de: "Orchestrator analysiert betroffene Quelldateien" } },
        { title: { en: "Worker Execution (RunPod / vLLM)", de: "Worker-Ausführung (RunPod / vLLM)" }, text: { en: "Worker bot 'Bob' implements multi-file changes", de: "Worker-Bot 'Bob' setzt Dateiänderungen um" } },
        { title: { en: "Automated Test & Git Commit", de: "Automatisierter Test & Git Commit" }, text: { en: "Executes test suite & commits clean git branch", de: "Führt Testsuite aus & erstellt sauberen Git-Branch" } }
      ]
    },
    roadmapTitle: { en: "Ziele & Zukunftsperspektiven", de: "Ziele & Zukunftsperspektiven" },
    roadmap: [
      { title: "Meilenstein 1", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Terminal client interface, local repository context parser & autonomous agent tool loop.", de: "Terminal-Client, lokaler Datei-Parser & autonome Agenten-Werkzeugschleife." } },
      { title: "Meilenstein 2", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Dynamic spin-up of cost-effective RunPod GPU workers for heavy contextual refactorings.", de: "Dynamisches Starten günstiger RunPod GPU-Worker für schwere Refactoring-Passes." } },
      { title: "Meilenstein 3", status: { en: "Planned", de: "Geplant" }, text: { en: "Local vLLM pooling integration for zero external API costs during extended coding runs.", de: "Lokale vLLM-Pooling-Integration für absolut kostenfreie Offline-Coding-Sessions." } }
    ]
  },
  {
    slug: "data-lab",
    index: "04",
    name: "Data Lab",
    label: {
      en: "Data Engineering Proof of Work & Fundamentals Lab",
      de: "Data Engineering Proof of Work & Grundlagen-Lab"
    },
    classification: {
      en: "Single Learning Project",
      de: "Single-Lernprojekt"
    },
    summary: {
      en: "A personal research repository implementing numerical algorithms, classical AI search, RAG vector retrieval, and cloud data architecture patterns from scratch.",
      de: "Ein persönliches Forschungs-Repo für selbstgeschriebene Numerik-Algorithmen, klassische KI-Suche, RAG Vektor-Retrieval und Cloud-Datenarchitekturen."
    },
    contribution: {
      en: "Personal Research & Proof of Work · Deep Fundamentals",
      de: "Persönliches Forschungs-Repo · Fundament & Proof of Work"
    },
    status: "active",
    aiAugmented: false,
    techStack: ["python", "azure", "databricks", "snowflake", "pytorch"],
    secondaryTechStack: ["numpy", "pytest"],
    tags: ["Python", "Azure", "Databricks", "Snowflake", "PyTorch", "RAG Systems", "NumPy"],
    href: "https://github.com/BytecodeBrewer/Data-Lab",
    tone: "blue",
    signal: [30, 45, 60, 70, 82, 88, 94, 99],
    introduction: {
      en: "Data Lab is a single-developer learning repository designed to master data engineering fundamentals from first principles. Rather than relying on high-level wrappers, it implements numerical methods, graph search algorithms, vector embeddings, and cloud warehouse blueprints directly in Python.",
      de: "Data Lab ist ein persönliches Lernprojekt zur Vertiefung von Data-Engineering-Grundlagen. Statt sich auf fertige Frameworks zu verlassen, werden numerische Verfahren, Graphsuche, Vektor-Retrieval und Cloud-Warehouse-Blueprints von Grund auf selbst entwickelt."
    },
    backgroundType: "proof_of_work",
    background: {
      en: "Solid engineering requires understanding how algorithms operate under the hood. Data Lab houses custom implementations of numerical solvers (linear systems, optimization), classical AI search (BFS, DFS, A*), PyTorch mechanics, RAG vector indexing, and architecture patterns for Azure, Databricks Delta Lake, and Snowflake certifications.",
      de: "Fundiertes Engineering erfordert tiefes Verständnis der mathematischen Grundlagen. Data Lab vereint selbst entwickelte Numerik-Löser, klassische KI-Suche (BFS, DFS, A*), PyTorch-Mechaniken, RAG-Indexierung sowie Blueprints für Azure, Databricks und Snowflake."
    },
    storySections: [
      {
        eyebrow: { en: "Numerical Core", de: "Numerik-Kern" },
        title: { en: "From Matrix Solvers to Optimization", de: "Von Matrix-Lösern bis zur Optimierung" },
        body: {
          en: "Implements linear algebra algorithms, root finding, and numerical stability checks with unit test coverage, ensuring deep comprehension of data transformation mechanics.",
          de: "Implementiert Lineare Algebra, Nullstellen-Suche und Stabilitätsprüfungen inklusive Unit-Tests für echtes Grundverständnis."
        }
      },
      {
        eyebrow: { en: "Cloud Data Engineering", de: "Cloud Data Engineering" },
        title: { en: "Enterprise Cloud Warehouse Blueprints", de: "Enterprise Cloud Warehouse Blueprints" },
        body: {
          en: "Translates core algorithms into cloud warehouse architectures, Delta Lake storage patterns, and scalable ETL pipeline templates on Azure and Snowflake.",
          de: "Übersetzt Grundlagen-Algorithmen in Cloud Data Warehouse Architekturmuster, Delta Lake Tabellen und ETL-Pipelines auf Azure und Snowflake."
        }
      }
    ],
    diagram: {
      label: { en: "Knowledge Pipeline", de: "Wissens-Pipeline" },
      title: { en: "From Fundamental Numerics to Cloud Blueprints", de: "Von Grundlagen-Numerik bis zu Cloud-Blueprints" },
      intro: {
        en: "Progressive engineering depth: low-level numerical solvers expanding into vector search and enterprise cloud data pipelines.",
        de: "Fortschreitende Tiefe: von mathematischen Numerik-Lösern über Vektorsuche bis zu Enterprise Cloud Data Pipelines."
      },
      nodes: [
        { title: { en: "01. Numerical Algorithms", de: "01. Numerische Algorithmen" }, text: { en: "Linear systems, root finding, optimization & error analysis", de: "Lineare Systeme, Nullstellen, Optimierung & Fehleranalyse" } },
        { title: { en: "02. Classical AI & Graph Search", de: "02. Klassische KI & Graph-Suche" }, text: { en: "BFS, DFS, A* heuristics & graph data structures", de: "BFS, DFS, A* Heuristiken & Graph-Datenstrukturen" } },
        { title: { en: "03. Vector Retrieval & RAG", de: "03. Vektor-Retrieval & RAG" }, text: { en: "Embeddings, vector indexing & semantic search", de: "Embeddings, Vektor-Indexierung & Semantische Suche" } },
        { title: { en: "04. Cloud Data Warehouse", de: "04. Cloud Data Warehouse" }, text: { en: "Azure, Databricks Delta Lake & Snowflake pipelines", de: "Azure, Databricks Delta Lake & Snowflake Pipelines" } }
      ]
    },
    roadmapTitle: { en: "Ziele & Zukunftsperspektiven", de: "Ziele & Zukunftsperspektiven" },
    roadmap: [
      { title: "Schwerpunkt 1", status: { en: "Active", de: "Aktiv" }, text: { en: "Core numerical algorithms, linear system solvers, and classical AI graph search implementation.", de: "Implementierung von Numerik-Lösern, linearen Systemen und klassischer Graph-Suche." } },
      { title: "Schwerpunkt 2", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Lightweight vector indexing experiments, embedding storage, and RAG pipelines.", de: "Vektor-Indexierungs-Experimente, Embedding-Speicher & RAG-Pipelines." } },
      { title: "Schwerpunkt 3", status: { en: "Planned", de: "Geplant" }, text: { en: "Certified Azure Data Factory, Databricks Delta Lake & Snowflake deployment templates.", de: "Zertifizierte Azure Data Factory, Databricks Delta Lake & Snowflake Deployment-Templates." } }
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
      en: "An Electron desktop app and background sync utility aggregating fragmented Notion module databases into a single operational master table.",
      de: "Eine Electron Desktop-App und Hintergrund-Sync-Utility, die fragmentierte Notion-Datenbanken in eine zentrale Master-Tabelle zusammenführt."
    },
    contribution: {
      en: "Automation Engineer · System Tray Utility",
      de: "Automatisierungs-Ingenieur · System-Tray Tool"
    },
    status: "paused",
    aiAugmented: true,
    aiBadgeText: {
      en: "AI Agents & Knowledge Pipeline",
      de: "KI-Agenten & Wissens-Pipeline"
    },
    techStack: ["typescript", "electron", "nextjs", "postgres", "redis", "ai"],
    secondaryTechStack: [],
    tags: ["TypeScript", "Electron", "Node.js", "Notion API", "Workflow Automation"],
    href: "https://github.com/BytecodeBrewer/Notion-Sync",
    tone: "amber",
    signal: [24, 34, 42, 55, 47, 62, 74, 80],
    introduction: {
      en: "Notion Sync eliminates a persistent productivity hurdle: aggregating scattered Notion course and project databases into a central operational master table. Built with AI workflow assistance, it keeps records synchronized bidirectionally without manual transfers.",
      de: "Notion Sync löst ein typisches Produktivitätsproblem: das Zusammenführen getrennter Notion-Datenbanken in eine zentrale operative Master-Tabelle. Entwickelt mit KI-Unterstützung, hält es Datensätze bidirektional ohne manuelle Überträge synchron."
    },
    backgroundType: "heavy_workload",
    background: {
      en: "While Notion supports linked views, it lacks a native multi-database aggregation engine that maintains synchronized writeable entries across different tables. Notion Sync addresses this limitation by running a background tray poller with persistent local mapping.",
      de: "Notion bietet verknüpfte Ansichten, jedoch keine native Multi-Datenbank-Aggregations-Engine. Notion Sync schließt diese Lücke mit einem leise im Hintergrund laufenden System-Tray-Poller und lokaler Zustandsverwaltung."
    },
    storySections: [
      {
        eyebrow: { en: "Operational Problem", de: "Operative Hürde" },
        title: { en: "Fragmented Databases vs. Central Master View", de: "Fragmentierte DBs vs. Zentrale Master-Ansicht" },
        body: {
          en: "Managing tasks across multiple module tables requires constant context switching. Notion Sync mirrors entry updates bidirectionally into a single actionable overview.",
          de: "Das Verwalten von Aufgaben über verschiedene Modul-Tabellen führt zu ständigen Kontextwechseln. Notion Sync spiegelt Updates bidirektional in eine zentrale Übersicht."
        }
      },
      {
        eyebrow: { en: "Engineering Implementation", de: "Technische Umsetzung" },
        title: { en: "System Tray Daemon & Persistent Mapping", de: "System-Tray Daemon & Persistentes Mapping" },
        body: {
          en: "Packaged as an Electron tray application, the poller tracks page IDs and timestamps via local state files (%APPDATA%), preventing duplicate records during sync cycles.",
          de: "Als Electron Tray-App überwacht der Poller Eintrags-IDs und Zeitstempel über lokale Mapping-Dateien (%APPDATA%), um Duplikate zuverlässig zu vermeiden."
        }
      }
    ],
    diagram: {
      label: { en: "Sync Architecture", de: "Sync Architektur" },
      title: { en: "From Scattered Source Tables to Central Application", de: "Von mehreren Quell-Tabellen zur zentralen Anwendung" },
      intro: {
        en: "Source databases stream through local state mapping, schema guards, and background polling workers into the central master table.",
        de: "Quell-Datenbanken fließen über lokale Mapping-Dateien, Schema-Schutz und Hintergrund-Poller in die zentrale Master-Tabelle."
      },
      nodes: [
        { title: { en: "Source Module Databases", de: "Quell Modul-Datenbanken" }, text: { en: "Fragmented input tables across Notion workspaces", de: "Fragmentierte Eingabetabellen in Notion" } },
        { title: { en: "Polling Sync Daemon", de: "Polling Sync Daemon" }, text: { en: "Tracks modified timestamps & page revisions", de: "Überwacht Zeitstempel & Änderungen" } },
        { title: { en: "JSON State Mapping Guard", de: "JSON State-Mapping Schutz" }, text: { en: "Persists mapped item relation IDs in %APPDATA%", de: "Speichert ID-Zuordnungen in %APPDATA%" } },
        { title: { en: "Central Master Application", de: "Zentrale Master-Anwendung" }, text: { en: "Unified operational 'All Tasks' master view", de: "Zentrale operative 'All Tasks' Master-Ansicht" } }
      ]
    },
    roadmapTitle: { en: "Ziele & Zukunftsperspektiven", de: "Ziele & Zukunftsperspektiven" },
    roadmap: [
      { title: "Entwicklungsziel 1", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Advanced conflict resolution handling simultaneous edits between source and master tables.", de: "Erweiterte Konfliktlösung bei gleichzeitigen Bearbeitungen zwischen Quell- und Master-Tabelle." } },
      { title: "Entwicklungsziel 2", status: { en: "Planned", de: "Geplant" }, text: { en: "Migration of background sync polling to serverless cloud workers for desktop-independent operation.", de: "Migration des Sync-Pollers in Serverless Cloud Worker für plattformunabhängigen Betrieb." } }
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
      en: "A collaborative Linux system telemetry suite built in Go & TypeScript to monitor kernel memory, CPU load, and systemd daemons in real time.",
      de: "Eine kollaborative Linux-Systemtelemetrie-Suite in Go & TypeScript zur Überwachung von Kernel-Speicher, CPU-Last und systemd-Daemons."
    },
    contribution: {
      en: "Collaborative Systems Project · Lightweight Telemetry",
      de: "Kollaboratives System-Projekt · Leichtgewichtige Telemetrie"
    },
    status: "side-quest",
    aiAugmented: true,
    aiBadgeText: {
      en: "AI Agents & Telemetry Integration",
      de: "KI-Agenten & Telemetrie-Integration"
    },
    techStack: ["go", "typescript", "docker", "mcp", "ai"],
    secondaryTechStack: [],
    tags: ["Go", "TypeScript", "Docker", "Linux Telemetry", "MCP"],
    href: "https://github.com/BytecodeBrewer/SMART",
    tone: "violet",
    signal: [28, 40, 48, 43, 65, 58, 77, 84],
    introduction: {
      en: "SMART is a collaborative university project engineered to track Linux system health and daemon states with low CPU overhead. Built during computer science systems studies, it explores live AI integration, telemetry persistence, and deterministic testing.",
      de: "SMART ist ein kollaboratives Uni-Projekt zur Überwachung von Linux-Systemzuständen und Daemons bei minimaler CPU-Last. Es entstand im Informatikstudium, um KI-Integration in Live-Systemen und deterministische Testverfahren zu erforschen."
    },
    backgroundType: "academic",
    background: {
      en: "Developing reliable telemetry systems requires low-level kernel interaction. SMART was created to master Linux process calls, containerized telemetry daemons, and persistent metric caching for reproducible diagnostic evaluations.",
      de: "Zuverlässige Telemetriesysteme erfordern direkten Kernel-Zugriff. SMART wurde entwickelt, um Linux-Prozessaufrufe, containerisierte Telemetrie-Daemons und Metrik-Caching für reproduzierbare Tests zu vertiefen."
    },
    storySections: [
      {
        eyebrow: { en: "Telemetry Core", de: "Telemetrie-Kern" },
        title: { en: "Low-Overhead Daemon & Live Metric Capture", de: "Leichtgewichtiger Daemon & Live-Metriken" },
        body: {
          en: "Captures system memory allocations, CPU load averages, and daemon statuses without creating resource spikes.",
          de: "Erfasst Speicherbelegung, CPU-Last und Daemon-Zustände ohne spürbare Systembelastung."
        }
      },
      {
        eyebrow: { en: "Live AI Integration", de: "Live KI-Integration" },
        title: { en: "Telemetry Analysis & Deterministic Diagnostics", de: "Telemetrie-Analyse & Deterministische Diagnose" },
        body: {
          en: "Connects raw telemetry logs with AI monitoring agents to evaluate system health trends while caching metrics for reproducible diagnostic testing.",
          de: "Verbindet Telemetrie-Logs mit KI-Agenten zur Analyse von Systemzuständen und speichert Metriken für deterministische Tests."
        }
      }
    ],
    diagram: {
      label: { en: "Telemetry Architecture", de: "Telemetrie Architektur" },
      title: { en: "From Kernel Metrics to Real-Time Telemetry HUD", de: "Von Kernel-Metriken zum Realtime Telemetrie HUD" },
      intro: {
        en: "Low-overhead collection loop polling systemd daemons and Linux kernel metrics.",
        de: "Minimalistische Abfrageschleife für systemd-Daemons und Linux-Kernel-Metriken."
      },
      nodes: [
        { title: { en: "Linux Kernel Metrics", de: "Linux-Kernel-Metriken" }, text: { en: "Reads /proc metrics, CPU load & memory allocation", de: "Liest /proc Metriken, CPU-Last & RAM-Belegung" } },
        { title: { en: "Go Telemetry Daemon", de: "Go Telemetrie Daemon" }, text: { en: "High-speed metric collector & log formatter", de: "Schneller Metrik-Sammler & Log-Formatter" } },
        { title: { en: "Terminal HUD & AI Gateway", de: "Terminal HUD & KI-Gateway" }, text: { en: "Displays system HUD & streams logs to AI analyzer", de: "Zeigt System-HUD & leitet Logs an KI-Analyse weiter" } }
      ]
    },
    roadmapTitle: { en: "Ziele & Zukunftsperspektiven", de: "Ziele & Zukunftsperspektiven" },
    roadmap: [
      { title: "Meilenstein 1", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Core metric collection daemon in Go with systemd integration.", de: "Kern-Metrik-Sammler in Go mit systemd Integration." } },
      { title: "Meilenstein 2", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Terminal HUD display, log output formatter, and MCP protocol integration.", de: "Terminal-HUD, Log-Formatter und MCP-Protokoll-Integration." } },
      { title: "Meilenstein 3", status: { en: "Planned", de: "Geplant" }, text: { en: "Multi-node gRPC telemetry aggregation across distributed Linux server instances.", de: "Multi-Node gRPC-Telemetrie-Aggregation über verteilte Linux-Server." } }
    ]
  }
];

export const projects = defaultProjects;

export function getProject(slug: string, customProjects?: Project[]) {
  const list = customProjects ?? defaultProjects;
  return list.find((project) => project.slug === slug);
}
