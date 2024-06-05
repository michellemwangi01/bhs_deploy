"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const form = useRef();

  const applicationSuccessful = (message, type) => {
    toast(message, { autoClose: 3000, type });
  };

  const handleTutorApplication = (data) => {
    console.log(data);

    // Extract form data
    const {
      first_name,
      last_name,
      phone_number,
      email,
      subjects_you_teach,
      curriculum_specialization,
      university_college,
    } = data;

    // Construct a custom message
    const customMessage = `
      Name: ${first_name} ${last_name}
      Phone Number: ${phone_number}
      Email: ${email}
      Subjects You Teach: ${subjects_you_teach.join(", ")}
      Curriculum Specialization: ${curriculum_specialization}
      University/College Attended: ${university_college}
    `;

    // Prepare the parameters for EmailJS
    const emailParams = {
      from_name: `${first_name} ${last_name}`,
      from_email: email,
      to_email: "info@tuitioncentre.com",
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
          applicationSuccessful(
            "Your application has been successfully sent! Please await our response.",
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
      className="w-full  my-6 flex flex-col justify-center items-center m-auto border-solid rounded-lg border-blue-900"
    >
      <div className="flex flex-col justify-center align-middle w-3/4 mt-2 m-auto">
        <h2
          className="h1 par font-bold text-xl par mb-8 leading-tight "
          style={{ color: "#0b2250" }}
        >
          Tutor Application
        </h2>
        <h3 className="par text-xl text-center">
          We are seeking innovative and qualified tutors to join our faculty at
          our leading tuition centre. As a hard-working and enthusiastic
          teaching professional with excellent subject knowledge, you will have
          the opportunity to inspire and educate students in a dynamic learning
          environment. <br /> Our centre prides itself on fostering academic
          excellence and personal growth. If you possess a sound understanding
          of these subjects and are committed to making a positive impact on
          students' educational journeys, we invite you to apply and become a
          part of our dedicated team.
        </h3>
      </div>

      <form
        onSubmit={handleSubmit(handleTutorApplication)}
        className="w-full"
        ref={form}
      >
        <div className="lg:w-1/2 w-5/6 m-auto">
          {/* -------- PERSONAL DETAILS--------------- */}
          <fieldset
            id="IdentityKinInfo"
            className="  my-4 mx-4 scheduler-border border border-1 border-blue-900 p-4 rounded-md"
          >
            <legend className="par scheduler-border text-lg p-1 font-semibold">
              {" "}
              Applicant Information
            </legend>
            <div className="grid md:grid-cols-2 md:gap-6">
              {/* First Name */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  {...register("first_name", { required: true })}
                  className="block par rounded-md py-2.5 px-0 w-full text-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  style={{ borderBottom: "1px solid #0b2250" }}
                />
                <label className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  First Name
                </label>
                {errors.first_name && (
                  <span className="text text-red-500">
                    First Name is required
                  </span>
                )}
              </div>

              {/* Last Name */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  {...register("last_name", { required: true })}
                  className="block par rounded-md py-2.5 px-0 w-full text-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  style={{ borderBottom: "1px solid #0b2250" }}
                />
                <label className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Last Name
                </label>
                {errors.last_name && (
                  <span className="text text-red-500">
                    Last Name is required
                  </span>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              {/* Phone Number */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="tel"
                  {...register("phone_number", { required: true })}
                  className="block par rounded-md py-2.5 px-0 w-full text-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  style={{ borderBottom: "1px solid #0b2250" }}
                />
                <label className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Phone Number
                </label>
                {errors.phone_number && (
                  <span className="text text-red-500">
                    Phone Number is required
                  </span>
                )}
              </div>
              {/* Email Address */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="block par rounded-md py-2.5 px-0 w-full text-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  style={{ borderBottom: "1px solid #0b2250" }}
                />
                <label className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email Address
                </label>
                {errors.email && (
                  <span className="text text-red-500">Email is required</span>
                )}
              </div>
            </div>
            {/* </fieldset> */}

            {/* -------- SUBJECTS AND QUALIFICATIONS--------------- */}
            {/* <fieldset
            id="SubjectsQualifications"
            className="row g-3 my-4 mx-4 scheduler-border border border-1 border-blue-900 p-4 rounded-md"
          > */}

            <div className="grid md:grid-cols-2 md:gap-6">
              {/* Curriculum Specialization */}
              <div className="relative z-0 w-full mb-6 group">
                <select
                  {...register("curriculum_specialization", { required: true })}
                  className="block par py-2.5 px-0 par w-full rounded-md text-lg bg-transparent border-0 border-b-2 border-blue-900 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  style={{ borderBottom: "1px solid #0b2250" }}
                >
                  <option value="" disabled selected></option>
                  <option value="BRITISH">British Curriculum</option>
                  <option value="IB">International Baccalaureate (IB)</option>
                  <option value="KENYAN">Kenyan Curriculum (CBC)</option>
                  <option value="KENYAN">AS and A-LEVEL</option>
                  <option value="KENYAN">IGCSE</option>
                  <option value="OTHER">Other</option>
                </select>
                <label className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Curriculum Specialization
                </label>
                {errors.curriculum_specialization && (
                  <span className="text text-red-500">
                    Curriculum Specialization is required
                  </span>
                )}
              </div>

              {/* University/College Attended */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  {...register("university_college", { required: true })}
                  className="block par rounded-md py-2.5 px-0 w-full text-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  style={{ borderBottom: "1px solid #0b2250" }}
                />
                <label className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  University/College Attended
                </label>
                {errors.university_college && (
                  <span className="text text-red-500">
                    University/College Attended is required
                  </span>
                )}
              </div>
            </div>

            {/* Subjects You Teach */}
            <div className="relative z-0 w-full mb-6 group">
              <label className="block text-normal font-serif font-normal mb-2">
                Subjects You Teach
              </label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "MATHEMATICS",
                  "SCIENCE",
                  "ENGLISH",
                  "BIOLOGY",
                  "CHEMISTRY",
                  "PHYSICS",
                  "BUSINESS",
                  "ICT",
                  "HISTORY",
                  "GEOGRAPHY",
                  "ECONOMICS",
                  "PSYCHOLOGY",
                  "RELIGIOUS STUDIES",
                  "SOCIOLOGY",
                  "FRENCH",
                  "SWAHILI",
                  "GLOBAL PERSPECTIVE",
                  "TRAVEL AND TOURISM",
                  "LAW",
                  "COMPUTER SCIENCE",
                ].map((subject) => (
                  <label key={subject} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      {...register("subjects_you_teach")}
                      value={subject}
                      className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                    />
                    <span className="text">{subject}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* -------- Submit Button--------------- */}
            <div className="flex justify-center w-full mt-6">
              <button
                type="submit"
                className="par text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-lg w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CareerForm;
