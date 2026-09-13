"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import LabStatusTile from "./LabStatusTile";

export default function BentoGrid() {
  const busTracker = projectsData.find((p) => p.id === "bus-tracker") || projectsData[0];
  const msmeMate = projectsData.find((p) => p.id === "msme-mate") || projectsData[1];
  const phoneLinux = projectsData.find((p) => p.id === "phone-linux-server") || projectsData[2];
  const sihDigiland = projectsData.find((p) => p.id === "sih-digiland") || projectsData[3];
  const vault = projectsData.find((p) => p.id === "vault") || projectsData[4];
  const coffeeShop = projectsData.find((p) => p.id === "coffee-shop") || projectsData[5];

  return (
    <section className="space-y-6 scroll-mt-24" id="projects">
      {/* Section Divider */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-primary-container uppercase tracking-wider font-semibold">
          02 // My Builds
        </span>
        <div className="h-px flex-1 bg-surface-container-high" />
      </div>

      {/* Bento Grid 12-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 items-stretch">
        {/* Row 1: Flagship (8 cols) + Lab Status (4 cols) = 12 cols */}
        <div className="col-span-1 md:col-span-6 lg:col-span-8 flex">
          <ProjectCard project={busTracker} className="w-full" />
        </div>
        <div className="col-span-1 md:col-span-6 lg:col-span-4 flex">
          <LabStatusTile className="w-full" />
        </div>

        {/* Row 2: MSME MATE (6 cols) + Phone -> Linux Server (6 cols) = 12 cols */}
        <div className="col-span-1 md:col-span-3 lg:col-span-6 flex">
          <ProjectCard project={msmeMate} className="w-full" />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-6 flex">
          <ProjectCard project={phoneLinux} className="w-full" />
        </div>

        {/* Row 3: SIH-DigiLand (4 cols) + Vault (4 cols) + Coffee Shop (4 cols) = 12 cols */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 flex">
          <ProjectCard project={sihDigiland} className="w-full" />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-4 flex">
          <ProjectCard project={vault} className="w-full" />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-4 flex">
          <ProjectCard project={coffeeShop} className="w-full" />
        </div>
      </div>
    </section>
  );
}
