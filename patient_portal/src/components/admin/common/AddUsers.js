import { React, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/userActionCreater";
import { adminService } from "../../../services/register_user_service";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddUsers = (props) => {
  const initialValues = {
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

  const [user, setUser] = useState(initialValues);
  const [specialities, setSpecialities] = useState([]);

  let history = useHistory();

  const validationSchema = Yup.object().shape({
    fName: Yup.string().required("Required"),
    lName: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    email: Yup.string().email("Please enter valid email").required("Required"),
    password: Yup.string()
      .required("This field is required")
      .min(4, "Password should be of minimum 4 characters length"),
    mobile: Yup.string()
      .required("Required")
      .min(10, "Phone number required 10 digit")
      .max(12, "Phone number required 12 digit"),
  });

  const onSubmit = (values) => {
    const payload = {
      fName: values.fName,
      lName: values.lName,
      dob: values.dob,
      username: values.username,
      email: values.email,
      password: values.password,
      mobile: values.mobile,
      role: values.role,
      speciality: values.speciality,
      createdDate: Date(),
      isActive: false,
    };
    props.adduser(payload);

    history.push("/allusers");
  };

  // const handleUserChange = (e) => {
  //   const name = e.target.name,
  //     value = e.target.value;
  //   setUser({ ...user, [name]: value });
  // };

  // const submitUserData = (e) => {
  //   e.preventDefault();
  //   let newUserData = { ...user };
  //   props.adduser(newUserData);
  //   history.push("/allusers");
  // };

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
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            enableReinitialize
          >
            {(props) => (
              <Form>
                <div className="form-group">
                  <label>First Name</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="fName"
                    id="fName"
                    placeholder="Enter Your First name"
                  />
                  <div className="error">
                    <ErrorMessage name="fName" />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <label>Last Name</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="lName"
                    id="lName"
                    placeholder="Enter Your Last name"
                  />
                  <div className="error">
                    <ErrorMessage name="lName" />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <label>DOB</label>
                  <Field
                    type="date"
                    className="form-control"
                    name="dob"
                    id="dob"
                    placeholder="Enter Your Dob"
                  />
                  <div className="error">
                    <ErrorMessage name="dob" />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <label>User Name</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="username"
                    id="username"
                    placeholder="Enter User Name"
                  />
                  <div className="error">
                    <ErrorMessage name="username" />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <label>Email</label>
                  <Field
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                  />
                  <div className="error">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <label>Phone</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="mobile"
                    id="mobile"
                    placeholder="Enter Mobile Number"
                  />
                  <div className="error">
                    <ErrorMessage name="mobile" />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <label>Role</label>
                  <Field
                    as="select"
                    className="form-control"
                    name="role"
                    id="role"
                  >
                    <option value="">Select</option>
                    <option value="admin">Admin</option>
                    <option value="physician">Physician</option>
                    <option value="nurse">Nurse</option>
                  </Field>
                </div>
                <br />
                {props.values.role === "physician" ? (
                  <>
                    <div className="form-group">
                      <label>Speciality</label>
                      <Field
                        as="select"
                        className="form-control"
                        name="speciality"
                        id="speciality"
                      >
                        <option value="">Select</option>
                        {specialities.map((specility) => (
                          <option value={specility.value}>
                            {specility.name}
                          </option>
                        ))}
                      </Field>
                      {/* <div className="error">
                        <ErrorMessage name="speciality" />
                      </div> */}
                    </div>
                    <br />
                  </>
                ) : (
                  ""
                )}
                <div className="form-group">
                  <label>Password</label>
                  <Field
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                  <div className="error">
                    <ErrorMessage name="password" />
                  </div>
                </div>
                <br />
                <button type="submit" className="btn btn-primary mt-4">
                  Save Details
                </button>
              </Form>
            )}
          </Formik>
          {/* <form name="registration_form" onSubmit={submitUserData}>
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
          </form> */}

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
    getAllUsers: () => dispatch(actions.GetAllUserData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUsers);
