import React from "react";

const ourApproach = [
  {
    title: "Personalized Learning Paths for Every Learner",
    imageUrl: "https://bumahomeschool.com/wp-content/uploads/2024/01/class.jpg",
    description:
      "We specialize in crafting personalized learning paths tailored to the unique needs and preferences of each learner. By focusing on personalized education, we empower every student to develop their skills and cultivate a genuine passion for learning. ",
  },
  {
    title: "Flexible Scheduling for all classes and Curriculums",
    imageUrl:
      "https://images.pexels.com/photos/4144036/pexels-photo-4144036.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Enjoy the freedom to choose your learning schedule with our flexible class times, designed to accommodate every family's unique rhythm and lifestyle. Whether you prefer morning sessions, afternoon studies, or evening lessons, our adaptable scheduling ensures that education fits seamlessly into your daily routine.",
  },
  {
    title: "Comprehensive Support for Parents",
    imageUrl:
      "https://images.pexels.com/photos/6517334/pexels-photo-6517334.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "We provide extensive support for parents, offering guidance and resources to navigate homeschooling effectively. Our team is here to assist you every step of the way, ensuring a successful educational journey for your child.",
  },
  {
    title: "Interactive and Engaging Curriculum",
    imageUrl:
      "https://images.pexels.com/photos/7104384/pexels-photo-7104384.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Our curriculum is designed to be interactive and engaging, incorporating multimedia resources, hands-on activities, and collaborative projects. We believe in making learning fun and meaningful for every student.",
  },
];

const approachDisplay1 = (approach, index) => (
  <div
    key={index}
    className="mx-auto flex flex-col lg:flex-row items-center my-20 max-h-90"
    data-aos="fade-right"
  >
    <img
      src={approach.imageUrl}
      className="w-full lg:w-1/2 mb-6 lg:mb-0"
      alt={approach.title}
      style={{ borderRadius: "25px" }}
    />
    <div className="flex flex-col justify-center lg:ml-8 flex-grow">
      <h2 className="approachTitles text-3xl lg:text-4xl mb-4">
        {approach.title}
      </h2>
      <p className="approachDetails text-base lg:text-xl">
        {approach.description}
      </p>
    </div>
  </div>
);

const approachDisplay2 = (approach, index) => (
  <div
    key={index}
    className="mx-auto flex flex-col lg:flex-row items-center my-20 max-h-90"
    data-aos="fade-left"
  >
    <div className="flex flex-col justify-center lg:ml-8 flex-grow">
      <h2 className="approachTitles text-3xl lg:text-4xl mb-4">
        {approach.title}
      </h2>
      <p className="approachDetails text-base lg:text-xl">
        {approach.description}
      </p>
    </div>
    <img
      src={approach.imageUrl}
      className="w-full lg:w-1/2 mb-6 lg:mb-0"
      alt={approach.title}
      style={{ borderRadius: "25px" }}
    />
  </div>
);

const Approach = () => {
  return (
    <div className="w-2/3 m-auto">
      <h1 className="h1" style={{ color: "#0b2250" }}>
        Why Choose Buma?
      </h1>
      {ourApproach.map((approach, index) =>
        index % 2 === 0 ? (
          <div key={index}>{approachDisplay1(approach)}</div>
        ) : (
          <div key={index}>{approachDisplay2(approach)}</div>
        )
      )}
    </div>
  );
};

export default Approach;
