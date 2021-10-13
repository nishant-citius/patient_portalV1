import { React, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { adminService } from "../../../services/register_user_service";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const AddUsers = () => {
  return (
    <div className="container py-4 border border-3 border-secondary rounded-3 mt-5">
      <Link className="btn btn-warning" to="/admin">
        <BsFillArrowLeftSquareFill />
        <span className="m-2">Back</span>
      </Link>
      <h3 className="text-success text-center fw-bold ">Add New User</h3>
      <div className="row justify-content-center">
        <div className="col-8">
          <form name="registration_form">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name="fName"
                id="fName"
                placeholder="Enter Your First name"
              />
            </div>
            <br />
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lName"
                id="lName"
                placeholder="Enter Your Last name"
              />
            </div>
            <br />
            <div className="form-group">
              <label>DOB</label>
              <input
                type="date"
                className="form-control"
                name="dob"
                id="dob"
                placeholder="Enter Your Dob"
              />
            </div>
            <br />
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                placeholder="Enter User Name"
              />
            </div>
            <br />
            <div className="form-group">
              <label>Role</label>
              <select className="form-control" name="role" id="role">
                <option value="">Select</option>
                <option value="admin">Admin</option>
                <option value="patient">Physician</option>
                <option value="physician">Lab Assistant</option>
                <option value="physician">Nurse</option>
              </select>
            </div>
            <br />
            <div className="form-group">
              <label>Role</label>
              <select className="form-control" name="role" id="role">
                <option value="">Select</option>
                <option value="admin">Admin</option>
                <option value="patient">Physician</option>
                <option value="physician">Lab Assistant</option>
                <option value="physician">Nurse</option>
              </select>
            </div>
            <br />
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
              />
            </div>
            <br />
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                name="mobile"
                id="mobile"
                placeholder="Enter Mobile Number"
              />
            </div>
            <br />
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary mt-4">
              Save Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;
