import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./admin.css";

const AdminDashboard = (props) => {
  const history = useHistory();

  const logOutUser = () => {
    const session = window.sessionStorage;
    session.removeItem("userInfo");
    history.push("/");
  };

  return (
    <>
      <button onClick={logOutUser} className="btn btn-primary float-end">
        Logout
      </button>

      <div className="admin-sidebar border border-primary mt-5">
        <ul className="no-list-style">
          <li>
            <Link className="btn btn-primary m-2" to="/patientlist">
              Manage Patient Records
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary m-2" to="/physicianlist">
              Manage Physician Records
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary m-2" to="/appointments">
              Manage Appointments
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary m-2" to="/immunizationdetails">
              Immunization Details
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary m-2" to="/immunizationdetails">
              Billing
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminDashboard;
