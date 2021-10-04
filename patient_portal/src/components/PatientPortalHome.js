import React from "react";
import { Link } from "react-router-dom";

const PatientPortalHome = () => {
  return (
    <>
      <Link to="/login" className="btn btn-primary">
        Login
      </Link>
      <Link to="/register" className="btn btn-primary">
        Register User
      </Link>
    </>
  );
};

export default PatientPortalHome;
