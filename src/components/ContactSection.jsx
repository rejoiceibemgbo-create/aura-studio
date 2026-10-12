'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Globe } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Client requested: "no backend needed for now"
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-zinc-900 bg-zinc-950/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[700px] h-[400px] bg-amber-500/10 blur-[160px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400 mb-4">
            <MessageSquare size={13} />
            <span>CONTACT US</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Let's discuss your next{' project.'}
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Ready to bring your ideas to life? Send us a message or reach out directly to Maya Daniels and the team.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Simple Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm space-y-6">
              <h3 className="text-xl font-bold text-zinc-100">
                Aura Studio London
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We work with founders and brands worldwide to craft identities, digital interfaces, and modern websites with clarity and purpose.
              </p>

              <div className="space-y-4 pt-4 border-t border-zinc-800/80">
                <a
                  href="mailto:hello@aurastudio.co"
                  className="flex items-center gap-3.5 text-zinc-300 hover:text-amber-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block">Email Us</span>
                    <span className="text-sm font-semibold">hello@aurastudio.co</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 text-zinc-300">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-amber-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block">Location</span>
                    <span className="text-sm font-semibold">London, United Kingdom</span>
                  </div>
                </div>

                <a
                  href="https://www.aurastudio.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-zinc-300 hover:text-amber-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Globe size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block">Website</span>
                    <span className="text-sm font-semibold">www.aurastudio.co</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Simple Contact Us Form (Name, Email, Message) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/70 border border-zinc-800/90 shadow-2xl backdrop-blur-md">
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-zinc-300 max-w-md text-sm leading-relaxed mb-8">
                    Thank you, <span className="text-amber-300 font-semibold">{formData.name}</span>. Maya Daniels and the Aura Studio team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/50 text-sm transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/50 text-sm transition-all"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, timeline, or any questions..."
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/50 text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 text-zinc-950 shadow-xl shadow-amber-500/20 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
