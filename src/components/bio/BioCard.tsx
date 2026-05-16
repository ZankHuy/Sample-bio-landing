"use client";

import { SocialLink } from "@/types";
import BioLinkItem from "./BioLinkItem";
import { cn, staggerDelay } from "@/lib/utils";

interface BioCardProps {
  name: string;
  title: string;
  avatar: string;
  links: SocialLink[];
}

export default function BioCard({ name, title, avatar, links }: BioCardProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glass-dark rounded-3xl p-8 shadow-2xl">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/20 shadow-lg animate-float">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement!.style.background =
                    "linear-gradient(135deg, #667eea, #764ba2)";
                  target.parentElement!.innerHTML =
                    '<div class="w-full h-full flex items-center justify-center text-white/80 text-4xl font-bold">' +
                    name.charAt(0).toUpperCase() +
                    "</div>";
                }}
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse-slow" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-white">{name}</h1>
          <p className="mt-1 text-sm text-white/60 text-center">{title}</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Links */}
        <div className="space-y-3">
          {links.map((link, index) => (
            <BioLinkItem
              key={link.id}
              link={link}
              delay={staggerDelay(index, 0.08)}
            />
          ))}
        </div>
      </div>

      {/* Navigation hint */}
      <div className="mt-6 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <a
          href="/landing"
          className="text-sm text-white/40 hover:text-white/70 transition-colors"
        >
          Xem Landing Page
        </a>
      </div>
    </div>
  );
}
