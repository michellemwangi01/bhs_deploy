"use client";
import React, { useState, useEffect } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const [activeItem, setActiveItem] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu visibility
  const router = useRouter();

  useEffect(() => {
    if (router) {
      // Set the active item based on the current path
      const path = router.pathname;
      switch (path) {
        case "/":
          setActiveItem("home");
          break;
        case "/services":
          setActiveItem("services");
          break;
        case "/contacts":
          setActiveItem("contacts");
          break;
        case "/admissions":
          setActiveItem("admission");
          break;
        default:
          setActiveItem("");
      }
    }
  }, [router?.pathname]);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName); // Update active item state on click
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <nav className="w-full z-10 top-0 bg-white border-gray-200 font-serif">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div className="w-52 h-auto">
          <img
            src="images/bhs-logo1.png"
            className="w-full h-full"
            alt="BHS Logo"
          />
        </div>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <p
            className="hidden lg:flex items-center text-xl m-2"
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
            aria-expanded={isMenuOpen}
            onClick={toggleMenu} // Toggle the menu on click
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
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li className={activeItem === "home" ? "active" : ""}>
              <Link
                href="/"
                className="block py-2 px-3 md:p-0 text-xl rounded"
                onClick={() => handleItemClick("home")}
              >
                Home
              </Link>
            </li>
            <li className={activeItem === "services" ? "active" : ""}>
              <Link
                href="/services"
                className="block py-2 px-3 md:p-0 text-xl rounded"
                onClick={() => handleItemClick("services")}
              >
                Services
              </Link>
            </li>

            <li className={activeItem === "homeschool" ? "active" : ""}>
              <Link
                href="/homeschool"
                className="block py-2 px-3 md:p-0 text-xl rounded"
                onClick={() => handleItemClick("homeschool")}
              >
                Homeschooling
              </Link>
            </li>
            <li className={activeItem === "admission" ? "active" : ""}>
              <Link
                href="/admissions"
                className="block py-2 px-3 md:p-0 text-xl rounded"
                onClick={() => handleItemClick("admission")}
              >
                Admission
              </Link>
            </li>
            <li className={activeItem === "careers" ? "active" : ""}>
              <Link
                href="/careers"
                className="block py-2 px-3 md:p-0 text-xl rounded"
                onClick={() => handleItemClick("careers")}
              >
                Careers
              </Link>
            </li>
            <li className={activeItem === "contacts" ? "active" : ""}>
              <Link
                href="/contacts"
                className="block py-2 px-3 md:p-0 text-xl rounded"
                onClick={() => handleItemClick("contacts")}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
