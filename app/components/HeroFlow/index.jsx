"use client";

export default function HeroFlow() {
  return (
    <div className="hero-flow">
      {/* SVG connecting lines */}
      <svg
        className="hero-flow__lines"
        viewBox="0 0 900 520"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Upload → Score lines */}
        <line x1="155" y1="100" x2="400" y2="230" stroke="rgba(4,121,135,0.25)" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1="155" y1="250" x2="400" y2="270" stroke="rgba(4,121,135,0.25)" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1="130" y1="400" x2="400" y2="310" stroke="rgba(4,121,135,0.25)" strokeWidth="1.5" strokeDasharray="6 4" />

        {/* Score → Match lines */}
        <line x1="530" y1="220" x2="700" y2="95" stroke="rgba(4,121,135,0.25)" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1="530" y1="260" x2="700" y2="210" stroke="rgba(4,121,135,0.25)" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1="530" y1="300" x2="700" y2="330" stroke="rgba(4,121,135,0.25)" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1="530" y1="320" x2="700" y2="430" stroke="rgba(4,121,135,0.25)" strokeWidth="1.5" strokeDasharray="6 4" />

        {/* Dots along lines */}
        <circle cx="160" cy="105" r="3.5" fill="var(--p600)" />
        <circle cx="250" cy="165" r="2.5" fill="var(--p600)" opacity="0.6" />
        <circle cx="330" cy="210" r="2" fill="var(--p600)" opacity="0.4" />

        <circle cx="160" cy="250" r="3.5" fill="var(--p600)" />
        <circle cx="280" cy="258" r="2" fill="var(--p600)" opacity="0.5" />

        <circle cx="135" cy="395" r="3.5" fill="var(--p600)" />
        <circle cx="300" cy="340" r="2.5" fill="var(--p600)" opacity="0.5" />

        <circle cx="620" cy="180" r="2.5" fill="var(--p600)" opacity="0.5" />
        <circle cx="660" cy="150" r="2" fill="var(--p600)" opacity="0.4" />

        <circle cx="630" cy="255" r="3.5" fill="var(--p600)" />
        <circle cx="670" cy="240" r="2" fill="var(--p600)" opacity="0.4" />

        <circle cx="600" cy="310" r="2" fill="var(--p600)" opacity="0.5" />
        <circle cx="580" cy="340" r="2.5" fill="var(--p600)" opacity="0.4" />
      </svg>

      {/* UPLOAD column */}
      <div className="hero-flow__col hero-flow__col--upload">
        <div className="hero-flow__doc">
          <div className="hero-flow__doc-icon">
            <svg width="40" height="48" viewBox="0 0 40 48" fill="none">
              <rect x="0.5" y="0.5" width="39" height="47" rx="4" stroke="rgba(255,255,255,0.15)" fill="rgba(255,255,255,0.03)" />
              <rect x="8" y="10" width="20" height="2.5" rx="1" fill="var(--p600)" opacity="0.7" />
              <rect x="8" y="17" width="24" height="2" rx="1" fill="rgba(255,255,255,0.12)" />
              <rect x="8" y="23" width="18" height="2" rx="1" fill="rgba(255,255,255,0.12)" />
              <rect x="8" y="29" width="22" height="2" rx="1" fill="rgba(255,255,255,0.08)" />
            </svg>
          </div>
          <span className="hero-flow__doc-label">Bank stmt</span>
        </div>
        <div className="hero-flow__doc">
          <div className="hero-flow__doc-icon">
            <svg width="40" height="48" viewBox="0 0 40 48" fill="none">
              <rect x="0.5" y="0.5" width="39" height="47" rx="4" stroke="rgba(255,255,255,0.15)" fill="rgba(255,255,255,0.03)" />
              <rect x="10" y="14" width="20" height="16" rx="2" fill="rgba(255,255,255,0.08)" />
            </svg>
          </div>
          <span className="hero-flow__doc-label">Application</span>
        </div>
        <div className="hero-flow__doc">
          <div className="hero-flow__doc-icon">
            <svg width="40" height="48" viewBox="0 0 40 48" fill="none">
              <rect x="0.5" y="0.5" width="39" height="47" rx="4" stroke="rgba(255,255,255,0.15)" fill="rgba(255,255,255,0.03)" />
              <rect x="8" y="12" width="16" height="2" rx="1" fill="var(--p600)" opacity="0.5" />
              <rect x="8" y="19" width="24" height="2" rx="1" fill="rgba(255,255,255,0.12)" />
              <rect x="8" y="25" width="20" height="2" rx="1" fill="rgba(255,255,255,0.12)" />
              <rect x="8" y="31" width="22" height="2" rx="1" fill="rgba(255,255,255,0.08)" />
            </svg>
          </div>
          <span className="hero-flow__doc-label">Tax return</span>
        </div>
        <span className="hero-flow__col-label">UPLOAD</span>
      </div>

      {/* SCORE column */}
      <div className="hero-flow__col hero-flow__col--score">
        <div className="hero-flow__score-badge">
          <span className="hero-flow__score-num">100</span>
          <span className="hero-flow__score-tag">CLEAN</span>
        </div>
        <div className="hero-flow__hexagon">
          <svg width="160" height="180" viewBox="0 0 160 180" fill="none">
            {/* Outer hexagon */}
            <polygon
              points="80,5 150,47 150,133 80,175 10,133 10,47"
              stroke="var(--p600)"
              strokeWidth="2"
              fill="none"
            />
            {/* Inner hexagon */}
            <polygon
              points="80,35 125,62 125,118 80,145 35,118 35,62"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              fill="none"
            />
            {/* Network nodes */}
            <circle cx="80" cy="90" r="4" fill="var(--p600)" />
            <circle cx="55" cy="75" r="3" fill="var(--p600)" opacity="0.7" />
            <circle cx="105" cy="75" r="3" fill="var(--p600)" opacity="0.7" />
            <circle cx="55" cy="105" r="3" fill="var(--p600)" opacity="0.7" />
            <circle cx="105" cy="105" r="3" fill="var(--p600)" opacity="0.7" />
            <circle cx="80" cy="60" r="2.5" fill="var(--p600)" opacity="0.5" />
            <circle cx="80" cy="120" r="2.5" fill="var(--p600)" opacity="0.5" />
            {/* Network lines */}
            <line x1="80" y1="90" x2="55" y2="75" stroke="var(--p600)" strokeWidth="1" opacity="0.5" />
            <line x1="80" y1="90" x2="105" y2="75" stroke="var(--p600)" strokeWidth="1" opacity="0.5" />
            <line x1="80" y1="90" x2="55" y2="105" stroke="var(--p600)" strokeWidth="1" opacity="0.5" />
            <line x1="80" y1="90" x2="105" y2="105" stroke="var(--p600)" strokeWidth="1" opacity="0.5" />
            <line x1="80" y1="90" x2="80" y2="60" stroke="var(--p600)" strokeWidth="1" opacity="0.4" />
            <line x1="80" y1="90" x2="80" y2="120" stroke="var(--p600)" strokeWidth="1" opacity="0.4" />
            <line x1="55" y1="75" x2="105" y2="75" stroke="var(--p600)" strokeWidth="1" opacity="0.3" />
            <line x1="55" y1="105" x2="105" y2="105" stroke="var(--p600)" strokeWidth="1" opacity="0.3" />
          </svg>
        </div>
        <span className="hero-flow__col-label hero-flow__col-label--accent">SCORE</span>
      </div>

      {/* MATCH column */}
      <div className="hero-flow__col hero-flow__col--match">
        <div className="hero-flow__lender hero-flow__lender--top">
          <div className="hero-flow__lender-content">
            <span className="hero-flow__lender-name">Capital Plus</span>
            <div className="hero-flow__lender-meta">
              <span className="hero-flow__lender-pct">98%</span>
              <span className="hero-flow__lender-match">match</span>
            </div>
          </div>
          <span className="hero-flow__lender-rank">1</span>
        </div>
        <div className="hero-flow__lender">
          <div className="hero-flow__lender-content">
            <span className="hero-flow__lender-name">Apex Lending</span>
            <div className="hero-flow__lender-meta">
              <span className="hero-flow__lender-pct">84%</span>
              <span className="hero-flow__lender-match">match</span>
            </div>
          </div>
        </div>
        <div className="hero-flow__lender">
          <div className="hero-flow__lender-content">
            <span className="hero-flow__lender-name">Swift Capital</span>
            <div className="hero-flow__lender-meta">
              <span className="hero-flow__lender-pct">71%</span>
              <span className="hero-flow__lender-match">match</span>
            </div>
          </div>
        </div>
        <div className="hero-flow__lender hero-flow__lender--dim">
          <div className="hero-flow__lender-content">
            <span className="hero-flow__lender-name">BlueLine Fund</span>
            <div className="hero-flow__lender-meta">
              <span className="hero-flow__lender-pct">62%</span>
            </div>
          </div>
        </div>
        <span className="hero-flow__col-label">MATCH</span>
      </div>
    </div>
  );
}
