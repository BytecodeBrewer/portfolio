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
  | "fastapi"
  | "postgres"
  | "supabase"
  | "vercel"
  | "aws"
  | "electron"
  | "duckdb"
  | "java"
  | "cpp"
  | "html"
  | "css"
  | "js"
  | "git"
  | "vscode"
  | "claudecode"
  | "codex"
  | "githubactions"
  | "nodejs";

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
      en: "Market Analytics & Financial Strategy Backtesting Pipeline",
      de: "Markt-Analyse & Finanzstrategie Backtesting Pipeline"
    },
    classification: {
      en: "Collaborative Learning Project",
      de: "Kollaboratives Lernprojekt"
    },
    summary: {
      en: "A collaborative financial engineering platform to analyze FX rates, develop quantitative trading strategies, execute historical backtests, and monitor live volatility risks.",
      de: "Eine kollaborative Finanz-Engineering-Plattform zur FX-Datenanalyse, Entwicklung quantitativer Handelsstrategien, Durchführen historischer Backtests und Überwachung von Volatilitätsrisiken."
    },
    contribution: {
      en: "Collaborative Side-Quest · Financial Data & Strategy Analytics",
      de: "Kollaboratives Side-Quest · Finanzdaten & Strategie-Analyse"
    },
    status: "active",
    aiAugmented: false,
    techStack: ["python", "django", "fastapi", "postgres"],
    secondaryTechStack: [],
    tags: ["Python", "Django", "FastAPI", "PostgreSQL"],
    href: "https://github.com/BytecodeBrewer/ARGUS",
    tone: "cyan",
    signal: [32, 44, 38, 57, 52, 73, 68, 88],
    introduction: {
      en: "ARGUS is a collaborative financial analytics and backtesting framework built to ingest, validate, and analyze market data without expensive enterprise terminals. It serves as an open research harness for quantitative strategy development, risk scoring, and automated alerts.",
      de: "ARGUS ist ein kollaboratives Finanzanalyse- und Backtesting-Framework zur Erfassung, Validierung und Auswertung von Marktdaten ohne teure Terminal-Software. Es dient als offene Forschungsplattform für quantitative Handelsstrategien, Risiko-Scoring und automatisierte Alerts."
    },
    backgroundType: "proof_of_work",
    background: {
      en: "Financial analytics systems often hide calculation logic behind proprietary black boxes. ARGUS was launched as a collaborative learning project to master end-to-end data processing, strict Pydantic validation, vectorized volatility metrics, historical backtesting, and rule-based risk triggers from first principles.",
      de: "Finanzanalyse-Systeme verbergen Berechnungen oft hinter proprietären Black-Boxes. ARGUS wurde als kollaboratives Lernprojekt ins Leben gerufen, um tiefgründige Datenverarbeitung, strikte Pydantic-Schema-Validierung, vektorisierte Volatilitätsmetriken, historisches Backtesting und regelbasierte Risk-Trigger grundlegend zu entwickeln."
    },
    storySections: [
      {
        eyebrow: { en: "Architecture", de: "Architektur" },
        title: { en: "Modular Ingestion & Analytical Engine", de: "Modulare Ingestion & Analyse-Engine" },
        body: {
          en: "Data collectors, schema validators, and strategy computation layers are strictly separated. Ingestion modules validate API payloads before passing sanitized dataframes to analytical downstream workers.",
          de: "Data Collector, Schema-Validatoren und Strategie-Berechnungslayer sind strikt getrennt. Ingestion-Module validieren API-Payloads, bevor bereinigte Dataframes an Analyse-Worker übergeben werden."
        }
      },
      {
        eyebrow: { en: "Strategy & Risk", de: "Strategie & Risiko" },
        title: { en: "Volatility Signals & Strategy Backtesting", de: "Volatilitätssignale & Strategie-Backtesting" },
        body: {
          en: "Calculates rolling moving averages, variance spikes, and market spread deviations. Backtesting runs evaluate trading strategies against market history before deploying paper trading sandboxes.",
          de: "Berechnet gleitende Durchschnitte, Varianzspitzen und Spreads. Backtesting-Läufe evaluieren Handelsstrategien an historischen Daten vor dem Test in Paper-Trading-Umgebungen."
        }
      }
    ],
    diagram: {
      label: { en: "Data Engineering Flow", de: "Data Engineering Ablauf" },
      title: { en: "From Ticker Ingestion to Strategy Backtesting & Alerting", de: "Vom Ticker-Import zum Strategie-Backtesting & Alerting" },
      intro: {
        en: "Market data streams sequentially through currency fetchers, Pydantic validation, strategy backtesting routines, and risk alert sinks.",
        de: "Finanzdaten fließen sequenziell durch Ingestion-Fetcher, Pydantic-Validierung, Strategie-Backtesting-Routinen und Risiko-Alert-Sinks."
      },
      nodes: [
        { title: { en: "FX & Ticker Ingestion", de: "FX & Ticker Ingestion" }, text: { en: "Ingest live FX rates & historical market feeds", de: "Import von Live-Devisen & historischen Marktdaten" } },
        { title: { en: "Pydantic Schema Guard", de: "Pydantic Schema-Schutz" }, text: { en: "Validates rate types & interpolates gaps", de: "Validiert Kurstypen & interpoliert Lücken" } },
        { title: { en: "Vectorized Analytics & Backtesting", de: "Vektorisierte Analyse & Backtesting" }, text: { en: "Evaluates trading rules & calculates drawdown metrics", de: "Prüft Regelwerke & berechnet Drawdown-Metriken" } },
        { title: { en: "Persistent PostgreSQL Storage", de: "Persistenter PostgreSQL Speicher" }, text: { en: "Stores historical trends & dispatches volatility alerts", de: "Speichert Trends & löst präzise Alerts aus" } }
      ]
    },
    roadmapTitle: { en: "Sprint Roadmap & Entwicklungsfortschritt", de: "Sprint Roadmap & Development Progress" },
    roadmap: [
      { title: "Sprint 1: Architecture Core", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Modular pipeline architecture, live FX conversion, Tkinter testing harness & pytest suite.", de: "Modulare Pipeline-Architektur, Live-FX-Umrechnung, Tkinter Test-Harness & Pytest-Suite." } },
      { title: "Sprint 2: Historical Analytics", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Historical market ingestion, rolling volatility metrics & vectorized trend calculations.", de: "Historische Markt-Ingestion, Volatilitätsmetriken & vektorisierte Trendberechnungen." } },
      { title: "Sprint 3: Persistence & Automation", status: { en: "Planned", de: "Geplant" }, text: { en: "Persistent PostgreSQL database schema, automated batch schedules & alert webhooks.", de: "Persistente PostgreSQL-Datenbank, Batch-Schedules & Webhook-Alerts." } },
      { title: "Sprint 4: Strategy Backtesting Engine", status: { en: "Planned", de: "Geplant" }, text: { en: "Backtesting module to simulate historical trading strategies, drawdowns & risk scores.", de: "Backtesting-Modul zur Simulation historischer Handelsstrategien & Drawdowns." } },
      { title: "Sprint 5: Paper Trading Sandbox", status: { en: "Planned", de: "Geplant" }, text: { en: "Paper trading environment for risk-free strategy evaluation with live telemetry.", de: "Paper-Trading-Umgebung zur risikofreien Strategiebewertung mit Live-Telemetrie." } }
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
      en: "Supported by Agentic Workflows & AI Agents",
      de: "Unterstützt durch Agentic Workflows & KI-Agenten"
    },
    isPrivateRepo: true,
    techStack: ["python", "supabase", "postgres", "vercel"],
    secondaryTechStack: [],
    tags: ["Python", "Supabase", "PostgreSQL", "Vercel"],
    tone: "green",
    signal: [26, 35, 46, 42, 59, 66, 73, 91],
    introduction: {
      en: "Q-Bet is a quantitative calculation engine engineered to capture spreads in inefficient markets. Manual calculations are slow and mathematically error-prone. Q-Bet automates odds synchronization, applies quantitative models, and enforces strict capital protection constraints.",
      de: "Q-Bet ist eine quantitative Berechnungs-Engine zur Eroberung ineffizienter Märkte. Händische Berechnungen sind zeitaufwendig und fehleranfällig. Q-Bet automatisiert die Quoten-Synchronisation, wendet Quant-Modelle an und erzwingt strikte Kapital-Limits."
    },
    backgroundType: "market_gap",
    background: {
      en: "Market odds and arbitrage opportunities fluctuate in seconds. Manual stake calculations lead to execution delays and financial errors. Q-Bet treats market odds as strictly typed domain schemas, calculates optimal stake allocations, and enforces risk boundaries automatically.",
      de: "Wettmärkte und Arbitrage-Gelegenheiten ändern sich in Sekundenschnelle. Händisches Nachrechnen führt zu Verzögerungen und Fehlern. Q-Bet behandelt Marktquoten als streng typisierte Datenstrukturen, berechnet optimale Einsätze und steuert das Risiko automatisiert."
    },
    storySections: [
      {
        eyebrow: { en: "Calculation Core", de: "Berechnungs-Kern" },
        title: { en: "Typed Domain Schemas & Speed Optimization", de: "Typisierte Domain-Schemas & Speed-Optimierung" },
        body: {
          en: "Every market offer, bookmaker spread, and liquidity window is parsed into Pydantic domain schemas before mathematical evaluation occurs.",
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
      title: { en: "From Odds Synchronization to Risk Control", de: "Von der Quoten-Synchronisation zur Risikofreigabe" },
      intro: {
        en: "Live bookmaker odds are collected, normalized, passed to the math engine, and evaluated against strict exposure caps.",
        de: "Live-Quoten werden erfasst, normalisiert, von der Mathe-Engine berechnet und gegen strenge Risikolimits evaluiert."
      },
      nodes: [
        { title: { en: "Odds Collector Ingestion", de: "Quoten-Collector Ingestion" }, text: { en: "Automated collectors sync live market feeds", de: "Automatische Collector synchronisieren Live-Quoten" } },
        { title: { en: "Pydantic Domain Validation", de: "Pydantic Domain-Validierung" }, text: { en: "Strict validation of odds & liquidity limits", de: "Strikte Validierung von Spreads & Einsatzgrenzen" } },
        { title: { en: "EV & Dutch Math Engine", de: "EV & Dutch Mathe-Engine" }, text: { en: "Calculates optimal stake distributions & ROI", de: "Berechnet optimale Einsatzverteilungen & ROI" } },
        { title: { en: "Supabase Capital Gateway", de: "Supabase Kapital-Gateway" }, text: { en: "Enforces lockup limits & approves execution", de: "Erzwingt Liquiditätsgrenzen & schaltet Trades frei" } }
      ]
    },
    roadmapTitle: { en: "Entwicklungsstufen & Systemfortschritt", de: "Development Stages & System Progress" },
    roadmap: [
      { title: "Entwicklungsstufe 1: Math Engine", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Core Pydantic domain models, arbitrage math engine & comprehensive calculation unit tests.", de: "Pydantic-Domainmodelle, Arbitrage-Mathe-Engine & umfassende Berechnungs-Tests." } },
      { title: "Entwicklungsstufe 2: Pipeline Automation", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Matched betting, free-bet optimization algorithms & automated odds collector pipelines.", de: "Matched-Betting, Free-Bet-Optimierung & automatisierte Quoten-Collector-Pipelines." } },
      { title: "Entwicklungsstufe 3: Live Telemetry", status: { en: "Planned", de: "Geplant" }, text: { en: "Cloud web dashboard with live telemetry, automated portfolio tracking & risk execution controls.", de: "Cloud Web-Dashboard mit Live-Telemetrie, Portfolio-Tracking & Risiko-Steuerung." } }
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
      en: "Supported by Agentic Workflows & AI Agents",
      de: "Unterstützt durch Agentic Workflows & KI-Agenten"
    },
    techStack: ["python", "docker", "fastapi", "postgres"],
    secondaryTechStack: [],
    tags: ["Python", "Docker", "FastAPI", "PostgreSQL"],
    href: "https://github.com/BytecodeBrewer/MAS",
    tone: "emerald",
    signal: [20, 38, 55, 62, 78, 85, 92, 98],
    introduction: {
      en: "MAS is a custom multi-agent orchestration tool designed to process multi-file refactoring tasks without vendor lock-in or recurring SaaS API costs. It provides full control over context parsing and offloads heavy compute to on-demand RunPod cloud GPUs or local LLM instances.",
      de: "MAS ist ein persönliches Multi-Agenten-Tool für vielschichtige Refactoring-Aufgaben – ohne Unerwartete SaaS-Kosten oder Abhängigkeiten. Es bietet volle Kontrolle über den Kontext und lagert schwere Rechenlasten auf RunPod-GPUs oder lokale LLMs aus."
    },
    backgroundType: "heavy_workload",
    background: {
      en: "Commercial AI coding tools struggle with full-repository context graphs and generate high monthly subscription bills. MAS solves this by deploying specialized worker bots that analyze dependency trees, execute code transformations, run local test suites, and commit clean feature branches.",
      de: "Kommerzielle KI-Tools stoßen bei großen Kontext-Graphen schnell an Leistungsgrenzen und erzeugen hohe Monatskosten. MAS löst dies durch spezialisierte Worker-Bots, die Abhängigkeitsbäume analysieren, Code transformieren, Tests ausführen und Git-Branches erstellen."
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
        { title: { en: "Worker Execution (Docker / vLLM)", de: "Worker-Ausführung (Docker / vLLM)" }, text: { en: "Worker bot implements multi-file changes in container", de: "Worker-Bot setzt Dateiänderungen im Container um" } },
        { title: { en: "Automated Test & Git Commit", de: "Automatisierter Test & Git Commit" }, text: { en: "Executes test suite & commits clean git branch", de: "Führt Testsuite aus & erstellt sauberen Git-Branch" } }
      ]
    },
    roadmapTitle: { en: "Meilensteine & Systemfortschritt", de: "Milestones & System Progress" },
    roadmap: [
      { title: "Meilenstein 1: Agent Core", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Terminal client interface, local repository context parser & autonomous agent tool loop.", de: "Terminal-Client, lokaler Datei-Parser & autonome Agenten-Werkzeugschleife." } },
      { title: "Meilenstein 2: GPU Offloading", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Dynamic spin-up of cost-effective RunPod GPU workers for heavy contextual refactorings.", de: "Dynamisches Starten günstiger RunPod GPU-Worker für schwere Refactoring-Passes." } },
      { title: "Meilenstein 3: Local vLLM Pooling", status: { en: "Planned", de: "Geplant" }, text: { en: "Local vLLM pooling integration for zero external API costs during extended coding runs.", de: "Lokale vLLM-Pooling-Integration für absolut kostenfreie Offline-Coding-Sessions." } }
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
      en: "A personal research repository implementing numerical algorithms, classical AI search, RAG vector retrieval, and data architecture patterns from scratch.",
      de: "Ein persönliches Forschungs-Repo für selbstgeschriebene Numerik-Algorithmen, klassische KI-Suche, RAG Vektor-Retrieval und Datenarchitekturen."
    },
    contribution: {
      en: "Personal Research & Proof of Work · Deep Fundamentals",
      de: "Persönliches Forschungs-Repo · Fundament & Proof of Work"
    },
    status: "active",
    aiAugmented: false,
    techStack: ["python", "duckdb", "postgres"],
    secondaryTechStack: [],
    tags: ["Python", "DuckDB", "PostgreSQL"],
    href: "https://github.com/BytecodeBrewer/Data-Lab",
    tone: "blue",
    signal: [30, 45, 60, 70, 82, 88, 94, 99],
    introduction: {
      en: "Data Lab is a single-developer learning repository designed to master data engineering fundamentals from first principles. Rather than relying on high-level wrappers, it implements numerical solvers, graph search algorithms, vector embeddings, and database blueprints directly in Python.",
      de: "Data Lab ist ein persönliches Lernprojekt zur Vertiefung von Data-Engineering-Grundlagen. Statt sich auf fertige Frameworks zu verlassen, werden numerische Verfahren, Graphsuche, Vektor-Retrieval und Datenbank-Blueprints von Grund auf selbst entwickelt."
    },
    backgroundType: "proof_of_work",
    background: {
      en: "Solid engineering requires understanding how algorithms operate under the hood. Data Lab houses custom implementations of numerical solvers, classical AI search (BFS, DFS, A*), RAG vector indexing, and analytical DuckDB/PostgreSQL architectures.",
      de: "Fundiertes Engineering erfordert tiefes Verständnis der mathematischen Grundlagen. Data Lab vereint selbst entwickelte Numerik-Löser, klassische KI-Suche (BFS, DFS, A*), RAG-Indexierung sowie analytische DuckDB- & PostgreSQL-Muster."
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
        eyebrow: { en: "Data Engineering", de: "Data Engineering" },
        title: { en: "Analytical Data Patterns with DuckDB", de: "Analytische Datenmuster mit DuckDB" },
        body: {
          en: "Translates core algorithms into analytical processing patterns and fast in-memory query pipelines using DuckDB and PostgreSQL.",
          de: "Übersetzt Grundlagen-Algorithmen in schnelle In-Memory-Abfrage-Pipelines und analytische Datenmuster mit DuckDB und PostgreSQL."
        }
      }
    ],
    diagram: {
      label: { en: "Knowledge Pipeline", de: "Wissens-Pipeline" },
      title: { en: "From Fundamental Numerics to Analytics Blueprints", de: "Von Grundlagen-Numerik bis zu Analytik-Blueprints" },
      intro: {
        en: "Progressive engineering depth: low-level numerical solvers expanding into vector search and analytical DuckDB queries.",
        de: "Fortschreitende Tiefe: von mathematischen Numerik-Lösern über Vektorsuche bis zu analytischen DuckDB-Pipelines."
      },
      nodes: [
        { title: { en: "01. Numerical Algorithms", de: "01. Numerische Algorithmen" }, text: { en: "Linear systems, root finding, optimization & error analysis", de: "Lineare Systeme, Nullstellen, Optimierung & Fehleranalyse" } },
        { title: { en: "02. Classical AI & Graph Search", de: "02. Klassische KI & Graph-Suche" }, text: { en: "BFS, DFS, A* heuristics & graph data structures", de: "BFS, DFS, A* Heuristiken & Graph-Datenstrukturen" } },
        { title: { en: "03. Vector Retrieval & RAG", de: "03. Vektor-Retrieval & RAG" }, text: { en: "Embeddings, vector indexing & semantic search", de: "Embeddings, Vektor-Indexierung & Semantische Suche" } },
        { title: { en: "04. Analytical Pipeline Blueprints", de: "04. Analytische Pipeline-Blueprints" }, text: { en: "DuckDB & PostgreSQL query architecture patterns", de: "DuckDB & PostgreSQL Abfrage-Architekturmuster" } }
      ]
    },
    roadmapTitle: { en: "Zukunftsperspektiven & Forschungsschwerpunkte", de: "Future Perspectives & Research Focus" },
    roadmap: [
      { title: "Forschungsschwerpunkt 1: Numerik", status: { en: "Active", de: "Aktiv" }, text: { en: "Core numerical algorithms, linear system solvers, and classical AI graph search implementation.", de: "Implementierung von Numerik-Lösern, linearen Systemen und klassischer Graph-Suche." } },
      { title: "Forschungsschwerpunkt 2: Vektorsuche", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Lightweight vector indexing experiments, embedding storage, and RAG pipelines.", de: "Vektor-Indexierungs-Experimente, Embedding-Speicher & RAG-Pipelines." } },
      { title: "Forschungsschwerpunkt 3: DuckDB Pipelines", status: { en: "Planned", de: "Geplant" }, text: { en: "High-performance analytical pipeline templates with DuckDB & PostgreSQL.", de: "High-Performance Analytik-Pipelines mit DuckDB & PostgreSQL." } }
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
      en: "Supported by Agentic Workflows & AI Agents",
      de: "Unterstützt durch Agentic Workflows & KI-Agenten"
    },
    techStack: ["typescript", "electron", "postgres"],
    secondaryTechStack: [],
    tags: ["TypeScript", "Electron", "PostgreSQL"],
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
    roadmapTitle: { en: "Zukunftsperspektiven & Entwicklungsfokus", de: "Future Perspectives & Development Focus" },
    roadmap: [
      { title: "Entwicklungsfokus 1: Conflict Management", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Advanced conflict resolution handling simultaneous edits between source and master tables.", de: "Erweiterte Konfliktlösung bei gleichzeitigen Bearbeitungen zwischen Quell- und Master-Tabelle." } },
      { title: "Entwicklungsfokus 2: Serverless Sync Daemon", status: { en: "Planned", de: "Geplant" }, text: { en: "Migration of background sync polling to serverless cloud workers for desktop-independent operation.", de: "Migration des Sync-Pollers in Serverless Cloud Worker für plattformunabhängigen Betrieb." } }
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
      en: "A collaborative Linux system telemetry suite built in Go & TypeScript to monitor kernel memory, CPU load, and systemd daemons in real time with AWS cloud integration.",
      de: "Eine kollaborative Linux-Systemtelemetrie-Suite in Go & TypeScript zur Echtzeit-Überwachung von Kernel-Speicher, CPU-Last und systemd-Daemons mit AWS Cloud-Anbindung."
    },
    contribution: {
      en: "Collaborative University Project · Personal Focus: AWS Infrastructure & Docker Integration",
      de: "Kollaboratives Uni-Projekt · Persönlicher Fokus: AWS Infrastructure & Docker Integration"
    },
    status: "side-quest",
    aiAugmented: true,
    aiBadgeText: {
      en: "Supported by Agentic Workflows & AI Agents",
      de: "Unterstützt durch Agentic Workflows & KI-Agenten"
    },
    techStack: ["go", "typescript", "docker", "aws"],
    secondaryTechStack: [],
    tags: ["Go", "TypeScript", "Docker", "AWS"],
    href: "https://github.com/BytecodeBrewer/SMART",
    tone: "violet",
    signal: [28, 40, 48, 43, 65, 58, 77, 84],
    introduction: {
      en: "SMART is a collaborative university project engineered to track Linux system health and daemon states with low CPU overhead. Built during computer science systems studies, it explores containerized telemetry daemons and AWS cloud metric storage.",
      de: "SMART ist ein kollaboratives Uni-Projekt zur Überwachung von Linux-Systemzuständen und Daemons bei minimaler CPU-Last. Es entstand im Informatikstudium zur Erforschung von containerisierten Telemetrie-Daemons und AWS Cloud-Metrikspeicherung."
    },
    backgroundType: "academic",
    background: {
      en: "Developing reliable telemetry systems requires low-level kernel interaction. SMART was created in a university team to master Linux process calls, containerized telemetry daemons, and cloud metric gateways for reproducible diagnostic evaluations.",
      de: "Zuverlässige Telemetriesysteme erfordern direkten Kernel-Zugriff. SMART wurde im Uniteam entwickelt, um Linux-Prozessaufrufe, containerisierte Telemetrie-Daemons und Cloud-Metrik-Gateways für reproduzierbare Tests zu vertiefen."
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
        eyebrow: { en: "Cloud Gateway", de: "Cloud Gateway" },
        title: { en: "AWS Infrastructure & Telemetry Gateway", de: "AWS Infrastruktur & Telemetrie-Gateway" },
        body: {
          en: "Connects raw telemetry logs with automated diagnostic pipelines and persists metric streams onto AWS Cloud infrastructure.",
          de: "Verbindet Telemetrie-Logs mit automatisierten Analyse-Pipelines und sichert Metrik-Streams in der AWS Cloud."
        }
      }
    ],
    diagram: {
      label: { en: "Telemetry Architecture", de: "Telemetrie Architektur" },
      title: { en: "From Kernel Metrics to AWS Cloud", de: "Von Kernel-Metriken zur AWS Cloud" },
      intro: {
        en: "Low-overhead collection loop polling systemd daemons, streaming data to AWS Cloud analyzers.",
        de: "Minimalistische Abfrageschleife für systemd-Daemons mit Daten-Streaming in die AWS Cloud."
      },
      nodes: [
        { title: { en: "Linux Kernel Metrics", de: "Linux-Kernel-Metriken" }, text: { en: "Reads /proc metrics, CPU load & memory allocation", de: "Liest /proc Metriken, CPU-Last & RAM-Belegung" } },
        { title: { en: "Go Telemetry Daemon", de: "Go Telemetrie Daemon" }, text: { en: "High-speed metric collector & log formatter", de: "Schneller Metrik-Sammler & Log-Formatter" } },
        { title: { en: "Docker & AWS Cloud Gateway", de: "Docker & AWS Cloud Gateway" }, text: { en: "Containerized telemetry daemon pushing logs to AWS", de: "Containerisierter Daemon überträgt Logs zu AWS" } },
        { title: { en: "Telemetry Analytics Gateway", de: "Telemetrie-Analyse Gateway" }, text: { en: "Streams telemetry logs to cloud analysis dashboards", de: "Leitet Telemetrie-Logs an Cloud-Analyse-Dashboards weiter" } }
      ]
    },
    roadmapTitle: { en: "Universitäre Sprints & Systemfortschritt", de: "University Sprints & System Progress" },
    roadmap: [
      { title: "Sprint 1: Go Collector Daemon", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "Core metric collection daemon in Go with systemd integration.", de: "Kern-Metrik-Sammler in Go mit systemd Integration." } },
      { title: "Sprint 2: Terminal HUD Display", status: { en: "Completed", de: "Abgeschlossen" }, text: { en: "CLI/Terminal HUD display and log output formatting routines.", de: "Terminal-HUD Anzeige und Log-Formatierungs-Routinen." } },
      { title: "Sprint 3: Docker & AWS Integration", status: { en: "In Progress", de: "In Arbeit" }, text: { en: "Containerization with Docker & AWS cloud telemetry gateway integration.", de: "Containerisierung mit Docker & AWS Cloud Gateway-Anbindung." } },
      { title: "Sprint 4: Multi-Node gRPC Aggregation", status: { en: "Planned", de: "Geplant" }, text: { en: "Multi-node gRPC telemetry aggregation across distributed Linux server instances.", de: "Multi-Node gRPC-Telemetrie-Aggregation über verteilte Linux-Server." } }
    ]
  }
];

export const projects = defaultProjects;

export function getProject(slug: string, customProjects?: Project[]) {
  const list = customProjects ?? defaultProjects;
  return list.find((project) => project.slug === slug);
}
