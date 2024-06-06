"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdmissionForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const form = useRef();

  const studentApplicationSuccessful = (message, type) => {
    toast(message, { autoClose: 3000, type });
  };

  const handleClientAdmission = (data) => {
    console.log(data);

    // Extract form data
    const {
      first_name,
      last_name,
      email,
      nationality,
      dob,
      grade,
      current_school,
      student_location,
      parent_name,
      parent_phone,
      parent_email,
      booking_date,
      learning_service,
      subjects_of_interest,
    } = data;

    // Construct a custom message
    const customMessage = `
      First Name: ${first_name}
      Last Name: ${last_name}
      Email: ${email}
      Nationality: ${nationality}
      Date of Birth: ${dob}
      Grade: ${grade}
      Current School: ${current_school}
      Student Location: ${student_location}
      Parent Name: ${parent_name}
      Parent Phone: ${parent_phone}
      Parent Email: ${parent_email}
      Booking Date: ${booking_date}
      Learning Service: ${learning_service}
      Subjects of Interest: ${subjects_of_interest.join(", ")}
    `;

    // Prepare the parameters for EmailJS
    const emailParams = {
      from_name: `${first_name} ${last_name}`,
      from_email: email,
      to_email: "info@bumahomeschool.com",
      message: customMessage,
    };

    // emailjs account details
    const bumaServiceID = "service_93ibmek";
    const bumaContactUsTemplateID = "template_soyky8m";
    const bumaUserID = "rThJZpQfq4Oz1Yx43";

    emailjs
      .send(bumaServiceID, bumaContactUsTemplateID, emailParams, bumaUserID)
      .then(
        () => {
          console.log("SUCCESS!");
          studentApplicationSuccessful(
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
      className="w-full mr-20 flex flex-col justify-center items-center m-auto border-solid rounded-lg border-blue-900"
    >
      <h2 className="font-bold text-xl par mb-8" style={{ color: "#0b2250" }}>
        Online Registration
      </h2>
      <form
        onSubmit={handleSubmit(handleClientAdmission)}
        className="w-full"
        ref={form}
      >
        <div className="flex flex-wrap m-auto md:flex-wrap justify-center">
          {/* -------- STUDENT DETAILS--------------- */}
          <fieldset
            id="IdentityKinInfo"
            class="row g-3 my-4 mx-4 scheduler-border border border-1 border-blue-900 p-4 rounded-md"
          >
            <legend class="scheduler-border text p-1 font-semibold">
              {" "}
              Student Details
            </legend>
            <div className="grid md:grid-cols-2 md:gap-6">
              {/* First Name */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  {...register("first_name", { required: true })}
                  className="block par rounded-md py-2.5 px-0 w-full text-lg bg-transparent   appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                  className="block par rounded-md py-2.5 px-0 w-full text-lg bg-transparent   appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
              {/* Email Address */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="block par rounded-md py-2.5 px-0 w-full text-lg bg-transparent   appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
              {/* Nationality */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  {...register("nationality", { required: true })}
                  className="block par rounded-md py-2.5 px-0 w-full text-lg bg-transparent   appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  style={{ borderBottom: "1px solid #0b2250" }}
                />
                <label className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Nationality
                </label>
                {errors.nationality && (
                  <span className="text text-red-500">
                    Nationality is required
                  </span>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              {/* Student DOB */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="date"
                  {...register("dob", { required: true })}
                  className="block par rounded-md py-2.5 px-0 w-full text-lg bg-transparent   appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  style={{ borderBottom: "1px solid #0b2250" }}
                />
                <label className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Date of Birth
                </label>
                {errors.dob && (
                  <span className="text text-red-500">
                    Date of Birth is required
                  </span>
                )}
              </div>
              {/* Grade */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  {...register("grade", { required: true })}
                  className="block par rounded-md py-2.5 px-0 w-full text-lg bg-transparent   appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  style={{ borderBottom: "1px solid #0b2250" }}
                />
                <label className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Grade
                </label>
                {errors.grade && (
                  <span className="text text-red-500">Grade is required</span>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              {/* Current School */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  {...register("current_school", { required: true })}
                  className="block par rounded-md py-2.5 px-0 w-full text-lg bg-transparent   appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  style={{ borderBottom: "1px solid #0b2250" }}
                />
                <label className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Current School
                </label>
                {errors.current_school && (
                  <span className="text text-red-500">
                    Current School is required
                  </span>
                )}
              </div>
              {/* Student Location */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  {...register("student_location", { required: true })}
                  className="block par rounded-md py-2.5 px-0 w-full text-lg bg-transparent   appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  style={{ borderBottom: "1px solid #0b2250" }}
                />
                <label className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Student Location
                </label>
                {errors.student_location && (
                  <span className="text text-red-500">
                    Student Location is required
                  </span>
                )}
              </div>
            </div>
          </fieldset>

          {/* -------- GUARDIAN DETAILS--------------- */}
          <fieldset
            id="IdentityKinInfo"
            class="row g-3 my-4 mx-4 scheduler-border border border-1 border-blue-900 p-4 rounded-md"
          >
            <legend class="scheduler-border text p-1 font-semibold">
              {" "}
              Guardian Details
            </legend>
            <div className="grid md:grid-cols-2 md:gap-6">
              {/* Parent/Guardian's Name */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  {...register("parent_name", { required: true })}
                  className="block par rounded-md py-2.5 px-0 w-full text-lg bg-transparent   appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  style={{ borderBottom: "1px solid #0b2250" }}
                />
                <label className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Parent/Guardian&apos;s Name
                </label>
                {errors.parent_name && (
                  <span className="text text-red-500">
                    Parent/Guardian&apos;s Name is required
                  </span>
                )}
              </div>

              {/* Parent/Guardian's Phone Number */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="tel"
                  {...register("parent_phone", { required: true })}
                  className="block par rounded-md py-2.5 px-0 w-full text-lg bg-transparent   appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  style={{ borderBottom: "1px solid #0b2250" }}
                />
                <label className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Parent/Guardian&apos;s Phone Number
                </label>
                {errors.parent_phone && (
                  <span className="text text-red-500">
                    Phone Number is required
                  </span>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6"></div>
            {/* Parent/Guardian's Email */}
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                {...register("parent_email", { required: true })}
                className="block par py-2.5 px-0 w-full rounded-md text-lg bg-transparent border-0 border-b-2 border-blue-900 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                style={{ borderBottom: "1px solid #0b2250" }}
              />
              <label className="peer-focus:font-medium absolute text-normal font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Parent/Guardian&apos;Email
              </label>
              {errors.parent_email && (
                <span className="text text-red-500">Email is required</span>
              )}
            </div>
          </fieldset>
        </div>

        {/* -------- BOOKING & SUBJECTS DETAILS--------------- */}
        <fieldset
          id="IdentityKinInfo"
          class="row g-3 my-4 mx-auto scheduler-border border border-1 border-blue-900 p-4 w-3/4 rounded-md"
        >
          <legend class="scheduler-border text p-1 font-semibold">
            {" "}
            Make a Booking{" "}
          </legend>

          <div className="grid md:grid-cols-2 md:gap-6">
            {/* Make a booking (Interview/Assessment) - Date */}
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="date"
                {...register("booking_date", { required: true })}
                className="block par py-2.5 px-0 par w-full rounded-md text-lg bg-transparent border-0 border-b-2 border-blue-900 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                style={{ borderBottom: "1px solid #0b2250" }}
              />
              <label className="peer-focus:font-medium absolute text-xl mt-2 font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Make an assessment booking
              </label>
              {errors.booking_date && (
                <span className="text text-red-500">
                  Booking Date is required
                </span>
              )}
            </div>

            {/* Select a Service */}
            <div className="relative z-0 w-full mb-6 group">
              <select
                {...register("learning_service", { required: true })}
                className="block par py-2.5 px-0 par w-full rounded-md text-lg bg-transparent border-0 border-b-2 border-blue-900 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                style={{ borderBottom: "1px solid #0b2250" }}
              >
                <option value="Select" disabled selected></option>
                <option value="exam_prep">Exam Prep</option>
                <option value="online_classes">Online Classes</option>
                <option value="home_tutors">Home Tutors</option>
                <option value="homework_help">Homework Help</option>
              </select>
              <label className="peer-focus:font-medium absolute text-xl mt-2 font-serif font-normal duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Select Learning Service
              </label>
              {errors.learning_service && (
                <span className="text text-red-500">
                  Learning Service is required
                </span>
              )}
            </div>
          </div>

          {/* Subjects of Interest */}
          <div className="relative z-0 w-full mb-6 group">
            <label className="block text-normal font-serif font-normal mb-2">
              Subjects of Interest
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
                    {...register("subjects_of_interest")}
                    value={subject}
                    className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                  />
                  <span className="text">{subject}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-center m-auto w-full">
            <button
              type="submit"
              className="bg-blue-900 text-white rounded par w-1/2 p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-1 hover:border-blue-900 text-lg"
            >
              Send
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AdmissionForm;
