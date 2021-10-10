import { React, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { adminService } from "../../../services/register_user_service";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const EditUser = () => {
  let tempUserData = {
    fName: "",
    lName: "",
    dob: "",
    username: "",
    email: "",
    mobile: "",
    role: "",
    password: "",
    rpassword: "",
    createdDate: Date(),
  };

  const [user, setUser] = useState(tempUserData);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    loadUsers(id);
  }, [id]);

  const loadUsers = (_id) => {
    adminService.getUserById(_id).then(
      (response) => {
        setUser(response.data[0]);
      },
      (error) => {
        return;
      }
    );
  };

  const submitNewUserData = (_id, userData) => {
    adminService.updateUser(_id, userData).then(
      (response) => {
        user.role === "patient"
          ? history.push("/patientlist")
          : history.push("/physicianlist");
      },
      (error) => {}
    );
  };

  const handleUserChange = (e) => {
    const name = e.target.name,
      value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitUserData = (e) => {
    e.preventDefault();
    let newUserData = { ...user };
    submitNewUserData(id, newUserData);
  };

  return (
    <div className="container py-4 border border-3 border-secondary rounded-3 mt-5">
      <Link className="btn btn-warning" to="/patientlist">
        <BsFillArrowLeftSquareFill />
        <span className="m-2">Back</span>
      </Link>
      <h3 className="text-success text-center fw-bold ">Edit Details</h3>
      <div className="row justify-content-center">
        <div className="col-8">
          <form name="registration_form" onSubmit={submitUserData}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name="fName"
                id="fName"
                placeholder="Enter Your First name"
                value={user.fName}
                onChange={handleUserChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lName"
                id="lName"
                placeholder="Enter Your Last name"
                value={user.lName}
                onChange={handleUserChange}
              />
            </div>
            <div className="form-group">
              <label>DOB</label>
              <input
                type="date"
                className="form-control"
                name="dob"
                id="dob"
                placeholder="Enter Your Dob"
                value={user.dob}
                onChange={handleUserChange}
              />
            </div>
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                placeholder="Enter User Name"
                value={user.username}
                onChange={handleUserChange}
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <select
                className="form-control"
                name="role"
                id="role"
                value={user.role}
                onChange={handleUserChange}
                disabled={true}
              >
                <option value="">Select</option>
                <option value="admin">Admin</option>
                <option value="patient">Patient</option>
                <option value="physician">Physician</option>
              </select>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                value={user.email}
                onChange={handleUserChange}
                disabled={true}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                name="mobile"
                id="mobile"
                placeholder="Enter Mobile Number"
                value={user.mobile}
                onChange={handleUserChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleUserChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Save Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
