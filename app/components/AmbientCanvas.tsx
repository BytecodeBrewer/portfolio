"use client";

import { useEffect, useRef } from "react";

export function useCanvasAnimation(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  projectSlug?: string
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Crisp pixel art rendering
    ctx.imageSmoothingEnabled = false;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      ctx.imageSmoothingEnabled = false;
    };

    window.addEventListener("resize", handleResize);

    // Pixel particles for full-screen retro data streams
    const numColumns = Math.floor(width / 32);
    const particles = Array.from({ length: Math.max(numColumns, 20) }, (_, i) => ({
      x: i * 32 + 16,
      y: Math.random() * height,
      speed: 1 + Math.random() * 2,
      char: String.fromCharCode(0x30 + Math.floor(Math.random() * 10)),
      color: i % 3 === 0 ? "#38bdf8" : i % 3 === 1 ? "#34d399" : "#a855f7",
      size: 10 + (i % 3) * 2,
    }));

    // Server rack LEDs
    const serverRacks = [
      { x: 40, y: 120 },
      { x: 40, y: 320 },
      { x: width - 120, y: 180 },
      { x: width - 120, y: 450 },
    ];

    let step = 0;

    const render = () => {
      step += 0.02;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");

      // 1. Retro Pixel Grid Pattern
      ctx.fillStyle = isDark ? "rgba(30, 41, 59, 0.25)" : "rgba(226, 232, 240, 0.4)";
      const pixelGridSize = 24;
      for (let x = 0; x < width; x += pixelGridSize) {
        for (let y = 0; y < height; y += pixelGridSize) {
          if ((x / pixelGridSize + y / pixelGridSize) % 2 === 0) {
            ctx.fillRect(x, y, 2, 2);
          }
        }
      }

      // 2. Continuous 8-Bit Pixel Data Stream Columns (Top-to-Bottom across entire screen)
      particles.forEach((p, idx) => {
        p.y += p.speed;
        if (p.y > height) {
          p.y = -20;
          p.speed = 1 + Math.random() * 2;
          p.char = String.fromCharCode(0x30 + Math.floor(Math.random() * 10));
        }

        ctx.font = "12px 'Press Start 2P', 'VT323', monospace";
        ctx.fillStyle = isDark
          ? idx % 2 === 0 ? "rgba(56, 189, 248, 0.35)" : "rgba(52, 211, 153, 0.3)"
          : idx % 2 === 0 ? "rgba(2, 132, 199, 0.25)" : "rgba(5, 150, 105, 0.25)";

        // Draw pixelated character
        ctx.fillText(p.char, p.x, p.y);

        // Connecting pixel trail dot
        ctx.fillRect(p.x + 2, p.y - 12, 4, 4);
      });

      // 3. Retro Server Racks with Blinking Pixel LEDs (Fixed on Left & Right Margins)
      serverRacks.forEach((rack) => {
        // Rack casing
        ctx.fillStyle = isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(241, 245, 249, 0.7)";
        ctx.strokeStyle = isDark ? "rgba(51, 65, 85, 0.8)" : "rgba(203, 213, 225, 0.8)";
        ctx.lineWidth = 2;
        ctx.fillRect(rack.x, rack.y, 64, 120);
        ctx.strokeRect(rack.x, rack.y, 64, 120);

        // Rack slots & LED indicators
        for (let slot = 0; slot < 4; slot++) {
          const slotY = rack.y + 12 + slot * 26;
          ctx.fillStyle = isDark ? "rgba(30, 41, 59, 0.8)" : "rgba(226, 232, 240, 0.9)";
          ctx.fillRect(rack.x + 6, slotY, 52, 18);

          // Blinking LEDs
          const led1Active = Math.sin(step * 3 + slot + rack.x) > 0;
          const led2Active = Math.cos(step * 4 + slot) > 0.2;

          ctx.fillStyle = led1Active ? "#34d399" : "rgba(52, 211, 153, 0.2)";
          ctx.fillRect(rack.x + 12, slotY + 6, 6, 6);

          ctx.fillStyle = led2Active ? "#38bdf8" : "rgba(56, 189, 248, 0.2)";
          ctx.fillRect(rack.x + 24, slotY + 6, 6, 6);

          // Activity bar
          ctx.fillStyle = isDark ? "rgba(148, 163, 184, 0.4)" : "rgba(100, 116, 139, 0.4)";
          ctx.fillRect(rack.x + 36, slotY + 8, 16, 2);
        }
      });

      // 4. Project-Specific Gamified ETL / Engine Overlay
      const centerX = width * 0.78;
      const centerY = height * 0.35;

      if (projectSlug === "notion-sync") {
        // Notion Sync: 8-Bit Database Merger
        const dbX = [centerX - 90, centerX, centerX + 90];
        const dbY = centerY - 100;
        const appX = centerX;
        const appY = centerY + 80;

        dbX.forEach((x, i) => {
          ctx.fillStyle = isDark ? "rgba(245, 158, 11, 0.2)" : "rgba(217, 119, 6, 0.2)";
          ctx.strokeStyle = isDark ? "#fbbf24" : "#d97706";
          ctx.lineWidth = 2;
          ctx.fillRect(x - 24, dbY - 16, 48, 32);
          ctx.strokeRect(x - 24, dbY - 16, 48, 32);

          ctx.fillStyle = isDark ? "#fbbf24" : "#b45309";
          ctx.font = "9px 'Press Start 2P', monospace";
          ctx.fillText(`DB${i + 1}`, x - 12, dbY + 4);
        });

        // Packets moving to Master DB
        const progress = (step % 2) / 2;
        dbX.forEach((x) => {
          const px = x + (appX - x) * progress;
          const py = dbY + 16 + (appY - 24 - (dbY + 16)) * progress;
          ctx.fillStyle = "#fbbf24";
          ctx.fillRect(px - 3, py - 3, 6, 6);
        });

        // Master DB Container
        ctx.fillStyle = isDark ? "rgba(245, 158, 11, 0.15)" : "rgba(217, 119, 6, 0.15)";
        ctx.strokeStyle = isDark ? "#f59e0b" : "#b45309";
        ctx.fillRect(appX - 44, appY - 24, 88, 48);
        ctx.strokeRect(appX - 44, appY - 24, 88, 48);

        ctx.fillStyle = isDark ? "#fef08a" : "#78350f";
        ctx.font = "8px 'Press Start 2P', monospace";
        ctx.fillText("MASTER DB", appX - 32, appY + 4);

      } else if (projectSlug === "mas") {
        // MAS: Pixel Bot Worker Loop
        ctx.fillStyle = isDark ? "rgba(16, 185, 129, 0.15)" : "rgba(5, 150, 105, 0.15)";
        ctx.strokeStyle = isDark ? "#34d399" : "#059669";
        ctx.lineWidth = 2;
        ctx.fillRect(centerX - 120, centerY - 60, 240, 120);
        ctx.strokeRect(centerX - 120, centerY - 60, 240, 120);

        ctx.fillStyle = isDark ? "#34d399" : "#047857";
        ctx.font = "9px 'Press Start 2P', monospace";
        ctx.fillText("MAS CLI ORCHESTRATOR", centerX - 105, centerY - 40);

        // Animated Bot Agent
        const botX = centerX + Math.sin(step * 2) * 60;
        ctx.fillStyle = isDark ? "#10b981" : "#059669";
        ctx.fillRect(botX - 16, centerY, 32, 24);

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(botX - 8, centerY + 6, 4, 4);
        ctx.fillRect(botX + 4, centerY + 6, 4, 4);

      } else if (projectSlug === "q-bet") {
        // Q-Bet: Quant Engine Flow
        const nodes = ["Odds Feed", "Domain Model", "EV Math", "Capital Gateway"];
        nodes.forEach((label, i) => {
          const y = centerY - 80 + i * 48;
          ctx.fillStyle = isDark ? "rgba(16, 185, 129, 0.15)" : "rgba(5, 150, 105, 0.15)";
          ctx.strokeStyle = isDark ? "#34d399" : "#047857";
          ctx.lineWidth = 2;
          ctx.fillRect(centerX - 70, y - 14, 140, 28);
          ctx.strokeRect(centerX - 70, y - 14, 140, 28);

          ctx.fillStyle = isDark ? "#34d399" : "#047857";
          ctx.font = "8px 'Press Start 2P', monospace";
          ctx.fillText(label, centerX - 55, y + 4);
        });

        // Flowing math packet
        const pY = centerY - 80 + ((step * 60) % (3 * 48));
        ctx.fillStyle = "#34d399";
        ctx.fillRect(centerX - 4, pY - 4, 8, 8);

      } else if (projectSlug === "argus") {
        // ARGUS: FX Ticker Ingestion Stages
        const stages = ["FX Rates Feed", "Pydantic Guard", "Risk Evaluator", "Alert Sink"];
        stages.forEach((label, i) => {
          const y = centerY - 60 + i * 42;
          ctx.fillStyle = isDark ? "rgba(56, 189, 248, 0.15)" : "rgba(2, 132, 199, 0.15)";
          ctx.strokeStyle = isDark ? "#38bdf8" : "#0284c7";
          ctx.lineWidth = 2;
          ctx.fillRect(centerX - 70, y - 12, 140, 26);
          ctx.strokeRect(centerX - 70, y - 12, 140, 26);

          ctx.fillStyle = isDark ? "#38bdf8" : "#0284c7";
          ctx.font = "8px 'Press Start 2P', monospace";
          ctx.fillText(label, centerX - 58, y + 4);
        });

        const packetY = centerY - 60 + ((step * 70) % (3 * 42));
        ctx.fillStyle = "#38bdf8";
        ctx.fillRect(centerX - 4, packetY - 4, 8, 8);

      } else if (projectSlug === "smart") {
        // SMART: Linux Telemetry HUD
        ctx.fillStyle = isDark ? "rgba(139, 92, 246, 0.15)" : "rgba(124, 58, 237, 0.15)";
        ctx.strokeStyle = isDark ? "#a78bfa" : "#7c3aed";
        ctx.lineWidth = 2;
        ctx.fillRect(centerX - 100, centerY - 50, 200, 100);
        ctx.strokeRect(centerX - 100, centerY - 50, 200, 100);

        ctx.fillStyle = isDark ? "#a78bfa" : "#6d28d9";
        ctx.font = "8px 'Press Start 2P', monospace";
        ctx.fillText("SMART TELEMETRY", centerX - 85, centerY - 32);

        const cpu = Math.floor(15 + Math.sin(step * 2) * 10);
        ctx.fillText(`CPU: ${cpu}% [||||.]`, centerX - 85, centerY - 10);
        ctx.fillText("RAM: 42% [||||||]", centerX - 85, centerY + 10);
        ctx.fillText("DAEMONS: 14 OK", centerX - 85, centerY + 30);

      } else {
        // Data Lab / Default: NumPy & DuckDB Analytics Matrix
        ctx.fillStyle = isDark ? "rgba(59, 130, 246, 0.12)" : "rgba(37, 99, 235, 0.12)";
        ctx.strokeStyle = isDark ? "#60a5fa" : "#1d4ed8";
        ctx.lineWidth = 2;
        ctx.fillRect(centerX - 110, centerY - 55, 220, 110);
        ctx.strokeRect(centerX - 110, centerY - 55, 220, 110);

        ctx.fillStyle = isDark ? "#60a5fa" : "#1d4ed8";
        ctx.font = "8px 'Press Start 2P', monospace";
        ctx.fillText("DATA LAB ANALYTICS", centerX - 95, centerY - 38);

        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 4; col++) {
            const val = Math.floor(Math.sin(step + row + col) * 50 + 50);
            ctx.fillText(`${val}`, centerX - 90 + col * 46, centerY - 10 + row * 22);
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
  }, [canvasRef, projectSlug]);
}

interface Props {
  className?: string;
  projectSlug?: string;
}

export function AmbientCanvas({ className = "", projectSlug }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useCanvasAnimation(canvasRef, projectSlug);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
      className={className}
    />
  );
}
