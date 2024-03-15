import React from 'react';
import { FaMinus, FaUtensilSpoon } from 'react-icons/fa';

const SImpleProcess = () => {
  return (
    <div className="mt-10 mx-10">
      <div className="flex items-center text-orange-600 text-lg font-semibold">
        <h1 className="mr-2">Simple Process</h1>
        <FaMinus />
        <FaUtensilSpoon className="rotate-45" />
      </div>

      <h1 className="my-3 mb-5 text-3xl font-semibold uppercase text-primary">
        Helping You Stay Strong
      </h1>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-4 ">
          <img
            className="shadow-inner rounded-sm"
            src="https://png.pngtree.com/thumb_back/fw800/background/20220802/pngtree-happy-doctor-supporting-patient-at-home-checkup-house-call-doctor-photo-image_47663198.jpg"
            alt=""
          />
        </div>
        <div className=" col-span-8 flex gap-10">
          <div>
            <div className="relative">
              <img
                className="h-44 w-44"
                src="https://i0.wp.com/www.ratnatechnology.com/wp-content/uploads/2021/08/Appoinment-Booking.png?fit=540%2C625&ssl=1"
                alt=""
              />
              <h1 className="absolute z-30 bg-blue-600 -top-3 left-[145px] px-3 py-1 rounded-full font-semibold text-white text-xl">
                1
              </h1>
            </div>
            <h1 className="my-1 font-semibold text-center text-lg text-primary cursor-pointer">
              Online Appointment
            </h1>
            <p className="text-center">
              Access healthcare <br /> easily with our online <br /> booking.
            </p>
          </div>
          <div>
            <div className="relative">
              <img
                className="h-44 w-44"
                src="https://imagevars.gulfnews.com/2020/04/09/Tele-consult-_SM1200x628_1715f3f34d8_base.jpg"
                alt=""
              />
              <h1 className="absolute z-30 bg-blue-600 -top-3 left-[145px] px-3 py-1 rounded-full font-semibold text-white text-xl">
                2
              </h1>
            </div>
            <h1 className="my-1 text-lg font-semibold text-center text-primary cursor-pointer">
              Teleconsultation
            </h1>
            <p className="text-center">
              Consult securely with
              <br /> our healthcare
              <br /> experts online.
            </p>
          </div>
          <div>
            <div className="relative">
              <img
                className="h-44 w-44"
                src="https://don16obqbay2c.cloudfront.net/wp-content/themes/ecwid/images/payments/Hero.jpg"
                alt=""
              />
              <h1 className="absolute z-30 bg-blue-600 -top-3 left-[145px] px-3 py-1 rounded-full font-semibold text-white text-xl">
                3
              </h1>
            </div>
            <h1 className="my-1 text-lg font-semibold text-center text-primary cursor-pointer">
              Online Payment
            </h1>
            <p className="text-center">
              Simplify healthcare <br /> with online payments.
            </p>
          </div>
          <div>
            <div className="relative">
              <img
                className="h-44 w-44"
                src="https://www.peerlesshospital.com/images/reports-1.webp"
                alt=""
              />
              <h1 className="absolute z-30 bg-blue-600 -top-3 left-[145px] px-3 py-1 rounded-full font-semibold text-white text-xl">
                4
              </h1>
            </div>
            <h1 className="my-1 text-lg font-semibold text-center text-primary cursor-pointer">
              Reports Download
            </h1>
            <p className="text-center">
              Get your investigation <br /> reports with just one <br /> click.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <img
          src="https://www.datocms-assets.com/59249/1641412725-established-patients-banner.jpg?auto=format,compress&w=2200"
          alt=""
        />
      </div>
    </div>
  );
};

export default SImpleProcess;