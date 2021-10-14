import React from "react";
import { useHistory } from "react-router";
import "./admin.css";
import Sidebar from "./common/sidebar/Sidebar";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";

const AdminDashboard = (props) => {
  const history = useHistory();

  function logOutUser() {
    props.logOut();
    history.push("/");
  }

  return (
    <>
      <h1 className="text-success text-center fw-bold ">Admin Dashboard</h1>
      <div className="admin-sidebar mt-5">
        <Sidebar userInfo={props.currentUser} />
      </div>
      <button onClick={logOutUser} className="btn btn-primary float-end mr-4">
        Logout
      </button>
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
