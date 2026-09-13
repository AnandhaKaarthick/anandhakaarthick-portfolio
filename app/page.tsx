import React from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BentoGrid from "@/components/BentoGrid";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import ReachMe from "@/components/ReachMe";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <Nav />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-20 md:space-y-28">
          <Hero />
          <About />
          <BentoGrid />
          <Skills />
          <Certifications />
          <ReachMe />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View */}
      <ResumeModal />
    </div>
  );
}
