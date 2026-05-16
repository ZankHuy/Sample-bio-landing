"use client";

import * as LucideIcons from "lucide-react";
import { Hero } from "@/types";

interface HeroSectionProps {
  hero: Hero;
  brandName: string;
  tagline: string;
}

export default function HeroSection({ hero, brandName, tagline }: HeroSectionProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Brand */}
        <p className="text-purple-300 text-sm font-medium tracking-widest uppercase mb-6 animate-fade-in">
          {brandName}
        </p>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight animate-slide-up">
          {hero.headline}
        </h1>

        {/* Tagline */}
        {tagline && (
          <p className="text-purple-300 text-lg font-medium mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {tagline}
          </p>
        )}

        {/* Subheadline */}
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.3s" }}>
          {hero.subheadline}
        </p>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection(hero.cta_scroll_to)}
          className="animate-slide-up inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-bold text-lg px-10 py-4 rounded-full shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-purple-500/50"
          style={{ animationDelay: "0.4s" }}
        >
          {hero.cta_text}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="arrow-down" />
          </svg>
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
