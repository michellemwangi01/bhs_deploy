import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const HomeSchoolingPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-row justify-center m-auto items-center h-full">
        <div className=" m-auto">
          <img src="https://cdn.24.co.za/files/Cms/General/d/2670/1e36c9160085494bbd0a9d640f0bfb86.jpg" />
        </div>
        <div className="flex flex-col p-2 justify-center items-center h-full">
          <h1 className="h1-2 text-center">Enhancing Homeschooling</h1>
          <h2 className="par text-xl text-center">
            Experience the best in homeschooling with our dedicated support and
            comprehensive curriculum options.
          </h2>
        </div>
      </div>

      <main className="mt-10">
        {/* Introduction Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12 mx-6 md:mx-12 lg:mx-24 text-center">
          <p className="text-lg text-gray-700">
            We prioritize all our home-based students, enabling them to learn
            Creative Writing, Reading, Mathematics, Grammar, Sciences, ICT,
            Business Studies, and more.
          </p>
        </section>

        {/* About Us Section */}
        <section className="bg-blue-50 shadow-lg rounded-lg p-8 mb-12 mx-6 md:mx-12 lg:mx-24 text-center">
          <h3 className="text-3xl font-semibold mb-6">About Us</h3>
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
        </section>

        {/* Services Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12 mx-6 md:mx-12 lg:mx-24 text-center">
          <h3 className="text-3xl font-semibold mb-6">Our Services</h3>
          <p className="text-gray-700">
            We currently offer homeschooling services for children of all ages
            at our center.
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition duration-300">
              Apply Here to Book a Free Assessment
            </button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-r from-blue-100 to-gold shadow-lg rounded-lg p-8 mb-12 mx-6 md:mx-12 lg:mx-24">
          <h3 className="text-3xl font-semibold mb-6 text-center">
            Benefits of Homeschooling
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="bg-white p-6 rounded-lg shadow-md text-gray-700 flex items-center"
              >
                <FiCheckCircle className="text-primary mr-3" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Client Areas Section */}
        <section className="bg-gradient-to-r from-gold to-blue-100 shadow-lg rounded-lg p-8 mb-12 mx-6 md:mx-12 lg:mx-24 text-center">
          <h3 className="text-3xl font-semibold mb-6">Our Client Areas</h3>
          <p className="text-gray-700">
            Kilimani, Kileleshwa, Lavington, Karen, Westlands, Runda, Muthaiga
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-gold hover:bg-yellow-400 text-white py-3 px-6 rounded-lg transition duration-300">
              Enroll Your Child Today
            </button>
          </div>
        </section>

        {/* Services Offered Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12 mx-6 md:mx-12 lg:mx-24 text-center">
          <h3 className="text-3xl font-semibold mb-6">
            Our Homeschooling Services Include
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-center">
            {[
              "IB Homeschooling",
              "IGCSE Homeschooling",
              "A-Levels Homeschooling",
              "Cambridge and Edexcel Homeschooling",
              "GED Homeschooling",
              "SAT Homeschooling",
            ].map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HomeSchoolingPage;
