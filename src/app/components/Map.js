import React from "react";

const Map = () => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ paddingTop: "20.25%" }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7999052144332!2d36.78845437600496!3d-1.2945914356374093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11007cf0394b%3A0xf82a92f6c681c753!2sBuma%20Homeschool!5e0!3m2!1sen!2ske!4v1715932839507!5m2!1sen!2ske"
        className="absolute top-0 left-0 w-full h-full"
        style={{
          border: "0",
          // borderTopLeftRadius: "30%",
          // borderTopRightRadius: "30%",
        }}
        title="Buma Home School Marcus Garvey North, Nairobi"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
