"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AdminModal } from "./components/AdminModal";
import { AmbientCanvas } from "./components/AmbientCanvas";
import { LanguageToggle } from "./components/LanguageToggle";
import { TechIconBadge } from "./components/TechIcon";
import { useLanguage } from "./context/LanguageContext";
import { Project, defaultProjects } from "./projects";

function StatusBadge({ status }: { status: Project["status"] }) {
  const { lang } = useLanguage();

  const labels = {
    active: { en: "Active", de: "Aktiv" },
    paused: { en: "Paused", de: "Pausiert" },
    "side-quest": { en: "Side-Quest", de: "Nebenbei (Side-Quest)" },
  };

  const colors = {
    active: "bg-emerald-500/15 text-emerald-400 border-emerald-500/40",
    paused: "bg-slate-800 text-slate-400 border-slate-700",
    "side-quest": "bg-amber-500/15 text-amber-400 border-amber-500/40",
  };

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold border ${colors[status]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {labels[status][lang]}
    </span>
  );
}

function AiBadge({ text, aiAugmented }: { text?: { en: string; de: string }; aiAugmented?: boolean }) {
  const { lang } = useLanguage();
  if (!aiAugmented) return null;

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 shadow-sm"
      title="Agentic & AI-assisted development workflow"
    >
      <span>{text ? text[lang] : "⚡ AI-Augmented"}</span>
    </span>
  );
}

function ProjectMark({ slug }: { slug: string }) {
  if (slug === "argus") return <AmbientCanvas variant="etl" className="h-16 w-32 rounded-lg opacity-80" />;
  if (slug === "q-bet") return <AmbientCanvas variant="quant" className="h-16 w-32 rounded-lg opacity-80" />;
  if (slug === "mas") return <AmbientCanvas variant="agent" className="h-16 w-32 rounded-lg opacity-80" />;
  if (slug === "data-lab") return <AmbientCanvas variant="lab" className="h-16 w-32 rounded-lg opacity-80" />;
  if (slug === "notion-sync") return <AmbientCanvas variant="etl" className="h-16 w-32 rounded-lg opacity-80" />;
  return <AmbientCanvas variant="agent" className="h-16 w-32 rounded-lg opacity-80" />;
}

