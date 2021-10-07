import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Admin_dashboard = (props) => {
  const history = useHistory();

  const logOutUser = () => {
    const session = window.sessionStorage;
    session.removeItem("userInfo");
    history.push("/");
  };

  return (
    <>
      <button
        onClick={logOutUser}
        className="btn btn-primary btn-sm float-end m-2"
      >
        Logout
      </button>
      <Link className="btn btn-primary m-2" to="/patientlist">
        Patient List
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link className="btn btn-primary m-2" to="/patientdetails">
        Patient Details
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link className="btn btn-primary m-2" to="/physicianlist">
        Physician List
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link className="btn btn-primary m-2" to="/physiciandetails">
        Physician Details
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link className="btn btn-primary m-2" to="/userlist">
        User List
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link className="btn btn-primary m-2" to="/appointments">
        Appointments
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link className="btn btn-primary m-2" to="/immunizationdetails">
        Immunization Details
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
};

export default Admin_dashboard;
