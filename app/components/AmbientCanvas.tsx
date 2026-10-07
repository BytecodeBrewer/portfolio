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

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      ctx.imageSmoothingEnabled = false;
    };

    window.addEventListener("resize", handleResize);

    // Create side-only columns for data streams to keep central text areas clear and legible
    const leftMarginWidth = Math.max(80, (width - 1180) / 2 + 100);
    const rightMarginStart = width - leftMarginWidth;

    const leftColCount = 4;
    const rightColCount = 4;

    const streamColumns: number[] = [];
    for (let i = 0; i < leftColCount; i++) {
      streamColumns.push(16 + (leftMarginWidth / leftColCount) * i);
    }
    for (let i = 0; i < rightColCount; i++) {
      streamColumns.push(rightMarginStart + (leftMarginWidth / rightColCount) * i);
    }

    const particles = streamColumns.map((colX, idx) => ({
      x: colX,
      y: Math.random() * height,
      speed: 1.5 + Math.random() * 2.5,
      char: String.fromCharCode(0x30 + Math.floor(Math.random() * 10)),
      colorIdx: idx % 3,
    }));

    // Server rack locations placed strictly in the outer side margins
    const serverRacks = [
      { x: 15, y: 120 },
      { x: 15, y: 380 },
      { x: Math.max(width - 95, 10), y: 160 },
      { x: Math.max(width - 95, 10), y: 500 },
    ];

    let step = 0;

    const render = () => {
      step += 0.02;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");

      // 1. Pixel Grid Background Texture
      ctx.fillStyle = isDark ? "rgba(30, 41, 59, 0.4)" : "rgba(203, 213, 225, 0.4)";
      const pixelGridSize = 20;
      for (let x = 0; x < width; x += pixelGridSize) {
        for (let y = 0; y < height; y += pixelGridSize) {
          if ((x / pixelGridSize + y / pixelGridSize) % 2 === 0) {
            ctx.fillRect(x, y, 2, 2);
          }
        }
      }

      // 2. High-Contrast 8-Bit Pixel Data Streams (Top-to-Bottom)
      particles.forEach((p, idx) => {
        p.y += p.speed;
        if (p.y > height) {
          p.y = -20;
          p.speed = 1.5 + Math.random() * 2.5;
          p.char = String.fromCharCode(0x30 + Math.floor(Math.random() * 10));
        }

        ctx.font = "12px 'Fira Code', 'VT323', monospace";
        if (isDark) {
          ctx.fillStyle = p.colorIdx === 0 ? "rgba(56, 189, 248, 0.6)" : p.colorIdx === 1 ? "rgba(52, 211, 153, 0.55)" : "rgba(168, 85, 247, 0.55)";
        } else {
          ctx.fillStyle = p.colorIdx === 0 ? "rgba(2, 132, 199, 0.45)" : p.colorIdx === 1 ? "rgba(5, 150, 105, 0.45)" : "rgba(126, 34, 206, 0.45)";
        }

        // Character and trailing pixel particle
        ctx.fillText(p.char, p.x, p.y);
        ctx.fillRect(p.x + 2, p.y - 14, 5, 5);
      });

      // 3. Server Racks with Blinking Pixel LEDs
      serverRacks.forEach((rack) => {
        ctx.fillStyle = isDark ? "rgba(15, 23, 42, 0.85)" : "rgba(241, 245, 249, 0.9)";
        ctx.strokeStyle = isDark ? "rgba(56, 189, 248, 0.6)" : "rgba(2, 132, 199, 0.6)";
        ctx.lineWidth = 2;
        ctx.fillRect(rack.x, rack.y, 68, 140);
        ctx.strokeRect(rack.x, rack.y, 68, 140);

        // Slots and LEDs
        for (let slot = 0; slot < 4; slot++) {
          const slotY = rack.y + 12 + slot * 30;
          ctx.fillStyle = isDark ? "rgba(30, 41, 59, 0.9)" : "rgba(226, 232, 240, 0.95)";
          ctx.fillRect(rack.x + 6, slotY, 56, 22);

          const led1Active = Math.sin(step * 4 + slot + rack.x) > 0;
          const led2Active = Math.cos(step * 5 + slot) > 0.1;

          ctx.fillStyle = led1Active ? "#34d399" : "rgba(52, 211, 153, 0.25)";
          ctx.fillRect(rack.x + 12, slotY + 7, 7, 7);

          ctx.fillStyle = led2Active ? "#38bdf8" : "rgba(56, 189, 248, 0.25)";
          ctx.fillRect(rack.x + 26, slotY + 7, 7, 7);

          ctx.fillStyle = isDark ? "rgba(148, 163, 184, 0.6)" : "rgba(71, 85, 105, 0.6)";
          ctx.fillRect(rack.x + 40, slotY + 10, 16, 2);
        }
      });

      // 4. Main Page Gamified Pixel ETL HUD (Rendered in right outer margin on wider displays)
      if (width >= 1280) {
        const hudX = width - 210;
        const hudY = height * 0.32;

        ctx.fillStyle = isDark ? "rgba(15, 23, 42, 0.85)" : "rgba(255, 255, 255, 0.9)";
        ctx.strokeStyle = isDark ? "rgba(56, 189, 248, 0.7)" : "rgba(2, 132, 199, 0.7)";
        ctx.lineWidth = 2;
        ctx.fillRect(hudX, hudY, 190, 110);
        ctx.strokeRect(hudX, hudY, 190, 110);

        ctx.fillStyle = isDark ? "#38bdf8" : "#0284c7";
        ctx.font = "8px 'Press Start 2P', monospace";
        ctx.fillText("DATA LAB", hudX + 12, hudY + 20);

        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
            const val = (Math.floor(Math.sin(step + row + col) * 50 + 50) / 100).toFixed(2);
            ctx.fillStyle = isDark ? "rgba(147, 197, 253, 0.85)" : "rgba(29, 78, 216, 0.85)";
            ctx.fillText(val, hudX + 12 + col * 55, hudY + 45 + row * 20);
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
