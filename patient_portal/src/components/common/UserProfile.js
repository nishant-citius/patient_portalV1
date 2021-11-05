import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import EditDialog from "shared/dialog/EditDialog";
import * as actions from "../../redux/actions/userActionCreater";
import { adminService } from "../../services/register_user_service";

function UserProfile(props) {
  const [openPopup, setOpenPopup] = useState(false);
  const [specialities, setSpecialities] = useState([]);

  let tempUserData = {
    fName: "",
    lName: "",
    dob: "",
    username: "",
    email: "",
    mobile: "",
    role: "",
    speciality: "",
    password: "",
    createdDate: Date(),
  };

  const [user, setUser] = useState(tempUserData);

  useEffect(() => {
    setUser(props.currentUser);
    doctorSpeciality();
  }, [0]);

  function handleAdminNotification() {
    setOpenPopup(true);
  }

  const handleUserChange = (e) => {
    const name = e.target.name,
      value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitUserData = (e) => {
    e.preventDefault();
    let newUserData = { ...user, password: props.currentUser.rpassword };
    props.updateUser(props.currentUser.id, newUserData);
    props.getUserDetails(props.currentUser.id);
    setUser(props.userDetails);
    setOpenPopup(false);
  };

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

  const EDIT_JSX = (
    <div className="container py-4 mt-5">
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
                <option value={user.role}>{user.role.toUpperCase()}</option>
              </select>
            </div>
            <br />
            {user.role === "physician" ? (
              <div className="form-group">
                <label>Speciality</label>
                <select
                  className="form-control"
                  name="speciality"
                  id="speciality"
                  value={user.speciality}
                  onChange={handleUserChange}
                  disabled={true}
                >
                  <option value={user.speciality}>
                    {user.speciality.toUpperCase()}
                  </option>
                </select>
              </div>
            ) : (
              ""
            )}

            <br />
            <button type="submit" className="btn btn-primary mt-4">
              Save Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <h1>This is UserProile</h1>
      <div className="d-flex">
        <ul className="list-group w-50">
          <li className="list-group-item">
            <span className="fw-bold">Name:</span>
            {`${props.currentUser.fName}  ${props.currentUser.lName}`}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">DOB:</span>
            {props.currentUser.dob}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Email:</span>
            {props.currentUser.email}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Contact No:</span>
            {props.currentUser.mobile}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Username:</span>
            {props.currentUser.username}
          </li>
        </ul>
      </div>
      <br />
      <button
        onClick={() => handleAdminNotification()}
        className="btn btn-primary mt-4"
      >
        Edit User Details
      </button>
      <EditDialog
        title="Edit User Details"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        {EDIT_JSX}
      </EditDialog>
    </>
  );
}

const mapStatetoProps = (state) => {
  return {
    currentUser: state.login.loggedUserInfo,
    userDetails: state.userDetails.userDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (userId, updatedData) =>
      dispatch(actions.EditUser(userId, updatedData)),
    getUserDetails: (userId) => dispatch(actions.GetUserDetails(userId)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(UserProfile);
