"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { ArrowDown, FileText, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="flex flex-col items-start gap-6 max-w-3xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container/70 border border-primary-container/20 shadow-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          <span className="font-mono text-xs text-primary-container tracking-wider uppercase">
            {profileData.badge}
          </span>
        </div>

        {/* Heading & Subhead */}
        <div className="space-y-2">
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary">
            {profileData.name}
          </h1>
          <p className="font-sans text-xl sm:text-2xl text-text-muted font-normal">
            {profileData.title}
          </p>
        </div>

        {/* Core Pitch Quote Box */}
        <div className="glass-panel p-6 rounded-xl w-full border border-glass-border">
          <div className="flex items-start gap-3">
            <div className="p-1 rounded bg-secondary-container text-primary-container mt-0.5">
              <Terminal className="w-5 h-5" />
            </div>
            <p className="text-base sm:text-lg text-on-surface italic font-medium leading-relaxed">
              “{profileData.pitch}”
            </p>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-primary-container text-on-primary hover:bg-accent-fallback shadow-[0_0_20px_rgba(57,255,136,0.35)] hover:shadow-[0_0_28px_rgba(57,255,136,0.5)] transition-all duration-200"
          >
            <span>See what I&apos;ve built</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          <a
            href="#resume"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-text-primary bg-glass-fill hover:text-primary-container hover:bg-surface-container border border-glass-border hover:border-primary-container/40 shadow-glass transition-all duration-200"
            title="Preview Resume"
          >
            <FileText className="w-4 h-4 text-text-muted" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
