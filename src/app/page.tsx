// src/app/pages.tsx

import React from "react";
import Navbar from "../app/components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import OurHoney from "./components/OurHoney";
import Shop from "./components/Shop";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="honey">
          <OurHoney />
        </section>
        <section id="shop">
          <Shop />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}
