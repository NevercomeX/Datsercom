"use client";

import React, { useState, useEffect } from "react";
import {
  Navbar,
  Hero,
  Services,
  WhyChooseUs,
  Testimonials,
  Contact,
  Footer,
} from "../components/datsercom";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} />

      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
