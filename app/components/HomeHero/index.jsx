"use client";

import Link from "next/link";
import Image from "next/image";
import { Zap, Cpu, ChevronRight } from "lucide-react";
import HeroAmbientSVG from "./HeroAmbientSVG";
import "./styles.scss";

export default function HomeHero() {
  return (
    <section className="home__hero">
      <div className="home__hero-card">
        <div className="home__hero-glow home__hero-glow--1" />
        <div className="home__hero-glow home__hero-glow--2" />

        <div className="container home__hero-layout">
          {/* Left column — copy */}
          <div className="home__hero-copy">
            <Link href="/pricing" className="home__hero-badge reveal">
              <span className="home__hero-badge-icon">
                <Zap size={13} />
              </span>
              <span className="home__hero-badge-text">
                Request beta access
              </span>
              <ChevronRight size={14} />
            </Link>

            <h1 className="home__hero-title reveal">
              Submission Intelligence
              <br />
              for the High-Volume{" "}
              <span className="home__hero-accent">Broker.</span>
            </h1>

            <p className="home__hero-sub reveal reveal-delay-1">
              <span style={{ color: "var(--p600)" }}>MCA</span> Brokers don't
              just want automation; they want to stop wasting time on dead
              deals.
            </p>

            <div className="home__hero-actions reveal reveal-delay-2">
              <Link href="/pricing" className="btn btn-primary btn-lg">
                Get Started
              </Link>
              <Link href="/contact" className="home__hero-link">
                Book a Demo
              </Link>
            </div>

            <div className="home__hero-divider reveal reveal-delay-2" />

            <div className="home__hero-features reveal reveal-delay-3">
              <div className="home__hero-feature">
                <span className="home__hero-feature-icon">
                  <Zap size={15} />
                </span>
                <div>
                  <strong>120s Processing</strong>
                  <span>PDF to scored intelligence</span>
                </div>
              </div>
              <div className="home__hero-feature">
                <span className="home__hero-feature-icon">
                  <Cpu size={15} />
                </span>
                <div>
                  <strong>AI-Powered Matching/Routing</strong>
                  <span>Every lender scored & ranked</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero ambient illustration */}
          <div className="home__hero-visual">
            <HeroAmbientSVG />
          </div>
        </div>

        {/* Bottom-right screenshot peek */}
        <div className="home__hero-screenshot-peek">
          <Image
            src="/images/underwritting-cta.png"
            alt="YieldStream underwriting dashboard"
            width={1920}
            height={1080}
            className="home__hero-screenshot-img"
          />
          <div className="home__hero-screenshot-fade" />
        </div>
      </div>
    </section>
  );
}
