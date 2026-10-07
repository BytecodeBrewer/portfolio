"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AmbientCanvas } from "../../components/AmbientCanvas";
import { LanguageToggle } from "../../components/LanguageToggle";
import { TechIconBadge } from "../../components/TechIcon";
import { useLanguage } from "../../context/LanguageContext";
import { Project, defaultProjects, getProject } from "../../projects";

function FlowDiagram({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const { diagram } = project;

  return (
    <section className="py-12 border-t border-slate-900 dark:border-slate-800 space-y-6">
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
              className="p-5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 border border-slate-800 dark:border-slate-800 space-y-2 relative overflow-hidden group hover:border-slate-700 transition-colors"
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
  const [projectsList, setProjectsList] = useState<Project[]>(defaultProjects);
  const [showSecondaryTech, setShowSecondaryTech] = useState(false);

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

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative">
      <AmbientCanvas className="z-0" projectSlug={project.slug} />

      {/* Header Navigation */}
      <header className="shell flex items-center justify-between py-5 border-b border-slate-900 dark:border-slate-800 sticky top-0 bg-slate-950/90 dark:bg-slate-950/90 backdrop-blur-md z-40">
        <Link className="wordmark text-lg font-bold font-mono tracking-tight text-white hover:text-cyan-400 transition-colors" href="/">
          LB<span className="text-cyan-400">/data</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link href="/#work" className="hover:text-cyan-400 transition-colors">
            ← {t({ en: "All Projects", de: "Alle Projekte" })}
          </Link>
          <LanguageToggle />
          {project.href ? (
            <a
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs border border-slate-700 transition-all"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              Repository ↗
            </a>
          ) : (
            <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-xs font-mono text-emerald-300">
              🔒 {t({ en: "Private Repo", de: "Privates Repo" })}
            </span>
          )}
        </nav>
      </header>

      <article className="shell relative z-10 py-12 md:py-16 space-y-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
              {project.label[lang]}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono font-bold text-cyan-300 shadow-sm">
              {project.classification ? project.classification[lang] : project.label[lang]}
            </span>
            {project.aiAugmented && project.aiBadgeText && (
              <span className="px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-xs font-mono text-indigo-300">
                {project.aiBadgeText[lang]}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {project.name}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
            {project.summary[lang]}
          </p>

          <p className="text-xs font-mono text-slate-400">
            {project.contribution[lang]}
          </p>
        </div>

        {/* Core Mandatory Sections: Introduction, Tech Stack, Background */}
        <div className="grid md:grid-cols-3 gap-8 pt-4">
          {/* Section 1: Introduction */}
          <section className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-800 space-y-3">
            <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              {t({ en: "01. Introduction", de: "01. Einleitung" })}
            </p>
            <h2 className="text-xl font-bold text-white">{t({ en: "Core Objectives", de: "Kernziel" })}</h2>
            <p className="text-sm text-slate-300 leading-relaxed">{project.introduction[lang]}</p>
          </section>

          {/* Section 2: Tech Stack (Primary Logos + Popover for Secondary) */}
          <section className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-800 space-y-4">
            <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
              {t({ en: "02. Tech Stack", de: "02. Technologie-Stack" })}
            </p>
            <h2 className="text-xl font-bold text-white">{t({ en: "Engine & Tools", de: "Tools & Frameworks" })}</h2>
            <div className="flex flex-wrap items-center gap-2">
              {project.techStack.map((tech) => (
                <TechIconBadge key={tech} name={tech} size={20} showLabel={true} />
              ))}
              {project.secondaryTechStack && project.secondaryTechStack.length > 0 && (
                <div className="relative inline-block">
                  <button
                    onClick={() => setShowSecondaryTech(!showSecondaryTech)}
                    className="px-2.5 py-1.5 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-xs font-mono text-cyan-400 font-bold transition-all"
                  >
                    + More ({project.secondaryTechStack.length})
                  </button>
                  {showSecondaryTech && (
                    <div className="absolute top-full left-0 mt-2 p-3 rounded-xl bg-slate-900 border border-slate-700 shadow-xl z-30 min-w-[200px] flex flex-wrap gap-2">
                      {project.secondaryTechStack.map((sec) => (
                        <TechIconBadge key={sec} name={sec} size={16} showLabel={true} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* Section 3: Background */}
          <section className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-800 space-y-3">
            <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              {t({ en: "03. Background", de: "03. Hintergrund" })}
            </p>
            <h2 className="text-xl font-bold text-white">{t({ en: "Why This Exists", de: "Warum es existiert" })}</h2>
            <p className="text-sm text-slate-300 leading-relaxed">{project.background[lang]}</p>
          </section>
        </div>

        {/* Story Sections */}
        <section className="grid md:grid-cols-2 gap-8 py-8 border-t border-slate-900 dark:border-slate-800">
          {project.storySections.map((sec, i) => (
            <div key={i} className="space-y-2 p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/80">
              <span className="text-xs font-mono text-slate-400">{sec.eyebrow[lang]}</span>
              <h3 className="text-lg font-bold text-white">{sec.title[lang]}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{sec.body[lang]}</p>
            </div>
          ))}
        </section>

        {/* System / Pipeline Flow Diagram */}
        <FlowDiagram project={project} />

        {/* Roadmap / Future Goals Section */}
        <section className="py-12 border-t border-slate-900 dark:border-slate-800 space-y-6">
          <div className="space-y-1">
            <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest">{t({ en: "Roadmap & Direction", de: "Roadmap & Ausblick" })}</p>
            <h2 className="text-2xl font-bold text-white tracking-tight">{project.roadmapTitle[lang]}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            {project.roadmap.map((item, index) => (
              <div key={index} className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
                <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-cyan-300">
                  {item.status[lang]}
                </span>
                <h3 className="font-bold text-white text-base">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.text[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Link back */}
        <div className="pt-8 border-t border-slate-900 dark:border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
          <Link href="/#work" className="hover:text-cyan-400 transition-colors">
            ← {t({ en: "Back to selected work", de: "Zurück zur Übersicht" })}
          </Link>
          {project.href && (
            <a href={project.href} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              {t({ en: "View Repository on GitHub ↗", de: "Repository auf GitHub ansehen ↗" })}
            </a>
          )}
        </div>
      </article>
    </main>
  );
}
