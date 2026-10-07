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

    ctx.imageSmoothingEnabled = false;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Characters / tokens for Data Engineering pixel streams
    const dataTokens = ["0", "1", "ETL", "SQL", "PY", "RAW", "DB", ">>", "PARQUET", "S3", "DAG", "LOG"];

    // Initialize particles across full width
    const colStep = 32;
    let particles = createParticles(width, height, colStep, dataTokens);

    function createParticles(w: number, h: number, step: number, tokens: string[]) {
      const numCols = Math.max(Math.floor(w / step), 4);
      const items = [];
      for (let i = 0; i < numCols; i++) {
        items.push({
          x: i * step + 8 + (Math.random() * 8 - 4),
          y: Math.random() * h,
          speed: 1.2 + Math.random() * 2.2,
          char: tokens[Math.floor(Math.random() * tokens.length)],
          colorIdx: i % 3,
        });
      }
      return items;
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      ctx.imageSmoothingEnabled = false;
      particles = createParticles(width, height, colStep, dataTokens);
    };

    window.addEventListener("resize", handleResize);

    let step = 0;

    const render = () => {
      step += 0.025;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");

      // Calculate container bounds for flanking server racks
      const shellWidth = Math.min(1180, width - 48);
      const shellLeft = (width - shellWidth) / 2;
      const shellRight = shellLeft + shellWidth;

      // 1. Retro Pixel Grid Background Texture
      ctx.fillStyle = isDark ? "rgba(30, 41, 59, 0.35)" : "rgba(203, 213, 225, 0.35)";
      const pixelGridSize = 24;
      for (let x = 0; x < width; x += pixelGridSize) {
        for (let y = 0; y < height; y += pixelGridSize) {
          if ((x / pixelGridSize + y / pixelGridSize) % 2 === 0) {
            ctx.fillRect(x, y, 2, 2);
          }
        }
      }

      // 2. Full-Screen 8-Bit Pixel Data Streams (Top-to-Bottom)
      particles.forEach((p) => {
        p.y += p.speed;
        if (p.y > height + 20) {
          p.y = -20;
          p.speed = 1.2 + Math.random() * 2.2;
          p.char = dataTokens[Math.floor(Math.random() * dataTokens.length)];
        }

        ctx.font = "11px 'Fira Code', 'VT323', monospace";
        if (isDark) {
          ctx.fillStyle =
            p.colorIdx === 0
              ? "rgba(56, 189, 248, 0.5)"
              : p.colorIdx === 1
              ? "rgba(52, 211, 153, 0.5)"
              : "rgba(168, 85, 247, 0.45)";
        } else {
          ctx.fillStyle =
            p.colorIdx === 0
              ? "rgba(2, 132, 199, 0.4)"
              : p.colorIdx === 1
              ? "rgba(5, 150, 105, 0.4)"
              : "rgba(126, 34, 206, 0.35)";
        }

        // Draw character token & trailing pixel bit
        ctx.fillText(p.char, p.x, p.y);
        ctx.fillRect(p.x + 2, p.y - 12, 4, 4);
      });

      // 3. Server Racks with Blinking Pixel LEDs (Safely placed in visible gutters or edges)
      const rackWidth = 64;
      const rackHeight = 130;
      const leftRackX = Math.max(10, Math.min(shellLeft - rackWidth - 8, 30));
      const rightRackX = Math.min(width - rackWidth - 10, Math.max(shellRight + 8, width - rackWidth - 30));

      const serverRacks = [
        { x: leftRackX, y: 120 },
        { x: leftRackX, y: 380 },
        { x: rightRackX, y: 160 },
        { x: rightRackX, y: 480 },
      ];

      serverRacks.forEach((rack) => {
        // Ensure rack stays strictly inside canvas bounds
        if (rack.x < 0 || rack.x + rackWidth > width) return;

        ctx.fillStyle = isDark ? "rgba(15, 23, 42, 0.85)" : "rgba(241, 245, 249, 0.9)";
        ctx.strokeStyle = isDark ? "rgba(56, 189, 248, 0.6)" : "rgba(2, 132, 199, 0.6)";
        ctx.lineWidth = 2;
        ctx.fillRect(rack.x, rack.y, rackWidth, rackHeight);
        ctx.strokeRect(rack.x, rack.y, rackWidth, rackHeight);

        // Rack slots and LEDs
        for (let slot = 0; slot < 4; slot++) {
          const slotY = rack.y + 10 + slot * 28;
          ctx.fillStyle = isDark ? "rgba(30, 41, 59, 0.9)" : "rgba(226, 232, 240, 0.95)";
          ctx.fillRect(rack.x + 5, slotY, rackWidth - 10, 20);

          const led1Active = Math.sin(step * 4 + slot + rack.x) > 0;
          const led2Active = Math.cos(step * 5 + slot) > 0.1;

          ctx.fillStyle = led1Active ? "#34d399" : "rgba(52, 211, 153, 0.25)";
          ctx.fillRect(rack.x + 10, slotY + 6, 6, 6);

          ctx.fillStyle = led2Active ? "#38bdf8" : "rgba(56, 189, 248, 0.25)";
          ctx.fillRect(rack.x + 22, slotY + 6, 6, 6);

          ctx.fillStyle = isDark ? "rgba(148, 163, 184, 0.6)" : "rgba(71, 85, 105, 0.6)";
          ctx.fillRect(rack.x + 34, slotY + 8, 18, 2);
        }
      });

      // 4. Retro Data Terminal / Pipeline HUD Widget
      const hudWidth = 150;
      const hudHeight = 85;
      const hudX = Math.min(width - hudWidth - 12, Math.max(shellRight + 12, width - hudWidth - 20));
      const hudY = 80;

      if (hudX >= 10 && hudX + hudWidth <= width) {
        ctx.fillStyle = isDark ? "rgba(15, 23, 42, 0.88)" : "rgba(255, 255, 255, 0.92)";
        ctx.strokeStyle = isDark ? "rgba(56, 189, 248, 0.7)" : "rgba(2, 132, 199, 0.7)";
        ctx.lineWidth = 2;
        ctx.fillRect(hudX, hudY, hudWidth, hudHeight);
        ctx.strokeRect(hudX, hudY, hudWidth, hudHeight);

        // Header
        ctx.fillStyle = isDark ? "#38bdf8" : "#0284c7";
        ctx.font = "8px 'Press Start 2P', monospace";
        ctx.fillText("DATA PIPELINE", hudX + 10, hudY + 18);

        // Status indicator LED
        const statusPulse = Math.sin(step * 3) > 0;
        ctx.fillStyle = statusPulse ? "#34d399" : "rgba(52, 211, 153, 0.3)";
        ctx.fillRect(hudX + 130, hudY + 11, 6, 6);

        // Terminal text lines
        ctx.fillStyle = isDark ? "#94a3b8" : "#475569";
        ctx.font = "9px 'Fira Code', 'VT323', monospace";
        ctx.fillText("> STATUS: RUNNING", hudX + 10, hudY + 38);

        const latVal = (12 + Math.sin(step * 2) * 3).toFixed(0);
        ctx.fillText(`> LATENCY: ${latVal}ms`, hudX + 10, hudY + 54);

        const rowCount = (100 + Math.floor(step * 10) % 50).toString();
        ctx.fillText(`> ROWS: ${rowCount}k/s`, hudX + 10, hudY + 70);
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
