import React from 'react';
import { Compass, Feather, Eye, Sparkles } from 'lucide-react';
import './About.css';

export default function About() {
  const pillars = [
    {
      icon: <Feather size={22} />,
      title: "Clean Aesthetics",
      desc: "Removing unnecessary noise to emphasize what truly matters to your audience."
    },
    {
      icon: <Eye size={22} />,
      title: "Strong Visuals",
      desc: "Creating bold, distinctive visual systems that demand attention and leave lasting impressions."
    },
    {
      icon: <Compass size={22} />,
      title: "Storytelling",
      desc: "Weaving authentic brand narratives into every digital interaction and touchpoint."
    },
    {
      icon: <Sparkles size={22} />,
      title: "Simplicity & Elegance",
      desc: "Designing timeless digital experiences with purpose, elegance, and clarity."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Who We Are</span>
          <h2 className="section-title">Crafting Purposeful Digital Experiences</h2>
        </div>

        {/* Main Editorial Text Grid */}
        <div className="about-grid">
          <div className="about-main-card glass-panel">
            <div className="about-badge">
              <span className="badge-dot"></span>
              <span>Our Core Philosophy</span>
            </div>
            <p className="about-lead">
              Aura Studio is a London-based creative agency that helps brands express their identity through modern, minimalist design.
            </p>
            <p className="about-text">
              We specialize in <strong>Branding</strong>, <strong>UI/UX Design</strong>, and <strong>Web Design</strong>, focusing on clean aesthetics, strong visuals, and storytelling through design. Our goal is to make every brand we touch stand out with purpose, simplicity, and elegance.
            </p>

            <div className="about-stats-row">
              <div className="stat-item">
                <span className="stat-number">London</span>
                <span className="stat-label">Based Studio</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Tailored Design</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">3 Core</span>
                <span className="stat-label">Design Services</span>
              </div>
            </div>
          </div>

          {/* Philosophy Pillars Grid */}
          <div className="pillars-grid">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon-box">
                  {pillar.icon}
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
