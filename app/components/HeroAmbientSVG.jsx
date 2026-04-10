export default function HeroAmbientSVG() {
  const dotXs = [80, 140, 200, 260, 320, 380, 440, 500, 560, 620, 680, 740];
  const dotYs = [60, 120, 180, 240, 300, 360, 420, 480, 540];

  return (
    <svg width="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes pulse1{0%,100%{opacity:.06}50%{opacity:.18}}
        @keyframes pulse2{0%,100%{opacity:.04}50%{opacity:.14}}
        @keyframes pulse3{0%,100%{opacity:.03}50%{opacity:.1}}
        @keyframes flowDash{to{stroke-dashoffset:-30}}
        @keyframes glow{0%,100%{opacity:.4}50%{opacity:.9}}
        @keyframes glow2{0%,100%{opacity:.2}50%{opacity:.6}}
        @keyframes drift{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes dataFlow{0%{offset-distance:0%}100%{offset-distance:100%}}
        @media(prefers-reduced-motion:reduce){*{animation:none!important}}
      `}</style>

      <defs>
        <radialGradient id="g1">
          <stop offset="0%" stopColor="#14B8A6" stopOpacity=".25"/>
          <stop offset="100%" stopColor="#14B8A6" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="g2">
          <stop offset="0%" stopColor="#047987" stopOpacity=".18"/>
          <stop offset="100%" stopColor="#047987" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="g3">
          <stop offset="0%" stopColor="#14B8A6" stopOpacity=".08"/>
          <stop offset="100%" stopColor="#14B8A6" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="g4">
          <stop offset="0%" stopColor="#0EA5E9" stopOpacity=".06"/>
          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Dot grid */}
      <g opacity=".025">
        {dotXs.map(cx =>
          dotYs.map(cy => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1" fill="#94A3B8"/>
          ))
        )}
      </g>

      {/* Radial glows */}
      <circle cx="400" cy="300" r="280" fill="url(#g3)" style={{animation:"pulse3 8s ease-in-out infinite"}}/>
      <circle cx="400" cy="300" r="200" fill="url(#g1)" style={{animation:"pulse1 5s ease-in-out infinite"}}/>
      <circle cx="400" cy="300" r="130" fill="url(#g2)" style={{animation:"pulse2 4s ease-in-out infinite .8s"}}/>
      <circle cx="350" cy="260" r="100" fill="url(#g4)" style={{animation:"pulse1 7s ease-in-out infinite 2s"}}/>

      {/* Orbital rings */}
      <ellipse cx="400" cy="300" rx="240" ry="240" fill="none" stroke="#14B8A6" strokeWidth=".3" opacity=".04" strokeDasharray="3 9"/>
      <ellipse cx="400" cy="300" rx="180" ry="180" fill="none" stroke="#14B8A6" strokeWidth=".3" opacity=".06" strokeDasharray="4 8"/>
      <ellipse cx="400" cy="300" rx="130" ry="130" fill="none" stroke="#047987" strokeWidth=".4" opacity=".08" strokeDasharray="3 6"/>
      <ellipse cx="400" cy="300" rx="85" ry="85" fill="none" stroke="#14B8A6" strokeWidth=".4" opacity=".06" strokeDasharray="2 5"/>

      {/* Flow lines – left */}
      <path d="M0 180 C100 180, 200 250, 340 280" fill="none" stroke="#14B8A6" strokeWidth=".8" opacity=".12" strokeDasharray="6 6" style={{animation:"flowDash 3s linear infinite"}}/>
      <path d="M0 400 C120 380, 240 320, 360 305" fill="none" stroke="#047987" strokeWidth=".6" opacity=".08" strokeDasharray="5 7" style={{animation:"flowDash 4s linear infinite .5s"}}/>
      <path d="M0 520 C150 480, 280 350, 380 310" fill="none" stroke="#14B8A6" strokeWidth=".5" opacity=".06" strokeDasharray="4 8" style={{animation:"flowDash 5s linear infinite 1s"}}/>

      {/* Flow lines – right */}
      <path d="M460 290 C560 260, 650 200, 800 160" fill="none" stroke="#14B8A6" strokeWidth=".8" opacity=".12" strokeDasharray="6 6" style={{animation:"flowDash 3s linear infinite .3s"}}/>
      <path d="M450 310 C550 330, 650 400, 800 440" fill="none" stroke="#047987" strokeWidth=".6" opacity=".08" strokeDasharray="5 7" style={{animation:"flowDash 4s linear infinite .8s"}}/>
      <path d="M440 295 C540 290, 680 320, 800 340" fill="none" stroke="#14B8A6" strokeWidth=".5" opacity=".06" strokeDasharray="4 8" style={{animation:"flowDash 5s linear infinite 1.5s"}}/>

      {/* Flow lines – vertical */}
      <path d="M400 0 C395 80, 410 180, 400 260" fill="none" stroke="#047987" strokeWidth=".4" opacity=".06" strokeDasharray="3 8" style={{animation:"flowDash 4s linear infinite 2s"}}/>
      <path d="M400 340 C390 420, 405 500, 400 600" fill="none" stroke="#047987" strokeWidth=".4" opacity=".06" strokeDasharray="3 8" style={{animation:"flowDash 4s linear infinite 2.5s"}}/>

      {/* Data particles */}
      <circle r="2.5" fill="#14B8A6" opacity=".7" style={{offsetPath:"path('M0 180 C100 180, 200 250, 340 280')", animation:"dataFlow 3s linear infinite"}}/>
      <circle r="2" fill="#14B8A6" opacity=".5" style={{offsetPath:"path('M460 290 C560 260, 650 200, 800 160')", animation:"dataFlow 3.5s linear infinite .5s"}}/>
      <circle r="2" fill="#047987" opacity=".5" style={{offsetPath:"path('M0 400 C120 380, 240 320, 360 305')", animation:"dataFlow 4s linear infinite 1s"}}/>
      <circle r="1.5" fill="#14B8A6" opacity=".4" style={{offsetPath:"path('M450 310 C550 330, 650 400, 800 440')", animation:"dataFlow 4.5s linear infinite 1.5s"}}/>
      <circle r="2" fill="#047987" opacity=".4" style={{offsetPath:"path('M400 0 C395 80, 410 180, 400 260')", animation:"dataFlow 5s linear infinite 2s"}}/>

      {/* Hexagon center */}
      <polygon points="400,220 470,260 470,340 400,380 330,340 330,260" fill="none" stroke="#14B8A6" strokeWidth="1.2" opacity=".9"/>
      <polygon points="400,238 458,270 458,330 400,362 342,330 342,270" fill="none" stroke="#047987" strokeWidth=".5" opacity=".35"/>
      <polygon points="400,256 442,278 442,322 400,344 358,322 358,278" fill="none" stroke="#14B8A6" strokeWidth=".3" opacity=".2"/>

      {/* Network lines */}
      <line x1="370" y1="272" x2="400" y2="290" stroke="#14B8A6" strokeWidth="1" opacity=".5"/>
      <line x1="400" y1="290" x2="430" y2="272" stroke="#14B8A6" strokeWidth="1" opacity=".5"/>
      <line x1="400" y1="290" x2="400" y2="325" stroke="#047987" strokeWidth="1" opacity=".4"/>
      <line x1="370" y1="272" x2="370" y2="320" stroke="#047987" strokeWidth=".5" opacity=".15"/>
      <line x1="430" y1="272" x2="430" y2="320" stroke="#047987" strokeWidth=".5" opacity=".15"/>
      <line x1="355" y1="300" x2="445" y2="300" stroke="#14B8A6" strokeWidth=".4" opacity=".15"/>
      <line x1="365" y1="315" x2="435" y2="315" stroke="#047987" strokeWidth=".4" opacity=".12"/>
      <line x1="380" y1="280" x2="420" y2="310" stroke="#047987" strokeWidth=".3" opacity=".1"/>
      <line x1="420" y1="280" x2="380" y2="310" stroke="#047987" strokeWidth=".3" opacity=".1"/>

      {/* Network nodes */}
      <circle cx="400" cy="290" r="5" fill="#14B8A6" style={{animation:"glow 2.5s ease-in-out infinite"}}/>
      <circle cx="370" cy="272" r="3" fill="#047987" opacity=".7"/>
      <circle cx="430" cy="272" r="3" fill="#047987" opacity=".7"/>
      <circle cx="400" cy="325" r="3" fill="#14B8A6" opacity=".5"/>
      <circle cx="370" cy="320" r="2" fill="#047987" opacity=".35"/>
      <circle cx="430" cy="320" r="2" fill="#047987" opacity=".35"/>
      <circle cx="355" cy="300" r="1.5" fill="#14B8A6" opacity=".25"/>
      <circle cx="445" cy="300" r="1.5" fill="#14B8A6" opacity=".25"/>

      {/* Score badge */}
      <g style={{animation:"drift 4s ease-in-out infinite"}}>
        <rect x="370" y="186" width="60" height="28" rx="14" fill="#047987"/>
        <text x="400" y="200" textAnchor="middle" dominantBaseline="central" fill="#E2E8F0" style={{fontSize:"15px", fontWeight:600, fontFamily:"'IBM Plex Mono',monospace"}}>100</text>
      </g>

      {/* Mid-range ambient nodes */}
      <circle cx="320" cy="230" r="3" fill="#14B8A6" opacity=".3" style={{animation:"glow2 3s ease-in-out infinite .5s"}}/>
      <circle cx="480" cy="240" r="3" fill="#047987" opacity=".25" style={{animation:"glow2 3.5s ease-in-out infinite 1s"}}/>
      <circle cx="310" cy="360" r="2.5" fill="#14B8A6" opacity=".2" style={{animation:"glow2 4s ease-in-out infinite 1.5s"}}/>
      <circle cx="490" cy="350" r="2.5" fill="#047987" opacity=".22" style={{animation:"glow2 3s ease-in-out infinite 2s"}}/>
      <circle cx="350" cy="390" r="2" fill="#14B8A6" opacity=".18"/>
      <circle cx="455" cy="225" r="2" fill="#047987" opacity=".18"/>

      {/* Far ambient nodes */}
      <circle cx="250" cy="200" r="2.5" fill="#14B8A6" opacity=".15" style={{animation:"glow2 5s ease-in-out infinite .8s"}}/>
      <circle cx="550" cy="210" r="2" fill="#047987" opacity=".12" style={{animation:"glow2 4.5s ease-in-out infinite 1.3s"}}/>
      <circle cx="240" cy="380" r="2" fill="#14B8A6" opacity=".1" style={{animation:"glow2 5.5s ease-in-out infinite 2s"}}/>
      <circle cx="560" cy="390" r="2.5" fill="#047987" opacity=".12" style={{animation:"glow2 4s ease-in-out infinite 2.5s"}}/>
      <circle cx="280" cy="440" r="1.5" fill="#14B8A6" opacity=".08"/>
      <circle cx="520" cy="180" r="1.5" fill="#047987" opacity=".08"/>
      <circle cx="270" cy="280" r="1.5" fill="#047987" opacity=".07"/>
      <circle cx="530" cy="330" r="1.5" fill="#14B8A6" opacity=".07"/>

      {/* Very far ambient nodes */}
      <circle cx="160" cy="160" r="2" fill="#14B8A6" opacity=".06"/>
      <circle cx="640" cy="180" r="2" fill="#047987" opacity=".05"/>
      <circle cx="150" cy="420" r="1.5" fill="#14B8A6" opacity=".04"/>
      <circle cx="650" cy="440" r="1.5" fill="#047987" opacity=".04"/>
      <circle cx="180" cy="300" r="1.5" fill="#047987" opacity=".04"/>
      <circle cx="620" cy="280" r="1.5" fill="#14B8A6" opacity=".04"/>
      <circle cx="120" cy="260" r="1" fill="#14B8A6" opacity=".03"/>
      <circle cx="700" cy="320" r="1" fill="#047987" opacity=".03"/>
      <circle cx="100" cy="480" r="1" fill="#14B8A6" opacity=".03"/>
      <circle cx="720" cy="240" r="1" fill="#047987" opacity=".03"/>

      {/* Connection lines from ambient nodes */}
      <line x1="320" y1="230" x2="370" y2="272" stroke="#14B8A6" strokeWidth=".3" opacity=".08"/>
      <line x1="480" y1="240" x2="430" y2="272" stroke="#047987" strokeWidth=".3" opacity=".07"/>
      <line x1="310" y1="360" x2="370" y2="320" stroke="#14B8A6" strokeWidth=".3" opacity=".06"/>
      <line x1="490" y1="350" x2="430" y2="320" stroke="#047987" strokeWidth=".3" opacity=".06"/>
      <line x1="250" y1="200" x2="320" y2="230" stroke="#14B8A6" strokeWidth=".2" opacity=".04"/>
      <line x1="550" y1="210" x2="480" y2="240" stroke="#047987" strokeWidth=".2" opacity=".04"/>
      <line x1="240" y1="380" x2="310" y2="360" stroke="#14B8A6" strokeWidth=".2" opacity=".03"/>
      <line x1="560" y1="390" x2="490" y2="350" stroke="#047987" strokeWidth=".2" opacity=".03"/>
      <line x1="320" y1="230" x2="480" y2="240" stroke="#047987" strokeWidth=".2" opacity=".03" strokeDasharray="3 6"/>
      <line x1="310" y1="360" x2="490" y2="350" stroke="#14B8A6" strokeWidth=".2" opacity=".03" strokeDasharray="3 6"/>
      <line x1="250" y1="200" x2="550" y2="210" stroke="#047987" strokeWidth=".15" opacity=".02" strokeDasharray="4 8"/>
    </svg>
  );
}
