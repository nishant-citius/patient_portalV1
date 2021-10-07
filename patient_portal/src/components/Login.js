import { React, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import * as URLS from "../shared/url_list";

const Login = (props) => {
  const tempUser = {
    username: "",
    password: "",
  };

  let history = useHistory();
  const [user, setUser] = useState(tempUser);

  const handleUserChange = (e) => {
    const name = e.target.name,
      value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitUserData = (e) => {
    e.preventDefault();
    let newUserData = { ...user };
    onSubmit(newUserData);
  };

  const checkEmail = (serverUsers, formData) => {
    const user = serverUsers.find(
      (user) =>
        user.email === formData.username && user.password === formData.password
    ); // extract the email from the formData
    if (user) return user;
  };

  const onSubmit = async (formData) => {
    const user = await axios
      .get(`${URLS.BASE_URL}/users`)
      .then((res) => checkEmail(res.data, formData));

    if (user) {
      console.log(user);
      if (user.role === "admin") {
        /**admin */
        history.push("/admin");
      } else if (user.role === "patient") {
        /**patient */
        history.push("/demographics");
      } else {
        /**physician */
        history.push("/physician");
      }

      const session = window.sessionStorage;
      session.setItem("userInfo", JSON.stringify(user));
    } else {
      alert("email doesnot exit");
    }
  };

  return (
    <>
      <div className="container">
        <h4 className="text-center">Login Page</h4>
        <div className="row justify-content-center">
          <div className="col-8"></div>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="user name">User Name</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={handleUserChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                Forgot username?
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleUserChange}
              />
              <small id="passwordHelp" className="form-text text-muted">
                Forgot password?
              </small>
            </div>
            <br />
            <div>
              <label className="form-check-label" htmlFor="Check1">
                Remember me
              </label>
              <input type="checkbox" className="form-check-input" id="Check1" />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitUserData}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
