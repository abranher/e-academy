import React from "react";
import ScrollUp from "@/components/landing-page/Common/ScrollUp";
import Hero from "@/components/landing-page/Hero";
import Features from "@/components/landing-page/Features";
import AboutSection from "@/components/landing-page/About/AboutSection";

export default function LandingPage() {
  return (
    <>
      <ScrollUp />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
    
      <Hero />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
    
      <Features />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
    
      <AboutSection />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
    </>
  );
}
