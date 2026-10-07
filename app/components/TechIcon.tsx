import React from "react";

export type TechStackCategory = "frontend" | "backend" | "tools";

export interface TechItemDef {
  id: string;
  name: string;
  category: TechStackCategory;
  colorClass: string;
  glowColor: string;
}

export const GLOBAL_TECH_STACK: TechItemDef[] = [
  // Frontend
  { id: "nextjs", name: "Next.js", category: "frontend", colorClass: "text-slate-100 dark:text-white", glowColor: "rgba(255, 255, 255, 0.2)" },
  { id: "react", name: "React", category: "frontend", colorClass: "text-sky-400", glowColor: "rgba(56, 189, 248, 0.25)" },
  { id: "typescript", name: "TypeScript", category: "frontend", colorClass: "text-blue-400", glowColor: "rgba(96, 165, 250, 0.25)" },
  { id: "electron", name: "Electron", category: "frontend", colorClass: "text-cyan-300", glowColor: "rgba(103, 232, 249, 0.25)" },
  { id: "bootstrap", name: "Bootstrap", category: "frontend", colorClass: "text-purple-400", glowColor: "rgba(192, 132, 252, 0.25)" },
  { id: "figma", name: "Figma", category: "frontend", colorClass: "text-rose-400", glowColor: "rgba(251, 113, 133, 0.25)" },

  // Backend
  { id: "python", name: "Python", category: "backend", colorClass: "text-amber-400", glowColor: "rgba(251, 191, 36, 0.25)" },
  { id: "nodejs", name: "Node.js", category: "backend", colorClass: "text-emerald-400", glowColor: "rgba(52, 211, 153, 0.25)" },
  { id: "bun", name: "Bun", category: "backend", colorClass: "text-amber-200", glowColor: "rgba(253, 230, 138, 0.25)" },
  { id: "express", name: "Express", category: "backend", colorClass: "text-slate-200", glowColor: "rgba(226, 232, 240, 0.2)" },
  { id: "fastapi", name: "FastAPI", category: "backend", colorClass: "text-teal-400", glowColor: "rgba(45, 212, 191, 0.25)" },
  { id: "django", name: "Django", category: "backend", colorClass: "text-emerald-500", glowColor: "rgba(16, 185, 129, 0.25)" },
  { id: "go", name: "Go", category: "backend", colorClass: "text-cyan-400", glowColor: "rgba(34, 211, 238, 0.25)" },
  { id: "postgres", name: "PostgreSQL", category: "backend", colorClass: "text-blue-400", glowColor: "rgba(96, 165, 250, 0.25)" },
  { id: "redis", name: "Redis", category: "backend", colorClass: "text-red-500", glowColor: "rgba(239, 68, 68, 0.25)" },
  { id: "supabase", name: "Supabase", category: "backend", colorClass: "text-emerald-400", glowColor: "rgba(52, 211, 153, 0.25)" },
  { id: "pydantic", name: "Pydantic", category: "backend", colorClass: "text-pink-400", glowColor: "rgba(244, 114, 182, 0.25)" },
  { id: "pytorch", name: "PyTorch", category: "backend", colorClass: "text-orange-500", glowColor: "rgba(249, 115, 22, 0.25)" },

  // Tools & DevOps
  { id: "git", name: "Git", category: "tools", colorClass: "text-orange-500", glowColor: "rgba(249, 115, 22, 0.25)" },
  { id: "docker", name: "Docker", category: "tools", colorClass: "text-sky-400", glowColor: "rgba(56, 189, 248, 0.25)" },
  { id: "linux", name: "Linux", category: "tools", colorClass: "text-amber-300", glowColor: "rgba(252, 211, 77, 0.25)" },
  { id: "vscode", name: "VS Code", category: "tools", colorClass: "text-blue-500", glowColor: "rgba(59, 130, 246, 0.25)" },
  { id: "vercel", name: "Vercel", category: "tools", colorClass: "text-slate-100 dark:text-white", glowColor: "rgba(255, 255, 255, 0.25)" },
  { id: "databricks", name: "Databricks", category: "tools", colorClass: "text-red-400", glowColor: "rgba(248, 113, 113, 0.25)" },
  { id: "snowflake", name: "Snowflake", category: "tools", colorClass: "text-sky-300", glowColor: "rgba(125, 211, 252, 0.25)" },
  { id: "azure", name: "Azure", category: "tools", colorClass: "text-blue-400", glowColor: "rgba(96, 165, 250, 0.25)" },
  { id: "mcp", name: "MCP", category: "tools", colorClass: "text-purple-400", glowColor: "rgba(192, 132, 252, 0.25)" },
  { id: "ai", name: "AI Agents", category: "tools", colorClass: "text-cyan-400", glowColor: "rgba(34, 211, 238, 0.3)" },
];

