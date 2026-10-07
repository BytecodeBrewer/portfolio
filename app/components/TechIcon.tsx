import React from "react";

export type TechStackCategory = "languages" | "frontend" | "backend" | "tools";

export interface TechItemDef {
  id: string;
  name: string;
  category: TechStackCategory;
  colorClass: string;
  glowColor: string;
}

export const GLOBAL_TECH_STACK: TechItemDef[] = [
  // Languages
  { id: "python", name: "Python", category: "languages", colorClass: "text-[#3776AB]", glowColor: "rgba(55, 118, 171, 0.35)" },
  { id: "typescript", name: "TypeScript", category: "languages", colorClass: "text-[#3178C6]", glowColor: "rgba(49, 120, 198, 0.35)" },
  { id: "go", name: "Go", category: "languages", colorClass: "text-[#00ADD8]", glowColor: "rgba(0, 173, 216, 0.35)" },
  { id: "java", name: "Java", category: "languages", colorClass: "text-[#5382A1]", glowColor: "rgba(83, 130, 161, 0.35)" },
  { id: "cpp", name: "C/C++", category: "languages", colorClass: "text-[#00599C]", glowColor: "rgba(0, 89, 156, 0.35)" },

  // Frontend
  { id: "html", name: "HTML5", category: "frontend", colorClass: "text-[#E34F26]", glowColor: "rgba(227, 79, 38, 0.35)" },
  { id: "css", name: "CSS3", category: "frontend", colorClass: "text-[#1572B6]", glowColor: "rgba(21, 114, 182, 0.35)" },
  { id: "js", name: "JavaScript", category: "frontend", colorClass: "text-[#F7DF1E]", glowColor: "rgba(247, 223, 30, 0.35)" },
  { id: "react", name: "React", category: "frontend", colorClass: "text-[#61DAFB]", glowColor: "rgba(97, 218, 251, 0.35)" },
  { id: "electron", name: "Electron", category: "frontend", colorClass: "text-[#47848F]", glowColor: "rgba(71, 132, 143, 0.35)" },

  // Backend
  { id: "duckdb", name: "DuckDB", category: "backend", colorClass: "text-[#FFF000]", glowColor: "rgba(255, 240, 0, 0.35)" },
  { id: "postgres", name: "PostgreSQL", category: "backend", colorClass: "text-[#4169E1]", glowColor: "rgba(65, 105, 225, 0.35)" },
  { id: "supabase", name: "Supabase", category: "backend", colorClass: "text-[#3ECF8E]", glowColor: "rgba(62, 207, 142, 0.35)" },
  { id: "fastapi", name: "FastAPI", category: "backend", colorClass: "text-[#009688]", glowColor: "rgba(0, 150, 136, 0.35)" },
  { id: "django", name: "Django", category: "backend", colorClass: "text-[#092E20] dark:text-[#44B78B]", glowColor: "rgba(68, 183, 139, 0.35)" },
  { id: "nodejs", name: "Node.js", category: "backend", colorClass: "text-[#5FA04E]", glowColor: "rgba(95, 160, 78, 0.35)" },

  // Tools & DevOps
  { id: "git", name: "Git", category: "tools", colorClass: "text-[#F05032]", glowColor: "rgba(240, 80, 50, 0.35)" },
  { id: "docker", name: "Docker", category: "tools", colorClass: "text-[#2496ED]", glowColor: "rgba(36, 150, 237, 0.35)" },
  { id: "aws", name: "AWS", category: "tools", colorClass: "text-[#FF9900]", glowColor: "rgba(255, 153, 0, 0.35)" },
  { id: "vercel", name: "Vercel", category: "tools", colorClass: "text-slate-900 dark:text-white", glowColor: "rgba(255, 255, 255, 0.35)" },
  { id: "vscode", name: "VS Code", category: "tools", colorClass: "text-[#007ACC]", glowColor: "rgba(0, 122, 204, 0.35)" },
  { id: "claudecode", name: "Claude Code", category: "tools", colorClass: "text-[#D97706]", glowColor: "rgba(217, 119, 6, 0.35)" },
  { id: "codex", name: "Codex", category: "tools", colorClass: "text-[#10A37F]", glowColor: "rgba(16, 163, 127, 0.35)" },
  { id: "githubactions", name: "GitHub Actions", category: "tools", colorClass: "text-[#2088FF]", glowColor: "rgba(32, 136, 255, 0.35)" },
];

