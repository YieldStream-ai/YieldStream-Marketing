"use client";

const lenders = {
  ring1: [
    { initials: "GC", score: 86, bg: "#e8faf0", color: "#16a34a" },
    { initials: "CP", score: 84, bg: "#e8f1fd", color: "#2563eb" },
    { initials: "BV", score: 81, bg: "#e8ecfd", color: "#4f46e5" },
  ],
  ring2: [
    { initials: "NF", score: 73, bg: "#fef7e0", color: "#ca8a04" },
    { initials: "CR", score: 69, bg: "#fde8e8", color: "#dc2626" },
    { initials: "OD", score: 65, bg: "#e0f7f3", color: "#0d9488" },
    { initials: "FB", score: 61, bg: "#eeebfc", color: "#7c3aed" },
  ],
  ring3: [
    { initials: "RF", score: 54, bg: "#f5f5f5", color: "#a3a3a3" },
    { initials: "KP", score: 51, bg: "#f5f5f5", color: "#a3a3a3" },
    { initials: "AM", score: 47, bg: "#f5f5f5", color: "#a3a3a3" },
    { initials: "FW", score: 43, bg: "#f5f5f5", color: "#a3a3a3" },
  ],
};

function placeOnRing(index: number, total: number) {
  const angle = (2 * Math.PI * index) / total - Math.PI / 2;
  const x = 50 + 50 * Math.cos(angle);
  const y = 50 + 50 * Math.sin(angle);
  return { left: `${x}%`, top: `${y}%` };
}

interface LenderAvatarProps {
  initials: string;
  score: number;
  bg: string;
  color: string;
  size: number;
  fontSize: number;
  counterDuration: string;
  counterDirection?: string;
  showBadge?: boolean;
  pulseDelay?: number;
}

function LenderAvatar({
  initials,
  score,
  bg,
  color,
  size,
  fontSize,
  counterDuration,
  counterDirection = "normal",
  showBadge = true,
  pulseDelay,
}: LenderAvatarProps) {
  const hasPulse = pulseDelay !== undefined;

  return (
    <div
      style={{
        position: "absolute",
        transform: "translate(-50%, -50%)",
        animation: `counterSpin ${counterDuration} linear infinite ${counterDirection}`,
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: bg,
          border: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          animation: hasPulse
            ? `scorePulse 7s ease-out infinite ${pulseDelay}s`
            : undefined,
        }}
      >
        <span style={{ fontSize, fontWeight: 600, color, lineHeight: 1 }}>
          {initials}
        </span>
        {showBadge && (
          <span
            style={{
              position: "absolute",
              top: -4,
              right: -4,
              background: "#fff",
              border: "0.5px solid #e5e5e5",
              borderRadius: 9,
              minWidth: 22,
              height: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 4px",
              fontSize: 9,
              fontWeight: 600,
              color: "#525252",
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
          >
            {score}
          </span>
        )}
      </div>
    </div>
  );
}

export default function LenderOrbit() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1 / 1",
        background:
          "radial-gradient(circle at center, #f8fafc 0%, transparent 70%)",
      }}
    >
      <style>{`
        @keyframes spinCW  { from { transform: translate(-50%,-50%) rotate(0deg);   } to { transform: translate(-50%,-50%) rotate(360deg);  } }
        @keyframes spinCCW { from { transform: translate(-50%,-50%) rotate(0deg);   } to { transform: translate(-50%,-50%) rotate(-360deg); } }
        @keyframes counterSpin       { from { transform: translate(-50%,-50%) rotate(0deg);   } to { transform: translate(-50%,-50%) rotate(-360deg); } }
        @keyframes counterSpinReverse { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg);  } }
        @keyframes dealPulse {
          0%   { transform: translate(-50%,-50%) scale(1);   opacity: 0.4; }
          100% { transform: translate(-50%,-50%) scale(1.3); opacity: 0;   }
        }
        @keyframes scorePulse {
          0%, 85%  { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
          90%      { box-shadow: 0 0 0 4px rgba(74,222,128,0.25); }
          100%     { box-shadow: 0 0 0 8px rgba(74,222,128,0); }
        }
      `}</style>

      {/* Center deal node */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}
      >
        {/* Pulsing ring */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 96,
            height: 96,
            borderRadius: "50%",
            border: "1px solid rgba(107,114,128,0.15)",
            animation: "dealPulse 3s ease-out infinite",
          }}
        />
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            background: "#f3f4f6",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative", width: 40, height: 40 }}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6b7280"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="8" y1="13" x2="16" y2="13" stroke="rgba(107,114,128,0.3)" strokeWidth="1" />
              <line x1="8" y1="17" x2="13" y2="17" stroke="rgba(107,114,128,0.3)" strokeWidth="1" />
            </svg>
            <div
              style={{
                position: "absolute",
                top: 8,
                left: 6,
                right: 6,
                height: 1.5,
                borderRadius: 1,
                background: "#1f2937",
                animation: "scan 2.4s ease-in-out infinite",
                boxShadow: "0 0 6px rgba(31,41,55,0.4), 0 0 2px rgba(31,41,55,0.6)",
              }}
            />
            <style>{`
              @keyframes scan {
                0%, 100% { top: 8px; }
                50% { top: 28px; }
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Ring 1 — strong matches, 18s CW */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "36%",
          height: "36%",
          borderRadius: "50%",
          border: "1px dashed #d4d4d4",
          animation: "spinCW 18s linear infinite",
        }}
      >
        {/* Connection lines from center to strong matches */}
        <svg
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          {lenders.ring1.map((l, i) => {
            const pos = placeOnRing(i, lenders.ring1.length);
            const x = parseFloat(pos.left);
            const y = parseFloat(pos.top);
            return (
              <line
                key={l.initials}
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke="rgba(10,10,10,0.06)"
                strokeWidth="0.5"
                strokeDasharray="2 2"
              />
            );
          })}
        </svg>
        {lenders.ring1.map((l, i) => (
          <div
            key={l.initials}
            style={{
              position: "absolute",
              ...placeOnRing(i, lenders.ring1.length),
            }}
          >
            <LenderAvatar
              {...l}
              size={62}
              fontSize={15}
              counterDuration="18s"
              pulseDelay={i * 2.3}
            />
          </div>
        ))}
      </div>

      {/* Ring 2 — mid matches, 26s CW */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "64%",
          height: "64%",
          borderRadius: "50%",
          border: "1px dashed #d4d4d4",
          animation: "spinCW 26s linear infinite",
        }}
      >
        {lenders.ring2.map((l, i) => (
          <div
            key={l.initials}
            style={{
              position: "absolute",
              ...placeOnRing(i, lenders.ring2.length),
            }}
          >
            <LenderAvatar
              {...l}
              size={50}
              fontSize={13}
              counterDuration="26s"
            />
          </div>
        ))}
      </div>

      {/* Ring 3 — weak matches, 38s CCW */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "94%",
          height: "94%",
          borderRadius: "50%",
          border: "1px dashed #d4d4d4",
          animation: "spinCCW 38s linear infinite",
        }}
      >
        {lenders.ring3.map((l, i) => (
          <div
            key={l.initials}
            style={{
              position: "absolute",
              ...placeOnRing(i, lenders.ring3.length),
            }}
          >
            <LenderAvatar
              {...l}
              size={44}
              fontSize={12}
              counterDuration="38s"
              counterDirection="reverse"
              showBadge={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
