"use client";
import React from "react";
import Navbar from "../components/Navbar";
import LandingPageServices from "../components/LandingPageServices";
import OurQuest from "../components/OurQuest";
import OurServices from "../components/OurServices";
import LearningPaths from "../components/LearningPaths";
import IndustryPartners from "../components/IndustryPartners";
import Footer from "../components/Footer";
import WhatsappLink from "../components/WhatsappLink";

const page = () => {
  return (
    <div>
      <Navbar />
      <LandingPageServices />
      <OurQuest />
      <OurServices />
      <LearningPaths />
      <IndustryPartners />
      <Footer />
      <WhatsappLink />
    </div>
  );
};

export default page;
