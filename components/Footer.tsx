"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-surface-container-lowest/90 border-t border-surface-container-high/60 backdrop-blur-md mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-text-muted">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span>© 2026 Anandha Kaarthick S</span>
          <span className="hidden sm:inline">·</span>
          <span>Built with Next.js &amp; Tailwind CSS</span>
          <span className="hidden sm:inline">·</span>
          <span className="text-on-surface-variant font-mono">
            Repurposed hardware enthusiast
          </span>
        </div>

        <a
          href="#"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-primary-container transition-colors duration-200"
        >
          <span className="font-mono text-xs uppercase tracking-wider">
            Back to top
          </span>
          <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </div>
    </footer>
  );
}
