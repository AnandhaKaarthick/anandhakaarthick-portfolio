"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { Menu, X, FileText, Terminal } from "lucide-react";

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "projects", "skills", "certifications", "reach-me"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "reach-me", label: "Reach me" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#101412]/85 backdrop-blur-xl border-b border-glass-border shadow-[0_8px_28px_rgba(0,0,0,0.6)]"
          : "bg-glass-fill backdrop-blur-lg border-b border-glass-border/60"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brandmark & Status */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-105"
            aria-label="Back to top"
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-primary-container/30 shadow-[0_0_12px_rgba(57,255,136,0.2)]">
              <Image
                src="/ak-logo.svg"
                alt="AK Monogram Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex items-center gap-1.5 pl-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
              </span>
              <span className="font-mono text-[11px] text-primary-container tracking-wider uppercase hidden sm:inline">
                {profileData.ttyStatus}
              </span>
            </div>
          </a>

          <span className="font-sans text-base text-text-primary tracking-tight font-semibold hidden md:inline ml-1 border-l border-surface-container-high pl-3">
            {profileData.name}
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-lg bg-glass-fill border border-glass-border">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3.5 py-1.5 rounded text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-secondary-container text-primary-container font-semibold shadow-sm"
                    : "text-text-muted hover:text-primary-container hover:bg-glass-fill"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#resume"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-on-primary bg-primary-container hover:bg-accent-fallback rounded-md shadow-[0_0_16px_rgba(57,255,136,0.3)] hover:shadow-[0_0_22px_rgba(57,255,136,0.5)] transition-all duration-200"
            title="Preview Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-text-muted hover:text-primary-container hover:bg-surface-container border border-glass-border transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 border-t border-glass-border bg-[#101412]/95 backdrop-blur-xl space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? "bg-secondary-container text-primary-container"
                  : "text-text-muted hover:text-primary-container hover:bg-glass-fill"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
