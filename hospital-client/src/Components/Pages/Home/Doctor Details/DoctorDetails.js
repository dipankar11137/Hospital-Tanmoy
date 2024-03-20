import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DoctorDetails = () => {
  const { id } = useParams()
  const [doctor, setDoctor] = useState({})
  useEffect(() => {
    fetch(`http://localhost:5000/doctor/${id}`)
      .then(res => res.json())
      .then(data => setDoctor(data));
  },[doctor,id])
  return (
    <div>
      <h1>{doctor?.name}</h1>
    </div>
  );
};

export default DoctorDetails;