import React from 'react';
import { FaEdit } from 'react-icons/fa';

const ManageDoctor = ({ doctor, index, handleDelete, handleDetails }) => {
  return (
    <tr className="text-center">
      <th className="">{index}</th>
      <td className=" ">{doctor?.name}</td>
      <td className=" ">{doctor?.department}</td>
      <td className=" ">{doctor?.email}</td>
      <td className=" ">{doctor?.phone}</td>
      {/* <td className=" "><h1>off days</h1></td> */}
      <td className=" ">
        <button onClick={() => handleDetails(doctor?._id)}>
          <FaEdit />
        </button>
      </td>

      <td className=" ">
        <button
          onClick={() => handleDelete(doctor?._id)}
          className="btn btn-xs rounded-md uppercase text-white font-semibold  "
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default ManageDoctor;