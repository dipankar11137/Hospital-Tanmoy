import React from 'react';
import { FaMinus, FaPhoneAlt, FaUtensilSpoon } from 'react-icons/fa';

const Facilities = () => {
  return (
    <div className="p-20 ">
      <div className="grid grid-cols-2 gap-10 ">
        <div>
          <div className="flex items-center text-orange-600 text-xl font-semibold">
            <h1 className="mr-2">International Patient</h1>
            <FaMinus />
            <FaUtensilSpoon className="rotate-45" />
          </div>
          <div>
            <h1 className="text-3xl text-primary font-semibold">
              Facilities for International <br /> Patients
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-4 text-center mx-5">
            {/* mini cart */}
            <div className="bg-gradient-to-r from-slate-50 to-cyan-50 hover:to-white p-4 rounded-md gap-3 shadow-xl hover:shadow-2xl border-[1px] border-white hover:border-orange-700 cursor-pointer">
              <div className="flex justify-center">
                <img
                  className="h-14 mb-2 "
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_hsptl.svg"
                  alt=""
                />
              </div>
              <h1 className="text-indigo-900  font-semibold">Hospitals</h1>
            </div>
            <div className="bg-gradient-to-r from-slate-50 to-cyan-50 hover:to-white p-4 rounded-md gap-3 shadow-xl hover:shadow-2xl border-[1px] border-white hover:border-orange-700 cursor-pointer">
              <div className="flex justify-center">
                <img
                  className="h-14 mb-2 "
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_speciality.svg"
                  alt=""
                />
              </div>
              <h1 className="text-indigo-900  font-semibold">Speciality</h1>
            </div>
            <div className="bg-gradient-to-r from-slate-50 to-cyan-50 hover:to-white p-4 rounded-md gap-3 shadow-xl hover:shadow-2xl border-[1px] border-white hover:border-orange-700 cursor-pointer">
              <div className="flex justify-center">
                <img
                  className="h-14 mb-2 "
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_planyourtrip.svg"
                  alt=""
                />
              </div>
              <h1 className="text-indigo-900  font-semibold">Plan Your Trip</h1>
            </div>
            <div className="bg-gradient-to-r from-slate-50 to-cyan-50 hover:to-white p-4 rounded-md gap-3 shadow-xl hover:shadow-2xl border-[1px] border-white hover:border-orange-700 cursor-pointer">
              <div className="flex justify-center">
                <img
                  className="h-14 mb-2 "
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_testimonials.svg"
                  alt=""
                />
              </div>
              <h1 className="text-indigo-900  font-semibold">Testimonials</h1>
            </div>
            <div className="bg-gradient-to-r from-slate-50 to-cyan-50 hover:to-white p-4 rounded-md gap-3 shadow-xl hover:shadow-2xl border-[1px] border-white hover:border-orange-700 cursor-pointer">
              <div className="flex justify-center">
                <img
                  className="h-14 mb-2 "
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_faq.svg"
                  alt=""
                />
              </div>
              <h1 className="text-indigo-900  font-semibold">FAQ's</h1>
            </div>
            <div className="bg-gradient-to-r from-slate-50 to-cyan-50 hover:to-white p-4 rounded-md gap-3 shadow-xl hover:shadow-2xl border-[1px] border-white hover:border-orange-700 cursor-pointer">
              <div className="flex justify-center">
                <img
                  className="h-14 mb-2 "
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_doctor.svg"
                  alt=""
                />
              </div>
              <h1 className="text-indigo-900  font-semibold">Find a Doctor</h1>
            </div>
            <div className="bg-gradient-to-r from-slate-50 to-cyan-50 hover:to-white p-4 rounded-md gap-3 shadow-xl hover:shadow-2xl border-[1px] border-white hover:border-orange-700 cursor-pointer">
              <div className="flex justify-center">
                <img
                  className="h-14 mb-2 "
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_onlineconsultation.svg"
                  alt=""
                />
              </div>
              <h1 className="text-indigo-900  font-semibold">
                Online Consultation
              </h1>
            </div>
            <div className="bg-gradient-to-r from-slate-50 to-cyan-50 hover:to-white p-4 rounded-md gap-3 shadow-xl hover:shadow-2xl border-[1px] border-white hover:border-orange-700 cursor-pointer">
              <div className="flex justify-center">
                <img
                  className="h-14 mb-2 "
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_Apollo%20Insurance.svg"
                  alt=""
                />
              </div>
              <h1 className="text-indigo-900  font-semibold">Insurance</h1>
            </div>
            <div className="bg-gradient-to-r from-slate-50 to-cyan-50 hover:to-white p-4 rounded-md gap-3 shadow-xl hover:shadow-2xl border-[1px] border-white hover:border-orange-700 cursor-pointer">
              <div className="flex justify-center">
                <img
                  className="h-14 mb-2 "
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_visa.svg"
                  alt=""
                />
              </div>
              <h1 className="text-indigo-900  font-semibold">Visa</h1>
            </div>
          </div>
          <div className="mt-10 px-4 py-6 mx-6 text-2xl border-[2px] border-primary rounded-lg hover:cursor-pointer hover:bg-gradient-to-r from-primary to-cyan-500 hover:text-white text-primary">
            <h1 className="flex items-center">
              International Number
              <span className="flex items-center ml-7 font-semibold">
                <FaPhoneAlt  className='mr-3 '/>
                +8801758469851
              </span>
            </h1>
          </div>
        </div>
        <div>
          <img
            src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/ips_ah.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Facilities;