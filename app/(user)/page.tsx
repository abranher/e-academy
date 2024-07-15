import React from "react";
import Hero from "@/components/landing-page/Hero";
import Features from "@/components/landing-page/Features";
import AboutSection from "@/components/landing-page/About/AboutSection";
import SectionDivider from "@/components/landing-page/SectionDivider";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <SectionDivider />

      <Features />
      <SectionDivider />

      <AboutSection />
      <SectionDivider />
    </>
  );
}
