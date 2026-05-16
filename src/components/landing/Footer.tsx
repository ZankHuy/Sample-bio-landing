"use client";

import { LeadFormConfig } from "@/types";

interface FooterConfig {
  copyright: string;
  contact_info: string;
}

interface FooterProps {
  footer: FooterConfig;
}

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">{footer.copyright}</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">{footer.contact_info}</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-600 text-xs">
            Powered by Bio Link Template
          </p>
        </div>
      </div>
    </footer>
  );
}
