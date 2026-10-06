"use client";

import { useEffect, useRef } from "react";

interface Props {
  variant?: "etl" | "quant" | "agent" | "lab";
  className?: string;
}

export function AmbientCanvas({ variant = "etl", className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 300);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 200);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle / node generation based on variant
    const particles = Array.from({ length: variant === "quant" ? 30 : 22 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      phase: Math.random() * Math.PI * 2,
    }));

    let step = 0;

    const render = () => {
      step += 0.015;
      ctx.clearRect(0, 0, width, height);

      if (variant === "etl") {
        // Flowing pipeline streams
        ctx.lineWidth = 1.5;
        const numLines = 3;
        for (let i = 0; i < numLines; i++) {
          ctx.beginPath();
          const gradient = ctx.createLinearGradient(0, 0, width, 0);
          gradient.addColorStop(0, "rgba(56, 189, 248, 0.05)");
          gradient.addColorStop(0.5, "rgba(56, 189, 248, 0.35)");
          gradient.addColorStop(1, "rgba(129, 140, 248, 0.05)");
          ctx.strokeStyle = gradient;

          const baseOffsetY = (height / (numLines + 1)) * (i + 1);
          for (let x = 0; x <= width; x += 10) {
            const y = baseOffsetY + Math.sin(x * 0.015 + step + i) * 12;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }

        // Animated packet dots on streams
        particles.forEach((p) => {
          p.x += 1.2;
          if (p.x > width) p.x = 0;
          const streamY = (height / 2) + Math.sin(p.x * 0.015 + step) * 15;

          ctx.beginPath();
          ctx.arc(p.x, streamY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(56, 189, 248, 0.7)";
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      } else if (variant === "quant") {
        // Wave/Financial chart dynamics
        ctx.beginPath();
        ctx.strokeStyle = "rgba(52, 211, 153, 0.4)";
        ctx.lineWidth = 2;
        for (let x = 0; x <= width; x += 5) {
          const y = height * 0.5 + Math.sin(x * 0.02 + step) * 20 + Math.cos(x * 0.04 + step * 0.5) * 10;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Pulsing threshold line
        ctx.beginPath();
        ctx.strokeStyle = "rgba(52, 211, 153, 0.15)";
        ctx.setLineDash([4, 4]);
        ctx.moveTo(0, height * 0.35);
        ctx.lineTo(width, height * 0.35);
        ctx.stroke();
        ctx.setLineDash([]);
      } else if (variant === "agent") {
        // Interconnected node mesh
        particles.forEach((p, i) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Connect nearby nodes
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p2.x - p.x;
            const dy = p2.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 70) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(167, 139, 250, ${1 - dist / 70 * 0.7})`;
              ctx.stroke();
            }
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(167, 139, 250, 0.8)";
          ctx.fill();
        });
      } else {
        // Lab / Grid / Proof of work Matrix vibe
        const cols = 12;
        const cellW = width / cols;
        for (let i = 0; i < cols; i++) {
          const pulse = Math.sin(step * 2 + i * 0.5) * 0.5 + 0.5;
          ctx.fillStyle = `rgba(96, 165, 250, ${pulse * 0.25})`;
          ctx.fillRect(i * cellW + 2, height * 0.4, cellW - 4, 3);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [variant]);

  return <canvas ref={canvasRef} className={`ambient-canvas w-full h-full block ${className}`} />;
}
