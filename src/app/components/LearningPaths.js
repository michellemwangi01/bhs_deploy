import React from "react";

const LearningPaths = () => {
  const services = [
    {
      title: "IGCSE Homeschooling and Tuition",
      description:
        "Specialized IGCSE homeschooling and tuition, offering personalized support for academic excellence and holistic student development. Tailored for individual success.",
    },
    {
      title: "AS and A-LEVEL Homeschooling and Tuition",
      description:
        "Expert homeschooling & tuition for AS and A-levels, tailored to individual needs, ensuring academic success and personal growth.",
    },
    {
      title: "Online Lessons and Tuition",
      description:
        "Get ready for awesome learning with our at-home tutors! They come to you and make learning super fun and super easy, right at your kitchen table or your cozy study corner!",
    },
    {
      title: "Adult Lessons",
      description:
        "Tailored adult lessons in diverse subjects, fostering growth and skill acquisition through personalized instruction and flexible scheduling for busy lives.",
    },
    {
      title: "Coding Courses",
      description:
        "Dynamic coding courses, designed for all skill levels, offering hands-on learning, industry-relevant projects, and expert mentorship for career advancement.",
    },
    {
      title: "SAT and ACT Classes",
      description:
        "Comprehensive SAT and ACT classes: expert instruction, personalized strategies, and targeted practice to maximize scores and academic success.",
    },
    {
      title: "In Center Tuition",
      description:
        "Center-based tuition offering personalized instruction, small class sizes, and interactive learning environments to optimize academic performance and student growth.",
    },
    {
      title: "IB Tuition and Homeschooling",
      description:
        "Tailored IB tuition and homeschooling: expert guidance, flexible schedules, and holistic support for academic excellence and personal growth.",
    },
  ];

  return (
    <div>
      <h1 className="h1-2">Learning Paths</h1>
      <div className="flex flex-row flex-wrap justify-center m-auto w-5/6">
        {services.map((service, index) => (
          <div
            key={index}
            className=" lg:p-8 lg:m-8 lg:w-1/3 p-4 m-4 w-2/3 rounded-lg shadow-md "
            style={{ backgroundColor: "#B6922E" }}
            data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
          >
            <h1 className="h2">{service.title}</h1>
            <p className="par text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPaths;
