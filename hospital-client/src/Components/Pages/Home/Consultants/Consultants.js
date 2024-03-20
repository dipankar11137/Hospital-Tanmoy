import React, { useEffect, useState } from 'react';
import { FaMinus, FaUtensilSpoon } from 'react-icons/fa';

const Consultants = () => {
  const [doctors, setDoctors] = useState([1, 2, 3, 4])
  useEffect(() => {
    fetch(`http://localhost:5000/doctor`)
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, [doctors]);
  return (
    <div
      style={{
        backgroundImage:
          "url('https://www.asterhospitals.in/sites/default/files/2022-03/best-urology-hospital-in-hyderabad.jpg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
      className=" px-20 py-12"
    >
      <div className="flex items-center text-orange-600 text-xl font-semibold">
        <h1 className="mr-2">Doctors</h1>
        <FaMinus />
        <FaUtensilSpoon className="rotate-45" />
      </div>
      <div>
        <h1 className="font-semibold text-3xl mb-10 text-white">
          Our Consultants
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-12 mt-5">
        {doctors.slice(0,4).reverse().map(doctor => (
          <div className="text-center">
            <img
              className="h-64 w-64 rounded-full bg-slate-200"
              src={doctor?.img}
              alt={doctor?.name}
            />
            <h1 className="text-2xl font-semibold mt-2 text-orange-600">
              {doctor?.name}
            </h1>
            <p className="text-sm uppercase text-slate-50"> {doctor?.department}</p>
            <button className="btn btn-sm btn-warning mt-2">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consultants;