"use client";

import { useEffect, useRef } from "react";

interface Props {
  className?: string;
  projectSlug?: string;
}

interface FloatingNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label: string;
  type: "cloud" | "db" | "ai" | "code" | "node";
  color: string;
  pulseOffset: number;
}

export function AmbientCanvas({ className = "", projectSlug }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const getLabelsForSlug = (slug?: string) => {
      switch (slug) {
        case "q-bet":
          return [
            { text: "EV Engine", type: "node", color: "#10b981" },
            { text: "Arbitrage", type: "node", color: "#34d399" },
            { text: "Liquidity", type: "db", color: "#059669" },
            { text: "Pydantic", type: "code", color: "#6ee7b7" },
            { text: "Risk Lockup", type: "ai", color: "#10b981" },
          ] as const;
        case "mas":
          return [
            { text: "Agent Bob", type: "ai", color: "#10b981" },
            { text: "Orchestrator", type: "node", color: "#34d399" },
            { text: "RunPod GPU", type: "cloud", color: "#6ee7b7" },
            { text: "vLLM", type: "ai", color: "#059669" },
            { text: "Task Graph", type: "code", color: "#a7f3d0" },
          ] as const;
        case "argus":
          return [
            { text: "FX Stream", type: "node", color: "#38bdf8" },
            { text: "yfinance", type: "db", color: "#0284c7" },
            { text: "pandas EV", type: "code", color: "#0ea5e9" },
            { text: "Anomaly Alert", type: "ai", color: "#38bdf8" },
          ] as const;
        case "notion-sync":
          return [
            { text: "Notion API", type: "cloud", color: "#f59e0b" },
            { text: "Delta Sync", type: "node", color: "#d97706" },
            { text: "Master DB", type: "db", color: "#b45309" },
            { text: "Electron Tray", type: "code", color: "#fbbf24" },
          ] as const;
        case "smart":
          return [
            { text: "CPU Telemetry", type: "node", color: "#8b5cf6" },
            { text: "RAM Daemon", type: "db", color: "#7c3aed" },
            { text: "Linux Kernel", type: "code", color: "#a78bfa" },
            { text: "Systemd", type: "cloud", color: "#c084fc" },
          ] as const;
        case "data-lab":
          return [
            { text: "NumPy Math", type: "code", color: "#3b82f6" },
            { text: "RAG Vector Search", type: "ai", color: "#2563eb" },
            { text: "Databricks", type: "cloud", color: "#1d4ed8" },
            { text: "Azure Pipeline", type: "node", color: "#60a5fa" },
          ] as const;
        default:
          return [
            { text: "ETL", type: "node", color: "#38bdf8" },
            { text: "PostgreSQL", type: "db", color: "#34d399" },
            { text: "Django", type: "code", color: "#818cf8" },
            { text: "Next.js", type: "code", color: "#f472b6" },
            { text: "Supabase", type: "db", color: "#34d399" },
            { text: "Vercel", type: "cloud", color: "#a78bfa" },
            { text: "Agentic AI", type: "ai", color: "#fbbf24" },
            { text: "DuckDB", type: "db", color: "#fb7185" },
            { text: "Pipeline", type: "node", color: "#38bdf8" },
            { text: "PyTorch", type: "ai", color: "#fbbf24" },
          ] as const;
      }
    };

    const labels = getLabelsForSlug(projectSlug);

    const nodes: FloatingNode[] = Array.from({ length: 22 }, (_, i) => {
      const meta = labels[i % labels.length];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 3 + 2,
        label: meta.text,
        type: meta.type as FloatingNode["type"],
        color: meta.color,
        pulseOffset: Math.random() * Math.PI * 2,
      };
    });

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Determine theme mode from document class
      const isDark = document.documentElement.classList.contains("dark");

      // Grid dot background
      const gridSpacing = 48;
      ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(15, 23, 42, 0.04)";
      for (let x = gridSpacing / 2; x < width; x += gridSpacing) {
        for (let y = gridSpacing / 2; y < height; y += gridSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Connecting pipeline edges between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * (isDark ? 0.15 : 0.22);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = isDark ? `rgba(56, 189, 248, ${alpha})` : `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      // Draw floating nodes with labels and light animations
      nodes.forEach((node, idx) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        const pulse = Math.sin(time + node.pulseOffset) * 0.3 + 0.7;

        // Glowing node point
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (1 + pulse * 0.2), 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isDark ? 8 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw node label every few nodes
        if (idx % 2 === 0) {
          ctx.font = "10px Inter, system-ui, sans-serif";
          ctx.fillStyle = isDark ? "rgba(226, 232, 240, 0.45)" : "rgba(30, 41, 59, 0.55)";
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}
