import React from "react";
import { useSpring, animated } from "react-spring";

const ourCommunity = [
  {
    title: "20+",
    subTitle: "Expert Tutors",
    description:
      "Our team of 20+ tutors are dedicated to making learning fun and effective!",
  },
  {
    title: "24/7",
    subTitle: "Always Available",
    description:
      "Get help anytime with our round-the-clock teaching support for your studies!",
  },
  {
    title: "50+",
    subTitle: "Subjects Offered",
    description:
      "Explore over 50 exciting courses tailored to spark curiosity and inspire learning!",
  },
  {
    title: "1000+",
    subTitle: "Happy Students",
    description:
      "Over 1,000 students love learning with us and building brighter futures every day!",
  },
];

function Counter({ n }) {
  const step = 10000;
  const { number } = useSpring({
    from: { number: n - 50 },
    number: n,
    delay: 700,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.div>
      {number.to((n) => `${Math.round(n).toLocaleString()}+`)}
    </animated.div>
  );
}

const Community = () => {
  return (
    <div className="community-page flex flex-col flex-wrap justify-center text  py-10 w-full">
      <h1 className="text-6xl font-semibold text-white text-center">
        Join Our Community
      </h1>
      <div className="flex flex-wrap w-full justify-center  py-20">
        {ourCommunity.map((numbers, index) => (
          <div
            key={index}
            className={`lg:m-4 lg:p-6 m-2 p-2 ${
              index === 0 ? "text-sm" : index === 1 ? "text-md" : "text-lg"
            }`}
            style={{ maxWidth: "300px", minWidth: "200px" }}
          >
            <h1 className="text-6xl font-semibold text-gray-100">
              {numbers.title}
            </h1>
            <h2 className="text-4xl font-semibold mt-4 text-gray-100">
              {numbers.subTitle}
            </h2>
            <p className="mt-4 text-gray-100">{numbers.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
