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
  const { isDark } = useTheme();
  const { diagram } = project;

  return (
    <section className={`py-12 border-t space-y-6 ${isDark ? "border-slate-900" : "border-slate-200"}`}>
      <div className="space-y-1">
        <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{diagram.label[lang]}</p>
        <h2 className={`text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>{diagram.title[lang]}</h2>
        <p className={`text-sm max-w-2xl ${isDark ? "text-slate-400" : "text-slate-600"}`}>{diagram.intro[lang]}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        {diagram.nodes.map((node, index) => {
          const item = typeof node === "string" ? { title: { en: node, de: node } } : node;
          return (
            <div
              key={index}
              className={`p-5 rounded-xl border space-y-2 relative overflow-hidden group transition-colors ${
                isDark ? "bg-slate-900/60 border-slate-800 hover:border-slate-700" : "bg-slate-50/80 border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-400">0{index + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60" />
              </div>
              <h3 className={`font-bold text-sm ${isDark ? "text-white" : "text-slate-900"}`}>{item.title[lang]}</h3>
              {item.text ? <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>{item.text[lang]}</p> : null}
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
  const { isDark } = useTheme();
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

  return (
    <main className={`min-h-screen font-sans selection:bg-cyan-500 selection:text-slate-950 relative ${
      isDark ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"
    }`}>
      <AmbientCanvas className="z-0" projectSlug={project.slug} />

      {/* Navigation */}
      <header className={`shell flex items-center justify-between py-5 border-b ${
        isDark ? "border-slate-900 bg-slate-950/90" : "border-slate-200 bg-white/90"
      } backdrop-blur-md sticky top-0 z-40`}>
        <Link className={`wordmark text-lg font-bold font-mono tracking-tight hover:text-cyan-400 transition-colors ${
          isDark ? "text-white" : "text-slate-900"
        }`} href="/">
          LB<span className="text-cyan-400">/data</span>
        </Link>
        <nav className={`flex items-center gap-6 text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
          <Link href="/#work" className="hover:text-cyan-400 transition-colors">
            ← {t({ en: "All Projects", de: "Alle Projekte" })}
          </Link>
          <LanguageToggle />
          {project.href ? (
            <a
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs border transition-all ${
                isDark ? "bg-slate-800 hover:bg-slate-700 text-white border-slate-700" : "bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-300"
              }`}
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
            <span className={`px-3 py-1 rounded-full border text-xs font-mono text-cyan-400 ${
              isDark ? "bg-slate-900 border-slate-800" : "bg-slate-100 border-slate-200"
            }`}>
              {project.label[lang]}
            </span>
            <span className={`px-3.5 py-1 rounded-full border text-xs font-mono font-bold text-cyan-300 shadow-sm ${
              isDark ? "bg-cyan-950/80 border-cyan-800/60" : "bg-cyan-100/80 border-cyan-300 text-cyan-800"
            }`}>
              {project.classification ? project.classification[lang] : project.label[lang]}
            </span>
            {project.aiAugmented && project.aiBadgeText && (
              <span className={`px-3 py-1 rounded-full border text-xs font-mono ${
                isDark ? "bg-indigo-950/80 border-indigo-800/60 text-indigo-300" : "bg-indigo-100 border-indigo-300 text-indigo-800"
              }`}>
                {project.aiBadgeText[lang]}
              </span>
            )}
          </div>

          <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight leading-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {project.name}
          </h1>

          <p className={`text-lg md:text-xl max-w-3xl leading-relaxed ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}>
            {project.summary[lang]}
          </p>

          <p className={`text-xs font-mono ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            {project.contribution[lang]}
          </p>
        </div>

        {/* Core Mandatory Sections: Introduction, Tech Stack, Background */}
        <div className="grid md:grid-cols-3 gap-8 pt-4">
          {/* Section 1: Introduction */}
          <section className={`p-6 rounded-2xl backdrop-blur-sm border space-y-3 ${
            isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50/90 border-slate-200"
          }`}>
            <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              {t({ en: "01. Introduction", de: "01. Einleitung" })}
            </p>
            <h2 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t({ en: "Core Objectives", de: "Kernziel" })}</h2>
            <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>{project.introduction[lang]}</p>
          </section>

          {/* Section 2: Tech Stack (All Logos Displayed Directly) */}
          <section className={`p-6 rounded-2xl backdrop-blur-sm border space-y-4 ${
            isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50/90 border-slate-200"
          }`}>
            <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
              {t({ en: "02. Tech Stack", de: "02. Technologie-Stack" })}
            </p>
            <h2 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t({ en: "Engine & Tools", de: "Tools & Frameworks" })}</h2>
            <div className="flex flex-wrap items-center gap-2">
              {[...project.techStack, ...(project.secondaryTechStack || [])].map((tech) => (
                <TechIconBadge key={tech} name={tech} size={20} showLabel={true} />
              ))}
            </div>
          </section>

          {/* Section 3: Background */}
          <section className={`p-6 rounded-2xl backdrop-blur-sm border space-y-3 ${
            isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50/90 border-slate-200"
          }`}>
            <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              {t({ en: "03. Background", de: "03. Hintergrund" })}
            </p>
            <h2 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t({ en: "Why This Exists", de: "Warum es existiert" })}</h2>
            <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>{project.background[lang]}</p>
          </section>
        </div>

        {/* Story Sections */}
        <section className={`grid md:grid-cols-2 gap-8 py-8 border-t ${isDark ? "border-slate-900" : "border-slate-200"}`}>
          {project.storySections.map((sec, i) => (
            <div key={i} className={`space-y-2 p-6 rounded-2xl backdrop-blur-sm border ${
              isDark ? "bg-slate-900/50 border-slate-800/80" : "bg-slate-50/80 border-slate-200"
            }`}>
              <span className={`text-xs font-mono ${isDark ? "text-slate-400" : "text-slate-500"}`}>{sec.eyebrow[lang]}</span>
              <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{sec.title[lang]}</h3>
              <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>{sec.body[lang]}</p>
            </div>
          ))}
        </section>

        {/* System / Pipeline Flow Diagram */}
        <FlowDiagram project={project} />

        {/* Roadmap / Future Goals Section */}
        <section className={`py-12 border-t space-y-6 ${isDark ? "border-slate-900" : "border-slate-200"}`}>
          <div className="space-y-1">
            <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest">{t({ en: "Roadmap & Direction", de: "Roadmap & Ausblick" })}</p>
            <h2 className={`text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>{project.roadmapTitle[lang]}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            {project.roadmap.map((item, index) => (
              <div key={index} className={`p-5 rounded-xl border space-y-2 ${
                isDark ? "bg-slate-900/50 border-slate-800" : "bg-slate-50/80 border-slate-200"
              }`}>
                <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-mono ${
                  isDark ? "bg-slate-800 text-cyan-300" : "bg-slate-200 text-cyan-800"
                }`}>
                  {item.status[lang]}
                </span>
                <h3 className={`font-bold text-base ${isDark ? "text-white" : "text-slate-900"}`}>{item.title}</h3>
                <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{item.text[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Link back */}
        <div className={`pt-8 border-t flex justify-between items-center text-xs font-mono ${
          isDark ? "border-slate-900 text-slate-400" : "border-slate-200 text-slate-500"
        }`}>
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
