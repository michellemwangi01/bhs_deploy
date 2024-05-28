import React from "react";
import "../styles/LandingPage.css";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="landing-page min-h-screen flex flex-col justify-center items-center">
      <h1 className="h1 text-3xl md:text-5xl text-wrap leading-tight lg:text-6xl font-bold mb-8 text-center">
        BUMA HOME SCHOOL AND TUITION CENTER
      </h1>
      <h2 className="h2 text-lg md:text-xl lg:text-2xl mb-8 text-center leading-tight">
        Empowering Students to Excel.
        <br />
        Personalized Learning. Exceptional Results!
      </h2>
      <Link href="/admissions" className="button">
        Start Learning Today!
      </Link>
    </div>
  );
};

export default LandingPage;
