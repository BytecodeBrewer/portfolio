"use client";

import { useEffect, useRef, useState } from "react";

// Types for retro pixel state machines
type BotState = "IDLE" | "ACTION" | "REACTION";

interface HammerBot {
  x: number;
  screenY: number; // Fixed screen Y coordinate
  width: number;
  height: number;
  state: BotState;
  frameTimer: number;
}

interface WavingBot {
  x: number;
  screenY: number;
  width: number;
  height: number;
  state: BotState;
  frameTimer: number;
  buttonPressed: boolean;
}

interface CloudNode {
  baseX: number;
  screenY: number;
  offsetX: number;
  swingSpeed: number;
  phase: number;
}

interface FilePacket {
  progress: number; // 0 to 1 along pipeline
  speed: number;
  label: string;
}

interface TerminalPanel {
  x: number;
  screenY: number;
  width: number;
  height: number;
  title: string;
  status: "GREEN" | "YELLOW" | "RED";
  logIndex: number;
  logs: string[];
  timer: number;
}

export function useCanvasAnimation(canvasRef: React.RefObject<HTMLCanvasElement | null>, mounted: boolean) {
  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;

    let animationFrameId: number;
    let viewportWidth = (canvas.width = window.innerWidth);
    let viewportHeight = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      viewportWidth = canvas.width = window.innerWidth;
      viewportHeight = canvas.height = window.innerHeight;
      ctx.imageSmoothingEnabled = false;
    };

    window.addEventListener("resize", handleResize);

    // 1. Hammer Bot Instance (Left Gutter, Fixed Screen Y)
    const hammerBot: HammerBot = {
      x: 15,
      screenY: 140,
      width: 80,
      height: 70,
      state: "IDLE",
      frameTimer: 0,
    };

    // 2. Waving & Button Bot Instance (Right Gutter, Fixed Screen Y)
    const wavingBot: WavingBot = {
      x: viewportWidth - 95,
      screenY: 340,
      width: 80,
      height: 65,
      state: "IDLE",
      frameTimer: 0,
      buttonPressed: false,
    };

    // 3. Swinging Cloud Nodes & File Pipeline (Fixed Screen Y)
    const cloud1: CloudNode = {
      baseX: 15,
      screenY: 560,
      offsetX: 0,
      swingSpeed: 0.03,
      phase: 0,
    };

    const cloud2: CloudNode = {
      baseX: viewportWidth - 85,
      screenY: 560,
      offsetX: 0,
      swingSpeed: 0.025,
      phase: Math.PI / 2,
    };

    const filePackets: FilePacket[] = [
      { progress: 0.1, speed: 0.004, label: "RAW" },
      { progress: 0.5, speed: 0.005, label: "PARQUET" },
      { progress: 0.8, speed: 0.0035, label: "SQL" },
    ];

    // 4. Retro Terminal Panels with Traffic Lights (Left & Right Gutters)
    const terminalLeft: TerminalPanel = {
      x: 12,
      screenY: 720,
      width: 110,
      height: 95,
      title: "ETL_PIPE_01",
      status: "GREEN",
      logIndex: 0,
      logs: ["> INGEST_OK", "> TRANSFORM", "> S3_STORE", "> COMPLETE"],
      timer: 0,
    };

    const terminalRight: TerminalPanel = {
      x: viewportWidth - 122,
      screenY: 720,
      width: 110,
      height: 95,
      title: "AGENT_LOOP",
      status: "YELLOW",
      logIndex: 0,
      logs: ["> AGENT_WAIT", "> EVAL_PROMPT", "> QUERY_DB", "> EXEC_TOOL"],
      timer: 0,
    };

    let step = 0;

    const render = () => {
      step += 0.03;
      ctx.clearRect(0, 0, viewportWidth, viewportHeight);

      const isDark = document.documentElement.classList.contains("dark");

      // Dynamic Gutter Calculations per frame
      const contentWidth = Math.min(1020, viewportWidth - 40);
      const leftGutterMax = (viewportWidth - contentWidth) / 2 - 15;
      const rightGutterMin = (viewportWidth + contentWidth) / 2 + 15;

      // Update positions strictly inside outer side gutters
      hammerBot.x = Math.max(5, Math.min(leftGutterMax - 80, 20));
      wavingBot.x = Math.max(rightGutterMin + 10, viewportWidth - 90);
      cloud1.baseX = Math.max(5, Math.min(leftGutterMax - 60, 20));
      cloud2.baseX = Math.max(rightGutterMin + 10, viewportWidth - 75);
      terminalLeft.x = Math.max(5, Math.min(leftGutterMax - 112, 10));
      terminalRight.x = Math.max(rightGutterMin + 10, viewportWidth - 120);

      // Colors matching retro terminal aesthetic in light and dark modes
      const strokeStyle = isDark ? "rgba(56, 189, 248, 0.9)" : "rgba(30, 41, 59, 0.9)";
      const bgFillStyle = isDark ? "rgba(15, 23, 42, 0.92)" : "rgba(241, 245, 249, 0.95)";
      const textStyle = isDark ? "rgba(148, 163, 184, 0.95)" : "rgba(15, 23, 42, 0.95)";
      const accentGreen = isDark ? "rgba(52, 211, 153, 0.95)" : "rgba(16, 185, 129, 0.95)";
      const accentCyan = isDark ? "rgba(56, 189, 248, 0.95)" : "rgba(2, 132, 199, 0.95)";
      const accentYellow = isDark ? "rgba(251, 191, 36, 0.95)" : "rgba(217, 119, 6, 0.95)";

      // --- 1. Background Pixel Grid (Static, non-distracting) ---
      ctx.fillStyle = isDark ? "rgba(30, 41, 59, 0.2)" : "rgba(203, 213, 225, 0.3)";
      const gridStep = 32;
      for (let x = 0; x < viewportWidth; x += gridStep) {
        if (x < leftGutterMax || x > rightGutterMin) {
          for (let y = 0; y < viewportHeight; y += gridStep) {
            ctx.fillRect(x, y, 2, 2);
          }
        }
      }

      // --- 2. Hammer Bot & Database (Left Gutter) ---
      hammerBot.frameTimer += 0.05;
      if (hammerBot.frameTimer > 3) {
        hammerBot.frameTimer = 0;
        hammerBot.state = hammerBot.state === "IDLE" ? "ACTION" : hammerBot.state === "ACTION" ? "REACTION" : "IDLE";
      }

      const bx = hammerBot.x;
      const by = hammerBot.screenY;

      // Pixel Database Cylinder
      ctx.fillStyle = bgFillStyle;
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = 1.5;
      ctx.fillRect(bx + 45, by + 20, 28, 38);
      ctx.strokeRect(bx + 45, by + 20, 28, 38);

      // DB Lines
      ctx.fillStyle = accentCyan;
      ctx.fillRect(bx + 50, by + 28, 18, 2);
      ctx.fillRect(bx + 50, by + 38, 18, 2);
      ctx.fillRect(bx + 50, by + 48, 18, 2);

      // Pixel Bot Head & Body
      ctx.fillStyle = bgFillStyle;
      ctx.fillRect(bx, by + 15, 24, 24);
      ctx.strokeRect(bx, by + 15, 24, 24);

      // Bot Eyes (Blinking LED)
      ctx.fillStyle = accentGreen;
      ctx.fillRect(bx + 5, by + 22, 4, 4);
      ctx.fillRect(bx + 14, by + 22, 4, 4);

      // Bot Hammer Arm State Machine
      ctx.fillStyle = textStyle;
      if (hammerBot.state === "IDLE") {
        ctx.fillRect(bx + 20, by + 10, 4, 12);
        ctx.fillStyle = accentYellow;
        ctx.fillRect(bx + 16, by + 4, 12, 8);
      } else if (hammerBot.state === "ACTION") {
        ctx.fillRect(bx + 24, by + 18, 12, 4);
        ctx.fillStyle = accentYellow;
        ctx.fillRect(bx + 34, by + 14, 8, 12);
      } else {
        ctx.fillRect(bx + 24, by + 28, 18, 4);
        ctx.fillStyle = accentYellow;
        ctx.fillRect(bx + 40, by + 24, 8, 12);
        ctx.fillStyle = "#f59e0b";
        ctx.fillRect(bx + 44, by + 18, 4, 4);
        ctx.fillRect(bx + 48, by + 26, 4, 4);
      }

      ctx.font = "8px 'Press Start 2P', monospace";
      ctx.fillStyle = textStyle;
      ctx.fillText("DB_BOT", bx, by + 68);

      // --- 3. Waving & Button Bot (Right Gutter) ---
      wavingBot.frameTimer += 0.04;
      if (wavingBot.frameTimer > 2.5) {
        wavingBot.frameTimer = 0;
        wavingBot.state = wavingBot.state === "IDLE" ? "ACTION" : wavingBot.state === "ACTION" ? "REACTION" : "IDLE";
        wavingBot.buttonPressed = wavingBot.state === "ACTION";
      }

      const wx = wavingBot.x;
      const wy = wavingBot.screenY;

      ctx.fillStyle = bgFillStyle;
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = 1.5;
      ctx.fillRect(wx + 45, wy + 20, 20, 26);
      ctx.strokeRect(wx + 45, wy + 20, 20, 26);

      ctx.fillStyle = wavingBot.buttonPressed ? accentGreen : accentYellow;
      ctx.fillRect(wx + 50, wy + 26, 10, 10);

      ctx.fillStyle = bgFillStyle;
      ctx.fillRect(wx + 10, wy + 10, 26, 26);
      ctx.strokeRect(wx + 10, wy + 10, 26, 26);

      ctx.fillRect(wx + 21, wy + 2, 4, 8);
      ctx.fillStyle = Math.sin(step * 6) > 0 ? accentCyan : textStyle;
      ctx.fillRect(wx + 19, wy, 8, 4);

      ctx.fillStyle = accentCyan;
      ctx.fillRect(wx + 16, wy + 18, 4, 4);
      ctx.fillRect(wx + 26, wy + 18, 4, 4);

      ctx.fillStyle = textStyle;
      if (wavingBot.state === "ACTION") {
        ctx.fillRect(wx + 34, wy + 24, 12, 4);
      } else if (wavingBot.state === "REACTION") {
        ctx.fillRect(wx + 2, wy + 2, 4, 12);
        ctx.fillRect(wx - 2, wy + 2, 8, 4);
      } else {
        ctx.fillRect(wx + 4, wy + 22, 4, 12);
      }

      ctx.font = "8px 'Press Start 2P', monospace";
      ctx.fillStyle = textStyle;
      ctx.fillText("CTRL_BOT", wx, wy + 54);

      // --- 4. Swinging Clouds & File Pipeline ---
      cloud1.phase += cloud1.swingSpeed;
      cloud2.phase += cloud2.swingSpeed;
      cloud1.offsetX = Math.sin(cloud1.phase) * 12;
      cloud2.offsetX = Math.cos(cloud2.phase) * 12;

      const c1x = cloud1.baseX + cloud1.offsetX;
      const c1y = cloud1.screenY;
      const c2x = cloud2.baseX + cloud2.offsetX;
      const c2y = cloud2.screenY;

      ctx.fillStyle = bgFillStyle;
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = 1.5;
      ctx.fillRect(c1x, c1y, 50, 24);
      ctx.fillRect(c1x + 10, c1y - 8, 30, 12);
      ctx.strokeRect(c1x, c1y, 50, 24);

      ctx.fillStyle = bgFillStyle;
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = 1.5;
      ctx.fillRect(c2x, c2y, 50, 24);
      ctx.fillRect(c2x + 10, c2y - 8, 30, 12);
      ctx.strokeRect(c2x, c2y, 50, 24);

      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(c1x + 50, c1y + 12);
      ctx.lineTo(c2x, c2y + 12);
      ctx.stroke();
      ctx.setLineDash([]);

      filePackets.forEach((packet) => {
        packet.progress += packet.speed;
        if (packet.progress > 1) packet.progress = 0;

        const px = c1x + 50 + (c2x - (c1x + 50)) * packet.progress;
        const py = c1y + 12;

        if (px < leftGutterMax || px > rightGutterMin) {
          ctx.fillStyle = isDark ? "rgba(30, 41, 59, 0.9)" : "rgba(255, 255, 255, 0.95)";
          ctx.strokeStyle = accentCyan;
          ctx.lineWidth = 1;
          ctx.fillRect(px - 6, py - 7, 12, 14);
          ctx.strokeRect(px - 6, py - 7, 12, 14);

          ctx.fillStyle = accentCyan;
          ctx.fillRect(px + 2, py - 7, 4, 4);

          ctx.font = "6px 'Fira Code', monospace";
          ctx.fillStyle = textStyle;
          ctx.fillText(packet.label, px - 10, py + 14);
        }
      });

      // --- 5. Terminal Panels with Traffic Lights ---
      const drawTerminalPanel = (panel: TerminalPanel) => {
        const sy = panel.screenY;

        panel.timer += 0.03;
        if (panel.timer > 2) {
          panel.timer = 0;
          panel.logIndex = (panel.logIndex + 1) % panel.logs.length;
          panel.status = panel.logIndex === 0 ? "GREEN" : panel.logIndex === 2 ? "YELLOW" : "GREEN";
        }

        ctx.fillStyle = bgFillStyle;
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = 1.5;
        ctx.fillRect(panel.x, sy, panel.width, panel.height);
        ctx.strokeRect(panel.x, sy, panel.width, panel.height);

        ctx.font = "7px 'Press Start 2P', monospace";
        ctx.fillStyle = accentCyan;
        ctx.fillText(panel.title, panel.x + 8, sy + 16);

        const lightX = panel.x + panel.width - 24;
        ctx.fillStyle = panel.status === "RED" ? "#ef4444" : "rgba(239, 68, 68, 0.25)";
        ctx.fillRect(lightX, sy + 8, 4, 4);

        ctx.fillStyle = panel.status === "YELLOW" ? "#f59e0b" : "rgba(245, 158, 11, 0.25)";
        ctx.fillRect(lightX + 6, sy + 8, 4, 4);

        ctx.fillStyle = panel.status === "GREEN" ? "#10b981" : "rgba(16, 185, 129, 0.25)";
        ctx.fillRect(lightX + 12, sy + 8, 4, 4);

        ctx.strokeStyle = strokeStyle;
        ctx.beginPath();
        ctx.moveTo(panel.x + 4, sy + 24);
        ctx.lineTo(panel.x + panel.width - 4, sy + 24);
        ctx.stroke();

        ctx.font = "8px 'Fira Code', monospace";
        ctx.fillStyle = textStyle;
        const currentLog = panel.logs[panel.logIndex];
        ctx.fillText(currentLog, panel.x + 8, sy + 42);

        const nextLog = panel.logs[(panel.logIndex + 1) % panel.logs.length];
        ctx.fillStyle = isDark ? "rgba(148, 163, 184, 0.4)" : "rgba(100, 116, 139, 0.4)";
        ctx.fillText(nextLog, panel.x + 8, sy + 58);

        if (Math.sin(step * 5) > 0) {
          ctx.fillStyle = accentGreen;
          ctx.fillRect(panel.x + panel.width - 16, sy + 70, 6, 8);
        }
      };

      drawTerminalPanel(terminalLeft);
      drawTerminalPanel(terminalRight);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [canvasRef, mounted]);
}

interface Props {
  className?: string;
  projectSlug?: string;
}

export function AmbientCanvas({ className = "", projectSlug }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useCanvasAnimation(canvasRef, mounted);

  if (!mounted) {
    return null;
  }

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
