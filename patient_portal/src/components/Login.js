import React from "react";

const Login = () => {
  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="login"
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

          {/* <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
