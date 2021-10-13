import React from "react";
import { useHistory } from "react-router";
import "./admin.css";
import Sidebar from "./common/sidebar/Sidebar";

const AdminDashboard = (props) => {
  const history = useHistory();

  const logOutUser = () => {
    const session = window.sessionStorage;
    session.removeItem("userInfo");
    history.push("/");
  };

  return (
    <>
      <h1 className="text-success text-center fw-bold ">Admin Dashboard</h1>
      <div className="admin-sidebar mt-5">
        <Sidebar />
      </div>
      <button onClick={logOutUser} className="btn btn-primary float-end mr-4">
        Logout
      </button>

      {/* <div className="admin-sidebar mt-5">
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
      </div> */}
    </>
  );
};

export default AdminDashboard;
