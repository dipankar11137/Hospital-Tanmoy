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

const Home = () => {
  const navigator=useNavigate()
  const handleClick = () => {
    navigator(`/appointment`);
  }
 const scrollToBottom = () => {
   window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
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
      <Contact/>
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
    </div>
  );
};

export default Home;
