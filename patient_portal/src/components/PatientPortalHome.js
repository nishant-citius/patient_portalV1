import React from "react";
import { Link } from "react-router-dom";

const PatientPortalHome = () => {
  return (
    <>
      <h1 className="text-center text-primary">Patient Portal</h1>
      <Link to="/login" className="btn btn-primary btn-sm float-end m-2">
        Login
      </Link>
      <Link to="/register" className="btn btn-primary btn-sm float-end m-2">
        Register User
      </Link>
    </>
  );
};

export default PatientPortalHome;