export function TechSvgIcon({ id, size = 20, className = "" }: { id: string; size?: number; className?: string }) {
  const iconKey = id.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (iconKey) {
    case "ai":
    case "agents":
    case "sparkle":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
          <defs>
            <linearGradient id="sparkleGradLarge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
            <linearGradient id="sparkleGradSmall" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <path d="M 68 30 Q 68 58 98 58 Q 68 58 68 86 Q 68 58 38 58 Q 68 58 68 30 Z" fill="url(#sparkleGradLarge)" />
          <path d="M 35 10 Q 35 25 52 25 Q 35 25 35 40 Q 35 25 18 25 Q 35 25 35 10 Z" fill="url(#sparkleGradSmall)" />
          <path d="M 28 65 Q 28 73 36 73 Q 28 73 28 81 Q 28 73 20 73 Q 28 73 28 65 Z" fill="url(#sparkleGradSmall)" />
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
    case "go":
    case "golang":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M1.811 10.231c-.045.244-.068.502-.068.775 0 2.378 1.517 4.148 3.829 4.148 1.42 0 2.502-.686 2.986-1.74h-2.585v-1.637h4.428c.05.295.074.582.074.887 0 3.393-2.103 5.432-5.11 5.432C2.183 18.096 0 15.228 0 11.391c0-3.805 2.213-6.684 5.385-6.684 2.522 0 4.293 1.583 4.88 3.646l-1.85.553c-.392-1.282-1.425-2.222-2.99-2.222-2.124 0-3.565 1.776-3.614 3.547zm13.116-5.289c3.084 0 5.289 2.24 5.289 5.378 0 3.14-2.205 5.38-5.289 5.38-3.085 0-5.289-2.24-5.289-5.38 0-3.138 2.204-5.378 5.289-5.378zm0 8.94c1.848 0 3.218-1.458 3.218-3.562 0-2.103-1.37-3.56-3.218-3.56-1.847 0-3.217 1.457-3.217 3.56 0 2.104 1.37 3.562 3.217 3.562z" />
        </svg>
      );
    case "java":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.873.187 4.978-.211 0 0 .611.348 1.353.684-2.274 1.053-6.471.884-7.55-.175.001 0-.083-.711.566-1.012zm-1.587-2.607s-.987.653.488.851c2.103.284 4.549.255 6.843-.227 0 0 .427.359 1.053.612-2.782.884-7.625.728-8.883-.357 0 0-.203-.687.499-.879zm10.741 2.212s.803-.519-.398-.823c-1.325-.338-2.915-.389-4.823-.198 0 0-.312-.49-.785-.807 2.457-.272 5.097-.133 6.643.513 1.547.646-.637 1.315-.637 1.315zm-3.036-6.621c1.238 1.417.151 2.766-.883 3.653 0 0 .684-.084 1.157-.594.887-.954 1.05-2.029-.274-3.059zM12 0C7.5 3 7.8 5.4 9 7.8c-1.8-1.2-2.4-3.6-1.2-6C4.8 3.6 4.8 7.8 7.2 9.6c.3-.9.9-1.8 1.8-2.4-.3 1.8.6 3 2.1 3.6 1.8.6 3-.3 3.6-1.8.3.9.6 1.5 1.2 2.1 1.2 1.2 2.4.9 3.3.3-1.2 1.8-3.3 2.7-5.7 2.1-2.4-.6-3.6-2.4-3.3-4.5z"/>
        </svg>
      );
    case "cpp":
    case "c":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M22.38 12.33c0-.44-.36-.8-.8-.8h-1.2v-1.2c0-.44-.36-.8-.8-.8s-.8.36-.8.8v1.2h-1.2c-.44 0-.8.36-.8.8s.36.8.8.8h1.2v1.2c0 .44.36.8.8.8s.8-.36.8-.8v-1.2h1.2c.44 0 .8-.36.8-.8zm-5.6 0c0-.44-.36-.8-.8-.8h-1.2v-1.2c0-.44-.36-.8-.8-.8s-.8.36-.8.8v1.2h-1.2c-.44 0-.8.36-.8.8s.36.8.8.8h1.2v1.2c0 .44.36.8.8.8s.8-.36.8-.8v-1.2h1.2c.44 0 .8-.36.8-.8zm-7.6 4.67c-2.58 0-4.67-2.09-4.67-4.67s2.09-4.67 4.67-4.67c1.32 0 2.51.55 3.36 1.43.31.32.82.33 1.15.02.32-.31.33-.82.02-1.15C12.39 6.64 10.87 5.92 9.18 5.92c-3.5 0-6.33 2.83-6.33 6.33s2.83 6.33 6.33 6.33c1.69 0 3.21-.72 4.31-1.87.31-.33.3-.84-.02-1.15-.33-.31-.84-.3-1.15.02-.85.88-2.04 1.43-3.36 1.43z" />
        </svg>
      );
    case "html":
    case "html5":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.884-.804-.188-2.088H6.315l.373 4.237L12 19.347l5.311-1.347.747-8.25H8.531z" />
        </svg>
      );
    case "css":
    case "css3":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.884-.804-.188-2.088H6.315l.373 4.237L12 19.347l5.311-1.347.747-8.25H8.531z" />
        </svg>
      );
    case "js":
    case "javascript":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.464.615-.646 1.2-.42.33.12.63.375.87.63.36-.345.855-.81 1.23-1.156-.375-.51-.81-.84-1.29-1.02-.75-.285-1.89-.285-2.655.105-.93.48-1.335 1.335-1.17 2.22.21 1.17 1.185 1.77 2.505 2.295 1.005.39 1.485.735 1.29 1.41-.165.585-.81.87-1.635.735-.645-.105-1.14-.495-1.53-.945l-1.305 1.05c.57.855 1.35 1.395 2.415 1.59 1.575.285 3.015-.225 3.48-1.56.09-.255.15-.54.165-.825zM12.27 12.03h-1.86v6.075c0 1.2-.45 1.725-1.5 1.725-.66 0-1.14-.24-1.455-.66l-1.29 1.02c.555.93 1.485 1.425 2.745 1.425 2.19 0 3.36-1.035 3.36-3.27V12.03z"/>
        </svg>
      );
    case "react":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
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
    case "duckdb":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          <path d="M8.5 10.5 C8.5 8 15.5 8 15.5 10.5 C15.5 13 8.5 13 8.5 10.5 Z" fill="currentColor" />
        </svg>
      );
    case "postgres":
    case "postgresql":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 3.582 8 8 8v1.5c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5V20c4.418 0 8-3.582 8-8 0-5.523-4.477-10-10-10zm-3 12c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm6 0c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"/>
        </svg>
      );
    case "supabase":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M21.362 9.354H12V.312L2.638 14.646H12v9.042l9.362-14.334z" />
        </svg>
      );
    case "fastapi":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 2.18a9.82 9.82 0 110 19.64 9.82 9.82 0 010-19.64zm-.82 3.64v5.45l-3.27-3.27-1.54 1.54 5.91 5.91 5.91-5.91-1.54-1.54-3.27 3.27V5.82z" />
        </svg>
      );
    case "django":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M11.146 0h3.137v18.729c-1.428.243-2.604.364-3.528.364-2.22 0-3.822-.61-4.805-1.832-.983-1.221-1.475-3.051-1.475-5.489 0-2.459.512-4.321 1.536-5.587 1.024-1.265 2.476-1.898 4.356-1.898.283 0 .543.013.779.038V0zm0 7.37c-.203-.02-.416-.03-.64-.03-1.016 0-1.788.356-2.316 1.067-.528.711-.792 1.777-.792 3.198 0 1.382.254 2.427.762 3.137.508.711 1.25 1.066 2.225 1.066.244 0 .498-.02.761-.061V7.37zM24 6.305v12.423h-3.137V16.73c-.69.833-1.575 1.458-2.652 1.874-1.077.417-2.185.625-3.323.625-1.524 0-2.825-.386-3.902-1.158s-1.616-1.829-1.616-3.17c0-1.341.539-2.388 1.616-3.14 1.077-.752 2.53-1.128 4.357-1.128.793 0 1.585.081 2.377.244v-.549c0-1.016-.274-1.768-.823-2.256-.549-.488-1.372-.732-2.469-.732-.874 0-1.788.163-2.744.488V5.329c1.077-.325 2.154-.488 3.231-.488 1.931 0 3.374.457 4.33 1.372.955.915 1.433 2.286 1.433 4.113v.021zm-3.137 5.792c-.63-.162-1.28-.244-1.951-.244-1.077 0-1.87.183-2.378.549-.508.366-.762.894-.762 1.585 0 .63.224 1.118.671 1.463.447.346 1.057.519 1.829.519.833 0 1.595-.213 2.286-.64.691-.427 1.034-.986 1.034-1.677v-1.555z"/>
        </svg>
      );
    case "nodejs":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 1l10.4 6v12L12 23 1.6 19V7L12 1zm0 2.3L3.6 8v8l8.4 4.7 8.4-4.7V8L12 3.3z"/>
        </svg>
      );
    case "git":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.719.721.719 1.884 0 2.604-.719.719-1.883.719-2.6 0-.721-.72-.721-1.883 0-2.604.18-.18.381-.309.598-.387V8.832c-.217-.078-.418-.207-.598-.387-.533-.533-.674-1.317-.414-1.97L7.544 3.693 1.454 9.783c-.605.605-.605 1.584 0 2.189l10.479 10.478c.604.604 1.582.604 2.186 0l10.427-10.428c.606-.603.606-1.58 0-2.186z"/>
        </svg>
      );
    case "docker":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .103.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm-2.956 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.144a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm5.886 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.956 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.144a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H2.214a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zM23.73 11.531c-.347-.252-.894-.378-1.503-.357a4.912 4.912 0 00-1.89.54c-.131.066-.255.143-.372.228a7.01 7.01 0 00-2.325-1.077c-.173-.043-.35-.078-.528-.103V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887a13.33 13.33 0 00-.73-.016c-.344 0-.687.015-1.028.043V9.006a.186.186 0 00-.186-.186H7.362a.185.185 0 00-.185.186v1.98a18.3 18.3 0 00-1.12.222V9.006a.186.186 0 00-.186-.186H3.938a.185.185 0 00-.185.186v2.336c-.461.162-.912.355-1.348.577C.868 12.72 0 14.195 0 15.932c0 3.73 3.86 5.868 9.531 5.868 5.176 0 8.784-1.815 10.37-4.631a4.935 4.935 0 002.729-.861c.451-.31.81-.72 1.053-1.206a2.128 2.128 0 0 0.047-3.571z" />
        </svg>
      );
    case "aws":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M18.72 13.92c-.18 0-.36.03-.54.08-.68.18-1.23.63-1.46 1.27-.15.42-.14.88.03 1.29.17.41.5.73.91.9.41.17.88.18 1.3.03.42-.15.77-.47.96-.88.19-.41.22-.88.08-1.31a2.03 2.03 0 0 0-1.28-1.38zM24 16.5c0-.66-.23-1.3-.65-1.81-.42-.51-1.01-.84-1.66-.94v-.11c.54-.17 1.01-.52 1.33-.98.32-.47.47-1.03.43-1.6-.08-.98-.65-1.83-1.53-2.25C21.03 8.39 20 8.28 19 8.5V6.75C19 5.23 17.77 4 16.25 4h-8.5C6.23 4 5 5.23 5 6.75v10.5C5 18.77 6.23 20 7.75 20h8.5c1.23 0 2.31-.81 2.66-2 .16-.54.14-1.12-.05-1.65.34.05.69.05 1.04-.01.52-.09 1-.34 1.37-.71.37-.37.62-.85.71-1.37.06-.35.06-.7 0-1.05l.07.29zM12 18.25c-3.45 0-6.25-1.57-6.25-3.5s2.8-3.5 6.25-3.5 6.25 1.57 6.25 3.5-2.8 3.5-6.25 3.5z" />
        </svg>
      );
    case "vercel":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 1L24 22H0L12 1Z" />
        </svg>
      );
    case "vscode":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.12a.999.999 0 0 0-1.276.05L.35 7.27a.999.999 0 0 0-.067 1.41l3.52 3.32-3.52 3.32a.999.999 0 0 0 .067 1.41l1.299 1.21a.999.999 0 0 0 1.276.05l4.12-3.12 9.46 8.63c.49.447 1.213.568 1.826.3l4.818-2.38A1.5 1.5 0 0 0 24 20.15V3.85a1.5 1.5 0 0 0-.85-1.263z"/>
        </svg>
      );
    case "claudecode":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2L14.5 8.5L21 11L14.5 13.5L12 20L9.5 13.5L3 11L9.5 8.5L12 2Z" />
        </svg>
      );
    case "codex":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M22.28 10.74a5.98 5.98 0 0 0-.52-4.98 6 6 0 0 0-6.57-2.82 5.98 5.98 0 0 0-4.6-2.22 6 6 0 0 0-5.72 4.15 5.98 5.98 0 0 0-4.08 2.95 6 6 0 0 0 .84 7.12 5.98 5.98 0 0 0 .52 4.98 6 6 0 0 0 6.57 2.82 5.98 5.98 0 0 0 4.6 2.22 6 6 0 0 0 5.72-4.15 5.98 5.98 0 0 0 4.08-2.95 6 6 0 0 0-.84-7.12z" />
        </svg>
      );
    case "githubactions":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 14.5h-2v-3H8v-2h3v-3h2v3h3v2h-3v3z"/>
        </svg>
      );
    default:
      return null;
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
      } border border-slate-200/80 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 transition-all hover:border-cyan-500 hover:scale-105 shadow-sm ${className}`}
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
    { key: "languages", title: "Languages", icon: "⚡" },
    { key: "frontend", title: "Frontend", icon: "💻" },
    { key: "backend", title: "Backend", icon: "🗄️" },
    { key: "tools", title: "Tools & DevOps", icon: "🛠️" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
      {categories.map((cat) => {
        const items = GLOBAL_TECH_STACK.filter((item) => item.category === cat.key);
        return (
          <div
            key={cat.key}
            className={`p-5 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
              darkMode
                ? "bg-slate-900/80 border-slate-800/80 hover:border-slate-700/90"
                : "bg-white/80 border-slate-200/90 shadow-lg shadow-slate-200/40"
            }`}
          >
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-200/80 dark:border-slate-800/60">
              <span className="text-lg">{cat.icon}</span>
              <h3 className={`text-sm font-bold font-mono ${darkMode ? "text-white" : "text-slate-900"}`}>{cat.title}</h3>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`group relative flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all duration-300 cursor-default ${
                    darkMode
                      ? "bg-slate-950/70 border-slate-800/70 hover:border-cyan-500/50"
                      : "bg-slate-50 border-slate-200 hover:border-cyan-500/50 shadow-sm"
                  }`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 16px ${item.glowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 0 0 transparent";
                  }}
                >
                  <div className={`transition-all duration-300 opacity-30 group-hover:opacity-100 group-hover:scale-110 ${item.colorClass}`}>
                    <TechSvgIcon id={item.id} size={24} />
                  </div>
                  <span className={`mt-1.5 text-[10px] font-mono font-medium text-center transition-colors ${
                    darkMode ? "text-slate-400 group-hover:text-slate-100" : "text-slate-600 group-hover:text-slate-900"
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
