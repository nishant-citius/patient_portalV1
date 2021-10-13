import { React, useState ,useEffect} from "react";
import axios from "axios";
import { useHistory } from "react-router";
import * as URLS from "../../services/url_list";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
// import imageSrc from "../../images/Healthcare.jpg";
import "../common/common_style.css";

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
    // props.loginHandler();
  };

  const checkEmail = (serverUsers, formData) => {
    const user = serverUsers.find(
      (user) =>
        user.email === formData.username && user.password === formData.password
    );
    if (user) return user;
  };

  const onSubmit = async (formData) => {
    const user = await axios
      .get(`${URLS.BASE_URL}/users`)
      .then((res) => checkEmail(res.data, formData));

    if (user) {
      isActive(user) ? logInUser(user) : alert("User Id created..");
    } else {
      alert("Email doesn't exist");
    }
  };

  const logInUser = (user) => {
    userSession(user);
    if (user.role === "admin") {
      history.push("/admin");
    } else if (user.role === "patient") {
      history.push("/demographics");
    } else {
      history.push("/physician");
    }
  };

  const userSession = (user) => {
    const session = window.sessionStorage;
    session.setItem("userInfo", JSON.stringify(user));
  };

  const isActive = (user) => (user.isActive ? true : false);

  return (
    <>
      <div className="container-fluid page_db">
        <div className="row justify-content-center">
          {/* <div className="col-7">
            <img className="login_img" src={imageSrc}/>
          </div> */}
          <div className="col-5">
            <div className="card shadow-lg p-10 mb-6 bg-white rounded mt-5">
              <div className="card-header fw-bold">Login form</div>
              <div className="card-body">
                <form className="login-form">
                  <div className="form-group">
                    <label htmlFor="user name">User Name</label>
                    <input
                      type="email"
                      className="form-control"
                      name="username"
                      placeholder="Please enter your Email id"
                      onChange={handleUserChange}
                    />
                  </div>

                  <div className="form-group mt-4">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Please enter password"
                      name="password"
                      onChange={handleUserChange}
                    />
                  </div>
                  <br />
                  {/* <div>
                <label className="form-check-label " htmlFor="Check1">
                  Remember me
                </label>
                <input
                  type="checkbox"
                  className="form-check-input l-2"
                  id="Check1"
                />
              </div> */}
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={submitUserData}
                  >
                    Login
                  </button>
                  {/* <a className="btn btn-secondary m-2" href="/forgotpassword">
                forgot password
              </a>
              <a className="btn btn-secondary " href="/forgotusername">
                forgot username
              </a> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStatetoProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
        role: state.login.role,
        globalmessage: state.login.globalmessage,
        authToken: state.login.authToken,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(actionCreator.Login(user)),
  };
};

let hof = connect(mapStatetoProps, mapDispatchToProps);
export default hof (Login);
