"use client";

import React from "react";
import { certificationsData } from "@/data/certifications";
import { ExternalLink, Terminal, CheckCircle2 } from "lucide-react";

export default function Certifications() {
  return (
    <section className="space-y-6 scroll-mt-24" id="certifications">
      {/* Section Divider */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-primary-container uppercase tracking-wider font-semibold">
          04 // Verified Credentials &amp; Certifications
        </span>
        <div className="h-px flex-1 bg-surface-container-high" />
      </div>

      {/* Main Terminal Window */}
      <div className="rounded-xl bg-surface-container-lowest border border-glass-border shadow-glass overflow-hidden group hover:border-primary-container/40 transition-all duration-300">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-surface-container-low/80 border-b border-surface-container-high/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-error inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container inline-block" />
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
            <Terminal className="w-3.5 h-3.5 text-primary-container" />
            <span>certs://credentials-verified</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
            </span>
            <span className="font-mono text-[11px] text-primary-container uppercase hidden sm:inline">
              audit:ok
            </span>
          </div>
        </div>

        {/* Terminal Workspace Content */}
        <div className="p-5 sm:p-7 font-mono text-xs space-y-6">
          {/* CLI Invocation line */}
          <div className="space-y-1">
            <div className="text-primary-container font-semibold flex items-center gap-2 text-sm">
              <span>$</span>
              <span className="text-text-primary">certmgr --list --verified</span>
            </div>
            <p className="text-text-muted text-[11.5px]">
              Found {certificationsData.length} cryptographically registered credentials in local keystore:
            </p>
          </div>

          {/* Credentials Grid: 2 columns on desktop, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificationsData.map((cert, index) => (
              <div
                key={cert.id}
                className="p-4 sm:p-5 rounded-lg bg-surface-container-low/90 border border-surface-container-high/60 hover:border-primary-container/40 hover:bg-surface-container transition-all duration-200 flex flex-col justify-between space-y-3 group/card"
              >
                <div className="space-y-2">
                  {/* Top Bar: Index/Code + Status Pill */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-text-muted font-bold tracking-wider">
                      [{String(index + 1).padStart(2, "0")}] {cert.code}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-container/80 text-primary-container font-mono text-[10px] font-semibold border border-primary-container/20">
                      <CheckCircle2 className="w-3 h-3" />
                      {cert.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-sans text-base font-bold text-text-primary group-hover/card:text-primary-container transition-colors">
                    {cert.title}
                  </h4>

                  {/* Meta: Issuer, Date, Credential ID */}
                  <div className="space-y-1 text-xs text-text-muted">
                    <div className="flex items-center gap-1.5">
                      <span className="text-text-muted">issuer:</span>
                      <span className="text-text-primary font-medium">{cert.issuer}</span>
                    </div>

                    {cert.issueDate && (
                      <div className="flex items-center gap-1.5">
                        <span className="text-text-muted">issued:</span>
                        <span className="text-text-primary">{cert.issueDate}</span>
                      </div>
                    )}

                    {cert.credentialId && (
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="text-text-muted">cred_id:</span>
                        <span className="text-on-surface-variant font-mono truncate">
                          {cert.credentialId}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10.5px] px-2 py-0.5 rounded bg-surface-container text-primary-container/90 border border-primary-container/15 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Show Credential Button */}
                {cert.verifyUrl && (
                  <div className="pt-2 border-t border-surface-container-high/40 mt-1">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-primary-container hover:text-accent-fallback hover:underline transition-colors"
                    >
                      <span>Show credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Terminal Command Status Footer */}
          <div className="pt-2 space-y-1 text-xs border-t border-surface-container-high/40">
            <div className="text-text-muted">
              $ certmgr --status: <span className="text-primary-container font-semibold">100% verified</span> (all credential signatures active)
            </div>
            <div className="text-primary-container flex items-center pt-1 font-semibold">
              <span>$ _</span>
              <span className="inline-block w-2 h-3.5 bg-primary-container ml-1 animate-cursor-blink" />
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="px-5 py-3.5 bg-surface-container-low/60 border-t border-surface-container-high/40 text-xs font-sans text-text-muted">
          Cryptographically verified licenses and credentials across Python, Database Systems (NoSQL/MongoDB), Machine Learning, and Full-Stack Engineering.
        </div>
      </div>
    </section>
  );
}
