import React from "react";
import CareerForm from "../components/CareerForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappLink from "../components/WhatsappLink";

const page = () => {
  return (
    <div>
      <Navbar />
      <CareerForm />
      <Footer />
      <WhatsappLink />
    </div>
  );
};

export default page;
