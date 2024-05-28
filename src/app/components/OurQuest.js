import Link from "next/link";
import React from "react";

const OurQuest = () => {
  return (
    <div className="flex w-5/6 align-middle m-auto text-center mb-20 flex-wrap lg:flex-nowrap">
      <div data-aos="fade-right">
        <img
          src="https://tyler.com/wp-content/uploads/2023/11/river-about-image2.jpg"
          className="img "
        />
      </div>
      <div className="flex flex-col  justify-evenly" data-aos="fade-left">
        <h1 className="h1-2 " style={{ color: "#0b2250" }}>
          Our Quest
        </h1>
        <p className="par text-black  text-xl mx-10 text-center">
          We&apos;re dedicated to transforming learning into an exciting
          journey, empowering every learner to achieve their best. Embark on
          educational adventures with us, where fun and intellect intersect!
        </p>

        <Link
          href="/admissions"
          className="w-40 mx-auto button-quest text-conter"
        >
          Join Us!
        </Link>
      </div>
    </div>
  );
};

export default OurQuest;
