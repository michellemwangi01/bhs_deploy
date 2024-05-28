"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Map from "../components/Map";
import "../styles/LandingPage.css";
import lottie from "lottie-web";
import animationData from "../components/ContactUsAnimation.json";
import { FaMobileAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import WhatsappLink from "../components/WhatsappLink";

const Contacts = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    animation.addEventListener("DOMLoaded", () => {
      setAnimationLoaded(true);
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div className="flex  flex-col w-full m-auto">
      <Navbar />
      {/* ------------------------------------ */}
      <div
        className="flex  w-full m-auto justify-center p-20 h-96 overflow-visible text-white "
        style={{ backgroundColor: "#0b2250" }}
      >
        <div
          className="bg-white w-2/3 pb-8 flex flex-col m-auto justify-center align-middle rounded-lg shadow-xl "
          data-aos="fade-up"
        >
          <h1 className="h1-2">Get In Touch</h1>
          <div className="flex lg:flex-row flex-col">
            <div
              className=" lg:p-10 m-auto p-0 lg:w-1/2 w-3/4"
              style={{ Color: "#0b2250" }}
              data-aos="fade-right"
            >
              <ContactForm className="" />
            </div>
            <div
              className="flex flex-col lg:w-1/2 w-3/4 lg:px-10 px-0 m-auto align-middle justify-center"
              style={{ color: "#0b2250" }}
            >
              <div className="w-3/4 m-auto" data-aos="fade-left">
                <div className="animation-container" ref={container}></div>
              </div>

              <div className="contact-info">
                <div className="contact-item">
                  <FaMobileAlt className="icon" />
                  <span className="text">+254 722 943 768</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="icon" />
                  <span className="text">Marcus Garvey Rd, Nairobi Kenya</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="icon" />
                  <span className="text">info@bumahomeschool.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------ */}
      <h1 className="h1-2 mt-96 ">Visit Us</h1>
      <Map />
      <Footer />
      <WhatsappLink />
    </div>
  );
};

export default Contacts;
