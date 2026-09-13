"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { GraduationCap, Award, MapPin, Server, Cpu } from "lucide-react";

export default function About() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "school":
        return <GraduationCap className="w-4 h-4 text-primary-container" />;
      case "grade":
        return <Award className="w-4 h-4 text-primary-container" />;
      case "location_on":
        return <MapPin className="w-4 h-4 text-primary-container" />;
      case "dns":
        return <Server className="w-4 h-4 text-primary-container" />;
      default:
        return <Cpu className="w-4 h-4 text-primary-container" />;
    }
  };

  return (
    <section className="space-y-6 scroll-mt-24" id="about">
      {/* Section Divider */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-primary-container uppercase tracking-wider font-semibold">
          01 // Context About me
        </span>
        <div className="h-px flex-1 bg-surface-container-high" />
      </div>

      {/* Grid: 7 cols Story + 5 cols Sys Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Story */}
        <div className="lg:col-span-7 flex flex-col justify-center p-6 sm:p-8 rounded-xl glass-panel space-y-4">
          <h2 className="font-sans text-2xl sm:text-3xl text-text-primary tracking-tight font-semibold">
            {profileData.aboutHeading}
          </h2>
          {profileData.aboutStory.map((p, idx) => (
            <p
              key={idx}
              className={`text-sm sm:text-base leading-relaxed ${
                idx === 0 ? "text-on-surface" : "text-on-surface-variant"
              }`}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Right: Quick Specs Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-surface-container-low border border-glass-border shadow-glass space-y-6">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-surface-container-high/60">
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                sys_info.stat
              </span>
              <Cpu className="w-4 h-4 text-text-muted" />
            </div>

            <ul className="mt-4 space-y-4 text-sm text-on-surface">
              {profileData.specs.map((spec) => (
                <li key={spec.id} className="flex items-start gap-3">
                  <div className="p-1 rounded bg-surface-container mt-0.5">
                    {getIcon(spec.icon)}
                  </div>
                  <div>
                    <span className="block text-text-muted font-sans text-xs uppercase tracking-wide">
                      {spec.label}
                    </span>
                    <span className="text-text-primary font-medium text-sm">
                      {spec.value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* CGPA Meter */}
          <div className="pt-2 border-t border-surface-container-high/40 space-y-1.5">
            <div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-primary-container h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(57,255,136,0.6)]"
                style={{ width: "78.2%" }}
              />
            </div>
            <div className="flex justify-between items-center text-[11px] font-mono text-text-muted">
              <span>R2023_EVAL</span>
              <span className="text-primary-container font-semibold">
                7.82 / 10.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
