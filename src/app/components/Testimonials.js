import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const testimonials = [
  {
    name: "JOASH RABURA, SATISFIED PARENT",
    feedback:
      "They make learning so much fun, my daughter can’t wait for her lessons each day!",
  },
  {
    name: "SOPHIA M., HAPPY PARENT",
    feedback:
      "Thanks to Buma Home schooling and Tuition center my kids love learning! Their grades are up and they’re always excited for class!",
  },
  {
    name: "JAFAR MALOBA, SATISFIED PARENT",
    feedback:
      "İt was a nice experience and the teachers are caring and very dedicated. İ would recommend anyone this institution to anyone who wants excellence in their education",
  },
  {
    name: "NYAFUANGA OCHARE, SATISFIED PARENT",
    feedback:
      "I had an amazing experience with Buma homeschool and tuition center. The service was top-notch,and the services offered exceeded my expectations. I highly recommend them to anyone looking for quality and excellent education.",
  },
];

const Testimonials = () => {
  return (
    <div className="lg:p-20 p-10 bg-gray-200 ">
      <h1 className="lg:h1 h1-smscreen" style={{ color: "#0b2250" }}>
        What Our Clients Say
      </h1>
      <div>
        <Carousel
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          swipeable={true}
          autoFocus={true}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="lg:p-20 p-4">
              <p
                className="lg:text-4xl text-xl text "
                style={{ color: "#0b2250" }}
              >
                &quot;{testimonial.feedback}&quot;
              </p>
              <p className="text-sm text my-4 " style={{ color: "#0b2250" }}>
                ~{testimonial.name}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
