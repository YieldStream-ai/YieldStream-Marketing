import { useState, useEffect, useRef } from "react";

const NebulaVortex = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.003;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h * 0.45;

      ctx.fillStyle = "#09090b";
      ctx.fillRect(0, 0, w, h);

      // Outer ring — rotates clockwise slowly
      drawRing(ctx, cx, cy, w * 0.38, w * 0.18, time * 0.4, [
        { r: 90, g: 40, b: 160, a: 0.12 },
        { r: 120, g: 60, b: 200, a: 0.08 },
        { r: 70, g: 30, b: 140, a: 0.06 },
      ]);

      // Mid ring — rotates counter-clockwise
      drawRing(ctx, cx, cy, w * 0.26, w * 0.12, -time * 0.6, [
        { r: 140, g: 70, b: 220, a: 0.18 },
        { r: 180, g: 100, b: 255, a: 0.12 },
        { r: 100, g: 50, b: 180, a: 0.1 },
      ]);

      // Inner core — rotates clockwise faster
      drawRing(ctx, cx, cy, w * 0.14, w * 0.07, time * 0.9, [
        { r: 200, g: 140, b: 255, a: 0.25 },
        { r: 230, g: 180, b: 255, a: 0.15 },
        { r: 160, g: 100, b: 240, a: 0.2 },
      ]);

      // Bright center glow
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.12);
      coreGrad.addColorStop(0, "rgba(220, 190, 255, 0.3)");
      coreGrad.addColorStop(0.3, "rgba(160, 100, 240, 0.15)");
      coreGrad.addColorStop(1, "rgba(100, 50, 180, 0)");
      ctx.fillStyle = coreGrad;
      ctx.fillRect(0, 0, w, h);

      // Ambient glow behind everything
      const ambientGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.5);
      ambientGrad.addColorStop(0, "rgba(120, 60, 200, 0.06)");
      ambientGrad.addColorStop(0.5, "rgba(80, 30, 160, 0.03)");
      ambientGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, w, h);

      // Star particles
      drawStars(ctx, w, h, time);

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#09090b",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

// Draw a single rotating elliptical ring of nebula blobs
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

// Subtle star field
function drawStars(ctx, w, h, time) {
  const seed = 42;
  const count = 80;
  for (let i = 0; i < count; i++) {
    const pseudoRand = (n) => {
      const x = Math.sin(n * 127.1 + seed) * 43758.5453;
      return x - Math.floor(x);
    };
    const sx = pseudoRand(i) * w;
    const sy = pseudoRand(i + 100) * h;
    const brightness = 0.15 + pseudoRand(i + 200) * 0.35;
    const flicker = 0.7 + Math.sin(time * 2 + i * 1.7) * 0.3;
    const r = 0.8 + pseudoRand(i + 300) * 1.2;

    ctx.fillStyle = `rgba(255, 255, 255, ${brightness * flicker})`;
    ctx.beginPath();
    ctx.arc(sx, sy, r, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default NebulaVortex;
