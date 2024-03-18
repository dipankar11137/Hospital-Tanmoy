import React from "react";

const AppointmentOption = ({ option, setCounseling, day }) => {
  const { name, slots } = option;
  const modifyDay = day.toLowerCase();
  return (
    <div className="card border-[1px] border-primary hover:border-orange-600 cursor-pointer bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="avatar">
          <div
            style={{ marginTop: '-100px' }}
            className="bg-white  mb-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
          >
            {option?.img ? (
              <img src={option?.img} alt="" />
            ) : (
              <img
                src="https://images.assetsdelivery.com/compings_v2/indomercy/indomercy1501/indomercy150100019.jpg"
                alt=""
              />
            )}
          </div>
        </div>

        <div>
          <h2 className="card-title font-bold">{name}</h2>
          <p className="text-[10px] my-1 font-normal">{option?.degree}</p>
        </div>

        {
         modifyDay==='friday' & option?.friday ||
         modifyDay==='saturday' & option?.saturday ||
         modifyDay==='sunday' & option?.sunday ||
         modifyDay==='monday' & option?.monday ||
         modifyDay==='tuesday' & option?.tuesday ||
         modifyDay==='wednesday' & option?.wednesday ||
         modifyDay==='thursday' & option?.thursday 
        ? (
          <>
            <h1 className="text-center text-sm text-indigo-800 font-bold">
              This Day is Off day
            </h1>
            <h1 className="text-red-500 text-sm font-bold text-center">
              Try Another Day
            </h1>
          </>
        ) : (
          <>
            {' '}
            <p className="text-sm font-bold text-blue-600 text-center">
              {slots.length > 0 ? (
                slots[0]
              ) : (
                <span className="text-red-500">Try Another Day</span>
              )}
            </p>
            <p className="text-xs text-green-900 font-semibold text-center">
              {slots.length} {slots.length > 1 ? 'spaces' : 'space'}
            </p>
          </>
        )}

        <div className="card-actions justify-center -mb-5">
          <label
            disabled={
              slots.length === 0 ||
              day === option?.day ||
              day === option?.day1 ||
              day === option?.day2 ||
              day === option?.day3
            }
            onClick={() => setCounseling(option)}
            htmlFor="booking-modal"
            className="btn btn-primary btn-sm  text-white font-bold"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
