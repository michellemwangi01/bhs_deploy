import React, { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import Link from "next/link";

function NavbarDark() {
  const [activeItem, setActiveItem] = useState("home"); // Initialize active item state

  const handleItemClick = (itemName) => {
    setActiveItem(itemName); // Update active item state on click
  };
  return (
    <nav
      className="  w-full z-10 top-0 text-white font-serif"
      style={{ backgroundColor: "#0b2250" }}
    >
      <div className=" max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div className="w-52 h-auto">
          <img
            src="images/bhs-logo1.png"
            className="w-full h-full"
            alt="BHS Logo"
          />
        </div>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <p
            className="text m-2 flex items-center text-xl"
            style={{ color: "#0b2250" }}
          >
            <span className="mr-2">
              <BiSolidPhoneCall />
            </span>
            +254 722 943 768
          </p>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border text-white border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li className={activeItem === "home" ? "active" : ""}>
              <Link
                href="/"
                className="block py-2 px-3 md:p-0  text-xl  rounded"
                onClick={() => handleItemClick("home")}
              >
                Home
              </Link>
            </li>
            <li className={activeItem === "services" ? "active" : ""}>
              <Link
                href="/services"
                className="block py-2 px-3 md:p-0  text-xl  rounded"
                onClick={() => handleItemClick("services")}
              >
                Services
              </Link>
            </li>
            <li className={activeItem === "contact" ? "active" : ""}>
              <Link
                href="/contacts"
                className="block py-2 px-3 md:p-0  text-xl  rounded"
                onClick={() => handleItemClick("contact")}
              >
                Contacts
              </Link>
            </li>
            <li className={activeItem === "admission" ? "active" : ""}>
              <Link
                href="/admissions"
                className="block py-2 px-3 md:p-0  text-xl  rounded"
                onClick={() => handleItemClick("admission")}
              >
                Admission
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarDark;
