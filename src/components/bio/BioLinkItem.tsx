"use client";

import { SocialLink } from "@/types";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

interface BioLinkItemProps {
  link: SocialLink;
  delay?: string;
}

function getIcon(iconName: string) {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  const Icon = icons[iconName] || LucideIcons.Link;
  return <Icon className="w-5 h-5" />;
}

export default function BioLinkItem({ link, delay }: BioLinkItemProps) {
  const isPhone = link.url.startsWith("tel:");
  const isMail = link.url.startsWith("mailto:");

  return (
    <a
      href={link.url}
      target={isPhone || isMail ? "_self" : "_blank"}
      rel={isPhone || isMail ? "" : "noopener noreferrer"}
      className={cn(
        "group flex items-center gap-3 p-4 rounded-2xl transition-all duration-300",
        "hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]",
        "animate-slide-up"
      )}
      style={{
        backgroundColor: `${link.color}20`,
        borderColor: `${link.color}40`,
        borderWidth: "1px",
        borderStyle: "solid",
        animationDelay: delay,
      }}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: link.color }}
      >
        <span className="text-white">{getIcon(link.icon)}</span>
      </div>

      {/* Label & Value */}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-white/60">{link.label}</div>
        <div className="text-sm font-semibold text-white truncate">
          {link.value}
        </div>
      </div>

      {/* Arrow */}
      <div className="text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </a>
  );
}
