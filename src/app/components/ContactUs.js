import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center align-middle w-5/6 m-auto my-20">
      <div className="w-1/2 flex justify-end m-auto">
        <img src="https://images.pexels.com/photos/8204325/pexels-photo-8204325.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
      </div>
      <div className="p-20 justify-center align-middle text-center">
        <h1 className="text text-4xl my-4">
          Have questions? Let&apos;s chat! We&apos;re here to help.
        </h1>
        <div className="flex justify-center">
          <Link
            href="https://wa.me/254722943768?text:Hello%2C%20Thank%20you%20for%20visiting%20our%20platform%20and%20welcome%20to%20Buma%20Home%20School%20and%20Tuition%20Center.%20How%20can%20we%20be%20of%20service%20today%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="button-contact m-2 flex items-center"
          >
            <span className="mr-2">
              <FaWhatsapp />
            </span>
            Whatsapp
          </Link>
          <Link
            href="tel:254722943768"
            className="button-contact-phone m-2 flex text-center items-center"
          >
            <span className="mr-2">
              <BiSolidPhoneCall />
            </span>
            Call Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
