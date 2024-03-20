import { format } from "date-fns";
import React, { useEffect, useState } from 'react';
import Footer from "../../../../Share/Footer";
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectDate }) => {
  const [counseling, setCounseling] = useState(null);
  const [department, setDepartment] = useState('')
  const [appointmentOptions,setAppointmentOptions]=useState([])

  const [departments, setDepartments] = useState('');

  
  const date = format(selectDate, 'PP', 'MMMM d');
  const today1 = new Date();
  const today = format(today1, 'PP', 'MMMM d');
  const day = format(selectDate, 'EEEE');
  // console.log(day);
  // test
  const isLongerDate = (date1, date2) => {
    const timestamp1 = new Date(date1).getTime();
    const timestamp2 = new Date(date2).getTime();

    return timestamp1 >= timestamp2;
  };

  const result = isLongerDate(date, today);
   useEffect(() => {
     fetch(`http://localhost:5000/doctor`)
       .then(res => res.json())
       .then(data => setDepartments(data));
   }, [departments]);
  
useEffect(() => {
  let url = `http://localhost:5000/appointments?date=${date}`;
  if (department) {
    url += `&department=${department}`;
  }
 
  fetch(url)
    .then(res => res.json())
    .then(data => setAppointmentOptions(data))
    .catch(error => console.error('Error fetching appointments:', error));
}, [date, department]);

 
  
  // useEffect(() => {
  //   fetch(`http://localhost:5000/doctorDepartment/${department}`)
  //     .then(res => res.json())
  //     .then(data => setDepartments(data));
  // }, [department])
  

console.log(departments);


  // test end
  // const {
  //   data: appointmentOptions = [],
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ['appointmentOptions', date],
  //   queryFn: () =>
  //     fetch(`http://localhost:5000/appointments?date=${date}`).then(res =>
    
  //       res.json()
  //     ),
  // });
  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <div>
      <section className="mt-6 mx-40 pb-20">
        {/* {today <= date ? <h1>Right</h1> : <h1>Wrong</h1>} */}
        <div className="-mt-12">
          {result ? (
            <p className="text-3xl  text-center mt-5 text-green-900 font-bold mb-6">
              Available Appointment on {day}, {format(selectDate, 'PP')}
            </p>
          ) : (
            <p className="text-3xl  text-center mt-5 text-green-900 font-bold mb-6">
              {day}, {format(selectDate, 'PP')} <br /> <br /> <br />
              <span className="text-red-600 ">
                This day is the day of the past. So we cannot take Appointment .
              </span>
            </p>
          )}
        </div>

        <div className="flex gap-5">
          <div>
            <select
              onChange={e => setDepartment(e.target.value)}
              name="department"
              className="select select-bordered select-info w-56 "
            >
              <option value="">All Departments</option>
              {[
                ...new Set(appointmentOptions.map(option => option.department)),
              ].map((department, i) => (
                <option value={department} key={i}>
                  {department}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              // onChange={e => setName(e.target.value)}
              name="department"
              className="select select-bordered select-info w-56 "
            >
              <option value="">Doctor Name</option>
              {appointmentOptions.map((option, i) => (
                <option value={option.name} key={i}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-36 mt-32">
            {appointmentOptions.map(option => (
              <AppointmentOption
                key={option._id}
                option={option}
                setCounseling={setCounseling}
                day={day}
              ></AppointmentOption>
            ))}
          </div>
        )}
        {counseling && (
          <BookingModal
            key={counseling?._id}
            counseling={counseling}
            selectDate={selectDate}
            setCounseling={setCounseling}
            // refetch={refetch}
          />
        )}
      </section>
      <Footer />
    </div>
  );
};

export default AvailableAppointment;
