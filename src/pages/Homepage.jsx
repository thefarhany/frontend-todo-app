import React from "react";
import Navbar from "../components/layouts/homepage/Navbar";
import Hero from "../components/layouts/homepage/Hero";
import Features from "../components/layouts/homepage/Features";
import HowItWorks from "../components/layouts/homepage/HowItWorks";
import CTA from "../components/layouts/homepage/CTA";
import Footer from "../components/layouts/homepage/Footer";
import usePageTitle from "../hooks/usePageTitle";

const Homepage = () => {
  usePageTitle("Homepage");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
        <Footer />
      </main>
    </div>
  );
};

export default Homepage;
