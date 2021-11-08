import { React, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../redux/actions/userActionCreater";
import { adminService } from "../../../services/register_user_service";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

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
    rpassword: "",
    speciality: "",
    createdDate: Date(),
    isActive: true,
  };

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
      rpassword: values.password,
      createdDate: Date(),
      isActive: true,
    };
    props.adduser(payload);
    props.getalluserdata();
    props.flashNotification({
      message: "New User Added Succeessfully..",
      type: "success",
    });
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
      <Link className="btn btn-warning" to="/admin">
        <BsFillArrowLeftSquareFill />
        <span className="m-2">Back</span>
      </Link>
      <h3 className="text-center fw-bold ">Add New User</h3>
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
    getalluserdata: () => dispatch(actions.GetAllUserData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUsers);
