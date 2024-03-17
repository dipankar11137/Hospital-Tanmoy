import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ selectDate, setSelectDate }) => {
  const today = new Date();
  const [showDate,setShowDate]=useState(false)
  const disabledDates = {
    before: today,
  };

  return (
    <div className="pt-20">
      <div className="">
        <div className="flex justify-end">
          <label
            htmlFor="my_modal_7"
            className="btn btn-sm text-white btn-primary mr-20"
          >
            Change Date
          </label>
        </div>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row-reverse gap-x-4">
              <div className="mr-20 font-bold">
                <div className="fixed ml-[290px] bg-red-500  px-[9px] py-[0px]  rounded-full cursor-pointer">
                  <label
                    htmlFor="my_modal_7"
                    className="modal-backdrop  font-robot text-2xl font-semibold text-white cursor-pointer"
                  >
                    x
                  </label>
                </div>
               
                {/* Pick This day */}
                <DayPicker
                  mode="single"
                  selected={selectDate}
                  onSelect={setSelectDate}
                  disabledDays={disabledDates}
                  className="bg-cyan-200  rounded-lg shadow p-2 "
                  inputProps={{ className: 'w-full rounded-lg ' }}
                  classNames={{
                    container: 'relative',
                    overlay: 'fixed inset-0 bg-black opacity-50',
                    month: 'text-center font-semibold  ',
                    weekdays: 'flex justify-center border-b ',
                    weekdaysRow: 'text-xs',
                    weekday: ' py-0',
                    body: ' text-center',
                    day: 'w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200',
                    today: 'bg-blue-500 text-white',
                    selected: 'bg-blue-200',
                    disabled: 'text-gray-400 cursor-not-allowed',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
