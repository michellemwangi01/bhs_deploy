import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

const HomeSchoolingPage = () => {
  return (
    <div className="p-6  min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center m-auto items-center h-full w-3/4">
        <div className="flex justify-center m-auto w-1/2 ">
          <img src="https://cdn.24.co.za/files/Cms/General/d/2670/1e36c9160085494bbd0a9d640f0bfb86.jpg" />
        </div>
        <div className="text-center m-auto h-full">
          <h1 className="h1-2 text-center">
            Enhancing <span className="span">Homeschooling</span>{" "}
          </h1>
        </div>
      </div>

      <main className="mt-10">
        {/* About Us Section */}
        <section className="par text-2xl  lg:text-2xl p-8 mb-12  text-center">
          <h3 className="h3 text-4xl mb-6">Our Homeschooling Services</h3>
          <p className=" text-gray-700">
            We prioritize all our home-based students, enabling them to learn
            Creative Writing, Reading, Mathematics, Grammar, Sciences, ICT,
            Business Studies, and more.
          </p>
          <p className="text-gray-700">
            We are a professional homeschooling and tuition center based in
            Nairobi, offering high-quality services for students following the
            British National Curriculum – IGCSE, A-Levels, Primary, and Lower
            Secondary.
          </p>
          <p className="text-gray-700 mt-4">
            Unsure of which homeschooling curriculum to choose? We can help you
            select the most suitable option for your child.
          </p>
          <p className="text-gray-700 mt-4">
            Our tutors are fully qualified with up-to-date teaching
            methodologies tailored to your child’s homeschooling curriculum.
          </p>
          <p className="text-gray-700 mt-4">
            We currently offer homeschooling services for children of all ages
            at our center.
          </p>
          <div className="flex justify-center mt-6">
            <Link
              href="/admissions"
              className="btn-apply par text-xl  text-white hover:border border-1 border-yellow-800 hover:bg-white hover:text-yellow-800 py-3 px-6 rounded-lg transition duration-300"
            >
              Apply Here to Book a Free Assessment
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="md:py-10 py-4">
          <h3 className="par h3 text-4xl mb-6 text-center">
            Benefits of Homeschooling
          </h3>
          <div className="flex flex-row flex-wrap justify-center align-middle">
            {[
              "Assess your child’s individual needs",
              "Take control of your child’s education",
              "One-on-one instruction",
              "Personalized education plan",
              "Self-paced learning",
              "Reduce the fear of failure",
              "Eliminate classroom teasing",
              "Create a distraction-free environment",
              "Build academic confidence",
              "Flexible studying options",
            ].map((benefit, index) => (
              <div
                key={index}
                className="par text-lg bg-gradient-to-r from-blue-100 to-gold shadow-lg rounded-lg p-6  text-gray-700 flex items-center m-4"
              >
                <FiCheckCircle className="text-primary mr-3" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Client Areas Section */}
        {/* <section className="par bg-gradient-to-r from-gold to-blue-100  p-8 mb-12  text-center">
          <h3 className="h3 text-4xl  mb-6">Our Client Areas</h3>
          <p className="text-gray-700 text-3xl">
            Kilimani, Kileleshwa, Lavington, Karen, Westlands, Runda, Muthaiga
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-blue-900 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300">
              Enroll Your Child Today
            </button>
          </div>
        </section> */}

        {/* Services Offered Section */}
        <section className="par bg-white p-8 mb-12 text-center">
          <h3 className="h3 text-4xl mb-6">Homeschooling Services</h3>
          <div className="custom-scroll flex justify-evenly overflow-x-auto">
            {[
              "IB Homeschooling",
              "IGCSE Homeschooling",
              "A-Levels Homeschooling",
              "Cambridge and Edexcel Homeschooling",
              "GED Homeschooling",
              "SAT Homeschooling",
            ].map((service, index) => (
              <div
                key={index}
                className="circle-item flex-shrink-0 w-40 h-40 m-8 p-4 bg-[#b6922e] rounded-full flex items-center justify-center text-white text-xl shadow-lg transform transition-all duration-300"
              >
                {service}
              </div>
            ))}
          </div>
        </section>

        {/* ENROLL TODAY*/}
        {/* <section className="par bg-white py-12 mb-12 text-center">
          <Link
            href="/admissions"
            className="btn-apply par text-xl  text-white hover:border border-1 border-yellow-800 hover:bg-white hover:text-yellow-800 py-3 px-6 rounded-lg transition duration-300"
          >
            {" "}
            Enroll Today
          </Link>
        </section> */}
      </main>
    </div>
  );
};

export default HomeSchoolingPage;
