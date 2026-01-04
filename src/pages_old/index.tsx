import React, { useState, useEffect } from "react";
import Head from "next/head";
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
      <Head>
        <title>
          Datsercom - Data, Servicio y Computadora | Servicios Técnicos
          Profesionales
        </title>
        <meta
          name="description"
          content="Datsercom: Expertos en soluciones tecnológicas. Reparación, mantenimiento y soporte técnico especializado para computadoras. Data, Servicio y Computadora en República Dominicana."
        />
        <meta
          name="keywords"
          content="datsercom, reparación computadoras, soporte técnico, servicio informático, República Dominicana, data, servicio, computadora"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Datsercom - Expertos en Soluciones Tecnológicas"
        />
        <meta
          property="og:description"
          content="Servicios profesionales de reparación y soporte técnico de computadoras en República Dominicana."
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Datsercom - Data, Servicio y Computadora"
        />
        <meta
          name="twitter:description"
          content="Soluciones tecnológicas profesionales para tu negocio."
        />
      </Head>

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