export function TechSvgIcon({ id, size = 20, className = "" }: { id: string; size?: number; className?: string }) {
  const iconKey = id.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (iconKey) {
    case "ai":
    case "agents":
    case "agentic":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L14.5 8.5L21 11L14.5 13.5L12 20L9.5 13.5L3 11L9.5 8.5L12 2Z" fill="currentColor" fillOpacity="0.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 2L6.2 5.2L9.4 6.4L6.2 7.6L5 10.8L3.8 7.6L0.6 6.4L3.8 5.2L5 2Z" fill="currentColor" fillOpacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="11" r="2" fill="currentColor" />
        </svg>
      );
    case "python":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M11.927 0C6.012 0 6.368 2.57 6.368 2.57v2.664h5.672v.81H3.928S0 5.602 0 11.588c0 5.985 3.42 5.768 3.42 5.768h2.046v-2.871s-.112-3.42 3.364-3.42h5.728s3.253.056 3.253-3.14V3.193S18.257 0 11.927 0zM8.887 1.838a1.05 1.05 0 1 1 0 2.101 1.05 1.05 0 0 1 0-2.101zm3.186 22.162c5.915 0 5.559-2.57 5.559-2.57v-2.664h-5.672v-.81h8.112S24 18.398 24 12.412c0-5.985-3.42-5.768-3.42-5.768h-2.046v2.871s.112 3.42-3.364 3.42H9.442s-3.253-.056-3.253 3.14v5.372S5.743 24 12.073 24zm3.04-1.838a1.05 1.05 0 1 1 0-2.101 1.05 1.05 0 0 1 0 2.101z" />
        </svg>
      );
    case "typescript":
    case "ts":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.782-.245 4.965 4.965 0 0 0-.846-.075c-.43 0-.783.076-1.058.228a.801.801 0 0 0-.413.738c0 .215.059.395.178.539.12.143.298.271.536.383.238.113.541.221.91.325l.84.237c.602.168 1.103.385 1.503.65.4.266.702.593.906.98.204.388.306.868.306 1.442 0 .783-.225 1.455-.675 2.016-.45.56-1.072.973-1.868 1.238-.795.265-1.716.398-2.761.398-.707 0-1.385-.067-2.034-.201a8.43 8.43 0 0 1-1.73-.556v-2.578c.62.333 1.23.585 1.83.756.6.172 1.182.258 1.747.258.483 0 .878-.08 1.185-.24.307-.16.46-.402.46-.725 0-.258-.088-.47-.264-.636-.176-.167-.432-.308-.768-.423a10.96 10.96 0 0 0-1.066-.307l-.873-.232c-.612-.162-1.11-.371-1.493-.628a2.53 2.53 0 0 1-.848-.923 2.72 2.72 0 0 1-.293-1.324c0-.752.222-1.398.667-1.938.445-.54 1.052-.94 1.821-1.2 0-.001.769-.39 2.518-.39zM8.99 10.012v2.302H6.551V21h-2.82V12.314H1.32V10.012z" />
        </svg>
      );
    case "nextjs":
    case "next":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.82 18.232-6.524-8.814v7.712H9.833V6.87h1.463l6.505 8.784V6.87h1.462v11.362h-1.443z" />
        </svg>
      );
    case "react":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" opacity="0.3" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
        </svg>
      );
    case "docker":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .103.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm-2.956 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.144a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm5.886 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.956 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.144a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H2.214a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zM23.73 11.531c-.347-.252-.894-.378-1.503-.357a4.912 4.912 0 00-1.89.54c-.131.066-.255.143-.372.228a7.01 7.01 0 00-2.325-1.077c-.173-.043-.35-.078-.528-.103V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887a13.33 13.33 0 00-.73-.016c-.344 0-.687.015-1.028.043V9.006a.186.186 0 00-.186-.186H7.362a.185.185 0 00-.185.186v1.98a18.3 18.3 0 00-1.12.222V9.006a.186.186 0 00-.186-.186H3.938a.185.185 0 00-.185.186v2.336c-.461.162-.912.355-1.348.577C.868 12.72 0 14.195 0 15.932c0 3.73 3.86 5.868 9.531 5.868 5.176 0 8.784-1.815 10.37-4.631a4.935 4.935 0 002.729-.861c.451-.31.81-.72 1.053-1.206a2.128 2.128 0 00.047-3.571z" />
        </svg>
      );
    case "postgres":
    case "postgresql":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.17 17.5c-.5.3-1.2.5-2 .5-1.8 0-3.2-1.1-3.2-2.8 0-1.4 1-2.4 2.5-2.4.6 0 1.2.1 1.7.3v-1.1c0-1.1-.7-1.7-1.9-1.7-.8 0-1.6.2-2.2.6l-.4-1.2c.8-.5 1.8-.7 2.9-.7 2.1 0 3.3 1.1 3.3 3.1v5.4h-1.7v-1zm-1-3.2c-.3-.1-.7-.2-1.1-.2-.8 0-1.4.5-1.4 1.3 0 .8.6 1.3 1.4 1.3.4 0 .8-.1 1.1-.3v-2.1z" />
        </svg>
      );
    case "supabase":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M21.362 9.354H12V.312L2.638 14.646H12v9.042l9.362-14.334z" />
        </svg>
      );
    case "vercel":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 1L24 22H0L12 1Z" />
        </svg>
      );
    case "electron":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case "django":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M11.146 0h3.137v18.729c-1.428.243-2.604.364-3.528.364-2.22 0-3.822-.61-4.805-1.832-.983-1.221-1.475-3.051-1.475-5.489 0-2.459.512-4.321 1.536-5.587 1.024-1.265 2.476-1.898 4.356-1.898.283 0 .543.013.779.038V0zm0 7.37c-.203-.02-.416-.03-.64-.03-1.016 0-1.788.356-2.316 1.067-.528.711-.792 1.777-.792 3.198 0 1.382.254 2.427.762 3.137.508.711 1.25 1.066 2.225 1.066.244 0 .498-.02.761-.061V7.37zM24 6.305v12.423h-3.137V16.73c-.69.833-1.575 1.458-2.652 1.874-1.077.417-2.185.625-3.323.625-1.524 0-2.825-.386-3.902-1.158s-1.616-1.829-1.616-3.17c0-1.341.539-2.388 1.616-3.14 1.077-.752 2.53-1.128 4.357-1.128.793 0 1.585.081 2.377.244v-.549c0-1.016-.274-1.768-.823-2.256-.549-.488-1.372-.732-2.469-.732-.874 0-1.788.163-2.744.488V5.329c1.077-.325 2.154-.488 3.231-.488 1.931 0 3.374.457 4.33 1.372.955.915 1.433 2.286 1.433 4.113v.021zm-3.137 5.792c-.63-.162-1.28-.244-1.951-.244-1.077 0-1.87.183-2.378.549-.508.366-.762.894-.762 1.585 0 .63.224 1.118.671 1.463.447.346 1.057.519 1.829.519.833 0 1.595-.213 2.286-.64.691-.427 1.034-.986 1.034-1.677v-1.555z"/>
        </svg>
      );
    case "fastapi":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 2.18a9.82 9.82 0 110 19.64 9.82 9.82 0 010-19.64zm-.82 3.64v5.45l-3.27-3.27-1.54 1.54 5.91 5.91 5.91-5.91-1.54-1.54-3.27 3.27V5.82z" />
        </svg>
      );
    case "go":
    case "golang":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M1.811 10.231c-.045.244-.068.502-.068.775 0 2.378 1.517 4.148 3.829 4.148 1.42 0 2.502-.686 2.986-1.74h-2.585v-1.637h4.428c.05.295.074.582.074.887 0 3.393-2.103 5.432-5.11 5.432C2.183 18.096 0 15.228 0 11.391c0-3.805 2.213-6.684 5.385-6.684 2.522 0 4.293 1.583 4.88 3.646l-1.85.553c-.392-1.282-1.425-2.222-2.99-2.222-2.124 0-3.565 1.776-3.614 3.547zm13.116-5.289c3.084 0 5.289 2.24 5.289 5.378 0 3.14-2.205 5.38-5.289 5.38-3.085 0-5.289-2.24-5.289-5.38 0-3.138 2.204-5.378 5.289-5.378zm0 8.94c1.848 0 3.218-1.458 3.218-3.562 0-2.103-1.37-3.56-3.218-3.56-1.847 0-3.217 1.457-3.217 3.56 0 2.104 1.37 3.562 3.217 3.562z" />
        </svg>
      );
    case "git":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.719.721.719 1.884 0 2.604-.719.719-1.883.719-2.602 0-.719-.72-.719-1.883 0-2.604.183-.183.398-.313.627-.394V8.847a1.996 1.996 0 0 1-.627-.394c-.537-.539-.675-1.332-.407-1.988L7.54 3.738.452 10.825c-.603.605-.603 1.582 0 2.188l10.479 10.478c.605.604 1.582.604 2.188 0l10.427-10.373c.604-.605.604-1.582 0-2.188z" />
        </svg>
      );
    case "vscode":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.12a.999.999 0 0 0-1.276.04L.36 7.21a.999.999 0 0 0-.08 1.44l3.54 3.82-3.54 3.82a.999.999 0 0 0 .08 1.44l1.28 1.16a.999.999 0 0 0 1.276.04l4.12-3.12 9.46 8.63a1.494 1.494 0 0 0 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 21.84V3.82a1.5 1.5 0 0 0-.85-1.233zM18 16.5l-5.5-4.5L18 7.5v9z" />
        </svg>
      );
    case "linux":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 0c-2.3 0-4.3 1.2-5.4 3.1-.3.5-.5 1-.6 1.6-.1.6 0 1.2.2 1.8l.1.3c.3.8.8 1.5 1.5 2 .2.2.4.3.7.5-.1.4-.2.9-.2 1.3 0 2.2 1.2 4.1 3 5.1-1.2.6-2.1 1.7-2.5 3-.1.3-.2.7-.2 1.1 0 1.8 1.3 3.2 3 3.2s3-1.4 3-3.2c0-.4-.1-.8-.2-1.1-.4-1.3-1.3-2.4-2.5-3 1.8-1 3-2.9 3-5.1 0-.4-.1-.9-.2-1.3.3-.2.5-.3.7-.5.7-.5 1.2-1.2 1.5-2 .2-.6.3-1.2.2-1.8-.1-.6-.3-1.1-.6-1.6C16.3 1.2 14.3 0 12 0z" />
        </svg>
      );
    case "azure":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M5.483 21.3h10.608L12.016 11.2h-6.22l-.313.916zM13.684 2.7L7.697 19.866h2.95l4.896-13.882zM14.618 2.7l4.137 12.062L24 21.3H16.89z" />
        </svg>
      );
    case "redis":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm0 3.2l7.2 4.15v3.3L12 6.5 4.8 10.65v-3.3L12 3.2zm-7.2 9.5l7.2 4.15 7.2-4.15v3.3L12 20.2 4.8 16v-3.3z" />
        </svg>
      );
    case "pydantic":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 6h5a3.5 3.5 0 0 1 0 7H8V6zm0 7h4a3.5 3.5 0 0 1 0 7H8v-7z" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      );
    case "pandas":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <rect x="4" y="3" width="3" height="18" rx="1.5" />
          <rect x="17" y="3" width="3" height="18" rx="1.5" />
          <rect x="10.5" y="6" width="3" height="12" rx="1.5" />
        </svg>
      );
    case "databricks":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2L1 8l11 6 11-6-11-6zm0 8L3.5 6 12 1.5 20.5 6 12 10zm-11 3l11 6 11-6v3l-11 6-11-6v-3z" />
        </svg>
      );
    case "snowflake":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93M12 6l-2-2m4 0l-2 2M12 18l-2 2m4 0l-2-2M6 12l-2-2m0 4l2-2M18 12l2-2m0 4l-2-2" strokeLinecap="round" />
        </svg>
      );
    case "excel":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM8.8 13.5l1.7 2.6 1.7-2.6h1.8l-2.6 3.8 2.7 4h-1.8l-1.8-2.8-1.8 2.8H7.1l2.7-4-2.6-3.8h1.6z" />
        </svg>
      );
    case "bootstrap":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M18.8 3a3.2 3.2 0 0 1 3.2 3.2v11.6a3.2 3.2 0 0 1-3.2 3.2H5.2A3.2 3.2 0 0 1 2 17.8V6.2A3.2 3.2 0 0 1 5.2 3h13.6zm-6.3 5.3H8v7.4h4.6c1.6 0 2.7-.9 2.7-2.2 0-.9-.5-1.6-1.4-1.9.7-.3 1.2-.9 1.2-1.7 0-1.2-1-1.6-2.6-1.6zm-2.4 1.5h2.1c.7 0 1.2.2 1.2.8 0 .5-.5.8-1.2.8H10.1V9.8zm0 2.8h2.3c.8 0 1.3.3 1.3.9 0 .6-.5.9-1.3.9H10.1v-1.8z" />
        </svg>
      );
    case "figma":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 12A4 4 0 1 1 8 8a4 4 0 0 1 4 4zm0 0a4 4 0 1 1 4 4 4 4 0 0 1-4-4zm0 0V4a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4zm-4 4a4 4 0 0 1-4-4 4 4 0 0 1 4-4v8zm0 4a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4h4z" />
        </svg>
      );
    case "bun":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 3c-4.97 0-9 4.03-9 9 0 4.14 2.8 7.62 6.6 8.65.65.12 1.15-.35 1.15-.95v-.8c-2.45.52-3.05-1.05-3.05-1.05-.42-1.05-1.02-1.33-1.02-1.33-.8-.55.06-.54.06-.54.88.06 1.35.91 1.35.91.78 1.34 2.05.95 2.55.73.08-.57.31-.95.56-1.17-2.05-.23-4.2-.82-4.2-4.56 0-1.06.38-1.93 1-2.61-.1-.25-.43-1.23.1-2.57 0 0 .82-.26 2.7 1.01.78-.22 1.62-.33 2.45-.33s1.67.11 2.45.33c1.88-1.27 2.7-1.01 2.7-1.01.53 1.34.2 2.32.1 2.57.62.68 1 .28 1 2.61 0 3.75-2.15 4.33-4.2 4.56.32.28.61.83.61 1.67v2.48c0 .6.5 1.07 1.15.95C20.2 19.62 23 16.14 23 12c0-4.97-4.03-9-9-9z" />
        </svg>
      );
    case "express":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M22 6L12 1 2 6v12l10 5 10-5V6zm-10 1.8L18.5 11 12 14.2 5.5 11 12 7.8zM4 8.8l7 3.5v7.4l-7-3.5V8.8zm16 7.4l-7 3.5v-7.4l7-3.5v7.4z" />
        </svg>
      );
    case "mcp":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M7 16V8l5 4 5-4v8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <span className="font-mono text-[10px] font-black uppercase text-cyan-400 tracking-tighter">
          {id.slice(0, 3)}
        </span>
      );
  }
}

