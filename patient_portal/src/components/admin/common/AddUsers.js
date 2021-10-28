import { React, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/userActionCreater";
import { adminService } from "../../../services/register_user_service";

const AddUsers = (props) => {
  let tempUser = {
    fName: "",
    lName: "",
    dob: "",
    username: "",
    email: "",
    mobile: "",
    role: "",
    password: "",
    speciality: "",
    createdDate: Date(),
    isActive: true,
  };

  const [user, setUser] = useState(tempUser);
  const [specialities, setSpecialities] = useState([]);

  let history = useHistory();

  const handleUserChange = (e) => {
    const name = e.target.name,
      value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitUserData = (e) => {
    e.preventDefault();
    let newUserData = { ...user };
    props.adduser(newUserData);
    history.push("/allusers");
  };

  useEffect(() => {
    if (props.isLoggedIn) {
      doctorSpeciality();
    }
  }, [0]);

  function doctorSpeciality() {
    adminService.getDoctorSpeciality().then(
      (response) => {
        setSpecialities(response.data);
      },
      (error) => {
        return;
      }
    );
  }

  return (
    <div className="container py-4 border-secondary  mt-5">
      {/* <Link className="btn btn-warning" to="/admin">
        <BsFillArrowLeftSquareFill />
        <span className="m-2">Back</span>
      </Link> */}
      <h3 className="text-success text-center fw-bold ">Add New User</h3>
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
                onChange={handleUserChange}
                value={user.fName}
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
                onChange={handleUserChange}
                value={user.lName}
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
                onChange={handleUserChange}
                value={user.dob}
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
                onChange={handleUserChange}
                value={user.username}
              />
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
                onChange={handleUserChange}
                value={user.email}
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
                onChange={handleUserChange}
                value={user.mobile}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Role</label>
              <select
                className="form-control"
                name="role"
                id="role"
                onChange={handleUserChange}
                value={user.role}
              >
                <option value="">Select</option>
                <option value="admin">Admin</option>
                <option value="physician">Physician</option>
                <option value="nurse">Nurse</option>
              </select>
            </div>
            <br />
            {user.role === "physician" ? (
              <>
                <div className="form-group">
                  <label>Speciality</label>
                  <select
                    className="form-control"
                    name="speciality"
                    id="speciality"
                    onChange={handleUserChange}
                    placeholder="Enter Speciality"
                    value={user.speciality}
                  >
                    <option value="">Select</option>
                    {specialities.map((specility) => (
                      <option value={specility.value}>{specility.name}</option>
                    ))}
                  </select>
                </div>
                <br />
              </>
            ) : (
              ""
            )}

            <br />
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleUserChange}
                value={user.password}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary mt-4">
              Save Details
            </button>
          </form>
          {/* <span>{props.globalmessage}</span> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (rootReducer) => {
  return {
    globalmessage: rootReducer.adduser.globalmessage,
    status: rootReducer.adduser.statusCode,
    isLoggedIn: rootReducer.login.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adduser: (userinfo) => dispatch(actions.AddNewUser(userinfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUsers);
