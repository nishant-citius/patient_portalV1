import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import EditDialog from "shared/dialog/EditDialog";
import * as actions from "../../redux/actions/userActionCreater";
import { adminService } from "../../services/register_user_service";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Notification from "../../shared/notification/Notification";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function UserProfile(props) {
  const [openPopup, setOpenPopup] = useState(false);
  const [specialities, setSpecialities] = useState([]);
  const [detailFetched, setDetailsFetched] = useState(false);

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
    // if (props.userDetails) {
    //   // setUser(props.userDetails);
    //   console.log("Yes...", props.userDetails);
    // }
    // // doctorSpeciality();

    fetchUserDetails();
  });

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  function fetchUserDetails() {
    if (detailFetched) {
      return;
    } else {
      setUser(props.currentUser);
      setDetailsFetched(true);
    }
  }

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
    setOpenPopup(false);
    props.getUserDetails(props.currentUser.id);
    setUser(newUserData);
    setNotify({
      isOpen: true,
      message: `${newUserData.fName} ${newUserData.lName} profile updated Successfully...`,
      type: "success",
    });
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
      <br></br>
      <h5
        style={{ color: "#b7c1f7" }}
        className="text-success text-center fw-bold "
      >
        UPDATE PROFILE
      </h5>
      <br></br>
      <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="complex"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWU5Tv-gm4fwZdFgthv_z2a5sLSbdnGIJLw&usqp=CAU"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={4}>
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                  <span className="fw-bold"> Name : </span>
                  {`${user.fName}  ${user.lName}`}
                </Typography>
                <hr></hr>
                <Typography variant="body2" gutterBottom>
                  <span className="fw-bold">DOB : </span>
                  {user.dob}
                </Typography>
                <hr></hr>
                <Typography variant="body2" gutterBottom>
                  <span className="fw-bold">Email : </span>
                  {user.email}
                </Typography>
                <hr></hr>
                <Typography variant="body2" gutterBottom>
                  <span className="fw-bold">Contact No : </span>
                  {user.mobile}
                </Typography>
                <hr></hr>
                <Typography variant="body2" gutterBottom>
                  <span className="fw-bold">Username : </span>
                  {user.username}
                </Typography>
                <hr></hr>
                <Typography variant="subtitle1" component="div">
                  <button
                    onClick={() => handleAdminNotification()}
                    className="btn btn-primary mt-4"
                  >
                    Edit User Details
                  </button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <EditDialog
        title="Edit User Details"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        {EDIT_JSX}
      </EditDialog>
      <Notification notify={notify} setNotify={setNotify} />
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
