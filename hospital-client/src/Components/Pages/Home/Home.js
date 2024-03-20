import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Share/Footer";
import Banner from "./Banner/Banner";
import Consultants from "./Consultants/Consultants";
import Contact from "./Contact/Contact";
import Facilities from "./Facilities/Facilities";
import Notice from "./Notice/Notice";
import SImpleProcess from "./SImpleProcess/SImpleProcess";
import Welcome from "./Welcome/Welcome";
import WhyChoseUs from "./WhyChoseUs/WhyChoseUs";

import { IoIosArrowDropupCircle } from 'react-icons/io';

const Home = () => {
  const navigator=useNavigate()
  const handleClick = () => {
    navigator(`/appointment`);
  }
 const scrollToBottom = () => {
   window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };
    const handleUpper = () => {
      const duration = 500; // Duration of the scroll animation in milliseconds
      const start = window.pageYOffset; // Initial scroll position
      const distance = -window.pageYOffset; // Distance to scroll (back to top)
      let startTime = null;

      // Define the step function for scroll animation
      const step = timestamp => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const easeInOutQuad = t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t); // Easing function

        window.scrollTo(
          0,
          start + distance * easeInOutQuad(Math.min(progress / duration, 1))
        );

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };
  return (
    <div className="bg-white pt-[66px] ">
      <Banner />
      <Notice />
      <SImpleProcess />
      <Welcome />
      <WhyChoseUs />
      <Facilities />
      <Consultants />
      <Contact />
      {/* <Appointment/> */}
      <Footer />

      <div className="fixed bottom-32 -right-0 z-50 -rotate-90">
        <button
          onClick={handleClick}
          className="btn btn-secondary font-normal text-white "
        >
          Book Appointment
        </button>
      </div>
      <div className="fixed bottom-32 -right-5 z-50 -rotate-90">
        <button
          onClick={scrollToBottom}
          className="btn btn-primary font-normal text-white "
        >
          Contact
        </button>
      </div>
      <div className="fixed z-50 right-3 bottom-3 md:right-4">
        <button
          onClick={handleUpper}
          className=" bg-primary flex justify-center items-center rounded-full"
        >
          <IoIosArrowDropupCircle className="text-5xl text-slate-50" />
        </button>
      </div>
    </div>
  );
};

export default Home;
