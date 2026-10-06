"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AmbientCanvas } from "../../components/AmbientCanvas";
import { LanguageToggle } from "../../components/LanguageToggle";
import { TechIconBadge } from "../../components/TechIcon";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { Project, defaultProjects, getProject } from "../../projects";

function FlowDiagram({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const { diagram } = project;

  return (
    <section className="py-12 border-t border-slate-900 space-y-6">
      <div className="space-y-1">
        <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{diagram.label[lang]}</p>
        <h2 className="text-2xl font-bold text-white tracking-tight">{diagram.title[lang]}</h2>
        <p className="text-sm text-slate-400 max-w-2xl">{diagram.intro[lang]}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        {diagram.nodes.map((node, index) => {
          const item = typeof node === "string" ? { title: { en: node, de: node } } : node;
          return (
            <div
              key={index}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 relative overflow-hidden group hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-400">0{index + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60" />
              </div>
              <h3 className="font-bold text-white text-sm">{item.title[lang]}</h3>
              {item.text ? <p className="text-xs text-slate-400 leading-relaxed">{item.text[lang]}</p> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function ProjectPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const { lang, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const darkMode = isDark;
  const [projectsList, setProjectsList] = useState<Project[]>(defaultProjects);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_projects_override");
    if (saved) {
      try {
        setProjectsList(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const project = getProject(slug, projectsList);
  if (!project) return notFound();

  const bgTypeLabels = {
    market_gap: { en: "Market Gap / Commercial Intent 🤑", de: "Marktlücke / Kommerzielle Absicht 🤑" },
    proof_of_work: { en: "Proof of Work / Core Grounding 🎓", de: "Proof of Work / Fundament 🎓" },
    heavy_workload: { en: "Heavy Workload & Cost Optimization ⚡", de: "Heavy Workload & Kosten-Optimierung ⚡" },
    academic: { en: "Academic & Showcase 🏛️", de: "Akademischer Showcase 🏛️" }
  };

  return (
    <main className={`min-h-screen ${darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"} font-sans selection:bg-cyan-500 selection:text-slate-950 transition-colors relative`}>
      <AmbientCanvas className="z-0" projectSlug={project.slug} />

      {/* Navigation */}
      <header className={`shell flex items-center justify-between py-5 border-b ${darkMode ? "border-slate-900 bg-slate-950/90" : "border-slate-200 bg-slate-50/90"} backdrop-blur-md sticky top-0 z-40`}>
        <Link className={`wordmark text-lg font-bold font-mono tracking-tight ${darkMode ? "text-white" : "text-slate-900"} hover:text-cyan-500 transition-colors`} href="/">
          LB<span className="text-cyan-500">/data</span>
        </Link>
        <nav className={`flex items-center gap-4 md:gap-6 text-sm font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
          <Link href="/#work" className="hover:text-cyan-500 transition-colors">
            ← {t({ en: "All Projects", de: "Alle Projekte" })}
          </Link>
          <LanguageToggle />
          <button
            onClick={toggleTheme}
            className={`p-1.5 rounded-lg border text-xs font-mono transition-colors ${darkMode ? "border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700" : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"}`}
            title="Toggle theme mode"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
          <a
            className={`px-3.5 py-1.5 rounded-xl font-mono text-xs border transition-all ${darkMode ? "bg-slate-800 hover:bg-slate-700 text-white border-slate-700" : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300"}`}
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            Repository ↗
          </a>
        </nav>
      </header>

      <article className="shell relative z-10 py-12 md:py-16 space-y-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full border text-xs font-mono ${darkMode ? "bg-slate-900 border-slate-800 text-cyan-400" : "bg-white border-slate-200 text-cyan-700 shadow-sm"}`}>
              {project.label[lang]}
            </span>
            <span className={`px-3 py-1 rounded-full border text-xs font-mono ${darkMode ? "bg-cyan-950/50 border-cyan-800/40 text-cyan-300" : "bg-cyan-50 border-cyan-200 text-cyan-800"}`}>
              {bgTypeLabels[project.backgroundType][lang]}
            </span>
          </div>

          <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
            {project.name}
          </h1>

          <p className={`text-lg md:text-xl max-w-3xl leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
            {project.summary[lang]}
          </p>

          <p className={`text-xs font-mono ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            {project.contribution[lang]}
          </p>
        </div>

        {/* Mandatory Sections: Introduction, Tech Stack, Background */}
        <div className="grid md:grid-cols-3 gap-8 pt-4">
          {/* Section 1: Introduction */}
          <section className={`p-6 rounded-2xl backdrop-blur-sm border space-y-3 ${darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white/80 border-slate-200 shadow-md"}`}>
            <p className="text-xs font-mono text-cyan-500 uppercase tracking-widest">
              {t({ en: "01. Introduction", de: "01. Einleitung" })}
            </p>
            <h2 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>{t({ en: "Core Objectives", de: "Kernziel" })}</h2>
            <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{project.introduction[lang]}</p>
          </section>

          {/* Section 2: Tech Stack (Logo Icons) */}
          <section className={`p-6 rounded-2xl backdrop-blur-sm border space-y-4 ${darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white/80 border-slate-200 shadow-md"}`}>
            <p className="text-xs font-mono text-indigo-500 uppercase tracking-widest">
              {t({ en: "02. Tech Stack", de: "02. Technologie-Stack" })}
            </p>
            <h2 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>{t({ en: "Engine & Tools", de: "Tools & Frameworks" })}</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechIconBadge key={tech} name={tech} size={20} showLabel={true} />
              ))}
            </div>
          </section>

          {/* Section 3: Background */}
          <section className={`p-6 rounded-2xl backdrop-blur-sm border space-y-3 ${darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white/80 border-slate-200 shadow-md"}`}>
            <p className="text-xs font-mono text-emerald-500 uppercase tracking-widest">
              {t({ en: "03. Background", de: "03. Hintergrund" })}
            </p>
            <h2 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>{t({ en: "Why This Exists", de: "Warum es existiert" })}</h2>
            <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{project.background[lang]}</p>
          </section>
        </div>

        {/* Story Sections */}
        <section className={`grid md:grid-cols-2 gap-8 py-8 border-t ${darkMode ? "border-slate-900" : "border-slate-200"}`}>
          {project.storySections.map((sec, i) => (
            <div key={i} className={`space-y-2 p-6 rounded-2xl backdrop-blur-sm border ${darkMode ? "bg-slate-900/50 border-slate-800/80" : "bg-white/80 border-slate-200 shadow-sm"}`}>
              <span className={`text-xs font-mono ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{sec.eyebrow[lang]}</span>
              <h3 className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>{sec.title[lang]}</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{sec.body[lang]}</p>
            </div>
          ))}
        </section>

        {/* System / Pipeline Flow Diagram */}
        <FlowDiagram project={project} />

        {/* Roadmap Section */}
        <section className={`py-12 border-t space-y-6 ${darkMode ? "border-slate-900" : "border-slate-200"}`}>
          <div className="space-y-1">
            <p className="text-xs font-mono text-indigo-500 uppercase tracking-widest">{t({ en: "Roadmap", de: "Roadmap" })}</p>
            <h2 className={`text-2xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>{project.roadmapTitle[lang]}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            {project.roadmap.map((item, index) => (
              <div key={index} className={`p-5 rounded-xl border space-y-2 ${darkMode ? "bg-slate-900/50 border-slate-800" : "bg-white/80 border-slate-200 shadow-sm"}`}>
                <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-mono ${darkMode ? "bg-slate-800 text-cyan-300" : "bg-cyan-50 text-cyan-700"}`}>
                  {item.status[lang]}
                </span>
                <h3 className={`font-bold text-base ${darkMode ? "text-white" : "text-slate-900"}`}>{item.title}</h3>
                <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{item.text[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Link back */}
        <div className={`pt-8 border-t flex justify-between items-center text-xs font-mono ${darkMode ? "border-slate-900 text-slate-400" : "border-slate-200 text-slate-600"}`}>
          <Link href="/#work" className="hover:text-cyan-500 transition-colors">
            ← {t({ en: "Back to selected work", de: "Zurück zur Übersicht" })}
          </Link>
          <a href={project.href} target="_blank" rel="noreferrer" className="hover:text-cyan-500 transition-colors">
            {t({ en: "View Repository on GitHub ↗", de: "Repository auf GitHub ansehen ↗" })}
          </a>
        </div>
      </article>
    </main>
  );
}
