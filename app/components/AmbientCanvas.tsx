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

    // Playful data nodes / packets
    const packets = Array.from({ length: 18 }, (_, i) => ({
      x: (i / 18) * width,
      speed: 0.8 + Math.random() * 0.8,
      lane: Math.floor(Math.random() * 3),
      size: 3 + Math.random() * 2,
      pulse: Math.random() * Math.PI * 2,
    }));

    let step = 0;

    const render = () => {
      step += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Data pipeline lanes
      const lanes = [height * 0.3, height * 0.5, height * 0.7];

      lanes.forEach((laneY, idx) => {
        // Draw crisp pipeline connection rail
        ctx.beginPath();
        ctx.moveTo(0, laneY);
        ctx.lineTo(width, laneY);
        ctx.strokeStyle = idx === 1 ? "rgba(56, 189, 248, 0.15)" : "rgba(129, 140, 248, 0.12)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 6]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Interactive stage blocks / nodes along the pipeline
        const nodePositions = [width * 0.2, width * 0.5, width * 0.8];
        nodePositions.forEach((nx) => {
          ctx.beginPath();
          ctx.arc(nx, laneY, 4, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(56, 189, 248, 0.3)";
          ctx.fill();
        });
      });

      // Moving playful data packets across lanes
      packets.forEach((p) => {
        p.x += p.speed;
        if (p.x > width) {
          p.x = -10;
          p.lane = Math.floor(Math.random() * 3);
        }

        const y = lanes[p.lane];
        p.pulse += 0.05;

        // Glowing packet dot
        ctx.beginPath();
        ctx.arc(p.x, y, p.size, 0, Math.PI * 2);
        const glow = Math.sin(p.pulse) * 0.3 + 0.7;
        ctx.fillStyle = p.lane === 0 ? `rgba(56, 189, 248, ${glow})` : p.lane === 1 ? `rgba(52, 211, 153, ${glow})` : `rgba(167, 139, 250, ${glow})`;
        ctx.shadowColor = p.lane === 0 ? "#38bdf8" : "#34d399";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

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
