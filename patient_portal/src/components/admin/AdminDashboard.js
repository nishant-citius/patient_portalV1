import { React } from "react";
import "./admin.css";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";

const AdminDashboard = (props) => {
  return (
    <>
      <h1 className="text-success text-center fw-bold ">Admin Dashboard</h1>
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
