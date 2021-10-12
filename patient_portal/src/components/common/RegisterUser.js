import { React, useState } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import axios from "axios";
import * as URLS from "../../services/url_list";
import { useHistory } from "react-router";

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
    blood_group: "",
    createdDate: Date(),
  };

  const [user, setUser] = useState(tempUser);
  let history = useHistory();

  const handleUserChange = (e) => {
    const name = e.target.name,
      value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitUserData = (e) => {
    e.preventDefault();
    let newUserData = { ...user };
    if (user.fName.length < 1) {
      alert("plse enter valid First name");
    }
    if (user.lName.length < 1) {
      alert("plse enter valid last name");
    }

    if (user.password !== user.rpassword) {
      alert("plse enter the same password");
    } else {
      onSubmit(newUserData);
    }
  };

  const checkEmail = (serverUsers, formData) => {
    const user = serverUsers.find((user) => user.email === formData.email); // extract the email from the formData
    if (user) return user;
  };

  const onSubmit = async (formData) => {
    const user = await axios
      .get(`${URLS.BASE_URL}/users`)
      .then((res) => checkEmail(res.data, formData));
    if (user) {
      alert("email alreday exists");
      // do whatever you want here with the existence user store.
    } else {
      props.addUserHandler(formData);
      history.push("/login");
    }
  };

  return (
    <>
      <section className="page_db">
        <div className="container pt-5">
          <div className="card shadow-lg p-10 mb-6 bg-white rounded">
            <div className="card-header fw-bold text-center fs-5">
              Registration Form
            </div>
            <div className="card-body">
              <form name="registration_form" onSubmit={submitUserData}>
                <div className="row justify-content-center">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="fName"
                        id="fName"
                        placeholder="Enter First name"
                        value={user.fName}
                        onChange={handleUserChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control "
                        name="lName"
                        id="lName"
                        placeholder="Enter Last Name"
                        value={user.lName}
                        onChange={handleUserChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Date Of Birth</label>
                      <input
                        type="date"
                        className="form-control"
                        name="dob"
                        id="dob"
                        placeholder="Enter Your Date Of Birth"
                        value={user.dob}
                        onChange={handleUserChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        id="username"
                        placeholder="Create Username"
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
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>Blood Group</label>
                      <input
                        type="text"
                        className="form-control"
                        id="blood_group"
                        name="blood_group"
                        placeholder="Enter Your Blood Group"
                        value={user.blood_group}
                        onChange={handleUserChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter Email Address"
                        value={user.email}
                        onChange={handleUserChange}
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
                        placeholder="Create Password"
                        value={user.password}
                        onChange={handleUserChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Retype-Password</label>
                      <input
                        type="password"
                        className="form-control "
                        id="rpassword"
                        name="rpassword"
                        placeholder="Repeat your Password"
                        value={user.rpassword}
                        onChange={handleUserChange}
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2 center">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
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
