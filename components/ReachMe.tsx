"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Mail, Github, Linkedin, ArrowUpRight, Code2, Terminal } from "lucide-react";

export default function ReachMe() {
  const commLinks = [
    {
      title: "Email Terminal",
      value: profileData.contacts.email,
      href: `mailto:${profileData.contacts.email}`,
      icon: <Mail className="w-5 h-5" />,
      external: false,
    },
    {
      title: "Version Control",
      value: "github.com/AnandhaKaarthick",
      href: profileData.contacts.github,
      icon: <Github className="w-5 h-5" />,
      external: true,
    },
    {
      title: "Network Node",
      value: "in/anandha-kaarthick",
      href: profileData.contacts.linkedin,
      icon: <Linkedin className="w-5 h-5" />,
      external: true,
    },
  ];

  const codingLinks = [
    {
      title: "LeetCode Engine",
      value: "leetcode.com/u/codecrafter1847",
      href: profileData.contacts.leetcode,
      icon: <Code2 className="w-5 h-5" />,
      external: true,
      tag: "DSA & Algorithms",
    },
    {
      title: "HackerRank Terminal",
      value: "hackerrank.com/anandhakaarthic1",
      href: profileData.contacts.hackerrank,
      icon: <Terminal className="w-5 h-5" />,
      external: true,
      tag: "Problem Solving",
    },
  ];

  return (
    <section className="space-y-6 scroll-mt-24" id="reach-me">
      {/* Section Divider */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-primary-container uppercase tracking-wider font-semibold">
          05 // Direct Uplink &amp; Code Profiles
        </span>
        <div className="h-px flex-1 bg-surface-container-high" />
      </div>

      {/* Main Glass Panel */}
      <div className="p-6 sm:p-8 rounded-xl glass-panel space-y-6">
        <div className="max-w-xl space-y-2">
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
            Reach me &amp; Profiles
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-muted italic">
            “{profileData.contacts.quote}”
          </p>
        </div>

        {/* Primary Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {commLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="p-4 sm:p-5 rounded-lg bg-surface-container-low hover:bg-surface-container border border-glass-border hover:border-primary-container/40 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,136,0.15)] transition-all duration-200 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded bg-surface-container text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <span className="block font-sans text-xs text-text-muted uppercase tracking-wider">
                    {item.title}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-text-primary group-hover:text-primary-container truncate block transition-colors mt-0.5">
                    {item.value}
                  </span>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary-container transition-colors shrink-0 ml-2" />
            </a>
          ))}
        </div>

        {/* Competitive Programming & Algorithm Engines */}
        <div className="pt-3 border-t border-surface-container-high/40 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
              Algorithmic Engines &amp; Coding Benchmarks
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {codingLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="p-4 sm:p-5 rounded-lg bg-surface-container-low hover:bg-surface-container border border-glass-border hover:border-primary-container/40 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,136,0.15)] transition-all duration-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded bg-surface-container text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-xs text-text-muted uppercase tracking-wider">
                        {item.title}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-secondary-container/80 text-primary-container font-mono">
                        {item.tag}
                      </span>
                    </div>
                    <span className="font-mono text-xs sm:text-sm text-text-primary group-hover:text-primary-container truncate block transition-colors mt-0.5">
                      {item.value}
                    </span>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary-container transition-colors shrink-0 ml-2" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
