"use client";

import React from "react";
import { Project } from "@/data/projects";
import {
  ExternalLink,
  Github,
  Award,
  BookOpen,
  Eye,
  Terminal,
  Cpu,
  Shield,
  Coffee,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = "" }: ProjectCardProps) {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "bus-tracker":
        return <Award className="w-4 h-4 text-primary-container" />;
      case "phone-linux-server":
        return <Cpu className="w-4 h-4 text-text-muted" />;
      case "vault":
        return <Shield className="w-4 h-4 text-text-muted" />;
      case "coffee-shop":
        return <Coffee className="w-4 h-4 text-text-muted" />;
      default:
        return <Terminal className="w-4 h-4 text-text-muted" />;
    }
  };

  if (project.isFlagship) {
    return (
      <article
        className={`p-6 sm:p-8 rounded-xl glass-panel glass-panel-hover flex flex-col justify-between h-full group ${className}`}
      >
        <div className="space-y-4">
          {/* Top badges */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/90 text-primary-container font-mono text-xs font-medium border border-primary-container/20">
              <Award className="w-3.5 h-3.5" />
              {project.badge}
            </span>
            <span className="font-mono text-xs text-text-muted">
              {project.codeId}
            </span>
          </div>

          {/* Title & Problem */}
          <div>
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-text-primary group-hover:text-primary-container transition-colors duration-200">
              {project.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-primary-container font-medium mt-1">
              {project.problem}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-on-surface leading-relaxed">
            {project.description}
          </p>

          {/* Routing visual snippet */}
          {project.routingSnippet && (
            <div className="p-3 rounded-lg bg-surface-container-lowest/90 border border-surface-container-high/60 flex items-center justify-between font-mono text-xs text-text-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-ping" />
                <span className="text-on-surface">
                  {project.routingSnippet.route}
                </span>
              </div>
              <span className="text-primary-container font-medium hidden sm:inline">
                {project.routingSnippet.delta}
              </span>
            </div>
          )}

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2.5 py-1 rounded bg-surface-container text-primary-container border border-primary-container/15"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-5 pt-6 border-t border-surface-container-high/40 mt-6">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-primary hover:text-primary-container text-sm font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              className="inline-flex items-center gap-1.5 text-text-primary hover:text-primary-container text-sm font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Site</span>
            </a>
          )}
        </div>
      </article>
    );
  }

  return (
    <article
      className={`p-6 rounded-xl glass-panel glass-panel-hover flex flex-col justify-between h-full group ${className}`}
    >
      <div className="space-y-3">
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-primary-container bg-surface-container px-2.5 py-0.5 rounded border border-primary-container/15">
            {project.badge || project.codeId}
          </span>
          {getProjectIcon(project.id)}
        </div>

        {/* Title */}
        <h3 className="font-sans text-xl font-bold text-text-primary group-hover:text-primary-container transition-colors">
          {project.title}
        </h3>

        {/* Problem */}
        <p className="font-sans text-xs text-primary-container font-medium">
          {project.problem}
        </p>

        {/* Description */}
        <p className="text-sm text-on-surface leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container text-primary-container border border-primary-container/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="pt-5 border-t border-surface-container-high/40 mt-5">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-text-primary hover:text-primary-container text-sm font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        )}
        {project.links.writeup && (
          <a
            href={project.links.writeup}
            className="inline-flex items-center gap-1.5 text-text-primary hover:text-primary-container text-xs font-medium transition-colors ml-4"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Writeup</span>
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            className="inline-flex items-center gap-1.5 text-text-primary hover:text-primary-container text-sm font-medium transition-colors ml-4"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Site</span>
          </a>
        )}
      </div>
    </article>
  );
}
