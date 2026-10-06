import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="#hero" className="footer-brand">
              <div className="brand-logo-mark">
                <svg viewBox="0 0 32 32" width="20" height="20" aria-hidden="true">
                  <path
                    d="M16 4 L25 26 H21.2 L19.2 21 H12.8 L10.8 26 H7 L16 4 Z M16 11.5 L14 17.5 H18 L16 11.5 Z"
                    fill="#D4AF37"
                  />
                </svg>
              </div>
              <span className="footer-brand-name">Aura Studio</span>
            </a>
            <p className="footer-tagline">
              Bringing Ideas to Life through modern, minimalist design.
            </p>
          </div>

          <div className="footer-links-col">
            <div className="footer-nav">
              <span className="footer-label">Navigation</span>
              <a href="#about" className="footer-link">About</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>

            <div className="footer-contact-links">
              <span className="footer-label">Connect</span>
              <a href="mailto:hello@aurastudio.co" className="footer-link external-link">
                <span>hello@aurastudio.co</span>
                <ArrowUpRight size={14} />
              </a>
              <a href="http://www.aurastudio.co" target="_blank" rel="noopener noreferrer" className="footer-link external-link">
                <span>www.aurastudio.co</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} Aura Studio. All rights reserved.
          </p>
          <p className="footer-location">
            London, United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
