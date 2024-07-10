import React from "react";
import ScrollUp from "@/components/landing-page/Common/ScrollUp";
import Hero from "@/components/landing-page/Hero";
import Features from "@/components/landing-page/Features";
import AboutSection from "@/components/landing-page/About/AboutSection";

export default function LandingPage() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSection />
    </>
  );
}
