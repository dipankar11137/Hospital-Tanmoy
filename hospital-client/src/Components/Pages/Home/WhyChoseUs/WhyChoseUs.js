import React from 'react';
import { FaMinus, FaUtensilSpoon } from 'react-icons/fa';

const WhyChoseUs = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/012/938/398/original/hospital-service-concept-design-template-with-white-glyph-icons-editable-flat-pictograms-on-abstract-background-with-blank-copy-space-illustration-for-ad-web-banner-business-presentation-vector.jpg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="py-20 px-24">
        <div className="flex items-center text-orange-600 text-xl font-semibold">
          <h1 className="mr-2">Why Choose Us</h1>
          <FaMinus />
          <FaUtensilSpoon className="rotate-45" />
        </div>
        <div>
          <h1 className="text-primary text-4xl mt-2 font-semibold">
            Patient Services
          </h1>
          <p className="w-6/12 font-meStyle text-md text-indigo-900">
            Working in healthcare allows individuals to make a meaningful
            difference in the lives of others. Whether it's providing direct
            patient care, conducting research to advance medical knowledge, or
            developing healthcare policies, every role in the healthcare
            industry contributes to improving health outcomes and enhancing
            quality of life
          </p>
        </div>
        <div className="grid grid-cols-3 gap-14  mt-3">
          <div className=" bg-white p-4 rounded-lg shadow-xl">
            <img
              src="https://www.peerlesshospital.com/images/info-png.webp"
              alt=""
            />
            <h1 className="text-2xl text-primary font-semibold">
              Patient Info
            </h1>
            <p className="text-[16px] w-full font-meStyle">
              Patient Guide, International Patient, Inpatient Payment, Reports
              Download, List of Empaneled Corporates and TPA.
            </p>
          </div>
          <div className=" bg-white p-4 rounded-lg shadow-xl">
            <img
              src="https://www.peerlesshospital.com/images/appointment-png.webp"
              alt=""
            />
            <h1 className="text-2xl text-primary font-semibold">
              Appointments
            </h1>
            <p className="text-[16px] w-full font-meStyle">
              Online Appointment, Appointment Request, Teleconsultation,
              Appointment by Phone.
            </p>
          </div>
          <div className=" bg-white p-4 rounded-lg shadow-xl">
            <img
              src="https://www.peerlesshospital.com/images/ambulance-ser-png.webp"
              alt=""
            />
            <h1 className="text-2xl text-primary font-semibold">
              24/7 Services
            </h1>
            <p className="text-[16px] w-full font-meStyle">
              Emergency and Trauma, Ambulance Service, Blood Centre, Laboratory,
              Radiology, Operation Theatre, Pharmacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;