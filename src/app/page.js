"use client";
import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Services from "./components/Services";
import Approach from "./components/Approach";
import Community from "./components/Community";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import WhatsappLink from "./components/WhatsappLink";

export default function Home() {
  return (
    <main className=" bg-white">
      <Navbar />
      <LandingPage />
      <Services />
      <Approach />
      <Testimonials />
      <Community />
      <ContactUs />
      <Footer />
      <WhatsappLink />
    </main>
  );
}
