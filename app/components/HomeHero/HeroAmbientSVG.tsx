"use client";

import { useEffect, useRef } from "react";

export default function HeroAmbientSVG() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.003;
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const cx = w / 2;
      const cy = h * 0.45;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      // Ambient glow
      const ambientGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.5);
      ambientGrad.addColorStop(0, "rgba(4, 121, 135, 0.07)");
      ambientGrad.addColorStop(0.4, "rgba(3, 93, 106, 0.04)");
      ambientGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, w, h);

      // Outer ring — slow clockwise
      drawRing(ctx, cx, cy, w * 0.38, w * 0.18, time * 0.08, [
        { r: 3, g: 93, b: 106, a: 0.12 },
        { r: 4, g: 121, b: 135, a: 0.08 },
        { r: 2, g: 70, b: 82, a: 0.06 },
      ]);

      // Mid ring — counter-clockwise
      drawRing(ctx, cx, cy, w * 0.26, w * 0.12, -time * 0.12, [
        { r: 4, g: 121, b: 135, a: 0.18 },
        { r: 20, g: 184, b: 166, a: 0.12 },
        { r: 3, g: 100, b: 115, a: 0.1 },
      ]);

      // Inner core — faster clockwise
      drawRing(ctx, cx, cy, w * 0.14, w * 0.07, time * 0.18, [
        { r: 20, g: 184, b: 166, a: 0.25 },
        { r: 45, g: 212, b: 191, a: 0.15 },
        { r: 4, g: 150, b: 160, a: 0.2 },
      ]);

      // Bright center glow
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.12);
      coreGrad.addColorStop(0, "rgba(20, 184, 166, 0.25)");
      coreGrad.addColorStop(0.3, "rgba(4, 121, 135, 0.12)");
      coreGrad.addColorStop(1, "rgba(3, 93, 106, 0)");
      ctx.fillStyle = coreGrad;
      ctx.fillRect(0, 0, w, h);

      // Star particles
      drawStars(ctx, w, h, time);

      ctx.restore();
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

function drawRing(ctx, cx, cy, radiusX, radiusY, angle, colors) {
  const blobs = 48;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angle);

  for (let i = 0; i < blobs; i++) {
    const t = (i / blobs) * Math.PI * 2;
    const jitter = Math.sin(i * 7.3) * 0.15;
    const x = Math.cos(t + jitter) * radiusX * (1 + Math.sin(i * 3.7) * 0.12);
    const y = Math.sin(t + jitter) * radiusY * (1 + Math.cos(i * 2.3) * 0.15);
    const size = radiusX * (0.12 + Math.sin(i * 5.1) * 0.06);
    const color = colors[i % colors.length];

    const grad = ctx.createRadialGradient(x, y, 0, x, y, size);
    grad.addColorStop(
      0,
      `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
    );
    grad.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(x, y, size, size * 0.6, t, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

function drawStars(ctx, w, h, time) {
  const seed = 42;
  const count = 60;
  for (let i = 0; i < count; i++) {
    const pseudoRand = (n) => {
      const x = Math.sin(n * 127.1 + seed) * 43758.5453;
      return x - Math.floor(x);
    };
    const sx = pseudoRand(i) * w;
    const sy = pseudoRand(i + 100) * h;
    const brightness = 0.1 + pseudoRand(i + 200) * 0.25;
    const flicker = 0.7 + Math.sin(time * 2 + i * 1.7) * 0.3;
    const r = 0.6 + pseudoRand(i + 300) * 1.0;

    ctx.fillStyle = `rgba(255, 255, 255, ${brightness * flicker})`;
    ctx.beginPath();
    ctx.arc(sx, sy, r, 0, Math.PI * 2);
    ctx.fill();
  }
}