export default function Home() {
  const { lang, t } = useLanguage();
  const [projectList, setProjectList] = useState<Project[]>(defaultProjects);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_projects_override");
    if (saved) {
      try {
        setProjectList(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved project state", e);
      }
    }
  }, []);

  const handleProjectsChange = (updated: Project[]) => {
    setProjectList(updated);
    localStorage.setItem("portfolio_projects_override", JSON.stringify(updated));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      <AdminModal projects={projectList} onProjectsChange={handleProjectsChange} />

      {/* Header Nav */}
      <header className="nav shell flex items-center justify-between py-5 border-b border-slate-900 sticky top-0 bg-slate-950/90 backdrop-blur-md z-40">
        <Link className="wordmark text-lg font-bold font-mono tracking-tight text-white hover:text-cyan-400 transition-colors" href="/">
          LB<span className="text-cyan-400">/data</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-300" aria-label="Main navigation">
          <a href="#work" className="hover:text-cyan-400 transition-colors">{t({ en: "Projects", de: "Projekte" })}</a>
          <a href="#approach" className="hover:text-cyan-400 transition-colors">{t({ en: "Approach", de: "Ansatz" })}</a>
          <a href="#footer-links" className="hover:text-cyan-400 transition-colors">{t({ en: "Contact & Socials", de: "Kontakt & Socials" })}</a>
          <LanguageToggle />
          <a
            className="nav-cta px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs border border-slate-700 transition-all shadow-sm"
            href="https://github.com/BytecodeBrewer"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero shell py-16 md:py-24 space-y-10" id="top">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          {t({
            en: "Informatics · Data Engineering · Autonomous Systems",
            de: "Informatik · Data Engineering · Autonome Systeme"
          })}
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {t({
              en: "Turn messy data streams into ",
              de: "Verwandle ungeordnete Datenströme in "
            })}
            <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              {t({ en: "bulletproof systems.", de: "kugelsichere Systeme." })}
            </em>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            {t({
              en: "I’m Lev, an Informatics student in Leipzig engineering data pipelines, quantitative engines, and cost-effective multi-agent workflows. Dry humor, structured discipline, zero fluff.",
              de: "Ich bin Lev, Informatikstudent in Leipzig. Ich baue Data-Pipelines, Quant-Engines und kosteneffiziente Multi-Agenten-Systeme. Trockener Humor, klares Systemverständnis, kein Blabla."
            })}
          </p>
        </div>

        {/* Jules-inspired ambient canvas in Hero */}
        <div className="relative w-full h-32 md:h-40 rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-inner">
          <AmbientCanvas variant="etl" className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-4 left-6 flex items-center gap-6 font-mono text-xs text-slate-400">
            <div><b className="text-cyan-400 font-normal">INGEST:</b> APIs · Files · Realtime Market Odds</div>
            <div><b className="text-indigo-400 font-normal">TRANSFORM:</b> Vectorized Pandas · Pydantic Schemas</div>
            <div><b className="text-emerald-400 font-normal">EXECUTE:</b> Controlled Pipelines & Agents</div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="work shell py-12 space-y-10" id="work">
        <div className="flex items-center justify-between border-b border-slate-900 pb-4">
          <div>
            <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{t({ en: "Selected Work", de: "Ausgewählte Arbeiten" })}</p>
            <h2 className="text-2xl font-bold text-white tracking-tight">{t({ en: "Engineered Repositories", de: "Entwickelte Repositories" })}</h2>
          </div>
          <span className="text-xs font-mono text-slate-500">
            {t({ en: "Press Ctrl + Shift + A for Admin Panel", de: "Drücke Ctrl + Shift + A fürs Admin-Panel" })}
          </span>
        </div>

        <div className="space-y-8">
          {projectList.map((project) => (
            <article
              key={project.slug}
              className={`project group relative p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs font-mono font-bold text-cyan-400">{project.index}</span>
                    <StatusBadge status={project.status} />
                    <AiBadge text={project.aiBadgeText} aiAugmented={project.aiAugmented} />
                  </div>

                  <div>
                    <p className="text-xs font-mono text-slate-400">{project.label[lang]}</p>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {project.summary[lang]}
                  </p>

                  <p className="text-xs font-mono text-slate-400">
                    {project.contribution[lang]}
                  </p>

                  {/* Tech stack icons row */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <TechIconBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between gap-6 shrink-0">
                  <ProjectMark slug={project.slug} />

                  <div className="flex items-center gap-3 font-mono text-xs pt-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all shadow-md shadow-cyan-600/20"
                    >
                      {t({ en: "Open Case Study →", de: "Case Study Öffnen →" })}
                    </Link>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                    >
                      {t({ en: "Repo ↗", de: "Repo ↗" })}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach shell py-16 space-y-10" id="approach">
        <div className="border-b border-slate-900 pb-4">
          <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest">{t({ en: "Engineering Discipline", de: "Ingenieursprinzipien" })}</p>
          <h2 className="text-2xl font-bold text-white tracking-tight">{t({ en: "How I Frame Projects", de: "Wie ich Projekte angehe" })}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-cyan-400 font-bold">01</span>
            <h3 className="text-lg font-bold text-white">{t({ en: "Domain First", de: "Domain Zuerst" })}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t({
                en: "Model risks, EV, data schemas, and mathematical constraints in strict code objects before running heavy compute or risky trades.",
                de: "Modelliere Risiken, EV, Schemas und mathematische Schranken in klarem Code, bevor schweres Compute gestartet wird."
              })}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-indigo-400 font-bold">02</span>
            <h3 className="text-lg font-bold text-white">{t({ en: "Cost & Token Efficiency", de: "Kosten- & Token-Effizienz" })}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t({
                en: "Don't burn thousands on generic commercial API tokens. Offload heavy workloads to tailored agent orchestrators, local LLMs, and RunPods.",
                de: "Verschwende nicht Tausende für generische API-Tokens. Lager schwere Tasks auf eigene Agenten, lokale LLMs & RunPods aus."
              })}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-emerald-400 font-bold">03</span>
            <h3 className="text-lg font-bold text-white">{t({ en: "Proof of Work", de: "Proof of Work" })}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t({
                en: "Ground theoretical informatics knowledge into runnable code, vector search benchmarks, and cloud data warehouse certifications.",
                de: "Verankere Informatiktheorie in ausführbarem Code, Vektorsuch-Benchmarks und Cloud Data Warehouse Zertifizierungen."
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Footer & Socials Section */}
      <footer className="shell py-16 border-t border-slate-900 space-y-8" id="footer-links">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs font-mono text-cyan-400">{t({ en: "INTERESTED IN COLLABORATION OR TECH INTERVIEWS?", de: "INTERESSE AN ZUSAMMENARBEIT ODER TECH INTERVIEWS?" })}</p>
            <h2 className="text-3xl font-bold text-white">{t({ en: "Let’s connect.", de: "Lass uns vernetzen." })}</h2>
          </div>

          {/* Social Links with icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/lev-b"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 font-mono text-xs font-semibold transition-all shadow-md"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/BytecodeBrewer"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-mono text-xs font-semibold transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Lev · Informatics & Data Engineering · Leipzig, Germany.</p>
          <p>{t({ en: "Built with curiosity & an unreasonable number of terminal tabs.", de: "Gebaut mit Neugier & unverschämt vielen Terminal-Tabs." })}</p>
        </div>
      </footer>
    </main>
  );
}
