import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="mt-auto border-t border-zinc-900 bg-zinc-950/90 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <a href="#hero" className="flex items-center gap-3 group focus:outline-none mb-4">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-4 h-4" aria-hidden="true">
                  <path
                    d="M16 4 L25 26 H21.2 L19.2 21 H12.8 L10.8 26 H7 L16 4 Z M16 11.5 L14 17.5 H18 L16 11.5 Z"
                    fill="#D4AF37"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-100 group-hover:text-amber-300 transition-colors">
                Aura Studio
              </span>
            </a>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed mb-4">
              A London-based creative agency helping brands express their identity through modern, minimalist design.
            </p>
            <div className="text-xs font-mono text-zinc-400 space-y-1">
              <div>Maya Daniels • Creative Director</div>
              <div>London, United Kingdom</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-amber-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@aurastudio.co"
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-amber-300 transition-colors group"
                >
                  <span>hello@aurastudio.co</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.aurastudio.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-amber-300 transition-colors group"
                >
                  <span>www.aurastudio.co</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {CURRENT_YEAR} Aura Studio. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Bringing Ideas to Life with</span>
            <span className="text-amber-400 font-medium">Purpose, Simplicity & Elegance</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
