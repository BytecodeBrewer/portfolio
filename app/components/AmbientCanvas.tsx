"use client";

import { useEffect, useRef } from "react";

interface Props {
  className?: string;
  projectSlug?: string;
}

interface DataPacket {
  railIndex: number;
  position: number; // 0 to 1 along segment
  speed: number;
  size: number;
  color: string;
  label?: string;
  type: "raw" | "transformed" | "db" | "ai";
}

interface PipelineNode {
  x: number;
  y: number;
  label: string;
  type: "source" | "etl" | "warehouse" | "agent";
  subLabel?: string;
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

    // Layout Data Engineering Pipeline Rails & Processing Sinks
    const createPipelineTopology = (w: number, h: number) => {
      const topY = h * 0.22;
      const midY = h * 0.52;
      const botY = h * 0.82;

      const nodes: PipelineNode[] = [
        { x: w * 0.1, y: topY, label: "yfinance / FX Feed", type: "source" },
        { x: w * 0.38, y: topY, label: "Pandas / Vector Engine", type: "etl" },
        { x: w * 0.68, y: topY, label: "PostgreSQL Sink", type: "warehouse" },

        { x: w * 0.12, y: midY, label: "REST / Webhooks", type: "source" },
        { x: w * 0.42, y: midY, label: "Pydantic Schema Guard", type: "etl" },
        { x: w * 0.72, y: midY, label: "DuckDB Analytics", type: "warehouse" },

        { x: w * 0.15, y: botY, label: "RunPod Worker Logs", type: "source" },
        { x: w * 0.45, y: botY, label: "Orchestrator Agent", type: "agent" },
        { x: w * 0.78, y: botY, label: "Delta Lake / Storage", type: "warehouse" },
      ];

      // Connections between nodes (Rails)
      const rails = [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
        { from: 6, to: 7 },
        { from: 7, to: 8 },
        // Inter-pipeline cross streams
        { from: 1, to: 5 },
        { from: 4, to: 8 },
      ];

      return { nodes, rails };
    };

    let topology = createPipelineTopology(width, height);

    // Initialize flowing data packets
    const packets: DataPacket[] = Array.from({ length: 28 }, (_, i) => {
      const railIndex = i % topology.rails.length;
      const packetTypes: DataPacket["type"][] = ["raw", "transformed", "db", "ai"];
      const colors = ["#38bdf8", "#34d399", "#818cf8", "#f59e0b"];
      const typeIdx = i % packetTypes.length;

      return {
        railIndex,
        position: Math.random(),
        speed: 0.002 + Math.random() * 0.003,
        size: 3 + Math.random() * 2,
        color: colors[typeIdx],
        type: packetTypes[typeIdx],
        label: i % 3 === 0 ? "0x7F" : undefined,
      };
    });

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");

      // Draw subtle grid overlay
      const gridSpacing = 40;
      ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.02)" : "rgba(15, 23, 42, 0.03)";
      for (let x = gridSpacing / 2; x < width; x += gridSpacing) {
        for (let y = gridSpacing / 2; y < height; y += gridSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw pipeline rails
      topology.rails.forEach((rail) => {
        const startNode = topology.nodes[rail.from];
        const endNode = topology.nodes[rail.to];

        ctx.beginPath();
        ctx.moveTo(startNode.x, startNode.y);
        ctx.lineTo(endNode.x, endNode.y);
        ctx.strokeStyle = isDark ? "rgba(56, 189, 248, 0.12)" : "rgba(14, 165, 233, 0.18)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Draw pipeline nodes
      topology.nodes.forEach((node) => {
        const pulse = Math.sin(time + node.x) * 0.2 + 0.8;

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "#38bdf8" : "#0284c7";
        ctx.fill();

        // Node ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
        ctx.strokeStyle = isDark ? "rgba(56, 189, 248, 0.2)" : "rgba(2, 132, 199, 0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Animate flowing data packets along rails
      packets.forEach((packet) => {
        packet.position += packet.speed;
        if (packet.position > 1) {
          packet.position = 0;
          packet.railIndex = Math.floor(Math.random() * topology.rails.length);
        }

        const rail = topology.rails[packet.railIndex];
        const start = topology.nodes[rail.from];
        const end = topology.nodes[rail.to];

        const px = start.x + (end.x - start.x) * packet.position;
        const py = start.y + (end.y - start.y) * packet.position;

        // Packet glow
        ctx.beginPath();
        ctx.arc(px, py, packet.size, 0, Math.PI * 2);
        ctx.fillStyle = packet.color;
        ctx.shadowColor = packet.color;
        ctx.shadowBlur = isDark ? 6 : 3;
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
  }, [projectSlug]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}
