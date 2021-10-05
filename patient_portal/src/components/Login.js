import { React, useState } from "react";

const Login = () => {
  const tempUser = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(tempUser);

  return (
    <>
      <div className="container">
        <h4 className="text-center">Login Page</h4>
        <div className="row justify-content-center">
          <div className="col-8"></div>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="user name">User Name</label>
              <input type="text" className="form-control" name="username" />
              <small id="emailHelp" className="form-text text-muted">
                Forgot username?
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="user name"
              />
              <small id="passwordHelp" className="form-text text-muted">
                Forgot password?
              </small>
            </div>
            <br />
            <div>
              <label class="form-check-label" htmlFor="Check1">
                Remember me
              </label>
              <input type="checkbox" className="form-check-input" id="Check1" />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
