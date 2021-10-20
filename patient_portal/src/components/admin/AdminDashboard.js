import { React, useState, useEffect } from "react";
import "./admin.css";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import Notification from "../../shared/notification/Notification";

const AdminDashboard = (props) => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    setNotify({
      isOpen: true,
      message: `Login Successful..`,
      type: "success",
    });
  }, []);

  return (
    <>
      <h1 className="text-success text-center fw-bold ">Admin Dashboard</h1>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

const mapStatetoProps = (state) => {
  return {
    currentUser: state.login.loggedUserInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(actionCreator.Logout()),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(AdminDashboard);
