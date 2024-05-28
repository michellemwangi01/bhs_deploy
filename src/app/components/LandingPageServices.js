import React from "react";
import "../styles/LandingPage.css";

const LandingPageServices = () => {
  return (
    <div className="h-screen">
      <div className="landing-page-services flex flex-col justify-center items-center relative overflow-visible">
        <h1 className="h1 leading-tight text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
          OUR SERVICES
        </h1>
        <div className="flex m-auto flex-wrap w-3/4 flex-row lg:absolute lg:-bottom-1/2  justify-around">
          <div
            className="flex flex-col lg:w-1/2 w-full  justify-end"
            data-aos="fade-up"
          >
            <h1
              className=" text-white  w-full text-xl lg:text-blue-950"
              style={{
                fontSize: "3rem",
                // color: "#0b2250",
                fontFamily: "robo",
                textAlign: "center",
                lineHeight: "5rem",
                margin: "2rem",
              }}
            >
              Shaping Bright Futures Together!
            </h1>
            <p className="hidden lg:block par  text-black  text-xl mx-10 text-center ">
              At Buma Home School, we believe every child is a star, ready to
              shine! We&apos;re dedicated to making learning enjoyable and
              nurturing children&apos;s intellectual development.
            </p>
          </div>
          <div data-aos="fade-up">
            <img
              src="https://bumahomeschool.com/wp-content/uploads/2024/01/buma.png"
              className=" shake-on-hover img-shake shadow-2xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageServices;
