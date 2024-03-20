import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import '../../../../CSS/BackgroundStyle.css';

const Contact = () => {
  const navigator = useNavigate();
  const handleClick = () => {
    navigator('/sentContact');
  };
  return (
    <div className="bg-slate-100 mt-40 shadow-lg">
      <div className=" mx-20 grid grid-cols-3 ">
        <div className="p-4 col-span-2">
          <h1 className="py-4 text-4xl font-bold">
            Can’t find your desired service? Let us know 24/6 in 16216.
          </h1>
          <div className="flex">
            {/* <button
              onClick={handleClick}
              className="buttonStyle py-4 px-8 hover:bg-pink-600 hover:text-white text-3xl rounded-xl border-4 border-pink-600 ml-72 mt-5"
            >
              Request To Contact
            </button> */}
            <button className="flex py-4 px-8 hover:bg-pink-600 hover:text-white text-3xl rounded-xl border-4 border-pink-600 ml-72 mt-5 ">
              <FaPhoneAlt className="mt-1" />
              <span className="ml">16216</span>
            </button>
          </div>
        </div>
        <div className="">
          <img
            style={{ marginTop: '-120px' }}
            className="h-96 cursor-pointer"
            src="https://www.thesteefogroup.com/wp-content/uploads/2021/11/contact_us.png"
            alt=""
          />
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
