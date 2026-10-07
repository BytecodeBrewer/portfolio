"use client";

import { useEffect, useRef } from "react";

// Types for retro pixel state machines
type BotState = "IDLE" | "ACTION" | "REACTION";

interface HammerBot {
  x: number;
  docY: number; // Absolute Y position relative to document
  width: number;
  height: number;
  state: BotState;
  frameTimer: number;
}

interface WavingBot {
  x: number;
  docY: number;
  width: number;
  height: number;
  state: BotState;
  frameTimer: number;
  buttonPressed: boolean;
}

interface CloudNode {
  baseX: number;
  docY: number;
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
  docY: number;
  width: number;
  height: number;
  title: string;
  status: "GREEN" | "YELLOW" | "RED";
  logIndex: number;
  logs: string[];
  timer: number;
}

export function useCanvasAnimation(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
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

    // Calculate layout gutters for ambient retro state machines
    const contentWidth = Math.min(1020, viewportWidth - 80);
    const leftGutterMax = Math.max(20, (viewportWidth - contentWidth) / 2 - 10);
    const rightGutterMin = Math.min(viewportWidth - 20, (viewportWidth + contentWidth) / 2 + 10);

    // Document height calculation
    const getDocHeight = () => Math.max(document.documentElement.scrollHeight, viewportHeight * 2);

    // 1. Hammer Bot Instance (Left Gutter)
    const hammerBot: HammerBot = {
      x: Math.max(10, leftGutterMax - 90),
      docY: 220,
      width: 80,
      height: 70,
      state: "IDLE",
      frameTimer: 0,
    };

    // 2. Waving & Button Bot Instance (Right Gutter)
    const wavingBot: WavingBot = {
      x: Math.min(viewportWidth - 90, rightGutterMin + 10),
      docY: 520,
      width: 80,
      height: 65,
      state: "IDLE",
      frameTimer: 0,
      buttonPressed: false,
    };

    // 3. Swinging Cloud Nodes & File Pipeline
    const cloud1: CloudNode = {
      baseX: Math.max(15, leftGutterMax - 110),
      docY: 880,
      offsetX: 0,
      swingSpeed: 0.03,
      phase: 0,
    };

    const cloud2: CloudNode = {
      baseX: Math.min(viewportWidth - 110, rightGutterMin + 20),
      docY: 1020,
      offsetX: 0,
      swingSpeed: 0.025,
      phase: Math.PI / 2,
    };

    const filePackets: FilePacket[] = [
      { progress: 0.1, speed: 0.004, label: "RAW" },
      { progress: 0.5, speed: 0.005, label: "PARQUET" },
      { progress: 0.8, speed: 0.0035, label: "SQL" },
    ];

    // 4. Retro Terminal Panels with Traffic Lights
    const terminalLeft: TerminalPanel = {
      x: Math.max(10, leftGutterMax - 120),
      docY: 1250,
      width: 110,
      height: 95,
      title: "ETL_PIPE_01",
      status: "GREEN",
      logIndex: 0,
      logs: ["> INGEST_OK", "> TRANSFORM", "> S3_STORE", "> COMPLETE"],
      timer: 0,
    };

    const terminalRight: TerminalPanel = {
      x: Math.min(viewportWidth - 120, rightGutterMin + 10),
      docY: 1650,
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

      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const isDark = document.documentElement.classList.contains("dark");

      // Colors matching soft background harmony
      const strokeStyle = isDark ? "rgba(56, 189, 248, 0.35)" : "rgba(71, 85, 105, 0.35)";
      const bgFillStyle = isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(241, 245, 249, 0.65)";
      const textStyle = isDark ? "rgba(148, 163, 184, 0.75)" : "rgba(71, 85, 105, 0.75)";
      const accentGreen = isDark ? "rgba(52, 211, 153, 0.8)" : "rgba(16, 185, 129, 0.8)";
      const accentCyan = isDark ? "rgba(56, 189, 248, 0.8)" : "rgba(2, 132, 199, 0.8)";
      const accentYellow = isDark ? "rgba(251, 191, 36, 0.8)" : "rgba(217, 119, 6, 0.8)";

      // --- 1. Background Pixel Grid (Static, non-distracting) ---
      ctx.fillStyle = isDark ? "rgba(30, 41, 59, 0.25)" : "rgba(203, 213, 225, 0.25)";
      const gridStep = 32;
      for (let x = 0; x < viewportWidth; x += gridStep) {
        if (x < leftGutterMax || x > rightGutterMin) {
          for (let y = 0; y < viewportHeight; y += gridStep) {
            ctx.fillRect(x, y, 2, 2);
          }
        }
      }

      // Helper function to convert document Y to screen Y
      const toScreenY = (docY: number) => docY - scrollY;

      // --- 2. Hammer Bot & Database (Left Gutter) ---
      const hammerScreenY = toScreenY(hammerBot.docY);
      if (hammerScreenY + 100 > 0 && hammerScreenY < viewportHeight) {
        hammerBot.frameTimer += 0.05;
        if (hammerBot.frameTimer > 3) {
          hammerBot.frameTimer = 0;
          hammerBot.state = hammerBot.state === "IDLE" ? "ACTION" : hammerBot.state === "ACTION" ? "REACTION" : "IDLE";
        }

        const bx = hammerBot.x;
        const by = hammerScreenY;

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
          // Arm UP holding hammer
          ctx.fillRect(bx + 20, by + 10, 4, 12);
          ctx.fillStyle = accentYellow;
          ctx.fillRect(bx + 16, by + 4, 12, 8);
        } else if (hammerBot.state === "ACTION") {
          // Arm SWINGING mid-air
          ctx.fillRect(bx + 24, by + 18, 12, 4);
          ctx.fillStyle = accentYellow;
          ctx.fillRect(bx + 34, by + 14, 8, 12);
        } else {
          // Arm DOWN hitting DB (Spark effect)
          ctx.fillRect(bx + 24, by + 28, 18, 4);
          ctx.fillStyle = accentYellow;
          ctx.fillRect(bx + 40, by + 24, 8, 12);
          // Spark
          ctx.fillStyle = "#f59e0b";
          ctx.fillRect(bx + 44, by + 18, 4, 4);
          ctx.fillRect(bx + 48, by + 26, 4, 4);
        }

        // Label
        ctx.font = "8px 'Press Start 2P', monospace";
        ctx.fillStyle = textStyle;
        ctx.fillText("DB_BOT", bx, by + 68);
      }

      // --- 3. Waving & Button Bot (Right Gutter) ---
      const wavingScreenY = toScreenY(wavingBot.docY);
      if (wavingScreenY + 100 > 0 && wavingScreenY < viewportHeight) {
        wavingBot.frameTimer += 0.04;
        if (wavingBot.frameTimer > 2.5) {
          wavingBot.frameTimer = 0;
          wavingBot.state = wavingBot.state === "IDLE" ? "ACTION" : wavingBot.state === "ACTION" ? "REACTION" : "IDLE";
          wavingBot.buttonPressed = wavingBot.state === "ACTION";
        }

        const wx = wavingBot.x;
        const wy = wavingScreenY;

        // Side Sticking Button Box
        ctx.fillStyle = bgFillStyle;
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = 1.5;
        ctx.fillRect(wx + 45, wy + 20, 20, 26);
        ctx.strokeRect(wx + 45, wy + 20, 20, 26);

        // Button LED light
        ctx.fillStyle = wavingBot.buttonPressed ? accentGreen : accentYellow;
        ctx.fillRect(wx + 50, wy + 26, 10, 10);

        // Bot Head & Body
        ctx.fillStyle = bgFillStyle;
        ctx.fillRect(wx + 10, wy + 10, 26, 26);
        ctx.strokeRect(wx + 10, wy + 10, 26, 26);

        // Antenna
        ctx.fillRect(wx + 21, wy + 2, 4, 8);
        ctx.fillStyle = Math.sin(step * 6) > 0 ? accentCyan : textStyle;
        ctx.fillRect(wx + 19, wy, 8, 4);

        // Bot Eyes
        ctx.fillStyle = accentCyan;
        ctx.fillRect(wx + 16, wy + 18, 4, 4);
        ctx.fillRect(wx + 26, wy + 18, 4, 4);

        // Waving Arm State
        ctx.fillStyle = textStyle;
        if (wavingBot.state === "ACTION") {
          // Arm pressing button
          ctx.fillRect(wx + 34, wy + 24, 12, 4);
        } else if (wavingBot.state === "REACTION") {
          // Arm waving high
          ctx.fillRect(wx + 2, wy + 2, 4, 12);
          ctx.fillRect(wx - 2, wy + 2, 8, 4);
        } else {
          // Arm idle down
          ctx.fillRect(wx + 4, wy + 22, 4, 12);
        }

        ctx.font = "8px 'Press Start 2P', monospace";
        ctx.fillStyle = textStyle;
        ctx.fillText("CTRL_BOT", wx, wy + 54);
      }

      // --- 4. Swinging Clouds & File Pipeline ---
      const cloud1ScreenY = toScreenY(cloud1.docY);
      const cloud2ScreenY = toScreenY(cloud2.docY);

      if (
        (cloud1ScreenY > -100 && cloud1ScreenY < viewportHeight + 100) ||
        (cloud2ScreenY > -100 && cloud2ScreenY < viewportHeight + 100)
      ) {
        cloud1.phase += cloud1.swingSpeed;
        cloud2.phase += cloud2.swingSpeed;
        cloud1.offsetX = Math.sin(cloud1.phase) * 12;
        cloud2.offsetX = Math.cos(cloud2.phase) * 12;

        const c1x = cloud1.baseX + cloud1.offsetX;
        const c1y = cloud1ScreenY;
        const c2x = cloud2.baseX + cloud2.offsetX;
        const c2y = cloud2ScreenY;

        // Draw Cloud 1 (Left)
        ctx.fillStyle = bgFillStyle;
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = 1.5;
        ctx.fillRect(c1x, c1y, 50, 24);
        ctx.fillRect(c1x + 10, c1y - 8, 30, 12);
        ctx.strokeRect(c1x, c1y, 50, 24);

        // Draw Cloud 2 (Right)
        ctx.fillStyle = bgFillStyle;
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = 1.5;
        ctx.fillRect(c2x, c2y, 50, 24);
        ctx.fillRect(c2x + 10, c2y - 8, 30, 12);
        ctx.strokeRect(c2x, c2y, 50, 24);

        // Draw Connecting Pipeline Dashed Line
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.moveTo(c1x + 50, c1y + 12);
        ctx.lineTo(c2x, c2y + 12);
        ctx.stroke();
        ctx.setLineDash([]);

        // Animate File Packets moving along pipeline
        filePackets.forEach((packet) => {
          packet.progress += packet.speed;
          if (packet.progress > 1) packet.progress = 0;

          const px = c1x + 50 + (c2x - (c1x + 50)) * packet.progress;
          const py = c1y + 12 + (c2y + 12 - (c1y + 12)) * packet.progress;

          // Only render file icon if outside central text area
          if (px < leftGutterMax || px > rightGutterMin) {
            // Draw File Icon Packet (Small 12x14 rectangle with folded corner)
            ctx.fillStyle = isDark ? "rgba(30, 41, 59, 0.9)" : "rgba(255, 255, 255, 0.95)";
            ctx.strokeStyle = accentCyan;
            ctx.lineWidth = 1;
            ctx.fillRect(px - 6, py - 7, 12, 14);
            ctx.strokeRect(px - 6, py - 7, 12, 14);

            // Folded corner
            ctx.fillStyle = accentCyan;
            ctx.fillRect(px + 2, py - 7, 4, 4);

            // Label
            ctx.font = "6px 'Fira Code', monospace";
            ctx.fillStyle = textStyle;
            ctx.fillText(packet.label, px - 10, py + 14);
          }
        });
      }

      // --- 5. Terminal Panels with Traffic Lights (Gutter Mounted) ---
      const drawTerminalPanel = (panel: TerminalPanel) => {
        const sy = toScreenY(panel.docY);
        if (sy + panel.height < 0 || sy > viewportHeight) return;

        panel.timer += 0.03;
        if (panel.timer > 2) {
          panel.timer = 0;
          panel.logIndex = (panel.logIndex + 1) % panel.logs.length;
          panel.status = panel.logIndex === 0 ? "GREEN" : panel.logIndex === 2 ? "YELLOW" : "GREEN";
        }

        // Frame
        ctx.fillStyle = bgFillStyle;
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = 1.5;
        ctx.fillRect(panel.x, sy, panel.width, panel.height);
        ctx.strokeRect(panel.x, sy, panel.width, panel.height);

        // Header Title
        ctx.font = "7px 'Press Start 2P', monospace";
        ctx.fillStyle = accentCyan;
        ctx.fillText(panel.title, panel.x + 8, sy + 16);

        // Traffic Light Indicators (Red, Yellow, Green)
        const lightX = panel.x + panel.width - 24;
        ctx.fillStyle = panel.status === "RED" ? "#ef4444" : "rgba(239, 68, 68, 0.25)";
        ctx.fillRect(lightX, sy + 8, 4, 4);

        ctx.fillStyle = panel.status === "YELLOW" ? "#f59e0b" : "rgba(245, 158, 11, 0.25)";
        ctx.fillRect(lightX + 6, sy + 8, 4, 4);

        ctx.fillStyle = panel.status === "GREEN" ? "#10b981" : "rgba(16, 185, 129, 0.25)";
        ctx.fillRect(lightX + 12, sy + 8, 4, 4);

        // Separator
        ctx.strokeStyle = strokeStyle;
        ctx.beginPath();
        ctx.moveTo(panel.x + 4, sy + 24);
        ctx.lineTo(panel.x + panel.width - 4, sy + 24);
        ctx.stroke();

        // Cycling Terminal Log Lines
        ctx.font = "8px 'Fira Code', monospace";
        ctx.fillStyle = textStyle;
        const currentLog = panel.logs[panel.logIndex];
        ctx.fillText(currentLog, panel.x + 8, sy + 42);

        const nextLog = panel.logs[(panel.logIndex + 1) % panel.logs.length];
        ctx.fillStyle = isDark ? "rgba(148, 163, 184, 0.4)" : "rgba(100, 116, 139, 0.4)";
        ctx.fillText(nextLog, panel.x + 8, sy + 58);

        // Blinking Cursor
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
  }, [canvasRef]);
}

interface Props {
  className?: string;
  projectSlug?: string;
}

export function AmbientCanvas({ className = "", projectSlug }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useCanvasAnimation(canvasRef);

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
