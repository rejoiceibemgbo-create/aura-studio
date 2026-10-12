'use client';

import React from 'react';
import { Palette, Layers, Code2, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 'branding',
      icon: Palette,
      title: 'Branding',
      subtitle: 'Distinctive Visual Identity',
      desc: 'We craft comprehensive brand systems, bespoke typography, and unforgettable visual identities that help brands express who they are with confidence and elegance.',
      deliverables: [
        'Brand Strategy & Positioning',
        'Logo & Visual Identity Systems',
        'Typography & Color Guidelines',
        'Editorial & Digital Assets',
      ],
      tag: 'Identity & Strategy',
    },
    {
      id: 'ui-ux',
      icon: Layers,
      title: 'UI/UX Design',
      subtitle: 'Intuitive Digital Experiences',
      desc: 'Human-centered interfaces designed with ruthless precision. We combine clean aesthetics with seamless user journeys that make complex products effortless to use.',
      deliverables: [
        'User Research & Information Architecture',
        'Wireframing & Interactive Prototyping',
        'Comprehensive Design Systems',
        'Mobile & Web Application Design',
      ],
      tag: 'Product & Interface',
    },
    {
      id: 'web-design',
      icon: Code2,
      title: 'Web Design',
      subtitle: 'Modern & Performant Web Experiences',
      desc: 'High-performance, fluid responsive websites built for scale. We bring static designs to life with smooth micro-interactions, clean code, and fast load times.',
      deliverables: [
        'Custom Responsive Website Design',
        'Modern Front-End Development',
        'Interactive Animations & Micro-Interactions',
        'SEO & Performance Optimization',
      ],
      tag: 'Engineering & Craft',
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 border-t border-zinc-900 bg-zinc-950 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 -z-10 w-[550px] h-[550px] bg-amber-500/5 blur-[160px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400 mb-4">
            <Sparkles size={13} />
            <span>WHAT WE DO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Services tailored for brands that value{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              purpose & elegance.
            </span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            We specialize in <span className="text-zinc-200 font-medium">Branding</span>, <span className="text-zinc-200 font-medium">UI/UX Design</span>, and <span className="text-zinc-200 font-medium">Web Design</span> — focusing on clean aesthetics, strong visuals, and storytelling through design.
          </p>
        </div>

        {/* 3 Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group p-8 sm:p-9 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-400/50 hover:bg-zinc-900/70 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-amber-500/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-amber-400 group-hover:scale-105 group-hover:border-amber-400/50 transition-all">
                      <Icon size={26} />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400/90 px-3 py-1 rounded-full bg-zinc-800/60 border border-zinc-800">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-amber-300 transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-800/80">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-3 block">
                    Core Deliverables
                  </span>
                  <ul className="space-y-2 mb-6">
                    {item.deliverables.map((del) => (
                      <li key={del} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle size={14} className="text-amber-400 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 group-hover:text-amber-300 transition-colors"
                  >
                    <span>Inquire for {item.title}</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
