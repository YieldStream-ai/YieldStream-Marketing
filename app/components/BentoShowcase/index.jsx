"use client";

import Image from "next/image";
import Link from "next/link";
import { Share2, Pencil, LayoutGrid, Table, BarChart3, Send } from "lucide-react";
import { useReveal } from "../useReveal";
import "./styles.scss";

const ROLES = [
  { label: "Admin", color: "teal" },
  { label: "Senior Broker", color: "emerald" },
  { label: "Analyst", color: "amber" },
  { label: "Read-Only", color: "slate" },
];

const TEAM = [
  { name: "Sarah Chen", role: "@sarah.c", initials: "SC", bg: "var(--p600)" },
  { name: "Marcus Rivera", role: "@marcus.r", initials: "MR", bg: "var(--a600)" },
  { name: "Priya Patel", role: "@priya.p", initials: "PP", bg: "var(--p400)" },
  { name: "James O'Brien", role: "@james.ob", initials: "JO", bg: "#6366f1" },
];

const STACK_COLORS = ["var(--p500)", "var(--a500)", "var(--p400)", "#6366f1"];

export default function BentoShowcase() {
  const revealRef = useReveal();

  return (
    <section className="bento-showcase" ref={revealRef}>
      <div className="bento-showcase__container">
        <div className="bento-showcase__header reveal">
          <span className="bento-showcase__label">Platform</span>
          <h2 className="bento-showcase__section-title">
            Everything your desk needs
          </h2>
        </div>

        <div className="bento-showcase__grid">
          {/* Card 1 — Permissions (tall left) */}
          <div className="bento-showcase__card bento-showcase__card--permissions reveal">
            <div>
              <span className="bento-showcase__card-label">Team Permissions</span>
              <h3 className="bento-showcase__card-title">
                Control who touches every deal
              </h3>
              <p className="bento-showcase__card-desc">
                Define who can view, edit, or submit deals. Set role-based access
                across your entire brokerage team.
              </p>
            </div>
            <div className="bento-showcase__chips">
              {ROLES.map((r) => (
                <span key={r.label} className="bento-showcase__chip">
                  <span
                    className={`bento-showcase__chip-dot bento-showcase__chip-dot--${r.color}`}
                  />
                  {r.label}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 — Hero (center top, teal gradient) */}
          <div className="bento-showcase__card bento-showcase__card--hero reveal reveal-delay-1">
            <span className="bento-showcase__badge">AI-Powered</span>
            <h3 className="bento-showcase__hero-title">
              120-Second Underwriting
            </h3>
            <p className="bento-showcase__hero-desc">
              Bank statements to risk score, automatically. 20+ signals
              extracted in real time.
            </p>
            <div className="bento-showcase__hero-cta">
              <Link href="/pricing" className="btn btn-emerald btn-sm">
                See the engine
              </Link>
            </div>
          </div>

          {/* Card 3 — Image overlay (right top) */}
          <div className="bento-showcase__card bento-showcase__card--image reveal reveal-delay-2">
            <div className="bento-showcase__image-wrap">
              <div className="bento-showcase__image-overlay">
                <span className="bento-showcase__card-label">Smart Matching</span>
                <h3 className="bento-showcase__card-title">Let AI match it</h3>
              </div>
              <Image
                src="/images/Lender-Edit.png"
                alt="Lender matching interface"
                fill
              />
            </div>
          </div>

          {/* Card 4 — Team (bottom center) */}
          <div className="bento-showcase__card bento-showcase__card--team reveal reveal-delay-1">
            <div>
              <span className="bento-showcase__card-label">Broker Collaboration</span>
              <h3 className="bento-showcase__card-title">
                Your entire desk, one pipeline
              </h3>
              <p className="bento-showcase__card-desc">
                Deploy and manage multiple brokers in parallel to handle complex,
                multi-deal operations.
              </p>
            </div>
            <div className="bento-showcase__avatars">
              {TEAM.map((m) => (
                <div key={m.name} className="bento-showcase__avatar-item">
                  <div
                    className="bento-showcase__avatar"
                    style={{ background: m.bg }}
                  >
                    {m.initials}
                  </div>
                  <div className="bento-showcase__avatar-info">
                    <span className="bento-showcase__avatar-name">{m.name}</span>
                    <span className="bento-showcase__avatar-role">{m.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5 — Pipeline (bottom right, teal) */}
          <div className="bento-showcase__card bento-showcase__card--pipeline reveal reveal-delay-2">
            <div>
              <h3 className="bento-showcase__card-title">Active Pipeline</h3>
              <p className="bento-showcase__pipeline-stat">
                $2.4M across 18 deals
              </p>
            </div>
            <div className="bento-showcase__pipeline-meta">
              <div className="bento-showcase__avatar-stack">
                {STACK_COLORS.map((bg, i) => (
                  <div
                    key={i}
                    className="bento-showcase__avatar"
                    style={{ background: bg }}
                  >
                    {["SC", "MR", "PP", "JO"][i]}
                  </div>
                ))}
              </div>
              <div className="bento-showcase__pipeline-actions">
                <button className="bento-showcase__btn-ghost">
                  <Share2 /> Share
                </button>
                <button className="bento-showcase__btn-ghost">
                  <Pencil /> Edit
                </button>
              </div>
            </div>
            <div className="bento-showcase__pipeline-nav">
              <span className="bento-showcase__nav-item bento-showcase__nav-item--active">
                <LayoutGrid /> Kanban
              </span>
              <span className="bento-showcase__nav-item">
                <Table /> Table
              </span>
              <span className="bento-showcase__nav-item">
                <BarChart3 /> Analytics
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
