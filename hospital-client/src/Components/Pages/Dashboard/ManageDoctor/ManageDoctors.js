import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ManageDoctor from './ManageDoctor';

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const navigator=useNavigate()
   useEffect(() => {
     fetch(`http://localhost:5000/doctor`)
       .then(res => res.json())
       .then(data => setDoctors(data));
   }, [doctors]);
  
  const handleDetails = id => {
    navigator(`/dashboard/editDoctor/${id}`);
  }
  return (
    <div className="mx-7">
      <div>
        <h1>Doctor</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table  w-full text-slate-900 border-[1px] rounded-lg">
          <thead>
            <tr className="text-3xl bg-slate-900 text-center ">
              <th className="bg-slate-300 text-[30px] text-orange-700"></th>
              <th className="bg-slate-300 text-[17px] text-orange-700">
                Doctor Name
              </th>
              <th className="bg-slate-300 text-[17px] text-orange-700">
                Department
              </th>

              <th className="bg-slate-300 text-[17px] text-orange-700">
                Email
              </th>
              <th className="bg-slate-300 text-[17px] text-orange-700">
                Phone
              </th>
              {/* <th className="bg-slate-300 text-[17px] text-orange-700">Off Days</th> */}
              <th className="bg-slate-300 text-[17px] text-orange-700">Edit</th>
              <th className="bg-slate-300 text-[17px] text-orange-700">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <ManageDoctor
                key={doctor._id}
                doctor={doctor}
                index={index + 1}
                // handleDelete={handleDelete}
                handleDetails={handleDetails}
              ></ManageDoctor>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;