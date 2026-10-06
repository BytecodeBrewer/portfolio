"use client";

import React, { useEffect, useState } from "react";
import { Project, ProjectStatus, defaultProjects } from "../projects";

interface AdminModalProps {
  projects: Project[];
  onProjectsChange: (updatedProjects: Project[]) => void;
}

export function AdminModal({ projects, onProjectsChange }: AdminModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [totpStep, setTotpStep] = useState(false);
  const [totpCode, setTotpCode] = useState("");
  const [totpSecret] = useState("JBSWY3DPEHPK3PXP"); // Sample secret for TOTP preview

  // Shortcut listener: Ctrl + Shift + A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "A" || e.key === "a")) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Lev2025" || password === "admin") {
      setAuthError("");
      setTotpStep(true);
    } else {
      setAuthError("Invalid credentials. Please try again.");
    }
  };

  const handleTotpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (totpCode.trim().length >= 4) {
      setAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Enter a valid 2FA authenticator code.");
    }
  };

  const handleStatusChange = (slug: string, newStatus: ProjectStatus) => {
    const updated = projects.map((p) => (p.slug === slug ? { ...p, status: newStatus } : p));
    onProjectsChange(updated);
  };

  const handleAiToggle = (slug: string) => {
    const updated = projects.map((p) => (p.slug === slug ? { ...p, aiAugmented: !p.aiAugmented } : p));
    onProjectsChange(updated);
  };

  const handleResetToDefault = () => {
    onProjectsChange(defaultProjects);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 text-slate-100 font-sans max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono text-sm font-bold">
            ⚡
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-white">
              Scheduled Maintainer & Admin Control
            </h2>
            <p className="text-xs text-slate-400">
              Persistent configuration layer (Bypasses Deployment Resets)
            </p>
          </div>
        </div>

        {!authenticated ? (
          <div className="py-6 max-w-md mx-auto">
            {!totpStep ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    ADMIN PASSWORD
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password (e.g. Lev2025)"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-mono"
                    autoFocus
                  />
                </div>
                {authError ? (
                  <p className="text-xs text-rose-400 font-mono">{authError}</p>
                ) : null}
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-cyan-600/20 cursor-pointer"
                >
                  Continue to 2FA Step →
                </button>
              </form>
            ) : (
              <form onSubmit={handleTotpSubmit} className="space-y-4">
                <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl text-center">
                  <p className="text-xs text-slate-400 mb-2 font-mono">
                    2FA AUTHENTICATOR SETUP
                  </p>
                  <div className="inline-block p-2 bg-white rounded-lg mb-2">
                    {/* Simulated 2FA QR Code representation */}
                    <div className="w-24 h-24 bg-slate-900 border border-slate-200 flex flex-col items-center justify-center text-[10px] font-mono text-cyan-400 p-1 text-center">
                      <span>🔐 2FA QR</span>
                      <span className="text-[8px] text-slate-400">{totpSecret}</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Scan with Authenticator App (Google Authenticator / 1Password)
                  </p>
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    6-DIGIT AUTHENTICATOR CODE
                  </label>
                  <input
                    type="text"
                    value={totpCode}
                    onChange={(e) => setTotpCode(e.target.value)}
                    placeholder="123456"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-mono text-center tracking-widest text-lg"
                    autoFocus
                  />
                </div>
                {authError ? (
                  <p className="text-xs text-rose-400 font-mono">{authError}</p>
                ) : null}
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-cyan-600/20 cursor-pointer"
                >
                  Verify & Open Admin Control Panel
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="p-3 bg-cyan-950/30 border border-cyan-800/40 rounded-xl text-xs text-cyan-300 flex items-center justify-between font-mono">
              <span>● Maintainer Agent Lock: PERSISTENT ACTIVE</span>
              <span className="text-[10px] bg-cyan-900/60 px-2 py-0.5 rounded text-cyan-200">
                Local Storage Safe
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Project Visibility & Status Manager
              </h3>
              <div className="divide-y divide-slate-800 border border-slate-800 rounded-xl overflow-hidden bg-slate-950/50">
                {projects.map((proj) => (
                  <div key={proj.slug} className="p-3.5 flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white">{proj.name}</span>
                        <span className="text-xs text-slate-500 font-mono">({proj.slug})</span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">{proj.summary.en}</p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {/* Status Selector */}
                      <select
                        value={proj.status}
                        onChange={(e) => handleStatusChange(proj.slug, e.target.value as ProjectStatus)}
                        className="px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-cyan-500"
                      >
                        <option value="active">Active</option>
                        <option value="paused">Paused</option>
                        <option value="side-quest">Side-Quest</option>
                      </select>

                      {/* AI Badge Toggle */}
                      <button
                        onClick={() => handleAiToggle(proj.slug)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
                          proj.aiAugmented
                            ? "bg-cyan-950/50 border-cyan-600/60 text-cyan-300"
                            : "bg-slate-900 border-slate-800 text-slate-500"
                        }`}
                        title="Toggle AI/Agentic Support Badge"
                      >
                        {proj.aiAugmented ? "⚡ AI On" : "AI Off"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
              <button
                onClick={handleResetToDefault}
                className="text-slate-400 hover:text-slate-200 underline font-mono cursor-pointer"
              >
                Reset all to default
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors cursor-pointer"
              >
                Save & Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
