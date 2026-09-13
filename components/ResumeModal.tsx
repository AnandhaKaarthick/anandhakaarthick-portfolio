"use client";

import React, { useEffect, useState } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";

export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const pdfUrl = "/AnandhaKaarthick_Resume.pdf";

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#resume") {
        setIsOpen(true);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    if (window.location.hash === "#resume") {
      setIsOpen(true);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    if (window.location.hash === "#resume") {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={closeModal} />

      <div className="relative z-10 w-full max-w-5xl h-[90vh] flex flex-col rounded-xl bg-surface-container-lowest border border-primary-container/40 shadow-[0_0_50px_rgba(57,255,136,0.2)] text-text-primary overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-surface-container-low/95 border-b border-surface-container-high shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-error inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container inline-block" />
            <div className="flex items-center gap-1.5 ml-2">
              <FileText className="w-3.5 h-3.5 text-primary-container" />
              <span className="font-mono text-xs uppercase tracking-wider text-primary-container font-semibold">
                AnandhaKaarthick_Resume.pdf
              </span>
            </div>
          </div>

          {/* Action Buttons: Download PDF, Open in Tab, Close */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={pdfUrl}
              download="AnandhaKaarthick_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-primary-container text-on-primary hover:bg-accent-fallback text-xs font-mono font-bold transition-all shadow-[0_0_12px_rgba(57,255,136,0.3)] hover:shadow-[0_0_18px_rgba(57,255,136,0.5)]"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-surface-container text-text-primary hover:text-primary-container text-xs font-mono transition-colors border border-glass-border hidden sm:inline-flex"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Tab</span>
            </a>

            <button
              onClick={closeModal}
              className="p-1.5 rounded text-text-muted hover:text-primary-container hover:bg-surface-container transition-colors ml-1"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 w-full h-full bg-[#181a1b] relative overflow-hidden flex flex-col items-center justify-center">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            className="w-full h-full border-0"
            title="Anandha Kaarthick Resume Preview"
          />
        </div>
      </div>
    </div>
  );
}
