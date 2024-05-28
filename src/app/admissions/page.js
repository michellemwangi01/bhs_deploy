"use client";
import React from "react";
import Navbar from "../components/Navbar";
import AdmissionForm from "../components/AdmissionForm";
import "../styles/LandingPage.css";
import Footer from "../components/Footer";
import WhatsappLink from "../components/WhatsappLink";
import Link from "next/link";
const Admissions = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col align-middle justify-center w-full landing-page-admission">
        <h1 className="h1 mt-12">Join the Buma Students Community!</h1>
        <Link
          href="#registration_intro"
          className="button m-auto text-center md:w-1/6 w-1/3 "
        >
          Register
        </Link>
      </div>
      <div
        className="w-3/4 m-auto py-4 "
        // style={{ backgroundColor: "#101518", color: "#ffffff" }}
      >
        <h2 className="par text-xl my-8 text-center" id="registration_intro">
          We are excited to welcome you on board! <br />
          Please fill out the registration form below to join our Buma Students
          Community and we will contact you soon.
        </h2>
        <AdmissionForm />
      </div>
      <Footer />
      <WhatsappLink />
    </div>
  );
};

export default Admissions;
