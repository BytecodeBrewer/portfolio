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

    // Pixel particles for full-screen retro data streams
    const colWidth = 36;
    const numColumns = Math.floor(width / colWidth);
    const particles = Array.from({ length: Math.max(numColumns, 25) }, (_, i) => ({
      x: i * colWidth + 12,
      y: Math.random() * height,
      speed: 1.5 + Math.random() * 2.5,
      char: String.fromCharCode(0x30 + Math.floor(Math.random() * 10)),
      colorIdx: i % 3,
    }));

    // Server rack locations
    const serverRacks = [
      { x: 30, y: 100 },
      { x: 30, y: 360 },
      { x: width - 110, y: 140 },
      { x: width - 110, y: 480 },
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

      // 4. Main Page Right-Side Gamified Pixel ETL HUD
      const centerX = width * 0.8;
      const centerY = height * 0.36;

      ctx.fillStyle = isDark ? "rgba(15, 23, 42, 0.85)" : "rgba(255, 255, 255, 0.9)";
      ctx.strokeStyle = isDark ? "rgba(56, 189, 248, 0.7)" : "rgba(2, 132, 199, 0.7)";
      ctx.lineWidth = 2;
      ctx.fillRect(centerX - 120, centerY - 60, 240, 120);
      ctx.strokeRect(centerX - 120, centerY - 60, 240, 120);

      ctx.fillStyle = isDark ? "#38bdf8" : "#0284c7";
      ctx.font = "9px 'Press Start 2P', monospace";
      ctx.fillText("DATA LAB: NUMPY & DUCKDB", centerX - 105, centerY - 38);

      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
          const val = (Math.floor(Math.sin(step + row + col) * 50 + 50) / 100).toFixed(2);
          ctx.fillStyle = isDark ? "rgba(147, 197, 253, 0.85)" : "rgba(29, 78, 216, 0.85)";
          ctx.fillText(val, centerX - 95 + col * 48, centerY - 10 + row * 22);
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
