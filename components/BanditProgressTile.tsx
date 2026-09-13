"use client";

import React from "react";
import { labStatusData } from "@/data/labStatus";
import { Terminal } from "lucide-react";

interface BanditProgressTileProps {
  className?: string;
}

export default function BanditProgressTile({ className = "" }: BanditProgressTileProps) {
  const { bandit } = labStatusData;

  return (
    <article
      className={`p-5 sm:p-6 rounded-xl bg-surface-container-lowest border border-glass-border shadow-glass flex flex-col md:flex-row items-start md:items-center justify-between gap-5 group hover:border-primary-container/40 transition-all duration-300 ${className}`}
    >
      <div className="flex items-start sm:items-center gap-4">
        <div className="p-3 rounded-lg bg-surface-container text-primary-container flex items-center justify-center border border-primary-container/20 shrink-0">
          <Terminal className="w-6 h-6" />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-xs text-primary-container uppercase font-bold tracking-wider">
              {bandit.title}
            </span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-secondary-container text-primary-container font-semibold border border-primary-container/20">
              Level {bandit.currentLevel}
            </span>
          </div>
          <p className="font-sans text-xs sm:text-sm text-on-surface mt-1 max-w-2xl leading-relaxed">
            {bandit.description}
          </p>
        </div>
      </div>

      {/* Progress Visualization */}
      <div className="flex items-center gap-3 min-w-[220px] w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-surface-container-high/40 shrink-0">
        <div className="flex-1 bg-surface-container rounded-full h-2 overflow-hidden border border-surface-container-high/40">
          <div
            className="bg-primary-container h-full rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(57,255,136,0.5)]"
            style={{ width: `${bandit.percentage}%` }}
          />
        </div>
        <span className="font-mono text-xs text-text-muted whitespace-nowrap font-medium">
          {bandit.currentLevel}/{bandit.totalLevels} LVLS
        </span>
      </div>
    </article>
  );
}
