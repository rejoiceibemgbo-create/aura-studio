'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  Layers,
  Compass,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';

export default function Hero() {
  const [activeHeroTab, setActiveHeroTab] = useState('services');
  const [taglineIndex, setTaglineIndex] = useState(0);

  const taglines = [
    'Bringing Ideas to Life',
    'Clean Aesthetics & Strong Visuals',
    'Storytelling Through Design',
    'Elegance, Purpose & Simplicity',
  ];

  // JavaScript feature: Animated text cycler
  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [taglines.length]);

  const heroSections = [
    {
      id: 'services',
      label: 'Services',
      tag: 'Core Offerings',
      icon: Layers,
      headline: 'Branding, UI/UX Design & Web Design',
      description: 'We focus on clean aesthetics, strong visuals, and storytelling through design to help brands stand out with purpose and simplicity.',
      actionLabel: 'View Services Section',
      actionHref: '#services',
      highlightBadge: '3 Core Services',
      previewItems: [
        { title: 'Branding & Identity', category: 'Visual Language & Logo Systems', metric: 'Strategic' },
        { title: 'UI/UX & Web Design', category: 'Modern Interfaces & Clean Code', metric: 'Performant' },
      ],
    },
    {
      id: 'about',
      label: 'About',
      tag: 'About Us',
      icon: Compass,
      headline: 'A London-Based Creative Agency',
      description: 'Led by Creative Director Maya Daniels, helping brands express their identity through modern, minimalist design.',
      actionLabel: 'Explore About Section',
      actionHref: '#about',
      highlightBadge: 'London, UK HQ',
      previewItems: [
        { title: 'Maya Daniels', category: 'Creative Director', metric: 'London HQ' },
        { title: 'Design Philosophy', category: 'Purpose, Simplicity & Elegance', metric: '100% Focused' },
      ],
    },
    {
      id: 'contact',
      label: 'Contact',
      tag: 'Contact Us',
      icon: MessageSquare,
      headline: 'Direct Collaboration & Rapid Turnaround',
      description: 'Ready to bring your ideas to life? Reach out to Maya Daniels and the Aura Studio team. We respond within 24 hours.',
      actionLabel: 'Go to Contact Form',
      actionHref: '#contact',
      highlightBadge: 'Direct Inquiries',
      previewItems: [
        { title: 'hello@aurastudio.co', category: 'Email Inquiries', metric: 'Quick Reply' },
        { title: 'Simple Contact Form', category: 'Name, Email & Message', metric: 'No Backend' },
      ],
    },
  ];

  const activeSection = heroSections.find((s) => s.id === activeHeroTab) || heroSections[0];

  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-28">
      {/* Ambient background glow effects */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[700px] h-[400px] bg-amber-500/10 blur-[140px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 right-10 -z-10 w-[400px] h-[400px] bg-amber-600/5 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header Area */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300 shadow-inner mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>London, UK • Creative Design Agency</span>
          </div>

          {/* Hero Main Heading */}
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-4">
            Aura <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">Studio</span>
          </h1>

          {/* Animated Subheading / Tagline (JavaScript Feature) */}
          <div className="h-10 flex items-center justify-center mb-6">
            <p className="text-xl sm:text-2xl font-medium text-amber-200/90 tracking-wide transition-all duration-500">
              "{taglines[taglineIndex]}"
            </p>
          </div>

          {/* Paragraph Description strictly reflecting Maya Daniels' brief */}
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mb-10">
            A London-based creative agency that helps brands express their identity through modern, minimalist design. We specialize in{' '}
            <span className="text-zinc-200 font-medium">Branding</span>,{' '}
            <span className="text-zinc-200 font-medium">UI/UX Design</span>, and{' '}
            <span className="text-zinc-200 font-medium">Web Design</span>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-zinc-950 shadow-xl shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              <span>Get in Touch</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 active:scale-95 transition-all duration-200"
            >
              <Sparkles size={16} className="text-amber-400" />
              <span>Explore Services</span>
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HERO SECTION HUB: Direct Services, About & Contact Access in Hero         */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
          {/* Section Selector Tab Strip */}
          <div className="flex items-center justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-md shadow-2xl">
              {heroSections.map((sec) => {
                const Icon = sec.icon;
                const isActive = activeHeroTab === sec.id;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setActiveHeroTab(sec.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-amber-400 text-zinc-950 shadow-lg shadow-amber-400/25 scale-102'
                        : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{sec.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Hero Spotlight Card for Active Section */}
          <div className="mt-6 p-7 sm:p-9 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-md shadow-2xl hover:border-amber-400/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 px-2.5 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/20">
                    {activeSection.tag}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {activeSection.highlightBadge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
                  {activeSection.headline}
                </h3>
                <p className="text-sm text-zinc-400 mt-2 max-w-xl leading-relaxed">
                  {activeSection.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={activeSection.actionHref}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-zinc-950 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-amber-400/20"
                >
                  <span>{activeSection.actionLabel}</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* Quick Preview Highlight Items */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeSection.previewItems.map((item) => (
                <a
                  key={item.title}
                  href={activeSection.actionHref}
                  className="group p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 hover:border-amber-400/40 hover:bg-zinc-900/60 transition-all flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-200 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400">{item.category}</p>
                  </div>
                  <span className="text-xs font-mono font-medium text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                    {item.metric}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
