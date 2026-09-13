"use client";

import React, { useState, useEffect } from "react";
import { labStatusData } from "@/data/labStatus";

interface LabStatusTileProps {
  className?: string;
}

export default function LabStatusTile({ className = "" }: LabStatusTileProps) {
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [showTelemetry, setShowTelemetry] = useState(false);
  const fullCommand = "$ uptime";

  useEffect(() => {
    // Type out the command character by character
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullCommand.length) {
        setDisplayedCommand(fullCommand.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowTelemetry(true);
        }, 300);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <aside
      className={`p-5 sm:p-6 rounded-xl bg-surface-container-lowest border border-glass-border shadow-glass flex flex-col justify-between h-full group hover:border-primary-container/40 transition-all duration-300 ${className}`}
    >
      <div className="space-y-3">
        {/* Terminal Window Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-surface-container-high/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-error inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container inline-block" />
          </div>

          <span className="font-mono text-xs text-text-muted">
            {labStatusData.nodeId}
          </span>

          <div className="flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
            </span>
          </div>
        </div>

        {/* Terminal Screen Surface */}
        <div className="p-3.5 rounded bg-surface-container-low/90 font-mono text-xs text-on-surface space-y-2 border border-surface-container-high/40 overflow-x-auto">
          {/* Active Command with Typing Effect */}
          <div className="text-primary-container font-semibold flex items-center">
            <span>{displayedCommand}</span>
            {!showTelemetry && (
              <span className="inline-block w-2 h-3.5 bg-primary-container ml-1 animate-cursor-blink" />
            )}
          </div>

          {/* Telemetry Output */}
          {showTelemetry && (
            <div className="space-y-1.5 animate-fadeIn">
              <div className="text-text-muted">{labStatusData.uptime}</div>
              <div className="text-on-surface-variant pt-1 font-semibold text-[11px] tracking-wider">
                {labStatusData.header}
              </div>

              {labStatusData.fields.map((field, idx) => (
                <div key={idx} className="flex flex-wrap items-baseline gap-1 text-[11.5px]">
                  <span className="text-text-muted">{field.label}</span>
                  {field.isHighlight ? (
                    <span className="text-primary-container font-semibold px-1 py-0.2 rounded bg-secondary-container/60">
                      {field.value}
                    </span>
                  ) : (
                    <span className="text-on-surface">{field.value}</span>
                  )}
                </div>
              ))}

              <div className="pt-2 text-primary-container flex items-center">
                <span>$ _</span>
                <span className="inline-block w-2 h-3.5 bg-primary-container ml-1 animate-cursor-blink" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Terminal Footer Note */}
      <div className="pt-4 border-t border-surface-container-high/40 mt-4">
        <p className="font-sans text-xs text-text-muted leading-normal">
          {labStatusData.footerNote}
        </p>
      </div>
    </aside>
  );
}
