import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

const ImmunizationDetails = () => {
  return (
    <>
      <Link className="btn btn-warning" to="/admin">
        <BsFillArrowLeftSquareFill />
        <span className="m-2">Back</span>
      </Link>
      <h1 className="text-primary text-center fw-bold ">
        Immunization Details
      </h1>
    </>
  );
};

export default ImmunizationDetails;
