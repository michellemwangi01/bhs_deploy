import React from "react";
import HomeSchooling from "../components/HomeSchooling";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappLink from "../components/WhatsappLink";

const page = () => {
  return (
    <div>
      <Navbar />
      <HomeSchooling />
      <Footer />
      <WhatsappLink />
    </div>
  );
};

export default page;
