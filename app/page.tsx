import React from "react";
import ScrollUp from "@/components/landing-page/Common/ScrollUp";
import Hero from "@/components/landing-page/Hero";
import Features from "@/components/landing-page/Features";
import AboutSectionOne from "@/components/landing-page/About/AboutSectionOne";
import Blog from "@/components/landing-page/Blog";

export default function LandingPage() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <Blog />
    </>
  );
}
