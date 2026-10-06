import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-brand" onClick={closeMenu} aria-label="Aura Studio Home">
          <div className="brand-logo-mark">
            <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
              <defs>
                <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E2D1B2" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
              </defs>
              <path
                d="M16 4 L25 26 H21.2 L19.2 21 H12.8 L10.8 26 H7 L16 4 Z M16 11.5 L14 17.5 H18 L16 11.5 Z"
                fill="url(#navLogoGrad)"
              />
            </svg>
          </div>
          <span className="brand-text">Aura Studio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-nav" aria-label="Main Navigation">
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link nav-cta">Get in Touch</a>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={closeMenu}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
          <nav className="mobile-nav-list" aria-label="Mobile Navigation">
            <a href="#about" className="mobile-nav-link" onClick={closeMenu}>
              <span className="mobile-link-num">01</span>
              <span>About</span>
            </a>
            <a href="#services" className="mobile-nav-link" onClick={closeMenu}>
              <span className="mobile-link-num">02</span>
              <span>Services</span>
            </a>
            <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>
              <span className="mobile-link-num">03</span>
              <span>Contact</span>
            </a>
          </nav>

          <div className="mobile-menu-footer">
            <p className="mobile-location">London, United Kingdom</p>
            <a href="mailto:hello@aurastudio.co" className="mobile-email">hello@aurastudio.co</a>
          </div>
        </div>
      </div>
    </header>
  );
}
