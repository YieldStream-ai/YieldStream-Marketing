"use client";

import { useState, useRef } from "react";
import "./docs.scss";
import DocsHero from "./components/DocsHero";
import DocsSidebar from "./components/DocsSidebar";
import OverviewSection from "./components/OverviewSection";
import EngineSection from "./components/EngineSection";
import ScoringSection from "./components/ScoringSection";
import MetricsSection from "./components/MetricsSection";
import AnalyticsSection from "./components/AnalyticsSection";
import LearningSection from "./components/LearningSection";
import SecuritySection from "./components/SecuritySection";
import AccessSection from "./components/AccessSection";
import PricingSection from "./components/PricingSection";
import GlossarySection from "./components/GlossarySection";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const mainRef = useRef(null);

  const showSection = (id) => {
    setActiveSection(id);
    if (mainRef.current) mainRef.current.scrollTop = 0;
  };

  return (
    <div className="docs-page">
      <DocsHero />

      <div className="container docs-container-wrap" style={{ maxWidth: 1100 }}>
        <div className="docs-container">
          <DocsSidebar activeSection={activeSection} onNavigate={showSection} />

          <div className="docs-main" ref={mainRef} id="docs-main">
            <OverviewSection active={activeSection === "overview"} />
            <EngineSection active={activeSection === "engine"} />
            <ScoringSection active={activeSection === "scoring"} />
            <MetricsSection active={activeSection === "metrics"} />
            <AnalyticsSection active={activeSection === "analytics"} />
            <LearningSection active={activeSection === "learning"} />
            <SecuritySection active={activeSection === "security"} />
            <AccessSection active={activeSection === "access"} />
            <PricingSection active={activeSection === "pricing"} />
            <GlossarySection active={activeSection === "glossary"} />
          </div>
        </div>
      </div>
    </div>
  );
}
