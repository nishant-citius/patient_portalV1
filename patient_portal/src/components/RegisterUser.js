import { React, useState } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../redux/actions/userActionCreater";
import axios from "axios";

const RegisterUser = (props) => {
  let tempUser = {
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

  const [user, setUser] = useState(tempUser);

  const handleUserChange = (e) => {
    const name = e.target.name,
      value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitUserData = (e) => {
    e.preventDefault();
    let newUserData = { ...user };
    // props.addUserHandler(newUserData);
    // setUser(tempUser);

    onSubmit(newUserData);
  };

  const checkEmail = (serverUsers, formData) => {
    const user = serverUsers.find((user) => user.email === formData.email); // extract the email from the formData
    if (user) return user;
  };

  const onSubmit = async (formData) => {
    const user = await axios
      .get("http://localhost:9999/users")
      .then((res) => checkEmail(res.data, formData));
    if (user) {
      alert("email exists");
      // do whatever you want here with the existence user store.
    } else {
      props.addUserHandler(formData);
    }
  };

  return (
    <>
      <div className="container">
        <h4 className="text-center">Register Page</h4>
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
              <div className="form-group">
                <label>Retype-Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="rpassword"
                  name="rpassword"
                  placeholder="Password"
                  value={user.rpassword}
                  onChange={handleUserChange}
                />
              </div>
              <button type="submit" className="btn btn-primary m-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allusers: state.users.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserHandler: (newuser) => dispatch(actionCreator.AddUserAsync(newuser)),
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(RegisterUser);
