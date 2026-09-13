"use client";

import React from "react";
import { skillsData } from "@/data/skills";
import { Code2, Globe, Database, Network } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-primary-container" />;
      case 1:
        return <Globe className="w-5 h-5 text-primary-container" />;
      case 2:
        return <Database className="w-5 h-5 text-primary-container" />;
      case 3:
        return <Network className="w-5 h-5 text-primary-container" />;
      default:
        return <Code2 className="w-5 h-5 text-primary-container" />;
    }
  };

  return (
    <section className="space-y-6 scroll-mt-24" id="skills">
      {/* Section Divider */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-primary-container uppercase tracking-wider font-semibold">
          03 // Technical Arsenal
        </span>
        <div className="h-px flex-1 bg-surface-container-high" />
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((category, idx) => (
          <div
            key={category.title}
            className="p-6 rounded-xl glass-panel glass-panel-hover flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded bg-surface-container border border-primary-container/15">
                  {getCategoryIcon(idx)}
                </div>
                <h3 className="font-sans text-sm font-semibold text-text-primary uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-surface-container text-primary-container border border-primary-container/15 hover:border-primary-container/40 hover:bg-secondary-container/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
