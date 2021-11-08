import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { useHistory } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Grid, Paper, Avatar, TextField } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const RegisterUser = (props) => {
  let history = useHistory();

  const initialValues = {
    fName: "",
    lName: "",
    dob: "",
    username: "",
    email: "",
    mobile: "",
    role: "patient",
    password: "",
    rpassword: "",
    blood_group: "",
    createdDate: Date(),
    isActive: false,
  };

  const validationSchema = Yup.object().shape({
    fName: Yup.string().required("Required"),
    lName: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    email: Yup.string().email("Please enter valid email").required("Required"),
    password: Yup.string()
      .required("This field is required")
      .min(4, "Password should be of minimum 4 characters length"),
    rpassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
    mobile: Yup.string()
      .required("Required")
      .min(10, "Phone number required 10 digit")
      .max(12, "Phone number required 12 digit"),
    blood_group: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    const payload = {
      fName: values.fName,
      lName: values.lName,
      dob: values.dob,
      username: values.username,
      email: values.email,
      education: values.education,
      password: values.password,
      rpassword: values.rpassword,
      mobile: values.mobile,
      blood_group: values.blood_group,
      role: "patient",
      createdDate: Date(),
      isActive: false,
    };
    props.register(payload);
  };

  useEffect(() => {
    if (props.statusCode === 200) {
      props.flashNotification({
        message: "Registration Succeessful...",
        type: "success",
      });
      history.push("/login");
    }
  });

  const paperStyle = {
    padding: 20,
    height: "",
    width: 400,
    margin: "60px auto",
    marginTop: "110px",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOpenIcon />
          </Avatar>
          <br />
          <h4>Registration</h4>
          <br />
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                margin="normal"
                label="First Name"
                placeholder="enter first name"
                fullWidth
                name="fName"
                id="fName"
                variant="filled"
                helperText={<ErrorMessage name="fName" />}
              />
              <Field
                as={TextField}
                margin="normal"
                label="Last Name"
                placeholder="enter last name"
                fullWidth
                name="lName"
                id="lName"
                variant="filled"
                helperText={<ErrorMessage name="lName" />}
              />
              <Field
                as={TextField}
                margin="normal"
                label="D.O.B"
                type="date"
                className="pt_10"
                fullWidth
                name="dob"
                id="dob"
                variant="filled"
                helperText={<ErrorMessage name="dob" />}
              />
              <Field
                as={TextField}
                margin="normal"
                type="text"
                label="UserName"
                placeholder="enter username"
                fullWidth
                name="username"
                id="username"
                variant="filled"
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                margin="normal"
                label="Role"
                fullWidth
                name="role"
                id="role"
                defaultValue="Patient"
                variant="filled"
                disabled
              />
              <Field
                as={TextField}
                margin="normal"
                type="number"
                label="Mobile"
                placeholder="enter mobile no"
                fullWidth
                name="mobile"
                id="mobile"
                variant="filled"
                helperText={<ErrorMessage name="mobile" />}
              />
              <Field
                as={TextField}
                margin="normal"
                placeholder="Enter Blood Group"
                fullWidth
                name="blood_group"
                id="blood_group"
                label="Blood Group"
                variant="filled"
                helperText={<ErrorMessage name="blood_group" />}
              />
              <Field
                as={TextField}
                margin="normal"
                type="text"
                label="Email"
                placeholder="enter email"
                fullWidth
                name="email"
                id="email"
                variant="filled"
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                margin="normal"
                type="password"
                label="Password"
                placeholder="enter password"
                fullWidth
                name="password"
                id="password"
                variant="filled"
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                margin="normal"
                type="password"
                label="Confirm password"
                placeholder="enter rpassword"
                fullWidth
                name="rpassword"
                id="rpassword"
                variant="filled"
                helperText={<ErrorMessage name="rpassword" />}
              />
              <div>
                <button type="submit" className="btn btn-primary mt-2 center">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <h4 className="text-danger">{props.globalMessage}</h4>
      </Paper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    globalMessage: state.register.globalmessage,
    statusCode: state.register.statusCode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (newuser) => dispatch(actionCreator.Register(newuser)),
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(RegisterUser);
