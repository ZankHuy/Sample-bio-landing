"use client";

import * as LucideIcons from "lucide-react";
import { Service } from "@/types";

interface ServiceSectionProps {
  services: Service[];
}

function getIcon(iconName: string) {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  const Icon = icons[iconName] || LucideIcons.Star;
  return <Icon className="w-6 h-6" />;
}

export default function ServiceSection({ services }: ServiceSectionProps) {
  if (!services || services.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Giải pháp tối ưu cho nhu cầu của bạn
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.icon)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              {service.features && service.features.length > 0 && (
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-purple-500 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
