"use client";

import { useLanguage } from "../context/LanguageContext";

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="lang-toggle-btn inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-slate-800/80 border border-slate-700 hover:border-cyan-500 text-slate-200 transition-all cursor-pointer shadow-sm active:scale-95"
      title={lang === "en" ? "Auf Deutsch wechseln" : "Switch to English"}
      aria-label="Toggle language"
    >
      <span className={lang === "en" ? "text-cyan-400 font-bold" : "text-slate-400 opacity-60"}>EN</span>
      <span className="text-slate-600">/</span>
      <span className={lang === "de" ? "text-cyan-400 font-bold" : "text-slate-400 opacity-60"}>DE</span>
    </button>
  );
}
