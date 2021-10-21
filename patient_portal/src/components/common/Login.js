import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./common_style.css";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import "../common/common_style.css";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { propTypes } from "react-bootstrap/esm/Image";
import Notification from "../../shared/notification/Notification";

const paperStyle = {
  padding: 20,
  height: "70vh",
  width: 280,
  margin: "60px auto",
  marginTop: "110px",
};
const avatarStyle = { backgroundColor: "#1bbd7e" };
const btnstyle = { margin: "8px 0" };

const Login = (props) => {
  // const tempUser = {
  //   email: "",
  //   password: "",
  // };

  const initialValues = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialValues);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter valid email").required("Required"),
    password: Yup.string("Enter your password")
      .required("Required")
      .min(4, "Password should be of minimum 4 characters length"),
  });
  const onSubmit = (values) => {
    //const { ...user } = props
    const payload = { email: values.email, password: values.password };
    //console.log(payload)
    //setUser(payload).then(() => setSubmitting(false))
    props.login(payload);
  };

  let history = useHistory();
  // const [user, setUser] = useState(tempUser);

  // const handleUserChange = (e) => {
  //   const name = e.target.name,
  //     value = e.target.value;
  //   setUser({ ...user, [name]: value });
  // };

  // const submitUserData = (e) => {
  //   e.preventDefault();
  //   let newUserData = { ...user };
  //   props.login(newUserData);
  // };

  useEffect(() => {
    if (props.isLoggedIn === true) {
      setNotify({
        isOpen: true,
        message: `Login Successful..`,
        type: "success",
      });
      if (props.role === "admin") {
        history.push("/admin");
      } else if (props.role === "patient") {
        history.push("/demographics");
      } else {
        history.push("/physician");
      }
    }
  });
  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <br />
            <h4>Sign In</h4>
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
                  label="Email"
                  margin="normal"
                  type="text"
                  name="email"
                  // onChange={handleUserChange}
                  placeholder="Enter email"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  helperText={<ErrorMessage name="email" />}
                />
                <Field
                  as={TextField}
                  label="password"
                  placeholder="Enter password"
                  type="password"
                  name="password"
                  // onChange={handleUserChange}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  helperText={<ErrorMessage name="password" />}
                />
                {/* <FormControlLabel
                        control={
                        <Checkbox
                        name="checkedB"
                        color="primary"
                      
                        />
                        }
                        label="Remember me"
                      /> */}

                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={btnstyle}
                  fullWidth
                >
                  Sign in
                </Button>
              </Form>
            )}
          </Formik>
          {/* <Typography >
                     <Link to="#" >
                       Forgot password ?
                     </Link>
                  </Typography> */}

          <Typography> Do you have an account ?</Typography>
         
          {/* <Link to ="/registeruser" >
                          Sign Up 
                      </Link> */}
          <a href="/registeruser">Sign Up</a>
        </Paper>
      </Grid>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

const mapStatetoProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    role: state.login.role,
    globalmessage: state.login.globalmessage,
    authToken: state.login.authToken,
    currentUser: state.login.loggedUserInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(actionCreator.Login(user)),
  };
};

let hof = connect(mapStatetoProps, mapDispatchToProps);
export default hof(Login);
