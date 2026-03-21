import { useEffect, useRef } from "react";

export default function YieldStreamSpinner({
  classname = "",
  size = 120,
  showLabel = false,
  label = "Loading...",
}: {
  classname?: string;
  size?: number;
  showLabel?: boolean;
  label?: string;
}) {
  const spRef = useRef<SVGGElement>(null);
  const aRef = useRef<SVGPathElement>(null);
  const bRef = useRef<SVGPathElement>(null);
  const cRef = useRef<SVGPathElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cx = 70,
      cy = 70,
      R = 60;

    // Total duration for the full entrance animation (plays once, no loop)
    const dur = 2200;

    const easeInOut = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const rad = (d: number) => (d * Math.PI) / 180;
    const pt = (r: number, deg: number): [number, number] => [
      cx + r * Math.cos(rad(deg)),
      cy + r * Math.sin(rad(deg)),
    ];

    function buildAnnular(
      startDeg: number,
      endDeg: number,
      morph: number,
    ): string {
      const innerR = morph * (R - 12);
      const trimEach = morph * 11;
      const s = startDeg + trimEach;
      const e = endDeg - trimEach;
      const span = (e - s + 360) % 360;
      const large = span > 180 ? 1 : 0;
      const [ox1, oy1] = pt(R, s);
      const [ox2, oy2] = pt(R, e);
      if (innerR < 0.5) {
        return `M${cx},${cy} L${ox1},${oy1} A${R},${R} 0 ${large},1 ${ox2},${oy2} Z`;
      }
      const [ix1, iy1] = pt(innerR, e);
      const [ix2, iy2] = pt(innerR, s);
      return `M${ox1},${oy1} A${R},${R} 0 ${large},1 ${ox2},${oy2} L${ix1},${iy1} A${innerR},${innerR} 0 ${large},0 ${ix2},${iy2} Z`;
    }

    // Timeline (plays once, clamps at p=1):
    // 0.00 - 0.65: 1 full spin (360°) as arcs
    // 0.65 - 0.85: continue spinning, morph arcs → logo shape
    // 0.85 - 1.00: hold logo, ring fully visible

    let t0: number | null = null;

    function run(ts: number) {
      if (!t0) t0 = ts;
      const elapsed = ts - t0;

      // Clamp p at 1 — no modulo, no loop
      const p = Math.min(elapsed / dur, 1);

      let morph: number;
      let angle: number;
      let ringOpacity: number;

      if (p < 0.65) {
        morph = 1;
        // 1 full spin (360°) over the spin phase
        angle = (p / 0.65) * 360;
        ringOpacity = 0;
      } else if (p < 0.85) {
        const t = (p - 0.65) / 0.2;
        morph = 1 - easeInOut(t);
        // Continue rotation into morph phase, arrive at 360°
        angle = 360 + (t / 0.2) * 0;
        ringOpacity = easeInOut(t);
      } else {
        morph = 0;
        angle = 0;
        ringOpacity = 1;
      }

      if (aRef.current)
        aRef.current.setAttribute("d", buildAnnular(90, 225, morph));
      if (bRef.current)
        bRef.current.setAttribute("d", buildAnnular(315, 450, morph));
      if (cRef.current)
        cRef.current.setAttribute("d", buildAnnular(225, 315, morph));

      if (spRef.current) {
        spRef.current.setAttribute("transform", `rotate(${angle} ${cx} ${cy})`);
      }

      if (ringRef.current) {
        ringRef.current.setAttribute("opacity", String(ringOpacity));
      }

      // Stop scheduling frames once animation is complete
      if (p < 1) {
        rafRef.current = requestAnimationFrame(run);
      }
    }

    rafRef.current = requestAnimationFrame(run);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className={`ys-spinner ys-spinner--${classname}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="-14 -14 168 168"
        style={{ overflow: "visible" }}
      >
        <defs>
          <mask id="ys-mask">
            <rect x="-20" y="-20" width="180" height="180" fill="white" />
            <line
              x1="70"
              y1="70"
              x2="28"
              y2="28"
              stroke="black"
              strokeWidth="14"
              strokeLinecap="square"
            />
            <line
              x1="70"
              y1="70"
              x2="112"
              y2="28"
              stroke="black"
              strokeWidth="14"
              strokeLinecap="square"
            />
            <line
              x1="70"
              y1="70"
              x2="70"
              y2="130"
              stroke="black"
              strokeWidth="14"
              strokeLinecap="square"
            />
          </mask>
          <linearGradient
            id="ys-gtl"
            x1="70"
            y1="70"
            x2="14"
            y2="14"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#01313a" />
            <stop offset="100%" stopColor="#047987" />
          </linearGradient>
          <linearGradient
            id="ys-gtr"
            x1="70"
            y1="70"
            x2="126"
            y2="14"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#01313a" />
            <stop offset="100%" stopColor="#047987" />
          </linearGradient>
          <linearGradient
            id="ys-gb"
            x1="70"
            y1="70"
            x2="70"
            y2="134"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#01313a" />
            <stop offset="100%" stopColor="#035d6a" />
          </linearGradient>
        </defs>

        {/* Spinning segments with Y mask */}
        <g ref={spRef} mask="url(#ys-mask)">
          <path ref={aRef} fill="url(#ys-gtl)" />
          <path ref={bRef} fill="url(#ys-gtr)" />
          <path ref={cRef} fill="url(#ys-gb)" />
        </g>

        {/* Border ring — fades in as segments morph into logo */}
        <circle
          ref={ringRef}
          cx="70"
          cy="70"
          r="78"
          fill="none"
          stroke="#01313a"
          strokeWidth="1"
          opacity="0"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {showLabel && (
        <p style={{ marginTop: 12, fontSize: 14, color: "#333" }}>{label}</p>
      )}
    </div>
  );
}
