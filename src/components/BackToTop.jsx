'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-8 right-8 z-50 p-3.5 rounded-full bg-zinc-900/90 text-amber-400 border border-zinc-700/80 shadow-2xl shadow-black/60 hover:bg-amber-400 hover:text-zinc-950 hover:border-amber-400 hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-md cursor-pointer group"
    >
      <ArrowUp size={20} className="transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}
