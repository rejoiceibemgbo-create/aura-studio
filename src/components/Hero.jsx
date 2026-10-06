import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Ambient background glow elements */}
      <div className="hero-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />
      
      {/* Decorative background grid pattern */}
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="container hero-container">
        {/* Top Location / Status Badge */}
        <div className="badge-pill hero-badge animate-fade-in">
          <span className="badge-dot"></span>
          <span>London, UK • Creative Design Agency</span>
        </div>

        {/* Hero Main Heading: Prominent "Aura Studio" name & tagline */}
        <div className="hero-content">
          <h1 className="hero-brand-name">
            Aura Studio
          </h1>

          <p className="hero-tagline">
            Bringing Ideas to Life
          </p>

          <p className="hero-description">
            Modern design that gives brands clarity, character, and purpose. We are a London-based creative agency specializing in <span className="highlight-text">Branding</span>, <span className="highlight-text">UI/UX Design</span>, and <span className="highlight-text">Web Design</span>.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              <span>Let's Work Together</span>
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-secondary">
              <Sparkles size={16} />
              <span>Explore Services</span>
            </a>
          </div>
        </div>

        {/* Feature Highlights Grid Pill bar */}
        <div className="hero-pills">
          <div className="hero-pill-item">
            <span className="pill-label">Branding</span>
            <span className="pill-sub">Visual Identity</span>
          </div>
          <div className="hero-pill-divider" />
          <div className="hero-pill-item">
            <span className="pill-label">UI/UX Design</span>
            <span className="pill-sub">Digital Product</span>
          </div>
          <div className="hero-pill-divider" />
          <div className="hero-pill-item">
            <span className="pill-label">Web Design</span>
            <span className="pill-sub">Modern Web</span>
          </div>
        </div>
      </div>
    </section>
  );
}
