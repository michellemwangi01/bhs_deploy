import React from "react";
import "../styles/services.css";
import Link from "next/link";

const OurServices = () => {
  return (
    <div className="flex flex-col m-auto my-10">
      <h1 className="h1-2"> Learning Services </h1>
      <div class="flex flex-wrap lg:flex-nowrap container justify-center align-middle m-auto">
        <div class="card" data-aos="flip-right">
          <div class="face face1">
            <div class="content">
              <img src="images/thinking.png" />
              <h3 className=" text-2xl par">Exam Prep</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p className="par text-xl">
                Exams are cool when youʼre ready to ace them! Our exam prep
                turns nervous into confident. Bring on the tests – weʼve got the
                secret sauce for success!
              </p>
              <Link href="/admissions" className="par">
                Start Prepping!
              </Link>
            </div>
          </div>
        </div>
        <div class="card" data-aos="flip-right">
          <div class="face face1">
            <div class="content">
              <img src="images/online-learning.png" />
              <h3 className="par">Online Classes</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p className="par text-xl">
                Dive into our interactive online classes! Each lesson is packed
                with fun and designed to make learning stick. Itʼs like a brain
                party, and youʼre the guest of honor!
              </p>
              <Link href="/admissions" className="par">
                Sign Up Now!
              </Link>
            </div>
          </div>
        </div>
        <div class="card" data-aos="flip-right">
          <div class="face face1">
            <div class="content">
              <img src="images/home.png" />
              <h3 className="par">Home Tutors</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p className="par text-xl">
                Our home tutors come to you, bringing a world of knowledge to
                your doorstep. Itʼs like having a learning superhero in your
                living room, ready to make you super smart!
              </p>
              <Link href="/admissions" className="par">
                Book a Tutor!
              </Link>
            </div>
          </div>
        </div>
        <div class="card" data-aos="flip-right">
          <div class="face face1">
            <div class="content">
              <img src="images/child.png" />
              <h3 className="par">Homework Help</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p className="par text-xl">
                Stuck on homework? Donʼt sweat it! Our homework helpers turn
                those huh? moments into aha! moments. Get ready to high-five
                because youʼve got this!
              </p>
              <Link href="/admissions" className="par">
                Get Help Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
