'use client';

import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const values = [
    { title: 'Purpose', desc: 'Every design decision is rooted in clear strategy and meaningful brand resonance.' },
    { title: 'Simplicity', desc: 'Removing the unnecessary so that the essential speaks with maximum power.' },
    { title: 'Elegance', desc: 'A relentless commitment to visual refinement, proportion, and quiet confidence.' },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-zinc-900 bg-zinc-950/70 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-[500px] h-[500px] bg-amber-500/5 blur-[160px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400 mb-4">
              <Sparkles size={13} />
              <span>ABOUT US</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Expressing identity through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                modern, minimalist design.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              A London-based creative studio dedicated to clean aesthetics, strong visuals, and storytelling through design.
            </p>
          </div>

          {/* Core 2–3 Sentence About Copy as Specified in Client Brief */}
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm shadow-2xl relative">
            <p className="text-xl sm:text-2xl text-zinc-200 leading-relaxed font-normal mb-6">
              Aura Studio is a London-based creative agency that helps brands express their identity through modern, minimalist design. We specialize in <span className="text-amber-300 font-semibold">Branding</span>, <span className="text-amber-300 font-semibold">UI/UX Design</span>, and <span className="text-amber-300 font-semibold">Web Design</span>, focusing on clean aesthetics, strong visuals, and storytelling through design.
            </p>

            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
              Our goal is to make every brand we touch stand out with purpose, simplicity, and elegance.
            </p>

            {/* Creative Director Attribution */}
            <div className="mt-10 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-zinc-950 font-bold text-base shadow-md">
                  MD
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-100">Maya Daniels</h3>
                  <p className="text-xs font-mono text-amber-400/90">Creative Director — Aura Studio</p>
                </div>
              </div>

              <div className="text-xs font-mono text-zinc-400">
                London, United Kingdom • Est. London
              </div>
            </div>
          </div>

          {/* 3 Core Tenets */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/70 hover:border-amber-400/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-amber-400" />
                  <h4 className="text-base font-bold text-zinc-100">{v.title}</h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