export function TechIconBadge({ name, size = 18, className = "", showLabel = false }: { name: string; size?: number; className?: string; showLabel?: boolean }) {
  const item = GLOBAL_TECH_STACK.find((t) => t.id === name.toLowerCase().replace(/[^a-z0-9]/g, "")) || {
    id: name,
    name: name,
    category: "tools" as TechStackCategory,
    colorClass: "text-cyan-400",
    glowColor: "rgba(34, 211, 238, 0.2)",
  };

  return (
    <span
      title={item.name}
      className={`tech-badge-item inline-flex items-center justify-center ${
        showLabel ? "px-3 py-1.5 gap-2 rounded-xl" : "w-8 h-8 rounded-lg"
      } border border-slate-700/60 bg-slate-900/90 text-slate-100 transition-all hover:border-cyan-400 hover:scale-105 shadow-sm ${className}`}
    >
      <span className={`inline-flex items-center justify-center ${item.colorClass}`}>
        <TechSvgIcon id={item.id} size={size} />
      </span>
      {showLabel ? <span className="text-xs font-mono font-semibold capitalize">{item.name}</span> : null}
    </span>
  );
}

export function GlobalTechStackGrid({ darkMode }: { darkMode: boolean }) {
  const categories: { key: TechStackCategory; title: string; icon: string }[] = [
    { key: "frontend", title: "Frontend", icon: "💻" },
    { key: "backend", title: "Backend", icon: "🗄️" },
    { key: "tools", title: "Tools & DevOps", icon: "🛠️" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
      {categories.map((cat) => {
        const items = GLOBAL_TECH_STACK.filter((item) => item.category === cat.key);
        return (
          <div
            key={cat.key}
            className={`p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
              darkMode
                ? "bg-slate-900/70 border-slate-800/80 hover:border-slate-700/90"
                : "bg-white/80 border-slate-200/90 shadow-lg shadow-slate-200/40"
            }`}
          >
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/60 dark:border-slate-800/60">
              <span className="text-lg">{cat.icon}</span>
              <h3 className={`text-base font-bold font-mono ${darkMode ? "text-white" : "text-slate-900"}`}>{cat.title}</h3>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  group-hover="true"
                  className={`group relative flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300 cursor-default ${
                    darkMode
                      ? "bg-slate-950/60 border-slate-800/60 hover:border-cyan-500/50"
                      : "bg-slate-50 border-slate-200 hover:border-cyan-500/50"
                  }`}
                  style={{
                    boxShadow: "0 0 0 0 transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 16px ${item.glowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 0 0 transparent";
                  }}
                >
                  {/* Icon: Monochrome by default (grayscale + opacity), Full Color on Hover */}
                  <div className={`transition-all duration-300 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 ${item.colorClass}`}>
                    <TechSvgIcon id={item.id} size={24} />
                  </div>
                  <span className={`mt-2 text-[11px] font-mono font-medium text-center transition-colors ${
                    darkMode ? "text-slate-400 group-hover:text-slate-100" : "text-slate-500 group-hover:text-slate-900"
                  }`}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
