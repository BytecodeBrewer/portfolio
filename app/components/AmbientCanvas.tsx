"use client";

import { useEffect, useRef } from "react";

interface Props {
  className?: string;
  projectSlug?: string;
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

    let step = 0;

    const render = () => {
      step += 0.015;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");
      const baseAlpha = isDark ? 0.25 : 0.2;

      ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.02)" : "rgba(15, 23, 42, 0.03)";
      const gridSpacing = 40;
      for (let x = gridSpacing / 2; x < width; x += gridSpacing) {
        for (let y = gridSpacing / 2; y < height; y += gridSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const centerX = width * 0.82;
      const centerY = height * 0.35;

      if (projectSlug === "notion-sync") {
        // Notion Sync: Databases merging into central application with rotating gears
        const dbX = [centerX - 120, centerX, centerX + 120];
        const dbY = centerY - 140;
        const appX = centerX;
        const appY = centerY + 120;

        // Draw source DBs
        dbX.forEach((x, i) => {
          ctx.fillStyle = isDark ? "rgba(245, 158, 11, 0.15)" : "rgba(217, 119, 6, 0.15)";
          ctx.strokeStyle = isDark ? `rgba(245, 158, 11, ${baseAlpha})` : `rgba(217, 119, 6, ${baseAlpha})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(x - 30, dbY - 20, 60, 40, 6);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = isDark ? "rgba(251, 191, 36, 0.7)" : "rgba(180, 83, 9, 0.7)";
          ctx.font = "10px monospace";
          ctx.fillText(`DB-0${i + 1}`, x - 14, dbY + 4);

          // Connector dashed line down to central merge point
          ctx.beginPath();
          ctx.setLineDash([4, 4]);
          ctx.moveTo(x, dbY + 20);
          ctx.lineTo(appX, appY - 35);
          ctx.stroke();
          ctx.setLineDash([]);
        });

        // Flowing packets down to central app
        const progress = (step % 2) / 2;
        dbX.forEach((x) => {
          const px = x + (appX - x) * progress;
          const py = dbY + 20 + (appY - 35 - (dbY + 20)) * progress;
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? "#fbbf24" : "#d97706";
          ctx.fill();
        });

        // Central Application with rotating gears
        ctx.fillStyle = isDark ? "rgba(245, 158, 11, 0.12)" : "rgba(217, 119, 6, 0.1)";
        ctx.strokeStyle = isDark ? `rgba(245, 158, 11, ${baseAlpha * 1.5})` : `rgba(217, 119, 6, ${baseAlpha * 1.5})`;
        ctx.beginPath();
        ctx.roundRect(appX - 50, appY - 35, 100, 70, 10);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isDark ? "rgba(253, 230, 138, 0.8)" : "rgba(180, 83, 9, 0.8)";
        ctx.font = "11px monospace";
        ctx.fillText("MASTER DB", appX - 30, appY - 10);

        // Rotating Gear representation
        const gearAngle = step * 2;
        ctx.save();
        ctx.translate(appX, appY + 15);
        ctx.rotate(gearAngle);
        ctx.strokeStyle = isDark ? "rgba(251, 191, 36, 0.6)" : "rgba(217, 119, 6, 0.6)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.stroke();
        for (let g = 0; g < 6; g++) {
          ctx.rotate(Math.PI / 3);
          ctx.moveTo(10, 0);
          ctx.lineTo(14, 0);
          ctx.stroke();
        }
        ctx.restore();

      } else if (projectSlug === "mas") {
        // MAS: Terminal console & Bot worker agent animation loop
        ctx.fillStyle = isDark ? "rgba(16, 185, 129, 0.08)" : "rgba(5, 150, 105, 0.08)";
        ctx.strokeStyle = isDark ? `rgba(16, 185, 129, ${baseAlpha * 1.5})` : `rgba(5, 150, 105, ${baseAlpha * 1.5})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(centerX - 140, centerY - 80, 280, 160, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isDark ? "#34d399" : "#059669";
        ctx.font = "11px monospace";
        ctx.fillText("MAS CLI Orchestrator $", centerX - 125, centerY - 60);

        // Rotating worker status blocks (3-5 state loop)
        const states = [
          "> Reading context graph...",
          "> Worker Bob: Ingesting code",
          "> RunPod vLLM: Executing refactor",
          "> Running pytest validation...",
          "> Autonomous Git Commit OK"
        ];
        const stateIdx = Math.floor((step * 0.8) % states.length);

        ctx.fillStyle = isDark ? "rgba(167, 243, 208, 0.8)" : "rgba(4, 120, 87, 0.8)";
        ctx.font = "10px monospace";
        ctx.fillText(states[stateIdx], centerX - 125, centerY - 20);

        // Animated bot agent icon moving back & forth
        const botOffset = Math.sin(step * 2) * 80;
        ctx.fillStyle = isDark ? "#10b981" : "#047857";
        ctx.beginPath();
        ctx.roundRect(centerX + botOffset - 15, centerY + 25, 30, 20, 4);
        ctx.fill();

        ctx.fillStyle = isDark ? "#a7f3d0" : "#d1fae5";
        ctx.font = "9px monospace";
        ctx.fillText("🤖 Bob", centerX + botOffset - 12, centerY + 38);

      } else if (projectSlug === "q-bet") {
        // Q-Bet: Quant engine pipeline & EV calculation flow
        const nodes = ["Odds Feed", "Pydantic Domain", "EV Math Engine", "Capital Gateway"];
        const spacing = 75;

        nodes.forEach((label, i) => {
          const y = centerY - 100 + i * spacing;
          ctx.fillStyle = isDark ? "rgba(16, 185, 129, 0.1)" : "rgba(5, 150, 105, 0.1)";
          ctx.strokeStyle = isDark ? `rgba(16, 185, 129, ${baseAlpha * 1.5})` : `rgba(5, 150, 105, ${baseAlpha * 1.5})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(centerX - 80, y - 18, 160, 36, 6);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = isDark ? "#34d399" : "#047857";
          ctx.font = "11px monospace";
          ctx.fillText(label, centerX - 60, y + 4);

          if (i < nodes.length - 1) {
            ctx.beginPath();
            ctx.setLineDash([3, 3]);
            ctx.moveTo(centerX, y + 18);
            ctx.lineTo(centerX, y + spacing - 18);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        });

        // Flowing math packet
        const pProgress = (step % 1.5) / 1.5;
        const py = centerY - 100 + pProgress * (3 * spacing);
        ctx.beginPath();
        ctx.arc(centerX, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "#34d399" : "#10b981";
        ctx.fill();

      } else if (projectSlug === "argus") {
        // ARGUS: Gamified FX Data Ingestion Pipeline (No Line Graphs / Waves)
        const stages = ["FX Rates Feed", "Pydantic Guard", "Risk Evaluator", "Alert Sink"];
        const boxWidth = 140;
        const boxHeight = 32;

        stages.forEach((label, i) => {
          const y = centerY - 70 + i * 50;
          ctx.fillStyle = isDark ? "rgba(56, 189, 248, 0.12)" : "rgba(2, 132, 199, 0.1)";
          ctx.strokeStyle = isDark ? `rgba(56, 189, 248, ${baseAlpha * 1.5})` : `rgba(2, 132, 199, ${baseAlpha * 1.5})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(centerX - boxWidth / 2, y - boxHeight / 2, boxWidth, boxHeight, 6);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = isDark ? "#38bdf8" : "#0284c7";
          ctx.font = "10px monospace";
          ctx.fillText(label, centerX - boxWidth / 2 + 12, y + 3);

          if (i < stages.length - 1) {
            ctx.beginPath();
            ctx.setLineDash([3, 3]);
            ctx.moveTo(centerX, y + boxHeight / 2);
            ctx.lineTo(centerX, y + 50 - boxHeight / 2);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        });

        // Ticker data packet flowing through pipeline
        const packetOffset = (step * 80) % 150;
        ctx.beginPath();
        ctx.arc(centerX, centerY - 70 + packetOffset, 4, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "#38bdf8" : "#0284c7";
        ctx.fill();

      } else if (projectSlug === "smart") {
        // SMART: Lightweight Linux telemetry console HUD
        ctx.fillStyle = isDark ? "rgba(139, 92, 246, 0.08)" : "rgba(124, 58, 237, 0.08)";
        ctx.strokeStyle = isDark ? `rgba(139, 92, 246, ${baseAlpha * 1.5})` : `rgba(124, 58, 237, ${baseAlpha * 1.5})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(centerX - 110, centerY - 70, 220, 140, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isDark ? "#a78bfa" : "#6d28d9";
        ctx.font = "10px monospace";
        ctx.fillText("SMART Telemetry Daemon", centerX - 95, centerY - 50);

        const cpuUsage = Math.floor(12 + Math.sin(step * 2) * 8);
        const ramUsage = Math.floor(42 + Math.cos(step * 1.5) * 5);

        ctx.fillStyle = isDark ? "#c084fc" : "#7c3aed";
        ctx.fillText(`CPU Load: ${cpuUsage}% [||||....]`, centerX - 95, centerY - 20);
        ctx.fillText(`RAM Alloc: ${ramUsage}% [||||||..]`, centerX - 95, centerY + 10);
        ctx.fillText("systemd: 14 daemons OK", centerX - 95, centerY + 40);

      } else {
        // Data Lab & Default: Analytical DuckDB & NumPy pipeline blocks
        ctx.fillStyle = isDark ? "rgba(59, 130, 246, 0.08)" : "rgba(37, 99, 235, 0.08)";
        ctx.strokeStyle = isDark ? `rgba(59, 130, 246, ${baseAlpha * 1.5})` : `rgba(37, 99, 235, ${baseAlpha * 1.5})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(centerX - 120, centerY - 70, 240, 140, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isDark ? "#60a5fa" : "#1d4ed8";
        ctx.font = "10px monospace";
        ctx.fillText("Data Lab: NumPy & DuckDB Analytics", centerX - 105, centerY - 48);

        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 4; col++) {
            const val = Math.floor(Math.sin(step + row + col) * 50 + 50) / 100;
            ctx.fillStyle = isDark ? "rgba(147, 197, 253, 0.7)" : "rgba(29, 78, 216, 0.7)";
            ctx.fillText(val.toFixed(2), centerX - 100 + col * 52, centerY - 15 + row * 28);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [projectSlug]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}
