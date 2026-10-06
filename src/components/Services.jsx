import React from 'react';
import { Palette, Layout, Globe, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import './Services.css';

export default function Services() {
  const services = [
    {
      num: "01",
      icon: <Palette size={26} />,
      title: "Branding",
      description: "Helping brands establish distinctive identities with clarity and purpose.",
      deliverables: [
        "Visual Identity Systems",
        "Logo & Brandmark Design",
        "Brand Guidelines & Strategy",
        "Typography & Color Palette"
      ]
    },
    {
      num: "02",
      icon: <Layout size={26} />,
      title: "UI/UX Design",
      description: "Creating intuitive, thoughtful and visually engaging digital experiences.",
      deliverables: [
        "User Interface (UI) Design",
        "User Experience (UX) Research",
        "Wireframing & Prototyping",
        "Design Systems & Component Libraries"
      ]
    },
    {
      num: "03",
      icon: <Globe size={26} />,
      title: "Web Design",
      description: "Designing modern, responsive websites that communicate a brand effectively.",
      deliverables: [
        "Custom Web Design & Architecture",
        "Responsive & Mobile First Design",
        "Interactive Animations",
        "Performance & SEO Optimization"
      ]
    }
  ];

  return (
    <section id="services" className="section services-section">
      {/* Background glow accent */}
      <div className="services-glow" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <div className="section-header services-header-flex">
          <div>
            <span className="section-subtitle">What We Do</span>
            <h2 className="section-title">Our Core Capabilities</h2>
          </div>
          <p className="services-header-desc">
            We focus on three essential design disciplines to build cohesive, high-impact brand experiences from concept to execution.
          </p>
        </div>

        {/* 3-Column Services Card Layout */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-panel">
              <div className="service-card-top">
                <span className="service-num">{service.num}</span>
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
              </div>

              <div className="service-card-body">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-divider" />

                <div className="service-deliverables">
                  <span className="deliverables-heading">Deliverables:</span>
                  <ul className="deliverables-list">
                    {service.deliverables.map((item, itemIdx) => (
                      <li key={itemIdx} className="deliverable-item">
                        <CheckCircle2 size={14} className="deliverable-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="service-card-footer">
                <a href="#contact" className="service-link">
                  <span>Inquire for {service.title}</span>
                  <ArrowUpRight size={16} className="service-arrow" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
