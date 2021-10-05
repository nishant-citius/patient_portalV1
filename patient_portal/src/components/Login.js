import { React, useState } from "react";
import axios from "axios";

const Login = () => {
  const tempUser = {
    username: "",
    password: "",
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
    const user = serverUsers.find((user) => ((user.email === formData.username)&&(user.password ==formData.password)) ); // extract the email from the formData
    if (user) return user;
  };

  const onSubmit = async (formData) => {
    const user = await axios
      .get("http://localhost:9999/users")
      .then((res) => checkEmail(res.data, formData));
    if (user) {
      console.log("User loged in")
      // do whatever you want here with the existence user store.
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
              <input type="text" className="form-control" name="username" onChange={handleUserChange} />
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
            <button type="submit" className="btn btn-primary" onClick={submitUserData}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
