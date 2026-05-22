"use client";

import { useEffect, useRef } from "react";

type Theme = "light" | "dark";

type Palette = {
  nodeCore: string;
  nodeRing: string;
  lineStart: (a: number) => string;
  lineEnd: (a: number) => string;
  pulseInner: string;
  pulseMid: string;
  pulseFade: string;
  pulseCore: string;
};

const PALETTES: Record<Theme, Palette> = {
  dark: {
    nodeCore: "rgba(180, 170, 255, 0.95)",
    nodeRing: "rgba(255, 255, 255, 0.35)",
    lineStart: (a) => `rgba(167, 139, 250, ${a * 0.55})`,
    lineEnd: (a) => `rgba(96, 165, 250, ${a * 0.45})`,
    pulseInner: "rgba(255, 255, 255, 1)",
    pulseMid: "rgba(167, 139, 250, 0.55)",
    pulseFade: "rgba(108, 93, 252, 0)",
    pulseCore: "rgba(255, 255, 255, 1)",
  },
  light: {
    nodeCore: "rgba(108, 93, 252, 0.85)",
    nodeRing: "rgba(255, 255, 255, 0.9)",
    lineStart: (a) => `rgba(108, 93, 252, ${a * 0.38})`,
    lineEnd: (a) => `rgba(37, 99, 235, ${a * 0.28})`,
    pulseInner: "rgba(167, 139, 250, 0.9)",
    pulseMid: "rgba(108, 93, 252, 0.35)",
    pulseFade: "rgba(108, 93, 252, 0)",
    pulseCore: "rgba(255, 255, 255, 0.95)",
  },
};

/**
 * Live-rendered neural network canvas standing in as a looping AI
 * visualization: ~110 drifting nodes, proximity-based connections, and
 * pulses of light travelling along the edges. Pure 2D canvas, no deps,
 * DPR-aware, ~60fps.
 */
export default function HeroNeuralCanvas({
  className,
  density = 110,
  linkDistance = 150,
  theme = "dark",
}: {
  className?: string;
  density?: number;
  linkDistance?: number;
  theme?: Theme;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const palette = PALETTES[theme];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let raf = 0;

    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    type Pulse = { from: number; to: number; t: number; speed: number };
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];

    const cursor = { x: -9999, y: -9999, active: 0 };

    function onPointerMove(e: PointerEvent) {
      const r = canvas!.getBoundingClientRect();
      cursor.x = e.clientX - r.left;
      cursor.y = e.clientY - r.top;
      cursor.active = 1;
    }
    function onPointerLeave() {
      cursor.active = 0;
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(density, Math.floor((width * height) / 14000));
      nodes = Array.from({ length: count }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: 1 + Math.random() * 1.8,
      }));
      pulses = [];
    }

    function spawnPulse() {
      if (nodes.length < 2) return;
      const a = Math.floor(Math.random() * nodes.length);
      let b = Math.floor(Math.random() * nodes.length);
      let tries = 0;
      while (tries < 10) {
        b = Math.floor(Math.random() * nodes.length);
        if (b === a) { tries++; continue; }
        const dx = nodes[a].x - nodes[b].x;
        const dy = nodes[a].y - nodes[b].y;
        if (dx * dx + dy * dy < linkDistance * linkDistance) break;
        tries++;
      }
      if (a === b) return;
      pulses.push({ from: a, to: b, t: 0, speed: 0.008 + Math.random() * 0.008 });
    }

    let pulseClock = 0;

    function frame() {
      ctx!.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        if (cursor.active) {
          const dx = n.x - cursor.x;
          const dy = n.y - cursor.y;
          const d2 = dx * dx + dy * dy;
          const R = 190;
          if (d2 < R * R && d2 > 1) {
            const d = Math.sqrt(d2);
            const f = ((R - d) / R) * 0.42;
            n.x += (dx / d) * f;
            n.y += (dy / d) * f;
          }
        }
      }

      const maxLen2 = linkDistance * linkDistance;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > maxLen2) continue;
          const alpha = 1 - d2 / maxLen2;

          const grad = ctx!.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, palette.lineStart(alpha));
          grad.addColorStop(1, palette.lineEnd(alpha));
          ctx!.strokeStyle = grad;
          ctx!.lineWidth = 0.9;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.stroke();
        }
      }

      pulseClock++;
      if (pulseClock % 4 === 0 && pulses.length < 28) spawnPulse();

      for (let k = pulses.length - 1; k >= 0; k--) {
        const p = pulses[k];
        p.t += p.speed;
        if (p.t >= 1) {
          pulses.splice(k, 1);
          continue;
        }
        const a = nodes[p.from];
        const b = nodes[p.to];
        if (!a || !b) {
          pulses.splice(k, 1);
          continue;
        }
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const halo = ctx!.createRadialGradient(x, y, 0, x, y, 16);
        halo.addColorStop(0, palette.pulseInner);
        halo.addColorStop(0.4, palette.pulseMid);
        halo.addColorStop(1, palette.pulseFade);
        ctx!.fillStyle = halo;
        ctx!.beginPath();
        ctx!.arc(x, y, 16, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = palette.pulseCore;
        ctx!.beginPath();
        ctx!.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx!.fill();
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx!.fillStyle = palette.nodeCore;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.strokeStyle = palette.nodeRing;
        ctx!.lineWidth = 0.6;
        ctx!.stroke();
      }

      raf = requestAnimationFrame(frame);
    }

    resize();
    frame();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [density, linkDistance, theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
