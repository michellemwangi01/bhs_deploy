import React from "react";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsappLink = () => {
  const urlencodedmessage =
    "Hello%2C%20Thank%20you%20for%20visiting%20our%20platform%20and%20welcome%20to%20Buma%20Home%20School%20and%20Tuition%20Center.%20How%20can%20we%20be%20of%20service%20today%3F";
  const phoneNumber = "254722943768";
  return (
    <div
      className="fixed bottom-4 right-4 m-2  bg-green-900 text-white rounded-full shadow-lg"
      style={{ boxShadow: "0 4px 6px rgba(34, 197, 94, 0.5)" }}
    >
      <Link
        href={`https://wa.me/${phoneNumber}?text:${urlencodedmessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl m-2 flex items-center"
      >
        <IoLogoWhatsapp />
      </Link>
    </div>
  );
};

export default WhatsappLink;
