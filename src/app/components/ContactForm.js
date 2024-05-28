import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const form = useRef();

  // Link to the emailjs account: https://dashboard.emailjs.com/admin/account
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_qqiovkg", "template_anbk7dx", form.current, {
        publicKey: "Et-gQwpscuzgDG164",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          messageSent("Your message has been sent!", "success");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // ----------------------- Replace this with actual user context or props
  const currentUser = { user_id: 1 };

  // -------------------TOAST NOTIFICATIONS
  const vendorRegistrationSuccessful = (message, type) => {
    toast(message, { autoClose: 3000, type });
  };

  const handleClientMessage = (data) => {
    console.log(data);
    // Extract form data
    const { fullnames, email_address, message } = data;

    // Construct a custom message
    const customMessage = `
      Full Name: ${fullnames}
      Email Address: ${email_address}
      Message: ${message}
    `;

    // Prepare the parameters for EmailJS
    const emailParams = {
      from_name: fullnames,
      from_email: email_address,
      to_email: "info@bumahomeschool.com",
      message: customMessage,
    };

    emailjs
      .send(
        "service_qqiovkg",
        "template_anbk7dx",
        emailParams,
        "Et-gQwpscuzgDG164"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          vendorRegistrationSuccessful(
            "Your message has been successfully sent! Please await our response.",
            "success"
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    // Reset the form after submission
    reset();
  };

  return (
    <div
      id=""
      style={{ color: "#0b2250" }}
      className="w-full mr-20 flex justify-center items-center m-auto border-solid rounded-lg border-blue-900"
    >
      <form
        onSubmit={handleSubmit(handleClientMessage)}
        className="w-full"
        ref={form}
      >
        <h2
          className="font-bold text-xl par text-center mb-8"
          style={{ color: "#0b2250" }}
        >
          Write to us. We are here for you!
        </h2>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            {...register("fullnames", { required: true })}
            id="floating_name"
            className="par block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-green-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            style={{ color: "#0b2250" }}
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Name
          </label>
          {errors.fullnames && (
            <span className="text-red-500">Name is required</span>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            {...register("email_address", { required: true })}
            id="Email_Address"
            className="par block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-green-400 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            style={{ color: "#0b2250" }}
          />
          <label
            htmlFor="Email_Address"
            className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email Address
          </label>
          {errors.email_address && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            id="comments"
            name="comments"
            rows="4"
            cols="50"
            {...register("message", { required: true })}
            className="par block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-green-400 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            style={{ color: "#0b2250" }}
          ></textarea>

          <label
            htmlFor="comments"
            className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Message
          </label>
          {errors.message && (
            <span className="text-red-500">Message is required</span>
          )}
        </div>

        <div className="flex justify-center m-auto w-full">
          <button
            type="submit"
            className="bg-blue-900 text-white rounded par w-1/2 p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-1 hover:border-blue-900 text-lg"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
