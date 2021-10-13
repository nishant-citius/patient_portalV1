import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
const Appointments = () => {
  return (
    <>
      <Link className="btn btn-warning" to="/admin">
        <BsFillArrowLeftSquareFill />
        <span className="m-2">Back</span>
      </Link>
      <h1 className="text-primary text-center fw-bold ">
        Appointments Details
      </h1>
    </>
  );
};

export default Appointments;
